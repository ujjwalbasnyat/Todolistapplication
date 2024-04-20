import { useDebugValue, useState } from 'react'
import './App.css';
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  // tasks storage
  const [task, setTask] = useState(["Eat breakfast","Take a  shower","Walk a dog"]);
  // adding tasks
  const[newTask, setNewtask] = useState("");
  // for  student record
  const[record, setRecord] = useState(false);

  function handleInputChange(e){
    setNewtask(e.target.value);
    

  }

  function addTask(){
    // condition to avoid empty task to be added
    if(newTask.trim() !=="")
    {
      setTask(t => [...t, newTask]);
    setNewtask("");
    }

  }

  function deleteTask(index){
    // const updateTask = task.filter((_, i)=> i !==index);
    // setTask(updateTask);
  }


  return (
    <div className={` bg-slate-200 absolute top-[80px] left-[35%] w-[30%] h-relative`}>
      <h1 className={`text-lg text-blue-400 font-bold py-2`}> To do list application</h1>

      {/* Input field */}

      <div className={`mx-4 my-4 flex  justify-center`}>
      <input type="text"
        placeholder=' Enter a task...'
        className={`px-2 focus:outline-none focus:ring-1 focus:ring-blue-400 w-relative h-relative`}
        value={newTask}
        onChange={handleInputChange}
        />
      <button className={`bg-blue-400 text-white mx-2 px-4 hover:bg-blue-500`}
      onClick={addTask}>Add</button>
      </div>

      {/* displaying field */}

      <ol className='mx-6 items-center'>
        {task.map((task, index)=>(
          <li key={index} className={`flex justify-center items-center gap-3 bg-slate-400 my-2 py-2`}>
            <span className=''>{task}</span>

          {/* bg-blue-400 text-white font-semibold px-2 py-1 */}

            <button 
            className={`border-1 border-blue-400`}
            onClick={deleteTask(index)}>
              <RiDeleteBin6Line/></button>
          </li>
        ))}
      </ol>
     <button className={`bg-blue-400 text-white  px-2 py-1 my-4 hover:bg-blue-500`}
     onClick={()=>setRecord(!record)}>{record ? "Close" : "Open to Write Author name"}</button>
     <div className='my-2'>{record && <Record/>}</div>
    </div>
  )
}

export default App;


const Record = () => {
  const[data,setData]=useState([])
  const[names, setNames]=useState('');

function setInputNamevalue(e){
  setNames(e.target.value);
}

function AddIntro(){
  if(names.trim() !==""){
    setData([...data,names]);
  setNames("");
  }
}

  return(
    <div className='flex flex-col gap-2 mx-6'>
      
      <input type='text' 
      className='py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-400' 
      placeholder='Write author name' value={names} 
      onChange={setInputNamevalue}/>

      <button 
      className='bg-blue-400 py- px-4 text-white  hover:bg-blue-500 py-1'
      onClick={AddIntro}>Add</button>

      {/* displaying the student info */}

      <ol>
        {data.map((data,index)=>(
          <li key={index}
          className={`bg-slate-400 flex flex-col my-2`}>{data}</li>
        ))}
      </ol>
    </div>
  )
}


