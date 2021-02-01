import React, { useCallback, useContext } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { meSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import Logo from '@screens/MyAccount/shared/Logo'
import UploadLogo from '@screens/MyAccount/shared/UploadLogo'

import styles from './styles'

const MyLogos = () => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const { logos } = useSelector(meSelector)

  const onRemove = useCallback((id) => {
    console.log(`removing logo#${id}`)
  }, [])

  return (
    <AccountScreenWrapper title={t('account.myLogos')}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {logos.map((logo) => (
            <Logo key={logo.id} logo={logo} onRemove={onRemove} />
          ))}
          <UploadLogo isRTL={isRTL} />
        </ScrollView>
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

MyLogos.propTypes = {}

MyLogos.defaultProps = {}

export default MyLogos
