// ── TRADUCCIONES ──
const t = {
  es: {
    'planeta.arte':        'Arte',
    'planeta.videojuegos': 'Videojuegos',
    'planeta.escritos':    'Escritos',
    'planeta.resenas':     'Reseñas',
    'planeta.contacto':    'Contacto',
    'btn.volver':          'Volver al sistema',
    'tag.narrativa':       'Narrativa',
    'tag.personajes':      'Diseño de personajes',
    'contacto.email':      'Email',
    'panel.contacto':      'Redes y contacto',
    'copy.copiado':        '¡Copiado!',
    'bio.p1': 'Desarrollador de videojuegos con foco en arte y narrativa. Me muevo entre el diseño de personajes, la construcción de mundos, el guion y la narrativa interactiva — integrando todo con la implementación técnica de interfaces, sistemas de diálogo y mecánicas de juego.',
    'bio.p2': 'Trabajo tanto en entornos 2D (pixel art) como 3D, y participé en proyectos completos desde la concepción creativa hasta la implementación final en Unity, Unreal Engine y Ren\'Py. Estudiante de Diseño e Ingeniería en Videojuegos en UADE (graduación 2026).',
    'card.onna.rol':   'UI/UX · Narrativa',
    'card.onna.desc':  'Roguelike isométrico de acción donde la salud es tiempo. Derrota enemigos para absorber energía vital y sobrevivir runs de minutos intensos.',
    'card.alice.rol':  'Arte · Narrativa',
    'card.alice.desc': 'Novela visual thriller donde interpretás a un psicólogo policial investigando múltiples asesinatos. ¿Alice es culpable o también una víctima?',
    'card.sands.rol':  'Arte · Narrativa',
    'card.sands.desc': 'Horror de supervivencia que mezcla el Antiguo Egipto con el Viejo Oeste. Un grupo de mercenarios explora templos mientras enfrenta criaturas sobrenaturales.',
    'panel.arte':        'Ilustraciones, diseños y trabajos visuales',
    'panel.videojuegos': 'Proyectos y juegos en los que participé',
    'panel.cv':          'Descargar CV',
    'planeta.cv':        'CV',
    'lightbox.ver':      'Ver en itch.io →',
    'arte.crimson.desc':  'Simulación de una PDA para un juego de survival horror en desarrollo. Recrea la estética de las viejas pantallas CRT, con efecto retro.',
    'arte.onnaui.desc':   'Interfaces pensadas para crear una estética steampunk mezclada con partes alienígenas, logrando una combinación entre lo metálico y lo orgánico. Todo hecho en pixel art.',
    'arte.pixelchar.desc':'Asset pack con un personaje jugador y sus animaciones en pixel art. Incluye sprite sheets para ataques y animaciones generales.',
    'arte.enemies.desc':  'Pack de enemigos en pixel art. Incluye bandidos y druidas con clases: Warrior, Archer, Cavalry, Levy, Spearman. Animaciones de idle, ataque y daño.',
    'arte.charrpg.desc':  'Pack de personajes para juegos de rol en pixel art. Incluye guerreros, arqueros, caballería, lanceros y sus variantes con animaciones básicas.',
    'arte.testzone.desc': 'Colección de assets 2D en pixel art para uso como placeholders en desarrollo. Ideal para testear mecánicas y diseño de niveles antes del arte final.',
  },
  en: {
    'planeta.arte':        'Art',
    'planeta.videojuegos': 'Video Games',
    'planeta.escritos':    'Writing',
    'planeta.resenas':     'Reviews',
    'planeta.contacto':    'Contact',
    'btn.volver':          'Back to system',
    'tag.narrativa':       'Narrative',
    'tag.personajes':      'Character Design',
    'contacto.email':      'Email',
    'panel.contacto':      'Socials and contact',
    'copy.copiado':        'Copied!',
    'bio.p1': 'Game developer with a strong artistic and narrative focus. I work across character design, worldbuilding, scriptwriting, and interactive storytelling — integrating it all with the technical implementation of interfaces, dialogue systems, and gameplay mechanics.',
    'bio.p2': 'Experienced in both 2D (pixel art) and 3D environments, contributing to full-cycle projects from creative conception to implementation in Unity, Unreal Engine, and Ren\'Py. Currently studying Video Game Design & Engineering at UADE (graduating 2026).',
    'card.onna.rol':   'UI/UX · Narrative',
    'card.onna.desc':  'Fast-paced isometric action roguelike where health functions as time, constantly draining. Defeat enemies to absorb vital energy and survive intense runs lasting minutes.',
    'card.alice.rol':  'Art · Narrative',
    'card.alice.desc': 'A thriller visual novel where you play as a police psychologist investigating multiple murders. Is Alice guilty — or just another victim?',
    'card.sands.rol':  'Art · Narrative',
    'card.sands.desc': 'A survival horror experience blending ancient Egyptian and Wild West aesthetics. A mercenary band explores temples while confronting supernatural creatures.',
    'panel.arte':        'Illustrations, designs and visual work',
    'panel.videojuegos': 'Projects and games I worked on',
    'panel.cv':          'Download CV',
    'planeta.cv':        'CV',
    'lightbox.ver':      'View on itch.io →',
    'arte.crimson.desc':  'A PDA simulation for a survival horror game in development. It recreates the aesthetic of old CRT screens, with a retro effect.',
    'arte.onnaui.desc':   'Interfaces designed to create a steampunk aesthetic blended with alien elements, achieving a mix between the metallic and the organic. All made in pixel art.',
    'arte.pixelchar.desc':'Asset pack featuring a player character and its pixel art animations. Includes sprite sheets for attacks and general animations.',
    'arte.enemies.desc':  'Pixel art enemy pack. Includes bandits and druids with classes: Warrior, Archer, Cavalry, Levy, Spearman. Idle, attack and hurt animations.',
    'arte.charrpg.desc':  'Pixel art character pack for role-playing games. Includes warriors, archers, cavalry, spearmen and their variants with basic animations.',
    'arte.testzone.desc': '2D pixel art asset collection for use as placeholders during development. Ideal for testing mechanics and level design before the final art.',
  }
};

