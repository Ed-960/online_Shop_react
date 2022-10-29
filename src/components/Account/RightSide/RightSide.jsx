import styles from "./rightSide.module.css";
import CheckboxEl from "./CheckboxEl/CheckboxEl";
import { NavLink } from "react-router-dom";
import { avatarkaImg } from "../../../redux/state";
import { useRef, useState } from "react";

const RightSide = (props) => {

   //save changes //?
   const [isSaved, setSaved] = useState(false);
   const inputElName = useRef('');

   if (isSaved) {
      const myName = inputElName.current.value;
      props.onChangeInfo('name', myName);
      setSaved(false);
      inputElName.current.value = props.name;
   }

   //change Img
   const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0];
         props.setSelectedImage(URL.createObjectURL(img));
      }
   };

   return (
      <div className={styles.page__item}>
         <h5 className={styles.page__item_head}>Account</h5>
         <div className={styles.page__item_boxes}>
            <div className={styles.page__item_box}>
               <h6 className={styles.page__box_head}>Personal information</h6>
               <div className={styles.page__item_info}>
                  <p className={styles.page__item_avatar}>Avatar</p>
               </div>
               <div className={styles.page__item_info_box}>
                  <img src={props.selectedImage} alt='img' className={styles.page__item_info_img} />
                  <div className={styles.page__item_info_left}>
                     <label className={styles.page__item_text_1} >Change
                        <input className={styles.page__item_input} type='file' id="inputTag" name='myImage' onChange={onImageChange} />
                     </label>
                     <span onClick={() => { props.setSelectedImage(avatarkaImg) }} className={styles.page__item_text_2}>Remove</span>
                  </div>
               </div>
            </div>
            <div className={styles.page__item_form}>
               <form>
                  <div className={styles.page__form_info}>
                     <div>
                        <label className={styles.page__form_fname}>First name</label>
                        <input ref={inputElName} type="text" className={styles.page__form_input} placeholder="Jane" />
                     </div>
                     <div className={styles.form__left}>
                        <label className={styles.page__form_fname}>Last name</label>
                        <input value={props.changeValue2} type="text" onChange={props.onChange2} className={styles.page__form_input} placeholder="Robertson" />
                     </div>
                  </div>
                  <div className={styles.page__form_info}>
                     <div>
                        <label className={styles.page__form_fname}>e-mail</label>
                        <input value={props.changeValue3} type="email" onChange={props.onChange3} className={styles.page__form_input} placeholder="jane.robertson@example.com" />
                     </div>
                     <div className={styles.form__left}>
                        <label className={styles.page__form_fname}>Phone</label>
                        <input value={props.changeValue4} type="tel" onChange={props.onChange4} className={styles.page__form_input} placeholder="(217) 555-0113" />
                     </div>
                  </div>
                  <div className={styles.bottom}>
                     <h6 className={styles.page__checkbox_head}>Email notifications</h6>
                     <div className={styles.checkbox}>
                        <div className={styles.checkbox__left}>
                           {
                              props.checkboxElInfo.left.map((item, i) => <CheckboxEl
                                 key={i}
                                 info={item}
                              />)
                           }
                        </div>
                        <div className={styles.checkbox__right}>
                           {
                              props.checkboxElInfo.right.map((item, i) => <CheckboxEl
                                 key={i + 1}
                                 info={item}
                              />)
                           }
                        </div>
                     </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.buttons}>
                     <NavLink to="/"><button type="button" className={styles.page__form_btn_1}>Log out</button></NavLink>
                     <button type="button" className={styles.page__form_btn_2}>Discard changes</button>
                     <button type="button" className={styles.page__form_btn_3} >Save changes</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}









export default RightSide;