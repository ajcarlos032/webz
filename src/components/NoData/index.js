import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import { RH } from '@theme/utils'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD } from '@theme/fonts'
import { GRAY } from '@theme/colors'

const NoData = ({ text, loading }) => {
  const { t } = useContext(I18nContext)
  const emptyText = useMemo(() => {
    if (text) return text
    if (loading) return t('common.loading')

    return t('common.noData')
  }, [t, text, loading])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{emptyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: RH(75),
  },
  text: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
})

NoData.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
}

NoData.defaultProps = {
  loading: false,
  text: null,
}

export default NoData
