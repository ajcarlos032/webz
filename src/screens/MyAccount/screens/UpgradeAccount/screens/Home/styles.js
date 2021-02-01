import { StyleSheet } from 'react-native'

import { DIM_V3, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: DIM_V3,
    paddingTop: DIM_V7,
  },
  container: {
    flex: 1,
  },
  flatList: {
    flexGrow: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  membershipContainer: {
    flexDirection: 'column',
    paddingTop: DIM_V7,
  },
})

export default styles
