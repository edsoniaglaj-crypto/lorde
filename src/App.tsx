import { useState } from "react";

const navigation = [
  { label: "Visão geral", icon: "⌂" },
  { label: "Chat", icon: "◌" },
  { label: "Agentes", icon: "✦" },
  { label: "Projetos", icon: "□" },
  { label: "Automações", icon: "↗" },
  { label: "Integrações", icon: "⊞" },
];

const agents = [
  { name: "LORDE Core", description: "Inteligência central", status: "Online" },
  { name: "Marketing", description: "Estratégia e conteúdo", status: "Pronto" },
  { name: "TikTok Shop", description: "Pesquisa e conversão", status: "Pronto" },
];

export default function App() {
  const [active, setActive] = useState("Visão geral");

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">L</div>
          <div>
            <strong>LORDE</strong>
            <span>AI SYSTEM</span>
          </div>
        </div>

        <nav>
          {navigation.map((item) => (
            <button
              key={item.label}
              className={active === item.label ? "nav-item active" : "nav-item"}
              onClick={() => setActive(item.label)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="status-dot" />
          <span>Sistema operacional</span>
          <b>v0.1</b>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <span className="eyebrow">CENTRAL DE COMANDO</span>
            <h1>{active}</h1>
          </div>
          <div className="system-status">
            <span className="status-dot" /> LORDE online
          </div>
        </header>

        <section className="hero-card">
          <div>
            <span className="eyebrow">LORDE CORE</span>
            <h2>O que vamos construir hoje?</h2>
            <p>
              Sua central de inteligência para projetos, agentes e automações.
            </p>
          </div>
          <button className="primary-button" onClick={() => setActive("Chat")}>
            Abrir conversa <span>→</span>
          </button>
        </section>

        <section className="grid">
          <div className="panel large">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">ATIVIDADE</span>
                <h3>Centro de operações</h3>
              </div>
              <span className="badge">Fundação</span>
            </div>
            <div className="empty-state">
              <div className="empty-icon">✦</div>
              <h4>O LORDE está pronto para evoluir</h4>
              <p>
                A fundação foi criada. Os próximos módulos podem ser conectados
                sem reconstruir a base do sistema.
              </p>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">AGENTES</span>
                <h3>Disponíveis</h3>
              </div>
            </div>
            <div className="agent-list">
              {agents.map((agent) => (
                <div className="agent" key={agent.name}>
                  <div className="agent-avatar">✦</div>
                  <div className="agent-info">
                    <strong>{agent.name}</strong>
                    <span>{agent.description}</span>
                  </div>
                  <small>{agent.status}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="command">
          <span className="command-icon">⌘</span>
          <input
            aria-label="Comando para o LORDE"
            placeholder="Dê um comando ao LORDE..."
          />
          <span className="command-hint">ENTER ↵</span>
        </section>
      </main>
    </div>
  );
}