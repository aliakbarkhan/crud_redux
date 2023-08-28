import { createSlice } from "@reduxjs/toolkit";
import { userList } from './Data';
//create slice: aceepts initial state,reducer funtion,slice name ang creates action creators 
const userSlice=createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser: (state,action)=>{
            // console.log(action)
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const {id,name,email}=action.payload;
            const uu=state.find(user =>user.id==id);
            if(uu){ // if user exist 
                uu.name=name;
                uu.email=email;
            }

        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const uu=state.find(user =>user.id===id);
            if(uu){
                return state.filter(f=>f.id!==id); // filter id which does not have that id 
            }

        }

    }
})
export const{addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;