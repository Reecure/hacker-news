
export enum ItemTypes {
    STORY = "story",
    COMMENT = "comment",
    JOB = "job"
}

export interface BaseItem {
    by: string;
    id: number;
    score: number;
    text?: string;
    url?: string;
    time: number;
    title: string;
}

