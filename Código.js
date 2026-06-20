
// 1. CONTROL DE PESTAÑAS INTERACTIVAS (Alternar Planos Físicos y Lógicos)
function switchTab(tabId) {
    // Buscar y ocultar todas las cajas de contenido de las topologías
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active-content');
    });
    
    // Apagar el estado iluminado (verde) de todos los botones de pestañas
    const buttons = document.querySelectorAll('.btn-tab');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Encender la pestaña que el usuario seleccionó mediante su ID
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active-content');
    }
    
    // Iluminar el botón al que se le hizo clic actualmente
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}

// 2. MOTOR DE CÁLCULO FINANCIERO (Calibrado al Presupuesto Real de la Propuesta)
function calcularPresupuesto() {
    const cantidadPcsInput = document.getElementById('cantidad-pcs');
    const tipoLicenciaSelect = document.getElementById('tipo-licencia');
    
    // CORRECCIÓN DE SEGURIDAD: Validación limpia sin operadores invertidos
    if (!cantidadPcsInput || !tipoLicenciaSelect) return;

    const cantidadPcs = parseInt(cantidadPcsInput.value) || 0;
    const tipoLicencia = tipoLicenciaSelect.value;
    
    // MATRIZ DE COSTOS UNITARIOS REALES (Calibrados con tu tabla de ajuste técnico)
    const costoPcHP = 1720000;       // Precio base por equipo corporativo (Sin licencia)
    const costoPuntoRed = 250000;    // Insumos e Infraestructura pasiva por nodo
    const costoManoObra = 90000;     // Ingeniería de configuración e integración CAMCOM por nodo
    
    let costoLicenciaSistemas = 0;
    if (tipoLicencia === 'windows') {
        costoLicenciaSistemas = 130000; // Licenciamiento Windows Pro Enterprise por nodo
    }

    // Fórmulas aritméticas comerciales dinámicas
    const totalHardware = cantidadPcs * (costoPcHP + costoLicenciaSistemas);
    const totalRed = cantidadPcs * costoPuntoRed;
    const totalObra = cantidadPcs * costoManoObra;
    const totalGeneral = totalHardware + totalRed + totalObra;

    // Formateador estándar de divisas para Pesos Colombianos (COP)
    const formatearCOP = (valor) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(valor);
    };

    // Inyección automatizada de los resultados lógicos en el HTML
    document.getElementById('res-hardware').innerText = formatearCOP(totalHardware);
    document.getElementById('res-red').innerText = formatearCOP(totalRed);
    document.getElementById('res-obra').innerText = formatearCOP(totalObra);
    document.getElementById('res-total').innerText = formatearCOP(totalGeneral);
}

// 3. DISPARADOR AUTOMÁTICO DE EVENTOS AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    // Forzar el cálculo automático apenas la página se monte en pantalla
    calcularPresupuesto();
    
    // Captura del Formulario de Contacto para emitir alertas corporativas premium
    const formularioContacto = document.getElementById('contactForm');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', (e) => {
            e.preventDefault(); // Detener la recarga tradicional de la página
            
            const nombreCliente = document.getElementById('nombre').value;
            
            // Ventana emergente con enfoque comercial de alta competencia
            alert(`🚀 ¡Propuesta TI En Marcha, ${nombreCliente}!\n\nEn CAMCOM Support hemos recibido sus requerimientos técnicos de infraestructura. Un Ingeniero de Redes de nuestra Ficha se contactará con usted para iniciar el Acuerdo de Nivel de Servicio (SLA).`);
            
            formularioContacto.reset(); // Limpiar las cajas de texto automáticamente
        });
    }
});
