/* global React, Button, Container, Section, Eyebrow, Icon, SERVICES */
const { useState } = React;

const Field = ({ label, children, help, error }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <span style={{
      fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: '#14210C',
    }}>{label}</span>
    {children}
    {(help || error) && (
      <span style={{
        fontFamily: 'Inter, sans-serif', fontSize: 12,
        color: error ? '#A8442A' : '#5C6B55',
      }}>{error || help}</span>
    )}
  </label>
);

const inputStyle = (error, focus) => ({
  fontFamily: 'Inter, sans-serif', fontSize: 15,
  padding: '12px 14px', borderRadius: 10,
  border: `1px solid ${error ? '#A8442A' : focus ? '#4FB81E' : '#E2E6DE'}`,
  background: '#fff', color: '#14210C', outline: 'none',
  boxShadow: focus && !error ? '0 0 0 3px rgba(79, 184, 30, 0.15)' : 'none',
  transition: 'all 140ms', width: '100%',
});

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: 'Treppenhausreinigung',
    address: '', message: '', accept: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focus, setFocus] = useState(null);

  const update = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: null })); };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Bitte Namen angeben.';
    if (!form.email.match(/.+@.+\..+/)) errs.email = 'Bitte gültige E-Mail.';
    if (!form.phone.trim()) errs.phone = 'Bitte Telefonnummer angeben.';
    if (!form.accept) errs.accept = 'Bitte Datenschutz akzeptieren.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <Section tone="white" pad="lg" id="contact">
      <Container>
        <div className="ceka-contact-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'flex-start',
        }}>
          {/* Left: contact info card */}
          <div>
            <Eyebrow>Angebot anfordern</Eyebrow>
            <h2 style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 700,
              fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.1,
              letterSpacing: '-0.025em', color: '#14210C', margin: '12px 0 20px',
              textWrap: 'balance',
            }}>
              Kostenlos &amp; unverbindlich — direkt vor Ort.
            </h2>
            <p style={{
              fontFamily: 'Inter', fontSize: 17, lineHeight: 1.6, color: '#5C6B55', margin: '0 0 28px',
            }}>
              Schildern Sie uns kurz Ihr Anliegen. Wir melden uns innerhalb von
              24 Stunden und vereinbaren einen Termin zur Besichtigung.
            </p>

            <div style={{
              padding: 24, borderRadius: 16, background: '#F7FAF4',
              border: '1px solid #E2E6DE',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 auto', width: 36, height: 36, borderRadius: 10, background: '#EAF7E0', color: '#369507', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="phone" size={18}/>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#5C6B55' }}>Mobil</div>
                  <a href="tel:+4917631429154" style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: '#14210C', textDecoration: 'none' }}>0176 31429154</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 auto', width: 36, height: 36, borderRadius: 10, background: '#EAF7E0', color: '#369507', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="mail" size={18}/>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#5C6B55' }}>E-Mail</div>
                  <a href="mailto:info@ceka-reinigung.de" style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: '#14210C', textDecoration: 'none' }}>info@ceka-reinigung.de</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 auto', width: 36, height: 36, borderRadius: 10, background: '#EAF7E0', color: '#369507', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="pin" size={18}/>
                </div>
                <div>
                  <div style={{ fontSize: 13, color: '#5C6B55' }}>Adresse</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 15, color: '#14210C', lineHeight: 1.5 }}>
                    CEKA Reinigungsprofis<br/>
                    Beckedorfer Straße 100<br/>
                    21218 Seevetal
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: '16px 20px', borderRadius: 12, background: '#EAF7E0', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Icon name="check" size={18} color="#369507" style={{ marginTop: 3, flex: '0 0 auto' }}/>
              <div style={{ fontSize: 14, color: '#14210C', lineHeight: 1.5 }}>
                <strong>Antwort innerhalb von 24 Stunden.</strong>{' '}
                <span style={{ color: '#5C6B55' }}>An Werktagen rufen wir tagsüber zurück.</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          {submitted ? (
            <div style={{
              background: '#fff', borderRadius: 24, padding: 'clamp(28px, 4vw, 48px)',
              border: '1px solid #C2E5A8',
              boxShadow: '0 6px 18px rgba(20, 33, 12, 0.06)',
              textAlign: 'center', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 16,
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: 999, background: '#EAF7E0',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#369507',
              }}>
                <Icon name="check" size={36} stroke={2.25}/>
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 28, color: '#14210C', margin: 0, letterSpacing: '-0.02em' }}>
                Vielen Dank, {form.name.split(' ')[0]}!
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.55, color: '#5C6B55', margin: 0, maxWidth: 460 }}>
                Wir melden uns innerhalb von 24 Stunden bei Ihnen unter
                {' '}<strong style={{ color: '#14210C' }}>{form.email}</strong>.
              </p>
              <Button variant="ghost" size="md" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: 'Treppenhausreinigung', address: '', message: '', accept: false }); }}>
                Weitere Anfrage stellen
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} style={{
              background: '#fff', borderRadius: 24, padding: 'clamp(24px, 3.5vw, 40px)',
              border: '1px solid #E2E6DE',
              boxShadow: '0 6px 18px rgba(20, 33, 12, 0.06), 0 2px 4px rgba(20, 33, 12, 0.04)',
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <div className="ceka-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Field label="Name *" error={errors.name}>
                  <input value={form.name} onChange={e => update('name', e.target.value)}
                         onFocus={() => setFocus('name')} onBlur={() => setFocus(null)}
                         style={inputStyle(errors.name, focus === 'name')}
                         placeholder="Anna Müller"/>
                </Field>
                <Field label="E-Mail *" error={errors.email}>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)}
                         onFocus={() => setFocus('email')} onBlur={() => setFocus(null)}
                         style={inputStyle(errors.email, focus === 'email')}
                         placeholder="anna@beispiel.de"/>
                </Field>
              </div>
              <div className="ceka-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Field label="Telefon *" error={errors.phone} help="Wir rufen tagsüber zurück.">
                  <input value={form.phone} onChange={e => update('phone', e.target.value)}
                         onFocus={() => setFocus('phone')} onBlur={() => setFocus(null)}
                         style={inputStyle(errors.phone, focus === 'phone')}
                         placeholder="0176 1234 5678"/>
                </Field>
                <Field label="Leistung">
                  <select value={form.service} onChange={e => update('service', e.target.value)}
                          onFocus={() => setFocus('service')} onBlur={() => setFocus(null)}
                          style={inputStyle(false, focus === 'service')}>
                    {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Anschrift des Objekts">
                <input value={form.address} onChange={e => update('address', e.target.value)}
                       onFocus={() => setFocus('address')} onBlur={() => setFocus(null)}
                       style={inputStyle(false, focus === 'address')}
                       placeholder="Hauptstraße 12, 21218 Seevetal"/>
              </Field>
              <Field label="Ihr Anliegen" help="Räume, Häufigkeit, besondere Wünsche.">
                <textarea value={form.message} onChange={e => update('message', e.target.value)}
                          onFocus={() => setFocus('message')} onBlur={() => setFocus(null)}
                          style={{ ...inputStyle(false, focus === 'message'), minHeight: 120, resize: 'vertical', fontFamily: 'inherit' }}
                          placeholder="Z. B. Treppenhaus mit 4 Etagen, wöchentliche Reinigung gewünscht."/>
              </Field>

              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="checkbox" checked={form.accept}
                       onChange={e => update('accept', e.target.checked)}
                       style={{ width: 18, height: 18, accentColor: '#369507', marginTop: 2, flex: '0 0 auto' }}/>
                <span style={{ fontSize: 14, color: '#5C6B55', lineHeight: 1.5 }}>
                  Ich akzeptiere die <a href="#" onClick={e=>e.preventDefault()} style={{ color: '#369507' }}>Datenschutzerklärung</a> und
                  bin einverstanden, dass meine Anfrage zur Bearbeitung gespeichert wird.
                  {errors.accept && <span style={{ color: '#A8442A', display: 'block', marginTop: 4 }}>{errors.accept}</span>}
                </span>
              </label>

              <div className="ceka-contact-submit" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                <Button variant="primary" size="lg" type="submit" iconRight="arrowRight">
                  Anfrage absenden
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
};

window.Contact = Contact;
