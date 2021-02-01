import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import moment from 'moment'

import { activeBookingIdsSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import RoomItem from '@screens/Offices/shared/roomItem'
import { UTCToLocalTime } from '@helpers/utils'

import styles from './styles'

const Room = ({ id, availableAt, onPressRoom }) => {
  const { t } = useContext(I18nContext)

  const activeBookings = useSelector(activeBookingIdsSelector)

  const formattedAvailableAt = useMemo(() => {
    if (!availableAt) return '-- : --'
    const localTime = UTCToLocalTime(availableAt)
    if (moment(localTime).isSame(moment(), 'day')) return moment(localTime).format('HH:mm')
    return UTCToLocalTime(availableAt, 'D MMM YYYY HH:mm')
  }, [availableAt])

  return (
    <View style={styles.container}>
      <RoomItem
        id={id}
        showUnlock={activeBookings.includes(id)}
        onPressItem={() => onPressRoom(id)}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={() => onPressRoom(id)}>
        <Text style={styles.availableAt}>{`${t('home.availableAt')} ${formattedAvailableAt}`}</Text>
      </TouchableOpacity>
    </View>
  )
}

Room.propTypes = {
  availableAt: PropTypes.string,
  id: PropTypes.string.isRequired,
  onPressRoom: PropTypes.func.isRequired,
}

Room.defaultProps = {
  availableAt: null,
}

export default Room
