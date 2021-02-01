import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Modal from '@components/Modal'
import PureButton from '@components/Buttons/pureButton'

import { DARK_BLUE, DARK_SILVER, SECONDARY, WHITE } from '@theme/colors'
import { FONT_SF_PRO_REGULAR, FONT_SIZE } from '@theme/fonts'
import { DIM_H3, DIM_H5, DIM_V1, DIM_V3, DIM_H9, DIM_V12 } from '@root/constants'

import { FLAGS } from './flags'
import { countries } from './countries.json'

const PickerModal = ({ onSelect, onCancel }) => {
  const { t } = useContext(I18nContext)

  const CountryItem = useMemo(
    () => (country, index) => (
      <TouchableOpacity
        key={index}
        style={styles.listItem}
        activeOpacity={0.5}
        onPress={() => onSelect(country)}
      >
        <Image source={FLAGS[country.iso2]} style={styles.image} resizeMode="contain" />
        <View style={styles.countryNameContainer}>
          <Text style={styles.countryName}>{country.name}</Text>
        </View>
        <Text style={styles.dialCode}>{country.dialCode}</Text>
      </TouchableOpacity>
    ),
    [onSelect],
  )

  return (
    <Modal isVisible modalStyle={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.body}>
          <FlatList
            data={countries}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => CountryItem(item)}
            keyExtractor={(item) => item.iso2}
          />
        </View>
        <PureButton text={t('common.cancel')} onPress={onCancel} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingBottom: DIM_V1,
    width: '100%',
  },
  countryName: {
    color: DARK_BLUE,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    textAlign: 'center',
  },
  countryNameContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: DIM_H5,
  },
  dialCode: {
    color: DARK_SILVER,
    fontFamily: FONT_SF_PRO_REGULAR,
    fontSize: FONT_SIZE,
    textAlign: 'right',
  },
  image: {
    width: DIM_H9,
  },
  listItem: {
    alignItems: 'center',
    borderBottomColor: SECONDARY,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: DIM_H3,
    paddingVertical: DIM_V3,
  },
  modal: {
    paddingVertical: DIM_V12,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: DIM_H5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: DIM_H3,
    paddingVertical: DIM_V1,
  },
})

PickerModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

PickerModal.defaultProps = {}

export default PickerModal
