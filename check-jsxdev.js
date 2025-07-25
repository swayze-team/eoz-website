// check-jsxdev.js
import fs from 'fs'
import path from 'path'

function scanForJsxDev(dir) {
  let found = false

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      if (scanForJsxDev(fullPath)) return true
    } else if (file.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      if (content.includes('jsxDEV')) {
        console.error(`❌ jsxDEV found in ${fullPath}`)
        found = true
      }
    }
  }

  return found
}

const hasJsxDev = scanForJsxDev('./dist')
if (!hasJsxDev) {
  console.log('✅ No jsxDEV found in production build.')
  process.exit(0)
} else {
  process.exit(1)
}