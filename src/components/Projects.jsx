import {
  ExternalLink,
  Github,
  Layers,
  Database,
  Smartphone,
  Globe,
} from 'lucide-react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      category: 'Web Platform',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      technologies: ['React', 'TypeScript', 'WebGL', 'Node.js', 'PostgreSQL'],
      icon: Layers,
      glowColor: '#00ffff',
    },
    {
      id: 2,
      title: 'Projeto 2',
      category: 'Backend Infrastructure',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      technologies: ['GraphQL', 'Redis', 'Docker', 'Kubernetes', 'MongoDB'],
      icon: Database,
      glowColor: '#ff00ff',
    },
    {
      id: 3,
      title: 'Projeto 3',
      category: 'Mobile Application',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      technologies: ['React Native', 'Web3.js', 'Firebase', 'Solidity'],
      icon: Smartphone,
      glowColor: '#8000ff',
    },
    {
      id: 4,
      title: 'Projeto 4',
      category: 'E-Commerce Platform',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      technologies: ['Three.js', 'Next.js', 'Stripe', 'TensorFlow.js'],
      icon: Globe,
      glowColor: '#00ff88',
    },
  ]

  return (
    <section
      id="projects"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated background lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          pointerEvents: 'none',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              height: '1px',
              background:
                'linear-gradient(to right, transparent, #00ffff, transparent)',
              top: `${20 * i}%`,
              width: '100%',
            }}
            className="animate-pulse"
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: '50px',
              marginBottom: '16px',
              fontFamily: 'Orbitron, sans-serif',
            }}
            className="text-glow-magenta"
          >
            <span style={{ color: '#ff00ff' }}>PROJECTS</span>{' '}
          </h2>
          <div
            style={{
              width: '96px',
              height: '4px',
              background: 'linear-gradient(to right, #ff00ff, #8000ff)',
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
            Explore the web applications and solutions I've brought to life.
          </p>
        </div>

        <div className="grid grid-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="card"
                style={{
                  background: '#14141f',
                  border: '1px solid rgba(0, 255, 255, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.5)'
                  e.currentTarget.style.transform = 'translateY(-10px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Glow effect */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-1px',
                    borderRadius: '12px',
                    filter: 'blur(12px)',
                    opacity: 0.25,
                    background: `linear-gradient(135deg, ${project.glowColor}, transparent)`,
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    padding: '24px',
                    borderBottom: '1px solid rgba(0, 255, 255, 0.1)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${project.glowColor}20, ${project.glowColor}05)`,
                        border: `2px solid ${project.glowColor}40`,
                      }}
                    >
                      <IconComponent size={28} color={project.glowColor} />
                    </div>
                    <span
                      style={{
                        fontSize: '12px',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: `1px solid ${project.glowColor}40`,
                        color: project.glowColor,
                        backgroundColor: `${project.glowColor}10`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '24px',
                      marginBottom: '12px',
                      fontFamily: 'Orbitron, sans-serif',
                      background: `linear-gradient(135deg, ${project.glowColor}, #ffffff)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: '#ffffffff',
                      lineHeight: 1.6,
                      fontWeight: 600,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div style={{ padding: '24px', position: 'relative' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '4px 12px',
                          fontSize: '12px',
                          borderRadius: '9999px',
                          backgroundColor: '#1a1a28',
                          border: '1px solid rgba(0, 255, 255, 0.2)',
                          color: '#fff',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      className="btn"
                      style={{
                        flex: 1,
                        background: `linear-gradient(135deg, ${project.glowColor}, ${project.glowColor}cc)`,
                        color: '#0a0a0f',
                        border: 'none',
                      }}
                    >
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button
                      className="btn btn-outline"
                      style={{
                        borderColor: 'rgba(0, 255, 255, 0.3)',
                        color: '#00ffff',
                      }}
                    >
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '128px',
                    height: '128px',
                    opacity: 0.2,
                    background: `linear-gradient(135deg, transparent 50%, ${project.glowColor} 50%)`,
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* View More */}
        <div className="text-center" style={{ marginTop: '48px' }}>
          <button
            className="btn btn-outline"
            style={{
              fontSize: '18px',
              padding: '16px 32px',
              borderColor: '#00ffff',
              color: '#00ffff',
            }}
          >
            <Github size={20} />
            VIEW ALL ON GITHUB
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
