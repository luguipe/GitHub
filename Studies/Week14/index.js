function App(){
    const [todos,setTodos] = React.useState([
        { text: 'Tofu', isCompleted: false,},
        { text: 'Meet friend for lunch', isCompleted: false,},
        { text: 'Build todo app', isCompleted: false, }
    ]);


    const addTodo = text => {
        const newTodos = [...todos, {text: text, isCompleted: false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        let temp = [...todos];   
        temp.splice(index,1);
        setTodos(temp);
    }

    return(<>
        {todos.map((todo,i) => 
          <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}   
        <TodoForm addTodo={addTodo}/>
    </>);
}

ReactDOM.render(<App />, document.getElementById('root'));