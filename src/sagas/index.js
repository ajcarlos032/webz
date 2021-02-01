import { all, fork } from 'redux-saga/effects'

import AuthSaga from './modules/Auth'
import UserSaga from './modules/User'
import OfficeSaga from './modules/Office'
import BookingSaga from './modules/Booking'
import ConfigSaga from './modules/Config'
import FaqSaga from './modules/Faq'
import NotificationSaga from './modules/Notification'
import TeamSaga from './modules/Team'

export default function* root() {
  yield all([fork(AuthSaga)])
  yield all([fork(UserSaga)])
  yield all([fork(OfficeSaga)])
  yield all([fork(BookingSaga)])
  yield all([fork(ConfigSaga)])
  yield all([fork(FaqSaga)])
  yield all([fork(NotificationSaga)])
  yield all([fork(TeamSaga)])
}
