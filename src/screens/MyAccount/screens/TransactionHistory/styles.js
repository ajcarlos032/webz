import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { DARK_BLUE, SECONDARY } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE, LINE_HEIGHT20 } from '@theme/fonts'
import { DIM_H5 } from '@root/constants'

export const PICKER_BUTTON_DIM = RW(36)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerButton: {
    alignItems: 'center',
    backgroundColor: SECONDARY,
    borderRadius: PICKER_BUTTON_DIM / 2,
    height: PICKER_BUTTON_DIM,
    justifyContent: 'center',
    width: PICKER_BUTTON_DIM,
  },
  dateRange: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  flatList: {
    flexGrow: 1,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  pickerIcon: {
    height: RW(22),
    resizeMode: 'contain',
    width: RW(22),
  },
  space: {
    width: DIM_H5,
  },
})

export default styles
