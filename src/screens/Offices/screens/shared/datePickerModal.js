import React, { useCallback, useContext, useRef, forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { Portal } from 'react-native-portalize'
import { Modalize } from 'react-native-modalize'

import I18nContext from '@root/i18n/I18nContext'

import PrimaryButton from '@components/Buttons/primaryButton'

import { useCombinedRefs } from '@helpers/useCombinedRefs'

import DatePicker from '@components/DatePicker'

import { PRIMARY_BLACK, WHITE } from '@theme/colors'
import { FONT_SF_PRO_BOLD, FONT_SIZE_XL, LINE_HEIGHT28 } from '@theme/fonts'
import { DIM_H0, DIM_H5, DIM_V1, DIM_V9 } from '@root/constants'

const DatePickerModal = forwardRef(({ value, onSelectDate }, ref) => {
  const { t } = useContext(I18nContext)
  const modalizeRef = useRef(null)
  const combinedRef = useCombinedRefs(ref, modalizeRef)
  const [date, setDate] = useState(null)

  const onDatePicked = useCallback(() => {
    modalizeRef.current?.close()
    onSelectDate(date)
  }, [date, onSelectDate])

  return (
    <Portal>
      <Modalize
        ref={combinedRef}
        adjustToContentHeight
        modalStyle={styles.modal}
        handleStyle={styles.handle}
        closeOnOverlayTap={false}
      >
        <View style={styles.pickerModalContainer}>
          <Text style={styles.pickerTitle}>{t('home.selectDate')}</Text>
          <DatePicker value={value} onDateChange={setDate} />
          <PrimaryButton text={t('home.select')} onPress={onDatePicked} />
        </View>
      </Modalize>
    </Portal>
  )
})

const styles = StyleSheet.create({
  handle: {
    backgroundColor: WHITE,
    borderRadius: DIM_H0,
    top: -DIM_V1,
    width: 80,
  },
  modal: {
    backgroundColor: WHITE,
    borderTopLeftRadius: DIM_H5,
    borderTopRightRadius: DIM_H5,
  },
  pickerModalContainer: {
    flex: 1,
    paddingHorizontal: DIM_H5,
    paddingVertical: DIM_V9,
  },
  pickerTitle: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_XL,
    lineHeight: LINE_HEIGHT28,
    textAlign: 'left',
  },
})

DatePickerModal.propTypes = {
  onSelectDate: PropTypes.func.isRequired,
  value: PropTypes.string,
}

DatePickerModal.defaultProps = {
  value: undefined,
}

export default DatePickerModal
