const moments = [
  {number:1,text:'El movimiento de las olas',emoji:'🌊',image:"imagenes/01.png"},
  {number:2,text:'Vivir sin prisa',emoji:'☀️',image:"imagenes/02.png"},
  {number:3,text:'Llorar de la risa',emoji:'😂',image:"imagenes/03.png"},
  {number:4,text:'Barbacoa con amigos',emoji:'🥂',image:"imagenes/04.png"},
  {number:5,text:'Noche de Reyes',emoji:'🎄',image:"imagenes/05.png"},
  {number:6,text:'Hacer cerámica',emoji:'🏺',image:"imagenes/06.png"},
  {number:7,text:'Una sobremesa que se alarga',emoji:'🍽️',image:"imagenes/07.png"},
  {number:8,text:'Abrazar',emoji:'🤗',image:"imagenes/08.png"},
  {number:9,text:'1 de agosto',emoji:'✨',image:"imagenes/09.png"},
  {number:10,text:'El café por la mañana',emoji:'☕',image:"imagenes/10.png"},
  {number:11,text:'Mi comida favorita',emoji:'❤️',image:"imagenes/11.png"},
  {number:12,text:'Recordar momentos bonitos',emoji:'🌅',image:"imagenes/12.png"},
  {number:13,text:'Hacer velas',emoji:'🕯️',image:"imagenes/13.png"},
  {number:14,text:'Desconectar para volver a conectar',emoji:'🌿',image:"imagenes/14.png"},
  {number:15,text:'Nadar bajo la lluvia',emoji:'🌧️',image:"imagenes/15.png"},
  {number:16,text:'Pedir un deseo',emoji:'⭐',image:"imagenes/16.png"},
  {number:17,text:'Cumplir un sueño',emoji:'🌈',image:"imagenes/17.png"},
  {number:18,text:'Verte sonreír',emoji:'😊',image:"imagenes/18.png"},
  {number:19,text:'Achuchar a tu mascota',emoji:'🐾',image:"imagenes/19.png"},
  {number:20,text:'Tomarte una copa de vino',emoji:'🍷',image:"imagenes/20.png"},
  {number:21,text:'Hacer terapia',emoji:'💭',image:"imagenes/21.png"},
  {number:22,text:'Una noche inolvidable',emoji:'🌙',image:"imagenes/22.png"},
  {number:23,text:'Escapada de montaña',emoji:'⛰️',image:"imagenes/23.png"},
  {number:24,text:'Subir la música en el coche',emoji:'🎵',image:"imagenes/24.png"},
  {number:25,text:'Los primeros rayos de sol',emoji:'🌞',image:"imagenes/25.png"},
  {number:26,text:'Cancelar un plan que no te apetecía',emoji:'😌',image:"imagenes/26.png"},
  {number:27,text:'La luna',emoji:'🌙',image:"imagenes/27.png"},
  {number:28,text:'Sábanas limpias',emoji:'🛏️',image:"imagenes/28.png"},
  {number:29,text:'Manta en invierno',emoji:'🧣',image:"imagenes/29.png"},
  {number:30,text:'Hacer deporte',emoji:'🏃',image:"imagenes/30.png"},
  {number:31,text:'Tu caramelo favorito',emoji:'🍬',image:"imagenes/31.png"},
  {number:32,text:'Diluvio en verano',emoji:'⛈️',image:"imagenes/32.png"},
  {number:33,text:'Olor a tierra mojada',emoji:'🌱',image:"imagenes/33.png"},
  {number:34,text:'El primer baño del verano',emoji:'🏖️',image:"imagenes/34.png"},
  {number:35,text:'Sentirte querido',emoji:'❤️',image:"imagenes/35.png"},
  {number:36,text:'Saber escuchar',emoji:'👂',image:"imagenes/36.png"},
  {number:37,text:'Viernes noche',emoji:'🎉',image:"imagenes/37.png"},
  {number:38,text:'Que te cuiden',emoji:'🤍',image:"imagenes/38.png"},
  {number:39,text:'Bailar sin pensar',emoji:'💃',image:"imagenes/39.png"},
  {number:40,text:'Despertarte sin hora',emoji:'😴',image:"imagenes/40.png"},
  {number:41,text:'Un viaje improvisado',emoji:'🗺️',image:"imagenes/41.png"},
  {number:42,text:'El olor a pan recién hecho',emoji:'🍞',image:"imagenes/42.png"},
  {number:43,text:'Un concierto en directo',emoji:'🎶',image:"imagenes/43.png"},
  {number:44,text:'Caminar descalzo por la arena',emoji:'🏝️',image:"imagenes/44.png"},
  {number:45,text:'Una siesta de domingo',emoji:'😴',image:"imagenes/45.png"},
  {number:46,text:'Una buena noticia',emoji:'🎁',image:"imagenes/46.png"},
  {number:47,text:'Cantar a pleno pulmón',emoji:'🎤',image:"imagenes/47.png"},
  {number:48,text:'Una chimenea encendida',emoji:'🔥',image:"imagenes/48.png"},
  {number:49,text:'Desayuno en la cama',emoji:'🥐',image:"imagenes/49.png"},
  {number:50,text:'Ver las estrellas',emoji:'🌟',image:"imagenes/50.png"},
  {number:51,text:'Una tarde de juegos',emoji:'🎲',image:"imagenes/51.png"},
  {number:52,text:'El olor de un libro nuevo',emoji:'📖',image:"imagenes/52.png"},
  {number:53,text:'Una noche de verano',emoji:'🌻',image:"imagenes/53.png"},
  {number:54,text:'Un helado en verano',emoji:'🍦',image:"imagenes/54.png"},
  {number:55,text:'Una película bajo la manta',emoji:'🎬',image:"imagenes/55.png"},
];


