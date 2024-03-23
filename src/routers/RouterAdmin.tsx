import { Outlet, Route, Routes } from 'react-router-dom'

const RouterAdmin = () => {

    const Layout = () => {
        return (
            <>
                <Outlet />
            </>
        )
    }

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
            </Route>
        </Routes>
    )
}

export default RouterAdmin