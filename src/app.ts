import app from '@Infrastructures/http/createServer';
import { config } from 'dotenv';
config();
app.listen(Number(process.env.PORT), () => {
  console.log(`Listening on ${process.env.PORT}`);
});