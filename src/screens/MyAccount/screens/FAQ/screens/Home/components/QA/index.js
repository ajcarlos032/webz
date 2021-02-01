import React from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'
import { faqByIdSelector } from '@store/Faq/Select'

import styles from './styles'

const arrowIcon = require('@assets/icons/ic_next.png')
const arrowRTLIcon = require('@assets/icons/ic_previous.png')

const QA = ({ id, onPressFAQ }) => {
  const { isRTL } = useSelector(configSelector)
  const qa = useSelector(faqByIdSelector(id))

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressFAQ(id)}>
      <Text style={styles.question}>{qa.question}</Text>
      <View style={styles.spacing} />
      <Image source={isRTL ? arrowRTLIcon : arrowIcon} style={styles.icon} />
    </TouchableOpacity>
  )
}

QA.propTypes = {
  id: PropTypes.string.isRequired,
  onPressFAQ: PropTypes.func.isRequired,
}

QA.defaultProps = {}

export default QA
