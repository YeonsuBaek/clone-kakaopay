import React from 'react'
import style from '@/style/components/common/Navigation.module.css'
import Link from 'next/link'

function LocalNavigation({ activeMenu }: { activeMenu: '' | 'service' | 'notice' }) {
  const menuMap = {
    service: [
      {
        title: '생활하다',
        list: [
          { subTitle: '송금', link: '' },
          { subTitle: '결제', link: '' },
          { subTitle: '멤버쉽', link: '' },
        ],
      },
      {
        title: '관리하다',
        list: [
          { subTitle: '자산관리', link: '' },
          { subTitle: '청구서', link: '' },
        ],
      },
    ],
    notice: [
      {
        title: '보도자료',
        list: [{ subTitle: '', link: '' }],
      },
      {
        title: '공지사항',
        list: [{ subTitle: '', link: '' }],
      },
    ],
  } as const

  const menuList = activeMenu ? menuMap[activeMenu] : []

  return (
    <aside className={style.localNav}>
      {menuList.map((menu) => (
        <div key={menu.title}>
          <Link href={menu.list[0].link}>{menu.title}</Link>
          <ul>
            {menu.list.map((item) => (
              <li key={item.subTitle}>
                <Link href={item.link}>{item.subTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

export default LocalNavigation
