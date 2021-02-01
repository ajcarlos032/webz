import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import { DARK_GRAY } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_MD } from '@theme/fonts'
import { DIM_V0 } from '@root/constants'

const RoomFacilitiesBrief = ({ seats, facilities }) => {
  const { t } = useContext(I18nContext)

  const detail = useMemo(() => {
    let detailStr = ''
    if (seats) detailStr += `${seats} ${t('home.seats')}`
    facilities.forEach(({ name: facilityName }) => {
      detailStr += detailStr ? ` * ${facilityName}` : facilityName
    })

    return detailStr
  }, [t, seats, facilities])

  if (!Object.keys(detail).length) return null

  return (
    <View style={styles.facilityContainer}>
      <Text style={styles.facility}>{detail}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  facility: {
    color: DARK_GRAY,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_MD,
    paddingVertical: DIM_V0,
    textAlign: 'left',
  },
  facilityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})

RoomFacilitiesBrief.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  seats: PropTypes.number,
}

RoomFacilitiesBrief.defaultProps = {
  facilities: [],
  seats: 0,
}

export default RoomFacilitiesBrief
