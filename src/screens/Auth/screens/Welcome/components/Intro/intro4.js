import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const introImg = require('@assets/images/placeholder.png')

const Intro4 = ({ t }) => {
  return (
    <View style={styles.introContainer}>
      <View style={styles.imageContainer}>
        <Image source={introImg} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{'Welcome text\n№ 2'}</Text>
        <Text style={styles.message}>{t('auth.lorem')}</Text>
      </View>
    </View>
  )
}

Intro4.propTypes = {
  t: PropTypes.any.isRequired,
}

Intro4.defaultProps = {}

export default Intro4
