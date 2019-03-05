import Progress from './progress'

Progress.install = vue => {
  vue.component(Progress.name, Progress)
}

export default Progress
