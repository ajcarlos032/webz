import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Ripple from 'react-native-material-ripple'

import { useSelector } from 'react-redux'
import { facilitiesSelector } from '@store/Office/Select'

import I18nContext from '@root/i18n/I18nContext'
import OfficeContext from '@screens/Offices/officeContext'
import FilterModal from './filterModal'

import { ANYTIME_VALUE, getStrTimeDiffStr } from '@components/DatePicker/utils'

import styles from './styles'

const dropdownIconInActive = require('@assets/icons/ic_arrow_down_inactive.png')
const dropdownIconActive = require('@assets/icons/ic_arrow_down_active.png')
const clearIcon = require('@assets/icons/ic_close_circle.png')

const TimeFacilities = ({ onChange, onClear }) => {
  const { t } = useContext(I18nContext)
  const filterModal = useRef(null)

  const roomFacilities = useSelector(facilitiesSelector)

  const [facilitiesStr, setFacilitiesStr] = useState('')

  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    setSelectedTypes,
    setSeats,
    facilities,
    setFacilities,
  } = useContext(OfficeContext)

  const timeDiff = useMemo(() => getStrTimeDiffStr(startTime, endTime), [startTime, endTime])

  const onConfirm = useCallback(() => {
    let facilityString = ''
    facilityString += timeDiff ?? facilityString

    roomFacilities.forEach(({ id, name }) => {
      if (facilities.includes(id)) {
        facilityString += `${facilityString && ' | '}${name}`
      }
    })

    setFacilitiesStr(facilityString)

    onChange()

    filterModal.current?.close()
  }, [timeDiff, roomFacilities, facilities, onChange])

  const _onClear = useCallback(() => {
    setStartTime(ANYTIME_VALUE)
    setEndTime(ANYTIME_VALUE)
    setSelectedTypes([])
    setSeats(1)
    setFacilities([])
    setFacilitiesStr('')

    onClear()
  }, [setEndTime, setFacilities, setSeats, setSelectedTypes, setStartTime, onClear])

  return (
    <View style={styles.container}>
      <View style={styles.timeFacilityButtonContainer}>
        <TouchableOpacity
          style={styles.timeFacilityButton}
          activeOpacity={0.5}
          onPress={() => filterModal.current?.open()}
        >
          <Text style={[styles.timeFacilities, facilitiesStr && styles.timeFacilitiesActive]}>
            {facilitiesStr || t('home.timeFacilities')}
          </Text>
          <Image
            source={facilitiesStr ? dropdownIconActive : dropdownIconInActive}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>
      {!!facilitiesStr && (
        <Ripple style={styles.clearTimeFacilitiesContainer} rippleDuration={300} onPress={_onClear}>
          <Image source={clearIcon} style={styles.clearIcon} />
        </Ripple>
      )}
      <FilterModal ref={filterModal} onClear={_onClear} onConfirm={onConfirm} />
    </View>
  )
}

TimeFacilities.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

TimeFacilities.defaultProps = {}

export default TimeFacilities
