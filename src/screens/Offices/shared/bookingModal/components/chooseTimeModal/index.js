import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity, View } from 'react-native'
import moment from 'moment'

import Modal from '@components/Modal'
import PrimaryButton from '@components/Buttons/primaryButton'

import TimePicker from './timePicker'

import I18nContext from '@root/i18n/I18nContext'

import { formatDateTimeFromStr } from '@screens/Offices/screens/shared/utils'
import { MIN_BOOKING_TIME } from '@screens/Offices/shared/utils/constants'
import { getTimeDiffMin } from '@components/DatePicker/utils'

import styles from './styles'

const closeIcon = require('@assets/icons/ic_close.png')

const ChooseTimeModal = ({ availableAt, date, startTime, endTime, onSelect, onClose }) => {
  const { t } = useContext(I18nContext)
  const [sTime, setSTime] = useState(startTime)
  const [eTime, setETime] = useState(endTime)
  const [errorStart, setErrorStart] = useState(false)
  const [errorEnd, setErrorEnd] = useState(false)

  const { start, end } = useMemo(() => formatDateTimeFromStr(date, sTime, eTime), [
    date,
    eTime,
    sTime,
  ])

  const _onSelect = useCallback(() => {
    onSelect({ eTime, sTime })
  }, [eTime, onSelect, sTime])

  useEffect(() => {
    const timeDiff = getTimeDiffMin(sTime, eTime)
    setErrorEnd(timeDiff < MIN_BOOKING_TIME)
    setErrorStart(moment(`${date} ${sTime}:00`).isBefore(availableAt))
  }, [availableAt, date, eTime, sTime])

  return (
    <Modal
      isVisible
      hasBackdrop
      swipeEnabled={false}
      closeOnOverlayTap={false}
      onModalHide={onClose}
      modalStyle={styles.modal}
    >
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={closeIcon} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.modalBody}>
        <TimePicker
          startDate={start}
          startTime={sTime}
          endDate={end}
          endTime={eTime}
          errorStart={errorStart}
          errorEnd={errorEnd || errorStart}
          setStartTime={setSTime}
          setEndTime={setETime}
        />
        <View style={styles.footer}>
          <PrimaryButton
            disabled={errorStart || errorEnd}
            text={t('home.select')}
            onPress={_onSelect}
          />
        </View>
      </View>
    </Modal>
  )
}

ChooseTimeModal.propTypes = {
  availableAt: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  endTime: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
}

ChooseTimeModal.defaultProps = {
  date: undefined,
}

export default ChooseTimeModal
