export default function Hello() {

    function showName(){
        console.log("Mike")
    }
    function showText(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <h1>Hello</h1>
            <button onClick = {showName}>Show Name</button>
            <button onClick = {() => {
                console.log(10)
            }}>Show Age</button>
            <input type="text" onChange = {showText}></input> 
        </div>
    )
}