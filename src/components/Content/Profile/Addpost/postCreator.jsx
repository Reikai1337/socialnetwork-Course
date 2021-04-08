import React from 'react'
import s from './postCreator.module.css'
function AddPost(props) {
    let postArea = React.createRef()
    let addNewPost = () => {
        props.addNewPost('someName')
    }
    let updateText = () =>{
        let text = postArea.current.value
        props.updateText(text)
    }
    return(
        <div className={s.newPost}>
            <textarea onChange={updateText} ref={postArea} value={props.postText}/>
            <button onClick={addNewPost}>Send</button>
            
        </div>
    )
}
export default AddPost