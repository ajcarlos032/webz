import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { SECONDARY } from '@theme/colors'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
  },
  container: {
    flex: 1,
  },
  field: {
    paddingBottom: DIM_V7,
  },
  fields: {
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  titleContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

export default styles
