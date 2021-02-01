import { createActions } from 'reduxsauce'

import { buildCommonActions } from '@store/utils'

const { Types, Creators } = createActions({
  ...buildCommonActions('changeLanguage', ['newLang', 'callback'], null, ['newLang'], null),
  ...buildCommonActions('acceptLocation', null, null, null, null),
})

export const ConfigTypes = Types

export default Creators
