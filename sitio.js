/* El Chante del Zagua — mock de propuesta. Nada de esto envía datos a ningún lado. */
(function () {
  'use strict';

  var PRODUCTOS = [
    { nombre: 'Rampa Talla S', precio: '₡12.500', cats: ['Movilidad', 'Perros', 'Gatos'], tam: ['Pequeño', 'Mediano'],
      tags: ['Movilidad'], desc: 'Altura fija de 40 cm, plegable. 85 × 30 cm. Para sillones o camas de hasta 50 cm.',
      foto: 'Rampa S plegada y abierta, vista de tres cuartos' },
    { nombre: 'Rampa Talla M', precio: '₡16.500', cats: ['Movilidad', 'Perros'], tam: ['Mediano', 'Grande'],
      tags: ['Movilidad', 'La más pedida'], desc: '3 alturas graduables hasta 55 cm. 1 m × 35 cm. Para camas de hasta 60 cm.',
      foto: 'Rampa M apoyada en una cama, alfombra visible' },
    { nombre: 'Rampa Talla L', precio: '₡21.500', cats: ['Movilidad', 'Perros'], tam: ['Mediano', 'Grande'],
      tags: ['Movilidad'], desc: '4 alturas graduables hasta 60 cm. 1,40 m × 30 cm. Para camas de hasta 70 cm.',
      foto: 'Rampa L extendida, se ven los topes de altura' },
    { nombre: 'Comedero Michi', precio: '₡5.000', cats: ['Gatos', 'Comederos'], tam: ['Pequeño'],
      tags: ['Comederos'], desc: 'Base de madera a la altura del michi. No incluye el tazón.',
      foto: 'Comedero simple recortado en blanco' },
    { nombre: 'Camita', precio: '₡10.000', cats: ['Camas', 'Perros', 'Gatos'], tam: ['Pequeño', 'Mediano'],
      tags: ['Camas', 'Con nombre'], desc: 'Marco de madera lijada con el nombre grabado en la cabecera.',
      foto: 'Camita de madera con cojín, recortada' },
    { nombre: 'Casa Michi', precio: '₡10.000', cats: ['Gatos'], tam: ['Pequeño'],
      tags: ['Gatos'], desc: 'Casita cerrada con techito, para que el gato tenga su cueva.',
      foto: 'Casa para gato de frente, con gato asomado' },
    { nombre: 'Comedero Firu', precio: '₡15.000', cats: ['Comederos', 'Perros'], tam: ['Mediano', 'Grande'],
      tags: ['Comederos', 'Con nombre'], desc: 'Doble, con el letrero grabado a mano con el nombre de su peludito.',
      foto: 'Comedero doble con letrero FIRU, recortado', ficha: 'ficha.html' },
    { nombre: 'Casa Chihuahua', precio: '₡15.000', cats: ['Perros'], tam: ['Pequeño'],
      tags: ['Perros'], desc: 'Casa pequeña con techo a dos aguas, pensada para razas mini.',
      foto: 'Casita pequeña de madera, tres cuartos' },
    { nombre: 'Gradas de 3 o 4 escalones', precio: 'A cotizar', cats: ['Movilidad', 'Perros', 'Gatos'], tam: ['Pequeño', 'Mediano', 'Grande'],
      tags: ['Movilidad', 'A medida'], desc: 'Para camas altas donde la rampa ya no alcanza. Se hacen a la medida.',
      foto: 'Gradas de 3 escalones junto a una cama alta' },
    { nombre: 'Rascador y gimnasio de gato', precio: 'A cotizar', cats: ['Gatos'], tam: ['Pequeño', 'Mediano'],
      tags: ['Gatos', 'A medida'], desc: 'Torres con plataformas y poste forrado. Se arman según el espacio.',
      foto: 'Gimnasio de gato de cuerpo entero' },
    { nombre: 'Casa para perro grande', precio: 'A cotizar', cats: ['Perros'], tam: ['Grande'],
      tags: ['Perros', 'A medida'], desc: 'Casa de patio en madera tratada, con techo y piso levantado.',
      foto: 'Casa grande de madera en un patio' }
  ];

  var RAMPAS = [
    { talla: 'Talla S', precio: '₡12.500', altura: 'fija de 40 cm, plegable', medidas: '85 cm × 30 cm', ideal: 'sillones y camas bajas de máximo 50 cm' },
    { talla: 'Talla M', precio: '₡16.500', altura: '3 graduables, máx 55 cm', medidas: '1 m × 35 cm', ideal: 'camas medianas de máximo 60 cm' },
    { talla: 'Talla L', precio: '₡21.500', altura: '4 graduables, máx 60 cm', medidas: '1,40 m × 30 cm', ideal: 'camas altas de máximo 70 cm' }
  ];

  var FAQS = [
    ['¿Cuánto tardan en hacerlo?', 'Entre 1 y 3 días desde que confirmás el pedido. Si lleva grabado con nombre, igual: no cobra tiempo extra.'],
    ['¿Cuánto cuesta el envío?', 'Depende de tu zona y del tamaño del mueble. Dentro del GAM lo coordinamos nosotros; fuera del GAM va por Correos de Costa Rica. Te lo cotizamos al toque por WhatsApp, antes de que pagués.'],
    ['¿La rampa resbala?', 'No. Las tres tallas llevan cinta antideslizante sobre la alfombra, incluida sin costo extra.'],
    ['¿Cómo mido mi cama?', 'Del piso al colchón, no hasta la almohada. Si es un sillón, del piso al asiento. Con esa medida usá el buscador de arriba.'],
    ['¿Se puede guardar la rampa?', 'La Talla S es plegable y se guarda debajo de la cama o detrás de una puerta. La M y la L se apoyan de canto.'],
    ['¿Hacen medidas especiales?', 'Sí, es lo que más hacemos. Mandanos las medidas del espacio y una foto y te decimos qué se puede armar y cuánto sale.'],
    ['¿El comedero incluye el tazón?', 'No. El Comedero Michi se entrega solo con la base de madera, para que le pongás el tazón que ya usa.'],
    ['¿Cómo cuido la madera?', 'Paño apenas húmedo y secar. Nada de cloro ni de dejarla bajo la lluvia. Va sellada, pero es madera de verdad.']
  ];

  var estado = { cat: 'Todo', tam: 'Todos' };

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto !== undefined) n.textContent = texto;
    return n;
  }

  /* --- Menú móvil --- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMovil');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Catálogo filtrable --- */
  function pintarChips(cont, valores, clave) {
    if (!cont) return;
    cont.innerHTML = '';
    valores.forEach(function (v) {
      var b = el('button', 'chip', v);
      b.type = 'button';
      b.setAttribute('aria-pressed', estado[clave] === v ? 'true' : 'false');
      b.addEventListener('click', function () {
        estado[clave] = v;
        pintarChips(document.getElementById('chipsCat'), ['Todo', 'Perros', 'Gatos', 'Movilidad', 'Comederos', 'Camas'], 'cat');
        pintarChips(document.getElementById('chipsTam'), ['Todos', 'Pequeño', 'Mediano', 'Grande'], 'tam');
        pintarCatalogo();
      });
      cont.appendChild(b);
    });
  }

  function pintarCatalogo() {
    var grid = document.getElementById('gridProd');
    if (!grid) return;
    grid.innerHTML = '';
    var lista = PRODUCTOS.filter(function (p) {
      return (estado.cat === 'Todo' || p.cats.indexOf(estado.cat) >= 0) &&
             (estado.tam === 'Todos' || p.tam.indexOf(estado.tam) >= 0);
    });
    if (!lista.length) {
      var vacio = el('p', null, 'No hay nada con esos filtros. Escribinos y se lo hacemos a la medida.');
      vacio.style.color = '#6B6155';
      grid.appendChild(vacio);
      return;
    }
    lista.forEach(function (p) {
      var card = el('article', 'card prod');

      var foto = el('div', 'ph foto');
      foto.appendChild(el('b', null, 'Foto recortada'));
      foto.appendChild(document.createTextNode(p.foto));
      card.appendChild(foto);

      var cuerpo = el('div');
      cuerpo.style.flexGrow = '1';
      var tags = el('div', 'tags');
      p.tags.forEach(function (t) { tags.appendChild(el('span', 'tag', t)); });
      cuerpo.appendChild(tags);
      cuerpo.appendChild(el('h3', 'nom', p.nombre));
      cuerpo.appendChild(el('p', 'desc', p.desc));
      card.appendChild(cuerpo);

      var pie = el('div', 'pie');
      var precios = el('div');
      precios.appendChild(el('div', 'price', p.precio));
      precios.appendChild(el('div', 'ship', '+ envío'));
      pie.appendChild(precios);
      var cta;
      if (p.ficha) {
        cta = el('a', 'btn btn-am', 'Lo quiero');
        cta.href = p.ficha;
      } else {
        cta = el('button', 'btn btn-am', 'Lo quiero');
        cta.type = 'button';
      }
      cta.style.minHeight = '46px';
      cta.style.fontSize = '15px';
      cta.style.padding = '0 18px';
      pie.appendChild(cta);
      card.appendChild(pie);

      grid.appendChild(card);
    });
  }

  /* --- Buscador de rampa --- */
  function recomendar(cm) {
    if (!cm || isNaN(cm) || cm <= 0) {
      return { titulo: 'Escribí la altura', detalle: 'Con la medida del piso al colchón te decimos cuál talla le queda y cuánto sale.', precio: '—', aviso: '' };
    }
    if (cm <= 50) {
      return { titulo: 'Talla S', detalle: 'Altura fija de 40 cm · 85 × 30 cm · plegable, se guarda debajo de la cama. Con cinta antideslizante incluida.', precio: '₡12.500', aviso: '' };
    }
    if (cm <= 60) {
      return { titulo: 'Talla M', detalle: '3 alturas graduables hasta 55 cm · 1 m × 35 cm. La más pedida para camas de dormitorio. Con cinta antideslizante incluida.', precio: '₡16.500', aviso: '' };
    }
    if (cm <= 70) {
      return { titulo: 'Talla L', detalle: '4 alturas graduables hasta 60 cm · 1,40 m × 30 cm. Para camas altas. Con cinta antideslizante incluida.', precio: '₡21.500', aviso: '' };
    }
    return {
      titulo: 'Mejor unas gradas',
      detalle: 'Arriba de 70 cm la rampa queda muy empinada y su peludito no la usa. Le armamos unas gradas de 3 o 4 escalones a la medida.',
      precio: 'A cotizar',
      aviso: 'Ojo: ' + cm + ' cm se pasa del límite de la Talla L (70 cm). Escribinos por WhatsApp y lo resolvemos con gradas.'
    };
  }

  var input = document.getElementById('altura');
  function actualizarRec() {
    var r = recomendar(parseFloat(input.value));
    document.getElementById('recTitle').textContent = r.titulo;
    document.getElementById('recDetail').textContent = r.detalle;
    document.getElementById('recPrice').textContent = r.precio;
    var warn = document.getElementById('recWarn');
    warn.textContent = r.aviso;
    warn.hidden = !r.aviso;
  }
  if (input) {
    input.addEventListener('input', actualizarRec);
    var chipsAlt = document.getElementById('chipsAlt');
    ['45', '55', '65'].forEach(function (v) {
      var b = el('button', 'chip', v + ' cm');
      b.type = 'button';
      b.addEventListener('click', function () {
        input.value = v;
        Array.prototype.forEach.call(chipsAlt.children, function (c) { c.setAttribute('aria-pressed', c === b ? 'true' : 'false'); });
        actualizarRec();
      });
      chipsAlt.appendChild(b);
    });
  }

  /* --- Tabla comparativa de rampas --- */
  var tabla = document.getElementById('tablaRampas');
  if (tabla) {
    RAMPAS.forEach(function (r) {
      var card = el('article', 'card rampa');
      var cab = el('div', 'cab');
      cab.appendChild(el('div', 'chalk talla', r.talla));
      var pr = el('div');
      pr.style.textAlign = 'right';
      pr.appendChild(el('div', 'price', r.precio));
      pr.appendChild(el('div', 'ship', '+ envío'));
      cab.appendChild(pr);
      card.appendChild(cab);
      card.appendChild(el('div', 'veta'));

      var datos = el('div', 'datos');
      [['Altura', r.altura], ['Medidas', r.medidas], ['Ideal para', r.ideal]].forEach(function (par) {
        var linea = el('div');
        var b = el('b', null, par[0] + ': ');
        linea.appendChild(b);
        linea.appendChild(document.createTextNode(par[1]));
        datos.appendChild(linea);
      });
      card.appendChild(datos);

      var cinta = el('div', 'cinta');
      cinta.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7A3A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6.5 9.5 17.5 4 12"></path></svg>';
      cinta.appendChild(el('span', null, 'Cinta antideslizante incluida'));
      card.appendChild(cinta);
      card.appendChild(el('span', 'nuevo', 'Nuevo · Incluido'));

      tabla.appendChild(card);
    });
  }

  /* --- FAQ --- */
  var lista = document.getElementById('listaFaq');
  if (lista) {
    FAQS.forEach(function (par) {
      var d = el('details', 'faq');
      var s = el('summary');
      s.appendChild(document.createTextNode(par[0]));
      s.appendChild(el('span', 'mas', '+'));
      d.appendChild(s);
      d.appendChild(el('p', null, par[1]));
      lista.appendChild(d);
    });
  }

  pintarChips(document.getElementById('chipsCat'), ['Todo', 'Perros', 'Gatos', 'Movilidad', 'Comederos', 'Camas'], 'cat');
  pintarChips(document.getElementById('chipsTam'), ['Todos', 'Pequeño', 'Mediano', 'Grande'], 'tam');
  pintarCatalogo();
})();
