import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

interface Gate {
  index: string
  path: string
  route: string
  accent: 'cyan' | 'purple' | 'pink' | 'lime' | 'amber' | 'red'
  label: string
  meta: string
  icon: React.ReactNode
}

const GATES: Gate[] = [
  {
    index: '// 01',
    path: '/cv',
    route: '/cv',
    accent: 'cyan',
    label: 'Curriculum',
    meta: 'profile.json',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
  },
  {
    index: '// 02',
    path: '/services',
    route: '/services',
    accent: 'purple',
    label: 'Services',
    meta: 'offerings.sh',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      </svg>
    ),
  },
  {
    index: '// 03',
    path: '/portfolio',
    route: '/portfolio',
    accent: 'pink',
    label: 'Portfolio',
    meta: 'projects.log',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m4 19 5-5 4 4 3-3 4 4" />
      </svg>
    ),
  },
  {
    index: '// 04',
    path: '/cyber',
    route: '/cybersecurity',
    accent: 'lime',
    label: 'Cybersécurité',
    meta: 'shield.init',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    index: '// 05',
    path: '/docs',
    route: '/documents',
    accent: 'amber',
    label: 'Documents',
    meta: 'archive.pdf',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    index: '// 06',
    path: '/skills',
    route: '/skills',
    accent: 'cyan',
    label: 'Compétences',
    meta: 'stack.map',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2 3 7l9 5 9-5-9-5Z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </svg>
    ),
  },
  {
    index: '// 07',
    path: '/tools',
    route: '/tools',
    accent: 'purple',
    label: 'Outils',
    meta: 'toolbox.bin',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3-3 3Z" />
      </svg>
    ),
  },
  {
    index: '// 08',
    path: '/contact',
    route: '/contact',
    accent: 'red',
    label: 'Contact',
    meta: 'open.channel',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
]

const HEADLINE_TEXT = 'Tommy Requillard'
const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}<>[]/?=*+-#@$%&|^~'
const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#$%&01ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ'
const HEADLINE_CHARS = '!<>-_\\/[]{}—=+*^?#$%&01'
const CMDS = [
  'connect --node=reactwebdevcv --secure',
  'scan portfolio/ && list --projects',
  'ssh tommy@fullstack --key=id_rsa',
  'audit /cybersecurity --depth=max',
  'boot session ▸ awaiting input...',
]

