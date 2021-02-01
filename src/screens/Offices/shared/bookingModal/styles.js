import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { BACKGROUND, SECONDARY, OVERLAY, WHITE } from '@theme/colors'
import {
  DIM_H5,
  DIM_V3,
  DIM_V7,
  HEADER_HEIGHT,
  HORIZONTAL_DIM,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: WHITE,
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: DIM_V3,
  },
  container: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H5,
    borderTopRightRadius: DIM_H5,
    minHeight: SCREEN_HEIGHT / 2,
    width: '100%',
  },
  fixedHeader: {
    height: HEADER_HEIGHT,
    width: '100%',
    zIndex: 1,
  },
  headerBackground: {
    backgroundColor: BACKGROUND,
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
  },
  row: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: RH(20),
    width: '100%',
  },
  rowLg: {
    paddingBottom: RH(20),
  },
  scrollContainer: {
    bottom: 0,
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  scrollView: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  spacing: {
    height: HEADER_HEIGHT,
    width: '100%',
  },
  stickyBottom: {
    backgroundColor: WHITE,
    bottom: 0,
    height: SCREEN_HEIGHT / 2,
    left: 0,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  wrapper: {
    backgroundColor: OVERLAY,
    height: '100%',
    width: SCREEN_WIDTH,
  },
})

export default styles
