import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const DashboardLayout = () => {
    const { isLoggedIn } = useAuth();
  return (
    <>
        <div className = {`${isLoggedIn ? "lg:block" : "hidden"}`}>
            <Navbar />
        </div>
        <div className = {`hidden ${isLoggedIn ? "lg:hidden sm:block" : "sm:hidden"}`}>
            <Sidebar />
        </div>
        <div className=''>
            <Outlet />
        </div>
    </>
  )
}

export default DashboardLayout