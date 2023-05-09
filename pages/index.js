import Head from 'next/head'
import Section_top from '../components/home/Section_top'
import Layout from '../components/layout'
import Section_middle from '../components/home/section_middle'
import Section_bottom from '../components/home/section_bottom'



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
  <Section_top/>
  


  </div>
</section>


<section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  
  <Section_middle/>


  </div>
</section>


<section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  
  <Section_bottom/>


  </div>
</section>

    </Layout>
  )
}
