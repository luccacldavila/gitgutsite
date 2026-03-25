import React from 'react';
import './Telaprincipal.css';
import eustacio from './ImagensUsadas/eustaciomadeira.png';
import boy from './ImagensUsadas/Heheboay.jpg';
import medic from './ImagensUsadas/MedicMewing.png';


export default function Telaprincipal() {
    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <h1>gitgutsite</h1>
                <p className="description">
                    Gosto de LoL.
                </p>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <section className="gallery">
                    {/* Card 1 */}
                    <div className="card">
                        <img src={eustacio} alt="Eustácio Madeira" />
                        <h3>Jogos de ação</h3>
                        <p>Esta opção irá te recomendar canais, perfis e manuais para jogos de ação, aventura, fps e luta</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <img src={boy} alt="Projetos Práticos" />
                        <h3>Projetos Práticos</h3>
                        <p>Gosto de Final Fantasy</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <img src={medic} alt="Comunidade" />
                        <h3>Comunidade</h3>
                        <p>.</p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-item">
                        <strong>Telefone:</strong> +55 (11) 9999-9999
                    </div>
                    <div className="footer-item">
                        <strong>Email:</strong> <a href="mailto:suporte@gitgut.com">suporte@gitgut.com</a>
                    </div>
                    <div className="footer-item">
                        <strong>GitHub:</strong> <a href="https://github.com/gitgut" target="_blank" rel="noopener noreferrer">github.com/gitgut</a>
                    </div>
                </div>
                <p className="copyright">&copy; 2024 gitgut. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}