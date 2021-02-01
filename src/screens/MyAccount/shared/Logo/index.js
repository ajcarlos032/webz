import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Card from '@components/Card'

import { imageWithDefault } from '@helpers/imageHelper'

import styles from './styles'

const Logo = ({ logo, onRemove }) => {
  const { t } = useContext(I18nContext)

  if (!Boolean(logo?.url)) return null

  return (
    <View style={styles.container}>
      <Card cardStyle={styles.card}>
        <View style={styles.cardBody}>
          <Image source={imageWithDefault(logo.url)} style={styles.logo} />
          <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(logo.id)}>
            <Text style={styles.label}>{t('account.remove')}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  )
}

Logo.propTypes = {
  logo: PropTypes.shape({
    id: PropTypes.string,
    is_logo: PropTypes.bool,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onRemove: PropTypes.func,
}

Logo.defaultProps = {
  logo: null,
  onRemove: () => null,
}

export default Logo
