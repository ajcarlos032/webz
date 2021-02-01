import React, { useCallback, useContext } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { activeBookingsSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import Card from '@components/Card'
import UnlockButton from './unlockButton'

import styles from './sharedStyles'

const lockIcon = require('@assets/icons/ic_img_security.png')

const OfficeDoor = () => {
  const { t } = useContext(I18nContext)
  const bookings = useSelector(activeBookingsSelector)

  const renderItem = useCallback(
    (booking) => (
      <View style={styles.itemContainer}>
        <Card>
          <View style={styles.itemBody}>
            <Text style={styles.roomName}>{booking.room?.name}</Text>
            <UnlockButton onUnlock={() => onUnlock(booking.room?.id)} />
          </View>
        </Card>
      </View>
    ),
    [onUnlock],
  )

  const onUnlock = useCallback((roomId) => {
    console.log(`Unlocking room# ${roomId}`)
  }, [])

  if (!Boolean(bookings?.length)) {
    return (
      <View style={styles.officeDoorContainer}>
        <View style={styles.emptyContainer}>
          <View style={styles.body}>
            <Text style={styles.noOfficesBooked}>{t('home.noOfficesBooked')}</Text>
            <Image source={lockIcon} style={styles.lockIcon} />
          </View>
          <UnlockButton disabled />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.officeDoorContainer}>
      {Boolean(bookings?.length) && (
        <View style={styles.background}>
          <Image source={lockIcon} style={styles.lockIcon} />
        </View>
      )}
      <FlatList
        data={bookings}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bookings}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

OfficeDoor.propTypes = {}

OfficeDoor.defaultProps = {}

export default OfficeDoor
