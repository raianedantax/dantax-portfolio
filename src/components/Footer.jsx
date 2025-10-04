import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import logo from '../assets/logo/logo.png'

function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/raianedantax', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/raianedantas',
      label: 'LinkedIn',
    },
    // { icon: Mail, href: 'mailto:raianedantax@gmail.com', label: 'Email' },
  ]

  return (
    <footer
      style={{
        backgroundColor: '#050508',
        borderTop: '1px solid rgba(0, 255, 255, 0.2)',
        padding: '48px 0 24px',
      }}
    >
      <div className="container">
        <div
          className="grid grid-2"
          style={{ marginBottom: '32px', alignItems: 'center' }}
        >
          {/* Logo and Description */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: '50px',
                }}
              />
              <div></div>
            </div>
            <p style={{ color: '#8888aa', maxWidth: '400px', lineHeight: 1.6 }}>
              Transforming ideas into immersive digital realities through
              cutting-edge web technologies and innovative design solutions.
            </p>
          </div>

          {/* Social Links */}
          <div
            style={{ textAlign: window.innerWidth > 768 ? 'right' : 'left' }}
          >
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith('mailto:') ? '_self' : '_blank'
                    }
                    rel={
                      link.href.startsWith('mailto:')
                        ? ''
                        : 'noopener noreferrer'
                    }
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8888aa',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#00ffff'
                      e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.1)'
                      e.target.style.color = '#00ffff'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)'
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.color = '#8888aa'
                    }}
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(0, 255, 255, 0.3), transparent)',
            margin: '32px 0',
          }}
        />

        {/* Bottom Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: window.innerWidth > 768 ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div style={{ color: '#8888aa', fontSize: '14px' }}>
            © 2025 dantaX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
