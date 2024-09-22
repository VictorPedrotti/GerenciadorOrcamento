import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Transaction {
    id: number;
    type: 'receita' | 'despesa';
    amount: number;
    description: string;
}

interface BudgetContextProps {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
    removeTransaction: (id: number) => void;
    totalIncome: number;
    totalExpense: number;
    balance: number;
}

const BudgetContext = createContext<BudgetContextProps | undefined>(undefined);

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if (!context) {
        throw new Error('useBudget must be used within a BudgetProvider');
    }
    return context;
};

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (transaction: Transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const removeTransaction = (id: number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    const totalIncome = transactions
        .filter(transaction => transaction.type === 'receita')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpense = transactions
        .filter(transaction => transaction.type === 'despesa')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <BudgetContext.Provider
            value={{ transactions, addTransaction, removeTransaction, totalIncome, totalExpense, balance }}
        >
            {children}
        </BudgetContext.Provider>
    );
};