import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { admin, user, logout } = useAuth();
    // const pages = admin.admin ? ['Dashboard', 'Subscription', 'All Notes'] : ['Dashboard', 'Subscription', 'Add Notes'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" style={{ marginBottom: '30px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <h5 style={{ color: 'white', }}>To Do App</h5>
                    </Typography>
                    {
                        admin.admin ? <div style={{ display: 'flex' }}>
                        <NavLink to="/addnotes">
                                <h5 style={{ color: 'white', marginLeft: '40px', cursor: 'pointer' }}>All Notes</h5>
                            </NavLink>
                            <NavLink to="/dashboard/dashboardhome/dashboardHome">
                                <h5 style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}>Dashboard</h5>
                            </NavLink>
                            <NavLink to="/subscription">
                                <h5 style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}>Subscription</h5>
                            </NavLink>
                        </div> : <div style={{ display: 'flex' }}>
                            <NavLink to="/addnotes">
                                <h5 style={{ color: 'white', marginLeft: '40px', cursor: 'pointer' }}>Add Note</h5>
                            </NavLink>
                            <NavLink to="/dashboard/dashboardhome/dashboardHome">
                                <h5 style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}>Dashboard</h5>
                            </NavLink>
                            <NavLink to="/subscription">
                                <h5 style={{ color: 'white', marginLeft: '20px', cursor: 'pointer' }}>Subscription</h5>
                            </NavLink>
                        </div>
                    }
                    <h5 style={{ color: 'white', marginLeft: '80px', marginRight: '30px' }}>Signed As : {user.email}</h5>
                    <NavLink to="/"><button onClick={logout} className="btn btn-danger">Logout</button></NavLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;