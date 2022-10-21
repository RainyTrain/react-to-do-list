function Sorting (props) {
    return(
        <select value={props.value} onChange={e => props.onChange(e.target.value)}>
        <option >{props.defaultValue}</option>
        {props.option.map((option) => {
            return <option value={option.value}>{option.name}</option>
        })}
    </select>
    )
}

export default Sorting