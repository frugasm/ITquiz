import express from 'express';
import morgan from 'morgan';
import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
// app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
  console.log(`App has started on port ${PORT}`);
});
