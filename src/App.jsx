import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, About, Works, WhatsNew, Started, What } from "./components";
import { StarsCanvas } from "./components/canvas";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <div className='relative z-0'>
          <Hero/>
          <StarsCanvas />
        </div>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        {/* <About/> */}
        <Works/>
        <Business />
        <div className="relative">
      <Started />
      <div className="gradient-04 z-0" />
      <CardDeal />

    </div>
    <What/>
        <div className="relative">
      
        <Billing />
      <div className="gradient-04 z-0" />
      
    <WhatsNew />
    </div>

        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
