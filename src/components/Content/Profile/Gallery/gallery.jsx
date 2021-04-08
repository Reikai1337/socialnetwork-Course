import PhotoContainer from "./Content/photoContainer";
import GHeader from "./Header/gHeader";
import s from "./Gallery.module.css"
function Gallery() {
    return(
        <div className={s.gallery}>
            <GHeader/>
            <PhotoContainer/>
        </div>
    )
}

export default Gallery