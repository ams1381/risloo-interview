'use client'

import {CloseIcon} from "@/components/atoms/icons/Close";
import {ChangeEvent, useState} from "react";
import {useDebouncedSearch} from "@/hooks/useDebounceSearch";
import {JsonSearchSchema} from "@/components/molecules/searchBox/JsonSchema";
import {Input} from "@/components/atoms/input/Input";

type TSearchBox = {
    placeholder? : string ,
    searchInputName? : string,
    searchInputTitle? : string,
    className? : string ,
    onChange? : (e : ChangeEvent<HTMLInputElement>) => void
}

export const SearchBox = (props : TSearchBox) => {
    const [search, setSearch] = useState('');

    useDebouncedSearch(setSearch,search, 600);

    return <>
        { search ? <JsonSearchSchema searchValue={search} /> : ''}
        <div className={`relative w-full ${props.className ?? ''}`}>
           <Input
               value={search}
               placeholder={'جستجو در نام مرکز یا نام مشاور'}
               onChange={(e) => setSearch(e.target.value)} />
            {search.length ?
                <span onClick={() => setSearch('')} className={'cursor-pointer absolute left-1 top-1/2 -translate-y-1/2'}>
                <CloseIcon width={20} height={20}/>
            </span> : <></>}
        </div>
    </>
}