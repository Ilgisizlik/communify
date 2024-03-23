//router
import { Routes, Route, Outlet } from 'react-router-dom'




const RouterGuest = () => {

    const Layout = () => {
        return (
            <>
                <Outlet />
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    
                </Route>
            </Routes>
        </>
    )
}

export default RouterGuest