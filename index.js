const easyvk = require('easyvk')
const path = require('path')
const app = require('express')()

easyvk({
    token: 'bda38eb5ec9d73e6d70f6a89d0d4f8641231eae48cf249ab2a6288693b86ca2b92bd767918c8dd203804e',
    v: 5.103
}).then(async vk => {


    // let connection = await vk.bots.longpoll.connect();

    const connection = await vk.bots.longpoll.connect();

    // const connection = await vk.callbackAPI.listen({
    //     confirmCode: '3b575cfd',
    //     port: process.env.PORT || 8080,
    //     path: '/',
    //     app
    // })

    connection.on('message_new', async msg => {

        const data = await vk.call('messages.send', {
            peer_id: msg.message.peer_id,
            message: 'Привет)',
            random_id: easyvk.randomId()
        })

    })
})