/* global React, Button, Container, Icon, useTweaks */
const { useState } = React;

const Hero = ({ tweaks = {}, setTweak }) => {
  const variant = tweaks.heroVariant || 'fullbleed';
  const wireframe = tweaks.wireframe;
  const headline = tweaks.heroHeadline || 'Professionelle\nReinigung.\nAuf den Punkt.';
  const lines = headline.split('\n');
  const primary = tweaks.primary || '#369507';

  if (variant === 'fullbleed') {
    return (
      <div style={{ position: 'relative', minHeight: 'min(760px, 92vh)', overflow: 'hidden' }}>
        {!wireframe && (
          <img src="images/hero-fullbleed.png" alt=""
               style={{
                 position: 'absolute', inset: 0, width: '100%', height: '100%',
                 objectFit: 'cover',
               }}/>
        )}
        {wireframe && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(45deg, #EAF7E0, #EAF7E0 10px, #D6EFC2 10px, #D6EFC2 20px)',
          }}/>
        )}
        {/* Darkening overlay — stronger overall + left-side gradient for text legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(14,22,8,0.45)',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(14,22,8,0.62) 0%, rgba(14,22,8,0.42) 45%, rgba(14,22,8,0.12) 100%)',
        }}/>
        <Container>
          <div style={{
            position: 'relative', minHeight: 'min(720px, 88vh)',
            display: 'flex', alignItems: 'center',
            padding: 'clamp(80px, 12vw, 140px) 0',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 640, width: '100%' }}>
              <div className="ceka-hero-badge" style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                padding: '6px 14px', borderRadius: 999,
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#fff',
              }}>Reinigungsdienst aus Seevetal</div>
              <h1
                className="ceka-hero-h1"
                contentEditable={!!setTweak} suppressContentEditableWarning
                onBlur={(e) => setTweak?.('heroHeadline', e.currentTarget.innerText)}
                style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 700,
                  fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.05,
                  letterSpacing: '-0.025em', color: '#fff', margin: 0,
                  textWrap: 'balance', outline: 'none',
                }}>
                {lines.map((l, i) => (
                  <span key={i}>
                    {i === lines.length - 1
                      ? <span style={{ color: '#A8E08A' }}>{l}</span>
                      : l}
                    {i < lines.length - 1 && <br/>}
                  </span>
                ))}
              </h1>
              <p className="ceka-hero-desc" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55,
                color: 'rgba(255,255,255,0.86)', margin: 0, maxWidth: 520,
              }}>
                Vom Treppenhaus bis zur Praxis — wir reinigen zuverlässig, gründlich
                und mit umweltfreundlichen Mitteln. Angebot direkt vor Ort,
                kostenlos und unverbindlich.
              </p>
              <div className="ceka-hero-buttons ceka-hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                <Button variant="primary" size="lg" iconRight="arrowRight"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  Angebot anfordern
                </Button>
                <Button variant="onDark" size="lg"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  Leistungen ansehen
                </Button>
              </div>
              <div className="ceka-hero-tags" style={{ display: 'flex', gap: 20, marginTop: 8, flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                {['Geschultes Team', 'Faire Festpreise', 'Umweltfreundlich'].map(t => (
                  <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Icon name="check" size={16} color="#A8E08A"/> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // split variant
  return (
    <div style={{
      position: 'relative',
      background: 'radial-gradient(ellipse at 80% 10%, #EAF7E0 0%, #fff 60%)',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: -60, top: 60, opacity: 0.05, pointerEvents: 'none' }}>
        <Icon name="leaf" size={460} color={primary} stroke={1}/>
      </div>

      <Container>
        <div className="ceka-hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center',
          padding: 'clamp(64px, 9vw, 120px) 0',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{
              display: 'inline-flex', alignSelf: 'flex-start',
              fontSize: 12, fontWeight: 600, color: primary,
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>Reinigungsdienst aus Seevetal bei Hamburg</div>
            <h1
              contentEditable={!!setTweak} suppressContentEditableWarning
              onBlur={(e) => setTweak?.('heroHeadline', e.currentTarget.innerText)}
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 700,
                fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.06,
                letterSpacing: '-0.025em', color: '#14210C', margin: 0,
                textWrap: 'balance', outline: 'none',
              }}>
              {lines.map((l, i) => (
                <span key={i}>
                  {i === lines.length - 1
                    ? <span style={{ color: primary }}>{l}</span>
                    : l}
                  {i < lines.length - 1 && <br/>}
                </span>
              ))}
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55,
              color: '#5C6B55', margin: 0, maxWidth: 520,
            }}>
              Vom Treppenhaus bis zur Praxis — wir reinigen zuverlässig, gründlich
              und mit umweltfreundlichen Mitteln. Angebot direkt vor Ort,
              kostenlos und unverbindlich.
            </p>
            <div className="ceka-hero-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <Button variant="primary" size="lg" iconRight="arrowRight"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Angebot anfordern
              </Button>
              <Button variant="secondary" size="lg"
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Leistungen ansehen
              </Button>
            </div>
            <div style={{
              display: 'flex', gap: 24, marginTop: 12, flexWrap: 'wrap',
              fontSize: 14, color: '#5C6B55',
            }}>
              {['Geschultes Team', 'Faire Festpreise', 'Umweltfreundlich'].map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="check" size={16} color={primary}/> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="ceka-hero-image-wrap" style={{
            position: 'relative', aspectRatio: '4/5',
            borderRadius: 24, overflow: 'hidden',
            background: '#EAF7E0',
            boxShadow: '0 30px 60px rgba(20, 33, 12, 0.14), 0 6px 16px rgba(20, 33, 12, 0.06)',
          }}>
            {!wireframe ? (
              <img src="images/stairwell-altbau.png" alt="Frisch gereinigtes Treppenhaus"
                   style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            ) : (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(45deg, #EAF7E0, #EAF7E0 10px, #D6EFC2 10px, #D6EFC2 20px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Inter', color: '#5C6B55', fontWeight: 600,
              }}>Hero-Bild</div>
            )}
            <div style={{
              position: 'absolute', left: 20, bottom: 20, right: 20,
              background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)',
              borderRadius: 14, padding: '14px 18px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 8px 20px rgba(20,33,12,0.12)',
            }}>
              <div style={{ display: 'flex', gap: 1 }}>
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="star" size={16} color="#4FB81E" stroke={0}/>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#14210C' }}>
                  Persönlich. Vor Ort. Aus Seevetal.
                </div>
                <div style={{ fontSize: 12, color: '#5C6B55' }}>
                  Inhaber Julien Ceka erstellt Ihr Angebot persönlich.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

window.Hero = Hero;
