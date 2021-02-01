import { all, takeLatest } from 'redux-saga/effects'
import { FaqTypes } from '@store/Faq/Actions'

import fetchFaqCategories from './fetchFaqCategories'
import fetchFaqCategoriesSuccess from './fetchFaqCategories/success'
import fetchFaqCategoriesFailure from './fetchFaqCategories/failure'

import fetchFaqs from './fetchFaqs'
import fetchFaqsSuccess from './fetchFaqs/success'
import fetchFaqsFailure from './fetchFaqs/failure'

export default function* root() {
  yield all([
    // Fetch FAQ categories.
    takeLatest(FaqTypes.FETCH_FAQ_CATEGORIES, fetchFaqCategories),
    takeLatest(FaqTypes.FETCH_FAQ_CATEGORIES_SUCCESS, fetchFaqCategoriesSuccess),
    takeLatest(FaqTypes.FETCH_FAQ_CATEGORIES_FAILURE, fetchFaqCategoriesFailure),

    // Fetch FAQs.
    takeLatest(FaqTypes.FETCH_FAQS, fetchFaqs),
    takeLatest(FaqTypes.FETCH_FAQS_SUCCESS, fetchFaqsSuccess),
    takeLatest(FaqTypes.FETCH_FAQS_FAILURE, fetchFaqsFailure),
  ])
}
