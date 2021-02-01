import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import { RH } from '@theme/utils'
import { DARK_BLUE, PRIMARY_BLACK, SECONDARY } from '@theme/colors'
import {
  FONT_SF_PRO_MEDIUM,
  FONT_SF_PRO_REGULAR,
  FONT_SIZE,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  LINE_HEIGHT20,
} from '@theme/fonts'
import { DIM_H3, DIM_H6, DIM_V2, DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const ParkingInfo = () => {
  const { t } = useContext(I18nContext)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('home.parking')}</Text>
      <View style={styles.parkings}>
        <View style={styles.parkingRow}>
          <Text style={styles.parkingName}>Place#1</Text>
          <Text style={styles.parkingLabel}>P12</Text>
        </View>
        <View style={styles.parkingRow}>
          <Text style={styles.parkingName}>Place#2</Text>
          <Text style={styles.parkingLabel}>P13</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: SECONDARY,
    borderTopWidth: RH(0.5),
    flexDirection: 'column',
    paddingHorizontal: HORIZONTAL_DIM,
    paddingVertical: DIM_V7,
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT20,
  },
  parkingLabel: {
    borderColor: DARK_BLUE,
    borderRadius: DIM_H3,
    borderWidth: RH(1),
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE_LG,
    paddingHorizontal: DIM_H6,
    paddingVertical: DIM_V2,
  },
  parkingName: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  parkingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: DIM_V7,
  },
  parkings: {
    flexDirection: 'column',
  },
})

ParkingInfo.propTypes = {}

ParkingInfo.defaultProps = {}

export default ParkingInfo
