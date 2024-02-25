import styles from "../Files/styles.module.css"
import PhotoUpload from "../PhotoUpload/photoUpload"

///icons
import { FcDiploma2 } from "react-icons/fc";
import { MdOpenInBrowser } from "react-icons/md";


const Education = ({ register }) => {
    return(
    
    
    <div style={{width:"100%"}}>

<input className={styles.fileInps}  type="text" placeholder="Հաստատություն*"  {...register("educational institution")} />
<input className={styles.fileInps}  type="number" placeholder="Սկիզբ*"  {...register("start")} /> 
<input className={styles.fileInps}  type="number" placeholder="Ավարտ*"  {...register("end")} />
<div className={styles.publicService}>
        <FcDiploma2 className={styles.fileIcs} />
        <PhotoUpload />
        </div>

    </div>
    )
}

export default Education