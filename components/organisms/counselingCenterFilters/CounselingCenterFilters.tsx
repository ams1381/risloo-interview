import {SearchBox} from "@/components/molecules/searchBox/SearchBox";

export const CounselingCenterFilters = () => {
    return <aside className="flex-[1] lg:flex-[0.7] sticky top-[10px] p-2 flex flex-col h-[300px] border-gray2 border rounded-lg">
        <SearchBox />
    {/*    Rest of the filters*/}
    </aside>
}