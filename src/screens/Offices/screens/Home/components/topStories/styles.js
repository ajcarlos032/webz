import { StyleSheet } from 'react-native'

import { RW } from '@theme/utils'
import { WHITE } from '@theme/colors'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

export const STORY_ITEM_DIM = RW(70)
const STORY_BORDER = RW(3)
const STORY_IMAGE_DIM = STORY_ITEM_DIM - 2 * STORY_BORDER

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scrollContainer: {
    minHeight: STORY_ITEM_DIM + 2 * DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM / 2,
    paddingVertical: DIM_V7,
  },
  storyBackground: {
    borderRadius: STORY_ITEM_DIM / 2,
    height: STORY_ITEM_DIM,
    overflow: 'hidden',
    padding: STORY_BORDER,
    width: STORY_ITEM_DIM,
  },
  storyContainer: {
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: HORIZONTAL_DIM / 2,
  },
  storyImage: {
    height: '100%',
    minWidth: '100%',
    resizeMode: 'contain',
  },
  storyItem: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: STORY_IMAGE_DIM / 2,
    height: STORY_IMAGE_DIM,
    justifyContent: 'center',
    overflow: 'hidden',
    width: STORY_IMAGE_DIM,
  },
})
