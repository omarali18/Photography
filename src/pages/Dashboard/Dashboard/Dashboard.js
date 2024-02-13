import * as React from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddCardIcon from '@mui/icons-material/AddCard';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <Link className="DashBoardLink" to={`/dashboard`}>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'}/>
            </ListItemButton>
    </ListItem>
      </Link>
      <Link className="DashBoardLink" to={`/dashboard/AddPhoto`}>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary={'Add Photography'}/>
            </ListItemButton>
    </ListItem>
      </Link>
      <Link className="DashBoardLink" to={`/dashboard/AllPhoto`}>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary={'All Photography'}/>
            </ListItemButton>
    </ListItem>
      </Link>
      <Link className="DashBoardLink" to={`/dashboard/AddVideo`}>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <VideoCallIcon />
              </ListItemIcon>
              <ListItemText primary={'Add Videography'}/>
            </ListItemButton>
    </ListItem>
      </Link>
      <Link className="DashBoardLink" to={`/dashboard/AllVideo`}>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary={'All Videography'}/>
            </ListItemButton>
    </ListItem>
      </Link>
      {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'}/>
            </ListItemButton>
    </ListItem> */}
      {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <AddCardIcon />
              </ListItemIcon>
              <ListItemText primary={'Add Photography'}/>
            </ListItemButton>
    </ListItem>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary={'All Photography'}/>
            </ListItemButton>
    </ListItem> */}
      {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <VideoCallIcon />
              </ListItemIcon>
              <ListItemText primary={'Add Videography'}/>
            </ListItemButton>
    </ListItem> */}
      {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary={'All Videography'}/>
            </ListItemButton>
    </ListItem> */}
        {/* {['Inbozx', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      {/* <Divider /> */}
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            style={{ justifyContent:'left' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
        className='p-0'
      >
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography> */}
        <Outlet />
        
      </Box>
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default Dashboard;