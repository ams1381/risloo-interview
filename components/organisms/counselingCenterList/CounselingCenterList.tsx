import { useState, useEffect } from "react";
import { TCounselingCenterItem } from "@/types";
import { Button } from "@/components/atoms/Button";
import CounselingCentersList from "@/public/Risloo-Center-Sample.json";
import { EmptyListPlaceholder } from "@/components/pages/home-page/EmptyListPlaceholder";
import {CounselingCenterCard} from "@/components/molecules/CounselingCenterCard";

const searchInCounselItem = (Item: TCounselingCenterItem, searchValue: string)  =>
    Item.detail.title.includes(searchValue) || Item.detail.description?.includes(searchValue)

const getInitialList = (searchValue?: string)  => {
    if (searchValue)
        return CounselingCentersList.filter((Item) => searchInCounselItem(Item as TCounselingCenterItem, searchValue));
    return CounselingCentersList;
}

export const CounselingCenterList = ({ searchValue , className }: { searchValue?: string , className? : string }) => {
    const [counselingList, setCounselingList] = useState(() => getInitialList(searchValue));
    const [visibleCount, setVisibleCount] = useState(10);
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
        <section className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pb-4 ${className}`}>
            {counselingList.length ? (
                <>
                    {counselingList.slice(0, visibleCount).map(Item => (
                        <CounselingCenterCard key={Item.id}
                                              manageName={Item.manager.name}
                                              title={Item.detail.title}
                                              id={Item.id}
                                              avatarUrl={Item.detail.avatar.length ? Item.detail.avatar[0].url : null}/>
                    ))}
                    {visibleCount < counselingList.length && (
                        <div className="col-span-full flex justify-center py-2">
                            <Button onClick={loadMore} isLoading={loading}>مشاهده بیشتر</Button>
                        </div>
                    )}
                </>
            ) : <EmptyListPlaceholder />}
        </section>
    );
};
