'use client'
import {useState} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Deshboard from './component/deshboard';
import GiteIcon from '@mui/icons-material/Gite';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Student from './component/student';
import Attendance from './component/attendance';
import Setting from './component/setting';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuhere, setmenuhere] = useState("deshboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={[
        {
          backgroundColor :'blue',
        }
      ]}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{setOpen(!open)}}
            edge="start"
      
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            CollegeAttendance
          </Typography>
         

          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenuhere("deshboard")}>
              <ListItemButton
                sx={[
                  {
                    mt : 1,
                    minHeight: 60,
                    px : 4.0,
                    borderRadius: '20px',
                    '&:hover':{
                      backgroundColor :'blue',
                      color: 'white',
                       
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <HomeTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Deshboard" sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenuhere("Student")}>
              <ListItemButton
                sx={[
                  {
                    mt : 1,
                    minHeight: 60,
                    px : 4.0,
                    borderRadius: '20px',
                    '&:hover':{
                      backgroundColor :'blue',
                      color: 'white',
                       
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Student" sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenuhere("Attendance")}>
              <ListItemButton
                sx={[
                  {
                    mt : 1,
                    minHeight: 60,
                    px : 4.0,
                    borderRadius: '20px',
                    '&:hover':{
                      backgroundColor :'blue',
                      color: 'white',   
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <CoPresentIcon 
                  
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Attendance" sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenuhere("Setting")} >
              <ListItemButton
                sx={[
                  {
                    mt : 1,
                    minHeight: 60,
                    px : 4.0,
                    borderRadius: '20px',
                    '&:hover':{
                      backgroundColor :'blue',
                      color: 'white',   
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <GiteIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Setting" sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
   
        </List>
        <Divider />
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menuhere == "deshboard" && <Deshboard/>}
        {menuhere == "Student" && <Student/>}
        {menuhere == "Attendance" && <Attendance/>}
        {menuhere == "Setting" && <Setting/>}

        
      
      </Box>
    </Box>
    </>
    
  );
}
