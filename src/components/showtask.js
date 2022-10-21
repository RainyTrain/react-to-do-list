import st from '../styles/showtask.module.scss'

function ShowTask(props) {
    return (
        <div className={st.task}>
            {props.todo.name}<button className={st.bt} onClick={() => props.delete(props.todo.name)}>X</button>
        </div>
    )
}

export default ShowTask