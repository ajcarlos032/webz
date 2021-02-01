import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import MembershipHeader from '@screens/MyAccount/screens/UpgradeAccount/screens/shared/membershipHeader'
import SecondaryButton from '@components/Buttons/secondaryButton'

import styles from './styles'

const Membership = ({ id, name, buttonText, onViewDetail }) => {
  return (
    <View style={styles.membershipContainer}>
      <MembershipHeader name={name} />
      <View style={styles.buttonContainer}>
        <SecondaryButton text={buttonText} onPress={() => onViewDetail(id)} />
      </View>
    </View>
  )
}

Membership.propTypes = {
  buttonText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onViewDetail: PropTypes.func.isRequired,
}

Membership.defaultProps = {}

export default Membership
