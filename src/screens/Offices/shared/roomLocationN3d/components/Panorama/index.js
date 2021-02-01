import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'

import RoomInfoContext from '../../roomInfoContext'

import styles from './styles'

const panoramaIcon = require('@assets/icons/360.png')

const Panorama = () => {
  const [selected, setSelected] = useState(null)
  const { images } = useContext(RoomInfoContext)

  useEffect(() => {
    if (!Boolean(images?.length)) return
    setSelected((_selected) => _selected || images[0].url)
  }, [images])

  const onViewPanorama = useCallback(() => {
    console.log('View panorama...')
  }, [])

  if (!Boolean(images?.length)) return null

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.panoramaButton} onPress={onViewPanorama}>
        <Image source={panoramaIcon} style={styles.panoramaIcon} />
      </TouchableOpacity>
      <Image source={{ uri: selected }} style={styles.officeImage} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageSlider}
        contentContainerStyle={styles.imagesContainer}
      >
        {images.map(({ id, url }) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.75}
            style={styles.imageItem}
            onPress={() => setSelected(url)}
          >
            <Image
              source={{ uri: url }}
              style={[styles.officeImageItem, selected === url && styles.selectedImage]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

Panorama.propTypes = {}
Panorama.defaultProps = {}

export default Panorama
