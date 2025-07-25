"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  FiCheck, 
  FiUsers, 
  FiTrendingUp,
  FiZap,
  FiClock,
  FiMessageCircle,
  FiCheckCircle
} from "react-icons/fi";

export default function DalíTechFunnels() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = "+523334010959"; // Replace with actual WhatsApp number
  const whatsappMessage = "¡Hola! Quiero obtener mi plantilla de automatización GRATIS para WhatsApp 🚀";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Deja de Perder 🔥 <span className="text-orange-400">Leads Calientes</span> en WhatsApp
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-blue-200 mb-8">
              Automatiza tus Conversaciones y Convierte <span className="text-orange-400">3X Más Leads</span> en 7 Días
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Sin bots, sin código y sin gastar en publicidad. El sistema exacto que uso para generar leads 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8 border border-white/20"
          >
            <p className="text-orange-300 font-semibold text-lg mb-2">🎯 Perfecto para:</p>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-400" />
                <span>Coaches y Consultores</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-400" />
                <span>Infoproductores</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-400" />
                <span>Dueños de Pequeños Negocios</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-400" />
                <span>Vendedores Online</span>
              </div>
            </div>
          </motion.div>

          <motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <FiMessageCircle className="w-6 h-6" />
            ¡OBTÉN MI PLANTILLA GRATIS AHORA! 🚀
          </motion.a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800"
          >
            Esto es lo que Probablemente Está Pasando Ahora Mismo... 😰
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                emoji: "⏰",
                title: "Te Ahogas en Mensajes",
                description: "Pasando horas respondiendo manualmente cada mensaje de WhatsApp, sacrificando tiempo con familia y vida personal."
              },
              {
                emoji: "💸",
                title: "Leads se Enfrían",
                description: "Los prospectos calientes pierden interés mientras esperan tu respuesta. Literalmente estás viendo dinero irse."
              },
              {
                emoji: "😵",
                title: "Abrumado y Agotado",
                description: "Estás trabajando EN tu negocio en lugar de EN él. Sin tiempo para escalar o mejorar tus ofertas."
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500"
              >
                <div className="text-4xl mb-4">{problem.emoji}</div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">{problem.title}</h4>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-red-50 p-8 rounded-2xl border-2 border-red-200"
          >
            <h4 className="text-2xl font-bold text-red-800 mb-4">¿El Verdadero Costo? 📉</h4>
            <p className="text-lg text-red-700">
              Cada respuesta tardía es una venta perdida. Cada conversación manual es tiempo que no puedes escalar. 
              Estás dejando <span className="font-bold">miles de dólares</span> sobre la mesa cada mes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-center mb-4 text-gray-800"
          >
            ¿Qué Hace que Mi Sistema sea Diferente? 🎯
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-600 mb-12"
          >
            No es otro chatbot. No es otra solución técnica compleja. Esto es <span className="font-bold">automatización humana</span> que realmente funciona.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: FiZap,
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                iconColor: "text-blue-600",
                title: "Configuración Súper Rápida",
                description: "Sin código, sin dolores de cabeza técnicos. Configúralo en menos de 30 minutos y comienza a convertir inmediatamente."
              },
              {
                icon: FiUsers,
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                iconColor: "text-green-600",
                title: "Conversaciones Humanas",
                description: "Tus prospectos piensan que están hablando contigo personalmente. Sin respuestas robóticas, solo flujo natural."
              },
              {
                icon: FiTrendingUp,
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
                iconColor: "text-orange-600",
                title: "3X Más Conversiones",
                description: "Responde instantáneamente 24/7, nutre leads automáticamente y cierra más ventas mientras duermes."
              }
            ].map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`text-center ${solution.bgColor} p-8 rounded-xl border-2 ${solution.borderColor}`}
                >
                  <Icon className={`w-12 h-12 ${solution.iconColor} mx-auto mb-4`} />
                  <h4 className="font-bold text-xl mb-3 text-gray-800">{solution.title}</h4>
                  <p className="text-gray-600">{solution.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl text-center"
          >
            <h4 className="text-2xl font-bold mb-4">¿El Resultado? 🚀</h4>
            <p className="text-lg text-blue-100">
              Recuperas tu vida, escalas tu negocio y ves crecer tus ingresos automáticamente. 
              Esto no es solo automatización – es <span className="text-orange-400 font-bold">transformación de negocio</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-8"
          >
            Uso Este Sistema Exacto para Generar Mis Propios Leads 24/7 💪
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20"
          >
            <p className="text-xl text-blue-200 mb-6">
              &ldquo;Pasé de responder manualmente 100+ mensajes de WhatsApp diariamente a tener todo mi funnel funcionando en piloto automático. 
              Ahora genero leads calificados incluso cuando estoy durmiendo, viajando o pasando tiempo con mi familia.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold">
                D
              </div>
              <div className="text-left">
                <p className="font-bold text-orange-400">Dalí Tech Funnels</p>
                <p className="text-blue-200">Especialista en Automatización y Coach de Negocios</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: "24/7", label: "Generación de Leads" },
              { number: "3X", label: "Tasa de Conversión" },
              { number: "90%", label: "Tiempo Ahorrado" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-6 text-gray-800"
          >
            Obtén Mi Sistema Probado de Automatización de WhatsApp 🎁
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-2xl border-4 border-orange-200 mb-8"
          >
            <div className="bg-red-500 text-white py-2 px-6 rounded-full inline-block mb-6 font-bold">
              🔥 OFERTA DE TIEMPO LIMITADO
            </div>
            
            <h4 className="text-2xl font-bold mb-6 text-gray-800">Obtienes Todo GRATIS:</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Plantilla de Automatización de WhatsApp",
                  description: "Secuencias de mensajes copy-paste que convierten prospectos en clientes pagos automáticamente."
                },
                {
                  title: "Video Tutorial Paso a Paso",
                  description: "Mírame configurar todo el sistema en tiempo real. Sin adivinanzas, solo sigue el proceso."
                },
                {
                  title: "Biblioteca de Scripts de Conversión",
                  description: "Plantillas de mensajes probadas para cada etapa de tu funnel de ventas."
                },
                {
                  title: "Lista de Verificación de Inicio Rápido",
                  description: "Ponte en marcha en 30 minutos o menos con esta lista simple."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <FiCheck className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg text-gray-800">{item.title}</h5>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 mb-6">
              <p className="text-lg font-bold text-green-800 mb-2">Valor Total: $497</p>
              <p className="text-3xl font-black text-green-600">Tu Precio Hoy: ¡GRATIS! 🎉</p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <FiClock className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-bold">¡Esta oferta expira en 24 horas!</span>
            </div>
          </motion.div>

          <motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-4"
          >
            <FiMessageCircle className="w-8 h-8" />
            ¡SÍ! ¡ENVÍAME MI PLANTILLA GRATIS AHORA! 🚀
          </motion.a>
          
          <p className="text-sm text-gray-600">
            ⚡ Acceso instantáneo vía WhatsApp • No requiere email • Sin spam, nunca
          </p>
        </div>
      </section>

      {/* Urgency CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-6"
          >
            ¡No Dejes que Otro Lead se Escape! ⚠️
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-red-100"
          >
            Cada minuto que esperas es dinero perdido. Tus competidores ya están automatizando su WhatsApp. 
            ¿Te quedarás atrás?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 border border-white/20"
          >
            <h4 className="text-2xl font-bold mb-4">Esto es lo que Pasa Después:</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1️⃣",
                  title: "Haz Clic en el Botón",
                  description: "Mensaje instantáneo de WhatsApp con tu solicitud"
                },
                {
                  step: "2️⃣",
                  title: "Obtén tus Plantillas",
                  description: "Recibe todo en menos de 5 minutos"
                },
                {
                  step: "3️⃣",
                  title: "Comienza a Convertir",
                  description: "Ve cómo aumentan tus ventas automáticamente"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{step.step}</div>
                  <p className="font-bold mb-2">{step.title}</p>
                  <p className="text-red-100 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-4"
          >
            <FiMessageCircle className="w-8 h-8" />
            ¡OBTÉN MI SISTEMA DE AUTOMATIZACIÓN GRATIS! 🎯
          </motion.a>
          
          <p className="text-red-100">
            Únete a 1,000+ emprendedores que ya están automatizando sus ventas de WhatsApp 📈
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4 text-orange-400">Dalí Tech Funnels</h4>
          <p className="text-gray-400 mb-4">
            Ayudando a emprendedores a automatizar sus ventas y escalar sus negocios a través de estrategias probadas de WhatsApp.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Dalí Tech Funnels. Todos los derechos reservados. • Política de Privacidad • Términos de Servicio
          </p>
        </div>
      </footer>
    </div>
  );
}
