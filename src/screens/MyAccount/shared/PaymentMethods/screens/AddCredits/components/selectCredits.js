import React, { useCallback, useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { findIndex } from 'lodash-es'

import I18nContext from '@root/i18n/I18nContext'

import ModalDropdownPicker from '@lib/ModalDropdownPicker'

import { selectCreditsStyles as styles } from './sharedStyles'

const dropDownIcon = require('@assets/icons/ic_dropdown.png')

const SelectCredits = ({ credits, selected, customCredit, onSelect, onSelectOther }) => {
  const { t } = useContext(I18nContext)
  const [showPicker, setShowPicker] = useState(false)

  const _onSelect = useCallback(
    (id) => {
      setShowPicker(false)
      onSelect(id)
    },
    [onSelect],
  )

  const _onSelectOther = useCallback(() => {
    setShowPicker(false)
    onSelectOther()
  }, [onSelectOther])

  const dropdownButton = useMemo(() => {
    let amount = t('home.otherMeaning')
    let price = ''
    const rowData = credits[findIndex(credits, (credit) => +credit.id === +selected)]
    if (!customCredit && rowData) {
      amount = `${rowData.amount} ${t('home.credits')}`
      price = rowData.price
    }

    return (
      <TouchableOpacity style={styles.creditItem} onPress={() => setShowPicker(true)}>
        <View style={styles.creditDetailContainer}>
          <Text style={styles.credit}>{amount}</Text>
          {!!price && <Text style={styles.cost}>{`$ ${price}`}</Text>}
        </View>
        <View style={styles.empty}>
          <Image source={dropDownIcon} style={styles.dropDownIcon} />
        </View>
      </TouchableOpacity>
    )
  }, [t, customCredit, credits, selected])

  const renderItem = useCallback(
    (rowData) => (
      <TouchableOpacity
        key={rowData.id}
        style={styles.creditItem}
        onPress={() => _onSelect(rowData.id)}
      >
        <View style={styles.creditDetailContainer}>
          <Text style={styles.credit}>{`${rowData.amount} ${t('home.credits')}`}</Text>
          <Text style={styles.cost}>${rowData.price}</Text>
        </View>
        <View style={styles.empty} />
      </TouchableOpacity>
    ),
    [t, _onSelect],
  )

  const renderExtraItem = useCallback(
    () => (
      <TouchableOpacity key={0} style={styles.creditItem} onPress={_onSelectOther}>
        <Text style={styles.credit}>{t('home.otherMeaning')}</Text>
      </TouchableOpacity>
    ),
    [t, _onSelectOther],
  )

  return (
    <View style={styles.container}>
      <View style={styles.selectButtonContainer}>{dropdownButton}</View>
      <ModalDropdownPicker
        data={credits}
        renderItem={renderItem}
        renderExtraItem={renderExtraItem}
        modalStyle={styles.dropDownContainer}
        dropdownStyle={[styles.dropDown, styles.shadow]}
        visible={showPicker}
        onClose={() => setShowPicker(false)}
      />
    </View>
  )
}

SelectCredits.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      id: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  customCredit: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onSelectOther: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

SelectCredits.defaultProps = {
  credits: [],
  customCredit: false,
  selected: undefined,
}

export default SelectCredits
