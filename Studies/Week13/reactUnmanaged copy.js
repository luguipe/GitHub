function SignUp(){
    function handle(){
        console.log(document.getElementById('year').value)
    }
    return (
        <>
        <select id="year">
        <option value="Freshman">Freshman</option>
        <option value="Sophomore">Sophomore</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
    </select>
    <div>Name</div>
    <input type="text" id="name"/>
    <div>Email</div>
    <input type="text" id="email"/>
    <div>Password</div>
    <input type="text" id="password"/> 
    <div>
        <input type="checkbox" id="checkbox"/>Remember me
    </div>
    <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)