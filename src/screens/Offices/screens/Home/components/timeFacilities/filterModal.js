import React, { useCallback, useContext, useEffect, useRef, useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { Portal } from 'react-native-portalize'
import { Modalize } from 'react-native-modalize'
import { useSelector } from 'react-redux'
import moment from 'moment'

import I18nContext from '@root/i18n/I18nContext'
import { configSelector } from '@store/Config/Select'

import { useCombinedRefs } from '@helpers/useCombinedRefs'
import OfficeContext from '@screens/Offices/officeContext'

import TimePicker from './components/timePicker'
import OfficeTypes from './components/officeTypes'
import Seats from './components/seats'
import Facilities from './components/facilities'
import Buttons from './components/buttons'

import { snappedTimeRange } from '@screens/Offices/shared/utils'
import { ANYTIME_VALUE, getStrTimeDiffStr } from '@components/DatePicker/utils'

import styles from './styles'

const FilterModal = forwardRef(({ onClear, onConfirm }, ref) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const modalizeRef = useRef(null)
  const combinedRef = useCombinedRefs(ref, modalizeRef)

  const [start, setStart] = useState(ANYTIME_VALUE)
  const [end, setEnd] = useState(ANYTIME_VALUE)
  const [timeDiff, setTimeDiff] = useState(null)

  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    selectedTypes,
    setSelectedTypes,
    seats,
    setSeats,
    facilities,
    setFacilities,
  } = useContext(OfficeContext)

  useEffect(() => {
    if (startTime === ANYTIME_VALUE || endTime === ANYTIME_VALUE) {
      const { start: _start, end: _end } = snappedTimeRange(moment().format('YYYY-MM-DD HH:mm:ss'))
      setStart(_start)
      setEnd(_end)
    } else {
      setStart(startTime)
      setEnd(endTime)
    }
  }, [endTime, startTime])

  useEffect(() => {
    setTimeDiff(getStrTimeDiffStr(start, end))
  }, [start, end])

  const changeOfficeTypes = useCallback(
    (type) => {
      const hasSelected = selectedTypes.includes(type)
      let newTypes = [...selectedTypes]
      if (hasSelected) {
        newTypes = newTypes.filter((_type) => _type !== type)
      } else {
        newTypes.push(type)
      }

      setSelectedTypes(newTypes)
      return true
    },
    [selectedTypes, setSelectedTypes],
  )

  const _onConfirm = useCallback(() => {
    setStartTime(start)
    setEndTime(end)
    onConfirm()
  }, [end, onConfirm, setEndTime, setStartTime, start])

  return (
    <Portal>
      <Modalize
        ref={combinedRef}
        modalStyle={styles.filterModal}
        adjustToContentHeight
        childrenStyle={styles.filterContainer}
        handleStyle={styles.handle}
        closeOnOverlayTap={false}
      >
        <TimePicker
          startTime={start}
          endTime={end}
          setStartTime={setStart}
          setEndTime={setEnd}
          timeDiff={timeDiff}
        />
        <ScrollView style={styles.filterInnerScrollView}>
          <OfficeTypes
            title={t('home.type')}
            selectedTypes={selectedTypes}
            onSelect={changeOfficeTypes}
          />
          <Seats title={t('home.numberOfChairs')} seats={seats} onChange={setSeats} />
          <Facilities facilities={facilities} onChange={setFacilities} />
        </ScrollView>

        <Buttons isRTL={isRTL} variants={10} onClear={onClear} onConfirm={_onConfirm} />
      </Modalize>
    </Portal>
  )
})

FilterModal.propTypes = {
  onClear: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

FilterModal.defaultProps = {}

export default FilterModal
