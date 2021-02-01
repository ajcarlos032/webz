import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { facilitiesSelector } from '@store/Office/Select'

import I18nContext from '@root/i18n/I18nContext'

import { BLACK, SECONDARY } from '@theme/colors'
import { DIM_H5, DIM_V5 } from '@root/constants'

import Facility from './facility'

import sharedStyles from '../styles'

const Facilities = ({ facilities, onChange }) => {
  const { t } = useContext(I18nContext)

  const roomFacilities = useSelector(facilitiesSelector)

  const onChangeFilter = useCallback(
    (id, selected) => {
      let selectedFilters = [...facilities]

      if (selected) {
        selectedFilters.push(id)
      } else {
        selectedFilters = selectedFilters.filter((facility) => facility !== id)
      }

      onChange(selectedFilters)
    },
    [facilities, onChange],
  )

  if (!roomFacilities.length) return null

  return (
    <View style={styles.container}>
      <Text style={[sharedStyles.title, styles.title]}>{t('home.facilities')}</Text>
      {roomFacilities.map(({ id, name }) => (
        <Facility
          key={id}
          id={id}
          title={name}
          isSelected={facilities.includes(id)}
          onChange={onChangeFilter}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: SECONDARY,
    borderTopWidth: 1,
    flexDirection: 'column',
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V5,
    width: '100%',
  },
  title: {
    color: BLACK,
  },
})

Facilities.propTypes = {
  facilities: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
}

Facilities.defaultProps = {
  facilities: [],
}

export default Facilities
