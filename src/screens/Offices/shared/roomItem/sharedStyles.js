import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'

import { BORDER, DARK_BLUE, GRAY, SECONDARY, YELLOW } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE_SM,
  FONT_SIZE_MD,
  FONT_SIZE_XS,
} from '@theme/fonts'
import {
  DIM_V0,
  DIM_H1,
  DIM_H3,
  DIM_H5,
  DIM_H6,
  DIM_H9,
  DIM_H10,
  DIM_V2,
  DIM_V3,
  HORIZONTAL_DIM,
  SCREEN_WIDTH,
} from '@root/constants'

const PADDING = DIM_H1
const UNLOCK_BUTTON_DOM = RW(50)

export const CONTAINER_WIDTH = SCREEN_WIDTH - 2 * HORIZONTAL_DIM
export const IMAGE_WIDTH = CONTAINER_WIDTH - 2 * PADDING
export const IMAGE_HEIGHT = (2 * IMAGE_WIDTH) / 3

export const styles = StyleSheet.create({
  availableAt: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    paddingVertical: DIM_V0,
  },
  container: {
    width: CONTAINER_WIDTH,
  },
  detailContainer: {
    flexDirection: 'column',
  },
  extraFacilities: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_XS,
    textAlign: 'center',
  },
  facilitiesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  facilityIcon: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_SM,
  },
  facilityIconContainer: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: DIM_H9 / 2,
    height: DIM_H9,
    justifyContent: 'center',
    marginLeft: DIM_H3,
    width: DIM_H9,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: DIM_H1,
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V3,
    position: 'absolute',
    top: DIM_V3,
    width: IMAGE_WIDTH,
  },
  likeButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: DIM_H10 / 2,
    height: DIM_H10,
    justifyContent: 'center',
    width: DIM_H10,
  },
  likeIcon: {
    height: RW(22),
    resizeMode: 'contain',
    width: RW(22),
  },
  officeImage: {
    borderColor: BORDER,
    borderRadius: DIM_H1,
    borderWidth: 1,
    flex: 1,
    overflow: 'hidden',
    padding: PADDING,
  },
  officeImageWrapper: {
    borderRadius: DIM_H1,
    flex: 1,
    overflow: 'hidden',
  },
  unlockButton: {
    alignItems: 'center',
    backgroundColor: YELLOW,
    borderRadius: UNLOCK_BUTTON_DOM / 2,
    height: UNLOCK_BUTTON_DOM,
    justifyContent: 'center',
    position: 'absolute',
    right: DIM_H6,
    top: IMAGE_HEIGHT - UNLOCK_BUTTON_DOM - DIM_V2,
    width: UNLOCK_BUTTON_DOM,
  },
  unlockIcon: {
    height: RW(25),
    resizeMode: 'contain',
    width: RW(25),
  },
})
