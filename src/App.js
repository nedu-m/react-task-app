import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  },
  {
    id: 2,
    text: 'Gym',
    day: 'Feb 5th at 1:00pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Dancing',
    day: 'Feb 5th at 11:30pm',
    reminder: false,
  }
])

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

//Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder:
        !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ( 'No Tasks to show' )}
    </div>
  )
}

export default App;
