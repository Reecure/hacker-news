import {ReactNode} from "react";
import {NewPage} from "@/pages/NewPage";
import {AskPage} from "@/pages/AskPage";
import {ShowPage} from "@/pages/ShowPage";
import {JobsPage} from "@/pages/JobsPage";


export enum Pages {
    new = "new",
    ask = "ask",
    show = "show",
    jobs = "jobs",
}

interface Routes {
    href: Pages,
    component: ReactNode
}

export const routes:Routes[] = [
    {
        href: Pages.new,
        component: <NewPage />
    },
    {
        href: Pages.ask,
        component: <AskPage />
    },
    {
        href: Pages.show,
        component: <ShowPage />
    },
    {
        href: Pages.jobs,
        component: <JobsPage />
    },
];

