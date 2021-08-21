import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos} from '../redux/reducer';
import { motion } from "framer-motion"

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatcheToProps = (dispatch) => {
    return {
        addtodo: (obj) => dispatch(addTodos(obj)),
        
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    // const inputRef = useRef(true);

    // const update = (id, value, e) => {
    //     if(e.which === 13){
    //         props.updateTodo({ id, item: value});
    //         inputRef.current.disabled = true;
    //     }
    // }

    // const changeFocus = () => {
    //     inputRef.current.disabled = false;
         
    //     inputRef.current.focus();
    // }
    const add = () => {
        if(todo===""){
            alert("input is empty")
        }else{
            props.addtodo({
                id: Math.floor(Math.random()*1000),
                item:todo,
                completed:false
            })
        }
   
    setTodo("")
    }
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    console.log("props from store", props)
    return (
        <div className="addTodos">
           <input
            className="todo-input" 
            type="text" onChange={(e) => handleChange(e)} 
             value={todo}   
            />
           <motion.button 
           whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
           className="add-btn" 
           onClick = {() => add()
           
           }
           >add</motion.button>
           <br />
           {/* <ul>
               {
                   props.todos.map((items) => {
                    return <li key= {items.id}> <textarea ref={inputRef} 
                    disabled={inputRef}
                     defaultValue={items.item}
                    onKeyPress={(e) => update(items.id, inputRef.current.value, e)}
                     /> <button onClick={() => props.completeTodo(items.id)}>complete</button><button onClick = {() => changeFocus()}>edit</button><button onClick = {() => props.removeTodo(items.id)}>Delete</button></li>
                   })
               }
           </ul> */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatcheToProps)(Todos)
