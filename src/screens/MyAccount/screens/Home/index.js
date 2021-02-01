import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Alert, Linking, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import AuthActions from '@store/Auth/Actions'
import { userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'
import ThemeContext from '@root/ThemeContext'

import Wrapper from '@components/Wrapper'

import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

import User from '@screens/MyAccount/shared/User'
import Balance from '@screens/MyAccount/shared/Balance'
import Menus from './components/Menus'

import { WHATSAPP_NUMBER } from '@root/constants'
import { RW } from '@theme/utils'

import styles from './styles'

const MyAccount = ({ navigation }) => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { t } = useContext(I18nContext)
  const { changeTheme } = useContext(ThemeContext)
  const {
    me: { avatar_url, balance, name, package: myPackage },
    meLoading,
  } = useSelector(userSelector)

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: true })
  }, [changeTheme, isFocused])

  const openWhatsapp = useCallback((message = '') => {
    const url = `whatsapp://send?text=${message}&phone=${WHATSAPP_NUMBER}`
    Linking.openURL(url)
      .then((data) => {
        console.log(`WhatsApp Opened successfully ${data}`) // <---Success
      })
      .catch(() => {
        Alert.alert('Make sure WhatsApp installed on your device') // <---Error
      })
  }, [])

  const onPressMenu = useCallback(
    (screen) => {
      if (!screen) return

      if (screen === 'logout') {
        dispatch(AuthActions.signOut())
      } else if (screen === 'SupportCenter') {
        openWhatsapp()
      } else {
        navigation.navigate(screen)
      }
    },
    [openWhatsapp, navigation, dispatch],
  )

  const UserInfo = useMemo(
    () => (
      <User avatar={avatar_url} avatarSize={RW(36)} name={name}>
        {!!myPackage?.name && (
          <View style={styles.userStatusContainer}>
            <Text style={styles.userStatus}>{t('account.status')}:</Text>
            <Text style={styles.userPackage}>{myPackage.name}</Text>
          </View>
        )}
      </User>
    ),
    [avatar_url, myPackage?.name, name, t],
  )

  const onFund = useCallback(() => {
    openWhatsapp(t('account.balanceAddWhatsappMsg'))
  }, [openWhatsapp, t])

  return (
    <Wrapper loading={meLoading}>
      <NavHeader navLeft={UserInfo} navRight={<NavAlerts />} />
      <ScrollView style={styles.container}>
        <Balance balance={balance} showDescription onFund={onFund} />
        <View style={styles.menusContainer}>
          <Menus onPressMenu={onPressMenu} />
        </View>
      </ScrollView>
    </Wrapper>
  )
}

MyAccount.propTypes = {
  navigation: PropTypes.object.isRequired,
}

MyAccount.defaultProps = {}

export default MyAccount
