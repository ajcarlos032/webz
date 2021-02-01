import { client } from '@root/apollo'
import { faqCategoriesQuery, faqsQuery } from '../queries'

export const fetchFaqCategories = () =>
  new Promise((resolve, reject) => {
    client
      .query({ fetchPolicy: 'no-cache', query: faqCategoriesQuery })
      .then((result) => {
        resolve(result.data.faq_categories)
      })
      .catch((error) => {
        reject(error)
      })
  })

export const fetchFaqs = (payload) =>
  new Promise((resolve, reject) => {
    console.log(payload)
    client
      .query({
        fetchPolicy: 'no-cache',
        query: faqsQuery,
        variables: payload,
      })
      .then((result) => {
        resolve(result.data.faqs)
      })
      .catch((error) => {
        reject(error)
      })
  })
