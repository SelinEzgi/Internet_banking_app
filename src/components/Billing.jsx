import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Anlık Kur hesabı <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Buraya anlık kur oranlarını çekeceğiz
      </p>
    </div>
  </section>
);

export default Billing;