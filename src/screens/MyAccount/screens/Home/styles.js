import { StyleSheet } from 'react-native'

import { BACKGROUND, DARK_SILVER } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE_SM } from '@theme/fonts'
import { DIM_H1, DIM_H4, DIM_V5 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menusContainer: {
    backgroundColor: BACKGROUND,
    borderTopLeftRadius: DIM_H4,
    borderTopRightRadius: DIM_H4,
    marginTop: -DIM_V5,
  },
  userPackage: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    paddingHorizontal: DIM_H1,
  },
  userStatus: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_SM,
  },
  userStatusContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default styles
