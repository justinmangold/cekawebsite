/* global React, Container, Section, Button, Icon, Eyebrow, Reveal */

const POINTS = [
  { icon: 'check',  title: 'Festes, geschultes Team',     desc: 'Keine wechselnden Subunternehmer — Sie kennen die Menschen, die bei Ihnen reinigen.' },
  { icon: 'leaf',   title: 'Umweltfreundliche Mittel',    desc: 'Standard sind biologisch abbaubare Reiniger und sparsamer Wassereinsatz.' },
  { icon: 'pin',    title: 'Aus Seevetal — kurze Wege',   desc: 'Wir arbeiten ausschließlich im Hamburger Süden. Schnell vor Ort, persönlich erreichbar.' },
  { icon: 'phone',  title: 'Persönlicher Ansprechpartner', desc: 'Inhaber Julien Ceka erstellt Ihr Angebot direkt vor Ort — kostenlos und unverbindlich.' },
  { icon: 'sparkles', title: 'Faire Festpreise',          desc: 'Transparente Monatsabrechnung, keine versteckten Kosten, klare Leistungsbeschreibung.' },
  { icon: 'star',   title: 'Versichert & dokumentiert',    desc: 'Vollständig haftpflichtversichert. Reinigungen werden auf Wunsch dokumentiert.' },
];

const WhyCeka = () => (
  <section style={{ background: '#14210C', color: '#fff', padding: 'clamp(64px, 10vw, 112px) 0' }} id="why">
    <Container>
      <div className="ceka-why-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'flex-start',
      }}>
        <Reveal direction="left">
          <div style={{
            fontSize: 12, fontWeight: 600, color: '#A8E08A',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>Warum Ceka</div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.1,
            letterSpacing: '-0.025em', color: '#fff', margin: '14px 0 18px',
            textWrap: 'balance',
          }}>
            Ein Familienbetrieb,<br/>kein Konzern.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55,
            color: 'rgba(255,255,255,0.72)', margin: 0, maxWidth: 460,
          }}>
            Wir reinigen Treppenhäuser, Praxen und Büros im Hamburger Süden —
            mit demselben Team, denselben Werten und einem Anspruch:
            dass Sie nichts merken, außer dass alles sauber ist.
          </p>
          <div style={{ marginTop: 28 }}>
            <Button variant="onDark" size="lg" iconRight="arrowRight"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
              Jetzt Angebot anfordern
            </Button>
          </div>
        </Reveal>

        <div className="ceka-why-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {POINTS.map((p, i) => (
            <Reveal key={i} direction="up" delay={i * 70}>
            <div style={{
              padding: '22px 22px',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: '#369507', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={p.icon} size={20}/>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Inter', fontSize: 15, fontWeight: 600,
                  color: '#fff', marginBottom: 4,
                }}>{p.title}</div>
                <div style={{
                  fontFamily: 'Inter', fontSize: 13.5, lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.62)',
                }}>{p.desc}</div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

window.WhyCeka = WhyCeka;
