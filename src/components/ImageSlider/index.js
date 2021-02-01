import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'

import { imageWithDefault } from '@helpers/imageHelper'

import { SCREEN_WIDTH } from '@root/constants'

import styles from './styles'

const ImageSlider = ({ urls, height, width, paginatorStyle, onItemPress = undefined }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onSlide = useCallback(
    (event) => {
      const { x } = event.nativeEvent.contentOffset
      setActiveIndex(Math.round(x / width))
    },
    [width],
  )

  const Images = useMemo(() => {
    if (!urls.length)
      return (
        <TouchableOpacity
          activeOpacity={onItemPress ? 0.75 : 1}
          style={[styles.imageContainer, { height, width }]}
          onPress={onItemPress}
        >
          <Image style={{ height, width }} resizeMode="cover" source={imageWithDefault(null)} />
        </TouchableOpacity>
      )

    return urls.map((url, index) => (
      <TouchableOpacity
        activeOpacity={onItemPress ? 0.75 : 1}
        key={index}
        style={[styles.imageContainer, { height, width }]}
        onPress={onItemPress}
      >
        <Image style={{ height, width }} resizeMode="cover" source={imageWithDefault(url)} />
      </TouchableOpacity>
    ))
  }, [urls, height, width, onItemPress])

  return (
    <View style={[styles.container, { height, width }]}>
      <ScrollView
        style={styles.slider}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        scrollEnabled={Images.length > 1}
        onScroll={onSlide}
      >
        {Images}
      </ScrollView>
      <View style={[styles.paginatorContainer, paginatorStyle]}>
        {Array.from(Array(urls.length).keys()).map((index) => (
          <View key={index} style={[styles.paginator, activeIndex === index && styles.active]} />
        ))}
      </View>
    </View>
  )
}

ImageSlider.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onItemPress: PropTypes.func,
  paginatorStyle: PropTypes.object,
  urls: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

ImageSlider.defaultProps = {
  height: (2 * SCREEN_WIDTH) / 3,
  onItemPress: undefined,
  paginatorStyle: {},
  urls: [],
  width: SCREEN_WIDTH,
}

export default ImageSlider
