import Files from './files'
import FilesItem from './files_item'
import FilesStatus from './files_status'
import FilesIcon from './files_icon'

Files.install = vue => {
  vue.component(Files.name, Files)
  vue.component(FilesItem.name, FilesItem)
  vue.component(FilesStatus.name, FilesStatus)
  vue.component(FilesIcon.name, FilesIcon)
}

export default Files
