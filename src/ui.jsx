/* global React */
const { useState, useEffect } = React;

/* ============ Lucide-style line icons ============ */
const Icon = ({ name, size = 20, stroke = 1.75, color = 'currentColor', style = {} }) => {
  const paths = {
    spray: <><path d="M14 4V2h-4v2H7v3h10V4h-3Z"/><path d="M7 7h10v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V7Z"/><path d="M12 13v9"/></>,
    window: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18"/></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></>,
    stethoscope: <><path d="M11 2v8a4 4 0 0 1-4 4H5"/><path d="M11 2H7v6"/><circle cx="20" cy="10" r="2"/><path d="M11 14a4 4 0 0 0 8 0V6"/></>,
    sparkles: <><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></>,
    trash: <><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></>,
    school: <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7 3 3 6 3s6-1.3 6-3v-5"/></>,
    container: <><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M6 6V4M10 6V4M14 6V4M18 6V4M2 12h20"/></>,
    arrowRight: <><path d="M5 12h14M12 5l7 7-7 7"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    check: <path d="m20 6-11 11-5-5"/>,
    leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c.81 4.08.79 8.07-.6 11.1-1.6 3.5-4.8 5.7-8.6 5.94Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="M18 6 6 18M6 6l12 12"/></>,
    star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths[name] || null}
    </svg>
  );
};

/* ============ Button ============ */
const Button = ({ variant = 'primary', size = 'md', children, icon, iconRight, onClick, type = 'button', style = {} }) => {
  const [hover, setHover] = useState(false);
  // All buttons share a fixed 55px height (per design system rule).
  const sizes = {
    sm:   { fontSize: 14, padding: '0 18px', radius: 10,  height: 55 },
    md:   { fontSize: 15, padding: '0 22px', radius: 12,  height: 55 },
    lg:   { fontSize: 16, padding: '0 26px', radius: 14,  height: 55 },
    pill: { fontSize: 16, padding: '0 28px', radius: 999, height: 55 },
  };
  const s = sizes[size];
  const variants = {
    primary: {
      background: hover ? '#2C7B05' : '#369507',
      color: '#fff',
      border: 'none',
      boxShadow: '0 8px 18px rgba(54, 149, 7, 0.22)',
    },
    accent: {
      background: hover ? '#43A018' : '#4FB81E',
      color: '#fff',
      border: 'none',
    },
    secondary: {
      background: hover ? '#F7FAF4' : '#fff',
      color: '#14210C',
      border: '1px solid #E2E6DE',
    },
    ghost: {
      background: hover ? '#EAF7E0' : 'transparent',
      color: '#369507',
      border: 'none',
    },
    onDark: {
      background: hover ? '#fff' : 'rgba(255,255,255,0.95)',
      color: '#225F04',
      border: 'none',
    },
  };
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 600,
        fontSize: s.fontSize, padding: s.padding, borderRadius: s.radius,
        height: s.height, lineHeight: 1,
        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
        transition: 'all 140ms cubic-bezier(.2,.7,.2,1)',
        ...variants[variant], ...style,
      }}>
      {icon && <Icon name={icon} size={18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </button>
  );
};

/* ============ Layout primitives ============ */
const Container = ({ children, narrow, style = {} }) => (
  <div style={{
    maxWidth: narrow ? 720 : 1200, margin: '0 auto',
    padding: '0 clamp(24px, 4vw, 48px)', ...style,
  }}>{children}</div>
);

const Section = ({ tone = 'white', pad = 'lg', children, style = {}, id }) => {
  const tones = {
    white: { background: '#fff' },
    tint:  { background: '#EAF7E0' },
    alt:   { background: '#F7FAF4' },
    primary: { background: '#369507', color: '#fff' },
    dark:  { background: '#14210C', color: '#fff' },
  };
  const pads = {
    md: 'clamp(48px, 8vw, 80px) 0',
    lg: 'clamp(64px, 10vw, 112px) 0',
  };
  return (
    <section id={id} style={{ padding: pads[pad], ...tones[tone], ...style }}>
      {children}
    </section>
  );
};

const Eyebrow = ({ children, style = {} }) => (
  <div style={{
    fontSize: 12, fontWeight: 600, color: '#4FB81E',
    letterSpacing: '0.12em', textTransform: 'uppercase', ...style,
  }}>{children}</div>
);

/* ============ Scroll reveal ============ */
const Reveal = ({ children, direction = 'up', delay = 0, style = {}, className = '' }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const cls = {
    up:    'ceka-reveal',
    left:  'ceka-reveal-left',
    right: 'ceka-reveal-right',
    fade:  'ceka-reveal-fade',
    scale: 'ceka-reveal-scale',
  }[direction] || 'ceka-reveal';
  return (
    <div ref={ref} className={`${cls}${visible ? ' visible' : ''} ${className}`}
         style={{ animationDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
};

Object.assign(window, { Icon, Button, Container, Section, Eyebrow, Reveal });
