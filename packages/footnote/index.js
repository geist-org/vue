import Footnote from './footnote'
import FootnoteIcon from './footnote-icon'

Footnote.install = vue => {
  vue.component(Footnote.name, Footnote)
  vue.component(FootnoteIcon.name, FootnoteIcon)
}

export default Footnote
