/* global React, ReactDOM, Header, Hero, Services, WhyCeka, About, Process, Testimonials, FAQ, Contact, Footer, CookieBanner, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor, TweakText */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "fullbleed",
  "heroHeadline": "Professionelle\nReinigung.\nAuf den Punkt.",
  "primary": "#369507",
  "wireframe": false
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--ceka-primary', tweaks.primary || '#369507');
  }, [tweaks.primary]);

  return (
    <>
      <Header/>
      <main>
        <Hero tweaks={tweaks} setTweak={setTweak}/>
        <Services tweaks={tweaks}/>
        <WhyCeka tweaks={tweaks}/>
        <About tweaks={tweaks}/>
        <Process tweaks={tweaks}/>
<FAQ tweaks={tweaks}/>
        <Contact tweaks={tweaks}/>
      </main>
      <Footer/>
      <CookieBanner/>

      <TweaksPanel>
        <TweakSection label="Hero"/>
        <TweakRadio
          label="Layout"
          value={tweaks.heroVariant}
          options={['split', 'fullbleed']}
          onChange={(v) => setTweak('heroVariant', v)}
        />
        <TweakText
          label="Headline"
          value={tweaks.heroHeadline}
          onChange={(v) => setTweak('heroHeadline', v)}
        />
        <TweakSection label="Look"/>
        <TweakColor
          label="Akzent"
          value={tweaks.primary}
          onChange={(v) => setTweak('primary', v)}
        />
        <TweakToggle
          label="Wireframe"
          value={!!tweaks.wireframe}
          onChange={(v) => setTweak('wireframe', v)}
        />
      </TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
