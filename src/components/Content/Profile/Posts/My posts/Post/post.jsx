import s from './post.module.css'
import Header from './Header/header'
import Content from './Post content/content'
import Footer from './Footer/footer'
function Post(props) {
    return(
        <div className={s.item}>
            <Header name={props.name} />
            <Content message={props.message}/>
            <Footer likeCount={props.likeCount}/>
        </div>
    )
}
export default Post