export default [
  {
    name: 'start',
    children: [
      require('./about.md'),
      require('./installation.md'),
    ],
  },
  {
    name: 'components',
    children: [
      require('./card.md'),
      require('./avatar.md'),
    ],
  },
]
