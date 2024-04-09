import { createSlice } from "@reduxjs/toolkit";
export interface Modals{
    value:boolean,
    alertValue:boolean

}

const initialState:Modals={
    value:false,
    alertValue:false,
}

export const counterModals = createSlice({
    name:'counter',
    initialState,
    reducers:{
        isOpen:(state)=>{
            state.value=true
        },
        isClose:(state)=>{
            state.value=false
        },
        Open:(state)=>{
            state.alertValue =true
        },
        Close:(state)=>{
            state.alertValue = false
        },
    },
})

export const {isOpen,isClose,Open,Close,} = counterModals.actions 
export default counterModals.reducer