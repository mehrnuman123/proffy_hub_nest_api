import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = await app.listen(PORT)
  if(port){
    console.log(`Server is listening on Port: ${PORT}`)
  }
}
bootstrap();
