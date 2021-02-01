import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import RoomName from '@screens/Offices/shared/roomName'
import RoomFacilitiesBrief from '@screens/Offices/shared/roomFacilitiesBrief'

import { styles } from '../sharedStyles'

const RoomNameFacilities = ({ name, facilities, seats }) => {
  return (
    <View style={styles.detailContainer}>
      <RoomName name={name} />
      <RoomFacilitiesBrief seats={seats} facilities={facilities} />
    </View>
  )
}

RoomNameFacilities.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  name: PropTypes.string.isRequired,
  seats: PropTypes.number,
}

RoomNameFacilities.defaultProps = {
  facilities: [],
  seats: 0,
}

export default RoomNameFacilities
