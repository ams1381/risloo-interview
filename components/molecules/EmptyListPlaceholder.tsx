import {EmptyIcon} from "@/components/atoms/icons/Empty";

export const EmptyListPlaceholder = () => {
    return <div className={'col-span-5 flex flex-col items-center border border-gray1 rounded-lg py-2 justify-center gap-2'}>
        <EmptyIcon width={300} height={300} />
        <p className={'font-bold'}>لیست خالی است</p>
    </div>
}