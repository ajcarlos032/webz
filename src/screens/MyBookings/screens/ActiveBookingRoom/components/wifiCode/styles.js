import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, DARK_SILVER, SILVER } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  LINE_HEIGHT18,
  LINE_HEIGHT22,
} from '@theme/fonts'
import {
  DIM_H1,
  DIM_H2,
  DIM_H4,
  DIM_H7,
  DIM_V3,
  DIM_V4,
  DIM_V6,
  DIM_V7,
  DIM_V9,
  HORIZONTAL_DIM,
} from '@root/constants'

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingBottom: DIM_V9,
    paddingHorizontal: DIM_H7,
    paddingTop: DIM_V7,
  },
  container: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
    width: '100%',
  },
  copyButton: {
    alignItems: 'center',
    backgroundColor: DARK_BLUE,
    borderRadius: RW(18),
    flexDirection: 'row',
    height: RW(36),
    justifyContent: 'center',
    padding: RW(9),
    width: RW(36),
  },
  copyIcon: {
    height: '100%',
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
  pass: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    overflow: 'hidden',
    paddingLeft: DIM_H1,
  },
  passContainer: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DIM_V6,
    paddingHorizontal: DIM_H4,
    paddingVertical: DIM_V4,
  },
  ssid: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    marginTop: DIM_V3,
  },
})

export default styles
