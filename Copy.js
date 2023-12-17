const fs = require(`fs`)

const path = require(`path`)

if(process.argv.length !== 4){

    console.error(`How to call: node Copy.js sourceFile targetFile`)
}

const source = process.argv[2]

const target = process.argv[3]

fs.readdir(source, (err, files)=>{

    if(err){
        console.error(`Error trying to read ${source}`)
    }

    const fileTypes = ['.txt', '.html']

    const filtered = files.filter((file)=>path.extname(file).toLowerCase())

    filtered.forEach((file)=>{

        const sourcePath = path.join(source, file)

        const targetPath = path.join(target, file)

        fs.copyFile(sourcePath, targetPath, (err)=>{

            if(err){

                console.error(`Error trying to copy from ${source}`)
            }

            else{

                console.log(`File successfully copied to ${target}`)
            }
        })
    })
})