'use client'
import Logo from '@/assets/icons/Logo'
import React, { useState } from 'react'
import style from '@/style/components/Header.module.css'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'
import Menu from './Menu'

function Header() {
  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <>
      <header className={`${style.header} ${openedMenu ? style.headerOpenedMenu : style.headerClosedMenu}`}>
        <h1 className={style.logo}>
          <Link href="/" aria-label="홈 화면으로 이동">
            <Logo />
          </Link>
        </h1>
        <button
          type="button"
          className={style.menuButton}
          aria-label={`메뉴 ${openedMenu ? '닫기' : '열기'}`}
          aria-expanded={openedMenu}
          aria-controls="menu"
          onClick={() => setOpenedMenu((prev) => !prev)}
        >
          {openedMenu ? <X size={20} color="#ffffff" /> : <List size={24} color="#ffffff" aria-hidden />}
        </button>
      </header>
      <Menu opened={openedMenu} />
    </>
  )
}

export default Header
