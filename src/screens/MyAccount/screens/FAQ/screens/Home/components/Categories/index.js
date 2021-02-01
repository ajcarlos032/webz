import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

import { faqCategoriesSelector } from '@store/Faq/Select'

import styles from './styles'

const Categories = ({ categoryIds, onChange }) => {
  const categories = useSelector(faqCategoriesSelector)

  const onChangeCategory = useCallback(
    (categoryId) => {
      const _categoryIds = !categoryId
        ? []
        : categoryIds.includes(categoryId)
        ? categoryIds.filter((id) => id !== categoryId)
        : [...categoryIds, categoryId]

      onChange(_categoryIds)
    },
    [categoryIds, onChange],
  )

  const renderTypeItem = useMemo(
    () => (category, index) => {
      const isSelected = Array.from(categoryIds).includes(category.id)
      return (
        <View style={styles.categoryContainer} key={index}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.category, isSelected && styles.selected]}
            onPress={() => onChangeCategory(category.id)}
          >
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        </View>
      )
    },
    [categoryIds, onChangeCategory],
  )

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.categoryContainer} key={0}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.category, !categoryIds.length && styles.selected]}
            onPress={() => onChangeCategory(null)}
          >
            <Text style={styles.categoryName}>All</Text>
          </TouchableOpacity>
        </View>
        {categories.map(renderTypeItem)}
      </ScrollView>
    </View>
  )
}

Categories.propTypes = {
  categoryIds: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
}

Categories.defaultProps = {
  categoryIds: [],
}

export default Categories
