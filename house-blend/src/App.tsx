import  './styles/index.css';
import Header from './components/header';
import Background from './components/background';
import React, {FC} from 'react'

const  App: FC = () => {

  return (
    <>
     <Header></Header> 
     <Background></Background>
    </>
  )
}

export default App
