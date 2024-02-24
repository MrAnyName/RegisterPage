import { useForm, SubmitHandler } from "react-hook-form"
import styles from "../Files/styles.module.css"
import PhotoUpload from "../PhotoUpload/photoUpload";


//icons
import { FaFileSignature } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
import { BsFillPassportFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";






const Files = ({ register }) => {



    return (<div style={{width:"100%"}}>

        <input className={styles.fileInps} type="number" placeholder="ՀԾՀ*"  {...register("public service")} />

        <div className={styles.publicService}>
            <FaFileSignature className={styles.fileIcs} />  <PhotoUpload />
        </div>

        <input className={styles.fileInps} type="number" placeholder="Անձնագրի համար*"  {...register("personal signature")} />

        <div className={styles.publicService}>
        <BsFillPassportFill className={styles.fileIcs} />
        <MdOpenInBrowser className={styles.fileIcs} />
       
        </div>



        <input className={styles.fileInps} type="number" placeholder="Նույնականության քարտի համարը*"  {...register("card")} />
        <div className={styles.publicService}>
        <FaAddressCard className={styles.fileIcs} />
        <MdOpenInBrowser className={styles.fileIcs} />
        </div>

    </div>
    )
}
export default Files