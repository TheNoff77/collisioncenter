import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Crosshair,
  Gauge,
  Instagram,
  Menu,
  MessageCircle,
  MoveHorizontal,
  Sparkles,
  Star,
  Target,
  Truck,
  X,
} from "lucide-react";

const WHATSAPP = "573133820337";
const DEFAULT_MESSAGE = "Hola, me interesa cotizar un servicio de latonerÃ­a/peritaje para mi vehÃ­culo.";
const whatsapp = (message = DEFAULT_MESSAGE) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const navItems = [
  ["Servicios", "#servicios"],
  ["Antes y DespuÃ©s", "#casos"],
  ["Flotas B2B", "#flotas"],
  ["Cotizador", "#cotizador"],
  ["Contacto", "#contacto"],
];

const services = [
  { number: "01", icon: Sparkles, title: "LatonerÃ­a + pintura al horno", text: "Acabados OEM, igualaciÃ³n computarizada y procesos de cabina para devolverle la lÃ­nea exacta a su vehÃ­culo." },
  { number: "02", icon: Crosshair, title: "Peritaje tÃ©cnico certificado", text: "DiagnÃ³stico claro, avalÃºo vehicular y trazabilidad para decisiones seguras, aseguradoras y compraventas." },
  { number: "03", icon: Gauge, title: "MecÃ¡nica de precisiÃ³n 4x4", text: "DiagnÃ³stico electrÃ³nico y mantenimiento especializado para Toyota, Ford y vehÃ­culos de trabajo." },
  { number: "04", icon: Truck, title: "Flotas corporativas", text: "Convenios para petroleras y agroindustria, facturaciÃ³n electrÃ³nica y control de tiempos de entrega." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [beforeAfter, setBeforeAfter] = useState(54);
  const [vehicle, setVehicle] = useState("4x4");
  const [service, setService] = useState("LatonerÃ­a y pintura");
  const [damage, setDamage] = useState("Moderado");
  const [quoteReady, setQuoteReady] = useState(false);

  const quoteMessage = useMemo(
    () => `Hola, me interesa cotizar. VehÃ­culo: ${vehicle}. Servicio: ${service}. DaÃ±o: ${damage}.`,
    [vehicle, service, damage],
  );

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="container nav-bar" aria-label="NavegaciÃ³n principal">
          <a className="brand" href="#inicio" aria-label="Collision Center inicio">
            <span className="brand-mark"><span /></span>
            <span>COLLISION <b>CENTER</b></span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-mobile-cta" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          </div>
          <a className="nav-cta" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Cotizar ahora</a>
          <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menÃº" : "Abrir menÃº"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> IngenierÃ­a para volver a rodar</div>
              <h1>La precisiÃ³n no<br /><em>se improvisa.</em></h1>
              <p className="hero-lede">Taller de alto nivel especializado en colisiones fuertes, con amplias instalaciones y un equipo tÃ©cnico preparado para devolverle confianza a su vehÃ­culo.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={whatsapp()} target="_blank" rel="noreferrer">Cotizar por WhatsApp <ArrowUpRight size={17} /></a>
                <a className="btn btn-ghost" href="#casos">Ver casos de Ã©xito <ChevronRight size={17} /></a>
              </div>
              <div className="hero-social-proof"><div className="stars">â—</div><div><strong>Conozca nuestro trabajo real</strong><span>@collision_center_yopal Â· Instagram</span></div></div>
            </div>
            <div className="hero-side-note"><span>CC / 01</span><div /> <span>YOPAL Â· CASANARE</span></div>
          </div>
          <a className="scroll-cue" href="#servicios"><span>Explorar</span><ArrowDownRight size={16} /></a>
        </section>

        <section className="trust-bar"><div className="container trust-grid">
          <div className="trust-intro"><span className="section-kicker">RESPALDO QUE SE VE</span><p>MÃ¡s que reparar.<br /><strong>Devolver confianza.</strong></p></div>
          <div className="trust-item"><Star size={18} /><div><b>Alto nivel</b><small>Servicio especializado</small></div></div>
          <div className="trust-item"><Target size={18} /><div><b>Colisiones</b><small>Especialidad principal</small></div></div>
          <div className="trust-item"><Crosshair size={18} /><div><b>Amplias</b><small>Instalaciones</small></div></div>
          <div className="trust-item"><Truck size={18} /><div><b>Equipo</b><small>TÃ©cnico especializado</small></div></div>
        </div></section>

        <section id="servicios" className="section services-section"><div className="container">
          <div className="section-heading"><div><span className="section-kicker">CAPACIDAD TÃ‰CNICA</span><h2>Un estÃ¡ndar mÃ¡s<br /><em>alto.</em></h2></div><p>DespuÃ©s de una colisiÃ³n fuerte, cada detalle cuenta: combinamos instalaciones amplias, equipo tÃ©cnico y un proceso claro para que vuelva a rodar con confianza.</p></div>
          <div className="services-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="card-top"><span className="card-number">{number}</span><Icon size={23} /></div><h3>{title}</h3><p>{text}</p><a href="#cotizador" aria-label={`Cotizar ${title}`}>Conocer capacidad <ArrowUpRight size={16} /></a></article>)}</div>
        </div></section>

        <section id="casos" className="section cases-section"><div className="container cases-layout">
          <div className="cases-copy"><span className="section-kicker">EVIDENCIA VISUAL</span><h2>De impacto<br />a <em>impecable.</em></h2><p>La diferencia estÃ¡ en lo que no se nota: mediciÃ³n, preparaciÃ³n y un acabado que respeta la geometrÃ­a original.</p><div className="case-meta"><span>CASO 014 / TOYOTA 4X4</span><span>REPARACIÃ“N ESTRUCTURAL</span></div></div>
          <div className="before-after" style={{ "--split": `${beforeAfter}%` } as React.CSSProperties}>
            <img src="/images/collision-hero.jpg" alt="VehÃ­culo terminado con acabado premium" />
            <div className="before-layer"><img src="/images/collision-workshop.jpg" alt="Proceso de reparaciÃ³n automotriz" /></div>
            <div className="split-label before-label">PROCESO</div><div className="split-label after-label">RESULTADO</div><div className="split-handle" aria-hidden="true"><MoveHorizontal size={17} /></div>
            <input aria-label="Comparar proceso y resultado" className="compare-range" type="range" min="8" max="92" value={beforeAfter} onChange={(e) => setBeforeAfter(Number(e.target.value))} />
          </div>
        </div></section>

          <section id="flotas" className="section fleet-section"><div className="container fleet-layout"><div className="fleet-visual"><img src="/images/collision-workshop.jpg" alt="Amplias instalaciones de Collision Center" /><span className="visual-tag">INSTALACIONES / EQUIPO / PROCESO</span></div><div className="fleet-copy"><span className="section-kicker">UN TALLER PARA VOLVER A RODAR</span><h2>Su vehÃ­culo<br />tiene <em>respaldo.</em></h2><p>AtenciÃ³n para quienes necesitan un proceso serio despuÃ©s de una colisiÃ³n: espacio, equipo tÃ©cnico y comunicaciÃ³n clara para avanzar con confianza.</p><ul className="check-list"><li><Check size={16} /> Amplias instalaciones para procesos de reparaciÃ³n</li><li><Check size={16} /> Equipo tÃ©cnico especializado en colisiones</li><li><Check size={16} /> AtenciÃ³n cercana en Yopal, Casanare</li></ul><a className="text-link" href={whatsapp("Hola, quiero conocer el proceso de atenciÃ³n para una reparaciÃ³n por colisiÃ³n.")} target="_blank" rel="noreferrer">Hablar con un asesor <ArrowUpRight size={16} /></a></div></div></section>

          <section id="cotizador" className="section quote-section"><div className="container quote-layout"><div className="quote-intro"><span className="section-kicker">COTIZADOR RÃPIDO</span><h2>CuÃ©ntenos quÃ©<br /><em>necesita.</em></h2><p>En menos de un minuto tendrÃ¡ un mensaje listo para nuestro equipo tÃ©cnico. Si puede, envÃ­enos tambiÃ©n fotos del daÃ±o por WhatsApp.</p><div className="quote-note"><Clock3 size={16} /><span>Prepare los datos de su vehÃ­culo<br /><b>Le atendemos por WhatsApp</b></span></div></div><div className="quote-card"><div className="form-step"><span>01</span><label>Tipo de vehÃ­culo</label><div className="option-grid">{["4x4", "SedÃ¡n", "CamiÃ³n liviano"].map((item) => <button key={item} className={vehicle === item ? "selected" : ""} onClick={() => setVehicle(item)}>{item}</button>)}</div></div><div className="form-step"><span>02</span><label>Servicio que necesita</label><div className="select-wrap"><select value={service} onChange={(e) => setService(e.target.value)}><option>LatonerÃ­a y pintura</option><option>ReparaciÃ³n por colisiÃ³n</option><option>Peritaje tÃ©cnico</option><option>MecÃ¡nica especializada</option></select><ChevronDown size={16} /></div></div><div className="form-step"><span>03</span><label>Nivel de daÃ±o</label><div className="option-grid damage-grid">{["Leve", "Moderado", "Severo"].map((item) => <button key={item} className={damage === item ? "selected" : ""} onClick={() => setDamage(item)}>{item}</button>)}</div></div>{quoteReady && <div className="quote-success"><Check size={16} /> Mensaje listo: {vehicle} Â· {service} Â· {damage}</div>}<a className="btn btn-primary quote-btn" href={whatsapp(quoteMessage)} target="_blank" rel="noreferrer" onClick={() => setQuoteReady(true)}>Enviar datos por WhatsApp <ArrowUpRight size={17} /></a></div></div></section>

          <section id="contacto" className="contact-section"><div className="container contact-layout"><div><span className="section-kicker">VISÃTENOS EN YOPAL</span><h2>Listos para<br /><em>recibirlo.</em></h2></div><div className="contact-details"><div className="contact-line"><span>DIRECCIÃ“N</span><b>Cra. 18 #21-18<br />Yopal, Casanare</b></div><div className="contact-line"><span>HORARIO</span><b>Lunâ€”SÃ¡b Â· 7:30 amâ€”6:00 pm</b></div><div className="contact-line"><span>CONTACTO DIRECTO</span><a href="tel:+573133820337"><b>+57 313 382 0337</b> <ArrowUpRight size={16} /></a></div><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Collision+Center+Yopal+Casanare" target="_blank" rel="noreferrer">Abrir ruta en Google Maps <ArrowUpRight size={16} /></a><a className="map-link" href="https://www.instagram.com/collision_center_yopal/?hl=es" target="_blank" rel="noreferrer">Ver trabajos en Instagram <ArrowUpRight size={16} /></a></div></div></section>
      </main>

          <footer className="footer"><div className="container footer-top"><a className="brand" href="#inicio"><span className="brand-mark"><span /></span><span>COLLISION <b>CENTER</b></span></a><p>IngenierÃ­a automotriz con criterio.<br />Yopal, Casanare.</p><div className="footer-actions"><a href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a><a href="https://www.facebook.com/rotmanmartinezapolinar/?locale=es_LA" target="_blank" rel="noreferrer"><span aria-hidden="true">f</span> Facebook</a><a href="https://www.instagram.com/collision_center_yopal/?hl=es" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a></div></div><div className="container footer-bottom"><span>Â© 2026 Collision Center. Todos los derechos reservados.</span><span>DiseÃ±ado para volver a rodar.</span></div></footer>
      <a className="floating-wa" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={22} /></a>
    </div>
  );
}
