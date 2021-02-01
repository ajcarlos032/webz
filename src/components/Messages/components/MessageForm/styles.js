import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE } from '@theme/fonts'
import { DIM_H3, DIM_H6, DIM_V3 } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    borderTopColor: SECONDARY,
    borderTopWidth: RH(1),
    flexDirection: 'row',
    paddingVertical: DIM_V3,
    width: '100%',
  },
  inputField: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    height: '100%',
  },
  inputFieldContainer: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: RH(30),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: RH(40),
    paddingHorizontal: DIM_H6,
  },
  messageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: DIM_H3,
  },
  messageIcon: {
    height: RH(40),
    width: RH(40),
  },
  rtlInput: {
    textAlign: 'right',
  },
})

export default styles
