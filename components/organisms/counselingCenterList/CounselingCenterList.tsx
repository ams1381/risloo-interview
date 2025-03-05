'use client'
import { useState, useEffect } from "react";
import { TCounselingCenterItem } from "@/types";
import { Button } from "@/components/atoms/button/Button";
import CounselingCentersList from "@/public/Risloo-Center-Sample.json";
import {CounselingCenterCard} from "@/components/molecules/counselingCenterCard/CounselingCenterCard";
import {CounselingJsonSchema} from "@/components/organisms/counselingCenterList/JsonSchema";
import {EmptyListPlaceholder} from "@/components/molecules/EmptyListPlaceholder";
import {CounselingCenterBlog} from "@/components/molecules/CounselingCenterBlog";
import Link from "next/link";
import {Pagination} from "@/components/molecules/Pagination";

const searchInCounselItem = (Item: TCounselingCenterItem, searchValue: string)  =>
    Item.detail.title.includes(searchValue) || Item.manager.name?.includes(searchValue)

const getInitialList = (searchValue?: string)  => {
    if (searchValue)
        return CounselingCentersList.filter((Item) => searchInCounselItem(Item as TCounselingCenterItem, searchValue));
    return CounselingCentersList;
}

export const CounselingCenterList = ({ searchValue , className , page }: { searchValue?: string , className? : string , page? : string }) => {
    const [counselingList, setCounselingList] = useState(() => getInitialList(searchValue));
    const [visibleCount, setVisibleCount] = useState(page ? Number(page) * 10 :10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCounselingList(getInitialList(searchValue))
    }, [searchValue])

    const loadMore = () => {
        if (loading) return;
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + 10);
            setLoading(false);
        }, 900);
    };

    return (
        <section className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:flex-[3] xl:grid-cols-4 2xl:grid-cols-5 gap-4 pb-4 ${className ?? ''}`}>
            {counselingList.length ? (
                <>
                    <CounselingJsonSchema list={counselingList.slice(0, visibleCount) as TCounselingCenterItem[]} />
                    {counselingList.slice(0, visibleCount).map(Item => (
                        <CounselingCenterCard key={Item.id}
                                              active={Item.status === 'active'}
                                              manageName={Item.manager.name}
                                              title={Item.detail.title}
                                              id={Item.id}
                                              avatarUrl={Item.detail.avatar.length ? Item.detail.avatar[Item.detail.avatar.length - 1].url : null}/>
                    ))}
                    {visibleCount < counselingList.length && (
                        <>
                            <Pagination pageSize={10} className={'hidden'} total={CounselingCentersList.length}  />
                            <div className="col-span-full flex justify-center py-2">
                                <Button onClick={loadMore} isLoading={loading}>مشاهده بیشتر</Button>
                            </div>
                        </>
                    )}
                </>
            ) : <EmptyListPlaceholder />}
            <CounselingCenterBlog />
        </section>
    );
};
