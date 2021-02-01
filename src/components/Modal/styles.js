import { StyleSheet } from 'react-native'

import { OVERLAY, TRANSPARENT } from '@theme/colors'
import { HORIZONTAL_DIM, SCREEN_WIDTH } from '@root/constants'

const styles = StyleSheet.create({
  modal: {
    backgroundColor: TRANSPARENT,
    borderRadius: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: 0,
  },
  wrapper: {
    backgroundColor: OVERLAY,
    height: '100%',
    width: SCREEN_WIDTH,
  },
})

export default styles
