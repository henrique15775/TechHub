import { createContext, useContext, useRef, useState } from "react";

export const ProductContext = createContext({});

export function ProductContextProvider({children}){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [showCadastro, setShowCadastro] = useState(false);
  const handleCloseCadastro = () => setShowCadastro(false);
  var usersEmail = useRef(null)
  var usersSenha = useRef(null)
  var confirmSenha = useRef(null)
  const [userToken, setUserToken] = useState([''])
  const login = useRef(null)

  const [showProductId,setShowProductId] = useState(0)

  const [nameLogin, setnameLogin] = useState(['Login']);
  const handleCloseModalProduto = () => setShowProductId(false);
  const [Users, setUsers] = useState([])
  const [UserNot, setUserNot] = useState()

  const [InvalidSenha, setInvalidSenha] = useState()
  const [notebooks, setNotebooks] = useState([])
  const [computadores, setComputadores] = useState([])
  const [celulares, setCelulares] = useState([])
  return(
      <ProductContext.Provider value={{
        show,
        setShow,
        handleClose,
        showCadastro,
        setShowCadastro,
        handleCloseCadastro,
        usersEmail,
        usersSenha,
        login,
        nameLogin,
        setnameLogin,
        Users,
        setUsers,
        UserNot,
        setUserNot,
        InvalidSenha,
        setInvalidSenha,
        notebooks,
        setNotebooks,
        computadores,
        setComputadores,
        celulares,
        setCelulares,
        userToken,
        setUserToken,
        confirmSenha,
        showProductId,
        setShowProductId,
        handleCloseModalProduto
      }}>
        {children}
      </ProductContext.Provider>
  )
}

export function useProduction(){
  return useContext(ProductContext)
}
