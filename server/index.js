'use strict'

import Fastify from 'fastify'


const fastify = Fastify({
    logger: {
        name: "HokoisleAuth",
        level: 'info'
    }
  })

fastify.get('/', (request, reply) => {
    return { hello: 'world' }
})

/**
 * Run the server!
 */

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (e) {
        fastify.log.error(e)
        process.exit(1)
    }
}

start()