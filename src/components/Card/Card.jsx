import Style from './style.module.scss'
import { useProduction } from '../../contexts/ProductContext'
import ModalProduct from '../ModalProduct/ModalProduct'
function Card({produto}){
    
    const {showProductId,setShowProductId} = useProduction()

    const showModalProduct = () => {
        setShowProductId(produto.id)
        console.log(produto.id)
        console.log(showProductId)
      }
    
    return(
        <>
        {showProductId == produto.id ? (                     
                <ModalProduct product={produto}/>
                    ) : (
                        <div onClick={showModalProduct} className={Style.catalogo} id={produto.id}>
                        <i className="fas fa-heart"></i>
                        <img src={produto.imagem} alt={produto.nome}/>
                        <div className={Style.valores}>
                            <h6>{produto.nome}</h6>
                            <span>por</span>
                            <p>R$ {produto.preco}</p>
                        </div>
                        <button type="submit" name="addcart" id="addcart">AddCart</button>
                      </div>
                    )}
        </>
    )
}

export default Card;
