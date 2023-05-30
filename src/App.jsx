import styles from "./style";
import { Billing,  CardDeal,  Footer, Navbar,  Testimonials, Hero } from "./components";
import Popup from "./popup.jsx";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>    
        <Billing />
        <CardDeal />
        <Testimonials />
        <Footer />
      </div>
    </div>
    
    <div className={`bg-primary ${Popup.paddingX} ${Popup.flexCenter}`}>
           <Popup
            handleClose={() => { }}
            content={<div>
                <br className="sm:block hidden" /><h2>&emsp; &emsp; GİRİŞ YAP</h2>  
                <form>
                <label>TCK No: <br className="sm:block hidden" />
                <input type="string" name="TCKNo" maxlength="11" minLength="11" />
                </label> <br className="sm:block hidden" /><br className="sm:block hidden" />
                <label>Şifre: <br className="sm:block hidden" />
                <input type="text" name="Şifre" />
                </label>< br className="sm:block hidden" /><br className="sm:block hidden" />
                <button onClick={true}> &emsp; &emsp;  &ensp;Giriş yap</button>
                
                </form>
              </div>}

           />
    </div>
    

  </div>
  
);


export default App;





/*import Popup from "./popup";

function App() {
    return( <div className="App">
           <Popup/>
    </div>
    );
}

export default App; */