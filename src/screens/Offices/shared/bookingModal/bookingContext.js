import { createContext } from 'react'
import { INITIAL_START_TIME, INITIAL_END_TIME } from '@screens/Offices/shared/utils/constants'

export default createContext({
  end: INITIAL_END_TIME,
  onChange: () => {},
  start: INITIAL_START_TIME,
})
