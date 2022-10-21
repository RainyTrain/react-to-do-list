function Searching(props) {
    return(
        <input style={{mirginTop:'10px'}}onChange={e => props.setSearchQuery(e.target.value)} placeholder="Search task"></input>
    )
}

export default Searching