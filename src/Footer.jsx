/* global React, Container, Icon */
const { useState } = React;

const Footer = () => (
  <footer style={{
    background: '#FFFFFF',
    color: '#14210C',
    padding: '64px 0 32px',
    borderTop: '1px solid #ECEFEC',
  }}>
    <Container>
      <div className="ceka-footer-grid" style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
        marginBottom: 48,
      }}>
        <div>
          <img src="assets/ceka-logo.png" alt="Ceka Reinigungs Profis"
               style={{ height: 64, width: 'auto', marginBottom: 18 }}/>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6,
            color: '#5C6B55', margin: 0, maxWidth: 320,
          }}>
            Ihr Reinigungsdienst aus Seevetal bei Hamburg. Zuverlässig,
            geschult und umweltfreundlich — inhabergeführt von Julien Ceka.
          </p>
        </div>

        <div>
          <h4 style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#369507', margin: '0 0 16px',
          }}>Leistungen</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Unterhaltsreinigung', 'Grundreinigung', 'Treppenhausreinigung', 'Fensterreinigung'].map(l => (
              <li key={l}><a href="#services" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#14210C',
                textDecoration: 'none',
              }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#369507', margin: '0 0 16px',
          }}>Branchen</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Praxisreinigung', 'Schulreinigung', 'Sonderreinigung', 'Baucontainer'].map(l => (
              <li key={l}><a href="#services" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#14210C',
                textDecoration: 'none',
              }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#369507', margin: '0 0 16px',
          }}>Kontakt</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#14210C' }}>
              <Icon name="pin" size={16} color="#369507"/>
              <span>Beckedorfer Straße 100<br/>21218 Seevetal</span>
            </li>
            <li style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#14210C' }}>
              <Icon name="phone" size={16} color="#369507"/>
              <a href="tel:+4917631429154" style={{ color: 'inherit', textDecoration: 'none' }}>0176 31429154</a>
            </li>
            <li style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#14210C' }}>
              <Icon name="mail" size={16} color="#369507"/>
              <a href="mailto:info@ceka-reinigung.de" style={{ color: 'inherit', textDecoration: 'none' }}>info@ceka-reinigung.de</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #ECEFEC', paddingTop: 24,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#5C6B55',
        gap: 12,
      }}>
        <span>
          © 2026 CEKA Reinigungsprofis. Alle Rechte vorbehalten. &nbsp;·&nbsp; Entwicklung und Design von{' '}
          <a href="https://webbliwerk.de" target="_blank" rel="noopener noreferrer"
             style={{ color: '#369507', textDecoration: 'none' }}>
            Webbliwerk.de
          </a>
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="impressum.html" style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</a>
          <a href="datenschutz.html" style={{ color: 'inherit', textDecoration: 'none' }}>Datenschutz</a>
        </div>
      </div>
    </Container>
  </footer>
);

const CookieBanner = () => {
  const [shown, setShown] = useState(() => !localStorage.getItem('ceka-cookies'));
  if (!shown) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 16, left: 16, right: 16, zIndex: 100,
      maxWidth: 480, marginLeft: 'auto',
      background: '#fff', borderRadius: 16, padding: 20,
      boxShadow: '0 20px 40px rgba(20, 33, 12, 0.15), 0 4px 12px rgba(20, 33, 12, 0.08)',
      border: '1px solid #E2E6DE',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: '#14210C' }}>
        Diese Website nutzt Cookies
      </div>
      <div style={{ fontFamily: 'Inter', fontSize: 13.5, lineHeight: 1.5, color: '#5C6B55' }}>
        Wir verwenden nur technisch notwendige Cookies, um die Funktion der Website
        sicherzustellen. Mehr in der <a href="#" onClick={e=>e.preventDefault()} style={{ color: '#369507' }}>Datenschutzerklärung</a>.
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <button onClick={() => { localStorage.setItem('ceka-cookies', '1'); setShown(false); }}
          style={{
            fontFamily: 'Inter', fontSize: 14, fontWeight: 600,
            padding: '10px 18px', borderRadius: 10, border: 'none', cursor: 'pointer',
            background: '#369507', color: '#fff',
          }}>OK, verstanden</button>
      </div>
    </div>
  );
};

window.Footer = Footer;
window.CookieBanner = CookieBanner;
