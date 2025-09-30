import React, { useState } from 'react'
import MenuItem from './MenuItem'

function MenuList() {
  const menuList = [
    {
      id: 'kakaopay',
      name: '카카오페이',
      subMenu: [
        {
          id: 'life',
          name: '생활하다',
          link: '/',
        },
      ],
    },
    {
      id: 'service',
      name: '서비스',
      subMenu: [
        {
          id: 'life',
          name: '생활하다',
          link: '/',
        },
      ],
    },
  ]

  const [openedSubMenuList, setOpenedSubMenuList] = useState<string[]>([])

  const handleToggle = (id: string) => {
    setOpenedSubMenuList((prev: string[]) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }
  return (
    <ul>
      {menuList.map((menu) => (
        <MenuItem key={menu.id} opened={openedSubMenuList.includes(menu.id)} setToggle={() => handleToggle(menu.id)} />
      ))}
    </ul>
  )
}

export default MenuList
