import Header from '@/components/common/Header'
import Page01 from '@/components/home/Page01'
import Page02 from '@/components/home/Page02'
import Page03 from '@/components/home/Page03'
import Page04 from '@/components/home/Page04'

export default function Home() {
  return (
    <>
      <Header />
      <Page01 />
      <Page02 />
      <Page03 />
      <Page04 />
      <div style={{ backgroundColor: 'pink', width: '100vw', height: '100vh' }}></div>
    </>
  )
}
