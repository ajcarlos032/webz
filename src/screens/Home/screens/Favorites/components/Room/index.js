import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'

import I18nContext from '@root/i18n/I18nContext'

import RoomItem from '@screens/Offices/shared/roomItem'

import { UTCToLocalTime } from '@helpers/utils'
import styles from './styles'

const Room = ({ room, onPressRoom }) => {
  const { t } = useContext(I18nContext)

  const { available_at, id } = room

  const formattedAvailableAt = useMemo(() => {
    if (!available_at) return '-- : --'
    const availableAt = UTCToLocalTime(available_at)
    if (moment(availableAt).isSame(moment(), 'day')) return moment(availableAt).format('HH:mm')
    return moment(availableAt).format('D MMM YYYY HH:mm')
  }, [available_at])

  return (
    <View style={styles.container}>
      <RoomItem room={room} onPressItem={() => onPressRoom(id)} />
      <TouchableOpacity activeOpacity={0.5} onPress={() => onPressRoom(id)}>
        <Text style={styles.availableAt}>{`${t('home.availableAt')} ${formattedAvailableAt}`}</Text>
      </TouchableOpacity>
    </View>
  )
}

Room.propTypes = {
  onPressRoom: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,
}

Room.defaultProps = {}

export default Room
