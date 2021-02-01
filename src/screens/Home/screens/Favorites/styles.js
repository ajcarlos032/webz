import { StyleSheet } from 'react-native'

import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roomsList: {
    flexGrow: 1,
    paddingTop: DIM_V7,
  },
  titleContainer: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

export default styles
