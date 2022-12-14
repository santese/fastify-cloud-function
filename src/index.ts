import Fastify from 'fastify'
import { HttpFunction } from '@google-cloud/functions-framework'
import autoLoad from '@fastify/autoload'
import bearerAuthPlugin from '@fastify/bearer-auth'
import { join } from 'path'
import config from './common/config'

// Init Fastify server
const fastify = Fastify({ ignoreTrailingSlash: true })

// See https://www.fastify.io/docs/latest/Guides/Serverless/#google-cloud-functions for gcp function setup
// Add Content Type Parser, Documented here
fastify.addContentTypeParser('application/json', {}, (req, body: any, done) => {
    done(null, body.body)
})

// Autoload PLugin for automatic routes loading, folder is ./reports for routes
fastify.register(autoLoad, {
    dir: join(__dirname, 'reports'),
})

// Bearer Token Authentication Plugin
fastify.register(bearerAuthPlugin, {
    keys: new Set(config.apiKeys),
})

// Export entry point for Google Cloud Functions
export const cloudFunction: HttpFunction = async (req, res) => {
    fastify.ready(async () => {
        await fastify.ready()
        fastify.server.emit('request', req, res)
    })
}