let idioma = 'en';
let lbProyecto = null;

// persistir=false al cargar: aplica el idioma sin dejarlo guardado, así el
// selector ES/EN de la intro sigue apareciendo en la primera visita
function aplicarIdioma(lang, persistir = true) {
  idioma = lang;
  if (persistir) localStorage.setItem('sheina-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.textContent = t[lang][key];
  });
  document.querySelectorAll('.lang-sw-btn').forEach(btn => {
    btn.classList.toggle('activo', btn.dataset.lang === lang);
  });
  if (lbProyecto?.descKey) {
    const el = document.getElementById('lb-desc');
    if (el) el.textContent = t[lang][lbProyecto.descKey] || '';
  }
  if (lbProyecto?.rolKey) {
    const el = document.getElementById('lb-rol');
    if (el) el.textContent = t[lang][lbProyecto.rolKey] || '';
  }
}

// ── ESTRELLAS ──
const canvas = document.getElementById('estrellas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function dibujarGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const spacing = 38;

  // Grilla de puntos
  for (let x = spacing; x < canvas.width; x += spacing) {
    for (let y = spacing; y < canvas.height; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, 0.9, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(208,221,245,0.15)';
      ctx.fill();
    }
  }

  // Algunos puntos más brillantes aleatorios
  for (let i = 0; i < 40; i++) {
    const x = pr(42 + i * 7.3) * canvas.width;
    const y = pr(42 + i * 3.7) * canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 1.3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(208,221,245,${0.3 + pr(i * 2.1) * 0.3})`;
    ctx.fill();
  }
}

function pr(seed) { const x = Math.sin(seed) * 10000; return x - Math.floor(x); }

resizeCanvas(); dibujarGrid();
window.addEventListener('resize', () => { resizeCanvas(); dibujarGrid(); });

// ── ANIMACIONES: ASTEROIDES Y COMETAS ──
const animCanvas = document.getElementById('animaciones');
const actx = animCanvas.getContext('2d');

function resizeAnimCanvas() {
  animCanvas.width = window.innerWidth;
  animCanvas.height = window.innerHeight;
}
resizeAnimCanvas();
window.addEventListener('resize', resizeAnimCanvas);

// Asteroides orbitando el centro
const asteroides = Array.from({ length: 16 }, (_, i) => ({
  angle:  (i / 16) * Math.PI * 2 + Math.random() * 0.4,
  speed:  (0.00012 + Math.random() * 0.00018) * (Math.random() > 0.5 ? 1 : -1),
  radioA: 240 + Math.random() * 320,   // semi-eje horizontal
  radioB: 0.45 + Math.random() * 0.35, // factor elipticidad (radioB = radioA * factor)
  tilt:   Math.random() * Math.PI,      // inclinación de la órbita
  size:   0.7 + Math.random() * 1.3,
  alpha:  0.1 + Math.random() * 0.18,
}));

// Cometas
const cometas = [];
let ultimoCometa = null;
let intervaloCometa = 9000 + Math.random() * 10000;

function crearCometa(w, h) {
  const lado = Math.floor(Math.random() * 4);
  let x, y;
  if      (lado === 0) { x = -20;    y = Math.random() * h; }
  else if (lado === 1) { x = w + 20; y = Math.random() * h; }
  else if (lado === 2) { x = Math.random() * w; y = -20; }
  else                 { x = Math.random() * w; y = h + 20; }

  // Apunta hacia el centro con algo de variación
  const tx = w / 2 + (Math.random() - 0.5) * w * 0.5;
  const ty = h / 2 + (Math.random() - 0.5) * h * 0.4;
  const dx = tx - x, dy = ty - y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const spd  = 1.8 + Math.random() * 2.2;

  cometas.push({
    x, y,
    vx: (dx / dist) * spd,
    vy: (dy / dist) * spd,
    trail: [],
    trailMax: 35 + Math.floor(Math.random() * 25),
    size: 1.4 + Math.random() * 1.2,
    alpha: 0.7 + Math.random() * 0.3,
  });
}

function animLoop(ts) {
  const w = animCanvas.width;
  const h = animCanvas.height;
  const cx = w / 2;
  const cy = h / 2;

  if (ultimoCometa === null) ultimoCometa = ts;
  actx.clearRect(0, 0, w, h);

  // ── Asteroides ──
  asteroides.forEach(a => {
    a.angle += a.speed;
    const rx = a.radioA;
    const ry = a.radioA * a.radioB;
    const lx = Math.cos(a.angle) * rx;
    const ly = Math.sin(a.angle) * ry;
    const x  = cx + lx * Math.cos(a.tilt) - ly * Math.sin(a.tilt);
    const y  = cy + lx * Math.sin(a.tilt) + ly * Math.cos(a.tilt);

    actx.beginPath();
    actx.arc(x, y, a.size, 0, Math.PI * 2);
    actx.fillStyle = `rgba(208,221,245,${a.alpha})`;
    actx.fill();
  });

  // ── Cometas ──
  if (ts - ultimoCometa > intervaloCometa) {
    crearCometa(w, h);
    ultimoCometa = ts;
    intervaloCometa = 9000 + Math.random() * 10000;
  }

  for (let i = cometas.length - 1; i >= 0; i--) {
    const c = cometas[i];
    c.trail.push({ x: c.x, y: c.y });
    if (c.trail.length > c.trailMax) c.trail.shift();

    // Trail
    c.trail.forEach((pt, idx) => {
      const t = idx / c.trail.length;
      actx.beginPath();
      actx.arc(pt.x, pt.y, c.size * t * 0.7, 0, Math.PI * 2);
      actx.fillStyle = `rgba(208,221,245,${t * c.alpha * 0.45})`;
      actx.fill();
    });

    // Cabeza brillante
    actx.beginPath();
    actx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    actx.fillStyle = `rgba(255,255,255,${c.alpha})`;
    actx.fill();

    // Pequeño destello
    actx.beginPath();
    actx.arc(c.x, c.y, c.size * 2.2, 0, Math.PI * 2);
    actx.fillStyle = `rgba(208,221,245,${c.alpha * 0.15})`;
    actx.fill();

    c.x += c.vx;
    c.y += c.vy;

    if (c.x < -150 || c.x > w + 150 || c.y < -150 || c.y > h + 150) {
      cometas.splice(i, 1);
    }
  }

  // ── Trail del cursor ──
  const nowMs = performance.now();
  mouseTrail.forEach(pt => {
    const age = (nowMs - pt.t) / 400;
    if (age >= 1) return;
    const a = (1 - age) * (1 - age) * 0.13;
    const r = (1 - age) * 2;
    actx.beginPath();
    actx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
    actx.fillStyle = `rgba(208,221,245,${a})`;
    actx.fill();
  });

  // ── Lerp cursor ring ──
  ringX += (rawMouseX - ringX) * 0.1;
  ringY += (rawMouseY - ringY) * 0.1;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';

  requestAnimationFrame(animLoop);
}

requestAnimationFrame(animLoop);

// ── CURSOR ──
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let rawMouseX = -200, rawMouseY = -200;
let ringX = -200, ringY = -200;
const mouseTrail = [];

document.addEventListener('mousemove', e => {
  rawMouseX = e.clientX;
  rawMouseY = e.clientY;
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top  = e.clientY + 'px';
  mouseTrail.push({ x: e.clientX, y: e.clientY, t: performance.now() });
  if (mouseTrail.length > 60) mouseTrail.shift();
});

document.addEventListener('mouseleave', () => {
  cursorDot.classList.add('oculto');
  cursorRing.classList.add('oculto');
});
document.addEventListener('mouseenter', () => {
  cursorDot.classList.remove('oculto');
  cursorRing.classList.remove('oculto');
});

function registrarHover(selectorOrEl) {
  const els = typeof selectorOrEl === 'string'
    ? document.querySelectorAll(selectorOrEl)
    : [selectorOrEl];
  els.forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });
}

// ── ELEMENTOS ──
const intro        = document.getElementById('intro');
const introNombre  = document.getElementById('intro-nombre');
const langSelect   = document.getElementById('lang-select');
const sistemaSolar = document.getElementById('sistema-solar');
const planetaTooltip = document.getElementById('planeta-tooltip');
const sol          = document.getElementById('sol');

// ── FLUJO: NOMBRE → IDIOMA → SISTEMA ──
introNombre.addEventListener('click', () => {
  introNombre.style.pointerEvents = 'none';
  const stored = localStorage.getItem('sheina-lang');
  if (stored) {
    aplicarIdioma(stored);
    intro.classList.add('zoom-out');
    setTimeout(() => { intro.classList.add('saliendo'); sistemaSolar.classList.add('visible'); }, 500);
    setTimeout(() => { intro.style.display = 'none'; }, 1000);
  } else {
    langSelect.classList.add('visible');
  }
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    aplicarIdioma(lang);

    intro.classList.add('zoom-out');
    setTimeout(() => {
      intro.classList.add('saliendo');
      sistemaSolar.classList.add('visible');
    }, 500);
    setTimeout(() => { intro.style.display = 'none'; }, 1000);
  });
});

// ── TRANSICIÓN HOLOGRÁFICA ──
function transicionHolograma(callback, rect) {
  const cvs = document.createElement('canvas');
  const W = rect ? Math.round(rect.width)  : window.innerWidth;
  const H = rect ? Math.round(rect.height) : window.innerHeight;
  if (rect) {
    cvs.style.cssText = `position:fixed;left:${Math.round(rect.left)}px;top:${Math.round(rect.top)}px;z-index:600;pointer-events:all`;
  } else {
    cvs.style.cssText = 'position:fixed;inset:0;z-index:600;pointer-events:all';
  }
  cvs.width  = W;
  cvs.height = H;
  document.body.appendChild(cvs);
  const c = cvs.getContext('2d');

  const SP = 18;
  const pts = [];
  for (let x = SP / 2; x < W; x += SP)
    for (let y = SP / 2; y < H; y += SP)
      pts.push([x, y]);
  for (let i = pts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pts[i], pts[j]] = [pts[j], pts[i]];
  }

  const FILL = 38, HOLD = 8, FADE = 36, TOTAL = FILL + HOLD + FADE;
  let f = 0, done = false;

  function tick() {
    f++;
    c.clearRect(0, 0, W, H);

    if (f <= FILL) {
      const p = f / FILL;
      c.fillStyle = `rgba(3,3,6,${0.55 + p * 0.38})`;
      c.fillRect(0, 0, W, H);
      const n = Math.floor(p * pts.length);
      for (let i = 0; i < n; i++) {
        const flicker = 0.3 + 0.7 * ((Math.sin(f * 0.45 + i * 0.08) + 1) / 2);
        c.fillStyle = `rgba(208,221,245,${flicker * 0.6})`;
        c.beginPath(); c.arc(pts[i][0], pts[i][1], 1.1, 0, Math.PI * 2); c.fill();
      }
    } else if (f <= FILL + HOLD) {
      if (!done) { done = true; callback(); }
      c.fillStyle = 'rgba(3,3,6,0.93)';
      c.fillRect(0, 0, W, H);
      pts.forEach(([x, y]) => {
        c.fillStyle = 'rgba(208,221,245,0.5)';
        c.beginPath(); c.arc(x, y, 1.1, 0, Math.PI * 2); c.fill();
      });
    } else {
      const p = (f - FILL - HOLD) / FADE;
      const bgA = Math.max(0, 0.93 * (1 - p));
      if (bgA > 0) { c.fillStyle = `rgba(3,3,6,${bgA})`; c.fillRect(0, 0, W, H); }
      const n = Math.floor((1 - p) * pts.length);
      for (let i = 0; i < n; i++) {
        c.fillStyle = `rgba(208,221,245,${(1 - p) * 0.5})`;
        c.beginPath(); c.arc(pts[i][0], pts[i][1], 1.1, 0, Math.PI * 2); c.fill();
      }
    }

    if (f < TOTAL) requestAnimationFrame(tick);
    else cvs.remove();
  }

  requestAnimationFrame(tick);
}

// ── NAVEGACIÓN ──
const backdrop = document.getElementById('overlay-backdrop');

function abrirSeccion(id) {
  planetaTooltip.classList.remove('visible');
  backdrop.classList.add('visible');
  sistemaSolar.style.pointerEvents = 'none';

  const sec = document.getElementById('sec-' + id);

  // Pre-render invisible para medir el rect
  sec.style.transition = 'none';
  sec.style.opacity = '0';
  sec.style.visibility = 'visible';
  sec.classList.add('activa');

  requestAnimationFrame(() => {
    const rect = sec.getBoundingClientRect();
    sec.style.opacity = '0';

    transicionHolograma(() => {
      sec.style.transition = '';
      sec.style.opacity = '';

    }, rect);
  });
}

function volverAlSistema() {
  document.querySelectorAll('.seccion.activa').forEach(s => {
    s.style.transition = 'none';
    s.style.opacity = '0';
    s.style.visibility = 'hidden';
    s.classList.remove('activa');
    void s.offsetWidth;
    s.style.transition = '';
    s.style.opacity = '';
    s.style.visibility = '';
  });
  juegosCards.classList.remove('activo');
  juegosGrid.querySelectorAll('.game-card').forEach(c => c.classList.remove('activo'));
  arteCards.classList.remove('activo');
  arteGrid.querySelectorAll('.arte-card').forEach(c => c.classList.remove('activo'));
  contactoCards.classList.remove('activo');
  contactoGrid.querySelectorAll('.contacto-card').forEach(c => c.classList.remove('activo'));
  cerrarLightbox();
  backdrop.classList.remove('visible', 'blur');
  sistemaSolar.style.pointerEvents = '';
}

backdrop.addEventListener('click', volverAlSistema);

sol.addEventListener('click', () => abrirSeccion('bio'));

// ── LÍNEAS DE CONSTELACIÓN ──
// Se dibujan a partir de la posición real de cada planeta, leyendo --radio
// y --angulo del CSS. Así se rearman solas cuando el layout cambia entre
// escritorio y mobile, sin coordenadas hardcodeadas.
const svgLineas = document.getElementById('lineas');
const NS = 'http://www.w3.org/2000/svg';

// Orden en que se encadenan los planetas entre sí
const CADENA = ['videojuegos', 'arte', 'contacto', 'cv'];

// El universo mide 1000x1000 y el viewBox es 0 0 1000 1000 → 1 unidad = 1px
function posPlaneta(planeta) {
  const cs  = getComputedStyle(planeta);
  const r   = parseFloat(cs.getPropertyValue('--radio'));
  const ang = parseFloat(cs.getPropertyValue('--angulo')) * Math.PI / 180;
  return [500 + r * Math.cos(ang), 500 + r * Math.sin(ang)];
}

function crearLinea(x1, y1, x2, y2, color, ancho, guiones) {
  const l = document.createElementNS(NS, 'line');
  l.setAttribute('x1', x1.toFixed(1));
  l.setAttribute('y1', y1.toFixed(1));
  l.setAttribute('x2', x2.toFixed(1));
  l.setAttribute('y2', y2.toFixed(1));
  l.setAttribute('stroke', color);
  l.setAttribute('stroke-width', ancho);
  if (guiones) l.setAttribute('stroke-dasharray', guiones);
  svgLineas.appendChild(l);
}

function dibujarLineas() {
  svgLineas.innerHTML = '';
  // 0.3554 = radio del círculo de sun_midle relativo al ancho de .sol.
  // Las líneas arrancan ahí para no cruzar por encima del dibujo del sol.
  const radioSol = sol.offsetWidth * 0.3554 + 6;

  const pos = {};
  document.querySelectorAll('.planeta').forEach(p => {
    pos[p.dataset.seccion] = posPlaneta(p);
  });

  // Sol → cada planeta
  Object.values(pos).forEach(([x, y]) => {
    const dx = x - 500, dy = y - 500;
    const d  = Math.hypot(dx, dy);
    if (!d) return;
    crearLinea(500 + dx / d * radioSol, 500 + dy / d * radioSol, x, y,
               'rgba(210,225,248,0.32)', 0.8);
  });

  // Constelación: cadena entre planetas
  for (let i = 0; i < CADENA.length - 1; i++) {
    const a = pos[CADENA[i]], b = pos[CADENA[i + 1]];
    if (a && b) crearLinea(a[0], a[1], b[0], b[1], 'rgba(210,225,248,0.18)', 0.6, '3 6');
  }
}

dibujarLineas();
window.addEventListener('resize', dibujarLineas);

document.querySelectorAll('.planeta').forEach(planeta => {
  if (planeta.classList.contains('apagado')) return;

  planeta.addEventListener('mouseenter', () => {
    const key = 'panel.' + planeta.dataset.seccion;
    const desc = t[idioma][key];
    if (desc) {
      const rect = planeta.getBoundingClientRect();
      planetaTooltip.textContent = desc;
      planetaTooltip.style.left = '-9999px';
      planetaTooltip.style.visibility = 'hidden';
      planetaTooltip.classList.add('visible');
      const tw = planetaTooltip.offsetWidth;
      let left = rect.right + 16;
      if (left + tw > window.innerWidth - 16) left = rect.left - tw - 16;
      planetaTooltip.style.left = left + 'px';
      planetaTooltip.style.top  = (rect.top + rect.height / 2) + 'px';
      planetaTooltip.style.visibility = '';
    }
  });
  planeta.addEventListener('mouseleave', () => planetaTooltip.classList.remove('visible'));

  planeta.addEventListener('click', () => {
    if (planeta.dataset.href) {
      window.open(planeta.dataset.href, '_blank', 'noopener');
    } else if (planeta.dataset.download) {
      const fname = idioma === 'en' ? 'Lorenzo_Lodigiani_EN.pdf' : 'Lorenzo_Lodigiani_ES.pdf';
      window.open('docs/' + fname, '_blank', 'noopener');
    } else if (planeta.dataset.seccion === 'videojuegos') {
      abrirJuegos();
    } else if (planeta.dataset.seccion === 'arte') {
      abrirArte();
    } else if (planeta.dataset.seccion === 'contacto') {
      abrirContacto();
    } else if (planeta.dataset.seccion) {
      abrirSeccion(planeta.dataset.seccion);
    }
  });
});


// ── CONTACTO ──
const contactoCards = document.getElementById('contacto-cards');
const contactoGrid  = document.getElementById('contacto-grid');

// Íconos (viewBox 24x24, se pintan con fill: var(--gold) desde el CSS)
const ICONOS = {
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  // itch.io e email: trazos propios, en la línea gráfica del sitio
  itch: 'M3 5h18a1 1 0 0 1 1 1v2.2c0 1.2-.9 2.3-2.1 2.3-1 0-1.9-.7-2.2-1.6-.3.9-1.2 1.6-2.2 1.6s-1.9-.7-2.2-1.6c-.3.9-1.2 1.6-2.2 1.6s-1.9-.7-2.2-1.6c-.3.9-1.2 1.6-2.2 1.6S5.6 9.7 5.3 8.8C5 9.7 4.1 10.4 3.1 10.4 1.9 10.4 1 9.3 1 8.1V6a1 1 0 0 1 1-1zm1.2 7.2c.6.4 1.3.6 2 .6.9 0 1.7-.3 2.3-.9.6.6 1.4.9 2.3.9h2.4c.9 0 1.7-.3 2.3-.9.6.6 1.4.9 2.3.9.7 0 1.4-.2 2-.6V19a1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1v-6.8zM9 14h6v2H9v-2z',
  email: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm.8 2L12 12.6 20.2 7H3.8zM20 8.9l-7.4 5a1 1 0 0 1-1.2 0L4 8.9V17h16V8.9z',
};

const CONTACTOS = [
  { id: 'linkedin',  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/lorenzo-lodigiani-8046a3265/' },
  { id: 'github',    label: 'GitHub',    href: 'https://github.com/warreR33' },
  { id: 'itch',      label: 'itch.io',   href: 'https://mistsheina.itch.io' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mistsheina/' },
  { id: 'email',     label: 'Email',     labelKey: 'contacto.email', email: 'lodigianilorenzo3@gmail.com' },
];

function generarContacto() {
  contactoGrid.innerHTML = '';
  CONTACTOS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contacto-card';
    card.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONOS[c.id]}"/></svg>
      <span class="contacto-card-label"${c.labelKey ? ` data-i18n="${c.labelKey}"` : ''}>${c.label}</span>
    `;
    card.addEventListener('click', () => {
      if (c.email) {
        const label = card.querySelector('.contacto-card-label');
        navigator.clipboard.writeText(c.email).then(() => {
          label.textContent = t[idioma]['copy.copiado'];
          setTimeout(() => { label.textContent = t[idioma]['contacto.email']; }, 1800);
        });
      } else {
        window.open(c.href, '_blank', 'noopener');
      }
    });
    registrarHover(card);
    contactoGrid.appendChild(card);
  });
}

