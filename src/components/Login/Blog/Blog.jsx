import styles from "./blog.module.css";
import HeadBlog from "./HeadBlog/HeadBlog";
import SortBlog from "./SortBlog/SortBlog";
import Review from "./Review/Review";

const Blog = (props) => {
   return (
      <div className={styles.items__top}>
         <div className={styles.item}>
            <HeadBlog />
            <hr className={styles.head__bar_bottom_line} />
            <SortBlog />
         </div>
         <div className={styles.items__comment}>
            {
               props.ReviewInfo.map((item, i) => <Review
                  key={i}
                  info={item}
               />)
            }
         </div>
      </div>
   )
}


export default Blog;