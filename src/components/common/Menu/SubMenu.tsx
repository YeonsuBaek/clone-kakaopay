import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import style from '@/style/components/Menu.module.css'

function SubMenu({ opened }: { opened: boolean }) {
  const SubMenuList = [
    {
      id: 'life',
      name: '생활하다',
      link: '/',
    },
    {
      id: 'manage',
      name: '관리하다',
      link: '/',
    },
  ]

  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.height = opened ? `${menuRef.current.scrollHeight}px` : '0px'
    }
  }, [opened])

  return (
    <ul ref={menuRef} id="subMenu" className={style.subMenu}>
      {SubMenuList.map((menu) => (
        <li key={menu.id}>
          <Link href="/" className={style.subMenuItemButton}>
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
