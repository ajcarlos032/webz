import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Share from 'react-native-share'

import Card from '@components/Card'

import { shareBookingStyles as styles } from './sharedStyles'

const shareIcon = require('@assets/icons/ic_share.png')
const shareRTLIcon = require('@assets/icons/ic_rtl_share.png')

const ShareBooking = ({ isRTL, shareTitle, shareMessage, help, label, url }) => {
  const onShare = useCallback(() => {
    const shareOption = {
      message: shareMessage,
      title: shareTitle,
      url,
    }
    Share.open(shareOption)
      .then((shareRes) => {
        console.log({ shareRes })
      })
      .catch((shareError) => {
        console.log({ shareError })
      })
  }, [shareMessage, shareTitle, url])

  return (
    <View style={styles.container}>
      <Card cardStyle={styles.card}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.urlContainer}>
          <Text style={styles.url} numberOfLines={1} ellipsizeMode="clip">
            {url}
          </Text>
          <TouchableOpacity style={styles.shareButton} activeOpacity={0.5} onPress={onShare}>
            <Image style={styles.shareIcon} source={isRTL ? shareRTLIcon : shareIcon} />
          </TouchableOpacity>
        </View>
      </Card>
      <Text style={[styles.helpText, isRTL && styles.rtlText]}>{help}</Text>
    </View>
  )
}

ShareBooking.propTypes = {
  help: PropTypes.string.isRequired,
  isRTL: PropTypes.bool,
  label: PropTypes.string.isRequired,
  shareMessage: PropTypes.string.isRequired,
  shareTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

ShareBooking.defaultProps = {
  isRTL: false,
}

export default ShareBooking
