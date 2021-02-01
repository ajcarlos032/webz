import { StyleSheet } from 'react-native'

import { WHITE } from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: WHITE,
    flex: 1,
    overflow: 'hidden',
  },
  hightlightView: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
    position: 'absolute',
    width: '100%',
  },
})

export default styles
