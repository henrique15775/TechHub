import {Form, Modal } from "react-bootstrap";
import { useProduction } from "../../contexts/ProductContext";
import Style from './style.module.scss'
import axios from 'axios';
function ModalCadastro() {
  const {showCadastro, handleCloseCadastro, InvalidSenha, usersEmail, setShow,usersSenha} = useProduction()

  const submitCadastro = async () => {
    
    await axios.post('https://techub-smartback.herokuapp.com/api/users', {
        login: usersEmail.current.value,
        userPassword: usersSenha.current.value,
        isAdmin: false
    }
    )
    setShow(false)
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
            <Form.Group controlId="ModalUser">
              <Form.Control type="text" name="username" placeholder="Nome de usuario"/>
            </Form.Group>
            <Form.Group controlId="ModalDate">
              <Form.Control type="text" name="dataNascimento" placeholder="Data de nascimento xx/xx/xxxx" pattern="\d{1,2}/\d{1,2}/\d{4}"/>
            </Form.Group>
            <Form.Group controlId="ModalPhone">
              <Form.Control type="text" name="phone" placeholder="telefone (xx) xxxx-xxxx" pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4}"/>
            </Form.Group>
            <Form.Group controlId="ModalSenha">
              <Form.Control type="password" name="password" placeholder="Senha" required ref={usersSenha} />
            </Form.Group>
            <Form.Group controlId="ModalConfirmeSenha">
              <Form.Control type="password" name="confSenha" placeholder="Confirme sua senha" />
            </Form.Group>
            <p className={Style.alert} >{InvalidSenha}</p>
          </Modal.Body>
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
        </Form>
      </Modal>
    </>
  );
}

export default ModalCadastro;
