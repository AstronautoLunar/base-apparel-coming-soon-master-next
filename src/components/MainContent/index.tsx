import HeaderLogo from '../HeaderLogo';
import Content from '../Content';
import InputContent from '../InputContent';

import styles from './styles.module.scss';

export default function MainContent() {
    return (
        <main id={styles.main}>
            <HeaderLogo/>
            <Content/>
            <InputContent/>
        </main>
    );
}