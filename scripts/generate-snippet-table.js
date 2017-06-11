const data = require('../snippets/snippets.json')

console.log('| Snippet | Description |')
console.log('|---|---|')
for (let snippet in data) {
  console.log(`| \`${data[snippet].prefix}\` | ${data[snippet].description} |`)
}