export function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const typedRef = useRef<HTMLSpanElement>(null)
  const uptimeRef = useRef<HTMLSpanElement>(null)
  const latRef = useRef<HTMLSpanElement>(null)
  const yearRef = useRef<HTMLSpanElement>(null)
  const headlineRef = useRef<HTMLSpanElement>(null)
  const gateTitlesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const glyphArr = GLYPHS.split('')
    const palette = {
      head: '#a5f3fc',
      body: '#22d3ee',
      accent: '#a855f7',
      trail: 'rgba(5,6,10,0.08)',
    }
    let cols = 0
    let drops: number[] = []
    let fontSize = 16
    let W = 0
    let H = 0
    let rafId = 0
    let lastTs = 0
    const density = 1
    const speedFactor = 0.25 + 0.19 * 1.3

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth
      H = window.innerHeight
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      canvas.width = Math.floor(W * dpr)
      canvas.height = Math.floor(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      fontSize = W < 640 ? 13 : W < 1100 ? 15 : 17
      cols = Math.floor(W / fontSize)
      drops = new Array(cols).fill(0).map(() => Math.random() * -50)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (ts: number) => {
      const dt = lastTs ? (ts - lastTs) / 16.7 : 1
      lastTs = ts

      ctx.fillStyle = palette.trail
      ctx.fillRect(0, 0, W, H)

      ctx.font = `${fontSize}px "Geist Mono", monospace`
      ctx.textBaseline = 'top'

      for (let i = 0; i < cols; i++) {
        const x = i * fontSize
        const y = drops[i] * fontSize
        const active = Math.random() < 0.7 + density * 0.3

        if (active) {
          const ch = glyphArr[(Math.random() * glyphArr.length) | 0]
          if (Math.random() < 0.06) {
            ctx.fillStyle = palette.head
            ctx.shadowColor = palette.head
            ctx.shadowBlur = 10
          } else {
            ctx.fillStyle = Math.random() < 0.08 ? palette.accent : palette.body
            ctx.shadowBlur = 0
          }
          ctx.globalAlpha = 0.65 + Math.random() * 0.35
          ctx.fillText(ch, x, y)
          ctx.globalAlpha = 1
          ctx.shadowBlur = 0
        }

        drops[i] += speedFactor * dt * (0.45 + Math.random() * 0.5)

        if (y > H && Math.random() > 0.965) {
          drops[i] = -2 - Math.random() * 20
        }
      }

      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    const final = HEADLINE_TEXT
    const charArr = HEADLINE_CHARS.split('')
    const len = final.length
    let frame = 0
    const totalFrames = 60
    const settleStart = (i: number) => Math.floor((i / len) * (totalFrames - 18))
    let cancelled = false

    const step = () => {
      if (cancelled) return
      let out = ''
      let done = 0
      for (let i = 0; i < len; i++) {
        if (final[i] === ' ') {
          out += ' '
          done++
          continue
        }
        if (frame >= settleStart(i) + 14) {
          out += final[i]
          done++
        } else if (frame >= settleStart(i)) {
          out += charArr[(Math.random() * charArr.length) | 0]
        } else {
          out += ' '
        }
      }
      el.textContent = out
      if (done === len) return
      frame++
      setTimeout(step, 28)
    }
    step()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const chars = SCRAMBLE_CHARS.split('')
    const timeouts: number[] = []
    const rafs: number[] = []

    gateTitlesRef.current.forEach((el, i) => {
      if (!el) return
      const final = el.dataset.label || ''
      const run = () => {
        const queue: { to: string; start: number; end: number; char: string }[] = []
        for (let j = 0; j < final.length; j++) {
          const start = Math.floor(Math.random() * 30)
          const end = start + Math.floor(Math.random() * 30) + 15
          queue.push({ to: final[j], start, end, char: '' })
        }
        let frame = 0
        el.classList.remove('glitch')
        el.innerHTML = ''
        const update = () => {
          let out = ''
          let complete = 0
          for (let k = 0; k < queue.length; k++) {
            const q = queue[k]
            if (frame >= q.end) {
              complete++
              out += q.to
            } else if (frame >= q.start) {
              if (!q.char || Math.random() < 0.28) {
                q.char = chars[(Math.random() * chars.length) | 0]
              }
              out += `<span style="color:var(--gate-accent,#22d3ee);opacity:.85">${q.char}</span>`
            } else {
              out += ' '
            }
          }
          el.innerHTML = out
          if (complete === queue.length) return
          frame++
          rafs.push(requestAnimationFrame(update))
        }
        update()
      }
      timeouts.push(window.setTimeout(run, 350 + i * 120))
    })

    return () => {
      timeouts.forEach(clearTimeout)
      rafs.forEach(cancelAnimationFrame)
    }
  }, [])

  useEffect(() => {
    const target = typedRef.current
    if (!target) return
    let idx = 0
    let iv: number | undefined
    let outer: number | undefined
    let cancelled = false

    const typeOne = () => {
      if (cancelled) return
      const text = CMDS[idx % CMDS.length]
      let i = 0
      target.textContent = ''
      iv = window.setInterval(() => {
        target.textContent = text.slice(0, ++i)
        if (i >= text.length && iv !== undefined) {
          clearInterval(iv)
          outer = window.setTimeout(() => {
            idx++
            typeOne()
          }, 2200)
        }
      }, 30 + Math.random() * 30)
    }
    typeOne()

    return () => {
      cancelled = true
      if (iv !== undefined) clearInterval(iv)
      if (outer !== undefined) clearTimeout(outer)
    }
  }, [])

  useEffect(() => {
    const t0 = Date.now()
    if (yearRef.current) yearRef.current.textContent = String(new Date().getFullYear())
    const id = window.setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000)
      const hh = String(Math.floor(s / 3600)).padStart(2, '0')
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
      const ss = String(s % 60).padStart(2, '0')
      if (uptimeRef.current) uptimeRef.current.textContent = `${hh}:${mm}:${ss}`
      if (latRef.current) latRef.current.textContent = `${10 + Math.floor(Math.random() * 9)} ms`
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="landing-root">
      <canvas ref={canvasRef} className="landing-matrix" aria-hidden="true" />

      <main className="landing-shell">
        <header className="landing-topbar">
          <div className="landing-brand">
            <span className="landing-brand-dot" aria-hidden="true" />
            <span>
              <strong>Tommy Requillard</strong>
            </span>
            <span className="sep">/</span>
            <span className="role">Full-Stack &amp; Cybersécurité</span>
          </div>
          <div className="landing-topbar-right">
            <span className="landing-chip" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              FR / EN
            </span>
            <span className="landing-chip status">Disponible</span>
          </div>
        </header>

        <section className="landing-stage">
          <div className="landing-hero">
            <span className="landing-eyebrow">Système prêt · entrée sécurisée</span>

            <h1 className="landing-headline">
              <span className="glyph" ref={headlineRef}>
                {HEADLINE_TEXT}
              </span>
            </h1>

            <p className="landing-sublead">
              Développeur <span className="mono">Full-Stack</span> &amp; spécialiste{' '}
              <span className="mono">Cybersécurité</span>. Vingt ans de terrain, augmentés par
              l'IA et l'automatisation — du vibe coding à la DevSecOps.
            </p>

            <div className="landing-cmdline" role="status" aria-live="polite">
              <span className="prompt">tommy@matrix:~$</span>
              <span className="typed" ref={typedRef} />
              <span className="caret" aria-hidden="true" />
            </div>

            <div className="landing-cta-row">
              <Link className="landing-btn landing-btn-primary" to="/cv">
                Initialize session
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
              <Link className="landing-btn landing-btn-secondary" to="/portfolio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 21h8M12 18v3" />
                </svg>
                Voir les projets
              </Link>
              <Link className="landing-btn landing-btn-secondary" to="/contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                Prendre contact
              </Link>
            </div>
          </div>

          <nav className="landing-gates" aria-label="Sections du site">
            {GATES.map((gate, i) => (
              <Link
                key={gate.route}
                to={gate.route}
                className="landing-gate"
                data-accent={gate.accent}
              >
                <div className="landing-gate-head">
                  <span className="landing-gate-index">{gate.index}</span>
                  <span>{gate.path}</span>
                </div>
                <div className="landing-gate-icon" aria-hidden="true">
                  {gate.icon}
                </div>
                <div
                  className="landing-gate-title"
                  data-label={gate.label}
                  ref={(el) => {
                    gateTitlesRef.current[i] = el
                  }}
                >
                  <span className="glitch">▓▒░</span>
                </div>
                <div className="landing-gate-meta">
                  <span>{gate.meta}</span>
                  <span className="enter">
                    enter
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </section>

        <footer className="landing-foot">
          <div className="hud">
            <span>
              <b>NODE</b> reactwebdevcv
            </span>
            <span>
              <b>LAT</b> <span ref={latRef}>14 ms</span>
            </span>
            <span>
              <b>UPTIME</b> <span ref={uptimeRef}>00:00:00</span>
            </span>
          </div>
          <div className="ver">
            v1.0.0 · © <span ref={yearRef} /> Tommy Requillard
          </div>
        </footer>
      </main>
    </div>
  )
}
