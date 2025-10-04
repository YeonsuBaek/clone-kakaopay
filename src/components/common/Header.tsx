'use client'
import Logo from '@/assets/icons/Logo'
import React, { useState } from 'react'
import style from '@/style/components/common/Header.module.css'
import styleByNav from '@/style/components/common/Navigation.module.css'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'
import Menu from './Menu'
import Navigation from './Navigation'

function Header() {
  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <>
      <header
        className={`${style.header} ${openedMenu ? style.headerOpenedMenu : style.headerClosedMenu} ${
          styleByNav.header
        }`}
      >
        <h1 className={style.logo}>
          <Link href="/" aria-label="홈 화면으로 이동">
            <Logo />
          </Link>
        </h1>
        {!openedMenu && <Navigation />}
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
