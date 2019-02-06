import Card from './card'
import Avatar from './avatar'
import Badge from './badge'


export default {
  install: (vue) => {
    Card.install(vue)
    Avatar.install(vue)
    Badge.install(vue)
  },
}
