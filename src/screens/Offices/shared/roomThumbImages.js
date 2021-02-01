import React from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, StyleSheet, View } from 'react-native'

import { imageWithDefault } from '@helpers/imageHelper'

import { RW } from '@theme/utils'
import { DIM_V3 } from '@root/constants'

const RoomThumbImages = ({ images }) => {
  if (!Boolean(images.length)) return null

  return (
    <ScrollView
      contentContainerStyle={styles.imagesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {images.map(({ id, url }) => (
        <View key={`${id}`} style={styles.imageContainer}>
          <Image source={imageWithDefault(url)} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: RW(8),
    height: RW(70),
    justifyContent: 'center',
    marginRight: RW(10),
    overflow: 'hidden',
    width: RW(70),
  },
  imagesContainer: {
    paddingVertical: DIM_V3,
    width: '100%',
  },
})

RoomThumbImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
}

RoomThumbImages.defaultProps = {
  images: [],
}

export default RoomThumbImages
