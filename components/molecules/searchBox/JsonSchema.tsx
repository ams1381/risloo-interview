export const JsonSearchSchema = ({searchValue} : {searchValue? : string}) => {
    const searchJsonSchema = {
        "@context":"http://schema.org",
        "@type":"WebSite",
        "url":"https://risloo.ir/",
        "potentialAction":{
            "@type":"SearchAction",
            "target":`https://risloo.ir/?search=${searchValue}`,
            "query-input":`required name=${searchValue}`
        }
    }
    return <script id="search-schema"
                   dangerouslySetInnerHTML={{__html : JSON.stringify(searchJsonSchema)}}
                   type="application/ld+json" />
}