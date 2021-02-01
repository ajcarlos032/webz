/* eslint-disable sort-keys */
import { combineReducers } from 'redux'

import rootSaga from '@sagas/index'
import configureStore from './createStore'

import { reducer as AuthReducer } from './Auth/Reducers'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as OfficeReducer } from './Office/Reducers'
import { reducer as BookingReducer } from './Booking/Reducers'
import { reducer as ConfigReducer } from './Config/Reducers'
import { reducer as FaqReducer } from './Faq/Reducers'
import { reducer as NotificationReducer } from './Notification/Reducers'
import { reducer as TeamReducer } from './Team/Reducers'

export default () => {
  const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    office: OfficeReducer,
    booking: BookingReducer,
    config: ConfigReducer,
    faq: FaqReducer,
    notification: NotificationReducer,
    team: TeamReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
