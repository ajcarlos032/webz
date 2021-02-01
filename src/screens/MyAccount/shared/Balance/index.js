import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { humanFormatNumber } from '@helpers/utils'

import I18nContext from '@root/i18n/I18nContext'

import styles from './styles'

const walletIcon = require('@assets/icons/ic_wallet.png')
const addIcon = require('@assets/icons/ic_plus.png')

const Balance = ({ balance, showDescription, onFund }) => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Image source={walletIcon} style={styles.walletIcon} />
        <Text style={styles.balanceLabel}>{t('account.balance')}</Text>
      </View>
      <View style={styles.balanceRow}>
        <View style={styles.balanceInfoContainer}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>
              {balance === null || isNaN(balance)
                ? t('account.noCredits')
                : humanFormatNumber(balance)}
            </Text>
            {Boolean(balance) && <Text style={styles.credit}>{t('common.credit')}</Text>}
          </View>
          {showDescription && <Text style={styles.detail}>{t('account.balanceDescription')}</Text>}
        </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.addFundButton} onPress={onFund}>
          <Image source={addIcon} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

Balance.propTypes = {
  balance: PropTypes.number,
  onFund: PropTypes.func.isRequired,
  showDescription: PropTypes.bool,
}

Balance.defaultProps = {
  balance: 0,
  showDescription: false,
}

export default Balance