function abrirContacto() {
  planetaTooltip.classList.remove('visible');
  backdrop.classList.add('visible', 'blur');
  sistemaSolar.style.pointerEvents = 'none';
  contactoCards.classList.add('activo');

  contactoGrid.querySelectorAll('.contacto-card').forEach((card, i) => {
    setTimeout(() => {
      const rect = card.getBoundingClientRect();
      transicionHolograma(() => {
        card.classList.add('activo');
      }, rect);
    }, i * 200);
  });
}

// ── PULSO DE CLICK ──
document.addEventListener('click', e => {
  const r = document.createElement('div');
  r.className = 'click-ripple';
  r.style.left = e.clientX + 'px';
  r.style.top  = e.clientY + 'px';
  document.body.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
});

// Hover del cursor sobre interactivos
registrarHover('a, button, .planeta, #sol, #intro-nombre, .arte-card, .game-card');

// ── SELECTOR DE IDIOMA EN SISTEMA SOLAR ──
document.querySelectorAll('.lang-sw-btn').forEach(btn => {
  btn.addEventListener('click', () => aplicarIdioma(btn.dataset.lang));
});

// ── DATOS DE PROYECTOS ──
const PROYECTOS_ARTE = [
  {
    titulo: 'Crimson Draft',
    tag: 'UI / UX',
    icono: 'media/Crimson_Draft_UI.png',
    imgs: [
      'media/crimson_draft_1.mp4',
      'media/crimson_draft_2.mp4',
      'media/crimson_draft_3.mp4',
      'media/crimson_draft_4.mp4'
    ],
    descKey: 'arte.crimson.desc'
  },
  {
    titulo: 'ONИA — UI',
    tag: 'UI / UX',
    href: 'https://insulagames.itch.io/onna',
    icono: 'media/ONNA_UI.png',
    imgs: [
      'media/onna_ui_1.mp4',
      'media/onna_ui_2.mp4',
      'media/onna_ui_3.mp4',
      'media/2026-08-18%2011-22-27.00_02_13_12.Imagen%20fija001.png'
    ],
    descKey: 'arte.onnaui.desc'
  },
  {
    titulo: '2D PixelArt Character',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/blue-player',
    imgs: [
      'https://img.itch.zone/aW1hZ2UvMjY1NDk1MS8xNTgxOTY0My5naWY=/original/lm%2BkBr.gif'
    ],
    descKey: 'arte.pixelchar.desc'
  },
  {
    titulo: '2D Enemies',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/2d-enemies',
    imgs: [
      'https://img.itch.zone/aW1hZ2UvMzQ4MjUyMy8yMDc3NjA0Ny5naWY=/original/qswvYU.gif',
      'https://img.itch.zone/aW1hZ2UvMzQ4MjUyMy8yMDc3NjA0OC5naWY=/original/ZB3p7m.gif'
    ],
    descKey: 'arte.enemies.desc'
  },
  {
    titulo: 'Characters For RPG',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/characters-for-trpg-game',
    icono: 'media/Characters_For_RPG.png',
    imgs: [
      'https://img.itch.zone/aW1nLzE1ODY4OTc2LnBuZw==/original/IfB8r%2F.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODkzOC5wbmc=/original/rNdvRW.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODkzOS5wbmc=/original/8THMxs.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0MS5wbmc=/original/67fXxi.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0MC5wbmc=/original/f9rrOQ.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0Mi5wbmc=/original/VjiYmD.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0NS5wbmc=/original/SeVyS8.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0NC5wbmc=/original/9SjkPS.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0My5wbmc=/original/w7Cv1W.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0Ni5wbmc=/original/7OuxDM.png',
      'https://img.itch.zone/aW1hZ2UvMjY2MzA1OS8xNTg2ODk0Ny5wbmc=/original/QE7PKD.png'
    ],
    descKey: 'arte.charrpg.desc'
  },
  {
    titulo: 'Test Zone TileSet Bundle',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/test-zone-tileset-bundle',
    icono: 'media/Test_Zone_Title.png',
    imgs: [
      'https://img.itch.zone/aW1nLzIzMzg0MzQxLnBuZw==/original/F%2BV6SJ.png',
      'https://img.itch.zone/aW1nLzIzMzg0NTc1LnBuZw==/original/tY862y.png',
      'https://img.itch.zone/aW1nLzIzMzg0NTgxLnBuZw==/original/ZJK8lY.png',
      'https://img.itch.zone/aW1hZ2UvMzkyMTYwMy8yMzM5MDg4NC5wbmc=/original/oHVQXr.png',
      'https://img.itch.zone/aW1hZ2UvMzkyMTYwMy8yMzM5MDg4OC5wbmc=/original/xZBYSC.png',
      'https://img.itch.zone/aW1hZ2UvMzkyMTYwMy8yMzM5MDg4OS5wbmc=/original/WsuzDg.png'
    ],
    descKey: 'arte.testzone.desc'
  }
];

