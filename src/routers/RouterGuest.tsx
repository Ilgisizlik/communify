//router
import { Routes, Route, Outlet } from 'react-router-dom'
//components
import Navbar from '../components/Navbar/Navbar'
//pages
import HomePage from '../pages/HomePage/HomePage'




const RouterGuest = () => {

    const Layout = () => {
        return (
            <>
                <Navbar/>
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
                </Route>
            </Routes>
        </>
    )
}

export default RouterGuest