import {CounselingCenterTemplate} from "@/components/templates/CounselingCenterTemplate";

type TSearchParams = Promise<{search : string | undefined , page : string | undefined}>;

export default async function Home({searchParams} : {searchParams : TSearchParams}) {
    const searchValue = (await searchParams).search;
    const page = (await searchParams).page;
  return (<CounselingCenterTemplate searchValue={searchValue} page={page} />);
}
