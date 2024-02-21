import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState } from 'react';
import styles from "../Forum/Style/style.module.css";
//icons
import { BsPersonGear } from "react-icons/bs";
import { LuFile } from "react-icons/lu"
import { MdOutlineCastForEducation } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";

////
///components
import Files from "../Files/files"
import Education from "../Education/education";
import Message from "../Message/message"


const Forum = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (person) => console.log(person)
    const [page, setPage] = useState(1)

    const pageFn =()=>{
            setPage(page+1)
    }

    



    return (
        <div className={styles.allForum}  >



            <div className={styles.myForm}>
                <h1>Գրանցվել</h1>

                <div className={styles.butForums} >

                    <button onClick={() => setPage(1)}><BsPersonGear /></button>
                    <div></div>
                    <button onClick={() => setPage(2)}><LuFile /></button>
                    <div></div>
                    <button onClick={() => setPage(3)}><MdOutlineCastForEducation /></button>
                    <div></div>
                    <button onClick={() => setPage(4)}><LuMessageCircle /></button>

                </div>
                <form className={styles.inpsForm} onSubmit={handleSubmit(onSubmit)}>

                    {page === 1 && <> <input className={styles.inpsReg} type="text" placeholder="Անուն"  {...register("Name")} />

                        <input className={styles.inpsReg} type="text" placeholder="Ազգանուն" {...register("lastName", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className={styles.inpsReg} placeholder="Օր/Ամիս/Տարի"  {...register("birth")} />

                        <input className={styles.inpsReg}  type="number" placeholder="Հեռախոսահամար"  {...register("phone")} />

                        <input className={styles.inpsReg} type="email" placeholder="Էլ Հասցե"  {...register("mail")} />

                        <div className={styles.gender}>
                            <div>
                                <label for="male" style={{ display: 'flex' }}>
                                    <input name="gender" type="radio" value="male" id='male' {...register("gender")} />
                                    Արական
                                </label>
                            </div>
                            <div className={styles.forGender}>
                                <label for="female">
                                    <input name="gender" type="radio" value="female" id="female"  {...register("gender")} />
                                    իգական</label>
                            </div>

                        </div></>}
                    {page === 2 && <Files register={register} />}
                    {page === 3 && <Education register={register} />}
                    {page === 4 && <Message register={register} />}

                    <input className={styles.subBut} value={"Հաջորդը"} type="submit" onClick={pageFn} />
                </form>








            </div>

        </div>



    )
}
export default Forum