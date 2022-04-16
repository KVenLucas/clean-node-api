import { HttpResponse } from '../protocols/http'
import { ServerError as ServerErrorInternal } from '../errors/server-error'
import { NotFoundError } from '../errors/not-found.error'

export const BadRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ServerError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerErrorInternal()
})

export const NotFound = (): HttpResponse => ({
  statusCode: 404,
  body: new NotFoundError()
})
