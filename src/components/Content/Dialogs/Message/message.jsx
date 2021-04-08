import Content from "./Content/Content"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import s from './message.module.css'
function Message(props) {
    return(
        <div className={s.message}>
            <Header/>
            <Content
            messageData={props.messageData}
            />
            <Footer
            dialogText={props.dialogText}
            sendMessage={props.sendMessage}
            updateText={props.updateText}
            clearTextarea={props.clearTextarea}
            />
        </div>
    )
}
export default Message