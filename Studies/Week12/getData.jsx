const App = () => {

    // let product = { name: "pear", cost: 2, inStock: 7};
    // let {name, inStock} = product ;
    // let item = {name, inStock};

    // const handler = () => alert(`Name: ${item.name} instock: ${item.inStock}`);
//     // pass the index at the e handler, the define at the GetAtribute, add in the map so we can be catched everywhere
//      const handler = e => alert(`button: ${e.target.getAttribute("index")}`);
//      let a = [1,2,3,4]
//      let list = a.map((item,index) => {
//         return <MyButton index= {index} onClick={handler} key= {index}>Click Me</MyButton>
//     });
//     return <div>{list}</div>
// };
    // //Using annonimmous function at the Handler we can remove the index, get
    // const handler = (index) => alert(`button: ${index}`);
    //     let a = [1,2,3,4]
    //     let list = a.map((item,index) => {
    //         return <MyButton onClick={()=>handler(index)} key= {index}>Click Me</MyButton>
    // });
    //     return <div>{list}</div>
// };

    //Delete button exercise using useState
    const { useState } = React;
        let [state,setState] = useState([1,2,3,4])
        const handler = index => {
            let newState = state.filter(item => item != index)
            //code to update state and remove destroyed button
            //[1,3,4]
            console.log(newState);
            setState(newState);
        }
        let list = state.map((item,index) => {
            return <MyButton onClick={()=>handler(item)} key= {index}>Click Me</MyButton>
    });
        return <div>{list}</div>
};

//Destructing an Object
const MyButton = ({ onClick }) => {
   let { Button } = ReactBootstrap;
   return <Button onClick={onClick}>Click Me</Button>
};

//-------
ReactDOM.render(<App />, document.getElementById("root"));
