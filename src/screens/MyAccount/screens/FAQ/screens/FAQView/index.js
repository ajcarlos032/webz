import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView, Text } from 'react-native'

import { useSelector } from 'react-redux'
import { faqByIdSelector } from '@store/Faq/Select'

import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import styles from './styles'

const FAQView = ({ route }) => {
  const { t } = useContext(I18nContext)

  const qa = useSelector(faqByIdSelector(route?.params?.id))

  return (
    <AccountScreenWrapper title={t('account.faq')}>
      <SafeAreaView style={styles.area}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.question}>{qa?.question}</Text>
          <Text style={styles.answer}>{qa?.answer}</Text>
        </ScrollView>
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

FAQView.propTypes = {
  route: PropTypes.object.isRequired,
}

FAQView.defaultProps = {}

export default FAQView
