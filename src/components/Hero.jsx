import { ArrowDown, Code2, Terminal } from 'lucide-react'

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', '#projects')
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', '#contact')
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated background grid */}
      <div
        className="bg-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
        }}
      />

      {/* Floating geometric shapes */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '80px',
          width: '128px',
          height: '128px',
          border: '2px solid #00ffff',
          opacity: 0.3,
        }}
        className="animate-spin"
      />

      <div
        style={{
          position: 'absolute',
          bottom: '160px',
          right: '128px',
          width: '96px',
          height: '96px',
          border: '2px solid #ff00ff',
          opacity: 0.3,
        }}
        className="animate-float"
      />

      <div
        style={{
          position: 'absolute',
          top: '33%',
          right: '80px',
          width: '80px',
          height: '80px',
          border: '2px solid #8000ff',
          opacity: 0.3,
          transform: 'rotate(45deg)',
        }}
        className="animate-pulse"
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '70px',
            marginBottom: '24px',
            fontFamily: 'Orbitron, sans-serif',
            lineHeight: 1.1,
          }}
          className="text-glow-cyan"
        >
          <span style={{ color: '#00ffff' }}>HELLO, </span>
          <br />
          <span style={{ color: '#ff00ff' }}>I am</span>
          <br />
          <span style={{ color: '#ffffff' }}>Raiane.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            color: '#fff',
            marginBottom: '48px',
            maxWidth: '768px',
            margin: '0 auto 48px',
          }}
        >
          I craft{' '}
          <span style={{ color: '#00ffff' }}>
            immersive digital experiences,
          </span>{' '}
          turning innovative ideas into reality with cutting-edge technology.
          For me, this is where innovation meets execution.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: window.innerWidth > 640 ? 'row' : 'column',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={scrollToProjects}
            className="btn btn-primary neon-glow-cyan"
            style={{ fontSize: '18px', padding: '16px 32px' }}
          >
            <Code2 size={20} />
            VIEW PROJECTS
          </button>

          <button
            onClick={scrollToContact}
            className="btn btn-outline"
            style={{ fontSize: '18px', padding: '16px 32px' }}
          >
            CONNECT
          </button>
        </div>

        <div style={{ marginTop: '80px' }}>
          <div className="animate-float">
            <ArrowDown size={24} color="#00ffff" style={{ margin: '0 auto' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
