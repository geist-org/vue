import User from './user'

User.install = vue => {
  vue.component(User.name, User)
}

export default User
