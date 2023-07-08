import { useEffect } from "react";
import FullCalenderComponent from "../../../common/FullCalenterComponent";
import { getallDoctorEvents } from "../../../store/doctorReducer/doctorAction";
import { useDispatch, useSelector } from "react-redux";


const DoctorSetAppointment = () => {
                const {userData} = useSelector((state:any) => state.user )
             const dispatch:any = useDispatch()
               useEffect (()  =>    {

                dispatch(  getallDoctorEvents({userId:userData.id}))
               },[]);

    return (
              <div>

                <h1> Doctor set Appoitment </h1>
                 <FullCalenderComponent/>
              </div>

    )

}

export default DoctorSetAppointment;