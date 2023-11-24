import {BaseItem, ItemTypes} from "@/enteties/enteties.ts";

export interface AskItem extends BaseItem {
    descendants: number;
    kids: number;
    type: ItemTypes.STORY
}
