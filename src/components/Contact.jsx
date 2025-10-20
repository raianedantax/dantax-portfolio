import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: '50px',
              marginBottom: '16px',
              fontFamily: 'Orbitron, sans-serif',
            }}
            className="text-glow-cyan"
          >
            <span style={{ color: '#00ffff' }}>ESTABLISH</span>{' '}
            <span style={{ color: '#ffffff' }}>CONNECTION</span>
          </h2>
          <div
            style={{
              width: '96px',
              height: '4px',
              background: 'linear-gradient(to right, #00ffff, #00ff88)',
              margin: '0 auto',
            }}
          />
          <p
            style={{
              fontSize: '18px',
              color: '#fff',
              marginTop: '24px',
              maxWidth: '512px',
              margin: '24px auto 0',
            }}
          >
            Ready to bring your digital vision to life? Let's connect and create
            something extraordinary.
          </p>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
          {/* Contact Info */}
          <div style={{ padding: '0 24px' }}>
            <h3
              style={{
                fontSize: '32px',
                marginBottom: '24px',
                fontFamily: 'Orbitron, sans-serif',
                color: '#ff00ff',
              }}
            >
              Get In Touch
            </h3>

            <div style={{ marginBottom: '32px' }}>
              <p
                style={{
                  fontSize: '18px',
                  color: '#fff',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                Whether you're looking to build a cutting-edge web application,
                optimize your existing systems, or explore the possibilities of
                emerging technologies, I'm here to help transform your ideas
                into reality.
              </p>
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    border: '2px solid rgba(0, 255, 255, 0.3)',
                  }}
                >
                  <Mail size={20} color="#00ffff" />
                </div>
                <div>
                  <div style={{ color: '#00ffff', fontWeight: 600 }}>
                    E-mail
                  </div>
                  <div style={{ color: '#fff' }}>raianedantax@gmail.com</div>
                </div>
              </div>

              {/* <div
                style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 0, 255, 0.1)',
                    border: '2px solid rgba(255, 0, 255, 0.3)',
                  }}
                >
                  <Phone size={20} color="#ff00ff" />
                </div>
                <div>
                  <div style={{ color: '#ff00ff', fontWeight: 600 }}>Phone</div>
                  <div style={{ color: '#fff' }}>+55 (11) 99999-9999</div>
                </div>
              </div> */}

              <div
                style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(128, 0, 255, 0.1)',
                    border: '2px solid rgba(128, 0, 255, 0.3)',
                  }}
                >
                  <MapPin size={20} color="#8000ff" />
                </div>
                <div>
                  <div style={{ color: '#8000ff', fontWeight: 600 }}>
                    Location
                  </div>
                  <div style={{ color: '#fff' }}>Alagoas, Brasil</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="card"
            style={{
              background: 'linear-gradient(135deg, #14141f, #1a1a28)',
              border: '1px solid rgba(0, 255, 255, 0.2)',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#00ffff',
                    fontWeight: 600,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#e0e0ff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00ffff')}
                  onBlur={(e) =>
                    (e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)')
                  }
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#00ffff',
                    fontWeight: 600,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#e0e0ff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00ffff')}
                  onBlur={(e) =>
                    (e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)')
                  }
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#00ffff',
                    fontWeight: 600,
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#e0e0ff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00ffff')}
                  onBlur={(e) =>
                    (e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)')
                  }
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#00ffff',
                    fontWeight: 600,
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '8px',
                    color: '#e0e0ff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00ffff')}
                  onBlur={(e) =>
                    (e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)')
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary neon-glow-cyan"
                style={{
                  width: '100%',
                  fontSize: '18px',
                  padding: '16px',
                }}
              >
                <Send size={20} />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
