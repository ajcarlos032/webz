import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import {
  DARK_BLUE,
  PRIMARY_BLACK,
  ERROR,
  DARK_GRAY,
  LIGHT_GRAY,
  SECONDARY,
  SILVER,
  YELLOW,
} from '@theme/colors'
import {
  FONT_ROBOTO_BOLD,
  FONT_ROBOTO_REGULAR,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_SM,
  FONT_SIZE_MD,
  LINE_HEIGHT18,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
  LINE_HEIGHT24,
} from '@theme/fonts'
import {
  DIM_H2,
  DIM_H7,
  DIM_V2,
  DIM_V3,
  DIM_V4,
  DIM_V5,
  DIM_V7,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  carNumber: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
  },
  carNumberContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  carNumberField: {
    alignItems: 'flex-start',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'column',
    height: RH(90),
    justifyContent: 'center',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V4,
    position: 'relative',
    width: '100%',
  },
  carNumbers: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: DIM_V7,
    width: '100%',
  },
  container: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  default: {
    color: LIGHT_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  defaultNumber: {
    borderWidth: RW(4),
  },
  description: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    width: '75%',
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: DIM_V5,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  icon: {
    height: RH(110),
    width: RH(110),
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    color: DARK_GRAY,
    fontFamily: FONT_ROBOTO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT24,
    paddingTop: DIM_V2,
  },
  mark: {
    borderColor: YELLOW,
    borderRadius: RW(11),
    borderWidth: RH(1),
    height: RW(22),
    width: RW(22),
  },
  noNumberDescription: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_ROBOTO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    paddingVertical: DIM_V7,
    textAlign: 'center',
    width: '50%',
  },
  removeButton: {
    paddingVertical: DIM_V3,
  },
  removeText: {
    color: ERROR,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  scrollView: {
    flex: 1,
  },
})

export default styles
