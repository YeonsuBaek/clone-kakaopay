import React from 'react'
import style from '@/style/components/common/Navigation.module.css'
import Link from 'next/link'

function Navigation() {
  return (
    <div className={style.navWrapper}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link href="/" className={style.navButton}>
              카카오페이
            </Link>
          </li>
          <li className={style.navItem}>
            <button type="button" className={`${style.navButton} ${style.navButtonHadLNB} ${style.navButtonService}`}>
              서비스
            </button>
            <ul className={style.serviceNav}>
              <li className={style.subNavItem}>
                <Link href="/" className={style.subNavItemTitle}>
                  생활하다
                </Link>
                <ul className={style.subSubNav}>
                  <li className={style.subSubNavItem}>
                    <Link href="/" className={style.subSubNavItemTitle}>
                      송금
                    </Link>
                  </li>
                  <li className={style.subSubNavItem}>
                    <Link href="/" className={style.subSubNavItemTitle}>
                      결제
                    </Link>
                  </li>
                  <li className={style.subSubNavItem}>
                    <Link href="/" className={style.subSubNavItemTitle}>
                      멤버쉽
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={style.subNavItem}>
                <Link href="/" className={style.subNavItemTitle}>
                  관리하다
                </Link>
                <ul className={style.subSubNav}>
                  <li className={style.subSubNavItem}>
                    <Link href="/" className={style.subSubNavItemTitle}>
                      자산관리
                    </Link>
                  </li>
                  <li className={style.subSubNavItem}>
                    <Link href="/" className={style.subSubNavItemTitle}>
                      청구서
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={style.navItem}>
            <button type="button" className={`${style.navButton} ${style.navButtonHadLNB} ${style.navButtonNotice}`}>
              소식
            </button>
            <ul className={style.noticeNav}>
              <li className={style.subNavItem}>
                <Link href="/" className={style.subNavItemTitle}>
                  보도자료
                </Link>
              </li>
              <li className={style.subNavItem}>
                <Link href="/" className={style.subNavItemTitle}>
                  공지사항
                </Link>
              </li>
              <li className={style.subNavItem}>
                <Link href="/" className={style.subNavItemTitle}>
                  공식채널
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
