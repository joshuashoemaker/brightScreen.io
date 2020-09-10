import * as http from 'http'
import * as dotenv from 'dotenv'
import Server from './Server/Server'

function main (): void {
  dotenv.config()
  const port: number = normalizePort(process.env.PORT || '5000')
  const webService: http.Server = createServer()

  webService.listen(port, () => {
    console.log(`Server is listening on ${port}`)
  })
}

function createServer (): http.Server {
  const server = new Server()
  return http.createServer(server.app)
}

function normalizePort (port: string | number): number {
  if (typeof port === 'string')  return parseInt(port, 10)

  if (port >= 0) return port
  else return 0
}

main()