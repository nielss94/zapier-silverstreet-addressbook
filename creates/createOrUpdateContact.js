const bundleHelper = require('../bundleHelper');

const updateContact = (z, bundle) => {
    const uuidCheckRequest = z.request({
      method: 'GET',
      url: `https://api-eu-01.silverstreet.com/addressbook/v1/contact/${bundle.inputData.uuid}`,
    });

    let requestOptions = {
        method: 'PUT',
        url: `https://api-eu-01.silverstreet.com/addressbook/v1/contact`
    }

    const channels = bundleHelper.channelsFromBundle(bundle);
    const attributes = bundleHelper.attributesFromBundle(bundle);

    const contact = {
        id : bundle.inputData.uuid,
        attributes : attributes,
        channels: channels
    }
    
    return uuidCheckRequest    
        .then(response => {
            if(response.status == 200){
                requestOptions.method = "PUT";
                requestOptions.url += `/${bundle.inputData.uuid}`;
                requestOptions.body = contact;
            }
            else{
                requestOptions.method = "POST";
                requestOptions.body = {
                    contacts : [
                        contact
                    ]
                }
            }
            return z.request(requestOptions)
            .then((res) => {
                return JSON.parse(res.content);
            });
        })
  };

module.exports = {
    key: 'contact-update',
    noun: 'Contact-Update',

    display: {
        label: 'Create or Update Contact',
        description: 'Updates or creates a contact in your Address Book'
    },

    operation: {
        inputFields: [
            {key: 'uuid', label:'UUID', help_text: `The UUID is the unique identifier of a contact in your Address Book. 
                                                    Based on the UUID the contact is updated.`, required: true},
            {key: 'firstName', label:'First Name', required: false},
            {key: 'lastName', label:'Last Name', required: false},
            {key: 'birthday', label:'Birthday', required: false},
            {key: 'street', label:'Street', required: false},
            {key: 'city', label:'City', required: false},
            {key: 'zip', label:'Zip', required: false},
            {key: 'country', label:'Country', required: false},
            {key: 'company', label:'Company', required: false},
            {key: 'website', label:'Website', required: false},
            {key: 'tag', label:'Tag', required: false},
            {key: 'remarks', label:'Remarks', required: false},
            {key: 'emailPrivate', label:'Email Private', required: false},
            {key: 'emailBusiness', label:'Email Business', required: false},
            {key: 'mobilePrivate', label:'Mobile Private', required: false},
            {key: 'mobileBusiness', label:'Mobile Business', required: false},
            {key: 'faxPrivate', label:'Fax Private', required: false},
            {key: 'faxBusiness', label:'Fax Business', required: false},
            {key: 'chatSkype', label:'Chat Skype', required: false},
            {key: 'chatTelegram', label:'Chat Telegram', required: false},
            {key: 'chatSMS', label:'Chat SMS', required: false},
            {key: 'chatViber', label:'Chat Viber', required: false},
            {key: 'pushApp1', label:'Push App 1', required: false},
            {key: 'pushApp2', label:'Push App 2', required: false},
            {key: 'pushApp3', label:'Push App 3', required: false},
            {key: 'customField1', label:'Custom Field 1', required: false},
            {key: 'customField2', label:'Custom Field 2', required: false},
            {key: 'customField3', label:'Custom Field 3', required: false},
            {key: 'customField4', label:'Custom Field 4', required: false},
            {key: 'customInt1', label:'Custom Int 1', required: false},
            {key: 'customInt2', label:'Custom Int 2', required: false}
        ],
        perform: updateContact
    }
};
  