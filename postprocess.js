import { readJSON, readImageFromURL, writeImage } from 'https://deno.land/x/flat@0.0.10/mod.ts'

const filename = Deno.args[0]
const data = await readJSON(filename)
const imageURL = data.url 
const image = await readImageFromURL(imageURL)
await writeImage(image.bytes, './random-xkcd-imge.jpg')
