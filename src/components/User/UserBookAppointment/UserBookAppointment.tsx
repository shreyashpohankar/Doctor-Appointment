import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppTable from "../../../common/AppTable";
import { getAllUserEvents } from "../../../store/appointments/appointment-action";

const UserBookAppointment = () => {
  const { appEvent } = useSelector((state: any) => state.appointments);
  const dispatch: any = useDispatch();
  console.log('appEvent',appEvent);
  useEffect(() => {
    dispatch(getAllUserEvents());
  }, []);

  const tHead = [
    "allDay",
    "d_city",
    "d_state",
    "d_email",
    "d_name",
    "d_speciality",
    "end",
    "start",
    "title",
  ];

  return (
    <div>
      <h1>User Book Appointments</h1>
      <AppTable appData={appEvent} tHead={tHead} />
    </div>
  );
};

export default UserBookAppointment;
