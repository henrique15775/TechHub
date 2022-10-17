import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Card from '../../components/Card/Card'
import Menu from '../../components/Menu/Menu'

import "../../App.css"
import api from '../../services/Api'
import { useProduction } from '../../contexts/ProductContext'

function Computadores(){
  const {computadores, setComputadores} = useProduction()

  useEffect(() =>{
    const readProduction= async (name)=>{
      const data = await api.readAll(name)
      setComputadores(data)
    }
    readProduction('computadores')
  },[setComputadores])

  return (
    <>
      <Menu/>

      <form id="research">
        <i className="fas fa-search"></i>
        <input type="text" name="pesquisa" id="pesquisa"/>
      </form>

      <section className='ConteinerCard'>

        {computadores.map((produto) => {
          return <Card produto={produto} key={produto.id}/>
        })}
      </section>
      <Footer/>
    </>
  );
}

export default Computadores;
