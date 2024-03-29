import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import LoginForm from '../components/LoginForm/LoginForm';

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
                    <Route path="/login" element={<LoginForm/>} />
                </Route>
            </Routes>
        </>
    )
}

export default RouterGuest;