const PROYECTOS_JUEGOS = [
  {
    titulo: 'ONИA',
    genero: 'Action · Shooter · Roguelike',
    rolKey: 'card.onna.rol',
    descKey: 'card.onna.desc',
    href: 'https://insulagames.itch.io/onna',
    icono: 'media/Onna.png',
    imgs: [
      'https://img.itch.zone/aW1nLzIzOTYzMjA5LnBuZw==/original/q4hEEK.png',
      'https://img.itch.zone/aW1hZ2UvNDAxODMzNy8yMzk2MjMzNS5wbmc=/original/bok2fC.png',
      'https://img.itch.zone/aW1hZ2UvNDAxODMzNy8yMzk2MjMzNi5wbmc=/original/uCnE7c.png',
      'https://img.itch.zone/aW1hZ2UvNDAxODMzNy8yMzk2MjMzNy5wbmc=/original/Vu%2BFH%2F.png',
      'https://img.itch.zone/aW1hZ2UvNDAxODMzNy8yMzk2MjMzMy5wbmc=/original/p035Py.png',
      'https://img.itch.zone/aW1hZ2UvNDAxODMzNy8yMzk2MjMzNC5wbmc=/original/F3oDLx.png',
      'https://img.itch.zone/aW1hZ2UvNDAxODMzNy8yMzk2MjMzMi5wbmc=/original/gDtU41.png'
    ]
  },
  {
    titulo: 'Alice Not More',
    genero: 'Visual Novel · Thriller',
    rolKey: 'card.alice.rol',
    descKey: 'card.alice.desc',
    href: 'https://theshininggames.itch.io/alicenotmore',
    icono: 'media/Alice.png',
    imgs: [
      'https://img.itch.zone/aW1nLzEzMjA3NTkxLnBuZw==/original/tQmdor.png',
      'https://img.itch.zone/aW1hZ2UvMjE1NTc5Ni8xMjcwNzI1OC5wbmc=/original/BTdkt8.png',
      'https://img.itch.zone/aW1hZ2UvMjE1NTc5Ni8xMjcwNzI3Ni5wbmc=/original/wi2ZqZ.png',
      'https://img.itch.zone/aW1hZ2UvMjE1NTc5Ni8xMjcwNzI3OS5wbmc=/original/XAGFZ9.png',
      'https://img.itch.zone/aW1hZ2UvMjE1NTc5Ni8xMjcwNzI4OS5wbmc=/original/DHWFBs.png',
      'https://img.itch.zone/aW1hZ2UvMjE1NTc5Ni8xMjcwNzI5Ny5wbmc=/original/6QYI6X.png'
    ]
  },
  {
    titulo: 'Sands of the Damned',
    genero: 'Survival · Horror · Adventure',
    rolKey: 'card.sands.rol',
    descKey: 'card.sands.desc',
    href: 'https://theshininggames.itch.io/sands-of-the-damned',
    icono: 'media/Sands.jpg',
    imgs: [
      'https://img.itch.zone/aW1nLzE2OTUyMTY1LnBuZw==/original/RBSubQ.png',
      'https://img.itch.zone/aW1hZ2UvMjgzNzE4Mi8xNjk3NDY4Ni5wbmc=/original/nSb53E.png',
      'https://img.itch.zone/aW1hZ2UvMjgzNzE4Mi8xNjk3NDY4OS5wbmc=/original/GCMSVd.png',
      'https://img.itch.zone/aW1hZ2UvMjgzNzE4Mi8xNjk3NDY5MS5wbmc=/original/jYm%2Bho.png'
    ]
  }
];

