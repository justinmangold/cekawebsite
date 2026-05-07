/* global React, Container, Section, Eyebrow, Icon, Reveal */
const { useState } = React;

const SERVICES = [
  {
    icon: 'spray',       title: 'Unterhaltsreinigung',
    desc: 'Regelmäßige Pflege Ihrer Räume — täglich, wöchentlich oder nach Plan. Damit Sie sich um Ihr Geschäft kümmern können.',
    bullets: ['Büros & Verwaltungen', 'Nach festem Reinigungsplan', 'Inkl. Sanitär & Teeküche'],
  },
  {
    icon: 'sparkles',    title: 'Grundreinigung',
    desc: 'Tiefenreinigung für Böden, Fugen und alle Flächen — wenn es richtig sauber werden soll.',
    bullets: ['Maschinelle Bodenpflege', 'Kalk- & Fettentfernung', 'Vor Ein- oder Auszug'],
  },
  {
    icon: 'building',    title: 'Treppenhausreinigung',
    desc: 'Gepflegte Hausflure für Wohngebäude und Mietergemeinschaften — regelmäßig, zuverlässig, fair kalkuliert.',
    bullets: ['Wöchentlich', 'Inkl. Geländer & Briefkästen', 'Faire Monatspauschale'],
  },
  {
    icon: 'window',      title: 'Fensterreinigung',
    desc: 'Streifenfrei, mit oder ohne Rahmen — auch für große Glasfronten und schwer erreichbare Flächen.',
    bullets: ['Innen & außen', 'Mit Rahmen & Fensterbänken', 'Auch für Schaufenster'],
  },
  {
    icon: 'stethoscope', title: 'Praxisreinigung',
    desc: 'Hygiene-orientiert nach RKI-Empfehlung. Diskret und gründlich — auch außerhalb der Sprechzeiten.',
    bullets: ['Arzt- & Zahnarztpraxen', 'Wischdesinfektion', 'Diskrete Abendreinigung'],
  },
  {
    icon: 'school',      title: 'Schulreinigung',
    desc: 'Saubere Klassenräume und Sanitärbereiche für sicheren Schulalltag — schnell, leise, zuverlässig.',
    bullets: ['Klassenräume & Flure', 'Sanitäranlagen', 'Außerhalb der Unterrichtszeit'],
  },
  {
    icon: 'trash',       title: 'Sonderreinigung',
    desc: 'Nach Veranstaltungen, Wasserschäden oder Renovierung — wir packen kurzfristig an.',
    bullets: ['Bauend- & Renovierreinigung', 'Nach Veranstaltungen', 'Kurzfristig verfügbar'],
  },
  {
    icon: 'container',   title: 'Baucontainerreinigung',
    desc: 'Schnelle Reinigung von Bau- und Sanitärcontainern direkt auf der Baustelle.',
    bullets: ['Sanitärcontainer', 'Aufenthaltscontainer', 'Direkt auf der Baustelle'],
    featured: true,
  },
  {
    icon: 'building',    title: 'Wohncontainerreinigung',
    desc: 'Professionelle Reinigung von Wohncontainern — für Baustellen, temporäre Unterkünfte und Übergangsquartiere.',
    bullets: ['Wohncontainer & Unterkünfte', 'Regelmäßig oder einmalig', 'Schnell & unkompliziert'],
  },
];

const ServiceCard = ({ icon, title, desc, bullets, featured }) => {
  const [hover, setHover] = useState(false);
  const accent = '#369507';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: 'relative', background: '#fff', borderRadius: 20,
           padding: 28, overflow: 'hidden',
           display: 'flex', flexDirection: 'column', gap: 14,
           border: `1px solid ${hover ? '#C2E5A8' : '#E2E6DE'}`,
           boxShadow: hover
             ? '0 18px 36px rgba(20, 33, 12, 0.08), 0 4px 8px rgba(20, 33, 12, 0.04)'
             : '0 1px 2px rgba(15, 26, 10, 0.04)',
           transform: hover ? 'translateY(-3px)' : 'none',
           transition: 'all 220ms cubic-bezier(.2,.7,.2,1)',
         }}>
      {featured && (
        <div style={{
          position: 'absolute', top: 16, right: 16,
          fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: accent,
          background: '#EAF7E0', padding: '4px 10px', borderRadius: 999,
        }}>Schwerpunkt</div>
      )}
      <div style={{
        width: 56, height: 56, borderRadius: 16, background: '#EAF7E0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: accent,
      }}>
        <Icon name={icon} size={28}/>
      </div>
      <h3 style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 19,
        color: '#14210C', margin: '4px 0 0',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.55,
        color: '#5C6B55', margin: 0,
      }}>{desc}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {bullets.map(b => (
          <li key={b} style={{
            display: 'flex', gap: 8, alignItems: 'flex-start',
            fontFamily: 'Inter', fontSize: 13.5, color: '#14210C',
          }}>
            <Icon name="check" size={14} color={accent} style={{ marginTop: 3, flex: '0 0 auto' }}/>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => (
  <Section tone="alt" pad="lg" id="services">
    <Container>
      <Reveal direction="up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, marginBottom: 56 }}>
        <Eyebrow>Unsere Leistungen</Eyebrow>
        <h2 style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 700,
          fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.15,
          letterSpacing: '-0.02em', color: '#14210C', margin: 0,
          maxWidth: 720, textWrap: 'balance',
        }}>
          Neun Reinigungsleistungen.<br/>Ein verlässliches Team.
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.55,
          color: '#5C6B55', margin: 0, maxWidth: 580,
        }}>
          Wir betreuen Wohngebäude, Praxen, Schulen und Baustellen
          Kein Job zu klein, kein Standard zu hoch.
        </p>
      </Reveal>

      <div style={{
        display: 'grid', gap: 20,
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      }}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} direction="scale" delay={i * 60} style={{ height: '100%' }}>
            <ServiceCard {...s}/>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);

window.Services = Services;
window.SERVICES = SERVICES;
