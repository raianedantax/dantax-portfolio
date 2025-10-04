import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo/logo.png'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    setIsOpen(false)
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/')
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
      }}
    >
      <div className="container" style={{ padding: '16px 24px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '50px',
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div
            style={{
              display: window.innerWidth > 768 ? 'flex' : 'none',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                style={{
                  fontSize: '14px',
                  color: '#8888aa',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Orbitron, sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#00ffff')}
                onMouseLeave={(e) => (e.target.style.color = '#8888aa')}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'flex' : 'none',
              width: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '8px',
              background: 'none',
              color: '#00ffff',
              cursor: 'pointer',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ paddingTop: '16px', paddingBottom: '8px' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    textAlign: 'left',
                    padding: '8px 16px',
                    color: '#8888aa',
                    background: 'none',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Orbitron, sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#00ffff'
                    e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#8888aa'
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
