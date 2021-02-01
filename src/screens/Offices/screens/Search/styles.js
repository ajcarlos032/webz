import { StyleSheet } from 'react-native'

import { DIM_V6, HORIZONTAL_DIM, STATUS_BAR } from '@root/constants'
import { BLACK, WHITE } from '@theme/colors'
import { FONT_SF_PRO_SEMIBOLD, FONT_SIZE_MD } from '@theme/fonts'

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  container: {
    backgroundColor: WHITE,
    flex: 1,
    flexDirection: 'column',
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    paddingHorizontal: HORIZONTAL_DIM,
  },
  sectionTitle: {
    color: BLACK,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    paddingVertical: DIM_V6,
  },
  spacing: {
    height: STATUS_BAR,
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
})

export default styles
