import { StyleSheet } from 'react-native'

import { HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  bookingTime: {
    paddingHorizontal: 0,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  ratingForm: {
    backgroundColor: 'red',
    display: 'none',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  scrollView: {
    flex: 1,
  },
})

export default styles
