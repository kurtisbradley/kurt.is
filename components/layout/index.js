import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.scene}>
      {children}
    </div>
  );
};

export default Layout;