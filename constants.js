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
  ["cita","horarios","hora","horario","citas","reserver","coger","cogido"]
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
  ["Puedes solicitar citas y reservas con nosotros"]
  
]

// Random for any other user input

const alternative = [
  "Lo siento, no te he entendido",
  "Por favor, ¿puede ser más específico?"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]