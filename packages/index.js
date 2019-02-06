import Card from './card'
import Avatar from './avatar'


export default {
  install: (vue) => {
    Card.install(vue)
    Avatar.install(vue)
  },
}
