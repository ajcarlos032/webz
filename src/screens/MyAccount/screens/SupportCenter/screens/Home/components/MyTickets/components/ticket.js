import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { ticketByIdSelector } from '@store/User/Select'

import Card from '@components/Card'
import User from '@screens/MyAccount/shared/User'

import { RW } from '@theme/utils'
import { DARK_BLUE, WHITE } from '@theme/colors'
import {
  FONT_SF_PRO_BOLD,
  FONT_SF_PRO_REGULAR,
  FONT_SF_PRO_SEMIBOLD,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  LINE_HEIGHT12,
  LINE_HEIGHT16,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H6, DIM_V3, DIM_V5, DIM_V8, HORIZONTAL_DIM } from '@root/constants'

const Ticket = ({ id, ticketNo, onPressTicket }) => {
  const { last_message, messages_count } = useSelector(ticketByIdSelector(id))

  return (
    <View style={styles.container}>
      <Card>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.ticketItem}
          onPress={() => onPressTicket(id, ticketNo)}
        >
          <View style={styles.header}>
            <View style={styles.ticketContent}>
              <Text style={styles.ticketNo}>{ticketNo}</Text>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {last_message}
              </Text>
            </View>
            <User avatar={null} avatarSize={RW(36)} noBorder />
          </View>
          <View style={styles.messageNumContainer}>
            <Text style={styles.messageNumber}>{messages_count}</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lastMessage: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
    lineHeight: LINE_HEIGHT16,
  },
  messageNumber: {
    color: WHITE,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XS,
    lineHeight: LINE_HEIGHT12,
  },
  messageNumContainer: {
    alignItems: 'center',
    backgroundColor: DARK_BLUE,
    borderRadius: DIM_V8 / 2,
    height: DIM_V8,
    justifyContent: 'center',
    marginTop: DIM_V3,
    width: DIM_V8,
  },
  ticketContent: {
    flexDirection: 'column',
  },
  ticketItem: {
    flexDirection: 'column',
    height: '100%',
    paddingHorizontal: DIM_H6,
    paddingVertical: DIM_V5,
    width: '100%',
  },
  ticketNo: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT20,
  },
})

Ticket.propTypes = {
  id: PropTypes.string.isRequired,
  onPressTicket: PropTypes.func.isRequired,
  ticketNo: PropTypes.string.isRequired,
}

Ticket.defaultProps = {}

export default Ticket
