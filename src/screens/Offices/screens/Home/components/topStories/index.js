import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'

import Story from './story'

import { styles } from './styles'

const TopStories = ({ stories, onPressStory }) => {
  if (!Boolean(stories.length)) return null

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        style={styles.scrollContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Story key={item.id} story={item} onPressStory={onPressStory} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

TopStories.propTypes = {
  onPressStory: PropTypes.func.isRequired,
  stories: PropTypes.arrayOf(PropTypes.object),
}

TopStories.defaultProps = {
  stories: [],
}

export default TopStories
