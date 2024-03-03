function SignUp(){

    const [values, handleChange] = useForm({year:'',name:'',email:'',password:'',checkbox: false});
    const [errors, setError] = React.useState({nameError: '', emailError: '',passwordError:''});
    const isValid = true;

    /**
     * Validates the values and sets the error state accordingly.
     */
    function validate() {
        let isValid = true;
        const newErrors = {};

        // Validate name field
        if (!values.name) {
            newErrors.nameError = 'Name is required';
            isValid = false;
        }

        // Validate email field
        if (!values.email) {
            newErrors.emailError = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(values.email)) {
            newErrors.emailError = 'Invalid email format';
            isValid = false;
        }

        // Validate password field
        if (!values.password) {
            newErrors.passwordError = 'Password is required';
            isValid = false;
        } else if (values.password.length < 6) {
            newErrors.passwordError = 'Password must be at least 6 characters long';
            isValid = false;
        }

        // Perform asynchronous validation if needed
        if (isValid) {
            // Perform your asynchronous validation logic here
            // For example, you can make an API call to check if the email is already registered
            // If there is an error, set newErrors.emailError = 'Email is already registered';
            // isValid = false;
        }

        setError(newErrors);
        return isValid;
    }

    function handleSubmit(){
        //console.log('values', values);
        validate();
    }

// const [year, setYear] = React.useState('');
// const [name, setName] = React.useState('');
// const [email, setEmail] = React.useState('');
// const [password, setPassword] = React.useState('');
// const [checkbox, setCheckBox] = React.useState('');

    // function handle(){
    //     console.log('values: ', values);
    //     // console.log('year: ', year);
    //     // console.log('name: ', name);
    //     // console.log('email: ', email);
    //     // console.log('password: ', password);
    //     // console.log('checkbox: ', checkbox);
    // }
    return (
        <>
        <select name='year' value={values.year} onChange={handleChange}>
        {/* <select value={values.year} onChange={e => setYear(e.target.value)}> */}
        <option value="Freshman">Freshman</option>
        <option value="Sophomore">Sophomore</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
    </select>
    <div>Name</div>
    <input type="text" name='name' value={values.name} onChange={handleChange}/>
    {/* <input type="text" value={values.name} onChange={e => setName(e.target.value)}/> */}
    <div style={{color:'red'}}>{errors.nameError}</div>

    <div>Email</div>
    <input type="text" name='email' value={values.email} onChange={handleChange}/>
    {/* <input type="text" value={values.email} onChange={e => setEmail(e.target.value)}/> */}
    <div style={{color:'red'}}>{errors.emailError}</div>

    <div>Password</div>
    <input type="text" name='password' value={values.password} onChange={handleChange}/> 
    {/* <input type="text" value={values.password} onChange={e => setPassword(e.target.value)}/>  */}
    <div style={{color:'red'}}>{errors.passwordError}</div>

    <div>
        <input type="checkbox" name='checkbox' checked={values.checkbox} onChange={handleChange}/>Remember me
        {/* <input type="checkbox" value={values.checkbox} onChange={e => setCheckBox(e.target.checkbox)}/>Remember me */}
    </div>
    <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)