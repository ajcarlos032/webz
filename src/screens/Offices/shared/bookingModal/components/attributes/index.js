import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { orderBy } from 'lodash-es'

import { attributesSelector } from '@store/Office/Select'

import Attribute from './attribute'

const Attributes = ({ bookingAttributes, onChange }) => {
  const roomAttributes = useSelector(attributesSelector)

  const onChangeAttribute = useCallback(
    (attribute) => {
      const attributes = bookingAttributes.filter((bAttribute) => bAttribute.id !== attribute.id)
      if (attribute.quantity) attributes.push(attribute)

      const _attributes = orderBy(attributes, ['name'], ['asc'])

      onChange(_attributes)
    },
    [bookingAttributes, onChange],
  )

  const getQuantity = useCallback(
    (attributeId) => {
      let _quantity = 0
      bookingAttributes.forEach(({ id, quantity }) => {
        if (id === attributeId) _quantity = quantity
      })

      return _quantity
    },
    [bookingAttributes],
  )

  if (!roomAttributes.length) return null

  return (
    <View style={styles.container}>
      {roomAttributes.map((roomAttribute) => (
        <Attribute
          key={roomAttribute.id}
          attribute={roomAttribute}
          label={roomAttribute.name}
          quantity={getQuantity(roomAttribute.id)}
          onChange={onChangeAttribute}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
})

Attributes.propTypes = {
  bookingAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
  onChange: PropTypes.func.isRequired,
}

Attributes.defaultProps = {
  bookingAttributes: [],
}

export default Attributes
