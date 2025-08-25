import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

function SidebarMenu() {
    const navigate = useNavigate();

    const handleMenuClick = (path) => {
        navigate(path);
    };

    return (
        <Sidebar style={{ height: '100vh', width: '50vh' }}>
            <Menu>
                <SubMenu label="Projects">
                    <MenuItem onClick={() => handleMenuClick('/')}>
                        Home
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/quote')}>
                        Quote
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/weather')}>
                        Weather
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/todo')}>
                        To-Do List
                    </MenuItem>
                </SubMenu>
                <SubMenu label="About">
                    <MenuItem onClick={() => handleMenuClick('/about')}>
                        Me
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('/contact')}>
                        Contact
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}

export default SidebarMenu;