import {ChangeEvent} from "react";

type TInputProps = {
    placeholder? : string ,
    searchInputTitle? : string,
    value? : string,
    onChange? : (Event : ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props : TInputProps) => {
    return  <input
        placeholder={props.placeholder ?? "جستجو"}
        title={props.searchInputTitle ?? 'جستجوی مراکز'}
        value={props.value}
        onChange={(e) => props.onChange ? props.onChange(e) : {}}
        className="w-full p-2 border transition border-gray1 focus:shadow-md focus:border-primary outline-none rounded-lg"
    />
}