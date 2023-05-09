import Head from 'next/head'
import Layout from '../components/layout'
import Top from '../components/home/top'
import Middle from '../components/home/middle'
import Bottom from '../components/home/bottom'



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>올클래스</title>
        <meta name="description" content="All in one education Platform Allclass" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <Top/>
  


  </div>
</section>


<section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  
  <Middle/>


  </div>
</section>


<section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  
  <Bottom/>


  </div>
</section>

    </Layout>
  )
}
