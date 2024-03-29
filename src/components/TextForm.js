import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
      //  console.log("Uppercase was Clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = () =>{
        //  console.log("Uppercase was Clicked" + text);
          let newText=text.toLowerCase();
          setText(newText)
          props.showAlert("converted to lowercase","success");

      }
      const handleClearClick = () =>{
        //  console.log("Uppercase was Clicked" + text);
          let newText=('');
          setText(newText)
          props.showAlert("Text cleared","success");

      }

    const handleOnChange = (event) =>{
       // console.log("On Change");
        setText(event.target.value)
    }
    
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("copy to clipboard","success");

    }
    const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

    }
    const [text, setText] = useState('');
   // setText("new text");
  return (
      <>
   <div className="container" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
   <h1 className= 'mb-2'>{props.heading} </h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor
    : props.mode ==='dark'?'grey':'white',color:props.mode=== 'dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
  </div>
     <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra space</button>


    </div>
    <div className="container my-2" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
       <h2>Your text summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
       <h2> Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
