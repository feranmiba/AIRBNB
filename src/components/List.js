import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Add from '@mui/icons-material/Add';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Person from '@mui/icons-material/Person';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tasks from './Tasks';



// STYLE
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const getLocalItems = () => {
    let list = localStorage.getItem('Task')
    if (list) {
      return JSON.parse(localStorage.getItem('Task'))
    } else {
      return []
    }
  }


 


function Lists() {
    const [open, setOpen] = useState(false)
    const [tasks, setTask] = useState(getLocalItems)
    const [summary, setSummary] = useState("")
    const [title, setTitle] = useState("")
    const [createby, setCreateby] = useState("")
    const [date, setDate] = useState("")
    const handleOpen = () =>  setOpen(true);
    const handleClose = () => setOpen(false);
    const [tasked, setTasked] = useState( {
      titles: "",
      description: "",
      createdby: "",
      dateCreated: "",
      id:""
    })


    useEffect(() => {
        localStorage.setItem('Task', JSON.stringify(tasks))
    }, [tasks])



const onFormSubmit = (e) => {
    setTask([...tasks, { id:title, title: title, sum: summary, cre: createby, date: date,  completed: false}])
    setTitle(" ")
    setSummary("")
    setCreateby("")
    setDate("") 
  }

  const onCurrentTask = (e) => {
    console.log(e.target)
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const onsumChange = (e) => {
    setSummary(e.target.value)
  }
  const onDateChange = (e) => {
    setDate(e.target.value)
  }
  const onNameChange = (e) => {
    setCreateby(e.target.value)
  }

  const handleClick = (task, des, byWho, datecreate, id) => {
    setTasked({
      ...tasked,
      titles: task,
      description: des,
      createdby: byWho,
      dateCreated: datecreate, 
      id: id
    }, [])
  }
  const save = () => {
    handleClose()
    onFormSubmit()
  }


  return(
      <div class='flex gap-8 justify-center'>
      <Box sx={{
      width: '80%'
      }}>
      <div>
      <Typography variant='h2'>Today</Typography>
      </div>

      <section class='pt-5'>
      <div>
          <Button variant='outlined'sx={{ display: 'flex', gap: '10px', paddingRight: { lg: '200px', md: '150px', sm: '100px' }}} onClick={handleOpen}> <Add /> Add new Task</Button>
      </div>

      {/* ADD NEW TASK MODAL  */}
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
      backdrop: {
          timeout: 500,
      },
      }}
      > 
      <Fade in={open}>
      <Box sx={style}>
      <Typography id="transition-modal-title" variant="h6" component="h2"> Add new Task</Typography>
      <div class='pt-5'>
          <Stack direction={'column'} spacing={2}>
          <Typography variant='h7'>Tasks</Typography>
          <TextField 
          label= 'Add a new task'
          value={title}
          onChange={onTitleChange}
          />
          </Stack>
      </div>

      <div class='pt-5 border-b-2'>
          <Stack direction={'column'} spacing={2}>
          <Typography variant='h7'>Description</Typography>
          <TextField 
          label= 'Description'
          value={summary}
          onChange={onsumChange}
          helperText= 'Please give a decription of Your task'
          />
          </Stack>
      </div>
      <div class='pt-2'>
          <Stack direction={'row'} spacing={2}>
          <Stack direction={'column'} spacing={2}>
          <Typography variant='h7'>Creator</Typography>
          <TextField 
          label= 'Name'
          value={createby}
          onChange={onNameChange}
          helperText= 'Please type your name'
          />
          </Stack>
          <Stack direction={'column'} spacing={2}>
          <Typography variant='h7'>Date created</Typography>
          <TextField 
          label= 'MM/DD/YY'
          value={date}
          onChange={onDateChange}
          />
          </Stack>
          </Stack>
      </div>
      {/* SAVE  */}
      <Button variant='contained' onClick={save}>Save</Button>
      </Box>
      </Fade>
      </Modal>
      {/* ADD NEW TASK MODAL STOP */}


      <div class='  overflow-auto   overflow-x-hidden h-[100vh]'>
          
        {tasks.map((task) => (  <List>
              <ListItem disablePadding key={task.id} onClick={() => handleClick(task.title, task.sum, task.cre, task.date, task.id)}>
                  <ListItemButton  >
                      <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreRounded /> }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                      <Typography fontSize='14px'>{task.title}</Typography> 
                      </AccordionSummary>
                      <AccordionDetails sx={{display: 'flex', gap:'20px'}}>
                      <Typography fontSize={12}> <CalendarMonth /> {task.date}</Typography> <Typography fontSize={12}><Person /> {task.cre}</Typography>  <Typography fontSize={12}>  Personal</Typography> 
                      </AccordionDetails>
                      </Accordion>
                      
                  </ListItemButton>
              </ListItem> 
          </List>))}
      </div>
      </section>
      </Box>
      <Tasks 
      topic={tasked.titles}
      whocreate={tasked.createdby}
      date={tasked.dateCreated}
      summary={tasked.description}
      id={tasked.id}
      title={tasks}
      whew= {setTask}
      />

      </div>
          )
}


export default Lists;