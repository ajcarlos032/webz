import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import UserActions from '@store/User/Actions'
import {
  userSelector,
  activeTicketIdsSelector,
  completedTicketIdsSelector,
} from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import AccountScreenWrapper from '@screens/MyAccount/screens/shared/accountScreenWrapper'

import Initial from './components/Initial'
import MyTickets from './components/MyTickets'
import NewTicketModal from './components/NewTicketModal'
import SuccessModal from './components/SuccessModal'

import styles from './styles'

const addIcon = require('@assets/icons/ic_plus.png')

const SupportCenter = () => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)
  const [showNewModal, setShowNewModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const { messageToSupportLoading, ticketsActiveLoading, ticketsCompleteLoading } = useSelector(
    userSelector,
  )
  const activeTickets = useSelector(activeTicketIdsSelector)
  const completedTickets = useSelector(completedTicketIdsSelector)

  // fetch tickets
  useEffect(() => {
    dispatch(UserActions.ticketsActive())
    dispatch(UserActions.ticketsComplete())
  }, [dispatch])

  const onCreatingTicket = useCallback(() => {
    setShowNewModal(true)
  }, [])

  const onCreateTicket = useCallback(
    (text) => {
      console.log('Creating ticket...', text)
      setShowNewModal(false)
      dispatch(
        UserActions.messageToSupport({ text }, () => {
          setShowSuccessModal(true)
        }),
      )
    },
    [dispatch],
  )

  const headerRight = useMemo(
    () => (
      <TouchableOpacity style={styles.headerRightButton} onPress={onCreatingTicket}>
        <Image source={addIcon} style={styles.headerRightIcon} />
      </TouchableOpacity>
    ),
    [onCreatingTicket],
  )

  return (
    <AccountScreenWrapper
      title={t('account.supportCenter')}
      loading={messageToSupportLoading || ticketsActiveLoading || ticketsCompleteLoading}
      headerRight={headerRight}
    >
      <SafeAreaView style={styles.area}>
        {activeTickets.length || completedTickets.length ? (
          <MyTickets />
        ) : (
          <Initial onCreateTicket={onCreatingTicket} />
        )}
      </SafeAreaView>
      {showNewModal && (
        <NewTicketModal onCreate={onCreateTicket} onClose={() => setShowNewModal(false)} />
      )}
      {showSuccessModal && (
        <SuccessModal title="Ticket No 123" onClose={() => setShowSuccessModal(false)} />
      )}
    </AccountScreenWrapper>
  )
}

SupportCenter.propTypes = {}

SupportCenter.defaultProps = {}

export default SupportCenter
