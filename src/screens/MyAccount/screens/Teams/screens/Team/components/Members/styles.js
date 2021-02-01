import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, DARK_GRAY, YELLOW, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  LINE_HEIGHT18,
  LINE_HEIGHT28,
} from '@theme/fonts'
import { DIM_H7, DIM_V3, DIM_V5, DIM_V9 } from '@root/constants'

const styles = StyleSheet.create({
  addMember: {
    color: YELLOW,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
  },
  addMemberContainer: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RW(25),
    flexDirection: 'row',
    height: RW(50),
    justifyContent: 'center',
    width: RW(50),
  },
  addMemberIcon: {
    height: RW(24),
    width: RW(24),
  },
  avatarContainer: {
    justifyContent: 'center',
    paddingBottom: DIM_V3,
  },
  container: {
    flexDirection: 'column',
    paddingVertical: DIM_V9,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  member: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  memberContainer: {
    paddingHorizontal: DIM_H7,
  },
  memberNum: {
    color: '#BCC2C7',
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT28,
  },
  memberPhone: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
  },
  scrollView: {
    flexDirection: 'row',
    paddingVertical: DIM_V5,
    width: '100%',
  },
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT28,
  },
})

export default styles
