/**
 * This code is deployed as the Lambda function in AWS.
 * It just returns the event as it is.
 */

exports.handler = async (event, context) => {
  return event;
};
