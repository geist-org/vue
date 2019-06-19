import Files from './files'
import FilesItem from './files-item'

Files.install = vue => {
  vue.component(Files.name, Files)
  vue.component(FilesItem.name, FilesItem)
}

export default Files
