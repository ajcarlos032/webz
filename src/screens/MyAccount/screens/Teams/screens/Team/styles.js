import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, DARK_SILVER, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE_SM,
  FONT_SIZE_MD,
  LINE_HEIGHT14,
} from '@theme/fonts'
import { DIM_H3 } from '@root/constants'

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: DIM_H3,
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
    height: RH(20),
    width: RH(20),
  },
  teamMembers: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT14,
  },
  teamName: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
  },
})

export default styles
