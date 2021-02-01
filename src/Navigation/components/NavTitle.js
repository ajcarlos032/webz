import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

import { DARK_BLUE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_3XL } from '@theme/fonts'

const NavTitle = ({ title }) => {
  if (!title) return null
  return <Text style={styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
  title: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    textAlign: 'left',
  },
})

NavTitle.propTypes = {
  title: PropTypes.string,
}

NavTitle.defaultProps = {
  title: null,
}

export default NavTitle
