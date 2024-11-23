import logoImg from "../assets/logo.svg";
import styles from "./Header.module.scss";


const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt="Topo App" />
    </div>
  )
}

export default Header
