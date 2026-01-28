let precio = 300
let precioMin = 150
function sendToWhatsApp() {
  const input = document.getElementById('userMessage');
  const message = encodeURIComponent(input.value);
  const phoneNumber = "+525560031903";
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function openModal(type) {
  const modal = document.getElementById('infoModal');
  const simpleContent = document.getElementById('simpleModalContent');
  const fullInfoContent = document.getElementById('fullInfoContent');

  const title = document.getElementById('modalTitle');
  const text = document.getElementById('modalText');

  simpleContent.style.display = 'none';
  fullInfoContent.style.display = 'none';

  switch (type) {
    case 'consentimiento':
      title.innerText = 'Consentimiento Informado';
      text.innerText = `Al hacer uso de este servicio, usted manifiesta su consentimiento informado y acepta los siguientes términos: 
          
          El servicio de orientación psicológica ofrecido a través de esta plataforma tiene como objetivo brindar una intervención breve, inmediata y profesional, no sustituyendo procesos terapéuticos prolongados ni tratamientos médicos o psiquiátricos. 
          
          El servicio se ofrece en línea, únicamente para mayores de edad, a través de la plataforma WhatsApp, por profesionales titulados en Psicología, quienes actuarán con base en su experiencia y juicio clínico. 
          
          Usted reconoce que este servicio no está diseñado para atender emergencias psicológicas, crisis suicidas ni situaciones que requieran intervención presencial inmediata. En dichos casos, se le recomendará acudir a los servicios de emergencia o instituciones especializadas. 
          
          Se hará todo lo posible por brindar atención oportuna. Sin embargo, el servicio funciona bajo demanda y está sujeto a disponibilidad. Si los profesionales se encuentran ocupados, se responderá tan pronto como sea posible. 
          
          El monto sugerido por la orientación se comunicará al finalizar la sesión, basado en el tiempo invertido y la naturaleza de la atención brindada. Usted podrá elegir libremente el monto a aportar, desde $100 MXN por nuestro servicio más básico hasta un máximo de ${precio + 100} MXN por hora de atención. 
          
          El uso continuo y reiterado del servicio sin realizar aportes podrá ser considerado un uso inapropiado. Nos reservamos el derecho de suspender la atención a usuarios que incurran en esta práctica.`
        ;
      simpleContent.style.display = 'block';
      break;

    case 'servicios':
      title.innerText = 'Servicios';
      text.innerText = `
            Consejo 100: 1 Pregunta - 1 Respuesta. Usted nos hace una pregunta y nosotros le preparamos una respuesta cálida, humana y profesional en un máximo de 24 horas.
            
            Consejo breve libre: Lea y Conteste cuando tenga tiempo. Nosotros contestaremos a sus mensajes en menos de 24 horas y usted tendrá 8 horas para responder antes de que se dé por terminada la consulta. 
             
            Consejo breve premium: Respuestas inmediata del consejero desde que comienza la conversación (max. 10 min en lo que el consejero prepara la respuesta) .
            
            Terapia psicológica presencial en Coyoacán, CDMX
            `
        ;
      simpleContent.style.display = 'block';
      break;
    case 'descargo':
      title.innerText = 'Descargo de Responsabilidad';
      text.innerText = "Este servicio no constituye un tratamiento psicológico formal ni reemplaza la atención presencial o continua de un especialista en salud mental. Las opiniones y orientaciones brindadas tienen un carácter informativo, preventivo y de contención inicial. Cualquier acción que usted decida tomar con base en nuestras sugerencias es de su exclusiva responsabilidad. En caso de requerir seguimiento, diagnóstico clínico, medicación o intervención de mayor profundidad, se le orientará a los canales pertinentes.";
      simpleContent.style.display = 'block';
      break;
    case 'privacidad':
      title.innerText = 'Política de Privacidad';
      text.innerText = "Nos comprometemos a proteger su privacidad. La información personal y los datos compartidos durante la orientación se mantendrán en estricta confidencialidad y no serán divulgados a terceros, salvo en los siguientes casos: cuando exista una obligación legal o requerimiento de autoridad competente; o cuando exista riesgo inminente para usted o para terceros, conforme al código ético profesional. No recopilamos datos sensibles a través de esta web, ni utilizamos cookies para fines de rastreo. Las conversaciones mantenidas por WhatsApp están sujetas a la política de privacidad de dicha plataforma. Usted tiene derecho a solicitar en cualquier momento el cese de la orientación o la eliminación de sus datos de contacto."
        ;
      simpleContent.style.display = 'block';
      break;
    case 'politicas':
      title.innerText = 'Políticas de Atención';
      text.innerText = `Información y Políticas de Atención

        ❗ Descargo de responsabilidad
        La orientación psicológica ofrecida a través de ConsejoPsi no sustituye un proceso de psicoterapia ni constituye una atención de urgencia ante crisis graves. Si estás en una situación de riesgo o emergencia, te recomendamos acudir a los servicios de emergencia psicológica de tu localidad.

        ❗Este servicio está dirigido exclusivamente a personas mayores de 18 años. Al utilizar nuestros canales de orientación psicológica, el usuario declara ser mayor de edad y contar con la capacidad legal para solicitar este tipo de acompañamiento. En caso de requerirse atención psicológica para un menor de edad, será necesario que el contacto sea gestionado directamente por su madre, padre o tutor legal, quien asumirá la responsabilidad de la comunicación y cualquier posible intervención

        💬 Sobre la atención y tiempos de respuesta
        Nuestro objetivo es ofrecer atención breve, profesional y con la mayor inmediatez posible, sin necesidad de agendar. Sin embargo, este servicio opera bajo disponibilidad, por lo que, si nos encontramos atendiendo a otras personas, es posible que tu mensaje no sea respondido de inmediato. En cualquier caso, te responderemos tan pronto como nos sea posible.

        💳 Sistema de pago voluntario y solidario
        El servicio de ConsejoPsi opera bajo un modelo de pago posterior, libre y sugerido. Esto significa que, una vez recibida tu orientación, podrás aportar el monto que consideres justo con base en el tiempo de atención y el valor recibido.
        - Para el modelo de atención libre (respuesta no inmediata) el limite minimo de pago es de $${precioMin} MXN y el límite máximo sugerido es de $${precio} MXN.
        - Para el modelo de atención premium (respuesta máximo 10 minutos en responder dependiendo del caso) el limite mínimo de pago es de $${precioMin + 50} MXN y límite máximo sugerido es de $${precio + 100} MXN.
        - El monto específico para ambos modelos de atención se determinará según el caso, tiempo invertido y posibilidades del usuario.
        - En caso de que el cliente pague por adelantado, el servicio se otorgara según la disponibilidad. Asi mismo, el consejero podrá sugerir un nuevo pago al final en caso de que haya una diferencia entre el servicio solicitado y el nivel de atención que requirió el cliente.
        - Las aportaciones voluntarias y pagos hechos a través de Ko-fi no fungen como pagos por adelantado para ninguno de los servicios.
        - Tu aportación nos permite seguir ofreciendo atención accesible y profesional a quienes más lo necesitan.
        
        🚫 Uso ético del servicio
        Con el fin de asegurar la sostenibilidad de este proyecto, nos reservamos el derecho de limitar o suspender la atención a usuarios que utilicen el servicio de manera recurrente sin realizar aportaciones. Valoramos profundamente tu confianza, y pedimos que este espacio sea utilizado de forma respetuosa y solidaria.`;

      simpleContent.style.display = 'block';
      break;


    case 'info':
    default:
      fullInfoContent.style.display = 'block';
      break;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_8vnmm7t', 'template_0tr1mwu', this)
    .then(function () {
      alert("Mensaje enviado correctamente. Gracias por tu mensaje.");
      e.target.reset();
    }, function (error) {
      console.log(error);
      alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    });
});

const input = document.getElementById("user-input");
input.addEventListener("focus", () => {
  setTimeout(() => {
    input.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 300);
});

// ------- Helpers seguros -------
function track(eventName, params = {}) {
  if (typeof gtag === 'function') {
    // agrega debug_mode si cargaste la página con ?debug=1
    const isDebug = /[?&]debug=1/.test(location.search);
    gtag('event', eventName, isDebug ? { ...params, debug_mode: true } : params);
  } else {
    console.warn('gtag no encontrado');
  }
}


// ------- 1) Escribir en la caja de mensaje (dispara 1 vez por vista) -------
(function initTypingEvent() {
  const msg = document.getElementById('userMessage');
  if (!msg) return;
  let fired = false;
  msg.addEventListener('input', () => {
    if (!fired && msg.value.trim().length > 0) {
      track('typing_message', { event_category: 'engagement' });
      fired = true;
    }
  });
})();

// ------- 2) Click al botón/enlace de WhatsApp -------
(function initWhatsAppClick() {
  const btn = document.querySelector('.send-button');
  if (!btn) return;
  btn.addEventListener('click', () => {
    track('click_whatsapp', { event_category: 'engagement', event_label: 'CTA WhatsApp' });
    // No bloqueamos la apertura; tu sendToWhatsApp() abre en _blank
  });
})();

// ------- 3) Abrir una pregunta frecuente (solo cuando se abre) -------
(function initFaqOpen() {
  document.querySelectorAll('.faq-item').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        const q = d.querySelector('summary h3')?.textContent?.trim() || 'desconocida';
        track('faq_open', { item: q });
      }
    });
  });
})();

// ------- 4) Abrir el modal (cualquier tipo) -------
// Envolvemos tu openModal existente para medirlo sin tocar su lógica.
(function wrapOpenModal() {
  const original = window.openModal;
  if (typeof original !== 'function') return;
  window.openModal = function(type) {
    track('open_modal', { type: type || 'info' });
    return original.apply(this, arguments);
  };
})();

// ------- 5) Envío del formulario de contacto (id correcto) -------
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', () => {
    track('contact_submit', { event_category: 'lead' });
  });
})();
