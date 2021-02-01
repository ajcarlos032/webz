import { StyleSheet } from 'react-native'

import { RH } from '@theme/utils'
import { DARK_BLUE } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_SM, LINE_HEIGHT18 } from '@theme/fonts'
import { DIM_V5, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: DIM_V7,
  },
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  description: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT18,
    width: '75%',
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: DIM_V5,
  },
  field: {
    paddingBottom: DIM_V7,
  },
  fields: {
    flexDirection: 'column',
    width: '100%',
  },
  icon: {
    height: RH(110),
    width: RH(110),
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
})

export default styles
