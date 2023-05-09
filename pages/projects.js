import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN,DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
export default function Projects({projects}){
    
    return(

        
        <Layout className="
        flex
        flex-col items-center justify-center min-h-screen px-5 py-10 mb-10">
      <Head>
        <title>올클래스</title>
        <meta name="description" content="All in one education Platform Allclass" />
        <link rel="icon" href="/favicon.png" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">

            프로젝트:  <span className="pl-4 text-blue-500">{projects.results.length}</span></h1>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full m-6 py-10 px-6" >
{projects.results.map((aProject)=>(
    <ProjectItem key={aProject.id} data = {aProject}/>
))}
</div>
        </Layout>
    )
}
//  Build  
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            
            page_size: 100})
      };
      
   const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
       const projects = await res.json()
    const projectNames = projects.results.map((aProject)=>(
        aProject.properties.이름.title[0]?.plain_text
    ))

    console.log(`projectIds : ${projectNames}`)
    return {
      props: {projects}, // will be passed to the page component as props
    }
  }