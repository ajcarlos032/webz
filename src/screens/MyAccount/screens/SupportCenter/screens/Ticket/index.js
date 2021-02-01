import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import { ticketByIdSelector, userSelector } from '@store/User/Select'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'
import Messages from '@components/Messages'

import styles from './styles'

const Ticket = ({ route }) => {
  const dispatch = useDispatch()
  const { ticketMessagesLoading } = useSelector(userSelector)
  const { messages } = useSelector(ticketByIdSelector(route?.params?.id))

  // fetch tickets
  useEffect(() => {
    dispatch(UserActions.ticketMessages(route?.params?.id))
  }, [route, dispatch])

  const onSend = useCallback(
    (text) => {
      dispatch(UserActions.messageToSupport({ text, ticket_id: route?.params?.id }))
    },
    [route, dispatch],
  )

  console.log({ messages })
  return (
    <AccountScreenWrapper title={route?.params?.ticketNo}>
      <SafeAreaView style={styles.area}>
        <Messages loading={ticketMessagesLoading} messages={messages} onSend={onSend} />
      </SafeAreaView>
    </AccountScreenWrapper>
  )
}

Ticket.propTypes = {
  route: PropTypes.object.isRequired,
}

Ticket.defaultProps = {}

export default Ticket
