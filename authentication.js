const addApiKeyToHeader = (request, z, bundle) => {
    const authString = Buffer(`silverstreet:${bundle.authData.api_key}`).toString('base64');
    request.headers.Authorization = `Basic ${authString}`;
    return request;
  };
  
  const authentication = {
    type: 'custom',
    test: {
      url: 'https://api-eu-01.silverstreet.com/addressbook/v1/contact'
    },
    fields: [
      {
        key: 'api_key',
        type: 'string',
        required: true,
        helpText: 'Found on your settings page.'
      }
    ]
  };
  
  module.exports = {
    authentication: authentication,
    addApiKeyToHeader: addApiKeyToHeader
  };