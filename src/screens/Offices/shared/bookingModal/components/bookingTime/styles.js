import { StyleSheet } from 'react-native'

import { HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 0,
  },
  labelContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

export default styles
