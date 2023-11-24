import {BaseItem, ItemTypes} from "@/enteties/enteties.ts";

export interface JobItem extends BaseItem{
    url: string;
    type: ItemTypes.JOB
}