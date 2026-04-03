import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { useState } from "react"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Friends from "./pages/Friends"
import Transactions from "./pages/Transactions"
import Balances from "./pages/Balances"
import Profile from "./pages/Profile"
import { AuthProvider } from "./utility/AuthContext"
import PrivateRoute from "./utility/PrivateRoute"
import PublicRoute from "./utility/PublicRoute"


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={
                        <PublicRoute><Login /></PublicRoute>
                    } />
                    <Route path="/register" element={
                        <PublicRoute><Register /></PublicRoute>
                    } />
                    <Route path="/" element={
                        <PrivateRoute><Home /></PrivateRoute>
                    } />
                    <Route path="/friends/" element={
                        <PrivateRoute><Friends /></PrivateRoute>
                    } />
                    <Route path="/transactions/" element={
                        <PrivateRoute><Transactions /></PrivateRoute>
                    } />
                    <Route path="/balances/" element={
                        <PrivateRoute><Balances /></PrivateRoute>
                    } />
                    <Route path="/profile/" element={
                        <PrivateRoute><Profile /></PrivateRoute>
                    } />
                    <Route path="*" element={<Navigate to='/'/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
