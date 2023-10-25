import React, {  useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import EventIcon from '@mui/icons-material/Event';
import PortraitIcon from '@mui/icons-material/Portrait';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';






function Tasks({ topic, whocreate, date, summary, title, id, whew}) {

    const handleDelete = (id) => (
        whew(title.filter((task) => task.id !== id))
      )


    return (
        <div class= 'md:w-[80%] lg:w-[50%] hidden md:block'>
            <Box sx={{
                backgroundColor: 'whitesmoke',
                padding: '20px', 
                borderRadius: '5mm'
            }}>
               

                
                    <div>
                    <Typography variant='h5' fontWeight={600}>Tasks : </Typography>
                </div>

                   


                 <div class='pt-7'>
                    <div>
                       <p class='border px-6 py-3 rounded-lg'>
                       <Typography fontSize={14}>{topic}</Typography>
                       </p>

                       <div class='mt-5'>
                        <Typography fontWeight={600} fontSize={18}>Description</Typography>
                       <p class='border px-6 py-3 rounded-lg  mt-3'>
                            <Typography  fontSize={14} >{summary}</Typography>
                        </p>
                        </div> 
                        </div>
                                

                            {/* LIST SECTION */}
                            <section class='mt-5'>

                            <Stack spacing={3} direction={'row'}>
                            <Typography variant='h6' fontWeight={600}>Lists</Typography>
                            <Button variant="contained">Personal</Button>
                             </Stack> 

                             <Stack spacing={3} direction={'row'} marginTop={2}>
                            <Typography fontSize={16} fontWeight={600}>Date created</Typography>
                            <Typography><EventIcon />{date}</Typography>
                             </Stack> 

                              <Stack spacing={3} direction={'row'} marginTop={2}>
                            <Typography fontSize={16} fontWeight={600}>Created by</Typography>
                            <Typography>{whocreate} <PortraitIcon /> </Typography>
                             </Stack>   
                            </section>
                </div>
                   {/* BOTTOM NAV */}
                   <section class='  pt-56'>
                            <Stack spacing={3} direction={'row'}>
                            <Button variant='outlined' onClick={() => handleDelete(id)} ><DeleteIcon /> Delete</Button>
                            <Button variant='contained'>Ok <CheckIcon /> </Button>
                             </Stack> 
                            </section>
            </Box>
            </div>
    )
}





export default Tasks;