// ── TRADUCCIONES ──
const t = {
  es: {
    'planeta.arte':        'Arte',
    'planeta.videojuegos': 'Videojuegos',
    'planeta.escritos':    'Escritos',
    'planeta.resenas':     'Reseñas',
    'btn.volver':          'Volver al sistema',
    'sec.arte':            'Arte',
    'sec.videojuegos':     'Videojuegos',
    'tag.narrativa':       'Narrativa',
    'tag.personajes':      'Diseño de personajes',
    'luna.email':          'Email',
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
  },
  en: {
    'planeta.arte':        'Art',
    'planeta.videojuegos': 'Video Games',
    'planeta.escritos':    'Writing',
    'planeta.resenas':     'Reviews',
    'btn.volver':          'Back to system',
    'sec.arte':            'Art',
    'sec.videojuegos':     'Video Games',
    'tag.narrativa':       'Narrative',
    'tag.personajes':      'Character Design',
    'luna.email':          'Email',
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
  }
};

let idioma = 'es';
let lbProyecto = null;

function aplicarIdioma(lang) {
  idioma = lang;
  localStorage.setItem('sheina-lang', lang);
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
const panelInfo    = document.getElementById('panel-info');
const panelTexto   = document.getElementById('panel-texto');
const btnVolver    = document.getElementById('btn-volver');
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
function transicionHolograma(callback) {
  const cvs = document.createElement('canvas');
  cvs.style.cssText = 'position:fixed;inset:0;z-index:500;width:100vw;height:100vh;pointer-events:all';
  cvs.width  = window.innerWidth;
  cvs.height = window.innerHeight;
  document.body.appendChild(cvs);
  const c = cvs.getContext('2d');
  const W = cvs.width, H = cvs.height;

  // Grilla de puntos barajada
  const SP = 20;
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
function abrirSeccion(id) {
  sistemaSolar.classList.remove('visible');
  panelInfo.classList.remove('visible');
  transicionHolograma(() => {
    document.getElementById('sec-' + id).classList.add('activa');
    btnVolver.classList.add('visible');
  });
}

function volverAlSistema() {
  document.querySelectorAll('.seccion.activa').forEach(s => {
    s.style.transition = 'none';
    s.classList.remove('activa');
    void s.offsetWidth;
    s.style.transition = '';
  });
  transicionHolograma(() => {
    btnVolver.classList.remove('visible');
    sistemaSolar.classList.add('visible');
  });
}

sol.addEventListener('click', () => abrirSeccion('bio'));

document.querySelectorAll('.planeta').forEach(planeta => {
  if (planeta.classList.contains('apagado')) return;

  planeta.addEventListener('mouseenter', () => {
    const key = 'panel.' + planeta.dataset.seccion;
    const desc = t[idioma][key];
    if (desc) { panelTexto.textContent = desc; panelInfo.classList.add('visible'); }
  });
  planeta.addEventListener('mouseleave', () => panelInfo.classList.remove('visible'));

  planeta.addEventListener('click', () => {
    if (planeta.dataset.href) {
      window.open(planeta.dataset.href, '_blank', 'noopener');
    } else if (planeta.dataset.download) {
      const fname = idioma === 'en' ? 'Lorenzo_Lodigiani_EN.pdf' : 'Lorenzo_Lodigiani_ES.pdf';
      window.open('docs/' + fname, '_blank', 'noopener');
    } else if (planeta.dataset.seccion) {
      abrirSeccion(planeta.dataset.seccion);
    }
  });
});

btnVolver.addEventListener('click', volverAlSistema);

// ── LUNAS ──
document.querySelectorAll('.luna').forEach(luna => {
  luna.addEventListener('click', (e) => {
    e.stopPropagation();
    if (luna.dataset.email) {
      navigator.clipboard.writeText(luna.dataset.email).then(() => {
        const label = luna.querySelector('.luna-label');
        const original = label.textContent;
        label.textContent = t[idioma]['copy.copiado'];
        label.style.opacity = '1';
        setTimeout(() => { label.textContent = original; label.style.opacity = ''; }, 1800);
      });
    } else {
      window.open(luna.dataset.href, '_blank', 'noopener');
    }
  });
});

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
registrarHover('a, button, .planeta, .luna, #sol, #intro-nombre, .galeria-item, .card');

// ── SELECTOR DE IDIOMA EN SISTEMA SOLAR ──
document.querySelectorAll('.lang-sw-btn').forEach(btn => {
  btn.addEventListener('click', () => aplicarIdioma(btn.dataset.lang));
});

// ── DATOS DE PROYECTOS ──
const PROYECTOS_ARTE = [
  {
    titulo: '2D PixelArt Character',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/blue-player',
    imgs: [
      'https://img.itch.zone/aW1hZ2UvMjY1NDk1MS8xNTgxOTY0My5naWY=/original/lm%2BkBr.gif'
    ],
    desc: 'Asset pack con un personaje jugador y sus animaciones en pixel art. Incluye sprite sheets para ataques y animaciones generales.'
  },
  {
    titulo: '2D Enemies',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/2d-enemies',
    imgs: [
      'https://img.itch.zone/aW1hZ2UvMzQ4MjUyMy8yMDc3NjA0Ny5naWY=/original/qswvYU.gif',
      'https://img.itch.zone/aW1hZ2UvMzQ4MjUyMy8yMDc3NjA0OC5naWY=/original/ZB3p7m.gif'
    ],
    desc: 'Pack de enemigos en pixel art. Incluye bandidos y druidas con clases: Warrior, Archer, Cavalry, Levy, Spearman. Animaciones de idle, ataque y daño.'
  },
  {
    titulo: 'Characters For RPG',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/characters-for-trpg-game',
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
    desc: 'Pack de personajes para juegos de rol en pixel art. Incluye guerreros, arqueros, caballería, lanceros y sus variantes con animaciones básicas.'
  },
  {
    titulo: 'TRPG UI',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/trpg-ui',
    imgs: [
      'https://img.itch.zone/aW1hZ2UvMzQ3OTEwMC8yMDc1NjM1My5wbmc=/347x500/1X2Wgf.png',
      'https://img.itch.zone/aW1hZ2UvMzQ3OTEwMC8yMDc1NjM1NS5wbmc=/347x500/0PGtYs.png',
      'https://img.itch.zone/aW1hZ2UvMzQ3OTEwMC8yMDc1NjM1Ny5wbmc=/347x500/7mtuez.png',
      'https://img.itch.zone/aW1hZ2UvMzQ3OTEwMC8yMDc1NjM2MC5wbmc=/347x500/PTeyHp.png'
    ],
    desc: 'Pack de UI para TRPG en pixel art. Incluye contador de puntos, contador de vida, banners de equipo, botones de menú e íconos de tropas.'
  },
  {
    titulo: 'Test Zone TileSet Bundle',
    tag: 'Asset Pack',
    href: 'https://mistsheina.itch.io/test-zone-tileset-bundle',
    imgs: [
      'https://img.itch.zone/aW1nLzIzMzg0MzQxLnBuZw==/original/F%2BV6SJ.png',
      'https://img.itch.zone/aW1nLzIzMzg0NTI3LnBuZw==/original/XlEkje.png',
      'https://img.itch.zone/aW1nLzIzMzg0NTc1LnBuZw==/original/tY862y.png',
      'https://img.itch.zone/aW1nLzIzMzg0NTgxLnBuZw==/original/ZJK8lY.png',
      'https://img.itch.zone/aW1hZ2UvMzkyMTYwMy8yMzM5MDg4NC5wbmc=/original/oHVQXr.png',
      'https://img.itch.zone/aW1hZ2UvMzkyMTYwMy8yMzM5MDg4OC5wbmc=/original/xZBYSC.png',
      'https://img.itch.zone/aW1hZ2UvMzkyMTYwMy8yMzM5MDg4OS5wbmc=/original/WsuzDg.png'
    ],
    desc: 'Colección de assets 2D en pixel art para uso como placeholders en desarrollo. Ideal para testear mecánicas y diseño de niveles antes del arte final.'
  }
];

const PROYECTOS_JUEGOS = [
  {
    titulo: 'ONИA',
    genero: 'Action · Shooter · Roguelike',
    rolKey: 'card.onna.rol',
    descKey: 'card.onna.desc',
    href: 'https://insulagames.itch.io/onna',
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
    imgs: [
      'https://img.itch.zone/aW1nLzE2OTUyMTY1LnBuZw==/original/RBSubQ.png',
      'https://img.itch.zone/aW1hZ2UvMjgzNzE4Mi8xNjk3NDY4Ni5wbmc=/original/nSb53E.png',
      'https://img.itch.zone/aW1hZ2UvMjgzNzE4Mi8xNjk3NDY4OS5wbmc=/original/GCMSVd.png',
      'https://img.itch.zone/aW1hZ2UvMjgzNzE4Mi8xNjk3NDY5MS5wbmc=/original/jYm%2Bho.png'
    ]
  }
];

// ── GENERACIÓN DE GALERÍA (ARTE) ──
function generarArte() {
  const galeria = document.getElementById('galeria-arte');
  galeria.innerHTML = '';
  PROYECTOS_ARTE.forEach(p => {
    const item = document.createElement('div');
    item.className = 'galeria-item';
    item.dataset.imgIdx = '0';
    const multi = p.imgs.length > 1;
    item.innerHTML = `
      <img class="galeria-img" src="${p.imgs[0]}" alt="${p.titulo}" />
      <div class="galeria-overlay">
        <span class="galeria-titulo">${p.titulo}</span>
        <span class="galeria-tag">${p.tag}</span>
      </div>
      ${multi ? `
        <button class="galeria-arr galeria-arr-prev" tabindex="-1">&#8249;</button>
        <button class="galeria-arr galeria-arr-next" tabindex="-1">&#8250;</button>
        <div class="galeria-counter"><span class="gc-n">1</span> / ${p.imgs.length}</div>
      ` : ''}
    `;
    if (multi) {
      const img = item.querySelector('.galeria-img');
      const gcN = item.querySelector('.gc-n');
      item.querySelector('.galeria-arr-prev').addEventListener('click', e => {
        e.stopPropagation();
        let i = (parseInt(item.dataset.imgIdx) - 1 + p.imgs.length) % p.imgs.length;
        item.dataset.imgIdx = i; img.src = p.imgs[i]; gcN.textContent = i + 1;
      });
      item.querySelector('.galeria-arr-next').addEventListener('click', e => {
        e.stopPropagation();
        let i = (parseInt(item.dataset.imgIdx) + 1) % p.imgs.length;
        item.dataset.imgIdx = i; img.src = p.imgs[i]; gcN.textContent = i + 1;
      });
    }
    item.addEventListener('click', () => abrirLightbox(p, parseInt(item.dataset.imgIdx)));
    registrarHover(item);
    galeria.appendChild(item);
  });
}

// ── GENERACIÓN DE CARDS (VIDEOJUEGOS) ──
function generarVideojuegos() {
  const lista = document.getElementById('lista-videojuegos');
  lista.innerHTML = '';
  PROYECTOS_JUEGOS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.imgIdx = '0';
    const multi = p.imgs.length > 1;
    card.innerHTML = `
      <div class="card-imagen">
        <img class="card-img" src="${p.imgs[0]}" alt="${p.titulo}" />
        ${multi ? `
          <button class="card-arr card-arr-prev" tabindex="-1">&#8249;</button>
          <button class="card-arr card-arr-next" tabindex="-1">&#8250;</button>
          <div class="card-img-counter"><span class="cc-n">1</span> / ${p.imgs.length}</div>
        ` : ''}
      </div>
      <div class="card-info">
        <p class="card-nombre">${p.titulo}</p>
        <p class="card-rol" data-i18n="${p.rolKey}">${t[idioma][p.rolKey] || ''}</p>
        <p class="card-desc" data-i18n="${p.descKey}">${t[idioma][p.descKey] || ''}</p>
        <p class="card-genero">${p.genero}</p>
      </div>
    `;
    if (multi) {
      const img = card.querySelector('.card-img');
      const ccN = card.querySelector('.cc-n');
      card.querySelector('.card-arr-prev').addEventListener('click', e => {
        e.stopPropagation();
        let i = (parseInt(card.dataset.imgIdx) - 1 + p.imgs.length) % p.imgs.length;
        card.dataset.imgIdx = i; img.src = p.imgs[i]; ccN.textContent = i + 1;
      });
      card.querySelector('.card-arr-next').addEventListener('click', e => {
        e.stopPropagation();
        let i = (parseInt(card.dataset.imgIdx) + 1) % p.imgs.length;
        card.dataset.imgIdx = i; img.src = p.imgs[i]; ccN.textContent = i + 1;
      });
    }
    card.addEventListener('click', () => abrirLightbox(p, parseInt(card.dataset.imgIdx)));
    registrarHover(card);
    lista.appendChild(card);
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
const lbDesc    = document.getElementById('lb-desc');
const lbLink    = document.getElementById('lb-link');
let lbImgIdx = 0;

function abrirLightbox(proyecto, imgIdx) {
  lbProyecto = proyecto;
  lbImgIdx   = imgIdx ?? 0;
  lbImg.src      = proyecto.imgs[lbImgIdx];
  lbImg.alt      = proyecto.titulo;
  lbTitulo.textContent = proyecto.titulo;
  lbTag.textContent    = proyecto.tag || proyecto.genero || '';
  lbDesc.textContent   = proyecto.descKey ? (t[idioma][proyecto.descKey] || '') : (proyecto.desc || '');
  lbLink.href = proyecto.href;
  actualizarCounter();
  lbPrev.style.visibility = proyecto.imgs.length > 1 ? 'visible' : 'hidden';
  lbNext.style.visibility = proyecto.imgs.length > 1 ? 'visible' : 'hidden';
  lightbox.classList.remove('lightbox-oculto');
  document.body.style.overflow = 'hidden';
}

function actualizarCounter() {
  lbCounter.textContent = lbProyecto.imgs.length > 1
    ? `${lbImgIdx + 1} / ${lbProyecto.imgs.length}` : '';
}

function cerrarLightbox() {
  lightbox.classList.add('lightbox-oculto');
  lbImg.src = '';
  document.body.style.overflow = '';
  lbProyecto = null;
}

lbPrev.addEventListener('click', () => {
  lbImgIdx = (lbImgIdx - 1 + lbProyecto.imgs.length) % lbProyecto.imgs.length;
  lbImg.src = lbProyecto.imgs[lbImgIdx]; actualizarCounter();
});
lbNext.addEventListener('click', () => {
  lbImgIdx = (lbImgIdx + 1) % lbProyecto.imgs.length;
  lbImg.src = lbProyecto.imgs[lbImgIdx]; actualizarCounter();
});
document.getElementById('lightbox-bg').addEventListener('click', cerrarLightbox);
document.getElementById('lightbox-close').addEventListener('click', cerrarLightbox);
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('lightbox-oculto')) return;
  if (e.key === 'Escape') { cerrarLightbox(); return; }
  if (!lbProyecto || lbProyecto.imgs.length < 2) return;
  if (e.key === 'ArrowLeft')  { lbImgIdx = (lbImgIdx - 1 + lbProyecto.imgs.length) % lbProyecto.imgs.length; lbImg.src = lbProyecto.imgs[lbImgIdx]; actualizarCounter(); }
  if (e.key === 'ArrowRight') { lbImgIdx = (lbImgIdx + 1) % lbProyecto.imgs.length; lbImg.src = lbProyecto.imgs[lbImgIdx]; actualizarCounter(); }
});

generarArte();
generarVideojuegos();

// Aplicar idioma por defecto al cargar
aplicarIdioma('es');
