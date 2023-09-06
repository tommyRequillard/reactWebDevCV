import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import Calendar from "../pages/Calendar.tsx"
import Documents from "../pages/Documents.tsx"
import Projects from "../pages/Projects.tsx"
import Reports from "../pages/Reports.tsx"
import Team from "../pages/Team.tsx"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/documents" element={<Documents/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
