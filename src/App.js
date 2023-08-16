//import logo from './logo.svg';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos=[{rowNumber:1,rowDescription:'Feed puppy',rowAssigned:'user one'},
  {rowNumber:2,rowDescription:'eat',rowAssigned:'user two'},
  {rowNumber:3,rowDescription:'study',rowAssigned:'user three'},
  {rowNumber:4,rowDescription:'Make dinner',rowAssigned:'user one'}]

 const addToDo=() =>{
  if(todos.length >0){
    const newTodo={rowNumber:todos.length + 1,rowDescription: 'New Todo',rowAssigned: 'user three'};
    todos.push(newTodo);
    console.log(todos);
  }
  
 }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your TODO'S
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addToDo}>
            Add new todo
            </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
