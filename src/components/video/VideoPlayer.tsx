'use client'

import {
  ArrowsHorizontal,
  Pause,
  Play,
  SpeakerHigh,
  SpeakerSlash,
  Subtitles,
  SubtitlesSlash,
} from '@phosphor-icons/react'
import React, { useRef, useState } from 'react'
import style from '@/style/app/Video.module.css'
import { isMobileScreen } from '@/utils/common'

function VideoPlayer({
  defaultCC = false,
  defaultPlay = true,
  defaultMute = true,
}: {
  defaultCC?: boolean
  defaultPlay?: boolean
  defaultMute?: boolean
}) {
  // TODO: CC 추가
  // TODO: Full Screen에 커스텀 컨트롤러 추가

  const isMobile = isMobileScreen()

  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasCC, setHasCC] = useState(defaultCC)
  const [isPlay, setIsPlay] = useState(defaultPlay)
  const [isMute, setIsMute] = useState(defaultMute)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlay(true)
    } else {
      video.pause()
      setIsPlay(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted

    setIsMute((prev) => !prev)
  }

  const toggleCC = () => {
    const video = videoRef.current
    if (!video) return
    const track = video.textTracks[0]
    if (!track) return

    if (track.mode === 'showing') {
      track.mode = 'hidden'
      setHasCC(false)
    } else {
      track.mode = 'showing'
      setHasCC(true)
    }
  }

  const onShowFullScreen = () => {
    if (!videoRef.current) return

    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(console.error)
    } else {
      document.exitFullscreen().catch(console.error)
    }
  }

  return (
    <>
      <div className={style.controllerWrapper}>
        <button type="button" onClick={toggleCC} className={style.controller}>
          {hasCC ? (
            <Subtitles size={isMobile ? 14 : 20} weight="fill" color="#fff" />
          ) : (
            <SubtitlesSlash size={isMobile ? 14 : 20} weight="fill" color="#fff" />
          )}
        </button>
        <button type="button" onClick={togglePlay} className={style.controller}>
          {isPlay ? (
            <Pause size={isMobile ? 14 : 20} weight="fill" color="#fff" />
          ) : (
            <Play size={isMobile ? 14 : 20} weight="fill" color="#fff" />
          )}
        </button>
        <button type="button" onClick={toggleMute} className={style.controller}>
          {isMute ? (
            <SpeakerSlash size={isMobile ? 14 : 20} weight="fill" color="#fff" />
          ) : (
            <SpeakerHigh size={isMobile ? 14 : 20} weight="fill" color="#fff" />
          )}
        </button>
        <button type="button" onClick={onShowFullScreen} className={`${style.controller} ${style.scaleController}`}>
          <ArrowsHorizontal size={22} weight="fill" color="#fff" />
        </button>
      </div>
      <div className={style.videoWrapper}>
        <video width="100%" height="100%" preload="none" ref={videoRef} autoPlay muted={isMute} className={style.video}>
          <source src="/assets/videos/home/page01/메인1_4.mp4" type="video/mp4" />
          <track src="subtitles.vtt" kind="subtitles" srcLang="en" label="English" default={hasCC} />
        </video>
      </div>
    </>
  )
}

export default VideoPlayer
