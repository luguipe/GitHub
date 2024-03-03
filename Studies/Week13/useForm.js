function useForm(initialValues){
    const[values, setValues] = React.useState(initialValues);

    return[
        values,
        e=> {
            if(e.type === 'change'){
                const { name, value ,type, checked} = e.target;
                setValues({
                    ...values,
                    [name]: type ==='checkbox' ? checked : value 
                });
            }
        }
    ];
}