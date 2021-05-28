import HeaderLogo from '../HeaderLogo';
import Content from '../Content';
import InputContent from '../InputContent';

import styles from './styles.module.scss';

import { useImage } from '../../contexts/ImageContext';

export default function MainContent() {
    let { image } = useImage();
    
    return (
        <main id={styles.main} role="main">
            <HeaderLogo/>
            {
                image 
                && 
                <img
                    className={styles.imageMobile}
                    src="/hero-mobile.jpg" 
                    alt="mobile image"
                />
            }
            <div id={styles.areaContent}>
                <Content/>
                <InputContent/>
            </div>
        </main>
    );
}