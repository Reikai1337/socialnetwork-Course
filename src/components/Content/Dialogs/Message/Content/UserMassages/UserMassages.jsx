import s from './MessageWrapper.module.css'
const UserMassages=(props)=>{
    return(
        <div className={s.wrapper}>
            {props.mData.map((message)=>{
                if(message.user==='me') return <span className={s.rightMessage}><span>{message.text}</span></span>
                else return <span className={s.leftMessage}><span>{message.text}</span></span>
            })}
        </div>
    )
}
export default UserMassages