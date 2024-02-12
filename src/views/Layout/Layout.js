import {Outlet, NavLink} from "react-router-dom";
import './Layout.scss';

const Layout = () => {
    const activate = ({isActive}) => isActive ? 'active' : '';
    return (
        <>
            <nav className='demo-nav'>
                <NavLink className={activate} to="/">Home</NavLink>
                <NavLink className={activate} to="/flex-row">Flex Row</NavLink>
                <NavLink className={activate} to="/flex-column">Flex Column</NavLink>
                <NavLink className={activate} to="/grid">Grid</NavLink>
                <NavLink className={activate} to="/clip-path">Clip Path</NavLink>
                <NavLink className={activate} to="/reset">Reset</NavLink>
                <NavLink className={activate} to="/box-model">Box Model</NavLink>
            </nav>

            <div className='demo-content'>
                <Outlet/>
            </div>
        </>
    )
};

export default Layout;