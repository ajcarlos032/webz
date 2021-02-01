import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const backIcon = require('@assets/icons/ic_arrow_left.png')
const backRTLIcon = require('@assets/icons/ic_arrow_right.png')
const searchIcon = require('@assets/icons/ic_input_search.png')
const clearIcon = require('@assets/icons/ic_screen_close.png')

const Header = forwardRef(({ isRTL, initialText, setFocused, t, onBack, onSearch }, ref) => {
  const [text, setText] = useState(initialText)

  useImperativeHandle(
    ref,
    () => ({
      updateText(_text) {
        setText(_text)
      },
    }),
    [],
  )

  useEffect(() => {
    let timeOut
    const debounce = text ? 500 : 0
    setFocused(true)
    if (text !== null && text !== undefined)
      timeOut = setTimeout(() => {
        setFocused(false)
        onSearch(text)
      }, debounce)

    return () => clearTimeout(timeOut)
  }, [text, onSearch, setFocused])

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.backButton} onPress={onBack}>
        <Image source={isRTL ? backRTLIcon : backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.spacing} />
      <View style={styles.inputContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, isRTL && styles.rtlInput]}
          placeholder={t('home.searchOffices')}
          value={text}
          // onFocus={() => setFocused(true)}
          // onBlur={() => setFocused(false)}
          onChangeText={setText}
        />
        {!!text && (
          <TouchableOpacity style={styles.clearButton} onPress={() => setText('')}>
            <Image source={clearIcon} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
})

Header.propTypes = {
  initialText: PropTypes.string,
  isRTL: PropTypes.bool,
  onBack: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  setFocused: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

Header.defaultProps = {
  initialText: null,
  isRTL: false,
}

export default Header
