import styles from "./App.module.css";
import { InstagramLogo, TiktokLogo, FacebookLogo } from "phosphor-react";
import Logo from "./assets/logo.png";
function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <h2>Coming soon</h2>
        <div className={styles.socialMedias}>
          <span>Follow us</span>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/envisioneer.co.uk?igsh=MWRqcWRmeHUyNTdjMw%3D%3D&utm_source=qr"
            >
              <InstagramLogo size={32} weight="bold" />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@envisioneer.co.uk?_t=8lh1MWYv0S1&_r=1"
            >
              <TiktokLogo size={32} weight="bold" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/share/xYrhXQZ5VuTS3E8z/?mibextid=LQQJ4d"
            >
              <FacebookLogo size={32} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
