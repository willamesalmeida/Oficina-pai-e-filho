import React from 'react';
import { MessageCircle } from 'lucide-react'; // Melhor que Phone para WhatsApp
import './App.css';

function App() {
  return (
    <main className='site-wrapper'>

      <section className="hero-section">
        <div className="hero-container">
          {/* Foto do Mecânico */}
          <div className="mecanico-circle">
            <img src="/mecanico-foto.png" alt="Mecânico da Oficina Pai e Filho" />
          </div>

          {/* Conteúdo Direito */}
          <div className="hero-content">
            <span className="label-oficina">Oficina</span>

            <h1 className="nome-pai-filho">
              PAI E FILH
              <img
                src="/engrenagem-o.png"
                alt=""
                className="engrenagem-o"
                aria-hidden="true"
              />
            </h1>

            <p className="slogan-ano">
              Desde 2016, entregando qualidade e confiança no serviço
            </p>

            <p className="texto-destaque">
              Serviços automotivos com qualidade e atendimento familiar na Parte Alta.
            </p>

            <a href="https://wa.me/55DDNUMERODOCELULAR" className="btn-whats" target="_blank" rel="noopener">
              <MessageCircle size={28} />
              Agende agora pelo WhatsApp
            </a>

            {/* Logo pequena no canto inferior direito */}
            <img src="/logo-completa.png" alt="Oficina Pai e Filho" className="logo-hero" />
          </div>
        </div>
      </section>
      {/* SEGUNDA SEÇÃO: HISTÓRIA (ADICIONADA AQUI) */}
      <section className="history-section">
        <div className="history-container">

          {/* Nome Oficina com Engrenagem (PNG que você comentou) */}
          <img src="/oficina-engrenagem.png" alt="Oficina" className="oficina-logo-text" />

          <div className="history-text">
            <p>
              Estamos há <b>9 anos no mercado</b>, construindo uma história baseada em
              <b> credibilidade, transparência e bom atendimento</b>.
            </p>
            <br />
            <p>
              Somos uma empresa familiar, presente na <b>Parte Alta de Maceió</b>, com
              localização acessível e estrutura pensada para atender você com agilidade
              e responsabilidade. Aqui, cada serviço é feito com atenção aos detalhes,
              diagnóstico claro e respeito ao seu tempo.
            </p>
            <br />
            <p>
              Mais do que consertar carros, nosso compromisso é cuidar de quem leva você
              para todo lugar.
            </p>
          </div>

          <div className="highlight-bar">
            <span className='texto-decorado'>Da nossa família para a sua, o cuidado e a atenção que o seu carro merece.</span>
            <img src="/logo-completa.png" alt="Pai e Filho" className="logo-small-right" />
          </div>

        </div>
      </section>
      <section className='services-section'>
        <div className='services-container'>
          <div className="services-header">
            <img src="/servicos-logo.png" alt="Nossos Serviços" className='servicos-titulo-img' />
            <p className="services-subtitle">Evite surpresas e gastos desnecessários</p>

            <img src="/engrenagem-vazada.png" alt="" className="engrenagem-topo-dir" />
          </div>

        </div>
      </section>
    </main>
  );
}

export default App;