import Head from 'next/head';
import React, { useState } from 'react';
import{CssBaseline,CircularProgress }from '@mui/material'
import styles from '@/styles/Home.module.css'
import { auth } from '../config/_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../public/Images/iCON 7 1 (1).png';
import Google from '../../public/Images/Google svg.png';
import facebook from '../../public/Images/Facebook svg.png'

export default function Home() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); 
  
    const handleSignInOrSignUp = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, email, password);
          router.push('/dashboard')
          console.log('Sign-up successful');
          setSuccessMessage('Congratulation!! Sign-up successful '); 
  
        } else {
          await signInWithEmailAndPassword(auth, email, password);
          router.push('/dashboard')
  
          console.log('Sign-in successful');
          setSuccessMessage('Congratulation!! Proceed to gallary');
  
        }
      } catch (error) {
        if (error.code === 'invalid-login-credentials') {
          setError('**Invalid email or password**');
        }  else if (error.code === 'auth/email-already-in-use') {
          setError('**Email is already in use. Use a different email address.**');
        } 
        else if (error.code === 'auth/invalid-email') {
          setError('** Invalid email format. Enter a valid email address.** ');
        }
          else if(error.code === 'auth/invalid-login-credentials'){
            setError('** invalid login credentials** ');
          }
        else if(error.code =='auth/weak-password'){
          setError('** Weak-Password:Password should be at least 6 characters** ')
        }
        else if(error.code === 'auth/network-request-failed') {
          setError('** Network error. Check your internet connection.** ');
        }
        else {
          setError(error.message);
        }
      }
      finally {
        setIsLoading(false); 
      }
    };
  
    return (
      <>
        <Head>
          <title>HelpMeOut</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
      <section>
       < CssBaseline/>
<div className={styles.logo}>
    <Image src={logo} alt='logo' className={styles.logoIcon}></Image>
        <p  className={styles.logoName}>HelpMeOut</p>
</div>
       <div  className={styles.container}>
        <h2 className={styles.FormTitle}>Log in or Sign up</h2>
        <p className={styles.FormDes}>Join millions of others in sharing successful moves on HelpMeOut.</p>
        <div className={styles.serviceproviders}>
            <button className={styles.button}><Image src={Google} alt='googleIcon'></Image>Continue with Google</button>
            <button className={styles.button}><Image src={facebook} alt='googleIcon'></Image>Continue with Facebook</button>
        </div>
        <h2 className={styles.SignupOptions}>Or</h2>
        <div className={styles.form}>
          {error&& <p className={styles.error}>{error}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          <form onSubmit={handleSignInOrSignUp}>
            <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                placeholder='Enter your email address'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password:</label>
              <input
              
                type="password"
                value={password}
                placeholder='Enter Your Password'
                onChange={(e) => setPassword(e.target.value)}
                required
                
              />
              {/* {error && error.includes('weak-password') && (
                <p style={{ color: 'red' }}>{error}</p>
              )} */}
            </div>
            <button type="submit" className={styles.submitButton}>
            {isLoading ? (
                  <CircularProgress size={20} color="inherit" /> 
                ) : (
                  isSignUp ? 'Sign Up' : 'Sign In'
                )}
            </button>
          </form>
          <p className={styles.options}>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <button className={styles.toggleButton}onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
        </div>
        </section>
      </>
    );
  }