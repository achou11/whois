import m from 'mithril'
import helpers from '../utilities/helpers'

const icons = [
  {
    name: 'twitter',
    title: '@ me',
    url: 'https://twitter.com/botherchou'
  },

  {
    name: 'github',
    title: 'Git it',
    url: 'https://github.com/achou11'
  },

  {
    name: 'codepen',
    title: 'See my pens',
    url: 'https://codepen.io/andrew_chou'
  },

  {
    name: 'linkedin',
    title: 'Fo the professional shawtys',
    url: 'https://linkedin.com/in/achou11'
  }
]

const Social = {
  view () {
    return m(
      'div.social',
      icons.map(icon => {
        return m(
          `a[href=${icon.url}].social__link`,
          { title: icon.title, target: '_blank', rel: 'noopener' },
          helpers.generateIcon(icon.name)
        )
      })
    )
  }
}

export default Social
