import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import MapView, { MAP_TYPES, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geocoder from 'react-native-geocoding'

import { GOOGLE_API_KEY } from '@root/constants'

import styles from './styles'

const Map = ({ location, language, scrollEnabled }) => {
  const [loaded, setLoaded] = useState(false)
  const [latlong, setLatLong] = useState({ latitude: 32.109333, longitude: 34.855499 }) // tel aviv

  useEffect(() => {
    if (!location) return

    if (typeof location === 'string') {
      Geocoder.init(GOOGLE_API_KEY, { language })
      Geocoder.from(location)
        .then((json) => {
          const { lat: latitude, lng: longitude } = json.results[0].geometry.location
          console.log({ latitude, longitude })
          setLatLong({ latitude, longitude })
          setLoaded(true)
        })
        .catch((error) => console.warn({ geolocation: error }))
    } else {
      setLatLong(location)
      setLoaded(true)
    }
  }, [language, location])

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ height: '100%', width: '100%' }}
        mapType={MAP_TYPES.STANDARD}
        region={{
          ...latlong,
          latitudeDelta: 0.01,
          longitudeDelta: 0.05,
        }}
        scrollEnabled={scrollEnabled}
        zoomEnabled
        minZoomLevel={12}
      >
        {loaded && <Marker coordinate={latlong} />}
      </MapView>
    </View>
  )
}

Map.propTypes = {
  language: PropTypes.string,
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ latitude: PropTypes.number, longitude: PropTypes.number }),
  ]),
  scrollEnabled: PropTypes.bool,
}

Map.defaultProps = {
  language: 'en',
  location: null,
  scrollEnabled: false,
}

export default Map
