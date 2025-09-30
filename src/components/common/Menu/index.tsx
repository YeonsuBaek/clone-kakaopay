import React from 'react'
import style from '@/style/components/Menu.module.css'
import MenuList from './MenuList'

function Menu({ opened }: { opened: boolean }) {
  return (
    <aside id="menu" className={`${style.menu} ${opened ? style.opened : style.closed}`}>
      <MenuList />
    </aside>
  )
}

export default Menu
