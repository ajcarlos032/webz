/* eslint-disable sort-keys */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './locale'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    ns: ['translation', 'thermography'],
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
