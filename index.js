/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import App from './App'
import { APP_NAME } from '@root/constants'

if (__DEV__) {
  LogBox.ignoreLogs([
    // https://github.com/GeekyAnts/NativeBase/issues/3109
    'Animated: `useNativeDriver` was not specified',
    // https://github.com/socketio/socket.io-client/issues/1290
    'Unrecognized WebSocket connection option(s)',
  ])
}

AppRegistry.registerComponent(APP_NAME, () => App)
