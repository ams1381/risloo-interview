import {CounselingCenterFilters} from "@/components/organisms/counselingCenterFilters/CounselingCenterFilters";
import {CounselingCenterList} from "@/components/organisms/counselingCenterList/CounselingCenterList";


export const CounselingCenterTemplate = ({ searchValue }: { searchValue?: string }) => (
    <div className="flex flex-col mx-auto items-center gap-2 max-w-[1440px]">
        <h1 className="mt-6 font-black text-xl">لیست مراکز مشاوره ریسلو</h1>
        <hr className="w-full bg-gray1 my-2" />
        <section className="w-full flex flex-col md:flex-row mx-auto mt-6 gap-4 px-3">
            <CounselingCenterFilters />
            <CounselingCenterList searchValue={searchValue} />
        </section>
    </div>
);
