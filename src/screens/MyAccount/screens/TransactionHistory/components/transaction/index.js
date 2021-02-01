import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { transactionsByIdSelector } from '@store/User/Select'
import I18nContext from '@root/i18n/I18nContext'

import { UTCToLocalTime } from '@helpers/utils'

import styles from './styles'

const Transaction = ({ id }) => {
  const { t } = useContext(I18nContext)
  const transaction = useSelector(transactionsByIdSelector(id))
  const { room, credit, created_at } = transaction

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{room?.name}</Text>
      {/* {Boolean(room?.booking) && (
        <Text style={styles.time}>
          {moment.utc(moment(end).diff(start)).format(`HH ${t('common.hr')} mm ${t('common.min')}`)}
        </Text>
      )} */}
      <View style={styles.footer}>
        <Text style={styles.date}>{UTCToLocalTime(created_at, 'DD.MM.YYYY')}</Text>
        <Text style={styles.credit}>{`${credit} ${t('common.credit')}`}</Text>
      </View>
    </View>
  )
}

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
}

Transaction.defaultProps = {}

export default Transaction
