export class NotFoundError extends Error {
  constructor () {
    super('Not found')
    this.name = 'NotFoundError'
  }
}
