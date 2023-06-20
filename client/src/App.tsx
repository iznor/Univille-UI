import {useData, useUi, useUser} from "./store";
import React, {useEffect, useMemo} from "react";
import {themeConfig} from "./theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {Loader, MessageDialog} from "./components";
import {UnivilleRouter} from "./routes";
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment";

interface IApp {

}

const App = (props: IApp) => {
    const {} = props;
    const {uiState, uiActions} = useUi();
    const {userState, userActions} = useUser();
    const {dataState, dataActions} = useData();

    useEffect(() => {
        if(userState.isAuth){
            dataActions.getAppMeta()
        }
    }, [userState.isAuth]);



    const theme = useMemo(() => {
        const dir = uiState.rtl ? 'rtl' : 'ltr';
        document.dir = dir;
        return themeConfig(uiState.isDark, dir)
    }, [uiState.isDark, uiState.rtl]);
    return (
        <ThemeProvider theme={theme}>
            <React.Suspense fallback={<Loader/>}>
                <LocalizationProvider dateAdapter={AdapterMoment} dateLibInstance={moment.utc}>
                    <Loader/>
                    <MessageDialog/>
                    <UnivilleRouter/>
                </LocalizationProvider>
            </React.Suspense>
        </ThemeProvider>
    );
};

export {App};