// ======================================================
// ESTADO DEL JUEGO
// ======================================================

let available = [...moments];

// Aquí guardamos todos los momentos que ya han salido
let history = [];

let started = false;


// ======================================================
// ELEMENTOS DEL HTML
// ======================================================

const home = document.getElementById('home');
const game = document.getElementById('game');

const draw = document.getElementById('draw');
const start = document.getElementById('start');

const number = document.getElementById('number');
const phrase = document.getElementById('phrase');
const remaining = document.getElementById('remaining');

const art = document.getElementById('art');
const placeholder = document.getElementById('art-placeholder');


// ======================================================
// ELEMENTOS DEL HISTORIAL
// ======================================================

const historyBtn = document.getElementById('historyBtn');
const closeHistoryBtn = document.getElementById('closeHistory');

const historyPanel = document.getElementById('historyPanel');
const historyOverlay = document.getElementById('historyOverlay');

const historyList = document.getElementById('historyList');
const emptyHistory = document.getElementById('emptyHistory');


// ======================================================
// CONTADOR
// ======================================================

function count() {

  const n = available.length;

  remaining.textContent =
    n === 1
      ? '1 momento por descubrir'
      : `${n} momentos por descubrir`;

  draw.textContent =
    n
      ? 'Sacar momento'
      : 'Bingo terminado';

  draw.disabled = !n;
}


// ======================================================
// MOSTRAR MOMENTO
// ======================================================

function show(item) {

  phrase.textContent = item.text;

  // Ocultamos la imagen mientras carga
  art.classList.add('hidden');

  placeholder.classList.remove('hidden');

  placeholder.textContent = 'DOMOI';


  const img = new Image();

  img.src = item.image;

  img.alt = item.text;


  // Cuando la imagen carga correctamente
  img.onload = () => {

    art.src = img.src;

    art.alt = img.alt;

    placeholder.classList.add('hidden');

    art.classList.remove('hidden');

  };


  // Si no encuentra la imagen
  img.onerror = () => {

    placeholder.textContent = item.emoji;

  };
}


// ======================================================
// SACAR UN MOMENTO
// ======================================================

function drawMoment() {

  // Si no quedan momentos, no hacemos nada
  if (!available.length) return;


  // Elegimos una posición aleatoria
  const i =
    Math.floor(
      Math.random() * available.length
    );


  // Sacamos el momento del listado disponible
  // para que no pueda volver a salir
  const [item] =
    available.splice(i, 1);


  // Guardamos el momento en el historial
  history.push(item);


  // Mostramos el momento
  show(item);


  // Actualizamos contador
  count();


  // Actualizamos historial
  renderHistory();
}


// ======================================================
// HISTORIAL
// ======================================================

function renderHistory() {

  // Limpiamos el listado actual
  historyList.innerHTML = '';


  // Si no hay historial mostramos el mensaje
  if (history.length === 0) {

    emptyHistory.classList.remove('hidden');

    return;

  }


  // Ocultamos el mensaje vacío
  emptyHistory.classList.add('hidden');


  // Copiamos el array y lo invertimos
  // para mostrar primero el último momento
  [...history]
    .reverse()
    .forEach((item, index) => {


      const row =
        document.createElement('div');


      row.className =
        'history-item';


      row.innerHTML = `

        <span class="history-text">
          ${item.text}
        </span>

        <span class="history-position">
          ${history.length - index}
        </span>

      `;


      historyList.appendChild(row);

    });
}


// ======================================================
// ABRIR HISTORIAL
// ======================================================

function openHistory() {

  renderHistory();

  historyPanel.classList.remove('hidden');

}


// ======================================================
// CERRAR HISTORIAL
// ======================================================

function closeHistory() {

  historyPanel.classList.add('hidden');

}


// ======================================================
// COMENZAR BINGO
// ======================================================

start.onclick = () => {

  started = true;

  home.classList.add('hidden');

  game.classList.remove('hidden');

  count();

};


// ======================================================
// BOTÓN SACAR MOMENTO
// ======================================================

draw.onclick = () => {

  drawMoment();

};



// ======================================================
// BOTÓN HISTORIAL
// ======================================================

historyBtn.onclick = () => {

  openHistory();

};


// ======================================================
// CERRAR HISTORIAL
// ======================================================

closeHistoryBtn.onclick = () => {

  closeHistory();

};


// ======================================================
// CERRAR HISTORIAL PULSANDO FUERA
// ======================================================

historyOverlay.onclick = () => {

  closeHistory();

};


// ======================================================
// ESTADO INICIAL
// ======================================================

count();

renderHistory();
