import express, { Application,  json,  NextFunction,  Request,  Response,  Router } from 'express';
import cors from 'cors';
import users from '@Interface/http/api/users';
import morgan from 'morgan';
import helmet from 'helmet';
import { IResponseError } from '@Domains/response/entities/ResponseError';
const app: Application = express();
const router = Router();


app.use([
  cors(),
  morgan('tiny'), 
  helmet(), 
]);

app.use('/api/users', [json(), users(router)]);
//error handler
app.use((err: TypeError, req:Request, res: Response<IResponseError>, next:NextFunction) => {
  res.status(400).json({
    status:'error',
    message: err.message,
  });
  next(err.message);
});
app.all('*', (req, res) => {
  res.status(404).send('not found');
});
export default app;  