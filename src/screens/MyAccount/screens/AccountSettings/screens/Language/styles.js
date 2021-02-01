import { StyleSheet } from 'react-native'

import { RH, RW } from '@theme/utils'
import { DARK_BLUE, YELLOW, SECONDARY, SILVER } from '@theme/colors'
import { FONT_ROBOTO_BOLD, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_H1, DIM_H2, DIM_H7, DIM_V3, DIM_V4, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const styles = StyleSheet.create({
  changeLanguageButton: {
    padding: DIM_H1,
  },
  container: {
    flex: 1,
  },
  currentLanguage: {
    borderWidth: RW(4),
  },
  language: {
    color: DARK_BLUE,
    fontFamily: FONT_ROBOTO_BOLD,
    fontSize: FONT_SIZE_MD,
  },
  languageContainer: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V3,
  },
  languageField: {
    alignItems: 'center',
    backgroundColor: SILVER,
    borderRadius: DIM_H2,
    flexDirection: 'row',
    height: RH(64),
    justifyContent: 'space-between',
    paddingHorizontal: DIM_H7,
    paddingVertical: DIM_V4,
    position: 'relative',
    width: '100%',
  },
  languageIcon: {
    height: RH(40),
    marginRight: DIM_H7,
    width: RH(40),
  },
  languages: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: DIM_V7,
    width: '100%',
  },
  mark: {
    borderColor: YELLOW,
    borderRadius: RW(11),
    borderWidth: RH(1),
    height: RW(22),
    width: RW(22),
  },
  spacing: {
    flex: 1,
  },
})

export default styles
