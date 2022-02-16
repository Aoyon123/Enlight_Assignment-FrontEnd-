import styles from "./description.module.css";
const Description = () => {
  return (
    <div className={styles.detailsContent}>
      <p className={styles.crumb}>a sdasdasdasd</p>
      <h2>asASasASasASAsaSAsaSAsAAAAAAAASSSSSSSSSSSSSSSSSS</h2>
      <div className={styles.like}>
        <span>Like</span>
      </div>
      <h1>$29,000</h1>
      <ul>
        <li>OK VERY FINE</li>
        <li>OK VERY FINE</li>
        <li>OK VERY FINE</li>
        <li>OK VERY FINE</li>
      </ul>
      <div>
        <div></div>
        <p>sdasgdash asjdgashdghas asudgsadgashdbsah</p>
      </div>
      <div className={styles.LikeContainer}>
        <div className={styles.like}>
          <p>asda</p>
          <span>Like</span>
          <span>Like</span>
          <span>Like</span>
        </div>
        <div className={styles.like}>
          <p>sadas</p>
          <span>Like</span>
          <span>Like</span>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div></div>
        <div>
          <button>Add To Cart</button>
          <button> Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default Description;
