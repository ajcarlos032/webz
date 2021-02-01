import { StyleSheet } from 'react-native'

import { SHADOW, WHITE } from '@theme/colors'
import { DIM_H5, DIM_V3 } from '@root/constants'

const styles = StyleSheet.create({
  card: {
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: DIM_V3,
    width: '100%',
  },
  dropShadow: {
    elevation: 5,
    shadowColor: SHADOW,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})

export default styles
