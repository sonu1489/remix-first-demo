const {PrismaClient} = require('@prisma/client')

const db = new PrismaClient()

async function seed(){
    await Promise.all(
        getPosts().map(post =>{
            return db.post.create({data:post})
        })
    )
}
seed();

function getPosts(){
return [
    {
        title:"ddddddddddddddddddd",
        body:"wwwwwwwwwwwwwwwwww"
    },
    {
        title:"ddddddddddddddddddd",
        body:"wwwwwwwwwwwwwwwwww"
    },
    {
        title:"ddddddddddddddddddd",
        body:"wwwwwwwwwwwwwwwwww"
    },
    {
        title:"ddddddddddddddddddd",
        body:"wwwwwwwwwwwwwwwwww"
    },
    
]
}