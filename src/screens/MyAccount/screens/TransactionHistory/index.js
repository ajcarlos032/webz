import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import { userSelector } from '@store/User/Select'
import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import NoData from '@components/NoData'

import Transaction from './components/transaction'
import DateRangeModal from './components/dateRangeModal'

// import { transactions } from '@temp/transactions'

import styles, { PICKER_BUTTON_DIM } from './styles'

const pickerIcon = require('@assets/icons/ic_date_picker.png')

const TransactionHistory = () => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { isRTL } = useSelector(configSelector)
  const { transactions, fetchTransactionsLoading } = useSelector(userSelector)
  const [start, setStart] = useState(moment().subtract(7, 'days'))
  const [end, setEnd] = useState(moment())
  const [showRageModal, setShowRangeModal] = useState(false)

  useEffect(() => {
    // don't forget to change local time to UTC when send to backend
    dispatch(UserActions.fetchTransactions())
  }, [dispatch])

  const onPickRange = useCallback((startDate, endDate) => {
    setStart(startDate)
    setEnd(endDate)
    setShowRangeModal(false)
  }, [])

  // eslint-disable-next-line no-unused-vars
  const headerRight = useMemo(
    () => (
      <View style={styles.headerContainer}>
        <Text style={styles.dateRange}>
          {`${start.format('DD.MM.YYYY')} - ${end.format('DD.MM.YYYY')}`}
        </Text>
        <View style={styles.space} />
        <Ripple
          style={styles.datePickerButton}
          rippleContainerBorderRadius={PICKER_BUTTON_DIM / 2}
          rippleDuration={300}
          onPressIn={() => setShowRangeModal(true)}
        >
          <Image style={styles.pickerIcon} source={pickerIcon} />
        </Ripple>
      </View>
    ),
    [start, end, setShowRangeModal],
  )

  return (
    <AccountScreenWrapper
      loading={fetchTransactionsLoading}
      title={t('account.transactionHistory')}
      // headerRight={headerRight}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={transactions}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }) => <Transaction id={item.id} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<NoData loading={fetchTransactionsLoading} />}
        />
        {showRageModal && (
          <DateRangeModal isRTL={isRTL} start={start} end={end} onPick={onPickRange} />
        )}
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

TransactionHistory.propTypes = {}

TransactionHistory.defaultProps = {}

export default TransactionHistory
