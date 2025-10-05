'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Image01 from '@/assets/images/home/page02/메인2_2.png'
import Image02 from '@/assets/images/home/page02/메인2_3.png'
import Image03 from '@/assets/images/home/page02/메인2_4.png'
import { ArrowRight } from '@phosphor-icons/react'
import style from '@/style/components/home/Page02.module.css'
import { isMobileScreen } from '@/utils/common'

function Page02() {
  const isMobile = isMobileScreen()
  const elementsRef = useRef([]) as React.MutableRefObject<HTMLDivElement[]>
  const videoRef = useRef<HTMLVideoElement>(null)
  const ticking = useRef(false)

  const isVisible = (el: Element) => window.innerHeight > el.getBoundingClientRect().top

  const updateScrollTransform = () => {
    const target = elementsRef.current[1]
    if (!target) return

    const rect = target.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const start = rect.top - windowHeight + 50 // 화면에 들어온 후 50px
    const end = rect.bottom // 완전히 사라질 때

    // progress: 0~1 범위
    const progress = Math.min(Math.max((windowHeight - rect.top - 100) / (end - start), 0), 1)

    // translateY: 15% -> -10%
    const translateY = 15 - progress * (15 + 10)
    target.style.transform = `translateY(${translateY}%)`
  }

  const updateVideoPlayback = () => {
    if (!videoRef.current) return
    const play = isVisible(videoRef.current)
    play ? videoRef.current.play() : videoRef.current.pause()
  }

  const handleScroll = () => {
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        elementsRef.current.forEach((el) => {
          if (!el) return
          el.classList.toggle(style.show, isVisible(el))
          updateScrollTransform()
        })
        updateVideoPlayback()
        ticking.current = false
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  //   useEffect(() => {
  //     const isShow = (el: Element) => window.innerHeight > el.getBoundingClientRect().top

  //     const handleScroll = () => {
  //       if (elementsRef.current) {
  //         elementsRef.current.forEach((el) => {
  //           if (!el) return
  //           el.classList.toggle(style.show, isShow(el))
  //         })

  //         if (isShow(elementsRef.current[1])) {
  //           console.log(elementsRef.current[1])
  //           const el = elementsRef.current[1]
  //           const rect = el.getBoundingClientRect()
  //           const windowHeight = window.innerHeight

  //           const start = rect.top - windowHeight + 50 // (A) 화면에 100px 들어온 시점
  //           const end = rect.bottom // (B) 완전히 사라질 때

  //           // progress: 0 ~ 1
  //           const progress = Math.min(Math.max((windowHeight - rect.top - 100) / (end - start), 0), 1)

  //           // translateY: 15% -> -2%
  //           const translateY = 15 - progress * (15 + 10)

  //           el.style.transform = `translateY(${translateY}%)`
  //         }
  //       }

  //       if (videoRef.current) {
  //         const isPlay = isShow(videoRef.current)
  //         if (isPlay) {
  //           videoRef.current.play()
  //         } else {
  //           videoRef.current.pause()
  //         }
  //       }
  //     }

  //     window.addEventListener('scroll', handleScroll)
  //     handleScroll()
  //     return () => window.removeEventListener('scroll', handleScroll)
  //   }, [isMobile])

  return (
    <section className={style.section}>
      <div
        ref={(el) => {
          elementsRef.current[0] = el!
        }}
        className={`${style.contentWrapper} ${style.desktopTopWrapper}`}
      >
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
          <video ref={videoRef} width="100%" height="100%" preload="none" loop muted>
            <source src="/assets/videos/home/page02/메인2_1.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
      <div className={style.desktopBottomWrapper}>
        <div
          ref={(el) => {
            elementsRef.current[1] = el!
          }}
          className={`${style.contentWrapper} ${style.desktopBottomLeftWrapper}`}
        >
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
        <div
          ref={(el) => {
            elementsRef.current[2] = el!
          }}
          className={`${style.contentWrapper} ${style.desktopBottomRightWrapper}`}
        >
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
