import React, { useMemo, useState } from "react";
import ShowTask from "./showtask";
import Sorting from './sorting'
import Searching from "./search";
import st from "../styles/todo.module.scss"


function Todo() {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState({name : ''})
    const [sortingValue, setSortingValue] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function createTask(e){
        e.preventDefault()
        if(task.name != ''){
          setTodos([...todos, {...task}])
          setTask({name : ''})
        }
    }   

    function deleteOne(name){
        setTodos(todos.filter((item) => item.name !== name))  
    }

    const sortedTasks = useMemo(() => {
        if (sortingValue) {
          return [...todos].sort((a,b) => {
            return a[sortingValue].localeCompare(b[sortingValue])})
        }
        return todos
      }, [sortingValue, todos])

      const searchingTasks = useMemo(() => {
        return sortedTasks.filter(task => task.name.includes(searchQuery.toLowerCase()))
      }, [searchQuery, sortedTasks])

    return(
        <div className={st.main}>
            <form>
                <div className={st.panel}>
                    <input placeholder="Task" value={task.name} onChange={(e) => setTask({name : e.target.value})}></input>
                    <button onClick={createTask}>Add</button>
                    <Searching setSearchQuery={setSearchQuery}/>
                    <Sorting 
                        defaultValue='Sorting'
                        option = {[{value : 'name', name : 'name'}]}
                        value = {sortingValue}
                        onChange = {setSortingValue}
                    />  
                </div>
            </form>
            <div className={st.content}>
                {searchingTasks.length != 0
                    ?   searchingTasks.map(todo => {
                            return <ShowTask todo={todo} delete={deleteOne}/>
                        })
                    : <div>You have no tasks!</div>
                }
            </div>
        </div>
    )
}

export default Todo