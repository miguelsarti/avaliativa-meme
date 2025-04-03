import styles from "./memeCard.module.css"

const memeCard = ({ memes }) => {
    return (
    
<div key={memes.id} className={styles.memesCard}>
<div className={styles.memesCardHeader}>
  <div className={styles.memesAuthor}>
    <img src={memes.authorAvatar} alt={memes.author} />
    <span>{memes.author}</span>
  </div>
  <span className={styles.memesCategory}>{memes.category}</span>
</div>
<img
  src={memes.image}
  alt={memes.title}
  className={styles.memesImage}
/>
<div className={styles.memesContent}>
  <h3 className={styles.memesTitle}>{memes.title}</h3>
  <p className={styles.memesDescription}>{memes.description}</p>
  </div>
  </div>

)}

export default memeCard;