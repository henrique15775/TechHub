import { createContext, useContext, useRef, useState } from "react";

export const ProductContext = createContext({});

export function ProductContextProvider({children}){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [showCadastro, setShowCadastro] = useState(false);
  const handleCloseCadastro = () => setShowCadastro(false);

  const usersEmail = useRef(null)
  const usersSenha = useRef(null)
  const login = useRef(null)

  const [nameLogin, setnameLogin] = useState([]);

  const [Users, setUsers] = useState([])
  const [UserNot, setUserNot] = useState()

  const [InvalidSenha, setInvalidSenha] = useState()

  const [produtos, setProd] = useState([])
<<<<<<< HEAD
=======
  const [computadores, setComputadores] = useState([])
  const [celulares, setCelulares] = useState([])
>>>>>>> fe0850d (commit 1)
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
        produtos,
<<<<<<< HEAD
        setProd

=======
        setProd,
        computadores,
        setComputadores,
        celulares,
        setCelulares
>>>>>>> fe0850d (commit 1)
      }}>
        {children}
      </ProductContext.Provider>
  )
}

export function useProduction(){
  return useContext(ProductContext)
}
