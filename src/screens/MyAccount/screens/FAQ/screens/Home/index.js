import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import FaqActions from '@store/Faq/Actions'
import { faqSelector } from '@store/Faq/Select'

import I18nContext from '@root/i18n/I18nContext'

import NoData from '@components/NoData'
import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import Categories from './components/Categories'
import QA from './components/QA'

import { shouldRefetch } from '@helpers/utils'
import styles from './styles'

const FAQ = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const isFocused = useIsFocused()

  const [category_ids, setCategoryIds] = useState([])

  const {
    fetchFaqsLoading,
    faqs: { ids, timestamp },
  } = useSelector(faqSelector)

  const fetchFaqs = useCallback(() => {
    const payload = { field: 'created_at', order: 'DESC' }

    payload.category_ids = category_ids

    dispatch(FaqActions.fetchFaqs(payload))
  }, [category_ids, dispatch])

  // fetch faq categories
  useEffect(() => {
    dispatch(FaqActions.fetchFaqCategories())
  }, [dispatch])

  useEffect(() => {
    fetchFaqs()
  }, [category_ids, fetchFaqs])

  // fetch faqs when screen is focused
  useEffect(() => {
    if (!isFocused) return

    if (shouldRefetch(timestamp, 60 * 60 * 1000)) fetchFaqs()
  }, [isFocused, timestamp, fetchFaqs])

  const onPressFAQ = useCallback(
    (id) => {
      navigation.navigate('FAQView', { id })
    },
    [navigation],
  )

  return (
    <AccountScreenWrapper title={t('account.faq')} loading={fetchFaqsLoading}>
      <SafeAreaView style={styles.container}>
        <Categories categoryIds={category_ids} onChange={setCategoryIds} />
        <FlatList
          data={ids}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }) => <QA id={item} onPressFAQ={onPressFAQ} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoData loading={fetchFaqsLoading} />}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

FAQ.propTypes = {
  navigation: PropTypes.object.isRequired,
}

FAQ.defaultProps = {}

export default FAQ
