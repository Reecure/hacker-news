import {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {Layout} from "@/shared/ui";
import {routes} from "@/shared/config/routeConfig/routeConfig.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import {ScreenCenter} from "@/widgets";
import {ItemPage} from "@/pages/ItemPage";

interface Props {
}

const AppRouter: FC<Props> = () => {
    return (
        <Suspense fallback={<ScreenCenter><Loader /></ScreenCenter>}>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<MainPage />} />
                    {
                        routes.map(route => (
                            <Route key={route.href} path={`/${route.href}`} element={route.component} />
                        ))
                    }
                    <Route path={`/item/:id`} element={<ItemPage />} />
                    <Route path={`new/item/:id`} element={<ItemPage />} />
                    <Route path={`ask/item/:id`} element={<ItemPage />} />
                    <Route path={`show/item/:id`} element={<ItemPage />} />
                    <Route path={`jobs/item/:id`} element={<ItemPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;