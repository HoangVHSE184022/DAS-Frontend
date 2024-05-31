import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import AssessmentBooking from '../Component/AssessmentBooking'
import AssessmentPaper from '../Component/AssessmentPaper'

const RoutePath = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} >
                <Route index element={<AssessmentBooking/>} />
                <Route path='/assessmentbooking' element={<AssessmentBooking/>} />
                <Route path='/assessmentpaper' element={<AssessmentPaper/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutePath