import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

import { iconName } from '@helpers/utils'

import styles from './styles'

const RoomFacilities = ({ title, facilities }) => {
  if (!facilities.length) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.facilities}>
        {facilities.map((facility) => (
          <View key={facility.id} style={styles.facilityContainer}>
            <FAIcon name={iconName(facility.icon)} style={styles.facilityIcon} />
            <Text style={styles.facilityName}>{facility.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

RoomFacilities.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  title: PropTypes.string.isRequired,
}

RoomFacilities.defaultProps = {
  facilities: [],
}

export default RoomFacilities
