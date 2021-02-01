import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { BACKGROUND, GRAY, SECONDARY, WHITE, YELLOW } from '@theme/colors'
import { FONT_SIZE_XS, FONT_SEMIBOLD } from '@theme/fonts'
import { DIM_V3, DIM_V7, DIM_V9, HORIZONTAL_DIM } from '@root/constants'

const TAB_HEIGHT = RH(40)

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  backToAppButton: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingTop: 0,
  },
  closeButton: {
    paddingVertical: DIM_V3,
  },
  closeIcon: {
    height: RH(24),
    resizeMode: 'contain',
    width: RH(24),
  },
  container: {
    flex: 1,
    paddingTop: DIM_V7,
  },
  scenesContainer: {
    backgroundColor: BACKGROUND,
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    marginTop: DIM_V7,
    paddingBottom: DIM_V7,
  },
  tab: {
    borderRadius: DIM_V9,
    height: TAB_HEIGHT,
    minHeight: 0,
  },
  tabBar: {
    backgroundColor: WHITE,
    borderColor: SECONDARY,
    borderRadius: DIM_V9,
    borderWidth: RH(1),
    elevation: 0,
    height: TAB_HEIGHT,
  },
  tabBarContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
  },
  tabFocusedLabel: {
    color: WHITE,
  },
  tabIndicator: {
    backgroundColor: YELLOW,
    borderColor: YELLOW,
    borderRadius: DIM_V9,
    borderWidth: 1,
    height: TAB_HEIGHT,
    top: RH(-1),
  },
  tabLabel: {
    color: GRAY,
    fontSize: FONT_SIZE_XS,
    fontWeight: FONT_SEMIBOLD,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
})

export default styles
