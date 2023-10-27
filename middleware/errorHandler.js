
const constants = require('../constants');
const errorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            resp.json({
                title: 'Validation Failed',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            resp.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            resp.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            resp.json({
                title: 'Server error',
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            resp.json({
                title: 'Error 404 - not found',
                message: err.message,
                stackTrace: err.stack
            });
        default:
            console.log('No error, All good !!!');
            break;
    }

}

module.exports = errorHandler;

            // The below is a simple method when there is only one type of error
            // const errorHandler = (err, req, resp, next)=>{
            //     const statusCode = resp.statusCode ? resp.statusCode : 500;
            //     resp.json({message: err.message, stackTrace: err.stack});
            // };
            
            // suppose we want to include more error codes
            
            // switch (resp.statusCode) {
            //     case 400:
            //         resp.json({message:err.message, stackTrace:err.stack});
            //         break;
            //     case 500:
            //         resp.json({similar format as above})
            //         break;
            //     default:
            //         console.log('No error, all good!');
            //         break;
            // }
            //Above method is the one that has to be used but lets make it more clean and understandable