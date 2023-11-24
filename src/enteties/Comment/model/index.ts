import {ItemTypes} from "@/enteties/enteties.ts";

export interface IComment {
    "by" : string,
    "id" : number,
    "kids" : number[],
    "parent" : number,
    "text" : string,
    "time" : number,
    "type" : ItemTypes.COMMENT
}