import React, { useState } from 'react';
import '../../App.css'
import copy from 'clipboard-copy';
import {Zhen_Search_box} from '../../Codes/Codes'

function Zhen_Search() {
    const [copied, setCopied] = useState(false); 

    const copyToClipboard = () => {
      copy(Zhen_Search_box); 
      setCopied(true); 
      
      setTimeout(() => {
        setCopied(false);
      }, 2500); 
    };



  return (
    <div className='alert'>
    <h1>How to Use : Custom Search Box</h1>
    <h3>Step 1: Import the Zhen Library</h3>
    <img className="importZhen"src="https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FScreenshot%202024-06-14%20170758.png?alt=media&token=b7c1cdde-6426-4328-890e-7e54bfce441f" alt="Image"/>
  <h3>Step 2: Use the Zhen Library with Customized Parameters</h3>
  <p>1.Define the Widget:<br/><br/>
    - Use the Zhen library widget in your Dart file, passing the customized parameters.<br/><br/>
  2.Example Widget Usage:<br/><br/>
    - Here’s an example of how to use the widget with the provided parameters:<br/>
    </p>
  <img className='FullCodeGB' src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FScreenshot%202024-07-01%20164341.png?alt=media&token=787e2f32-4db5-4c39-92a2-6dc10e7a10a3' alt=''/>
  <div className="code-snippet-container">
      <div className="code-box">
        <pre>
          <code>{Zhen_Search_box}</code>
        </pre>
      </div>
      <button className="copy-button" onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy Dart Code'}
      </button>
    </div>
  <h3>Step 3: Run the App</h3>
  <p>1.Run the Flutter App:<br/><br/>
  Use the following command to run your app:</p><br/>
  <img height={100} width={720} class="rounded-image" src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FScreenshot%202024-06-15%20095441.png?alt=media&token=4080d9cb-c262-4d3c-9642-de47715f2823' alt=''/>
  
  <h4>Result</h4> 
  <img  height={200} width={700} class="rounded-image" src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FWhatsApp%20Image%202024-07-01%20at%2016.40.19.jpeg?alt=media&token=d2f83cad-ab91-4f20-915b-bc2f06233bd7' alt=''/>  
  </div>
  )
}

export default Zhen_Search
