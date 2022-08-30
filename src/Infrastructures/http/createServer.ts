import express, { Application,  Router } from 'express';
import cors from 'cors';
import users from '@Interface/http/api/users';
import morgan from 'morgan';
import helmet from 'helmet';
const app: Application = express();
const router = Router();


app.use([cors(), morgan('tiny'), helmet()]);

app.use('/api/users', users(router));
app.all('*', (req, res) => {
  res.status(404).send('not found');
});
export default app;