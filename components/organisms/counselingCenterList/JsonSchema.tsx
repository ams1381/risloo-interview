import {TCounselingCenterItem} from "@/types";

export const CounselingJsonSchema = ({list} : {list : TCounselingCenterItem[]}) => {

    const listJsonSchema =  {
        "@context":"https://schema.org",
        "@type":"ItemList",
        "name":"لیست مراکز مشاوره ریسلو",
        "itemListElement": list.map((Item,index) => ({
            "@type":"ListItem",
            "position" : index + 1 ,
            "name" : Item.detail.title ,
            "url" : `/counseling-centers/${Item.id}`
        }))
    }

    return <script id="items-list-schema"
                   dangerouslySetInnerHTML={{__html : JSON.stringify(listJsonSchema)}}
                   type="application/ld+json" />

}