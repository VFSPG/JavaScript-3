/*
Node Express Server Route Module for a Player (MEVN Stack)
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Express from 'express'
const Router = Express.Router();

// import external modules
// MY response object
// import Model object

// POST localhost:3000/api/player/login
Router.post('/login', ( request, response ) => {

    // do some work
    // peel apart request
    // construct the response data

    response.send("some result")
});

export default Router;