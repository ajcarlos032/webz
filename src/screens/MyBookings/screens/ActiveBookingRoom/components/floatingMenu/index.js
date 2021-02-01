import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

import I18nContext from '@root/i18n/I18nContext'
import ActionButton from '@lib/ActionButton'

import { YELLOW } from '@theme/colors'
import styles, {
  ACTION_BG_DIM,
  ACTION_BUTTON_OFFSET_X,
  ACTION_BUTTON_OFFSET_Y,
  MENU_BUTTON_DIM,
  MENU_ITEM_DIM,
  BUTTON_O,
} from './styles'

const menuOpenIcon = require('@assets/icons/ic_more.png')
const menuCloseIcon = require('@assets/icons/ic_menu_close.png')
const parkingIcon = require('@assets/icons/ic_parking.png')
const unlockIcon = require('@assets/icons/ic_door_unlock.png')

const FloatingMenu = ({ isRTL, onUnlock, onViewParking }) => {
  const { t } = useContext(I18nContext)

  const renderMenuItem = useCallback(
    (title, icon, onPress) => (
      <ActionButton.Item
        offsetX={BUTTON_O[0]}
        offsetY={BUTTON_O[1]}
        buttonColor={YELLOW}
        onPress={onPress}
        size={MENU_ITEM_DIM}
        title={title}
        titleStyle={styles.title}
        isRTL={isRTL}
      >
        <Image style={styles.menuItemIcon} source={icon} />
      </ActionButton.Item>
    ),
    [isRTL],
  )

  return (
    <ActionButton
      bgColor="#00000099"
      buttonColor={YELLOW}
      btnOutRange={YELLOW}
      position={isRTL ? 'left' : 'right'}
      radius={ACTION_BG_DIM / 2 - 5}
      degrees={0}
      startDegree={180}
      endDegree={250}
      isRTL={isRTL}
      size={MENU_BUTTON_DIM}
      offsetX={ACTION_BUTTON_OFFSET_X}
      offsetY={ACTION_BUTTON_OFFSET_Y}
      openIcon={<Image style={styles.menuOpenIcon} source={menuOpenIcon} />}
      closeIcon={<Image style={styles.menuOpenIcon} source={menuCloseIcon} />}
      actionBgStyle={[styles.actionBgStyle, isRTL ? styles.actionRightBg : styles.actionLeftBg]}
    >
      {renderMenuItem(t('bookings.parkingSpace'), parkingIcon, onViewParking)}
      {renderMenuItem(t('bookings.doorUnlock'), unlockIcon, onUnlock)}
    </ActionButton>
  )
}

FloatingMenu.propTypes = {
  isRTL: PropTypes.bool,
  onUnlock: PropTypes.func,
  onViewParking: PropTypes.func,
}

FloatingMenu.defaultProps = {
  isRTL: false,
  onUnlock: () => null,
  onViewParking: () => null,
}

export default FloatingMenu
