const easyvk = require('easyvk')
const path = require('path')
const app = require('express')()

easyvk({
    token: 'bda38eb5ec9d73e6d70f6a89d0d4f8641231eae48cf249ab2a6288693b86ca2b92bd767918c8dd203804e'
}).then(async vk => {

    const connection = await vk.callbackAPI.listen({
        confirmCode: '3b575cfd',
        port: process.env.PORT || 8080,
        path: 'https://nameless-taiga-23739.herokuapp.com/',
        app
    })

    connection.on('message_new', msg => {
        vk.call('messages.send', {
            user_id: vk.session.user_id,
            message: 'Привет странник)',
            random_id: easyvk.randomId()
        })
    })
})