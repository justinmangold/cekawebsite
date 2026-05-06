/* global React, Container, Section, Eyebrow, Icon, Reveal */
const { useState } = React;

const FAQS = [
  {
    q: 'Wie schnell bekomme ich ein Angebot?',
    a: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen und vereinbaren einen Termin vor Ort. Das schriftliche Angebot folgt in der Regel innerhalb von zwei Werktagen nach der Besichtigung.',
  },
  {
    q: 'Ist die Besichtigung kostenpflichtig?',
    a: 'Nein. Die Besichtigung und das Angebot sind kostenlos und unverbindlich — auch dann, wenn Sie sich am Ende für einen anderen Anbieter entscheiden.',
  },
  {
    q: 'In welchem Gebiet seid ihr tätig?',
    a: 'Wir arbeiten ausschließlich im Hamburger Süden — Seevetal, Harburg, Winsen (Luhe), Buchholz und Umgebung. Kurze Wege, schnelle Reaktion.',
  },
  {
    q: 'Welche Reinigungsmittel verwendet ihr?',
    a: 'Standardmäßig setzen wir auf umweltverträgliche, biologisch abbaubare Reiniger. Auf Wunsch — etwa in Praxen — auch zertifizierte Desinfektionsmittel nach RKI-Empfehlung.',
  },
  {
    q: 'Sind eure Mitarbeiter versichert?',
    a: 'Ja. Alle Mitarbeitenden sind sozialversicherungspflichtig festangestellt — keine Subunternehmer. Der Betrieb ist vollständig haftpflichtversichert.',
  },
  {
    q: 'Wie wird abgerechnet?',
    a: 'Bei regelmäßigen Aufträgen vereinbaren wir eine feste Monatspauschale. Bei einmaligen Sonderreinigungen bekommen Sie vorab ein Festpreisangebot. Keine versteckten Kosten.',
  },
  {
    q: 'Können wir kurzfristig einen Termin bekommen?',
    a: 'Häufig ja — gerade bei Sonderreinigungen, etwa nach Renovierungen oder Wasserschäden, finden wir oft kurzfristig einen Termin. Rufen Sie uns einfach an.',
  },
];

const Item = ({ q, a, open, onToggle }) => (
  <div style={{
    borderBottom: '1px solid #E2E6DE',
  }}>
    <button onClick={onToggle}
      aria-expanded={open}
      style={{
        width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
        textAlign: 'left', padding: '22px 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        fontFamily: 'Inter', fontSize: 17, fontWeight: 600, color: '#14210C',
      }}>
      <span>{q}</span>
      <span style={{
        flex: '0 0 auto', width: 32, height: 32, borderRadius: 999,
        background: open ? '#369507' : '#EAF7E0',
        color: open ? '#fff' : '#369507',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 220ms cubic-bezier(.2,.7,.2,1)',
        transform: open ? 'rotate(45deg)' : 'rotate(0)',
        fontSize: 20, lineHeight: '32px', fontWeight: 400,
      }}>+</span>
    </button>
    <div style={{
      maxHeight: open ? 400 : 0, overflow: 'hidden',
      transition: 'max-height 320ms cubic-bezier(.2,.7,.2,1)',
    }}>
      <p style={{
        margin: 0, paddingBottom: 22, paddingRight: 56,
        fontFamily: 'Inter', fontSize: 15.5, lineHeight: 1.6, color: '#5C6B55',
      }}>{a}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <Section tone="alt" pad="lg" id="faq">
      <Container narrow>
        <Reveal direction="up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, marginBottom: 40 }}>
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 700,
            fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.15,
            letterSpacing: '-0.025em', color: '#14210C', margin: 0,
          }}>
            Antworten auf das, was Sie wissen wollen.
          </h2>
        </Reveal>
        <Reveal direction="up" delay={120}>
          {FAQS.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} open={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}/>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
};

window.FAQ = FAQ;
