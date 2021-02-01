import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_SILVER, PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_H1, DIM_H2, DIM_V2, DIM_V3 } from '@root/constants'

const styles = StyleSheet.create({
  arrowIcon: {
    height: RH(18),
    resizeMode: 'contain',
    tintColor: DARK_SILVER,
    width: RH(18),
  },
  arrowIconContainer: {
    paddingHorizontal: DIM_H2,
    paddingVertical: DIM_V3,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: DIM_V3,
    width: '100%',
  },
  nameContainer: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(1),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIM_V2,
  },
  roomImage: {
    borderRadius: DIM_H1,
    height: RH(41),
    resizeMode: 'cover',
    width: RH(41),
  },
  roomName: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  spacing: {
    width: DIM_H2,
  },
})

export default styles
