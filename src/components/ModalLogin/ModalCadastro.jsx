import {Form, Modal } from "react-bootstrap";
import { useProduction } from "../../contexts/ProductContext";
import Style from './style.module.scss'
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
function ModalCadastro() {
  const {showCadastro, handleCloseCadastro, InvalidSenha, usersEmail, setShow,usersSenha} = useProduction()

  const [confirmSenha, setconfirmSenha] = useState([''])

  const submitCadastro = async () => {
    
    if(usersSenha == confirmSenha){
      await axios.post('https://techub-smartback.herokuapp.com/api/users', {
        login: usersEmail.current.value,
        userPassword: usersSenha.current.value,
        isAdmin: false
      }
      )
      setconfirmSenha(null)
      setShow(false)
    }
  }
  


  return (
    <>
      <Modal show={showCadastro} onHide={handleCloseCadastro} >
        <Modal.Header closeButton>
          <img src="../img/techub-logo.png" alt='Logo' className={Style.logoLogin} />
        </Modal.Header>
        <Form className={Style.form}>
          <Modal.Body>
            <Form.Group controlId="ModalEmail" className={Style.input}>
              <Form.Control type="text" name="email" placeholder="E-mail" required ref={usersEmail}/>
            </Form.Group>
            <Form.Group controlId="ModalSenha">
              <Form.Control type="password" name="password" placeholder="Senha" required ref={usersSenha} />
            </Form.Group>
            <Form.Group controlId="ModalConfirmeSenha">
              <Form.Control type="password" name="confSenha" placeholder="Confirme sua senha" required ref={confirmSenha} />
            </Form.Group>
            <p className={Style.alert} >{InvalidSenha}</p>
          </Modal.Body>
          </Form>
          <Modal.Footer>
            <div className={Style.confirm}>
              <button
                className={Style.entrar}
                variant="primary"
                as="input"
                type="submit"
                onClick={submitCadastro}
              >
                Entrar
              </button>
            </div>

          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCadastro;
