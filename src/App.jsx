import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Onboarding from "./pages/Home/Onboarding";
import Tutorial from "./pages/Home/Tutorial";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import GroupList from "./pages/Dashboard/GroupList";
import BookList from "./pages/Dashboard/BookList";
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
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/groups" element={<GroupList />} />
                    <Route path="/groups/:groupId" element={<BookList />} />
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
