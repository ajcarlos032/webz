import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const introImg = require('@assets/images/img_intro_2.png')

const Intro2 = ({ t }) => {
  return (
    <View style={styles.introContainer}>
      <View style={styles.imageContainer}>
        <Image source={introImg} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t('auth.reimagineYourWorkspace')}</Text>
        <Text style={styles.message}>{t('auth.reimagineText')}</Text>
      </View>
    </View>
  )
}

Intro2.propTypes = {
  t: PropTypes.any.isRequired,
}

Intro2.defaultProps = {}

export default Intro2
