import React from 'react'
import s from './Footer.module.css'
const Footer = (props)=>{
    let textArea = React.createRef()

    let sendMessage = () => {props.sendMessage()}

    let updateText = () =>{
        let text = textArea.current.value
        props.updateText(text)
    }
    let clearTextarea = () =>{if(textArea.current.value==='Write a message...') props.clearTextarea()}
    return(
        <div className={s.footer}>
            <textarea 
            ref={textArea} 
            className={s.textarea}
            value={props.dialogText}
            onChange={updateText}
            onClick={clearTextarea}
            />
            <button onClick={sendMessage} className={s.send}>Send</button>
        </div>
    )
}
export default Footer