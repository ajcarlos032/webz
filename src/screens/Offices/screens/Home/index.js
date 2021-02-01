import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import moment from 'moment'

import OfficeActions from '@store/Office/Actions'
import { officeSelector } from '@store/Office/Select'

import ThemeContext from '@root/ThemeContext'
import I18nContext from '@root/i18n/I18nContext'

import OfficeContext from '@screens/Offices/officeContext'

import NoData from '@components/NoData'
import Wrapper from '@components/Wrapper'
import NavHeader from '@navigation/components/NavHeader'
import NavAlerts from '@navigation/components/NavAlerts'

// eslint-disable-next-line no-unused-vars
import TopStories from './components/topStories'
import Dates from './components/dates'
import TimeFacilities from './components/timeFacilities'
import Room from './components/room'
import SearchInfo from './components/searchInfo'
import Manager from '@screens/Offices/screens/shared/manager'

// eslint-disable-next-line no-unused-vars
import { topStories } from '@temp/stories'

import { FETCH_MODE, PAGE_ITEM_NUM } from '@store/Office/constants'
import { formatDateTimeFromStr } from '@screens/Offices/screens/shared/utils'
import { localToUTCTime } from '@helpers/utils'
import styles from './styles'

const RoomsScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const { t } = useContext(I18nContext)
  const { changeTheme } = useContext(ThemeContext)

  const [loadingMore, setLoadingMore] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [hasFilter, setHasFilter] = useState(false)

  const {
    searchName,
    setSearchName,
    startTime,
    endTime,
    selectedDate,
    setSelectedDate,
    selectedTypes,
    seats,
    facilities,
  } = useContext(OfficeContext)

  const {
    fetchMode,
    fetchRoomsLoading,
    searchRoomsLoading,
    data: {
      paginatorInfo: { currentPage, lastPage },
      rooms,
    },
  } = useSelector(officeSelector)

  useEffect(() => {
    if (isFocused) {
      changeTheme({ showTabBar: true })
    } else {
      setRefreshing(false)
      setHasFilter(false)
    }
  }, [changeTheme, isFocused])

  useEffect(() => {
    if (!fetchRoomsLoading && !searchRoomsLoading) {
      setLoadingMore(false)
      setRefreshing(false)
    }
  }, [fetchRoomsLoading, searchRoomsLoading])

  const fetchRooms = useCallback(
    (page = 1) => {
      dispatch(OfficeActions.fetchRooms({ first: PAGE_ITEM_NUM, page }))
    },
    [dispatch],
  )

  // Initial loading
  useEffect(() => {
    // if (currentPage === 0 && !Boolean(timestamp)) fetchRooms()
    fetchRooms()
  }, [fetchRooms])

  const loadMore = useCallback(() => {
    setLoadingMore(true)
    fetchRooms(currentPage + 1)
  }, [currentPage, fetchRooms])

  const searchRooms = useCallback(
    (filter) => {
      dispatch(OfficeActions.searchRooms(filter))
    },
    [dispatch],
  )

  // eslint-disable-next-line no-unused-vars
  const onPressTopStory = useCallback((id) => {
    console.log(`Story #${id} clicked`)
  }, [])

  const onPressRoom = useCallback(
    (id) => {
      navigation.navigate('Room', { id })
    },
    [navigation],
  )

  const onChangeDate = useCallback(
    (date) => {
      setSelectedDate(date)
      const now = localToUTCTime()
      const _start = localToUTCTime(date)
      const start = moment(_start).isBefore(now) ? now : _start
      const end = localToUTCTime(moment(date, 'YYYY-MM-DD HH:mm:ss').add(60 * 23 + 59, 'minutes'))
      const filter = { end, facilities, seats, start, types: selectedTypes }
      if (searchName) filter.name = searchName
      searchRooms(filter)
      setHasFilter(true)
    },
    [facilities, searchName, searchRooms, seats, selectedTypes, setSelectedDate],
  )

  const getFilter = useCallback(
    (name = searchName) => {
      const { start, end } = formatDateTimeFromStr(selectedDate, startTime, endTime)
      const _end = localToUTCTime(end)
      const _start = localToUTCTime(start)
      const filterData = {
        end: _end,
        facilities,
        seats,
        start: _start,
        types: selectedTypes,
      }
      if (name) filterData.name = name

      return filterData
    },
    [endTime, facilities, searchName, seats, selectedDate, selectedTypes, startTime],
  )

  const onChangeFilter = useCallback(
    (name) => {
      const filterData = getFilter(name)
      searchRooms(filterData)
      setHasFilter(true)
    },
    [getFilter, searchRooms],
  )

  const onClearFilter = useCallback(() => {
    if (searchName) {
      searchRooms({ name: searchName })
    } else {
      fetchRooms()
    }
    setHasFilter(false)
  }, [fetchRooms, searchName, searchRooms])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    if (fetchMode === FETCH_MODE.SEARCH) {
      let filterData = {}
      if (hasFilter) {
        filterData = getFilter()
      } else {
        filterData = { name: searchName }
      }
      searchRooms(filterData)
    } else {
      fetchRooms()
    }
  }, [fetchMode, fetchRooms, getFilter, hasFilter, searchName, searchRooms])

  const onClearSearch = useCallback(() => {
    setSearchName(null)
    if (hasFilter) {
      onChangeFilter(null)
    } else {
      fetchRooms()
    }
  }, [fetchRooms, hasFilter, onChangeFilter, setSearchName])

  const renderListHeader = useMemo(
    () => (
      <View style={styles.listHeader}>
        {/* <TopStories stories={topStories} onPressStory={onPressTopStory} /> */}
        <Dates selectedDate={selectedDate} onSelectDate={onChangeDate} />
        <TimeFacilities onChange={onChangeFilter} onClear={onClearFilter} />
        {!!searchName && (
          <SearchInfo
            t={t}
            text={searchName}
            resultNum={Object.values(rooms).length}
            onPress={() => {
              navigation.navigate('Search')
            }}
            onRemove={onClearSearch}
          />
        )}
      </View>
    ),
    [
      selectedDate,
      onChangeDate,
      onChangeFilter,
      onClearFilter,
      searchName,
      t,
      rooms,
      onClearSearch,
      navigation,
    ],
  )

  const renderListFooter = useMemo(
    () => (
      <View style={styles.listHeader}>
        {currentPage < lastPage && (
          <TouchableOpacity style={styles.loadMoreButton} disabled={loadingMore} onPress={loadMore}>
            <Text style={[styles.loadMore, loadingMore && styles.loadMoreDisabled]}>
              {loadingMore ? t('home.loading') : t('home.loadMore')}
            </Text>
          </TouchableOpacity>
        )}

        <Manager containerStyle={styles.managerContainer} />
      </View>
    ),
    [currentPage, lastPage, loadingMore, loadMore, t],
  )

  return (
    <Wrapper
      loading={
        isFocused && !refreshing && !loadingMore && (fetchRoomsLoading || searchRoomsLoading)
      }
    >
      <NavHeader
        title={t('common.offices')}
        navRight={<NavAlerts hasSearch searchActive={!!searchName} />}
        widthBottomBorder
      />
      {renderListHeader}
      <FlatList
        refreshing={refreshing && fetchRoomsLoading}
        onRefresh={onRefresh}
        data={Object.values(rooms)}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={renderListHeader}
        renderItem={({ item }) => (
          <Room id={item.id} availableAt={item.available_at} onPressRoom={onPressRoom} />
        )}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={<NoData loading={fetchRoomsLoading} />}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  )
}

RoomsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

RoomsScreen.defaultProps = {}

export default RoomsScreen
