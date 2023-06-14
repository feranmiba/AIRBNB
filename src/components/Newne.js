import React, { useEffect,  useState } from 'react'
import Todo from './Todo'

const getLocalItems = () => {
  let list = localStorage.getItem('lists')
  if (list) {
    return JSON.parse(localStorage.getItem('lists'))
  } else {
    return []
  }
}

function Newne() {
  const [isActive, setIsActive] = useState(false)
  const [tasks, setTask] = useState(getLocalItems)
  const [taskSum, setTaskSum] = useState([])
  const [summary, setSummary] = useState("")
  const [input, setInput] = useState("")


  
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(tasks))
  }, [tasks])
 
  const onInputChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }
  const onsumChange = (e) => {
    setSummary(e.target.value)
    console.log(e.target.value)
  }
  const onFormSubmit = (e) => {
    setTask([...tasks, { id:input, title: input, sum: summary, completed: false}])
    setInput("")
    setSummary("")
  }

  const save = () => {
    setIsActive(false)
    onFormSubmit()
  }
 
  
  return (
    <section>
    <section className='btn'>
      <div>
      <p><button
      onClick={ () => setIsActive(!isActive)}
      >Create a new to-do</button></p> 
      </div>
      </section>
      {isActive && <section className='cre'>
        <form >    </form>
        <div>
        <div>
        <h2>Title</h2>
        <input type="text" 
        placeholder='Task Title'
        value={input}
        onChange={onInputChange}
        required
        />
        </div>
        <div>
          <h2>Description</h2>
          <input type="text"
          placeholder='Summary'
          onChange={onsumChange}
          value={summary}
          required
          />
        </div>
        <button className='save'
        onClick={save}
        >Save</button>
        </div>
        </section>}
    {isActive &&  <div className='overlay'></div>}
   
   <Todo
   tasks={tasks} 
   setTask={setTask}
   summary={taskSum}
   setTaskSum={setTaskSum}
   />
    </section>
  )
}

export default Newne