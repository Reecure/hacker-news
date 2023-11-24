import {BaseItem, ItemTypes} from "@/enteties/enteties.ts";

export interface Story extends BaseItem{
    descendants: number;
    kids: number[];
    type: ItemTypes.STORY
}