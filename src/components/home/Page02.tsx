'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Image01 from '@/assets/images/home/page02/메인2_2.png'
import Image02 from '@/assets/images/home/page02/메인2_3.png'
import Image03 from '@/assets/images/home/page02/메인2_4.png'
import { ArrowRight } from '@phosphor-icons/react'

function Page02() {
  return (
    <section>
      <Image src={Image01} alt="" aria-hidden />
      <div>
        <p>
          일상의 모든 금융
          <br />한 번에 관리해요
        </p>
        <Link href="/" aria-label="자산관리 페이지로 이동하기">
          <ArrowRight size={32} aria-hidden />
        </Link>
        <Link href="/" aria-label="자산관리 페이지로 이동하기">
          <video width="100%" height="100%" preload="none" loop muted autoPlay={true}>
            <source src="/assets/videos/home/page02/메인2_1.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
      <div>
        <p>
          내 친구의 보험은?
          <br />
          궁금했던 정보가
          <br />
          여기에
        </p>
        <Link href="/" aria-label="보험 페이지로 이동하기">
          <ArrowRight size={32} aria-hidden />
        </Link>
        <Link href="/" aria-label="보험 페이지로 이동하기">
          <Image src={Image02} alt="해외여행보험, 자동차보험, 실손보험은 카카오페이" />
        </Link>
      </div>
      <div>
        <p>
          조회부터 실행까지
          <br />
          대출도 톡하듯 쉽게
        </p>
        <Link href="/" aria-label="대출 페이지로 이동하기">
          <ArrowRight size={32} aria-hidden />
        </Link>
        <Link href="/" aria-label="대출 페이지로 이동하기">
          <Image src={Image03} alt="전월세 보증금 대출은 카카오페이" />
        </Link>
      </div>
    </section>
  )
}

export default Page02
