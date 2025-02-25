import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Onboarding from "./pages/Home/Onboarding";
import GroupListPage from "./pages/Dashboard/GroupListPage";
import BookListPage from "./pages/Dashboard/BookListPage";
import UserInfoPage from "./pages/Dashboard/UserInfoPage";

import BookDetail from "./pages/Dashboard/BookDetail";
import Share from "./pages/Editor/Share";
import Edit from "./pages/Editor/Edit";
import ContentView from "./pages/Editor/ContentView";

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

function AppContent() {
	const location = useLocation();
	const path = location.pathname;

	// 페이지별 배경색 설정
	const backgroundStyles = {
		"/": "#bb927f", // 온보딩 페이지 색상
	};

	const backgroundColor = backgroundStyles[path] || "#f6ebe6"; // 기본값

	useEffect(() => {
		document.body.style.backgroundColor = backgroundColor;
	}, [backgroundColor]);

	return (
		<div className="App" style={{ minHeight: "100vh" }}>
			<Routes>
				<Route path="/" element={<Onboarding />} />
				<Route path="/groups" element={<GroupListPage />} />
				<Route path="/groups/:groupId" element={<BookListPage />} />
				<Route path="/userinfo" element={<UserInfoPage />} />
				<Route path="/books/:bookId" element={<BookDetail />} />
				<Route path="/share" element={<Share />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="/view" element={<ContentView />} />
			</Routes>
		</div>
	);
}

export default App;
