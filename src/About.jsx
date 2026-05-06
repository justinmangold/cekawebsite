/* global React, Container, Section, Eyebrow, Icon, Reveal */

const About = ({ tweaks = {} }) => {
  const wireframe = tweaks.wireframe;
  return (
    <Section tone="white" pad="lg" id="about">
      <Container>
        <div className="ceka-about-grid" style={{
          display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center',
        }}>
          <Reveal direction="left" style={{ position: 'relative' }}>
          <div className="ceka-about-image" style={{
            position: 'relative', aspectRatio: '1/1',
            borderRadius: 24, overflow: 'hidden',
            background: '#EAF7E0',
            boxShadow: '0 30px 60px rgba(20, 33, 12, 0.12), 0 6px 16px rgba(20, 33, 12, 0.06)',
          }}>
            {!wireframe ? (
              <img src="images/team-portrait.png" alt="Mitarbeiter Ceka Reinigungs Profis"
                   style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            ) : (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(45deg, #EAF7E0, #EAF7E0 10px, #D6EFC2 10px, #D6EFC2 20px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Inter', color: '#5C6B55', fontWeight: 600,
              }}>Team-Bild</div>
            )}
          </div>
          </Reveal>

          <Reveal direction="right">
            <Eyebrow>Über uns</Eyebrow>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 700,
              fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.15,
              letterSpacing: '-0.025em', color: '#14210C', margin: '12px 0 18px',
              textWrap: 'balance',
            }}>
              Aus Seevetal.<br/>Mit Handschlag.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{
                fontFamily: 'Inter', fontSize: 17, lineHeight: 1.6, color: '#14210C', margin: 0,
              }}>
                <strong>CEKA Reinigungsprofis</strong> ist ein inhabergeführter Reinigungsbetrieb
                aus Seevetal, südlich von Hamburg. Geführt wird das Unternehmen von
                Julien Ceka — der jeden Auftrag persönlich begutachtet, bevor wir ein Angebot machen.
              </p>
              <p style={{
                fontFamily: 'Inter', fontSize: 16, lineHeight: 1.6, color: '#5C6B55', margin: 0,
              }}>
                Wir arbeiten mit einem festen, geschulten Team. Keine ständig wechselnden
                Subunternehmer, keine versteckten Kosten. Stattdessen: feste Ansprechpartner,
                klare Absprachen und die Sorgfalt eines kleinen Betriebs, der seine Kunden kennt.
              </p>

              <div className="ceka-about-stats" style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 8,
              }}>
                {[
                  { num: '15+', label: 'Jahre Erfahrung im\nHamburger Süden' },
                  { num: '120+', label: 'Betreute Objekte\n in der Region' },
                  { num: '100%', label: 'Festangestelltes,\ngeschultes Team' },
                ].map(s => (
                  <div key={s.num} style={{
                    padding: '20px 18px', borderRadius: 16,
                    background: '#F7FAF4', border: '1px solid #E2E6DE',
                  }}>
                    <div style={{
                      fontFamily: 'Inter', fontSize: 30, fontWeight: 700,
                      color: '#369507', letterSpacing: '-0.02em', lineHeight: 1,
                    }}>{s.num}</div>
                    <div style={{
                      fontFamily: 'Inter', fontSize: 13, color: '#5C6B55',
                      marginTop: 8, whiteSpace: 'pre-line', lineHeight: 1.4,
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

window.About = About;
