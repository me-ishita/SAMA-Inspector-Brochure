import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import imperialLogo from '../../assets/imperial-logo.jpeg';
import samaLogo from '../../assets/sama-logo.jpeg';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'outcomes', label: 'Learning Outcomes' },
    { id: 'structure', label: 'Course Structure' },
    { id: 'projects', label: 'Projects' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'delivery', label: 'Delivery' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <img
              src={samaLogo}
              alt="SAMA"
              className="h-12 object-contain"
            />
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm transition-colors duration-200 hover:opacity-70"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img
              src={imperialLogo}
              alt="Imperial College London"
              className="h-10 object-contain"
            />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-surface-offset)',
                color: 'var(--color-text)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Programme at a Glance */}
      <section id="hero" className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start mb-16">

            {/* LEFT SIDE */}
            <div className="max-w-[720px] pt-2">

              {/* Top Label */}
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-8"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >

                {/* Premium Symbol */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(10, 53, 74, 0.08)',
                    border: '1px solid rgba(10, 53, 74, 0.12)'
                  }}
                >
                  <span
                    className="text-sm"
                    style={{
                      color: 'var(--color-primary)'
                    }}
                  >
                    ✦
                  </span>
                </div>

                <span
                  className="text-xs md:text-sm uppercase tracking-[0.22em]"
                  style={{
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '500'
                  }}
                >
                  SAMA Academy × Imperial College London
                </span>

              </div>

              {/* Heading */}
              <div className="mb-6">

                <h1
                  className="text-[3.5rem] md:text-[4.1rem] leading-[0.9] mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.07em',
                    fontWeight: '700'
                  }}
                >
                  SAMA <br />
                  INSPECTOR
                </h1>
                <h2
                  className="text-[1.1rem] md:text-[1.35rem] uppercase leading-[1.5]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.14em',
                    fontWeight: '400'
                  }}
                >
                  Supervisory & Skilled <br className="hidden md:block" />
                  Person Programme
                </h2>

              </div>

              {/* Description */}
              <div className="max-w-[650px] mb-8">

                <p
                  className="text-[1.18rem] leading-[1.8]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text)',
                    fontWeight: '400'
                  }}
                >
                  A detailed 6 week part-time training course for inspectors,
                  combining core inspection skills, Bank of England (BOE)-inspired
                  supervisory methods, skilled-person style review discipline, and
                  project-based learning.
                </p>

              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10 max-w-[620px]">

                {[
                  'Project-based',
                  'Practical simulations',
                  'Executive-ready',
                  'Practitioner led'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-full transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--color-surface-offset) 0%, rgba(255,255,255,0.04) 100%)',
                      border: '1px solid var(--color-border)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <span
                      className="text-[0.82rem] uppercase tracking-[0.16em]"
                      style={{
                        color: 'var(--color-text)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '500'
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToSection('structure')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-text-inverse)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: '500',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                View course structure
                <ChevronDown size={20} />
              </button>

            </div>

            {/* RIGHT SIDE */}
            <div id="overview" className="space-y-6 pt-1">

              <h2
                className="text-4xl mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-primary)'
                }}
              >
                Programme at a glance
              </h2>

              <div
                className="p-7 rounded-[28px] transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Duration
                </h3>

                <p style={{ color: 'var(--color-text-muted)' }}>
                  6 weeks, part-time
                </p>
              </div>

              <div
                className="p-7 rounded-[28px] transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Format
                </h3>

                <p style={{ color: 'var(--color-text-muted)' }}>
                  Live sessions, Project work, guided practice, and feedback
                </p>
              </div>

              <div
                className="p-7 rounded-[28px] transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Outcome
                </h3>

                <p style={{ color: 'var(--color-text-muted)' }}>
                  Inspectors able to plan, test, challenge, report, and escalate with confidence
                </p>
              </div>

              <div
                className="p-7 rounded-[28px] transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Certification
                </h3>

                <p style={{ color: 'var(--color-text-muted)' }}>
                  Imperial College certification awarded upon successful programme completion
                </p>
              </div>
            </div>

          </div>



          <div className="p-10 rounded-xl transition-all duration-300 hover:shadow-lg" style={{
            background: `linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-surface) 100%)`,
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
              Purpose and design
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              The course is built around the inspection and supervisory methods used in the Bank of England (BOE) environment, including risk-based supervision, on-site work, evidence testing, thematic review, and structured skilled-person style reporting. It can be delivered as a 4-week intensive or a 6-week extended format, depending on the depth of project work and assessment required.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section id="outcomes" className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
            Learning outcomes
          </h2>
          <p className="text-lg mb-12" style={{ color: 'var(--color-text-muted)', maxWidth: '700px' }}>
            By the end of the programme, participants should be able to conduct a full inspection cycle with discipline, judgement, and a strong evidence base.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Plan inspections
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Define scope, risk focus, information requests, interview plan, and expected outputs before fieldwork begins.
              </p>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Test evidence
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Use walkthroughs, file testing, sampling, and triangulation to validate whether controls are designed and operating effectively.
              </p>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Write findings
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Convert evidence into clear findings, root cause analysis, impact assessment, and practical supervisory actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section id="structure" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
            Course structure
          </h2>
          <p className="text-lg mb-12" style={{ color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            The curriculum is sequenced to create strong foundations first, then progressively increase complexity and judgement. Each teaching session is 2 hours long, with structured project tasks assigned between sessions to reinforce the learning.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Module 1: Foundations of supervision
              </h3>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Role of the inspector and supervisory mandate</li>
                <li>• Risk-based supervision and proportionality</li>
                <li>• Inspection ethics, professionalism, and judgement</li>
                <li>• How Bank of England (BOE)-style supervision uses portfolio analysis, peer review, and individual firm focus</li>
              </ul>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Module 2: Inspection planning and scoping
              </h3>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Setting objectives and scope boundaries</li>
                <li>• Building an information request list</li>
                <li>• Creating a fieldwork plan and interview schedule</li>
                <li>• Identifying material risks and likely root-cause areas</li>
              </ul>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Module 3: Fieldwork and evidence
              </h3>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Document review, sample selection, and file testing</li>
                <li>• Walkthroughs, control design, and operating effectiveness</li>
                <li>• Interview technique for senior management and control owners</li>
                <li>• Using evidence triangles and contradiction testing</li>
              </ul>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Module 4: Advanced tools and analytics
              </h3>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li>• Using dashboards and exception reports</li>
                <li>• Trend analysis across firms, products, or business units</li>
                <li>• Flagging anomalies and early warning indicators</li>
                <li>• How skilled-person style reviews define scope, technical capability, and reporting expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
            Project-based learning
          </h2>
          <p className="text-lg mb-12" style={{ color: 'var(--color-text-muted)', maxWidth: '700px' }}>
            Each participant or team completes a project that applies course methods to a realistic supervisory scenario.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', opacity: 0.3 }}>01</div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Project 1
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Prepare an inspection plan for a bank, payments institution, or fintech firm, including scope, risk areas, and evidence needs.
              </p>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', opacity: 0.3 }}>02</div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Project 2
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Conduct mock fieldwork using interview notes, documents, and test samples to identify issues and root causes.
              </p>
            </div>
            <div className="p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="text-4xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', opacity: 0.3 }}>03</div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Project 3
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Produce a supervisory report with findings, ratings, escalation rationale, and remediation actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
            Faculty and delivery partners
          </h2>
          <p className="text-lg mb-12" style={{ color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            The programme is positioned to be delivered by UK industry practitioners and Imperial College expertise, bringing together real supervisory experience with academic rigour and executive education quality.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                UK industry practitioners
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Former and current supervisory, audit, risk, compliance, and skilled-person review professionals who can teach practical inspection methods, evidence testing, report writing, and stakeholder challenge.
              </p>
            </div>
            <div className="p-10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
              background: `linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)`,
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                Imperial College
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Academic and executive-education input to sharpen analytical thinking, structured judgement, and high-quality learning design, with a premium delivery standard.
              </p>
            </div>
          </div>
          <div className="p-10 rounded-xl transition-all duration-300 hover:shadow-xl" style={{
            background: `linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-surface) 100%)`,
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
              Certification
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Participants who complete the programme requirements will be awarded an Imperial College certification, reflecting completion of the approved learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-12" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
            Suggested 6-week schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { week: 'Week 1', content: 'Inspection fundamentals, regulatory purpose, and planning mindset' },
              { week: 'Week 2', content: 'Scoping, risk assessment, and evidence request design' },
              { week: 'Week 3', content: 'Interviews, walkthroughs, and file testing methods' },
              { week: 'Week 4', content: 'Advanced challenge, analytics, and thematic review techniques' },
              { week: 'Week 5', content: 'Project clinic, report writing, and remediation design' },
              { week: 'Week 6', content: 'Capstone presentation, panel feedback, and assessment' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl flex items-start gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style={{
                background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-surface-offset) 100%)`,
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div className="text-xl font-semibold" style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-primary)',
                  minWidth: '80px'
                }}>
                  {item.week}
                </div>
                <div className="text-sm pt-0.5" style={{ color: 'var(--color-text-muted)' }}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section id="delivery" className="py-24 px-6 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <div className="max-w-5xl mb-14">

            <h2
              className="text-5xl md:text-6xl leading-none mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)',
                letterSpacing: '-0.05em'
              }}
            >
              Course delivery model
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{
                color: 'var(--color-text-muted)',
                maxWidth: '820px'
              }}
            >
              The blended format allows inspectors to learn the framework, then immediately apply it in a project environment that mirrors real supervisory work.
            </p>

          </div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 mb-8">

            {/* Left Side */}
            <div
              className="rounded-[30px] p-8 md:p-9"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.24em] mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Delivery Components
                  </p>

                  <h3
                    className="text-[2rem] leading-none"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-text)'
                    }}
                  >
                    Structured learning experience
                  </h3>
                </div>

                <div
                  className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <span
                    className="text-xl"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    ✦
                  </span>
                </div>

              </div>

              <div className="space-y-4">

                {[
                  {
                    number: '01',
                    element: 'Teaching sessions',
                    detail: 'Live sessions, once per week',
                    value: 'Focused executive learning without disrupting operations',
                    tag: 'Live Learning'
                  },
                  {
                    number: '02',
                    element: 'Project work',
                    detail: 'Practical assignment completed between sessions',
                    value: 'Applies learning to inspection reality',
                    tag: 'Applied Practice'
                  },
                  {
                    number: '03',
                    element: 'Feedback',
                    detail: 'Instructor review and coaching',
                    value: 'Strengthens judgement and report quality',
                    tag: 'Expert Coaching'
                  },
                  {
                    number: '04',
                    element: 'Assessment',
                    detail: 'Capstone inspection simulation and presentation',
                    value: 'Confirms readiness and capability',
                    tag: 'Capability Review'
                  },
                  {
                    number: '05',
                    element: 'Certification',
                    detail: 'Imperial College certification on successful completion',
                    value: 'Signals achievement and programme credibility',
                    tag: 'Recognition'
                  },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl p-5 transition-all duration-300 hover:translate-x-1"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >

                    <div className="flex gap-5">

                      <div
                        className="min-w-[54px] h-[54px] rounded-2xl flex items-center justify-center text-sm font-semibold"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                          border: '1px solid rgba(255,255,255,0.07)',
                          color: 'var(--color-primary)'
                        }}
                      >
                        {row.number}
                      </div>

                      <div className="flex-1">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">

                          <h4
                            className="text-lg"
                            style={{
                              fontFamily: 'var(--font-display)',
                              color: 'var(--color-text)'
                            }}
                          >
                            {row.element}
                          </h4>

                          <span
                            className="text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                            style={{
                              color: 'var(--color-primary)',
                              border: '1px solid rgba(0,0,0,0.06)',
                              background: 'rgba(255,255,255,0.04)'
                            }}
                          >
                            {row.tag}
                          </span>

                        </div>

                        <p
                          className="text-sm mb-1"
                          style={{ color: 'var(--color-text)' }}
                        >
                          {row.detail}
                        </p>

                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          {row.value}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* Right Side */}
            <div
              className="rounded-[30px] p-8"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-surface) 100%)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >

              <div className="mb-8">

                <span
                  className="text-[11px] uppercase tracking-[0.24em]"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Premium Positioning
                </span>

                <h3
                  className="text-[2rem] leading-none mt-3 mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-primary)'
                  }}
                >
                  What makes it relevant
                </h3>

                <p
                  className="leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  This is not a generic training course. It is designed as an executive-grade supervisory programme with a strong visual identity, practical toolset, and a clear link to real regulatory outcomes.
                </p>

              </div>

              <div className="space-y-4">

                {[
                  {
                    title: 'Premium materials',
                    desc: 'Professionally designed slides, participant workbook, templates, and project guides.'
                  },
                  {
                    title: 'Realistic casework',
                    desc: 'Scenarios based on banks, payments firms, and high-risk control environments.'
                  },
                  {
                    title: 'Direct applicability',
                    desc: 'Every module maps to an inspection task, report output, or supervisory judgement.'
                  },
                  {
                    title: 'Practitioner-led delivery',
                    desc: 'Sessions delivered by experienced industry professionals and supervisory experts.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl p-5 transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >

                    <h4
                      className="text-lg mb-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-primary)'
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {item.desc}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            <div
              className="relative overflow-hidden rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >

              <span
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{ color: 'var(--color-primary)' }}
              >
                Inspector Benefits
              </span>

              <h3
                className="text-3xl mt-3 mb-5"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)'
                }}
              >
                For inspectors
              </h3>

              <p
                className="leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Better structure, sharper questioning, stronger evidence handling, and more confident reporting.
              </p>

            </div>

            <div
              className="relative overflow-hidden rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)'
              }}
            >

              <span
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{ color: 'var(--color-primary)' }}
              >
                Organisational Benefits
              </span>

              <h3
                className="text-3xl mt-3 mb-5"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)'
                }}
              >
                For SAMA
              </h3>

              <p
                className="leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                A more consistent supervisory approach, stronger issue escalation, and better quality inspection outputs.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)'
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            © 2026 SAMA Academy. Delivered by UK industry practitioners and Imperial College expertise.
          </p>
        </div>
      </footer>
    </div>
  );
}
