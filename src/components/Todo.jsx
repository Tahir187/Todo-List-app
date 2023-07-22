import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo} from "../actions/index";
import "./todo.css"

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list)

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Add Your List Here</h1>
          <div className="addItems">
            <input type="text" placeholder="Add Items.." value={inputData} onChange={(event)=> setInputData(event.target.value)} />
            <button class='add-btn'>
            <i className="fa fa-plus" title="Add Item" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
            </button>
          </div>

          <div className="removeItems">
            <button className="remove-btn" onClick={()=> dispatch(removeTodo())}><span>Remove All</span></button>
          </div>

          <div className="showItems">
            {
              list.map((elem) =>{
                return(
                  <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                  <button className="del-btn">
                  <i className="far fa-trash-alt" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                  </button>
                  </div>
                </div>
                )
              })
            }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Todo;
