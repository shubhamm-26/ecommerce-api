    const express = require('express');
    require("./db/mongoose");
    const bodyParser = require('body-parser');
    const cors = require('cors')

    const rateLimit = require("express-rate-limit");
    const app = express();
    app.use(cors());

    const limiter = rateLimit({
        windowMs: 60 * 60 * 1000,
        max: 100,
        message: "Too many requests"
    });
    app.use(limiter);

    const authRouter = require('./routes/authRoutes');
    const productRouter = require('./routes/productRoutes');
    const categoryRouter = require('./routes/categoryRoutes');
    const orderRouter = require('./routes/orderRoutes');
    const cartRouter = require('./routes/cartRoutes');

    app.use(bodyParser.json());

    app.use('/auth', authRouter);
    app.use('/products', productRouter);
    app.use('/category', categoryRouter);
    app.use('/orders', orderRouter);
    app.use('/cart', cartRouter);

    const setupSwagger = require('./swagger');
    setupSwagger(app);

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
