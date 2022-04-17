import { DbAddAccount } from './db-add-account'

describe('DBAddAccount Usecase', () => {
  test('Shoud call Encrypter with correct password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }

    const encryptStub = new EncrypterStub()

    const sut = new DbAddAccount(encryptStub)

    const encrpytSpy = jest.spyOn(encryptStub, 'encrypt')

    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }

    await sut.add(accountData)

    expect(encrpytSpy).toHaveBeenCalledWith('valid_password')
  })
})
