import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout/MainLayout"
import Members from "./pages/Members/Members"
import Events from "./pages/Events/Events"
import Login from "./pages/Login/Login"
import AddEvent from "./pages/Events/AddEvent/AddEvent"
import AddMember from "./pages/Members/AddMember/AddMember"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/addmember" element={<AddMember />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
