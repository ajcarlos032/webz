import { StyleSheet } from 'react-native'
import { RH, RW } from '@theme/utils'

import { BACKGROUND, SHADOW, SECONDARY, WHITE } from '@theme/colors'
import {
  DIM_H7,
  DIM_V0,
  DIM_V7,
  HEADER_HEIGHT,
  HORIZONTAL_DIM,
  SCREEN_WIDTH,
} from '@root/constants'

export const IMAGE_WIDTH = SCREEN_WIDTH
export const IMAGE_HEIGHT = (3 * IMAGE_WIDTH) / 4

export const CHAT_BUTTON_DIM = RW(36)

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: WHITE,
    marginTop: -DIM_V0, // fix ios unexpected border
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  chatButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: CHAT_BUTTON_DIM / 2,
    flex: 1,
    height: CHAT_BUTTON_DIM,
    justifyContent: 'center',
    position: 'absolute',
    right: DIM_H7,
    top: IMAGE_HEIGHT - RH(70) - CHAT_BUTTON_DIM / 2,
    width: CHAT_BUTTON_DIM,
    zIndex: 1,
  },
  chatIcon: {
    height: RW(22),
    resizeMode: 'contain',
    width: RW(22),
  },
  container: {
    backgroundColor: WHITE,
    borderTopLeftRadius: RW(16),
    borderTopRightRadius: RW(16),
    flexDirection: 'column',
    marginTop: -RH(25),
    overflow: 'hidden',
  },
  dropShadow: {
    elevation: 15,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  fixedHeader: {
    height: HEADER_HEIGHT,
  },
  headerBackground: {
    backgroundColor: BACKGROUND,
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  paginatorStyle: {
    bottom: RH(70), // paginator_dot / 2
  },
  roomBasicInfoContainer: {
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V7,
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  stickyHeaderContainer: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
  },
})
