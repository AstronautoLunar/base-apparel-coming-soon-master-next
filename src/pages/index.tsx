import styles from '../styles/Home.module.scss';

import { MainContent } from '../components';

export default function Home() {
  return (
    <div id={styles.container}>
      <MainContent/>
      <div id={styles.image}/>
    </div>
  )
}
