import React from 'react' // Importar o "React" é essencial em todo arquivo que tenha conteúdo "JSX"
import './global.css'
import Routes from './routes.js'

// JSX (JavaCript XML)
// XML => Sintaxe do HTML


function App() {
  return (
    <Routes />
  )
}

export default App // Exporta a função App() que será interpretada como um componente pelo "React"

/* Conceito de COMPONENTE

  Os "Componentes do React" são funções que retornam um HTML/XML
  A função "App()" é vista como o componente "<App />" do "React"
*/

/* Conceito de ESTADO
  import useState from 'react' // useState => Utilizado para mudança de estado da aplicação

  const [counter, setCounter] = useState(0) // useState() => Retorna um Array com 2 parâmetros "[valor, atualizaçãoDoValor]"

  function increment() {
    setCounter(counter + 1)
  }

    return (
      <div>
        <Header>Contador: {counter}</Header>
        <button onClick={increment}>Incrementar</button>
      </div>
    )
*/