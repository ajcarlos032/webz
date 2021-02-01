import React, { useCallback, useContext, useState } from 'react'
import { ScrollView, View } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'

import Intro1 from './intro1'
import Intro2 from './intro2'
// import Intro3 from './intro3'
// import Intro4 from './intro4'

import { HORIZONTAL_DIM, SCREEN_WIDTH } from '@root/constants'

const SCROLL_PAGE_WIDTH = SCREEN_WIDTH - 2 * HORIZONTAL_DIM

import styles from './styles'

const Intro = () => {
  const { t } = useContext(I18nContext)
  const [index, setIndex] = useState(0)

  const onSlide = useCallback(
    (event) => {
      const { x } = event.nativeEvent.contentOffset
      const indexOfNextScreen = Math.round(x / SCROLL_PAGE_WIDTH)
      setIndex(indexOfNextScreen)
    },
    [setIndex],
  )

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scollView}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        onScroll={onSlide}
      >
        <Intro1 t={t} />
        <Intro2 t={t} />
        {/* <Intro3 t={t} />
        <Intro4 t={t} /> */}
      </ScrollView>
      <View style={styles.paginatorContainer}>
        {Array.from(Array(2).keys()).map((key) => (
          <View style={[styles.dot, { opacity: index === key ? 1 : 0.5 }]} key={key} />
        ))}
      </View>
    </View>
  )
}

Intro.propTypes = {}

Intro.defaultProps = {}

export default Intro
