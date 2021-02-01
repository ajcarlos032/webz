import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import LinearGradient from 'react-native-linear-gradient'

import { imageWithDefault } from '@helpers/imageHelper'

import {
  SECONDARY_GRADIENT_START,
  SECONDARY_GRADIENT_END,
  YELLOW_GRADIENT_START,
  YELLOW_GRADIENT_END,
  WHITE,
} from '@theme/colors'

import { STORY_ITEM_DIM, styles } from './styles'

const Story = ({ story, onPressStory }) => {
  const { id, liked, urls } = story
  const storyBackground = useMemo(() => {
    if (liked) return [YELLOW_GRADIENT_START, YELLOW_GRADIENT_END]

    return [SECONDARY_GRADIENT_START, SECONDARY_GRADIENT_END]
  }, [liked])

  return (
    <View style={styles.storyContainer}>
      <LinearGradient
        style={[styles.storyBackground]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={storyBackground}
      >
        <Ripple
          style={styles.storyItem}
          rippleColor={WHITE}
          rippleContainerBorderRadius={STORY_ITEM_DIM / 2}
          rippleDuration={300}
          rippleOpacity={0.75}
          onPress={() => onPressStory(id)}
        >
          <Image source={imageWithDefault(urls[0])} style={styles.storyImage} />
        </Ripple>
      </LinearGradient>
    </View>
  )
}

Story.propTypes = {
  onPressStory: PropTypes.func.isRequired,
  story: PropTypes.object.isRequired,
}

Story.defaultProps = {}

export default Story
