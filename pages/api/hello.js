// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ data })
}

const data = {
  mission: {
    title: 'Misión',
    message: 'Compartir conocimiento y contribuir a la economía de las personas, poniendo a su disposición los servicios de máxima calidad, para todas las etapas de la vida.',
    icon: 'fa-bullhorn'
  },
  vission: {
    title: 'Visión',
    message: 'Evolucionar el grupo financiero para crear y seguir trabajando para el mañana.',
    icon: 'fa-eye'
  },
  filosophy: {
    title: 'Filosofía',
    message: 'La inteligencia es la habilidad para adaptarse a los cambios',
    author: 'Stephen Hawking',
    icon: 'fa-brain'
  }
}
