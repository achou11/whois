import m from 'mithril'

const questionAnswers = [
  {
    question: `How do you pronounce your name?`,
    answer: `It's pronounced chew - not cho, not chow - just Chou.`
  },
  {
    question: `What's with the rhombus?`,
    answer: `I recently decided that it was my favorite shape (reason pending). To prove it, I got a tattoo of one.`
  },
  {
    question: `What's the best way to contact you?`,
    answer: `Definitely Twitter (@botherchou).`
  }
]

const Faq = {
  view () {
    return m('div', [
      m('h1.text-center.title', 'Not-So-FAQs'),
      questionAnswers.map(({ question, answer }, index) => {
        return m('div', [
          index !== 0 && m('br'),
          m('b', `Q: ${question}`),
          m('div.top-margin-small', `A: ${answer}`),
          m('br'),
          index !== questionAnswers.length - 1 && m('hr')
        ])
      })
    ])
  }
}

export default Faq
