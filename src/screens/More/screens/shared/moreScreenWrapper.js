import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import ThemeContext from '@root/ThemeContext'

import NavHeader from '@navigation/components/NavHeader'
import NavTitle from '@navigation/components/NavTitle'

import Wrapper from '@components/Wrapper'

import { RH } from '@theme/utils'
import { SECONDARY } from '@theme/colors'
import { DIM_V7, HORIZONTAL_DIM } from '@root/constants'

const MoreScreenWrapper = ({ title, loading, headerLeft, headerRight, noBorder, children }) => {
  const isFocused = useIsFocused()
  const { changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: false })
  }, [changeTheme, isFocused])

  return (
    <Wrapper loading={loading}>
      <NavHeader hasBack navLeft={headerLeft} navRight={headerRight} />
      {!!title && (
        <View style={[styles.titleContainer, !noBorder && styles.borderBottom]}>
          <NavTitle title={title} />
        </View>
      )}
      {children}
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: SECONDARY,
    borderBottomWidth: RH(0.5),
  },
  titleContainer: {
    paddingBottom: DIM_V7,
    paddingHorizontal: HORIZONTAL_DIM,
  },
})

MoreScreenWrapper.propTypes = {
  children: PropTypes.node,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  loading: PropTypes.bool,
  noBorder: PropTypes.bool,
  title: PropTypes.string,
}

MoreScreenWrapper.defaultProps = {
  children: null,
  headerLeft: null,
  headerRight: null,
  loading: false,
  noBorder: false,
  title: '',
}

export default MoreScreenWrapper
