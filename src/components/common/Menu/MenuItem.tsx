import React from 'react'
import SubMenu from './SubMenu'
import style from '@/style/components/Menu.module.css'
import { CaretDown } from '@phosphor-icons/react'

function MenuItem({ opened, setToggle }: { opened: boolean; setToggle: () => void }) {
  return (
    <li>
      <button className={style.menuItemButton} aria-expanded={opened} aria-controls="subMenu" onClick={setToggle}>
        카카오페이
        <i className={style.caret} aria-hidden>
          <CaretDown className={opened ? style.openedCaret : style.closedCaret} size={20} color="#999" />
        </i>
      </button>
      <SubMenu opened={opened} />
    </li>
  )
}

export default MenuItem
