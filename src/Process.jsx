/* global React, Container, Section, Eyebrow, Icon, Reveal */

const STEPS = [
  { num: '01', title: 'Anfrage', desc: 'Sie kontaktieren uns telefonisch oder über das Formular — kurz schildern, worum es geht.' },
  { num: '02', title: 'Termin vor Ort', desc: 'Wir kommen zu Ihnen, schauen uns die Räume an und besprechen Ihre Wünsche persönlich.' },
  { num: '03', title: 'Festes Angebot', desc: 'Sie bekommen ein klares, schriftliches Angebot — kostenlos, unverbindlich, ohne Überraschungen.' },
  { num: '04', title: 'Saubere Arbeit', desc: 'Unser geschultes Team startet zum vereinbarten Termin. Wir bleiben Ihre festen Ansprechpartner.' },
];

const Process = () => (
  <Section tone="tint" pad="lg" id="process">
    <Container>
      <Reveal direction="up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, marginBottom: 56 }}>
        <Eyebrow>So arbeiten wir</Eyebrow>
        <h2 style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 700,
          fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.15,
          letterSpacing: '-0.025em', color: '#14210C', margin: 0,
          maxWidth: 640, textWrap: 'balance',
        }}>
          Vier Schritte. Keine Überraschungen.
        </h2>
      </Reveal>

      <div style={{
        display: 'grid', gap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      }}>
        {STEPS.map((s, i) => (
          <Reveal key={s.num} direction="up" delay={i * 100}>
          <div style={{
            position: 'relative',
            background: '#fff', borderRadius: 20, padding: 28,
            border: '1px solid #C2E5A8',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <div style={{
              fontFamily: 'Inter', fontSize: 13, fontWeight: 700,
              color: '#369507', letterSpacing: '0.08em',
            }}>{s.num}</div>
            <div style={{
              fontFamily: 'Inter', fontSize: 19, fontWeight: 600,
              color: '#14210C',
            }}>{s.title}</div>
            <div style={{
              fontFamily: 'Inter', fontSize: 14.5, lineHeight: 1.55, color: '#5C6B55',
            }}>{s.desc}</div>
            {i < STEPS.length - 1 && (
              <div style={{
                position: 'absolute', right: -14, top: '50%', transform: 'translateY(-50%)',
                color: '#4FB81E', zIndex: 2, background: '#EAF7E0',
                borderRadius: 999, padding: 4,
              }} className="ceka-process-arrow">
                <Icon name="arrowRight" size={16}/>
              </div>
            )}
          </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

window.Process = Process;
