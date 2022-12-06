import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import ModalLogin from '../ModalLogin/ModalLogin';
import ModalCadastro from '../ModalLogin/ModalCadastro';
import localStorage from '../../services/localStorage'

import Style from './style.module.scss'
import { useProduction } from '../../contexts/ProductContext';

function Menu() {

    const {setInvalidSenha,setUserNot, setShow, handleClose, handleCloseCadastro, setShowCadastro, showCadastro, usersEmail, usersSenha, login, nameLogin, setnameLogin, userName,userToken, setUserToken} = useProduction()

    const usuarios = localStorage.readAll()
    
    const logout = () => {
      setUserToken('')
      setnameLogin('Login')
    }
    
    const clickLogin = () =>{
      setShow(true);
    }

    const clickCadastro = () =>{
      setShowCadastro(true);
    }

    const ToggleModal = (modal) =>{
      if(modal === "modalLogin")
        handleClose(true);
      handleCloseCadastro()
    }

    return(
      <>
      <div className={Style.MenuContainer}>
        <header>
          <nav className={Style.Menu}>
            <Link to="/">
              <ul id={Style.home} >
                  <li>
                      <span><i className="fas fa-home"></i>Home</span>
                  </li>
              </ul>

              <span><img id="logo" src="../img/techub-logo.png" alt='Logo' /></span>
            </Link>
            <ul className= {Style.navegation}>
                <Link to="/Computadores">
                  <li>
                    <span id="computer"><i className="fas fa-desktop"></i>Computador</span>
                  </li>
                </Link>
                <Link to="/Notebooks">
                  <li>
                    <span id="not"><i  className="fas fa-laptop"></i>Notebook</span>
                  </li>
                </Link>
                <Link to="/Celulares">
                  <li>
                    <span id="mobile"><i className="fas fa-mobile-alt"></i>Celular</span>
                  </li>
                </Link>
                <li id="login" className={Style.logar} >
                    <i className="fas fa-user-circle"></i>
                    <p className="cadastro" onClick={clickLogin} ref={login}>{nameLogin}/</p>
                    {userToken != '' ? (
                      <p className="cadastro" onClick={logout}>Sair</p>
                    ) : (
                      <p className="cadastro" onClick={clickCadastro}>Cadastre-se</p>
                    )}
                </li>
            </ul>
          </nav>
        </header>
      </div>

      <ModalLogin />
      <ModalCadastro
        showCadastro={showCadastro}
        handleCloseCadastro ={handleCloseCadastro}
      />

      </>
    )
}

export default Menu;
