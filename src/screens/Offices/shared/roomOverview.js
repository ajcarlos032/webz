import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import { RH } from '@theme/utils'
import { DARK_GRAY, PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import {
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_MEDIUM,
  LINE_HEIGHT20,
  LINE_HEIGHT22,
} from '@theme/fonts'
import { DIM_V3, DIM_V5, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const RoomOverview = ({ overview }) => {
  const { t } = useContext(I18nContext)

  if (!overview) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('home.overview')}</Text>
      <Text style={styles.overView}>{overview}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    flex: 1,
    marginTop: DIM_V3,
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  overView: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    marginTop: DIM_V5,
    textAlign: 'left',
  },
  title: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
    textAlign: 'left',
  },
})

RoomOverview.propTypes = {
  overview: PropTypes.string,
}

RoomOverview.defaultProps = {
  overview: null,
}

export default RoomOverview
