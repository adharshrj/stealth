'use strict';
const { generateLambdaError } = require('./helpers/errors');
const { createRating, updateRating, deleteRating } = require('./service/ratingService')

module.exports.createHandler = async (event) => {
    try {
        console.debug(event, "submission");
        const { body } = event;
        const eventBody = body.message == null ? JSON.parse(body) : body;
        await createRating(eventBody);
        return {
            statusCode: 200,
            headers:  {
                "Content-Type": "application/json"
            },
            body: 'Movie data created successfuly'
        }
    } catch (err) {
        return generateLambdaError(err);
    }
};

module.exports.updateHandler = async (event) => {
    try {
        var authHeader = event.headers.authorization;
        if (!authHeader) {
            return {
                statusCode: 401,
                headers:  {
                    "Content-Type": "application/json"
                },
                body: 'You are not authenticated'
            }
        }
        else if (authHeader == 'token') {
            console.debug(event, "update");
            const { body } = event;
            const filter = { "MovieName": event.pathParameters.id }
            const eventBody = body.message == null ? JSON.parse(body) : body;
            await updateRating(filter, eventBody);
            return {
                statusCode: 200,
                headers:  {
                    "Content-Type": "application/json"
                },
                body: 'Movie data updated successfuly'
            }
        }
    } catch (error) {
        return generateLambdaError(error);
    }
};

module.exports.deleteHandler = async (event) => {
    try {
        var authHeader = event.headers.authorization;
        if (!authHeader) {
            return {
                statusCode: 401,
                body: 'You are not authenticated'
            }
        }
        else if (authHeader == 'token') {
            console.debug(event, "delete");
            const { body } = event;
            const filter = { "MovieName": event.pathParameters.id }
            const eventBody = body.message == null ? JSON.parse(body) : body;
            await deleteRating(filter, eventBody);
            return {
                statusCode: 200,
                body: 'Movie data deleted successfuly'
            }
        }
    } catch (error) {
        return generateLambdaError(error);
    }
};