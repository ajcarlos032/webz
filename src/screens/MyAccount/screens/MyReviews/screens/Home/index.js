import React, { useCallback, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'

import NoData from '@components/NoData'
import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import Review from './review'

import styles from './styles'

const MyReviews = ({ navigation }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const {
    reviews: { ids: reviewIds },
    fetchReviewsLoading,
  } = useSelector(userSelector)

  useEffect(() => {
    dispatch(UserActions.fetchReviews())
  }, [dispatch])

  const onPressReview = useCallback(
    (id) => {
      navigation.navigate('Review', { id })
    },
    [navigation],
  )

  return (
    <AccountScreenWrapper loading={fetchReviewsLoading} title={t('account.myReviews')}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={reviewIds}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }) => <Review id={item} onPressReview={onPressReview} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoData loading={fetchReviewsLoading} />}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

MyReviews.propTypes = {
  navigation: PropTypes.object.isRequired,
}

MyReviews.defaultProps = {}

export default MyReviews
