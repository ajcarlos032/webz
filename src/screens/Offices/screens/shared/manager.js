import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import I18nContext from '@root/i18n/I18nContext'

import Card from '@components/Card'
import Phone from '@components/Phone'
import User from '@screens/MyAccount/shared/User'

import { GRAY, PRIMARY_BLACK } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD, LINE_HEIGHT22 } from '@theme/fonts'
import { DIM_H5, DIM_V5, HORIZONTAL_DIM } from '@root/constants'

import { manager } from '@temp/manager'

const Manager = ({ containerStyle }) => {
  const { t } = useContext(I18nContext)
  const { isRTL } = useSelector(configSelector)
  const { avatar, name, phone, role } = manager

  return (
    <View style={[styles.container, containerStyle]}>
      <Card cardStyle={styles.card}>
        <View style={styles.managerInfoContainer}>
          <User avatar={avatar} name={name}>
            {!!role && <Text style={styles.role}>{role}</Text>}
          </User>
          <Phone isRTL={isRTL} phone={phone} />
        </View>
        <View style={styles.helperContainer}>
          <Text style={styles.helperText}>{t('home.managerHelper')}</Text>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V5,
  },
  container: {
    paddingHorizontal: HORIZONTAL_DIM,
    width: '100%',
  },
  helperContainer: {
    marginTop: DIM_V5,
    width: '100%',
  },
  helperText: {
    alignSelf: 'flex-start',
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
    textAlign: 'left',
  },
  managerInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  role: {
    color: GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    lineHeight: LINE_HEIGHT22,
  },
})

Manager.propTypes = {
  containerStyle: PropTypes.object,
}

Manager.defaultProps = {
  containerStyle: {},
}

export default Manager
