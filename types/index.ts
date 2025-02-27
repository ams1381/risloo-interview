import React, {SetStateAction} from "react";

export type TSetState<T> = React.Dispatch<SetStateAction<T>>

type TAvatar = {
    "id": string,
    "file_name": string,
    "slug": string
    "mode": string,
    "url": string,
    "type": string,
    "mime":string,
    "exec": string
}
type TManager = {
    "id": string,
    "name":string,
    "user_id": string,
    "avatar": TAvatar[]
}
type TCounselingCenterItemDetail = {
    "title": string,
    "description": string,
    "address": string,
    "avatar" : TAvatar[]
}
export type TCounselingCenterItem = {
    "id": string,
    "manager": TManager,
    "acceptation": null,
    "status": string,
    "type": string,
    "detail" : TCounselingCenterItemDetail ,
    "created_at": number
}