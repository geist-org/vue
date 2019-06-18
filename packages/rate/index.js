import Rate from './rate'
import RateIcon from './rate-icon'

Rate.install = vue => {
  vue.component(Rate.name, Rate)
  vue.component(RateIcon.name, RateIcon)
}

export default Rate
