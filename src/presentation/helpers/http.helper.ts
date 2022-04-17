import { HttpResponse } from '../protocols/http'
import { ServerError as ServerErrorInternal } from '../errors'
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

export const Success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
