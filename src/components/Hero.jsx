import styles from "../style";
import { creditcard } from "../assets";
import GetStarted from "./GetStarted";
import Popup from "../popup";
//Buradan getstarted aracığığı ile popup'u bağla
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Daha iyi bir <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Hizmet için</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted /> 
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Şimdi kayıt olun.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Kolayca faiz hesabı yapın ve kur değişimlerini anlık takip edin.  
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={creditcard} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* yuvarlak buton start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* yuvarlak buton end */}
      </div>

    </section>
  );
};

export default Hero;