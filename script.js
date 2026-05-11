/* ═══════════════════════════════════════════════
   CARVAJAL S.A. — Historia Empresarial
   script.js · Lógica completa de la aplicación
═══════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────
   BASE DE DATOS SIMULADA (CSV-like)
   Cada objeto = un colaborador de Carvajal
────────────────────────────────────────────── */
const baseDeDatos = [
  {
    usuario:        'viviana',
    password:       'carvajal123',
    nombre:         'Viviana',
    apellido:       'Ocampo Restrepo',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1hbbPHTBevKoC4wGo4BsVUIUYxk5LJUC6&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'mariana',
    password:       'carvajal123',
    nombre:         'Mariana',
    apellido:       'Contreras Bedoya',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1ot5mj4HDi5Fj84TCZ8ciTOnZIUu4yYeP&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'manuela',
    password:       'carvajal123',
    nombre:         'Manuela',
    apellido:       'Alvarez Arias',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1jQvYwqJTLiPXMvsyuAGQjom45NlqiAZq&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'silvana',
    password:       'carvajal123',
    nombre:         'Silvana',
    apellido:       'Casanova Rangel',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1y2fIOeg9vUvpT5gjOxvFh3pvyg3BTQEL&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'leidyh',
    password:       'carvajal123',
    nombre:         'Leidy',
    apellido:       'Henao',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1ZE3X-ZsPUz4fca2DszQVwfWTGxJkq6xi&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'laura',
    password:       'carvajal123',
    nombre:         'Laura',
    apellido:       'Dayana Gil Marin',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1Ox4ZSIRO1mhxcGxFlvT0Q3Jwnegfeqoa&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'andra',
    password:       'carvajal123',
    nombre:         'Andra',
    apellido:       'Marulanda Ballesteros',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1IjZQ9p-EKy8_SNIqny1FHi5WEH_ljByV&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'leidyf',
    password:       'carvajal123',
    nombre:         'Leidy',
    apellido:       'Fernández Lopez',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1JTebihBGWbM-0RLTBzunS_ItaCuQQ2Ud&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'jose',
    password:       'carvajal123',
    nombre:         'José',
    apellido:       'David Calle',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1w9XPRfB7fk_drxJXp_vq7jjkIiUJhieD&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'camila',
    password:       'carvajal123',
    nombre:         'Camila',
    apellido:       'Arcila',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1ebeVu28R80TIvwHWa7l4w4kEblZMGSVe&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'luna',
    password:       'carvajal123',
    nombre:         'Luna',
    apellido:       'Rodríguez Sánchez',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1TCgikN7mfhCBBg0_BW6TJVu3jj8pXNF7&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'juliana',
    password:       'carvajal123',
    nombre:         'Juliana',
    apellido:       'Villamil Martinez',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1hAgm6wN00C2SSpNdmgVsCQY3guDg_CwI&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'alejandro',
    password:       'carvajal123',
    nombre:         'Alejandro',
    apellido:       'Bedoya Espitia',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1Bd4ZfTTNHuLoDhjuu26L2CEGk5XZdcNj&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'federico',
    password:       'carvajal123',
    nombre:         'Federico',
    apellido:       'Caicedo Rengifo',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1VbTpULDi_90SHSdJVbhU3-OZS1X_i4-V&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'angie',
    password:       'carvajal123',
    nombre:         'Angie',
    apellido:       'Rodriguez',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1qNAWmCoSIGIMzgTMPVBYvMMucU7rE6XN&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'juan',
    password:       'carvajal123',
    nombre:         'Juan',
    apellido:       'Gil Antía',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=13XtjNBdyAugftHgbgtTunVrQy8gmhhgT&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'alisson',
    password:       'carvajal123',
    nombre:         'Alisson',
    apellido:       'Osorio',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1oCgUzbUrYeIgxDqS7vXASkmsEdN5z53o&sz=w200',
    diasTrabajando: 3
  },
  {
    usuario:        'brandon',
    password:       'carvajal123',
    nombre:         'Brandon',
    apellido:       'Bernal',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1X1r6ba_CHHy4KXxfFGuXKHKnciFhdeJ-&sz=w200',
    diasTrabajando: 3
  },
   {
   usuario:        'adriana',
    password:       'carvajal123',
    nombre:         'Adriana Raquel',
    apellido:       'Ospina',
    fotoPerfil:     'adriana.png',
    diasTrabajando: 3
  },
   {
     usuario:        'santiago',
    password:       'carvajal123',
    nombre:         'Santi',
    apellido:       'Colombina',
    fotoPerfil:     'https://drive.google.com/thumbnail?id=1X1r6ba_CHHy4KXxfFGuXKHKnciFhdeJ-&sz=w200',
    diasTrabajando: 3
  }
];

