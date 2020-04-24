const easyvk = require('easyvk')
const path = require('path')
const app = require('express')()

easyvk({
    token: 'bda38eb5ec9d73e6d70f6a89d0d4f8641231eae48cf249ab2a6288693b86ca2b92bd767918c8dd203804e'
}).then(async vk => {

    const connection = await vk.callbackAPI.listen({
        confirmCode: '3b575cfd',
        port: process.env.PORT || 8080,
        path: '/',
        app
    })

})



//     .then(async vk => {
//
//     console.log(vk)
//
//     const connection = await vk.callbackAPI.listen({
//         confirmCode: '3b575cfd',
//         port: process.env.PORT || 8080,
//         path: '/webhook',
//         app
//     })
//     //
//     // connection.on('new_message', msg => {
//     //     console.log(msg)
//     // })
//
// })


// app.get('/', (req, res) => {
//     res.send('Hello2')
// })