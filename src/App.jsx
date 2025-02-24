import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Onboarding from "./pages/Home/Onboarding";
import Tutorial from "./pages/Home/Tutorial";
import Login from "./pages/Login/Login";

import GroupListPage from "./pages/Dashboard/GroupListPage";
import BookListPage from "./pages/Dashboard/BookListPage";
import UserInfoPage from "./pages/Dashboard/UserInfoPage";
import RouteGuard from "./components/Dashboard/RouteGuard";
import Layout from "./components/Dashboard/Layout";

import BookDetail from "./pages/Dashboard/BookDetail";
import Share from "./pages/Editor/Share";
import Edit from "./pages/Editor/Edit";
import ContentView from "./pages/Editor/ContentView";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Onboarding />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        element={
                            <RouteGuard>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </RouteGuard>
                        }
                    >
                        <Route path="/groups" element={<GroupListPage />} />
                        <Route path="/groups/:groupId" element={<BookListPage />} />
                        <Route path="/userinfo" element={<UserInfoPage />} />
                   </Route>

                    <Route path="/groups/:groupId/books/:bookId" element={<BookDetail />} />  {/* 경로 수정 (앞에 /groups/:groupId 붙임) */}
                    <Route path="/share" element={<Share />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/view" element={<ContentView />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
