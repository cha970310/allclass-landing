import Image from "next/image"
export default function ProjectItem({data}){

    const title = data.properties.이름.title[0]?.plain_text
    const desc = data.properties.Desc.rich_text[0].text.content
    const imgSrc= data.cover.file?.url || data.cover.external.url
    return(
        <div className=" m-3 bg-slate-600 rounded-md flex flex-col">
            <Image
            className="rounded-t-xl"
            src={imgSrc}
            alt='Cover Image'
            width={50}
            height={50}
            layout='responsive'
            objectFit="none"
            quality={100}
            />


            <div className="p-4 flex flex-col w-full">
                <h1>{title}</h1>
                <h3>{desc}</h3>
                </div>

        </div>
    )
}