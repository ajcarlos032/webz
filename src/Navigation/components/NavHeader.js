import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import ThemeContext from '@root/ThemeContext'

import NavBack from './NavBack'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavTitle from './NavTitle'

import { RH } from '@theme/utils'
import { DARK_BLUE, SECONDARY, TRANSPARENT } from '@theme/colors'
import { HORIZONTAL_DIM, HEADER_HEIGHT, SCREEN_WIDTH, STATUS_BAR } from '@root/constants'
import { FONT_SF_PRO_BOLD, FONT_SIZE_3XL, LINE_HEIGHT40 } from '@theme/fonts'

const NavHeader = ({
  hasBack,
  backText,
  title,
  navLeft,
  navRight,
  widthBottomBorder,
  customHeader,
  onBack,
}) => {
  const { statusBarColor } = useContext(ThemeContext)

  return (
    <View style={[styles.container, widthBottomBorder && styles.borderBottom]}>
      <View style={[styles.statusBarContainer, { backgroundColor: statusBarColor }]} />
      {customHeader || (
        <View style={styles.headerContainer}>
          {hasBack && <NavBack text={backText} onBack={onBack} />}
          <NavLeft>{navLeft}</NavLeft>
          <View style={styles.titleContainer}>
            <NavTitle title={title} />
          </View>
          <NavRight>{navRight}</NavRight>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
  },
  container: {
    backgroundColor: TRANSPARENT,
    flexDirection: 'column',
    height: HEADER_HEIGHT,
    paddingTop: STATUS_BAR,
    zIndex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: TRANSPARENT,
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    paddingHorizontal: HORIZONTAL_DIM,
  },
  statusBarContainer: {
    height: STATUS_BAR,
    left: 0,
    position: 'absolute',
    top: 0,
    width: SCREEN_WIDTH,
    zIndex: 2,
  },
  title: {
    color: DARK_BLUE,
    flex: 1,
    fontFamily: FONT_SF_PRO_BOLD,
    fontSize: FONT_SIZE_3XL,
    lineHeight: LINE_HEIGHT40,
    paddingHorizontal: HORIZONTAL_DIM,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    paddingRight: HORIZONTAL_DIM,
  },
})

NavHeader.propTypes = {
  backText: PropTypes.string,
  customHeader: PropTypes.node,
  hasBack: PropTypes.bool,
  navLeft: PropTypes.node,
  navRight: PropTypes.node,
  onBack: PropTypes.func,
  title: PropTypes.string,
  widthBottomBorder: PropTypes.bool,
}

NavHeader.defaultProps = {
  backText: null,
  customHeader: null,
  hasBack: false,
  navLeft: null,
  navRight: null,
  onBack: undefined,
  title: null,
  widthBottomBorder: false,
}

export default NavHeader
