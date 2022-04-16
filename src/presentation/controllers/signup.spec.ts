import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return status code 400 if no name provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
