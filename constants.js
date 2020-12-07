// Options the user could type in
const prompts = [
  ["dolor","lesión","lesion","tratamiento","recuperacion","recuperación","paciente","masaje","contractura","accidente","molestia"],
  ["nutricion","nutrición","dieta","alimentación","alimentacion","comida","peso","sobrepeso",],
  ["psicologia","psicología","psicologa","psicologo","psicóloga","psicólogo","ayuda","aprendizaje","educacion","educación","crisis"],
  ["podologia","podología","pies","pie","plantares","deformacion","deformación","uña","uñas","tendinitis","pisada","plantilla","plantillas"],
  ["entrenamiento","personal","deporte","rutinas","rutina","cardio","ejercicios","ejercicio","fortalecer","fortalece","muscular","musculacion","musculación"],
  ["yogalates","yoga","pilates","meditación","meditacion","terapéuticos","terapeuticos"],
  ["baile","ritmo","ritmos","pareja","bailar"],
  ["coworking","co-working","reserva","trabajo","alquiler","sala","despacho","espacio"],
  ["cita","horarios","hora","horario","citas","reserver","coger","cogido"],
  ["hola"],
  ["dirección","direccion","ubicación","ubicación","donde","dónde","llegar","están"],
  ["coronavirus","mascarilla","pandemia","restricciones","covid","virus"]

]

// Possible responses, in corresponding order

const replies = [
  ["Disponemos de servicios de Fisioterapia personalizados."],
  ["Disponemos de servicios de Nutrición"],
  ["Disponemos de servicios de Psicología"],
  ["Disponemos de servicios de Podología"],
  ["Disponemos de servicios de Entrenamiento Personal"],
  ["Disponemos de servicios de YogaLates"],
  ["Disponemos de clases de Baile"],
  ["Reserva nuestras salas de Co-Working y Gimnasio"],
  ["Puedes solicitar citas y reservas con nosotros"],
  ["hola, en qué puedo ayudarte","encantada de conocerte"],
  ["esta es nuestra dirección: Calle de Fernando Primo de Rivera, N°54, 38006 Santa Cruz de Tenerife"],
  ["recuerda las normas de seguridad, es obligatorio llevar la mascarilla al llegar a nuestras instalaciones."]
  
]

// Random for any other user input

const alternative = [
  "Lo siento, no te he entendido",
  "Por favor, ¿puede ser más específico?"
]
