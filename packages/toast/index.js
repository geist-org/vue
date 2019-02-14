import Toast from './toast'
import ToastService from './service'

Toast.install = vue => {
  vue.component(Toast.name, Toast)
  vue.use(ToastService)
}

export default Toast
