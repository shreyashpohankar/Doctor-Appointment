import { createSlice } from "@reduxjs/toolkit";


const appointmentState  ={

        appEvent: []
}


type    addAppointmentsAction = {

            payload:{

                allEvents:any;
            }

}  

const  appointmentReducer = createSlice  ({

            name:"appointment-reducer",
            initialState : appointmentState,
            reducers :  {
                
                 addAppointments :(state:any,action:addAppointmentsAction) =>   {

                      state.appEvent =action.payload.allEvents
                 }
            }
})

export   const  {addAppointments}  =  appointmentReducer.actions;

export default appointmentReducer;