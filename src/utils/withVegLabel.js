const withVegLabel = (Comp) => {
    return (props) => {
        console.log(props)
        return (
            <div >
                <label style={{ margin: 0, fontSize: "10px" }}>pure veg 🍀</label>
                <Comp {...props} />
            </div>
        )
    }
}

export default withVegLabel