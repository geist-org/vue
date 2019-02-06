const r = (mdModule, name) => {
  mdModule.default.name = name
  return mdModule
}

export default [
  {
    name: 'start',
    children: [
      r(require('./about.md'), 'about'),
      r(require('./installation.md'), 'installation'),
    ],
  },
  {
    name: 'components',
    children: [
      r(require('./card.md'), 'card'),
      r(require('./avatar.md'), 'avatar'),
      r(require('./badge.md'), 'badge'),
    ],
  },
]
