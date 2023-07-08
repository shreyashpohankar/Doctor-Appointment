import { Outlet } from "react-router-dom";
import { headerLinkType } from "../../common/CommonTypes";
import Header from "../../common/Header";

const UserComponent =() => {        
              const doctorLinks: headerLinkType[] = [
                  
                {
                     btPath:"/user/",
                     btName:"Profile",
                     btType:'bt-success'
 
                },
                {
                   btPath:"/user/BookAppointment",
                   btName:"BookAppointment",
                   btType:'bt-success'
 
              },
              {
                btPath:"/user/Appointments",
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
export default UserComponent;