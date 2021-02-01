import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import PureButton from '@components/Buttons/pureButton'
import PrimaryButton from '@components/Buttons/primaryButton'

import sharedStyles from '../styles'

const Buttons = ({ isRTL, variants, onClear, onConfirm }) => {
  const { t } = useContext(I18nContext)

  const buttonText = useMemo(() => {
    if (variants === 0) return t('home.noVariants')

    // return `${t('home.show')} (${variants} ${t('home.variants')})`
    return t('home.show')
  }, [t, variants])

  return (
    <View style={[sharedStyles.buttons, isRTL && sharedStyles.rtlRow]}>
      <View style={sharedStyles.clearButtonContainer}>
        <PureButton text={t('home.clear')} onPress={onClear} />
      </View>
      <View style={sharedStyles.confirmButtonContainer}>
        <PrimaryButton disabled={!variants} text={buttonText} onPress={onConfirm} />
      </View>
    </View>
  )
}

Buttons.propTypes = {
  isRTL: PropTypes.bool,
  onClear: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  variants: PropTypes.number,
}

Buttons.defaultProps = {
  isRTL: false,
  variants: 0,
}

export default Buttons
