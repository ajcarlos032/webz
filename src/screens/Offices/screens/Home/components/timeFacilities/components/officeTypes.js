import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { typesSelector } from '@store/Office/Select'

import { DARK_BLUE, YELLOW, WHITE } from '@theme/colors'
import { DIM_H5, DIM_H6, DIM_H8, DIM_V0, DIM_V2, DIM_V6 } from '@root/constants'
import { FONT_SF_PRO_REGULAR, FONT_SIZE_SM } from '@theme/fonts'

import sharedStyles from '../styles'

const OfficeTypes = ({ title, selectedTypes, onSelect }) => {
  const types = useSelector(typesSelector)

  const renderTypeItem = useMemo(
    () => (type, index) => {
      const isSelected = Array.from(selectedTypes).includes(type.id)
      return (
        <View style={styles.typeContainer} key={index}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.type, isSelected && styles.selected]}
            onPress={() => onSelect(type.id)}
          >
            <Text style={styles.typeText}>{type.name}</Text>
          </TouchableOpacity>
        </View>
      )
    },
    [selectedTypes, onSelect],
  )

  if (!types.length) return null

  return (
    <View style={styles.container}>
      <Text style={sharedStyles.title}>{title}</Text>
      <ScrollView style={styles.typesContainer} horizontal showsHorizontalScrollIndicator={false}>
        {types.map(renderTypeItem)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V6,
    width: '100%',
  },
  selected: {
    backgroundColor: YELLOW,
    borderColor: YELLOW,
  },
  type: {
    backgroundColor: WHITE,
    borderColor: DARK_BLUE,
    borderRadius: DIM_H8,
    borderWidth: 1,
    paddingHorizontal: DIM_H8,
    paddingVertical: DIM_V2,
  },
  typeContainer: {
    marginRight: DIM_H6,
  },
  typesContainer: {
    flexDirection: 'row',
    marginTop: DIM_V6,
    paddingVertical: DIM_V0,
    width: '100%',
  },
  typeText: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE_SM,
  },
})

OfficeTypes.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedTypes: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

OfficeTypes.defaultProps = {
  selectedTypes: [],
}

export default OfficeTypes
