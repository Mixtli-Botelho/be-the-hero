import React, { useState } from 'react' // Importar o "React" é essencial em todo arquivo que tenha conteúdo "JSX"
import { Link, useHistory } from 'react-router-dom' // Para utilizar links sem carregar páginas inteiras (Conceito de SPA - Single Page Application)
import { FiLogIn } from 'react-icons/fi' // Biblioteca de ícones que funcionam como "Componentes React"

import api from '../../services/api.js'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

// return() => Utiliza-se "()" no "return" da função quando o retorno necessitar de mais linhas de código
// export default Logon => Também pode ser utilizado (no final depois da função "Logon()")

export default function Logon() {
    const [ id, setId ] = useState('')
    const history = useHistory()

    async function handleLogin(event) {
        event.preventDefault()

        try {
            const response = await api.post('/sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heros" />
        </div>
    )
}