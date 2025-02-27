'use client'


import {CloseIcon} from "@/components/atoms/icons/Close";
import {useState} from "react";
import {useDebouncedSearch} from "@/hooks/useDebounceSearch";

export const SearchBox = () => {
    const [search, setSearch] = useState('');
    useDebouncedSearch(search, 600);

    return <div className={'relative w-full'}>
        <input
            placeholder="جستجو"
            title={'جستجوی مراکز'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border transition border-gray1 focus:shadow-md focus:border-primary outline-none rounded-lg"
        />
        {search.length ?
            <span onClick={() => setSearch('')} className={'cursor-pointer absolute left-1 top-1/2 -translate-y-1/2'}>
                <CloseIcon width={20} height={20}/>
            </span> : <></>}
    </div>
}