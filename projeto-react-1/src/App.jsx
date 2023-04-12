import{useState } from "react";


function App() {
const [nome, setNome] = useState('');
const [numero ,setNumero] = useState(0);

function mudaNome(){
setNome('teste muda nome')
console.log('teste')

}
function soma1(){
  setNumero(numero + 1)
}
function subtrair1(){
  setNumero(numero - 1)
}
  return (
    <>
        <button onClick={mudaNome}> Muda nome</button>
        <h1>ola {nome}</h1>

        <button onClick={soma1}> soma 1</button>
        <h1>O Resultado É {numero}</h1>

        <button onClick={subtrair1}> subtrair 1</button>
        <h1>O Resultado É {numero}</h1>
    </>
    
  )
}

export default App
