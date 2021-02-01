import React, { useCallback, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import { userSelector, packageByIdSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import MembershipHeader from '@screens/MyAccount/screens/UpgradeAccount/screens/shared/membershipHeader'
import PrimaryButton from '@components/Buttons/primaryButton'

import styles from './styles'

const AccountDetail = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const {
    me: { package: myPackage },
    choosePackageLoading,
  } = useSelector(userSelector)

  const id = route?.params?.id
  const _package = useSelector(packageByIdSelector(id))

  const isCurrentPlan = useMemo(() => myPackage?.id === id, [id, myPackage?.id])

  const onUpgrade = useCallback(() => {
    dispatch(
      UserActions.choosePackage({ id }, () => {
        navigation.goBack()
      }),
    )
  }, [id, navigation, dispatch])

  return (
    <AccountScreenWrapper loading={choosePackageLoading} title={_package?.name}>
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <MembershipHeader name={_package?.name} />
          </View>
          <View style={styles.privilegeContainer}>
            <Text style={styles.title}>{t('account.privileges')}</Text>
            <Text style={styles.privileges}>{_package.privileges}</Text>
          </View>
        </View>
      </ScrollView>

      {/* <View style={styles.buttonContainer}>
        <PrimaryButton
          disabled={isCurrentPlan}
          text={isCurrentPlan ? t('account.currentPlan') : t('account.upgrade')}
          onPress={onUpgrade}
        />
      </View> */}
    </AccountScreenWrapper>
  )
}

AccountDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

AccountDetail.defaultProps = {}

export default AccountDetail
