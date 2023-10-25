import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import blue from '@mui/material/colors/blue';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import KeyboardArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import Checklist from '@mui/icons-material/Checklist';
import StickyNote2 from '@mui/icons-material/StickyNote2';
import Add from '@mui/icons-material/Add';
import  SettingsApplicationsOutlined from '@mui/icons-material/SettingsApplicationsOutlined';
import Logout from '@mui/icons-material/Logout';
import Menus from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';



const buttons = [
   <Button key='one' sx={{paddingTop: '15px', display: 'flex', gap: '15px', fontSize: { lg: '15px', sm:'12px', md: '14px' } }}> <KeyboardArrowRight /> Upcoming</Button>,
   <Button key='today' sx={{paddingTop: '15px', display: 'flex', gap: '15px', fontSize: { lg: '15px', sm:'12px', md: '14px' }}}><Checklist />   Today </Button>,
   <Button key='calendar' sx={{paddingTop: '15px', display: 'flex', gap: '15px', fontSize: { lg: '15px', sm:'12px', md: '14px' }}}><CalendarMonth /> calendar</Button>  ,
   <Button key='wall' sx={{paddingTop: '15px', display: 'flex', gap: '15px', fontSize: { lg: '15px', sm:'12px', md: '14px' }}}> <StickyNote2 /> Sticky Wall</Button>,
]


function Menu() {
    return(
        <section class='w-[30%] hidden lg:block'>
            <Box sx={{
                backgroundColor: 'whitesmoke',
                borderRadius: '5mm',
                padding: "24px"
            }}>
                <section>
                    <div class='flex justify-between'>
                    <Typography fontWeight={700} variant='h6'>Menu</Typography>
                    <Menus />
                    </div>


                    <div class='pt-4'>
                        <Paper component="form" sx={{borderBottomColor: blue}}>
                            <IconButton>
                                <Search />
                            </IconButton>
                            <InputBase 
                            placeholder='Search'
                            sx={{  width: 100 }}
                            />
                        </Paper>

                        <section class=' pt-8 border-b-2 pb-2' >
                            <Typography display='block' fontWeight={700} fontSize={18} >Task</Typography>
                            <ButtonGroup orientation='vertical' variant='text'>
                               {buttons}
                            </ButtonGroup>   
                        </section>

                        <section class='pt-8 border-b-2 pb-2'>
                        <Typography display='block' fontWeight={700} fontSize={18}>List</Typography>
                        <nav aria-label="secondary mailbox folders">
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                               
                            <ListItemText primary="Personal" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Work" />
                            </ListItemButton>
                        </ListItem>
                       
                        <Button sx={{ border: '0.05mm solid black', marginTop: '10px', display: 'flex', gap:{lg: '10px', md: '2px' }}}> <Add /> Add a new item</Button>
                        </List>
                    </nav>
                        </section>

                        <section class='pt-14'>
                        <nav aria-label="secondary mailbox folders">
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon >
                                    <SettingsApplicationsOutlined />
                                </ListItemIcon>
                            <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Logout />
                             </ListItemIcon>
                            <ListItemText primary="Log out" />
                            </ListItemButton>
                        </ListItem>
                       
                        </List>
                    </nav>
                        </section>
                    </div>
                </section>
              
            </Box>
        </section>
    )
    
}


export default Menu;