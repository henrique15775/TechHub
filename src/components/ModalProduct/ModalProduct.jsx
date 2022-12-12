
import {Form, Modal } from "react-bootstrap";
import { useProduction } from "../../contexts/ProductContext";
import Style from './style.module.scss';
import axios from 'axios';


function ModalProduct({product}) {
  const {show,setShow, handleCloseModalProduto,usersEmail,usersSenha,userToken, setUserToken, setnameLogin, UserNot, showProductId} = useProduction()
  
  
  return (
    <>
      <Modal show={showProductId == product.id} onHide={handleCloseModalProduto} >
        <Modal.Header closeButton>
          {product.nome}
        </Modal.Header>
        <Modal.Body>
          <img src={product.imagem} alt={product.nome}/>
                        <div className={Style.valores}>
                            <h6>{product.nome}</h6>
                            <span>por</span>
                            <p>R$ {product.preco}</p>
                        </div>
        </Modal.Body>
          <Modal.Footer>
          <button type="submit" name="addcart" id="buyButton" class="buy">Adicionar ao carrinho</button>
          <button type="submit" name="addcart" id="addcart">Comprar</button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProduct;
