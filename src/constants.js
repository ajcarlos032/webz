import { Dimensions, Platform, StatusBar } from 'react-native'
import { RH, RW } from '@theme/utils'

export const APP_NAME = 'WeBiz'
export const APP_DISPLAY_NAME = 'WeBiz'
export const APP_LANG_KEY = '@WeBizLang'
export const APP_TOKEN_KEY = '@WeBizToken'

export const APP_LANGUAGES = {
  EN: 'en',
  HE: 'he',
  // FR: 'fr',
  // SP: 'sp',
}

export const SERVER_ENDPOINT = __DEV__ ? 'http://webiz.mysite.am' : 'http://app.webiztlv.co.il'
export const DEEP_LINKING_SCHEMA = `webiz:/`

export const WHATSAPP_NUMBER = '+972 545364514'

export const IS_IOS = Platform.OS === 'ios'

export const NAV_HEADER_OPTION = {
  headerShown: false,
  headerStatusBarHeight: IS_IOS ? undefined : 0,
  headerStyle: { height: 0, overFlow: 'hidden' },
}

export const HORIZONTAL_DIM = RW(16)
export const STATUS_BAR = IS_IOS ? RH(35) : StatusBar.currentHeight
export const NAV_HEADER = IS_IOS ? RH(60) : RH(65)
export const HEADER_HEIGHT = STATUS_BAR + NAV_HEADER + RH(5)

export const DIM_H = RW(1)
export const DIM_H0 = RW(3)
export const DIM_H1 = RW(5)
export const DIM_H2 = RW(7)
export const DIM_H3 = RW(10)
export const DIM_H4 = RW(12)
export const DIM_H5 = RW(14)
export const DIM_H6 = RW(17)
export const DIM_H7 = RW(20)
export const DIM_H8 = RW(25)
export const DIM_H9 = RW(30)
export const DIM_H10 = RW(35)
export const DIM_H11 = RW(40)
export const DIM_H12 = RW(45)
export const DIM_H13 = RW(50)

export const DIM_V = RH(1)
export const DIM_V0 = RH(3)
export const DIM_V1 = RH(5)
export const DIM_V2 = RH(7)
export const DIM_V3 = RH(10)
export const DIM_V4 = RH(12)
export const DIM_V5 = RH(14)
export const DIM_V6 = RH(17)
export const DIM_V7 = RH(20)
export const DIM_V8 = RH(25)
export const DIM_V9 = RH(30)
export const DIM_V10 = RH(35)
export const DIM_V11 = RH(40)
export const DIM_V12 = RH(45)
export const DIM_V13 = RH(50)

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

export const GOOGLE_API_KEY = 'AIzaSyD5R2Zp--ifmZ8Jx9YVvD4_iHcJOOTP63s'

export const CODE_PUSH_PROD = 'mWxMSmhjeG1eQKEHYcjmUctYFpSknUA-x3MIS'
export const CODE_PUSH_STAG = 't2W1z_cnUPI79aQeiugHGMMZVwZwA6uXNVIR0'
