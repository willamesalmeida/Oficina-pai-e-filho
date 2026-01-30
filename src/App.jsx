import React from 'react';
import { MessageCircle } from 'lucide-react'; // Melhor que Phone para WhatsApp
import { MapPin, Clock, Navigation } from 'lucide-react'; // Adicione Navigation e MapPin aqui
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

            <img
              src="/logo-pai-e-filho-titulo.png"
              alt="Oficina Pai e Filho"
              className="img-titulo-pai-filho"
            />

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

          <div className="services-grid">
            {/* Card 1 */}
            <div className="service-card">
              <img src="/mecanico-apontando.png" alt="Mascote" className="mascote-mecanico-1" />
              <div className="card-inner">
                <h3>Manutenção Preventiva</h3>
                <p>Revisões completas, troca de óleo e filtros para manter seu carro sempre seguro e econômico.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="service-card">
              <div className="card-inner">
                <h3>Mecânica Geral</h3>
                <p>Serviços em motor, freios, suspensão e embreagem com mão de obra qualificada e peças de confiança.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div className="card-inner">
                <h3>Elétrica Automotiva</h3>
                <p>Bateria, alternador, partidas e todo o sistema elétrico do seu veículo em boas mãos.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="service-card">
              <img src="/mecanico-chave.png" alt="Mascote" className="mascote-mecanico-2" />
              <div className="card-inner">
                <h3>Alinhamento 3D</h3>
                <p>Alinhamento, balanceamento e geometria para maior estabilidade e menor desgaste dos pneus.</p>
              </div>
            </div>
          </div>

          <img src="/engrenagem-footer.png" alt="" className="engrenagem-decorativa-bottom" />
        </div>
      </section>
      {/* SEÇÃO 4: CTA FINAL */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="cta-container">

            {/* Engrenagens Decorativas Superiores */}
            <img src="/engrenagens-top-left.png" alt="" className="gears-cta-top" />

            <h2 className="cta-text">Cuidamos do seu carro como ele cuida de você</h2>

            <a href="https://wa.me/55DDNUMERODOCELULAR" className="btn-whats-large" target="_blank" rel="noopener">
              <MessageCircle size={32} />
              Agende agora pelo WhatsApp
            </a>

            {/* Engrenagens e Chave Decorativas Inferiores */}
            <div className="cta-footer-decor">
              <img src="/engrenagens-bottom-left.png" alt="" className="engrenagens-footer" />
              <img src="/chave-decorativa.png" alt="" className="chave-footer" />
            </div>

          </div>
        </div>
      </section>

{/* SEÇÃO 5: LOCALIZAÇÃO */}
<section className="location-section">
  <div className="location-overlay">
    
    <img src="/engrenagem-footer.png" alt="" className="gears-location-left" />

    <div className="location-container">
      <h2 className="location-title">Localização</h2>

      <div className="location-info-list">
        <div className="info-row">
          <MapPin size={40} color="#ff9c00" strokeWidth={3} />
          <div className="info-content">
            <p>Tv. Benedito Loureiro II - Cidade Universitária</p>
            <p>Maceió - AL, 57073-511</p>
          </div>
        </div>

        <div className="info-row">
          <img src="/relogio.png" alt="Horario" className='icon-relogios' />
          <Clock size={40} color="#ff9c00" strokeWidth={3} />
          <div className="info-content">
            <p>Seg-Sex: 8h às 18h | Sáb: 8h às 12h</p>
          </div>
        </div>
      </div>

      <a href="https://goo.gl/maps/seu-link-aqui" className="btn-maps" target="_blank" rel="noopener">
      <img src="/pin-localizacao" alt="localização" className='icon-localizacao' />
        <Navigation size={24} fill="white" />
        Ver no Mapa
      </a>
    </div>

    <img src="/chave-decorativa.png" alt="" className="wrench-location-right" />
  </div>
</section>
    </main>
  );
}

export default App;