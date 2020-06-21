import Snippet from './snippet'

Snippet.install = vue => {
  vue.component(Snippet.name, Snippet)
}

export default Snippet
