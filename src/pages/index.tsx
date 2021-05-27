import { useEffect } from 'react';

import { useImage } from '../contexts/ImageContext';

import styles from '../styles/Home.module.scss';

import { MainContent } from '../components';

export default function Home() {
  let { image, setImage } = useImage();

  useEffect(() => {
    const mediaQuerieList = matchMedia('(max-width: 1126px)')

    function hiddenImageMain(mediaQuerieList) {
      if(mediaQuerieList.matches) {
        setImage(image = true);
      } else {
        setImage(image = false);
      }
    }

    hiddenImageMain(mediaQuerieList);

    mediaQuerieList.addListener(hiddenImageMain);
  }, [ image ])

  return (
    <div id={styles.container}>
      <MainContent/>
      {
        image || <div id={styles.image}/>
      }
    </div>
  )
}
