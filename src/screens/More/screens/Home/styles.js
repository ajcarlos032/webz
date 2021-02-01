import { StyleSheet } from 'react-native'

import { DARK_SILVER } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE_SM } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userStatus: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_SM,
  },
})

export default styles
