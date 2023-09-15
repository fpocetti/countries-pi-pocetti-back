const { Router } = require('express');
const activitiesRouter = Router();
const getActivities = require('../controllers/getActivities');
const postActivity = require('../controllers/postActivity');
const updateActivity = require('../controllers/updateActivity');
const deleteActivity = require('../controllers/deleteActivity');

//modularization of requests done to Activity model
//this handler calls each controller, depending on the endpoint

activitiesRouter.post('/', postActivity);
activitiesRouter.get('/', getActivities);
activitiesRouter.put('/:name', updateActivity);
activitiesRouter.delete('/delete/:id', deleteActivity);

module.exports = activitiesRouter;
