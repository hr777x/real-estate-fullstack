import express from 'express';
import postRoutes from './routes/post.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());

console.log('Hello World');
app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use(cookieParser());


app.listen(8800, () => {
  console.log('Server is running on port 8800');
});
