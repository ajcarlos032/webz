import { StyleSheet } from 'react-native'

import { WHITE } from '@theme/colors'
import { DIM_H0, DIM_V6 } from '@root/constants'

const styles = StyleSheet.create({
  active: {
    opacity: 1,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  paginator: {
    backgroundColor: WHITE,
    borderRadius: 4,
    height: 8,
    marginHorizontal: DIM_H0,
    opacity: 0.4,
    width: 8,
  },
  paginatorContainer: {
    bottom: DIM_V6,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  slider: {
    flex: 1,
  },
})

export default styles
