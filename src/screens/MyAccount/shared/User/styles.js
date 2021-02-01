import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_SEMIBOLD, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_H5, LINE_HEIGHT22 } from '@root/constants'

const styles = StyleSheet.create({
  avatar: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  avatarContainer: {
    alignItems: 'center',
    borderRadius: RW(50),
    justifyContent: 'center',
    overflow: 'hidden',
    padding: RW(2),
  },
  border: {
    borderColor: YELLOW,
    borderWidth: RW(1),
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: DIM_H5,
  },
  name: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
})

export default styles
