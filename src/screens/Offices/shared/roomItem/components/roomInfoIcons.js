import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

import { iconName } from '@helpers/utils'

import { styles } from '../sharedStyles'

const likeIcon = require('@assets/icons/ic_like_inactive.png')
const likedIcon = require('@assets/icons/ic_like_active.png')

const FACILITIES_SHOW_NUM = 3

const RoomInfoIcons = ({ liked, facilities, onToggleLike }) => {
  const [isLiked, setIsLiked] = useState(false)
  useEffect(() => {
    setIsLiked(liked)
  }, [liked])

  const _onToggleLike = useCallback(() => {
    setIsLiked((_liked) => !_liked)
    onToggleLike()
  }, [onToggleLike])

  return (
    <View style={styles.infoContainer}>
      <TouchableOpacity style={styles.likeButton} activeOpacity={0.5} onPress={_onToggleLike}>
        <Image source={isLiked ? likedIcon : likeIcon} style={styles.likeIcon} />
      </TouchableOpacity>
      <View style={styles.facilitiesContainer}>
        {facilities.slice(0, FACILITIES_SHOW_NUM).map((facility) => (
          <View key={facility.id} style={styles.facilityIconContainer}>
            <FAIcon name={iconName(facility.icon)} style={styles.facilityIcon} />
          </View>
        ))}
        {facilities.length > FACILITIES_SHOW_NUM && (
          <View style={styles.facilityIconContainer}>
            <Text style={styles.extraFacilities}>
              {`+${facilities.length - FACILITIES_SHOW_NUM}`}
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

RoomInfoIcons.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  liked: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired,
}

RoomInfoIcons.defaultProps = {
  facilities: [],
}

export default RoomInfoIcons
