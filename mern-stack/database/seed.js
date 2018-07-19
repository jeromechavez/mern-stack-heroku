const uuid = require('uuid/v4')

module.exports = [
  {
    id: uuid(),
    question: 'How long does it take you to get to OCCS?',
    answer: 'It takes me anywhere betweeen 40mins to 1hr30mins depending on traffic.'
  },
  {
    id: uuid(),
    question: 'Where do you want to work after OCCS?',
    answer: 'SD, LA, and OC are my top locations for preferred jobs.'
  },
  {
    id: uuid(),
    question: 'Are you a boring person?',
    answer: 'Boring is in the eye of the beholder.'
  }
]