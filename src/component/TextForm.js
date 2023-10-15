import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        props.showAlert("Change lower to upper text", "success")
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase() 
        props.showAlert("Change upper to lower text", "success")
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    const clearClick = ()=>{
        let newText = '';
        props.showAlert("Clear the clipcart!!", "success")
        setText(newText)
    }
    const copyClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copy the clipcar!!", "success")
    }
    const removeSpaceClick = ()=>{
       let newText =text.split(/[ ]+/);
       setText(newText.join(' ')) 
       props.showAlert("Remove the extra space", "success")
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="3"
            style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary my-1 mx-1' onClick={handleUpClick}>Convert to Uppertext</button>
        <button disabled={text.length === 0} className='btn btn-primary my-1 mx-1' onClick={handleLoClick}>Convert to Lovertext</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clearClick}>Clear text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copyClick}>Copy text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={removeSpaceClick}>Remove extra spece</button>
    </div> 
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p>{text?.split(/\s+/).filter((elm)=>{return elm.length !==0}).length} words and {text?.length} characters </p>
        <p>{text?.match(/\S+/g)?.length?text?.match(/\S+/g)?.length*0.008:0} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
