import { put } from 'redux-saga/effects'

import FaqActions from '@store/Faq/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_FAQS
 */
function* fetchFaqs({ payload }) {
  console.log('Fetching faqs...')
  try {
    yield put(FaqActions.fetchFaqsLoading())
    const result = yield apis.fetchFaqs(payload)
    console.log({ fetchFaqs: result })
    yield put(FaqActions.fetchFaqsSuccess(result))
  } catch (error) {
    yield put(FaqActions.fetchFaqsFailure(errorHandling(error)))
  }
}

export default fetchFaqs
