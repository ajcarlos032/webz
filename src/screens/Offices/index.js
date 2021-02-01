/* eslint-disable sort-keys */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import moment from 'moment'

import OfficeContext from '@screens/Offices/officeContext'

import Rooms from './screens/Home'
import Room from './screens/Room'
import Search from './screens/Search'
import ReviewBooking from './screens/ReviewBooking'
import SuccessBook from './screens/SuccessBook'
import PaymentMethods from '@screens/MyAccount/shared/PaymentMethods'
import RoomLocationN3d from './shared/roomLocationN3d'

import BookingModal from '@screens/Offices/shared/bookingModal'

import { ANYTIME_VALUE } from '@components/DatePicker/utils'

import { NAV_HEADER_OPTION } from '@root/constants'

const OfficeStack = createStackNavigator()

const OfficeStackScreen = () => {
  const [selectedDate, setSelectedDate] = useState(`${moment().format('YYYY-MM-DD')}`)
  const [searchName, setSearchName] = useState(null)
  const [startTime, setStartTime] = useState(ANYTIME_VALUE)
  const [endTime, setEndTime] = useState(ANYTIME_VALUE)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [seats, setSeats] = useState(1)
  const [facilities, setFacilities] = useState([])

  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingData, setBookingData] = useState({})

  const onCloseBookingModal = useCallback(() => {
    setShowBookingModal(false)
  }, [])

  const updateBookingData = useCallback(
    (data) => {
      if (data === null) {
        setBookingData({ date: moment(selectedDate).format('YYYY.MM.DD') })
      } else {
        setBookingData((prevData) => ({
          ...prevData,
          ...data,
        }))
      }
    },
    [selectedDate],
  )

  useEffect(() => {
    const initialData = { date: moment(selectedDate).format('YYYY.MM.DD') }
    if (endTime !== ANYTIME_VALUE) initialData.end_time = endTime
    if (startTime !== ANYTIME_VALUE) initialData.start_time = startTime

    updateBookingData(initialData)
  }, [selectedDate, startTime, endTime, updateBookingData])

  const contextValue = useMemo(
    () => ({
      searchName,
      setSearchName,
      endTime,
      setEndTime,
      facilities,
      setFacilities,
      seats,
      setSeats,
      selectedDate,
      setSelectedDate,
      selectedTypes,
      setSelectedTypes,
      startTime,
      setStartTime,
      bookingData,
      updateBookingData,
      setShowBookingModal,
    }),
    [
      searchName,
      bookingData,
      endTime,
      facilities,
      seats,
      selectedDate,
      selectedTypes,
      startTime,
      updateBookingData,
    ],
  )

  useEffect(() => {
    console.log({ bookingData })
  }, [bookingData])

  return (
    <OfficeContext.Provider value={contextValue}>
      <OfficeStack.Navigator initialRouteName="Rooms" screenOptions={NAV_HEADER_OPTION}>
        <OfficeStack.Screen name="Rooms" component={Rooms} />
        <OfficeStack.Screen name="Room" component={Room} />
        <OfficeStack.Screen name="Search" component={Search} />
        <OfficeStack.Screen name="ReviewBooking" component={ReviewBooking} />
        <OfficeStack.Screen name="SuccessBook" component={SuccessBook} />
        <OfficeStack.Screen name="PaymentMethods" component={PaymentMethods} />
        <OfficeStack.Screen name="RoomLocationN3d" component={RoomLocationN3d} />
      </OfficeStack.Navigator>
      {showBookingModal && <BookingModal onClose={onCloseBookingModal} />}
    </OfficeContext.Provider>
  )
}

OfficeStackScreen.propTypes = {}
OfficeStackScreen.defaultProps = {}

export default OfficeStackScreen
