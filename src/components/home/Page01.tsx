'use client'
import React from 'react'
import style from '@/style/components/home/Page01.module.css'
import Link from 'next/link'
import MainImage01 from '@/assets/images/home/page01/메인1_1.jpg'
import MainImage02 from '@/assets/images/home/page01/메인1_2.jpg'
import MainImage03 from '@/assets/images/home/page01/메인1_3.jpg'
import Image from 'next/image'
import { CaretDown, Play } from '@phosphor-icons/react'
import VideoPlayer from '../video/VideoPlayer'
import AppStore from '@/assets/icons/AppStore'
import GooglePlaystore from '@/assets/icons/GooglePlaystore'

function Page01() {
  return (
    <section className={style.section}>
      <div className={style.mobileContent}>
        <strong className={style.text}>
          마음놓고
          <br />
          금융하다
        </strong>
        <Link href="/video" aria-label="카카오페이 소개 영상 재생하기" className={style.playButton}>
          <Play size={18} weight="fill" color="#fff" />
        </Link>
      </div>
      <i aria-label="아래로 스크롤하세요" className={style.scrollDown}>
        <CaretDown size={32} color="#fff" />
      </i>
      <div className={style.background}>
        <Image src={MainImage01} alt="" aria-hidden className={style.backgroundImage} />
        <Image src={MainImage02} alt="" aria-hidden className={style.backgroundImage} />
        <Image src={MainImage03} alt="" aria-hidden className={style.backgroundImage} />
      </div>
      <div className={style.video}>
        <VideoPlayer />
      </div>
      <div className={style.layout}>
        <div className={style.layoutTop}>
          <div className={style.layoutChild} aria-hidden></div>
          <div className={`${style.layoutChild} ${style.desktopContent}`}>
            <strong className={style.text}>마음놓고 금융하다</strong>
            <div className={style.storeWrapper}>
              <Link href="/" className={style.storeButton}>
                <AppStore />
              </Link>
              <Link href="/" className={style.storeButton}>
                <GooglePlaystore />
              </Link>
            </div>
          </div>
          <div className={style.layoutChild} aria-hidden></div>
        </div>
        <div className={style.layoutBottom} aria-hidden>
          <div className={style.layoutChild} aria-hidden></div>
          <div className={style.layoutChild} aria-hidden></div>
          <div className={style.layoutChild} aria-hidden></div>
        </div>
      </div>
    </section>
  )
}

export default Page01
