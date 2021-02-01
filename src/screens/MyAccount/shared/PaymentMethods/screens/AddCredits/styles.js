import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_SEMIBOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_MD,
  LINE_HEIGHT22,
} from '@theme/fonts'
import { DIM_H7, DIM_V3, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  addButton: {
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V3,
  },
  addButtonText: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  addMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  borderTop: {
    borderColor: SECONDARY,
    borderTopWidth: RH(0.75),
  },
  buttonContainer: {
    paddingVertical: DIM_V7,
  },
  container: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  credits: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT22,
  },
  creditsSelectContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  paymentMethods: {
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  scrollView: {
    flex: 1,
  },
  titleContainer: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  totalCredits: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT22,
  },
  totalCreditsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIM_V3,
  },
})

export default styles
