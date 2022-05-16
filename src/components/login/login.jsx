import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './login.module.css'


function Login({ authService}) {
    const navigate = useNavigate();
    const goToMaker = (userId) => {
        navigate('/maker', {
            state: { id: userId }
        });
    }
    const onLogin = (e) => {
        authService //
        .login(e.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid))
    }


    // useEffect 값이 바뀌었을때,
    // 

    useEffect(() => {
        console.log('업데이트 될때마다 실행')
        authService //
        .onAuthChange(user => {
            user && goToMaker(user.uid)
        })
    })
    
    
    

  return (
    <section className={styles.login}>
        <Header />
        <section>
            <h1>Login</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>Google</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>Github</button>
                </li>
            </ul>
        </section>
        <Footer />
    </section>
  )
}

export default Login