// ── GENERACIÓN DE TARJETAS (ARTE) ──
const arteCards = document.getElementById('arte-cards');
const arteGrid  = document.getElementById('arte-grid');

function generarArte() {
  arteGrid.innerHTML = '';
  PROYECTOS_ARTE.forEach(p => {
    const card = document.createElement('div');
    card.className = 'arte-card';
    card.innerHTML = `
      <img src="${p.icono || p.imgs[0]}" alt="${p.titulo}" loading="lazy" decoding="async" />
      <div class="arte-card-overlay">
        <span class="arte-card-titulo">${p.titulo}</span>
        <span class="arte-card-tag">${p.tag}</span>
      </div>
    `;
    card.addEventListener('click', () => abrirLightbox(p, 0));
    registrarHover(card);
    arteGrid.appendChild(card);
  });
}

function abrirArte() {
  planetaTooltip.classList.remove('visible');
  backdrop.classList.add('visible', 'blur');
  sistemaSolar.style.pointerEvents = 'none';
  arteCards.classList.add('activo');

  arteGrid.querySelectorAll('.arte-card').forEach((card, i) => {
    setTimeout(() => {
      const rect = card.getBoundingClientRect();
      transicionHolograma(() => {
        card.classList.add('activo');
      }, rect);
    }, i * 220);
  });
}

