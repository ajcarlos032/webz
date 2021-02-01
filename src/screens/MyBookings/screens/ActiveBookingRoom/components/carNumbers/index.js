import React, { useCallback, useContext, useMemo, useRef, useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native'
import { Portal } from 'react-native-portalize'
import { Modalize } from 'react-native-modalize'
import { useSelector } from 'react-redux'

import { userSelector } from '@store/User/Select'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'
import CardNumberList from '@screens/MyAccount/shared/CarNumber/List'
import AddCarNumberModal from '../addCarNumberModal'

import { WHATSAPP_NUMBER } from '@root/constants'
import { useCombinedRefs } from '@helpers/useCombinedRefs'

import styles from './styles'

const CarNumberChoiceModal = forwardRef((_, ref) => {
  const { t } = useContext(I18nContext)
  const modalizeRef = useRef(null)
  const combinedRef = useCombinedRefs(ref, modalizeRef)
  const [selected, setSelected] = useState(undefined)
  const [showAddCarNumberModal, setShowAddCarNumberModal] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const {
    me: { car_numbers },
  } = useSelector(userSelector)

  const carNumbers = useMemo(() => {
    const _carNumbers = car_numbers.map((cNumber) => {
      const c = { ...cNumber }
      c.default = c.id === selected

      return c
    })

    return _carNumbers
  }, [car_numbers, selected])

  const onSelectCarNumber = useCallback(() => {
    let selectedNumber = ''
    car_numbers.forEach(({ id, number }) => {
      if (selected === id) selectedNumber = number
    })
    if (selectedNumber) {
      const url = `whatsapp://send?text=Car number: ${selectedNumber}&phone=${WHATSAPP_NUMBER}`
      Linking.openURL(url)
        .then((data) => {
          console.log(`WhatsApp Opened successfully ${data}`) // <---Success
        })
        .catch(() => {
          Alert.alert('Make sure WhatsApp installed on your device') // <---Error
        })
    }
    combinedRef.current?.close()
  }, [car_numbers, combinedRef, selected])

  const footerButton = useMemo(() => {
    if (!Boolean(car_numbers?.length)) {
      return (
        <PrimaryButton
          text={t('account.addCarNumber')}
          onPress={() => setShowAddCarNumberModal(true)}
        />
      )
    }
    return (
      <PrimaryButton text={t('account.apply')} disabled={!selected} onPress={onSelectCarNumber} />
    )
  }, [car_numbers?.length, onSelectCarNumber, selected, t])

  return (
    <Portal>
      <View style={[styles.overlay, !showOverlay && styles.hiddenOverlay]} />
      <Modalize
        ref={combinedRef}
        modalStyle={[styles.modal, showAddCarNumberModal && styles.hidden]}
        adjustToContentHeight
        childrenStyle={styles.reviewContainer}
        handleStyle={styles.handle}
        withOverlay={false}
        onOpened={() => setShowOverlay(true)}
        onClosed={() => setShowOverlay(false)}
        closeOnOverlayTap={false}
      >
        <Text style={[styles.title, !Boolean(car_numbers?.length) && styles.noNumTitle]}>
          {t('account.chooseCarNumber')}
        </Text>
        <CardNumberList carNumbers={carNumbers} onSelect={setSelected} />
        {Boolean(car_numbers?.length) && (
          <TouchableOpacity
            style={styles.addNewNumberButton}
            onPress={() => setShowAddCarNumberModal(true)}
          >
            <Text style={styles.addNewNumber}>{`+ ${t('account.addCarNumber')}`}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.buttonContainer}>{footerButton}</View>
      </Modalize>
      {showAddCarNumberModal && (
        <AddCarNumberModal onClose={() => setShowAddCarNumberModal(false)} />
      )}
    </Portal>
  )
})

CarNumberChoiceModal.propTypes = {
  review: PropTypes.shape({
    description: PropTypes.string,
    member_avatar_url: PropTypes.string,
    member_name: PropTypes.string,
    rate: PropTypes.number,
  }),
}

CarNumberChoiceModal.defaultProps = {
  review: {},
}

export default CarNumberChoiceModal
