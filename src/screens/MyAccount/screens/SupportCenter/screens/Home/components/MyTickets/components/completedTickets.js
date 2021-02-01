/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { userSelector, completedTicketIdsSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import NoData from '@components/NoData'
import Ticket from './ticket'

const CompletedTickets = () => {
  const navigation = useNavigation()
  const { t } = useContext(I18nContext)
  const { ticketsCompleteLoading } = useSelector(userSelector)
  const tickets = useSelector(completedTicketIdsSelector)

  const onPressTicket = useCallback(
    (id) => {
      console.log('Next release')
      // navigation.navigate('Ticket', { id })
    },
    [navigation],
  )

  return (
    <FlatList
      data={tickets}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Ticket
          id={item}
          ticketNo={`${t('account.ticketNo')} ${index + 1}`}
          onPressTicket={onPressTicket}
        />
      )}
      ListEmptyComponent={<NoData loading={ticketsCompleteLoading} />}
      keyExtractor={(item) => item}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

CompletedTickets.propTypes = {}

CompletedTickets.defaultProps = {}

export default CompletedTickets
