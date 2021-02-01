import React, { useContext } from 'react'

import I18nContext from '@root/i18n/I18nContext'
import RoomInfoContext from '../../roomInfoContext'

import Map from '@components/Map'

const RoomMap = () => {
  const { i18n } = useContext(I18nContext)
  const { location } = useContext(RoomInfoContext)

  return <Map location={location} scrollEnabled language={i18n.language} />
}

RoomMap.propTypes = {}

RoomMap.defaultProps = {}

export default RoomMap
