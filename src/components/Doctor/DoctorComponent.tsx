import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import { headerLinkType } from "../../common/CommonTypes";

const DoctorComponent =() => {

              const doctorLinks: headerLinkType[] = [
                  
               {
                    btPath:"/doctor/",
                    btName:"profile",
                    btType:'bt-success'

               },
               {
                  btPath:"/doctor/SetAppointment",
                  btName:"SetAppointment",
                  btType:'bt-success'

             },
             {
               btPath:"/doctor/Appointments",
               btName:"Appointments",
               btType:'bt-success'

          }
              ]
            return (
               <div>
                        <Header headerLink={doctorLinks} / >
                                    <Outlet/>

              </div>
            )


};
export default DoctorComponent;