import Link from "next/link";

type TPaginationProps = {
    page? : string,
    total : number,
    pageSize : number ,
    className? : string
}

export const Pagination = ({page,total,pageSize,className} : TPaginationProps) => {
    return <div className={className}>
        {Array.from({length : (total/pageSize)}).map((_,index) => <Link href={`?page=${index + 1}`}>
            {index + 1}
        </Link>)}
    </div>
}