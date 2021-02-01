import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import User from '@screens/MyAccount/shared/User'

import { RW } from '@theme/utils'
import styles from './styles'

const addMemberIcon = require('@assets/icons/ic_add_user.png')

const Members = ({ members, onAddMember }) => {
  const { t } = useContext(I18nContext)

  const renderMemberItem = useMemo(
    () => (member, index) => {
      return (
        <View style={styles.memberContainer} key={index}>
          <TouchableOpacity activeOpacity={0.5} style={styles.member} onPress={() => null}>
            <User
              avatar={member?.avatar?.url}
              avatarSize={RW(50)}
              noBorder
              containerStyle={styles.avatarContainer}
            />
            <Text style={styles.memberPhone}>{member.phone}</Text>
          </TouchableOpacity>
        </View>
      )
    },
    [],
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('account.members')}</Text>
        <Text style={styles.memberNum}>{`${members.length} ${t('account.people')}`}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.memberContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.member} onPress={onAddMember}>
            <View style={styles.addMemberContainer}>
              <Image source={addMemberIcon} style={styles.addMemberIcon} />
            </View>
            <Text style={styles.addMember}>{t('account.addUser')}</Text>
          </TouchableOpacity>
        </View>
        {members.map(renderMemberItem)}
      </ScrollView>
    </View>
  )
}

Members.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape({ url: PropTypes.string }),
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
  ),
  onAddMember: PropTypes.func.isRequired,
}

Members.defaultProps = {
  members: [],
}

export default Members
