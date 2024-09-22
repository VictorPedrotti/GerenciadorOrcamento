import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Receita from './components/receita/index';
import Despesa from './components/despesa/index';
import { BudgetProvider } from './context/BudgetContext';

import './App.css';

function App() {
    const renderizarHeader = () => (
        <div className='App'>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );

    return (
        <BudgetProvider>
            <Router>
                {renderizarHeader()}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/adicionar-receita' element={<Receita />} />
                    <Route path='/adicionar-despesa' element={<Despesa />} />
                </Routes>
            </Router>
        </BudgetProvider>
    );
}

export default App;
