import {CounselingCenterTemplate} from "@/components/templates/CounselingCenterTemplate";


type TSearchParams = Promise<{search : string | undefined}>;
export default async function Home({searchParams} : {searchParams : TSearchParams}) {
    const searchValue = (await searchParams).search;
  return (<CounselingCenterTemplate searchValue={searchValue} />);
}
