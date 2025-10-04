import React from 'react'
import style from '@/style/app/Video.module.css'
import VideoPlayer from '@/components/video/VideoPlayer'

function page() {
  return (
    <section className={style.section}>
      <VideoPlayer />
    </section>
  )
}

export default page
