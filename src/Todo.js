import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Addtask, AddDelete,  complatetask , uncomplatetask, edittask} from "./Slice";

const Todo = ()=>
{
    var sno =0;
  
    const [val, setvalue]=useState("");
    const [editBtnFlag, setEditBtnFlag]= useState(true);
    const [tmpId, setTmpId]= useState("");
    const myselector = useSelector((state)=>state.todo.task);
    const Dispatch = useDispatch();
   
    console.log(myselector);

  const handledata =(val)=>
  {
     Dispatch(Addtask(val));
     setvalue("");
  }
  const deletetask=(myid)=>
  {
    Dispatch(AddDelete(myid))
  }

  const Complatetask =(myid)=>
  {
    Dispatch(complatetask(myid))
  }
  const UnComplatetask =(myid)=>
  {
    Dispatch(uncomplatetask(myid))
  }


  const EditTask =(myid, work)=>
  {
    setTmpId(myid)
    setEditBtnFlag(false);
    setvalue(work)
  }
const editDataSave =()=>
{
  Dispatch(edittask({id:tmpId, myData: val }));
  setEditBtnFlag(true);
  setvalue("")
}
  const ans = myselector.map((key)=>{
    sno++;
      return(
        <>
          <tr>
              <td>{sno}</td>
              <td>{key.status ? (
              key.work
            ) : (
              <span style={{ color: "green", fontWeight:"bold"}}>
                {key.work}
              </span>
            )}</td>
              <td><button onClick={()=>deletetask(key.id)}>Delete</button></td>
              <td><button onClick={()=>Complatetask(key.id)}>Complate</button></td>
              <td><button onClick={()=>UnComplatetask(key.id)}>UnComplate</button></td>
              <td><button onClick={()=>EditTask(key.id,key.work)} >Edit</button></td>
          </tr>
        </>
      );
  })


    return(
        <>
        <center>
           <h1 style={{color:"blue", fontWeight:"bold", textAlign:"center"}}>Todo Task By React.JS</h1>
           Add Work : <input type="text" value={val} onChange={(e)=>setvalue(e.target.value)}/>
           
           {editBtnFlag? <button onClick={()=>handledata(val)}>Add Task</button> : <button onClick={editDataSave}> Edit save</button> }
           <hr size="5" color="blue"/>
   
           <table border={"1"} bgcolor="pink" cellPadding={"10px"} >
               <tr bgcolor={"orange"}>
                   <th>S.No</th>
                   <th>Add My Work</th>
                   <th>Delete</th>
                   <th>Complete</th>
                   <th>UnComplete</th>
                   <th>Edit</th>
               </tr>
               {ans}
           </table>
           </center>
        </>
    );
}
export default Todo;