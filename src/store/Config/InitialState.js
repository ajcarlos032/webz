import { buildCommonState } from '@store/utils'
import { IS_IOS } from '@root/constants'

export const INITIAL_STATE = {
  acceptLocation: IS_IOS,
  isRTL: false,
  lang: 'en',

  ...buildCommonState('changeLanguage'),
  ...buildCommonState('acceptLocation'),
}
