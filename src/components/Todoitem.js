import React, { useRef} from 'react';
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
const Todoitem = (props) => {
    const {items, updateTodo, completeTodo, removeTodo} = props

    const inputRef = useRef(true);

   
    const changeFocus = () => {
        inputRef.current.disabled = false;
         
        inputRef.current.focus();
    }
    const update = (id, value, e) => {
        if(e.which === 13){
            updateTodo({ id, item: value});
            inputRef.current.disabled = true;
        }
    }

    return (
        <motion.li  
        initial={{x:"150vw",  transition:{type:"spring", duration:2}
       
        }}
        animate={{x:0,  transition:{type:"spring", duration:2}
       
        }}
        whileHover={{scale:0.9, transition:{type:"spring", duration:1}}}
        exit={{x: "-60vw", scale:[1, 0],  transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)" 

        }}
        className="card" key= {items.id} > <textarea ref={inputRef} 
                    disabled={inputRef}
                     defaultValue={items.item}
                    onKeyPress={(e) => update(items.id, inputRef.current.value, e)}
                     /> 
                     <div className="btns">
                     {items.completed === false && (
                         <motion.button
                          whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }} 
                         onClick={() => completeTodo(items.id)} style={{color:"green"}}> <IoCheckmarkDoneSharp /></motion.button>
                          )}
                     <motion.button
                      whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }} 
                     onClick = {() => changeFocus()}><AiFillEdit /></motion.button>
                     <motion.button
                      whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }} 
                     onClick = {() => removeTodo(items.id)} style={{color:"red"}}> <IoClose /></motion.button>
                     </div>
                     {items.completed && <span className="completed">Done</span>}
                     </motion.li>
    )
}

export default Todoitem
