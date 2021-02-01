import { createContext } from 'react'

import { TRANSPARENT } from '@theme/colors'

export default createContext({
  changeTheme: () => null,
  showTabBar: true,
  statusBarColor: TRANSPARENT,
  statusBarStyle: 'dark-content',
})
