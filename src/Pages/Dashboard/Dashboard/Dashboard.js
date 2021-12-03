import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css'
import Users from '../Users/Users';
import DeleteUser from '../DeleteUser/DeleteUser';
import EditUser from '../EditUser/EditUser';
import Navigation from '../../Navigation/Navigation';
import DashbaordAllNotes from '../DashboardAllNotes/DashbaordAllNotes';
import DashboardHome from '../DashboardHome/DashboardHome';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logout, authError } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    console.log(authError);
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {console.log(admin)}

            <NavLink to={`${url}/dashboardHome`}><h5>Home</h5></NavLink>
            {
                admin.admin ? <div className="dashboard-nav-link">
                    <Link to={`${url}/users`}><h5>Users</h5></Link>
                    <Link to={`${url}/edituser`}><h5>Edit User</h5></Link>
                    <Link to={`${url}/deleteuser`}><h5>Delete User</h5></Link>
                </div> : <div className="dashboard-nav-link">
                    <Link to={`${url}/dashboardallnotes`}><h3>All Notes</h3></Link>
                </div>
            }
            <NavLink to="/"><button onClick={logout} className="btn btn-danger">Logout</button></NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <Navigation></Navigation>
            {/* <AppBar
                position="fixed"
                sx={{
                    background: 'black'
                }}
            >
                <Toolbar>
                    <Navigation></Navigation>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <i class="fas fa-bars"></i>
                    </IconButton>
                    <Typography variant="h6" sx={{ mr: 2, ml: 5, cursor: 'pointer'}} onClick={handleDrawerToggle} noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" sx={{ mr: 2, cursor: 'pointer'}} onClick={handleDrawerToggle} noWrap component="div">
                        Subscriptions
                    </Typography>
                    <Typography variant="h6" sx={{ mr: 6, cursor: 'pointer'}} onClick={handleDrawerToggle} noWrap component="div">
                        Profiles
                    </Typography>
                    <Typography variant="h6" sx={{ mr: 2, cursor: 'pointer'}} onClick={handleDrawerToggle} noWrap component="div">
                        Signed in as : {user.email}
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route path={`${path}/dashboardHome`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/users`}>
                        <Users></Users>
                    </Route>
                    <Route path={`${path}/edituser`}>
                        <EditUser></EditUser>
                    </Route>
                    <Route path={`${path}/deleteuser`}>
                        <DeleteUser></DeleteUser>
                    </Route>
                    <Route path={`${path}/dashboardallnotes`}>
                        <DashbaordAllNotes></DashbaordAllNotes>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

