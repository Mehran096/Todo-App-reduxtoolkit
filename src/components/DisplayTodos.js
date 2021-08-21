import { motion, AnimatePresence} from 'framer-motion';
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos,  updateTodos, completeTodos } from '../redux/reducer';
import Todoitem from './Todoitem';
 
const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatcheToProps = (dispatch) => {
    return {
        addtodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch( updateTodos(obj)),
        completeTodo: (id) => dispatch( completeTodos(id)),
    }
}

const DisplayTodos = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div className="displaytodos">
         <div className="buttons">
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
             onClick={() => setSort("active")}>Active</motion.button>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
             onClick={() => setSort("completed")}>Complete</motion.button>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
             onClick={() => setSort("all")}>All</motion.button>

         </div>
         <ul>
         <AnimatePresence>
             { 
                 props.todos.length > 0 && sort === "active" ?
                 props.todos.map(item => {
                     return (
                         item.completed === false && (
                         <Todoitem
                            key = {item.id}
                            items = {item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}
                         />
                         )
                     )
                 }) : null
             }

             { 
                 props.todos.length > 0 && sort === "completed" ?
                 props.todos.map(item => {
                     return (
                         item.completed === true && (
                         <Todoitem
                            key = {item.id}
                            items = {item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}
                         />
                         )
                     )
                 }) : null
             }

             { 
                 props.todos.length > 0 && sort === "all" ?
                 props.todos.map(item => {
                     return (
                        
                         <Todoitem
                            key = {item.id}
                            items = {item}
                            removeTodo = {props.removeTodo}
                            updateTodo = {props.updateTodo}
                            completeTodo = {props.completeTodo}
                         />
                     )
                 }) : null
             }
             </AnimatePresence>
         </ul>
            
        </div>
    )
}

export default  connect(mapStateToProps, mapDispatcheToProps)(DisplayTodos);
