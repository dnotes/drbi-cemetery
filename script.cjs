const { slugify } = require('transliteration')
const mkdirp = require('mkdirp')
const yaml = require('js-yaml')
const fs = require('fs')
// const sites = require('./src/lib/data/graves.json')

// sites.filter(s => s.interred).forEach(s => {
//   let slug = slugify(s.name, { replace: [["'", '']] })
//   let record = yaml.dump({
//     slug,
//     name: s.name,
//     section: s.section,
//     row: s.row,
//     site: s.site,
//     born: s.born,
//     deceased: s.deceased,
//   })
//   mkdirp.sync(`./content/${slug}`)
//   fs.writeFileSync(`./content/${slug}/index.md`, `---\n${record}\n---\n`)
// })

const dir = './content/gravesites/'
let allDirs = fs.readdirSync(dir, { encoding: 'utf-8' })
allDirs.forEach(subdir => {
  let files = fs.readdirSync(dir + subdir, { encoding: 'utf-8' })
  files.forEach(f => {
    if (f.match(/\.(?:jpe?g|png)$/)) {
      let text = fs.readFileSync(dir + subdir + '/index.md', { encoding: 'utf-8' })
      text = text.replace('\n---', `\nimage: ${f}\n---`)
      fs.writeFileSync(dir + subdir + '/index.md', text)
    }
  })
})