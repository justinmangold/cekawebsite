/* global React, Container, Section, Eyebrow, Icon, Reveal */

const TESTIMONIALS = [
  {
    quote: 'Sehr zuverlässig, immer pünktlich und das Treppenhaus sieht jedes Mal aus wie neu. Mit Herrn Ceka ist die Kommunikation unkompliziert — so soll es sein.',
    name: 'M. Hartmann',
    role: 'Hausverwaltung, Hamburg-Harburg',
  },
  {
    quote: 'Wir lassen unsere Praxis seit drei Jahren von Ceka reinigen. Diskret außerhalb der Sprechzeiten, gründlich, und das Team ist wirklich nett. Klare Empfehlung.',
    name: 'Dr. K. Wendt',
    role: 'Zahnarztpraxis, Seevetal',
  },
  {
    quote: 'Was uns gefällt: feste Gesichter. Es kommen nicht ständig neue Leute, sondern dieselben — die wissen, wo was hingehört. Das macht den Unterschied.',
    name: 'S. Brandt',
    role: 'Schulleiterin, Winsen (Luhe)',
  },
];

const Testimonials = () => (
  <Section tone="white" pad="lg" id="refs">
    <Container>
      <Reveal direction="up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, marginBottom: 48 }}>
        <Eyebrow>Kundenstimmen</Eyebrow>
        <h2 style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 700,
          fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.15,
          letterSpacing: '-0.025em', color: '#14210C', margin: 0,
          maxWidth: 640, textWrap: 'balance',
        }}>
          Was unsere Kunden sagen.
        </h2>
      </Reveal>

      <div style={{
        display: 'grid', gap: 20,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}>
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} direction="up" delay={i * 100}>
          <figure style={{
            margin: 0, padding: 28, borderRadius: 20,
            background: '#F7FAF4', border: '1px solid #E2E6DE',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(s => (
                <Icon key={s} name="star" size={16} color="#4FB81E" stroke={0}/>
              ))}
            </div>
            <blockquote style={{
              margin: 0, fontFamily: 'Inter', fontSize: 16, lineHeight: 1.6,
              color: '#14210C', fontWeight: 500,
            }}>„{t.quote}"</blockquote>
            <figcaption style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#14210C' }}>{t.name}</div>
              <div style={{ fontSize: 13, color: '#5C6B55' }}>{t.role}</div>
            </figcaption>
          </figure>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

window.Testimonials = Testimonials;
