import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const introImg = require('@assets/images/img_intro_1.png')

const Intro1 = ({ t }) => {
  return (
    <View style={styles.introContainer}>
      <View style={styles.imageContainer}>
        <Image source={introImg} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t('auth.welcomeToWeBiz')}</Text>
        <Text style={styles.message}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        </Text>
      </View>
    </View>
  )
}

Intro1.propTypes = {
  t: PropTypes.any.isRequired,
}

Intro1.defaultProps = {}

export default Intro1
