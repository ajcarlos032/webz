import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_SILVER, SECONDARY } from '@theme/colors'

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  headerRightButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RH(18),
    height: RH(36),
    justifyContent: 'center',
    width: RH(36),
  },
  headerRightIcon: {
    height: RH(22),
    tintColor: DARK_SILVER,
    width: RH(22),
  },
})

export default styles
