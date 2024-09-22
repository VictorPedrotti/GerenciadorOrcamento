import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBudget } from '../../context/BudgetContext';
import './index.css';

function Dashboard() {
    const { totalIncome, totalExpense, balance } = useBudget();
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-summary">
                <div className="summary-item">
                    <h2>Receitas</h2>
                    <p>R$ {totalIncome.toFixed(2)}</p>
                </div>
                <div className="summary-item">
                    <h2>Despesas</h2>
                    <p>R$ {totalExpense.toFixed(2)}</p>
                </div>
                <div className="summary-item">
                    <h2>Saldo</h2>
                    <p>R$ {balance.toFixed(2)}</p>
                </div>
            </div>

            {/* Botões para adicionar Receita e Despesa */}
            <div className="button-container">
                <button className="add-button" onClick={() => navigate('/adicionar-receita')}>Adicionar Receita</button>
                <button className="add-button" onClick={() => navigate('/adicionar-despesa')}>Adicionar Despesa</button>
            </div>
        </div>
    );
}

export default Dashboard;
