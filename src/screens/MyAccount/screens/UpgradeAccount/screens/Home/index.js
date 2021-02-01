import React, { useCallback, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import { packagesSelector, userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import Membership from './membership'

import styles from './styles'

const UpgradeAccount = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const packages = useSelector(packagesSelector)
  const { fetchPackagesLoading } = useSelector(userSelector)

  const onPressMembership = useCallback(
    (id) => {
      navigation.navigate('AccountDetail', { id })
    },
    [navigation],
  )

  useEffect(() => {
    dispatch(UserActions.fetchPackages())
  }, [dispatch])

  return (
    <AccountScreenWrapper loading={fetchPackagesLoading} title={t('account.upgradeAccount')}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={packages}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Membership
              id={item.id}
              name={item.name}
              buttonText={t('account.learnMore')}
              onViewDetail={onPressMembership}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

UpgradeAccount.propTypes = {
  navigation: PropTypes.object.isRequired,
}

UpgradeAccount.defaultProps = {}

export default UpgradeAccount
