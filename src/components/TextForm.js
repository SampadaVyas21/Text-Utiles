import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleReverseClick = ()=>{
        console.log("Reverse was clicked" + text);
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Reversed the text!", "success")
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the text!", "success")
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!", "success")
    }

    const handleClearClick = ()=>{
        console.log("Clear text was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Cleared text!", "success")
    }

    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("Your text should be entered here");
    return (
        <>
            {/* <div className='container my-3' style={{color: props.mode==='pink'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='pink'?'#FAB3E4':'white', color: props.mode==='pink'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleReverseClick}>Reverse Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container" style={{color: props.mode==='pink'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Can read in {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Please enter some text to preview it here"}</p>
            </div> */}

            <div className='container my-3' style={{color: props.mode==='dark' || props.mode==='pink' || props.mode==='pink' ?'#042743':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleReverseClick}>Reverse Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Can read in {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Please enter some text to preview it here"}</p>
            </div>
        </>
    )
}
   