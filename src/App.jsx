import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
			<div className="App">
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
		</BrowserRouter>
	);
}

export default App;
