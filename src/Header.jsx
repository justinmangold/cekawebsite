/* global React, ReactDOM, Button, Container, Icon */
const { useState, useEffect } = React;

const NAV_LINKS = [
  { label: 'Leistungen', id: 'services' },
  { label: 'Warum Ceka', id: 'why' },
  { label: 'Über uns', id: 'about' },
  { label: 'So arbeiten wir', id: 'process' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Kontakt', id: 'contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: '#ffffff',
        borderBottom: '1px solid #ECEFEC',
        boxShadow: scrolled ? '0 2px 6px rgba(20, 33, 12, 0.06)' : 'none',
        transition: 'box-shadow 220ms cubic-bezier(.2,.7,.2,1)',
      }}>
        <Container>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: 80, gap: 24,
          }}>
            <a href="#" onClick={(e) => { e.preventDefault(); goTo('home'); }}
               style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <img src="assets/ceka-logo.png" alt="Ceka Reinigungs Profis"
                   style={{ height: 64, width: 'auto' }}/>
            </a>

            <nav className="ceka-desktop-nav" style={{
              display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center',
            }}>
              {NAV_LINKS.map(l => (
                <a key={l.id} href={`#${l.id}`}
                   onClick={(e) => { e.preventDefault(); goTo(l.id); }}
                   style={{
                     fontFamily: 'Inter, sans-serif', fontSize: 14.5, fontWeight: 500,
                     color: '#14210C', textDecoration: 'none',
                     padding: '10px 12px', borderRadius: 8,
                     transition: 'background 140ms', whiteSpace: 'nowrap',
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.background = '#EAF7E0'}
                   onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="ceka-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              <a href="tel:+4917631429154"
                 style={{
                   display: 'flex', alignItems: 'center', gap: 6,
                   fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
                   color: '#14210C', textDecoration: 'none', whiteSpace: 'nowrap',
                 }}>
                <Icon name="phone" size={16} color="#369507"/>
                0176 31429154
              </a>
              <Button variant="primary" size="md" iconRight="arrowRight"
                      onClick={() => goTo('contact')}>
                Angebot anfordern
              </Button>
            </div>

            {/* Mobile burger */}
            <button onClick={() => setOpen(o => !o)} className="ceka-mobile-burger"
                    aria-label="Menü"
                    style={{
                      display: 'none', background: 'transparent', border: 'none',
                      width: 44, height: 44, borderRadius: 8, cursor: 'pointer',
                      alignItems: 'center', justifyContent: 'center', color: '#14210C',
                      flexShrink: 0,
                    }}>
              <Icon name={open ? 'close' : 'menu'} size={30}/>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer — portalled directly into body to escape all stacking contexts */}
      {open && ReactDOM.createPortal(
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 9999,
          backgroundColor: '#ffffff',
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}>
          {/* Header row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: 72, padding: '0 24px', flexShrink: 0,
            borderBottom: '1px solid #ECEFEC',
          }}>
            <img src="assets/ceka-logo.png" alt="Ceka Reinigungs Profis" style={{ height: 48, width: 'auto' }}/>
            <button onClick={() => setOpen(false)} aria-label="Schließen"
                    style={{
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      width: 44, height: 44, borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#14210C',
                    }}>
              <Icon name="close" size={24}/>
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ padding: '8px 24px', flex: 1 }}>
            {NAV_LINKS.map((l, i) => (
              <a key={l.id} href={`#${l.id}`}
                 onClick={(e) => { e.preventDefault(); goTo(l.id); }}
                 style={{
                   display: 'block',
                   fontFamily: 'Inter, sans-serif', fontSize: 24, fontWeight: 700,
                   color: '#14210C', textDecoration: 'none',
                   padding: '18px 0',
                   borderBottom: i < NAV_LINKS.length - 1 ? '1px solid #ECEFEC' : 'none',
                   letterSpacing: '-0.02em',
                 }}>{l.label}</a>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div style={{ padding: '24px 24px 40px', display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <Button variant="primary" size="lg" iconRight="arrowRight"
                    onClick={() => goTo('contact')} style={{ width: '100%', justifyContent: 'center' }}>
              Angebot anfordern
            </Button>
            <a href="tel:+4917631429154" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '14px 12px', borderRadius: 12,
              fontSize: 16, fontWeight: 600, color: '#14210C', textDecoration: 'none',
              border: '1px solid #E2E6DE',
            }}>
              <Icon name="phone" size={18} color="#369507"/> 0176 31429154
            </a>
            <a href="mailto:info@ceka-reinigung.de" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '8px 12px',
              fontSize: 14, color: '#5C6B55', textDecoration: 'none',
            }}>
              <Icon name="mail" size={16} color="#369507"/> info@ceka-reinigung.de
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

window.Header = Header;
