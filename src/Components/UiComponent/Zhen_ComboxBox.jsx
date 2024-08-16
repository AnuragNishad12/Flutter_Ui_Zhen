import React, { useState } from 'react';
import '../../App.css'
import copy from 'clipboard-copy';
import {Zhen_ComboxBox2} from '../../Codes/Codes'

function Zhen_ComboxBox() {
    const [copied, setCopied] = useState(false); 

    const copyToClipboard = () => {
      copy(Zhen_ComboxBox2); 
      setCopied(true); 
      
      setTimeout(() => {
        setCopied(false);
      }, 2500); 
    };


  return (
    <div className='alert'>
    <h1>How to Use : Custom DropDownButton</h1>
    <h3>Step 1: Import the Zhen Library</h3>
    <img className="importZhen"src="https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FScreenshot%202024-06-14%20170758.png?alt=media&token=b7c1cdde-6426-4328-890e-7e54bfce441f" alt="Image"/>
  <h3>Step 2: Use the Zhen Library with Customized Parameters</h3>
  <p>1.Define the Widget:<br/><br/>
    - Use the Zhen library widget in your Dart file, passing the customized parameters.<br/><br/>
  2.Example Widget Usage:<br/><br/>
    - Here’s an example of how to use the widget with the provided parameters:<br/>
    </p>
  <img className='FullCodeGB' src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FScreenshot%202024-07-05%20151155.png?alt=media&token=f28237fd-888d-441a-8210-0ed652e02589' alt=''/>
  <div className="code-snippet-container">
      <div className="code-box">
        <pre>
          <code>{Zhen_ComboxBox2}</code>
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
  <img  height={200} width={500} class="rounded-image" src='https://firebasestorage.googleapis.com/v0/b/gokqmp.appspot.com/o/images%2FWhatsApp%20Image%202024-07-05%20at%2014.53.31.jpeg?alt=media&token=90cee2dd-e980-48e7-a475-47386016869e' alt=''/>  
  </div>
  )
}

export default Zhen_ComboxBox
