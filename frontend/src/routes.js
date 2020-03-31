import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // Módulo do React de gerenciamento de rotas

import Logon from './pages/Logon' // Importa a função "Logon()" do arquivo "index.js" que será utilizado como componente "<Logon />"
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}


/*  react-router-dom:

    BrowserRouter => Criador de rotas, precisa ficar em volta de nossas rotas (Não foi abordado detalhes)
    Route => As próprias rotas (O react-router-dom não verifica se o caminho da rota é exatamente igual no endereço HTTP, pra isso utilizamos a propriedade "exact")
    Switch => Garante que apenas uma rota seja executada por momento
*/