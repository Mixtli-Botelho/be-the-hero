import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js' // Importa o aquivo "App.js" onde foi criado o componente '<App />'

// render() => Renderizar, colocar em tela, 2 parâmetros -> Componentes React e Componente HTML
// <App /> => Um componente React (componentes React são escritos com letra maiúscula)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // sintaxe do DOM (Pegar elemento pelo "id" == 'root')
)