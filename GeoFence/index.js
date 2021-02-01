/* eslint-disable sort-keys */
import { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import BGGeoLocation from 'react-native-background-geolocation'

import BookingActions from '@store/Booking/Actions'

// Yigal Alon 94 Tel Aviv israel

const CENTER = {
  latitude: 32.06887,
  longitude: 34.79409,
}

const CENTER_LOCAL = {
  latitude: 41.7686,
  longitude: 123.428,
}

const GEOFENCE_DATA = {
  ...CENTER,
  radius: 200,
  identifier: 'WEBIZ_OFFICE',
  notifyOnEntry: true,
  notifyOnExit: true,
  notifyOnDwell: false,
}

const GEOLOCAITON_CONFIG = {
  reset: false,
  desiredAccuracy: BGGeoLocation.DESIRED_ACCURACY_NAVIGATION,
  distanceFilter: 10,
  geofenceInitialTriggerEntry: false,
  locationAuthorizationRequest: 'Always',
  stopTimeout: 30,
  pausesLocationUpdatesAutomatically: false,
  disableStopDetection: true,
  isMoving: true,
  stopOnStationary: true,
  debug: false,
  logLevel: BGGeoLocation.LOG_LEVEL_VERBOSE,
  autoSync: false,
  stopOnTerminate: false,
  startOnBoot: true,
  enableHeadless: true,
}

const GeoFence = ({ enabled }) => {
  const dispatch = useDispatch()

  const onGeofence = useCallback(
    async (event) => {
      console.log('[geofence] - ', event)
      if (event.action === 'EXIT') {
        dispatch(BookingActions.locationState({ out: true }))
      } else if (event.action === 'ENTER') {
        dispatch(BookingActions.locationState({ out: false }))
      } else {
        console.log('User is `DWELL` state now')
      }
    },
    [dispatch],
  )

  useEffect(() => {
    if (enabled) {
      BGGeoLocation.onGeofence(onGeofence)
      BGGeoLocation.getGeofences((geofences) => {
        const exist = geofences.some(({ identifier }) => identifier === GEOFENCE_DATA.identifier)
        if (!exist) {
          BGGeoLocation.addGeofence(GEOFENCE_DATA)
        }
      })

      BGGeoLocation.ready(
        GEOLOCAITON_CONFIG,
        (state) => {
          if (!state.enabled) {
            BGGeoLocation.startGeofences()
          }
          console.log('- state: ', state)
        },
        (error) => {
          console.warn('BackgroundGeolocation error: ', error)
        },
      )
    } else {
      BGGeoLocation.stop()
      BGGeoLocation.removeAllListeners(() => {
        console.log('Removed all listeners')
      })
    }
  }, [enabled, onGeofence])

  // useEffect(() => {
  //   let timeInterval
  //   if (__DEV__) {
  //     timeInterval = setInterval(() => {
  //       console.log('Changing pace...')
  //       BGGeoLocation.changePace(true)
  //     }, 2000)
  //     if (!enabled) {
  //       clearInterval(timeInterval)
  //     }
  //   }

  //   return () => clearInterval(timeInterval)
  // }, [enabled])

  return null
}

GeoFence.propTypes = {
  enabled: PropTypes.bool,
}

GeoFence.defaultProps = {
  enabled: false,
}

export default GeoFence
