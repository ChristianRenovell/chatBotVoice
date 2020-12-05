// Options the user could type in
const prompts = [
  ["dolor","lesión","lesion","tratamiento","recuperacion","paciente","masaje","contractura","accidente","molestia"],
  ["nutricion","nutrición","dieta","alimentación","alimentacion","comida","peso","sobrepeso",],
  ["psicologia","psicologa","psicologo","ayuda","aprendizaje","educacion","educación","crisis"],
  ["podologia","pies","pie","Psicología","plantares","deformacion","deformación","uña","uñas","tendinitis","pisada","plantilla","plantillas"],
  ["entrenamiento","personal","deporte","rutinas","rutina","cardio","ejercicios","ejercicio","fortalecer","muscular","musculacion","musculación"],
  ["Yogalates","yoga","pilates","meditación","meditacion","terapeuticos"],
  ["baile","ritmo","ritmos","pareja","bailar"],
  ["Co-Working","coworking","co-working","Reserva","trabajo","alquiler","sala","despacho","espacio"],
  ["cita","horarios","hora","horario","citas"]
]

// Possible responses, in corresponding order

const replies = [
  ["Disponemos de servicios de Fisioterapia Personalizados."],
  ["Disponemos de servicios de nustrición"],
  ["Disponemos de servicios de Psicología"],
  ["Disponemos de servicios de Podología"],
  ["Disponemos de servicios de Entrenamiento Personal"],
  ["Disponemos de servicios de YogaLates"],
  ["Disponemos de clases de Baile"],
  ["Reserva nuestras salas, a tu disposición"],
  ["Puedes solicitar citas y reservas con nosotros"]
  
]

// Random for any other user input

const alternative = [
  "Los siento no te he entendido",
  "por fabor se mas especifico en lo que deseas",
  "perdona, tuve mala noche y no te he entendido"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]