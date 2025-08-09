import './actions.css';

export default function Actions() {
    return (
        <section id="acoes" className="actions">
            <h2>Ações e Iniciativas</h2>
            <div className="cards">
                <div className="card">
                    <i className="fas fa-recycle" style={{ color: '#2d5a27', fontSize: '32px' }}></i>
                    <h3>Reciclagem</h3>
                </div>
                <div className="card">
                    <i className="fas fa-tint" style={{ color: '#2d5a27', fontSize: '32px' }}></i>
                    <h3>Economia de Água</h3>
                </div>
                <div className="card">
                    <i className="fas fa-bolt" style={{ color: '#2d5a27', fontSize: '32px' }}></i>
                    <h3>Energia Limpa</h3>
                </div>
                <div className="card">
                    <i className="fas fa-leaf" style={{ color: '#2d5a27', fontSize: '32px' }}></i>
                    <h3>Consumo Consciente</h3>
                </div>
            </div>

        </section>
    );
}
