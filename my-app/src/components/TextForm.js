import React, {useState}from 'react'



export default function TextForm(props) {
    const handleUpClick= () =>{
        console.log("Uppercase Pressed")
        let newText= text.toUpperCase()
        setText(newText)
    }
    const handleLowClick= () =>{
        console.log("Lowercase Pressed")
        let newText= text.toLowerCase()
        setText(newText)
    }
    const handleClearClick= () =>{
        console.log("Clear Text Pressed")
        let newText=''
        setText(newText)
    }
    const handleOnChange= (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black': 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#031e39':'#b2c4da', color: props.mode==='light'?'white':'black'}} id="myBox" rows="6" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Lower case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black': 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value=>value!=="").length} words and {text.trim().length} Chracters</p>
                <p>{0.1* text.replace(/\n/g, " ").split(' ').filter(value=>value!=="").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text: "Type something"}</p>
            </div>
        </>
  )
}
