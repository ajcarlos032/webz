import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, DARK_GRAY, SECONDARY, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_SEMIBOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_XS,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H1, DIM_H3, DIM_V2, DIM_V3 } from '@root/constants'

const styles = StyleSheet.create({
  checkIcon: {
    resizeMode: 'contain',
    width: RW(11),
  },
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingVertical: DIM_V3,
    width: '100%',
  },
  meCheckIcon: {
    tintColor: WHITE,
  },
  meContainer: {
    flexDirection: 'row-reverse',
  },
  meMessage: {
    color: `${WHITE}70`,
  },
  meMessageContainer: {
    backgroundColor: '#1F60DD',
    marginHorizontal: 0,
  },
  meMessageTime: {
    color: `${WHITE}40`,
  },
  meName: {
    color: WHITE,
  },
  message: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    width: '100%',
  },
  messageContainer: {
    backgroundColor: SECONDARY,
    borderRadius: DIM_H3,
    marginHorizontal: DIM_H3,
    maxWidth: '75%',
    minWidth: '30%',
    paddingHorizontal: DIM_H3,
    paddingVertical: DIM_V2,
  },
  messageInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: DIM_V3,
  },
  messageTime: {
    color: '#BCC2C7',
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XS,
    lineHeight: LINE_HEIGHT20,
    marginHorizontal: DIM_H1,
  },
  role: {
    fontFamily: FONT_SF_PRO_REGULAR,
  },
  userName: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    width: '100%',
  },
})

export default styles
