'use client'
import { isMobileScreen } from '@/utils/common'
import { ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import style from '@/style/components/home/Page04.module.css'
import Image01 from '@/assets/images/home/page04/메인4_2.png'
import Image02 from '@/assets/images/home/page04/메인4_3.png'
import Image03 from '@/assets/images/home/page04/메인4_4.jpg'

function Page04() {
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

          if (!isMobile) {
            updateScrollTransform()
          }
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

  return (
    <section className={style.section}>
      <div
        ref={(el) => {
          elementsRef.current[0] = el!
        }}
        className={style.contentWrapper}
      >
        <div className={style.desktopTopRightWrapper}>
          <Image src={Image01} alt="" aria-hidden className={style.titleIcon} />
          <div className={style.descriptionWrapper}>
            <p className={style.text}>
              가까운 결제 혜택도
              <br />
              놓칠 수 없죠!
            </p>
            <Link href="/" aria-label="결제 페이지로 이동하기" className={style.linkButton}>
              <ArrowRight size={isMobile ? 14 : 24} color="#999" aria-hidden />
            </Link>
          </div>
        </div>
        <Link href="/" aria-label="결제 페이지로 이동하기" className={style.videoLinkButton}>
          <video ref={videoRef} width="100%" height="100%" preload="none" loop muted>
            <source src="/assets/videos/home/page04/메인4_1.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
      <div
        ref={(el) => {
          elementsRef.current[1] = el!
        }}
        className={style.contentWrapper}
      >
        <div className={style.desktopTopRightWrapper}>
          <div className={style.desktopReverseWrapper}>
            <Image src={Image02} alt="" aria-hidden className={style.titleIcon} />
            <div className={style.descriptionWrapper}>
              <p className={style.text}>
                내가 만든 금융을
                <br />
                모두가 쓰는 특별한 경험
              </p>
              <Link href="/" aria-label="채용 페이지로 이동하기" className={style.linkButton}>
                <ArrowRight size={isMobile ? 14 : 24} color="#999" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <Link href="/" aria-label="채용 페이지로 이동하기" className={style.imageLinkButton}>
          <Image src={Image03} alt="카카오페이 채용" />
        </Link>
      </div>
    </section>
  )
}

export default Page04
