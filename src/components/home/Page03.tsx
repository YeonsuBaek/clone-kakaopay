'use client'
import React from 'react'
import Image01 from '@/assets/images/home/page03/메인3_1.png'
import Image02 from '@/assets/images/home/page03/메인3_2.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'
import { isMobileScreen } from '@/utils/common'
import style from '@/style/components/home/Page03.module.css'

function Page03() {
  const isMobile = isMobileScreen()

  return (
    <section className={style.section}>
      <Link href="/" aria-label="카카오페이지 보도자료 페이지로 이동하기" className={style.imageButton}>
        <Image
          src={isMobile ? Image02 : Image01}
          alt="100일만에 100만 계좌 돌파! 카카오페이에서 제공하는 서비스입니다."
        />
      </Link>
      <p className={style.text}>카카오페이 주식, 아직 안 써보셨어요?</p>
      <Link href="/" aria-label="카카오페이지 보도자료 페이지로 이동하기" className={style.linkButton}>
        <ArrowRight size={isMobile ? 14 : 24} color="#000" aria-hidden />
      </Link>
    </section>
  )
}

export default Page03
