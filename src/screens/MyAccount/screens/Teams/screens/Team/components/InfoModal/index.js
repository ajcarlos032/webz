import React, { useCallback, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import TeamActions from '@store/Team/Actions'
import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import PrimaryButton from '@components/Buttons/primaryButton'

import Members from '../Members'
import BookingInfo from '../BookingInfo'

import styles from './styles'

const InfoModal = ({ getTeam, onClose }) => {
  const dispatch = useDispatch()
  const { t } = useContext(I18nContext)

  const team = useMemo(() => getTeam(), [getTeam])

  console.log({ team })

  const onAddMember = useCallback(() => {
    console.log(`adding members to team#${team.id}`)
    dispatch(
      TeamActions.addMember({ phone_numbers: [], team_id: team.id }, () => {
        console.log('added member to team')
      }),
    )
  }, [dispatch, team])

  return (
    <Modal
      isVisible
      modalStyle={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeEnabled={false}
      onModalHide={onClose}
    >
      <View style={styles.container}>
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{t('account.teamInfo')}</Text>
            <Members members={team.members} onAddMember={onAddMember} />
            <BookingInfo booking={team.booking} />
          </View>
        </ScrollView>
        <PrimaryButton text={t('common.close')} wrapperStyle={styles.button} onPress={onClose} />
      </View>
    </Modal>
  )
}

InfoModal.propTypes = {
  getTeam: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

InfoModal.defaultProps = {}

export default InfoModal
