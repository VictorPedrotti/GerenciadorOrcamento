import React, { useState } from 'react';
import { useBudget } from '../../context/BudgetContext';
import './index.css'; // Importando os estilos

function Receita() {
    const { addTransaction } = useBudget();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTransaction({ id: Date.now(), type: 'receita', amount, description });
        setDescription('');
        setAmount(0);
    };

    return (
        <div className="form-container">
            <h2>Adicionar Receita</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Valor (R$)"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Adicionar Receita</button>
            </form>
        </div>
    );
}

export default Receita;