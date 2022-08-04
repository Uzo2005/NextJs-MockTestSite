import Head from 'next/head'

import RegisterForm from '../components/Form/RegisterForm'




export default function Register() {
  return (
    <>
      <Head>
        <title>EducationUSA Abuja SAT MockTest Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className = " bg-blue-100 flex items-center justify-center box-border">
        <RegisterForm/>
      </body>
      
    </>
      
  )
}
