import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DIM_V5, DIM_V7, HORIZONTAL_DIM } from '@root/constants'
import { SLIDER_WIDTH } from '@screens/Offices/shared/utils/constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: DIM_V5,
  },
  roomContainer: {
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  scrollContainer: {
    height: '100%',
    paddingTop: DIM_V7,
    width: SLIDER_WIDTH,
  },
  scrollView: {
    height: RH(110),
    width: '100%',
  },
})

export default styles
