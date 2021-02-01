import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE } from '@theme/colors'
import { FONT_SF_PRO_SEMIBOLD, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  avatar: {
    borderRadius: RW(45),
    height: RW(90),
    resizeMode: 'cover',
    width: RW(90),
  },
  avatarContainer: {
    alignItems: 'center',
    borderColor: DARK_BLUE,
    borderRadius: RW(52),
    borderStyle: 'dashed',
    borderWidth: RW(1),
    flexDirection: 'row',
    height: RW(104),
    justifyContent: 'center',
    overflow: 'hidden',
    width: RW(104),
  },
  avatarPlaceholder: {
    height: RW(36),
    resizeMode: 'contain',
    width: RW(48),
  },
  card: {
    flexDirection: 'column',
    paddingHorizontal: RW(15),
    paddingVertical: RH(15),
  },
  cardBody: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  label: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'center',
  },
  noBorder: {
    borderWidth: 0,
  },
})

export default styles
