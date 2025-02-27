import Link from "next/link";
import Image from "next/image";

type TCounselingCenterCardProps = {
    avatarUrl : string | null,
    title : string ,
    manageName : string,
    id : string ,
    className? : string,
    active : boolean
}

export const CounselingCenterCard = (props : TCounselingCenterCardProps) => {
    return <div className={`relative border border-gray2 flex flex-col justify-between transition overflow-hidden group pb-2
                hover:border-primary rounded-lg ${props.className}`}>
        <div className={`w-[10px] h-[10px] absolute top-2 left-2 rounded-full ${props.active ? 'bg-[#02d902]' : 'bg-[red]'}`} />
        <div>
            <div className="h-24 bg-gray1 border-b border-gray2 "></div>
            <div className="flex justify-center transition items-center flex-shrink-0 w-24 h-24 mx-auto -mt-12 bg-gray3 text-gray6 rounded-full border-4 border-white overflow-hidden">
                {props.avatarUrl ?
                    <Image src={props.avatarUrl}
                           width={110}
                           height={110}
                           alt={props.title} />
                    : <div className={'w-[110px] h-[110px] rounded-lg bg-[red]'}/>}
            </div>
            <div className="p-4">
                <div className="text-sm sm:text-base text-center text-gray-700 font-bold">
                    {props.title}
                </div>
                <div className="text-xs text-center text-gray-700 mt-2">
                    {props.manageName}
                </div>
            </div>
        </div>
        <Link className={'flex items-center justify-center gap-2 p-2 mx-3 group-hover:text-white rounded-lg' +
            ' border border-gray3 bg-gray1 group-hover:bg-primary transition'}
              href={`/counseling-centers/${props.id}`}>
            <p>مشاهده</p>
        </Link>
    </div>
}