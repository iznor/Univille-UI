import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import RequireAuth from './RequireAuth';
import {Layout, Login, Signup, Leaderboard, GameWizard, Home} from '../pages';
import {useUi, useUser} from "../store";

export const UnivilleRouter = () => {
    const {userActions, userState} = useUser();
    const {uiActions} = useUi()
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!userState.isAuth && location.pathname !== '/login') {
            navigate('/login');
        }
    }, [userState.isAuth]);
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route
                    index
                    element={
                        <RequireAuth isAuth={userState.isAuth}>
                            <Home/>
                        </RequireAuth>
                    }
                />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route
                    path="/game"
                    element={
                        <RequireAuth isAuth={userState.isAuth}>
                            <GameWizard/>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/leaderboard"
                    element={
                        <RequireAuth isAuth={userState.isAuth}>
                            <Leaderboard/>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <RequireAuth isAuth={userState.isAuth}>
                            <Home/>
                        </RequireAuth>
                    }
                />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};
