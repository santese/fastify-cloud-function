import { FastifyPluginAsync } from 'fastify'

const route: FastifyPluginAsync = async (fastify) => {
    fastify.get('/', async (req, res) => {
        res.send({ hello: 'world' })
    })
}

export default route
