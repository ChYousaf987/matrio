import React from 'react'
import Navbar from './matrio/Navbar'
import FirstOne from './matrio/FirstOne'
import SecondOne from './matrio/SecondOne/SecondOne'
import ThirdOne from './matrio/ThirdOne'
import ForthOne from './matrio/ForthOne'
import FifthOne from './matrio/FifthOne'
import SisOne from './matrio/SisOne'
import SevenOne from './matrio/SevenOne'
import Navbars from './matrio/Navbars'

const App = () => {
  return (
    <>
    <Navbars/>
    {/* <Navbar/> */}
    <FirstOne/>
    <SecondOne/>
    <ThirdOne/>
    <ForthOne/>
    <FifthOne/>
    <SisOne/>
    <SevenOne/>
    </>
  )
}

export default App