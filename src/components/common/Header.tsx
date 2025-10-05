'use client'
import Logo from '@/assets/icons/Logo'
import React, { useEffect, useState } from 'react'
import style from '@/style/components/common/Header.module.css'
import styleByNav from '@/style/components/common/Navigation.module.css'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'
import Menu from './Menu'
import Navigation from './Navigation'
import { isMobileScreen } from '@/utils/common'

function Header() {
  const isMobile = isMobileScreen()
  const [whiteTheme, setWhiteTheme] = useState(false)
  const [openedMenu, setOpenedMenu] = useState(false)

  // 가로 해상도 * 1.78 스크롤 위치일 때 header 테마 변경
  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth
      const threshold = isMobile ? (screenWidth * 1.78) / 2 : screenWidth / 2 // 가로해상도 * 1.78배의 절반
      setWhiteTheme(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <>
      <header
        className={`${style.header} ${openedMenu ? style.headerOpenedMenu : style.headerClosedMenu} ${
          styleByNav.header
        } ${whiteTheme ? style.headerWhiteTheme : ''}`}
      >
        <h1 className={style.logo}>
          <Link href="/" aria-label="홈 화면으로 이동">
            <Logo color={whiteTheme && !openedMenu ? '#000' : '#fff'} />
          </Link>
        </h1>
        {!openedMenu && <Navigation whiteTheme={whiteTheme} />}
        <button
          type="button"
          className={style.menuButton}
          aria-label={`메뉴 ${openedMenu ? '닫기' : '열기'}`}
          aria-expanded={openedMenu}
          aria-controls="menu"
          onClick={() => setOpenedMenu((prev) => !prev)}
        >
          {openedMenu ? (
            <X size={20} color="#fff" />
          ) : (
            <List size={24} color={whiteTheme ? '#000' : '#fff'} aria-hidden />
          )}
        </button>
      </header>
      <Menu opened={openedMenu} />
    </>
  )
}

export default Header
