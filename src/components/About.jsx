import { Brain, Zap, Rocket, Shield } from 'lucide-react'
import perfil from '../assets/icons/perfil.jpg'

function About() {
  const skills = [
    {
      icon: Shield,
      title: 'Secure Digital Architectures',
      description:
        'I build with security at the core, implementing robust protocols and best practices to ensure your digital solutions are protected against evolving threats. Your data and users trust are my priority.',
      color: '#00ffff',
    },
    {
      icon: Brain,
      title: 'High-Performance Web Solutions',
      description:
        'Efficiency is key. I optimize code and infrastructure to deliver lightning-fast applications and APIs, ensuring seamless user experiences and superior operational performance.',
      color: '#ff00ff',
    },
    {
      icon: Rocket,
      title: 'Scalable API Development',
      description:
        'I design and develop powerful, scalable APIs that serve as the backbone for complex systems. Facilitating seamless data flow and integration, I enable your platforms to connect and evolve effortlessly.',
      color: '#8000ff',
    },
    {
      icon: Zap,
      title: 'Intuitive User Experiences',
      description:
        'Beyond functionality, I craft user interfaces that are not only aesthetically pleasing but also intuitively navigable. My focus on human-centered design ensures engaging and impactful digital interactions.',
      color: '#00ff88',
    },
  ]

  return (
    <section
      id="about"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, #00ffff, transparent)',
          opacity: 0.3,
        }}
      />

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
            <span style={{ color: '#00ffff' }}>ABOUT</span>{' '}
            <span style={{ color: '#ffffff' }}>ME</span>
          </h2>
          <div
            style={{
              width: '200px',
              height: '4px',
              background: 'linear-gradient(to right, #00ffff, #ff00ff)',
              margin: '0 auto',
            }}
          />
        </div>

        <div className="grid grid-2 mb-12" style={{ alignItems: 'center' }}>
          <div>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '-16px',
                  background:
                    'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))',
                  filter: 'blur(24px)',
                  borderRadius: '12px',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '2px solid rgba(0, 255, 255, 0.3)',
                  backgroundColor: '#14141f',
                }}
                className="neon-glow-cyan"
              >
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    background: 'linear-gradient(135deg, #00ffff20, #ff00ff20)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: '#8888aa',
                  }}
                >
                  <img
                    src={perfil}
                    alt="Perfil"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '0 24px' }}>
            <h3
              style={{
                fontSize: '30px',
                marginBottom: '16px',
                fontFamily: 'Orbitron, sans-serif',
              }}
            >
              <span style={{ color: '#ff00ff' }}>WEB</span>{' '}
              <span style={{ color: '#ffffff' }}>DEVELOPER</span>
            </h3>

            <p
              style={{
                fontSize: '18px',
                color: '#8888aa',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              I am a developer and Software Engineering student{' '}
              <span style={{ color: '#00ffff' }}>
                passionate about creating
              </span>{' '}
              <span style={{ color: '#ff00ff' }}>digital solutions</span> that
              make a difference. With a foundational degree as an IT Technician
              from IFAL, I am currently applying and expanding my skills as a
              Web Development Intern. In this role, I actively participate in
              the web application development cycle, focusing on performance and
              user experience.
            </p>

            <p
              style={{
                fontSize: '18px',
                color: '#8888aa',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              My goal is to use my{' '}
              <span style={{ color: '#8000ff' }}>academic knowledge</span> and
              practical experience to develop tech products that not only work
              well but also help{' '}
              <span style={{ color: '#00ff88' }}>
                bring brands closer to their audiences
              </span>{' '}
              in a meaningful way.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.title}
                className="card"
                style={{
                  background: 'linear-gradient(135deg, #14141f, #1a1a28)',
                  border: '1px solid rgba(0, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    backgroundColor: `${skill.color}20`,
                    border: `2px solid ${skill.color}40`,
                  }}
                >
                  <IconComponent size={24} color={skill.color} />
                </div>
                <h4
                  style={{
                    fontSize: '20px',
                    marginBottom: '8px',
                    fontFamily: 'Orbitron, sans-serif',
                    color: skill.color,
                  }}
                >
                  {skill.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#8888aa' }}>
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
