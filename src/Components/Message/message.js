import styles from "../Message/Style/style.module.css"



const Message =({register})=>{

return <div style={{with:"100%" ,display:"flex" , alignItems:"center",flexDirection:"column"}}>

<div className={styles.myMsg}>
<p>
    Եթե դուք գրանցվում եք «Սոցիալական աշխատանք» մասնագիտության հատուկ ուսուցման (մասնագիտացման) դասընթացին , ապա պարտադիր է կցել ինքնակենսագրական (CV)
    </p>
</div>

<textarea className={styles.msgForMe}/>
   
</div>

}

export default Message