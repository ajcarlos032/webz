/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { userSelector, activeTicketIdsSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import NoData from '@components/NoData'
import Ticket from './ticket'

const ActiveTickets = () => {
  const navigation = useNavigation()
  const { t } = useContext(I18nContext)
  const { ticketsActiveLoading } = useSelector(userSelector)
  const tickets = useSelector(activeTicketIdsSelector)

  const onPressTicket = useCallback(
    (id, ticketNo) => {
      console.log('Next release')
      // navigation.navigate('Ticket', { id, ticketNo })
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
      ListEmptyComponent={<NoData loading={ticketsActiveLoading} />}
      keyExtractor={(item) => item}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

ActiveTickets.propTypes = {}

ActiveTickets.defaultProps = {}

export default ActiveTickets
