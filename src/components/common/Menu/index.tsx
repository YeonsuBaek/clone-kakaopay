import React from 'react'
import style from '@/style/components/common/Menu.module.css'
import MenuList from './MenuList'
import MenuTotal from './MenuTotal'

function Menu({ opened }: { opened: boolean }) {
  return (
    <aside id="menu" className={`${style.menu} ${opened ? style.opened : style.closed}`}>
      {/* mobile ver. */}
      <MenuList />
      {/* desktop ver. */}
      <MenuTotal />
    </aside>
  )
}

export default Menu
