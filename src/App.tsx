import { useState } from "react";
import Header from "./components/Header"
import { TakeSubmitForm, TaskTypes} from "./components/TakeSubmitForm"
import { TaskList } from "./components/TaskList";

import styles from "./App.module.scss"

function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  return (
    <>
       <Header/>
       <div className={styles.content}>
          <TakeSubmitForm tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
       </div>
    </>
  )
}

export default App
