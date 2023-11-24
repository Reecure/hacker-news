import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';

import App from "./app/App.tsx";
import {BrowserRouter} from "react-router-dom";
import ReduxProvider from "@/app/providers/ReduxProfider/ui/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReduxProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>
);
