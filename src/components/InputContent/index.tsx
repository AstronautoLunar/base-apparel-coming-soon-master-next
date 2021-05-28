import { useState, useEffect } from 'react';

import styles from './styles.module.scss';

export default function InputContent() {
    let [ email, setEmail ] = useState("");
    let [ emailValidate, setEmailValidate ] = useState(true);
    let [ styleBorder, setStyleBorder ] = useState("#413a3a");

    function changeEmail(e) {
        setEmail(email = e.target.value);
        
    }
    function verificarEmail(e) {
        e.preventDefault();

        let valor = email;
        let arroba = valor.split('');

        let filtrarArrobaEmail = arroba.filter(e => {
            return e === "@";
        })

        let ArrobaEmail = filtrarArrobaEmail[0] === "@";

        let palavrasEmail = valor.split(".");
        let ultimaPalavraEmail = palavrasEmail[1] === "com";
        
        let isEmail = ArrobaEmail === true && ultimaPalavraEmail === true;

        if(isEmail) {
            setEmailValidate(emailValidate = true);
        } else {
            setEmailValidate(emailValidate = false);
        }
    }

    useEffect(() => {
        if(!emailValidate) {
            setStyleBorder(styleBorder = "#F96464");
        } else {
            setStyleBorder(styleBorder = "rgba(65, 58, 58, 0.5)");
        }
    }, [ emailValidate, styleBorder, setStyleBorder ])

    return (
        <>
            <form 
                onSubmit={verificarEmail}
                className={styles.form}    
            >
                <div className={styles.areaInput}>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email Address"
                        value={email}
                        onChange={changeEmail}
                        className={styles.inputContent}
                        style={{ borderColor: styleBorder}}
                    />
                    {
                        emailValidate
                        ||
                        <img
                            className={styles.error}
                            src="/icon-error.svg" 
                            alt="Error"
                        />
                    }
                    <button className={styles.buttonInput}>
                        <img src="/icon-arrow.svg" alt="enter"/>
                    </button>
                </div>
                {
                    emailValidate
                    ||
                    <span 
                        className={styles.textError}
                    >
                        Please Provide a valid email
                    </span>
                }
            </form>
        </>
    );
}