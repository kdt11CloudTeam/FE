import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Onboarding from "./pages/Home/Onboarding";
import Login from "./components/Home/Login";

import GroupListPage from "./pages/Dashboard/GroupListPage";
import BookListPage from "./pages/Dashboard/BookListPage";
import UserInfoPage from "./pages/Dashboard/UserInfoPage";
import RouteGuard from "./components/Dashboard/RouteGuard";
import Layout from "./components/Dashboard/Layout";

import BookDetail from "./pages/Dashboard/BookDetail.jsx";
import Share from "./pages/Editor/Share";
import ContentView from "./pages/Editor/ContentView";
import ReadonlyView from "./pages/Editor/ReadonlyView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login/oauth2/code/kakao" element={<Login />} />
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
          {/* 경로 수정 (앞에 /groups/:groupId 붙임) */}
          <Route
            path="/groups/:groupId/books/:bookId/share"
            element={<Share />}
          />
          <Route
            path="/groups/:groupId/books/:bookId"
            element={<BookDetail />}
          />
          <Route
            path="/groups/:groupId/books/:bookId/view"
            element={<ContentView />}
          />
          <Route path="/share/:bookId" element={<ReadonlyView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