// ── GENERACIÓN DE TARJETAS (VIDEOJUEGOS) ──
const juegosCards = document.getElementById('juegos-cards');
const juegosGrid   = document.getElementById('juegos-grid');

function generarJuegos() {
  juegosGrid.innerHTML = '';
  PROYECTOS_JUEGOS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="game-card-icono">
        <img src="${p.icono}" alt="${p.titulo}" loading="lazy" decoding="async" />
      </div>
      <p class="game-card-nombre">${p.titulo}</p>
      <p class="game-card-rol" data-i18n="${p.rolKey}">${t[idioma][p.rolKey] || ''}</p>
      <p class="game-card-desc" data-i18n="${p.descKey}">${t[idioma][p.descKey] || ''}</p>
    `;
    card.addEventListener('click', () => abrirLightbox(p, 0));
    registrarHover(card);
    juegosGrid.appendChild(card);
  });
}

function abrirJuegos() {
  planetaTooltip.classList.remove('visible');
  backdrop.classList.add('visible', 'blur');
  sistemaSolar.style.pointerEvents = 'none';
  juegosCards.classList.add('activo');

  juegosGrid.querySelectorAll('.game-card').forEach((card, i) => {
    setTimeout(() => {
      const rect = card.getBoundingClientRect();
      transicionHolograma(() => {
        card.classList.add('activo');
      }, rect);
    }, i * 320);
  });
}

// ── LIGHTBOX ──
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbPrev    = document.getElementById('lb-prev');
const lbNext    = document.getElementById('lb-next');
const lbCounter = document.getElementById('lb-counter');
const lbTitulo  = document.getElementById('lb-titulo');
const lbTag     = document.getElementById('lb-tag');
const lbRol     = document.getElementById('lb-rol');
const lbDesc    = document.getElementById('lb-desc');
const lbLink    = document.getElementById('lb-link');
const lbVideo   = document.getElementById('lb-video');
let lbImgIdx = 0;

const esVideo = url => /\.(mp4|webm)$/i.test(url);

// Muestra el medio actual: usa <video> o <img> según la extensión
function mostrarMedia() {
  const url = lbProyecto.imgs[lbImgIdx];
  if (esVideo(url)) {
    lbImg.removeAttribute('src');
    lbImg.style.display = 'none';
    lbVideo.style.display = '';
    lbVideo.src = url;
    lbVideo.play().catch(() => {});
  } else {
    lbVideo.pause();
    lbVideo.removeAttribute('src');
    lbVideo.load();
    lbVideo.style.display = 'none';
    lbImg.style.display = '';
    lbImg.src = url;
  }
  actualizarCounter();
}

function abrirLightbox(proyecto, imgIdx) {
  lbProyecto = proyecto;
  lbImgIdx   = imgIdx ?? 0;
  lbImg.alt      = proyecto.titulo;
  lbTitulo.textContent = proyecto.titulo;
  lbTag.textContent    = proyecto.tag || proyecto.genero || '';
  lbRol.textContent    = proyecto.rolKey ? (t[idioma][proyecto.rolKey] || '') : '';
  lbDesc.textContent   = proyecto.descKey ? (t[idioma][proyecto.descKey] || '') : (proyecto.desc || '');
  // Proyectos sin publicar (en desarrollo) no llevan link a itch
  lbLink.href = proyecto.href || '#';
  lbLink.style.display = proyecto.href ? '' : 'none';
  mostrarMedia();
  lbPrev.style.visibility = proyecto.imgs.length > 1 ? 'visible' : 'hidden';
  lbNext.style.visibility = proyecto.imgs.length > 1 ? 'visible' : 'hidden';
  lightbox.classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function actualizarCounter() {
  lbCounter.textContent = lbProyecto.imgs.length > 1
    ? `${lbImgIdx + 1} / ${lbProyecto.imgs.length}` : '';
}

function cerrarLightbox() {
  lightbox.classList.remove('activo');
  document.body.style.overflow = '';
  // cortar la reproducción para que no siga corriendo en segundo plano
  lbVideo.pause();
  lbVideo.removeAttribute('src');
  lbVideo.load();
  lbProyecto = null;
}

lbPrev.addEventListener('click', () => {
  lbImgIdx = (lbImgIdx - 1 + lbProyecto.imgs.length) % lbProyecto.imgs.length;
  mostrarMedia();
});
lbNext.addEventListener('click', () => {
  lbImgIdx = (lbImgIdx + 1) % lbProyecto.imgs.length;
  mostrarMedia();
});
document.getElementById('lightbox-bg').addEventListener('click', cerrarLightbox);
document.getElementById('lightbox-close').addEventListener('click', cerrarLightbox);
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('activo')) return;
  if (e.key === 'Escape') { cerrarLightbox(); return; }
  if (!lbProyecto || lbProyecto.imgs.length < 2) return;
  if (e.key === 'ArrowLeft')  { lbImgIdx = (lbImgIdx - 1 + lbProyecto.imgs.length) % lbProyecto.imgs.length; mostrarMedia(); }
  if (e.key === 'ArrowRight') { lbImgIdx = (lbImgIdx + 1) % lbProyecto.imgs.length; mostrarMedia(); }
});

generarArte();
generarJuegos();
generarContacto();

// Idioma por defecto: inglés (o el último elegido, si ya eligió alguna vez)
aplicarIdioma(localStorage.getItem('sheina-lang') || 'en', false);
