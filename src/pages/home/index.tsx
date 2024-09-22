import React from "react";
import './index.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao Gerenciador de Orçamento!</h1>
            <p>
                O nosso gerenciador de orçamento é uma ferramenta prática e intuitiva que permite a você controlar suas finanças pessoais de forma simples e eficiente.
            </p>
            <h2>Como Funciona?</h2>
            <p>
                Com o nosso gerenciador, você pode:
            </p>
            <ul>
                <li><strong>Registrar Entradas:</strong> Adicione suas receitas, como salários, bônus e outras fontes de renda.</li>
                <li><strong>Registrar Saídas:</strong> Controle suas despesas, como contas, compras e outros gastos.</li>
                <li><strong>Visualizar seu Orçamento:</strong> Acompanhe sua situação financeira em tempo real, visualizando suas entradas e saídas.</li>
            </ul>
            <h2>Comece Agora!</h2>
            <p>
                Para começar, clique no menu Dashboard e adicione suas transações. 
                Com o nosso gerenciador, você terá um controle total sobre suas finanças!
            </p>
        </div>
    );
}

export default Home;
