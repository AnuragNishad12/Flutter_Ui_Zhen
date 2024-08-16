import React, { useState } from 'react';
import '../App.css'
import Introduction from './Intro/Introduction'
import Alert from './UiComponent/Alert';
import Autofill from './UiComponent/Autofill';
import CusBottomNavigation from './UiComponent/CusBottomNavigation';
import Gradient_button from './UiComponent/Gradient_button';
import Carousel from './UiComponent/Carousel';
import Custom_card from './UiComponent/Custom_card';
import Custom_Progress_indicator from './UiComponent/custom_Progress_indicator';
import Zhen_Search from './UiComponent/Zhen_Search';
import Zhen_ComboxBox from './UiComponent/Zhen_ComboxBox';


function Docs() {
    const [selectedComponent, setSelectedComponent] = useState('Introduction');

    const renderComponent = () => {
        switch (selectedComponent) {
          case 'Introduction':
            return <Introduction />;
          case 'Alert':
            return <Alert/>;
          case 'Autofill':
            return <Autofill/> 
          case 'BottomNav':
            return <CusBottomNavigation/>   
          case 'Gradient_Button':
            return <Gradient_button/> 
          case 'Carousel':
            return <Carousel/>   
          case 'Custom_card':
            return <Custom_card/>
          case 'Progress_Bar':
          return <Custom_Progress_indicator/>   
          case 'Search':
            return <Zhen_Search/>
          case 'ComboBox':
          return <Zhen_ComboxBox/>  
          default:
            return <Introduction />;
        }
      };



  return (
    <div>
      <div className='Content'>
       <div className='first'>
       <div className='list'>
        <h4>Get Started</h4>
        <p onClick={() => setSelectedComponent('Introduction')}>Introduction</p>
        <h4>Components</h4>
        <p onClick={() => setSelectedComponent('Alert')}>Alert Box</p>
        <p  onClick={() => setSelectedComponent('Autofill')}>Autofill Group</p>
        <p onClick={() => setSelectedComponent('BottomNav')}>Bottom Navigation Bar</p>
        <p onClick={()=> setSelectedComponent('Gradient_Button')}>Button</p>
        <p onClick={()=> setSelectedComponent('Carousel')}>Carousel</p>
        <p onClick={()=> setSelectedComponent('Custom_card')}>Card</p>
        <p onClick={()=>setSelectedComponent('Progress_Bar')}>Circular Progress Bar</p>
        <p onClick={()=> setSelectedComponent('ComboBox')}>ComboBox</p>
        <p onClick={()=> setSelectedComponent('Search')}>Search Box</p>
        {/* <p>Date Picker</p>
        <p>Dialog</p>
        <p>Drawer</p>
        <p>Dropdown Menu</p>
        <p>Calender</p>
        <p>Card</p>
        <p>Carousel</p>
        <p>Check Box</p>
        <p>Progress</p>
        <p>Radio Group</p>
        <p>Toast</p>
        <p>SnackBar</p>
        <p>Select</p> */}
       </div>
       </div>
       <div className='second'>
        <div className='innerSecond'>
        {renderComponent()}
        </div>
       </div>
       <div className='third'></div>
      </div>
    </div>
  )
}

export default Docs
