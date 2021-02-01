import { put } from 'redux-saga/effects'

import FaqActions from '@store/Faq/Actions'
import apis from '@apis'
import { errorHandling } from '@sagas/utils'

/**
 * FETCH_FAQ_CATEGORIES
 */
function* fetchFaqCategories() {
  console.log('Fetching faq categories...')
  try {
    yield put(FaqActions.fetchFaqCategoriesLoading())
    const result = yield apis.fetchFaqCategories()
    console.log({ fetchFaqCategories: result })
    yield put(FaqActions.fetchFaqCategoriesSuccess(result))
  } catch (error) {
    yield put(FaqActions.fetchFaqCategoriesFailure(errorHandling(error)))
  }
}

export default fetchFaqCategories
