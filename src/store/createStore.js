import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  blacklist: [], // Blacklist state that we do not need/want to persist
  key: 'root',
  storage: AsyncStorage,
}

const composerEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // Connect the Sagas to the Redux Store
  const sagaMiddleware = createSagaMiddleware()

  middleware.push(sagaMiddleware)

  enhancers.push(composerEnhanced(applyMiddleware(...middleware)))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { persistor, store }
}
