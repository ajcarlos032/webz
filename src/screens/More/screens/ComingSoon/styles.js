import { StyleSheet } from 'react-native'

import { DARK_BLUE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_3XL } from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
  },
})

export default styles