/* ──────────────────────────────────────────────
   DEFINICIÓN DEL MAPA DE RUTA
   Generado dinámicamente con un bucle for
────────────────────────────────────────────── */
const paradasRuta = [
  {
    numero:      1,
    materia:     'Historia Empresarial',
    descripcion: 'Descubre los orígenes y la evolución de Carvajal S.A. a través de las pistas históricas.',
    habilitada:  true,
    enlace:      'pistas.html',
    cta:         'Iniciar parada',
    icono:       'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    numero:      2,
    materia:     'Introducción a la Administración',
    descripcion: 'Misión, visión, valores, organigrama y estrategia de Carvajal S.A.',
    habilitada:  true,
    enlace:      'estacion2.html',
    cta:         'Iniciar parada',
    icono:       'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11'
  },
  {
    numero:      3,
    materia:     'Ética',
    descripcion: 'Valores, código de ética, dilemas, RSE, ODS y cultura organizacional.',
    habilitada:  true,
    enlace:      'estacion3.html',
    cta:         'Iniciar parada',
    icono:       'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }
];

/* ──────────────────────────────────────────────
   ESTADO DE LA APLICACIÓN
────────────────────────────────────────────── */
let usuarioActivo = null;
let typewriterTimer = null;

/* ──────────────────────────────────────────────
   UTILIDADES
────────────────────────────────────────────── */

/**
 * Convierte días en un texto legible
 * @param {number} dias
 * @returns {string}
 */
function formatearDias(dias) {
  if (dias >= 365) {
    const anios = Math.floor(dias / 365);
    const resto = dias % 365;
    const meses = Math.floor(resto / 30);
    if (meses > 0) return `${anios} año${anios > 1 ? 's' : ''} y ${meses} mes${meses > 1 ? 'es' : ''}`;
    return `${anios} año${anios > 1 ? 's' : ''}`;
  }
  if (dias >= 30) {
    const meses = Math.floor(dias / 30);
    return `${meses} mes${meses > 1 ? 'es' : ''}`;
  }
  return `${dias} día${dias !== 1 ? 's' : ''}`;
}

/* ──────────────────────────────────────────────
   FASE 1: LÓGICA DE LOGIN
────────────────────────────────────────────── */

/**
 * Busca un colaborador en la base de datos
 * @param {string} usuario
 * @param {string} password
 * @returns {Object|null}
 */
function autenticar(usuario, password) {
  return baseDeDatos.find(
    col => col.usuario.toLowerCase() === usuario.toLowerCase() &&
           col.password === password
  ) || null;
}

/**
 * Muestra un mensaje de error en el login
 * @param {string} mensaje
 */
function mostrarErrorLogin(mensaje) {
  const errorEl = document.getElementById('loginError');
  errorEl.textContent = mensaje;
  errorEl.style.opacity = '1';

  // Animación de shake
  const card = document.querySelector('.login-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'shake 0.4s ease';
}

/**
 * Limpia el error del login
 */
function limpiarErrorLogin() {
  const errorEl = document.getElementById('loginError');
  errorEl.textContent = '';
}

/**
 * Transición de Login → Perfil con fade-out
 * @param {Object} colaborador
 */
function transicionAPeril(colaborador) {
  usuarioActivo = colaborador;

  const loginScreen = document.getElementById('loginScreen');
  loginScreen.classList.add('fade-out');

  setTimeout(() => {
    loginScreen.classList.remove('active', 'fade-out');
    loginScreen.style.display = 'none';
    mostrarPerfil(colaborador);
  }, 600);
}

/* ──────────────────────────────────────────────
   FASE 2: PERFIL Y ANIMACIÓN DE BIENVENIDA
────────────────────────────────────────────── */

/**
 * Renderiza la pantalla de perfil
 * @param {Object} col - colaborador activo
 */
function mostrarPerfil(col) {
  const profileScreen = document.getElementById('profileScreen');
  profileScreen.style.display = '';
  profileScreen.classList.add('active');

  // Foto
  const foto = document.getElementById('profilePhoto');
  foto.src = col.fotoPerfil;
  foto.alt = `${col.nombre} ${col.apellido}`;

  // Nombre
  document.getElementById('profileName').textContent = `${col.nombre} ${col.apellido}`;

  // Días trabajando
  const diasTexto = formatearDias(col.diasTrabajando);
  document.getElementById('profileDays').textContent =
    `${col.diasTrabajando.toLocaleString('es-CO')} días en la familia Carvajal`;

  // Construir mensaje de bienvenida
  const mensaje = `¡Hola, ${col.nombre}! Llevas ${diasTexto} siendo parte de nuestra historia. Hoy inicias un recorrido especial por nuestros 120 años de trayectoria. En Carvajal hacemos las cosas bien.`;

  // Iniciar animación de máquina de escribir
  setTimeout(() => iniciarTypewriter(mensaje), 600);

  // Renderizar mapa de ruta
  setTimeout(() => generarMapaRuta(), 900);
}

/**
 * Animación de máquina de escribir
 * @param {string} texto - texto completo a mostrar
 */
function iniciarTypewriter(texto) {
  if (typewriterTimer) clearInterval(typewriterTimer);

  const el = document.getElementById('typewriterText');
  el.textContent = '';
  let index = 0;
  const velocidad = 28; // ms por carácter

  typewriterTimer = setInterval(() => {
    if (index < texto.length) {
      el.textContent += texto.charAt(index);
      index++;
    } else {
      clearInterval(typewriterTimer);
      // Ocultar cursor parpadeante al terminar (opcional: dejar visible)
    }
  }, velocidad);
}

/* ──────────────────────────────────────────────
   FASE 3: GENERACIÓN DINÁMICA DEL MAPA DE RUTA
   (Bucle for sobre el array paradasRuta)
────────────────────────────────────────────── */

/**
 * Genera dinámicamente el mapa de ruta usando un bucle for
 */
function generarMapaRuta() {
  const container = document.getElementById('roadmapContainer');
  container.innerHTML = '';

  for (let i = 0; i < paradasRuta.length; i++) {
    const parada = paradasRuta[i];
    const itemEl = crearItemRuta(parada, i);
    container.appendChild(itemEl);
  }
}

/**
 * Crea el elemento DOM para una parada del mapa
 * @param {Object} parada
 * @param {number} idx - índice para animaciones de delay
 * @returns {HTMLElement}
 */
function crearItemRuta(parada, idx) {
  const item = document.createElement('div');
  item.className = `roadmap-item ${parada.habilitada ? 'enabled-item' : 'disabled-item'} fade-in-up`;
  item.style.animationDelay = `${0.3 + idx * 0.18}s`;

  // Círculo numerado
  const circulo = document.createElement('div');
  circulo.className = `roadmap-circle ${parada.habilitada ? 'enabled' : 'disabled'}`;
  circulo.innerHTML = `<span class="stop-num">${parada.numero}</span>`;

  // Contenido
  const contenido = document.createElement('div');
  contenido.className = 'roadmap-content';

  const etiqueta = document.createElement('p');
  etiqueta.className = 'roadmap-label';
  etiqueta.textContent = `Parada ${parada.numero}`;

  const nombre = document.createElement('h4');
  nombre.className = 'roadmap-name';
  nombre.textContent = parada.materia;

  const descripcion = document.createElement('p');
  descripcion.className = 'roadmap-desc';
  descripcion.textContent = parada.descripcion;

  // Botón de acción
  let boton;
  if (parada.habilitada && parada.enlace) {
    boton = document.createElement('a');
    boton.href = parada.enlace;
    boton.className = 'roadmap-btn btn-go';
    boton.innerHTML = `
      ${parada.cta}
      <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
    `;
  } else {
    boton = document.createElement('button');
    boton.disabled = true;
    boton.className = 'roadmap-btn btn-locked';
    boton.innerHTML = `
      <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v2z"/></svg>
      ${parada.cta}
    `;
  }

  contenido.appendChild(etiqueta);
  contenido.appendChild(nombre);
  contenido.appendChild(descripcion);
  contenido.appendChild(boton);

  item.appendChild(circulo);
  item.appendChild(contenido);

  return item;
}

/* ──────────────────────────────────────────────
   LOGOUT
────────────────────────────────────────────── */
function cerrarSesion() {
  if (typewriterTimer) clearInterval(typewriterTimer);
  usuarioActivo = null;

  const profileScreen = document.getElementById('profileScreen');
  profileScreen.classList.add('fade-out');

  setTimeout(() => {
    profileScreen.classList.remove('active', 'fade-out');
    profileScreen.style.display = 'none';

    // Limpiar campos
    document.getElementById('inputUsuario').value = '';
    document.getElementById('inputPassword').value = '';
    limpiarErrorLogin();

    const loginScreen = document.getElementById('loginScreen');
    loginScreen.style.display = '';
    loginScreen.classList.add('active');
  }, 500);
}

/* ──────────────────────────────────────────────
   INICIALIZACIÓN Y EVENT LISTENERS
────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ── Shake keyframe (inyectado en JS) ──
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100%{transform:translateX(0)}
      20%{transform:translateX(-8px)}
      40%{transform:translateX(8px)}
      60%{transform:translateX(-5px)}
      80%{transform:translateX(5px)}
    }
  `;
  document.head.appendChild(style);

  // ── Estado inicial: solo login visible ──
  document.getElementById('profileScreen').style.display = 'none';

  // ── Botón de login ──
  document.getElementById('btnLogin').addEventListener('click', () => {
    const usuario  = document.getElementById('inputUsuario').value.trim();
    const password = document.getElementById('inputPassword').value;

    limpiarErrorLogin();

    if (!usuario) {
      mostrarErrorLogin('Por favor ingresa tu usuario.');
      document.getElementById('inputUsuario').focus();
      return;
    }
    if (!password) {
      mostrarErrorLogin('Por favor ingresa tu contraseña.');
      document.getElementById('inputPassword').focus();
      return;
    }

    const colaborador = autenticar(usuario, password);

    if (!colaborador) {
      mostrarErrorLogin('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
      document.getElementById('inputPassword').value = '';
      document.getElementById('inputPassword').focus();
      return;
    }

    transicionAPeril(colaborador);
  });

  // ── Enter en campos activa login ──
  ['inputUsuario', 'inputPassword'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btnLogin').click();
    });
  });

  // ── Botón logout ──
  document.getElementById('btnLogout').addEventListener('click', cerrarSesion);

  // ── Limpiar error al escribir ──
  document.getElementById('inputUsuario').addEventListener('input', limpiarErrorLogin);
  document.getElementById('inputPassword').addEventListener('input', limpiarErrorLogin);

});
