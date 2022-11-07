
import {Form, Modal } from "react-bootstrap";
import { useProduction } from "../../contexts/ProductContext";
import Style from './style.module.scss';
import axios from 'axios';


function ModalLogin() {
  const {show,setShow, handleClose,usersEmail,usersSenha,userToken, setUserToken, setnameLogin, UserNot} = useProduction()
  
  const submitLogin = async () => {
    console.log(usersEmail.current.value)
    console.log(usersSenha.current.value)
    const response = await axios.post('https://techub-smartback.herokuapp.com/users/auth', {
      login: usersEmail.current.value,
      userPassword: usersSenha.current.value
    })
    console.log(response)
    
    setnameLogin(response.data.login)
    setUserToken(response.data.token)
    setShow(false)
  }
  
  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <img src="../img/Logo.png" alt='Logo' className={Style.logoLogin} />
        </Modal.Header>
        <Modal.Body>
        <Form className={Style.form}>
          
            <Form.Group controlId="ModalEmail">
              <Form.Control type='text' placeholder="E-mail" required ref={usersEmail}/>
            </Form.Group>
            <Form.Group controlId="ModalSenha">
              <Form.Control type='password' placeholder="Senha" required ref={usersSenha}/>
            </Form.Group>
            <p><a href="##" >Esqueceu a senha?</a></p>
            <p className={Style.alert}>{UserNot}</p>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className={Style.confirm}>
              <button
                className={Style.entrar}
                variant="primary"
                as="input"
                onClick={submitLogin}
              >
                Entrar
              </button>
            </div>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;
