import styles from './styles.module.scss';

export default function HeaderLogo() {
    return (
        <header id={styles.logo}>
            <img src="/logo.svg" alt="logo"/>
        </header>
    );
}