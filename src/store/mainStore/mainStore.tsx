import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../useReducer/useReducer";
import authStore from "../authStore/authReducer";
import doctorReducer from "../doctorReducer/doctorReducer";
import appointmentReducer, { addAppointments } from "../appointments/appointment-reducer";



const mainStore = configureStore({

                reducer: {


                    user: userReducer.reducer,
                    auth:authStore.reducer,
                    doctor:doctorReducer.reducer,
                    appointments: appointmentReducer.reducer

                }


});



export default mainStore;