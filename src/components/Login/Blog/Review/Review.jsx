import React, { useState } from "react";
import styles from "./review.module.css";

import blueStar from "../../../../images/images_left/star__blue.png";
import grayStar from "../../../../images/images_left/star__gray.png";
import { ReactComponent as Like } from "../../../../images/images_left/like.svg";
import { ReactComponent as DisLike } from "../../../../images/images_left/dislike.svg";

const Review = (props) => {
   const [likedState, setlikedState] = useState(false);
   const [dislikedState, setdislikedState] = useState(false);
   let likes = 14;
   let disLikes = 4;
   let fill = likedState ? "#4E60FF" : "";
   let fillDis = dislikedState ? "tomato" : "#ffffff";
   let likeCount = likedState ? likes + 1 : likes;
   let disLikeCount = dislikedState ? disLikes + 1 : disLikes;

   const liked = () => {
      setlikedState((state) => !state)
   }

   const disLiked = () => {
      setdislikedState((state) => !state)
   }

   let stars = [];
   for (let i = 1; i <= 5; i++) {
      if (i <= props.info.starCount) {
         stars[i] = 1;
      } else stars[i] = 0;
   }

   return (
      <div>
         <div className={styles.item__comment}>
            <img alt='img' src={props.info.personImg} className={styles.person} />
            <div className={styles.comments__box}>
               <div className={styles.person__info}>
                  <p className={styles.full__name}>
                     {props.info.personName}
                  </p>
                  <div className={styles.stars__points}>
                     <div className={styles.stars_1}>
                        {
                           stars.map((star, i) => {
                              if (star === 1) {
                                 return <img alt='img' src={blueStar} key={i} className={styles.stars__img} />
                              } else {
                                 return <img alt='img' src={grayStar} key={i} className={styles.stars__img} />
                              }
                           })
                        }
                     </div>
                     <p className={styles.days}>{props.info.timeOfReview} days ago</p>
                  </div>
               </div>
               <div className={styles.person__comment}>
                  {props.info.comment}
               </div>
               <div className={styles.like__dislike}>
                  <div className={styles.like__box_left}>
                     <Like onClick={liked} fill={fill} className={styles.like} />
                     <p className={styles.like__count}>{likeCount}</p>
                  </div>
                  <div className={styles.like__box_right}>
                     <DisLike onClick={disLiked} fill={fillDis} className={styles.dislike} />
                     <p className={styles.like__count}>{disLikeCount}</p>
                  </div>
               </div>
            </div>
         </div>
         <hr className={styles.comments__divider} />
      </div>
   )
}

export default Review;