import React, { useCallback, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'

import Wrapper from '@components/Wrapper'

import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

import Menus from './components/Menus'

import styles from './styles'

const More = ({ navigation }) => {
  const isFocused = useIsFocused()
  const { t } = useContext(I18nContext)
  const { changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: true })
  }, [changeTheme, isFocused])

  const onPressMenu = useCallback(
    // eslint-disable-next-line no-unused-vars
    (screen) => {
      // navigation.navigate(screen)
      navigation.navigate('ComingSoon')
    },
    [navigation],
  )

  return (
    <Wrapper>
      <NavHeader title={t('more.more')} navRight={<NavAlerts widthBottomBorder />} />
      <ScrollView style={styles.container}>
        <View style={styles.menusContainer}>
          <Menus onPressMenu={onPressMenu} />
        </View>
      </ScrollView>
    </Wrapper>
  )
}

More.propTypes = {
  navigation: PropTypes.object.isRequired,
}

More.defaultProps = {}

export default More
