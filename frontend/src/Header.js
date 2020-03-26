import React from 'react';

function Header({children}){
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;

// //App.js para testar o useState
// function App() {
//     const [counter, setCounter] = useState(0);
  
//     //useState retorna um array
//     //Array[valor, funcaoDeAtualizacao]
  
//     function increment(){
//       setCounter(counter + 1);
//     }
  
//     return (
//       <div>
//         <Header>Contador: {counter}</Header>
//         <button onClick={increment}>Incrementar</button>
//       </div>
//     );
//   }