import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import Map from '@components/Map'

import { RH, RW } from '@theme/utils'

import { DARK_BLUE, DARK_GRAY, SECONDARY } from '@theme/colors'
import { FONT_SIZE, FONT_SIZE_MD, FONT_SF_PRO_MEDIUM, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_H8, DIM_V3, DIM_V7, SCREEN_WIDTH, HORIZONTAL_DIM } from '@root/constants'

const mapMarker = require('@assets/icons/ic_map_marker.png')

const arrowIcon = require('@assets/icons/ic_arrow_right.png')
const arrowRTLIcon = require('@assets/icons/ic_arrow_left.png')

const RoomLocation = ({ location, onViewLocation }) => {
  const { t, i18n } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  return (
    <View style={[styles.container, styles.locationContainer, styles.row, styles.bottomBorder]}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.locationTitleContainer}
        onPress={onViewLocation}
      >
        <Text style={styles.title}>{t('home.location')}</Text>
        <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
      <View style={styles.mapView}>
        <Map location={location} language={i18n.language} />
      </View>
      {!!location && (
        <View style={styles.locationAddressContainer}>
          <Image source={mapMarker} style={styles.mapMarker} />
          <Text style={styles.locationAddress}>{location}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  arrowIcon: {
    height: RW(14),
    resizeMode: 'contain',
    width: RW(8),
  },
  container: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flex: 1,
    paddingBottom: RH(20),
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  locationAddress: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    paddingHorizontal: RW(4),
  },
  locationAddressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: DIM_V3,
    width: '100%',
  },
  locationTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIM_V7,
    width: '100%',
  },
  mapMarker: {
    height: DIM_H8,
    paddingHorizontal: RW(4),
    resizeMode: 'contain',
    width: DIM_H8,
  },
  mapView: {
    height: (3 * SCREEN_WIDTH) / 5,
    width: '100%',
  },
  title: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
})

RoomLocation.propTypes = {
  location: PropTypes.string,
  onViewLocation: PropTypes.func.isRequired,
}

RoomLocation.defaultProps = {
  location: '',
}

export default RoomLocation
