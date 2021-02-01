import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { configSelector } from '@store/Config/Select'
import I18nContext from '@root/i18n/I18nContext'

import Message from './components/Message'
import MessageForm from './components/MessageForm'

import styles from './styles'

// only for test
const _messages = [
  {
    id: '1',
    me: true,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    time: '10:55 AM',
  },
  {
    id: '2',
    me: false,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    time: '12:15 AM',
  },
]

// eslint-disable-next-line no-unused-vars
const Messages = ({ loading, messages, onSend }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)

  const renderDivider = useCallback(
    (label) => (
      <View key={new Date().getTime()} style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerLabel}>{label}</Text>
        <View style={styles.line} />
      </View>
    ),
    [],
  )

  const getTimeLabel = useCallback(
    (time) => {
      const diff = moment(time).diff(moment().format('YYYY-MM-DD'), 'days')
      let label = ''
      if (diff === -1) {
        label = t('home.yesterday')
      } else if (diff === 0) {
        label = t('home.today')
      } else if (moment(time).isSame(moment(), 'week')) {
        label = t(`home.${moment(time).format('ddd').toLowerCase()}`)
      } else {
        label = `${t(`home.${moment(time).format('dddd').toLowerCase()}`)}, ${t(
          `home.${moment(time).format('MMM').toLowerCase()}`,
        )} ${moment(time).format('DD').toLowerCase()}, ${moment(time).format('YYYY').toLowerCase()}`
      }
      return label
    },
    [t],
  )

  const renderItem = useCallback(
    ({ item, index }) => {
      const currentDate = moment(item.created_at).format('YYYY-MM-DD')
      if (index === 0) {
        return (
          <>
            {renderDivider(getTimeLabel(currentDate))}
            <Message key={item.created_at} message={item} />
          </>
        )
      }

      const prevDate = moment(messages[index - 1].created_at).format('YYYY-MM-DD')
      if (prevDate === currentDate) {
        return <Message key={item.created_at} message={item} />
      }

      return (
        <>
          {renderDivider(getTimeLabel(currentDate))}
          <Message key={item.created_at} message={item} />
        </>
      )
    },
    [messages, getTimeLabel, renderDivider],
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={messages || _messages}
        style={styles.messages}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <MessageForm isRTL={isRTL} onSend={onSend} />
    </View>
  )
}

Messages.propTypes = {
  loading: PropTypes.bool,
  messages: PropTypes.array,
  onSend: PropTypes.func.isRequired,
}

Messages.defaultProps = {
  loading: false,
  messages: [],
}

export default Messages
