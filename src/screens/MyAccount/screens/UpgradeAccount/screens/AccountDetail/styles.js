import { StyleSheet } from 'react-native'

import { DARK_GRAY, PRIMARY_BLACK, SECONDARY, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_MD,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
} from '@theme/fonts'
import { DIM_H4, DIM_V3, DIM_V5, DIM_V6, DIM_V7, DIM_V8, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: WHITE,
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V3,
  },
  container: {
    backgroundColor: SECONDARY,
    borderTopLeftRadius: DIM_H4,
    borderTopRightRadius: DIM_H4,
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    paddingBottom: DIM_V8,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V6,
  },
  privilegeContainer: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H4,
    borderTopRightRadius: DIM_H4,
    flexGrow: 1,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  privileges: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT22,
    marginTop: DIM_V5,
    textAlign: 'left',
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT20,
  },
})

export default styles
