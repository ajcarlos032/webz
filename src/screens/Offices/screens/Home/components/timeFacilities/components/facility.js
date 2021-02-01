import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { configSelector } from '@store/Config/Select'

import ToggleSwitch from '@lib/ToggleSwitch'

import { PRIMARY_BLACK, YELLOW } from '@theme/colors'
import { FONT_SF_PRO_MEDIUM, FONT_SIZE } from '@theme/fonts'
import { DIM_H1, DIM_V5 } from '@root/constants'

const Facility = ({ title, id, isSelected, onChange }) => {
  const { isRTL } = useSelector(configSelector)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <ToggleSwitch
        isOn={isSelected}
        isRTL={isRTL}
        onColor={YELLOW}
        offColor="#DADADA"
        label={null}
        onToggle={(isOn) => onChange(id, isOn)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIM_V5,
  },
  label: {
    color: PRIMARY_BLACK,
    fontFamily: FONT_SF_PRO_MEDIUM,
    fontSize: FONT_SIZE,
    marginLeft: DIM_H1,
  },
})

Facility.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

Facility.defaultProps = {}

export default Facility
