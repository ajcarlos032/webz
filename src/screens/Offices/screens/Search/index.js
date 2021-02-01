import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, SafeAreaView, SectionList, Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'
import OfficeContext from '@screens/Offices/officeContext'

import OfficeActions from '@store/Office/Actions'
import { officeSelector } from '@store/Office/Select'
import { configSelector } from '@store/Config/Select'

import NavHeader from '@navigation/components/NavHeader'
import Header from './components/Header'
import HistoryItem from './components/HistoryItem'
import RoomItem from './components/RoomItem'
import NoResult from './components/NoResult'

import { FETCH_MODE, PAGE_ITEM_NUM } from '@store/Office/constants'

import styles from './styles'

const Search = ({ navigation }) => {
  const isFocused = useIsFocused()
  const searchHeader = useRef()
  const { isRTL } = useSelector(configSelector)
  const { t } = useContext(I18nContext)
  const dispatch = useDispatch()
  const { changeTheme } = useContext(ThemeContext)
  const { searchName, setSearchName } = useContext(OfficeContext)
  const [focused, setFocused] = useState(false)

  const {
    fetchMode,
    searchRoomsLoading,
    data: { rooms },
    searches,
  } = useSelector(officeSelector)

  const hasSearched = useMemo(() => fetchMode === FETCH_MODE.SEARCH && searchName !== null, [
    fetchMode,
    searchName,
  ])

  useEffect(() => {
    if (isFocused) {
      changeTheme({ showTabBar: false })
    }
  }, [changeTheme, isFocused])

  const onBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const onSearch = useCallback(
    (name) => {
      setSearchName(name)
      dispatch(OfficeActions.searchRooms({ name }))
    },
    [setSearchName, dispatch],
  )

  const listData = useMemo(() => {
    const searchResult = hasSearched ? Object.values(rooms) : []
    const data = [
      {
        data: searches || [],
        title: searches?.length ? t('home.searchHistory') : '',
        type: 'history',
      },
      {
        data: searchResult,
        title: searchResult?.length ? t('home.searchResult') : '',
        type: 'item',
      },
    ]

    return data
  }, [searches, t, hasSearched, rooms])

  const onRemoveHistoryItem = useCallback(
    (text) => {
      dispatch(OfficeActions.removeSearch(text))
    },
    [dispatch],
  )

  const onPressRoomItem = useCallback(
    (id) => {
      navigation.navigate('Room', { id })
    },
    [navigation],
  )

  const renderItem = useCallback(
    (item, type) => {
      if (type === 'history') {
        return (
          <HistoryItem
            text={item}
            onPressItem={(text) => searchHeader?.current?.updateText(text)}
            onRemove={onRemoveHistoryItem}
          />
        )
      }
      const { id, name, images } = item
      return (
        <RoomItem
          id={id}
          name={name}
          image={images[0]?.url}
          isRTL={isRTL}
          onPressItem={onPressRoomItem}
        />
      )
    },
    [isRTL, onPressRoomItem, onRemoveHistoryItem],
  )

  const onViewAllRooms = useCallback(() => {
    setSearchName(null)
    dispatch(OfficeActions.fetchRooms({ first: PAGE_ITEM_NUM, page: 1 }))
    navigation.goBack()
  }, [setSearchName, dispatch, navigation])

  const renderIndicator = useMemo(() => {
    if (!searchRoomsLoading) return null
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="small" color="black" />
      </View>
    )
  }, [searchRoomsLoading])

  return (
    <View style={styles.container}>
      <NavHeader
        customHeader={
          <Header
            ref={searchHeader}
            initialText={searchName}
            isRTL={isRTL}
            setFocused={setFocused}
            t={t}
            onBack={onBack}
            onSearch={onSearch}
          />
        }
      />
      <View style={styles.spacing} />
      <SafeAreaView style={styles.area}>
        {!searchRoomsLoading && !focused && hasSearched && !Boolean(Object.values(rooms).length) ? (
          <NoResult t={t} onNavigate={onViewAllRooms} />
        ) : (
          <SectionList
            sections={listData}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={renderIndicator}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, section: { type } }) => renderItem(item, type)}
            renderSectionHeader={({ section: { title } }) => {
              if (!title) return null
              return (
                <View style={styles.titleContainer}>
                  <Text style={styles.sectionTitle}>{title}</Text>
                </View>
              )
            }}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </SafeAreaView>
    </View>
  )
}

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
}

Search.defaultProps = {}

export default Search
