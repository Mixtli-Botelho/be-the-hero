import React, { useState, useEffect } from 'react' // useEffect => Disparar uma função em um determinado momento do componente
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api.js'

import "./styles.css"

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    // 2 parâmetros => 1 função a ser executada e 1 array de dados, que quando alterados dispara essa função ([] - como array vazio a função dispara apenas 1 vez)
    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incidents => incidents.id !== id))
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO: {incidents.id}</strong>
                        <p>{incidents.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incidents.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                        <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}