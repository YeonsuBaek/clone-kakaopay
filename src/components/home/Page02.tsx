'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Image01 from '@/assets/images/home/page02/메인2_2.png'
import Image02 from '@/assets/images/home/page02/메인2_3.png'
import Image03 from '@/assets/images/home/page02/메인2_4.png'
import { ArrowRight } from '@phosphor-icons/react'
import style from '@/style/components/home/Page02.module.css'
import { isMobileScreen } from '@/utils/common'

function Page02() {
  const isMobile = isMobileScreen()

  return (
    <section className={style.section}>
      <div className={`${style.contentWrapper} ${style.desktopTopWrapper}`}>
        <div className={style.desktopTopRightWrapper}>
          <Image src={Image01} alt="" aria-hidden className={style.titleIcon} />
          <div className={style.descriptionWrapper}>
            <p className={style.text}>
              일상의 모든 금융
              <br />
              <span className={style.textHighlight}>한 번에 관리</span>해요
            </p>
            <Link href="/" aria-label="자산관리 페이지로 이동하기" className={style.linkButton}>
              <ArrowRight size={isMobile ? 14 : 24} color="#999" aria-hidden />
            </Link>
          </div>
        </div>
        <Link href="/" aria-label="자산관리 페이지로 이동하기" className={style.videoLinkButton}>
          <video width="100%" height="100%" preload="none" loop muted autoPlay={true}>
            <source src="/assets/videos/home/page02/메인2_1.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
      <div className={style.desktopBottomWrapper}>
        <div className={`${style.contentWrapper} ${style.desktopBottomLeftWrapper}`}>
          <div className={style.descriptionWrapper}>
            <p className={style.text}>
              내 친구의 보험은?
              <br />
              <span className={style.textHighlight}>궁금했던 정보가</span>
              <br />
              여기에
            </p>
            <Link href="/" aria-label="보험 페이지로 이동하기" className={style.linkButton}>
              <ArrowRight size={isMobile ? 14 : 24} color="#999" aria-hidden />
            </Link>
          </div>
          <Link href="/" aria-label="보험 페이지로 이동하기" className={style.imageLinkButton}>
            <Image src={Image02} alt="해외여행보험, 자동차보험, 실손보험은 카카오페이" />
          </Link>
        </div>
        <div className={`${style.contentWrapper} ${style.desktopBottomRightWrapper}`}>
          <div className={style.descriptionWrapper}>
            <p className={style.text}>
              조회부터 실행까지
              <br />
              대출도 <span className={style.textHighlight}>톡하듯 쉽게</span>
            </p>
            <Link href="/" aria-label="대출 페이지로 이동하기" className={style.linkButton}>
              <ArrowRight size={isMobile ? 14 : 24} color="#999" aria-hidden />
            </Link>
          </div>
          <Link href="/" aria-label="대출 페이지로 이동하기" className={style.imageLinkButton}>
            <Image src={Image03} alt="전월세 보증금 대출은 카카오페이" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Page02
