import { Routes, Route, Outlet } from 'react-router-dom';
//components
import Navbar from '../components/Navbar/Navbar';
//pages
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';

const RouterGuest = () => {

    const Layout = () => {
        return (
            <>
                <Navbar isLogin={false}/>
                <Outlet />
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                </Route>
            </Routes>
        </>
    )
}

export default RouterGuest;
