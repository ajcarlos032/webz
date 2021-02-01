import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import FloatingLabelInput from '@components/form/FloatingLabelInput'
import PrimaryButton from '@components/Buttons/primaryButton'

import styles from './styles'

const NewTeamModal = ({ loading, onCreate, onClose }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  const [title, setTitle] = useState(null)
  const [members, setMembers] = useState([{ phone: null }])
  const [errors, setErrors] = useState({})

  const _onCreate = useCallback(() => {
    const _errors = {}
    if (!title) _errors.title = t('account.emptyError')

    const _members = members.filter(({ phone }) => Boolean(phone))

    if (!_members.length) _errors.member = 'Please add member'

    setErrors(_errors)

    if (!Object.keys(_errors).length) {
      const phone_numbers = _members.map(({ phone }) => phone)
      onCreate({ phone_numbers, title })
    }
  }, [t, members, title, onCreate])

  useEffect(() => {
    setErrors((e) => (title ? { ...e, title: '' } : e))
  }, [title])

  const onAddMember = useCallback(() => {
    const _members = [...members, { phone: null }]

    setMembers(_members)
  }, [members])

  const setMember = useCallback(
    (index, phone) => {
      const _members = [...members]
      _members[index].phone = phone

      setErrors((e) => (phone ? { ...e, member: '' } : e))
      setMembers(_members)
    },
    [members],
  )

  return (
    <Modal
      isVisible
      modalStyle={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onModalHide={onClose}
    >
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          <View style={styles.teamContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>{t('account.teamName')}</Text>
              <View style={styles.inputRow}>
                <FloatingLabelInput
                  value={title}
                  label={t('auth.name')}
                  onChange={setTitle}
                  error={errors.title}
                  disabled={loading}
                  isRTL={isRTL}
                />
              </View>
            </View>
            <View style={styles.membersContainer}>
              {members.map((member, index) => (
                <View key={index} style={styles.memberRow}>
                  <Text style={styles.memberNo}>{`${t('account.memberNo')}${index + 1}`}</Text>
                  <View style={styles.inputRow}>
                    <FloatingLabelInput
                      value={member.phone}
                      label={t('account.phoneNumber')}
                      keyboard="phone-pad"
                      onChange={(phone) => setMember(index, phone)}
                      error={index === 0 ? errors.member : null}
                      disabled={loading}
                      isRTL={isRTL}
                    />
                  </View>
                </View>
              ))}
              <TouchableOpacity style={styles.addButton} onPress={onAddMember}>
                <Text style={styles.add}>{`+ ${t('account.add')}`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <PrimaryButton
        text={t('common.create')}
        wrapperStyle={styles.button}
        onPress={_onCreate}
        disabled={loading}
      />
    </Modal>
  )
}

NewTeamModal.propTypes = {
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
}

NewTeamModal.defaultProps = {
  loading: false,
}

export default NewTeamModal
