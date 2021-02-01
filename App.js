import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ApolloProvider } from '@apollo/client'
import { InteractionManager, KeyboardAvoidingView } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { useTranslation } from 'react-i18next'
import codePush from 'react-native-code-push'

import '@root/i18n'
import I18nContext from '@root/i18n/I18nContext'

import createStore from '@store'
import { client } from '@root/apollo'
import { IS_IOS } from '@root/constants'

import SplashScreen from '@root/Splash'
import LinkingConfig from '@navigation/LinkingConfig'

import MyApp from './src'

const { store, persistor } = createStore()

// https://reactnavigation.org/docs/react-native-screens
enableScreens()

const App = () => {
  const { t, i18n } = useTranslation()
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      codePush.notifyAppReady()
    })
  }, [])

  /* https://github.com/facebook/react-native/issues/13393 */
  return (
    <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : undefined} style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nContext.Provider value={{ i18n, t }}>
              {splashVisible ? (
                <SplashScreen onLoadEnd={setSplashVisible} />
              ) : (
                <NavigationContainer linking={LinkingConfig}>
                  <MyApp />
                </NavigationContainer>
              )}
            </I18nContext.Provider>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </KeyboardAvoidingView>
  )
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
}

const myApp = __DEV__ ? App : codePush(codePushOptions)(App)

export default myApp
