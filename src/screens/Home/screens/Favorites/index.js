import React, { useCallback, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import OfficeActions from '@store/Office/Actions'
import { userSelector, favoriteRoomsSelector } from '@store/User/Select'
import { officeSelector } from '@store/Office/Select'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'

import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

import Wrapper from '@components/Wrapper'

import NoFavorites from './components/NoFavorites'
import Room from './components/Room'

import { shouldRefetch } from '@helpers/utils'

import styles from './styles'

const Favorites = ({ navigation }) => {
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { changeTheme } = useContext(ThemeContext)
  const rooms = useSelector(favoriteRoomsSelector)

  const { favoriteRoomsLoading } = useSelector(officeSelector)
  const {
    favoriteRooms: { timestamp: fetchFavoriteTimestamp },
  } = useSelector(userSelector)

  useEffect(() => {
    if (isFocused) changeTheme({ showTabBar: true })
  }, [changeTheme, isFocused])

  // fetch favorite rooms
  useEffect(() => {
    if (!isFocused) return

    if (shouldRefetch(fetchFavoriteTimestamp)) dispatch(OfficeActions.favoriteRooms())
  }, [isFocused, fetchFavoriteTimestamp, dispatch])

  const onManageOffices = useCallback(() => {
    navigation.navigate('Offices')
  }, [navigation])

  const onPressRoom = useCallback(
    (id) => {
      navigation.navigate('Offices', { params: { id, ref: 'Favorites' }, screen: 'Room' })
    },
    [navigation],
  )

  return (
    <Wrapper loading={favoriteRoomsLoading}>
      <NavHeader title={t('common.favorites')} navRight={<NavAlerts />} widthBottomBorder />
      <FlatList
        data={Object.values(rooms)}
        contentContainerStyle={styles.roomsList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Room room={item} onPressRoom={onPressRoom} />}
        ListEmptyComponent={<NoFavorites onManageOffices={onManageOffices} />}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  )
}

Favorites.propTypes = {
  navigation: PropTypes.object.isRequired,
}

Favorites.defaultProps = {}

export default Favorites
