import Header from '@/components/common/Header'
import Page01 from '@/components/home/Page01'
import Page02 from '@/components/home/Page02'

export default function Home() {
  return (
    <>
      <Header />
      <Page01 />
      <Page02 />
      <div style={{ backgroundColor: 'pink', width: '100vw', height: '100vh' }}></div>
    </>
  )
}
