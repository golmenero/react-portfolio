import './index.scss';
import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Navigation />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;