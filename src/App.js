import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phoneNumber, email) => {
    const newContact = { name, phoneNumber, email };
    if (!contacts.some((contact) => contact.name === name)) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const addAppointment = (appointmentName, contact, date, time) => {
    const newAppointment = { appointmentName, contact, date, time };
    // Check if the appointment already exists
    if (
      !appointments.some(
        (appointment) => appointment.time === time && appointment.date === date
      )
    ) {
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        newAppointment,
      ]);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
