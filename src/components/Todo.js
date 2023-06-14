import React  from 'react'

function Todo({tasks, setTask, summary, setTaskSum}) {
  
  const handleDelete = (id) => (
    setTask(tasks.filter((task) => task.id !== id.id))
  )
  return (
    <section className='lasted'>
    <section className='last'>
    { tasks.map((task) => ( 

       <summary id={task.id}>
      <span>  <input type="checkbox" name="" id="yeah"  />  </span>  
      {/* onClick={()=> handleComplete(task)}  */}
      <div>
     
       <h2 key={task.id}>{task.title}</h2>
     <p >{task.sum}</p>
        </div>   
        <div>
          <button
          onClick={() => handleDelete(task)}
          >delete</button>
          </div>          
      </summary>
       )
       )
       }
    </section>
    
    </section>
  )  
}

export default Todo