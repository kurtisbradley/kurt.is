import Head from '../head';
import styles from './page.module.css';

const Page = ({
  title,
  description,
  image,
  children,
}) => {
  return (
    <div className={styles.site}>
      <Head
        title={title}
        description={description}
        image={image}
      /> 
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Page;