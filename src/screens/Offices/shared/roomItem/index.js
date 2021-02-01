import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import OfficeActions from '@store/Office/Actions'
import { roomByIdSelector } from '@store/Office/Select'

import ImageSlider from '@components/ImageSlider'

import RoomRating from '@screens/Offices/shared/roomRating'
import RoomInfoIcons from './components/roomInfoIcons'
import RoomNameFacilities from './components/roomNameFacilities'
import UnlockButton from './components/unlockButton'

import { styles, IMAGE_HEIGHT, IMAGE_WIDTH } from './sharedStyles'

const RoomItem = ({ id, room, showUnlock, onPressItem }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _room = room || useSelector(roomByIdSelector(id))

  const {
    id: room_id,
    average_rate: rating,
    facilities,
    images,
    is_favorite,
    name,
    rates_count: ratingCount,
    seats,
  } = _room

  const onToggleLike = useCallback(() => {
    dispatch(OfficeActions.likeRoom(room_id, is_favorite))
  }, [room_id, is_favorite, dispatch])

  const onUnlock = useCallback(() => {
    navigation.navigate('OpenDoor', { roomId: room_id })
  }, [navigation, room_id])

  return (
    <View style={styles.container}>
      <View style={styles.officeImage}>
        <View style={styles.officeImageWrapper}>
          <ImageSlider
            urls={images.map(({ url }) => url)}
            height={IMAGE_HEIGHT}
            width={IMAGE_WIDTH}
            onItemPress={onPressItem}
          />
        </View>
      </View>
      <RoomInfoIcons liked={is_favorite} facilities={facilities} onToggleLike={onToggleLike} />
      {showUnlock && <UnlockButton onUnlock={onUnlock} />}
      <TouchableOpacity activeOpacity={0.5} onPress={onPressItem}>
        <RoomRating rating={rating} ratingCount={ratingCount} />
        <RoomNameFacilities name={name} facilities={facilities} seats={seats} />
      </TouchableOpacity>
    </View>
  )
}

RoomItem.propTypes = {
  id: PropTypes.string,
  onPressItem: PropTypes.func.isRequired,
  room: PropTypes.object,
  showUnlock: PropTypes.bool,
}

RoomItem.defaultProps = {
  id: undefined,
  room: undefined,
  showUnlock: false,
}

export default RoomItem
