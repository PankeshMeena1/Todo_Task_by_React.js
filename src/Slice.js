import { createSlice } from "@reduxjs/toolkit";

const initialState={
     task:[],
     status:false,
}
const Slice = createSlice({
     name:"todo",
     initialState,

     reducers:{
         Addtask:(state, action)=>{
             state.task.push({id:Date.now(), work:action.payload, status:true})
         },
         AddDelete:(state, action)=>{
            state.task = state.task.filter((item)=>item.id!==action.payload)
        },
        complatetask:(state, action)=>{
             for(let i=0; i<state.task.length; i++)
             if(state.task[i].id=== action.payload)
             {
                state.task[i].status=false;
             }
        },
        uncomplatetask:(state, action)=>{
            for(let i=0; i<state.task.length; i++)
            if(state.task[i].id=== action.payload)
            {
               state.task[i].status=true;
            }
     },

     edittask:(state, action)=>{
        for(let i=0; i<state.task.length; i++)
        if(state.task[i].id===action.payload.id){
            state.task[i].work=action.payload.myData;
        }
     },
     
     }
});

export const {Addtask, AddDelete, complatetask,uncomplatetask,edittask}=Slice.actions;
export default Slice.reducer;