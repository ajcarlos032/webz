import { StyleSheet } from 'react-native'

import { DIM_V2, DIM_V3, HORIZONTAL_DIM, STATUS_BAR } from '@root/constants'
import { BACKGROUND } from '@theme/colors'

const styles = StyleSheet.create({
  area: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: STATUS_BAR,
  },
  buttonContainer: {
    paddingBottom: DIM_V3,
    paddingTop: DIM_V2,
  },
  container: {
    backgroundColor: BACKGROUND,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
  },
  scrollView: {
    flex: 1,
  },
})

export default styles
