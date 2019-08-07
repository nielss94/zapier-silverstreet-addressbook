const validator = require('validator');

function getChannelsFromBundle(bundle) {
    let channels = [];
    if(bundle.inputData.emailPrivate){
        if(validator.isEmail(bundle.inputData.emailPrivate)){
            channels.push({
                type: "email",
                subType: "private",
                payload: bundle.inputData.emailPrivate
            });
        }
    }
    if(bundle.inputData.emailBusiness){
        if(bundle.inputData.emailBusiness){
            channels.push({
                type: "email",
                subType: "business",
                payload: bundle.inputData.emailBusiness
            });
        }
    }
    if(bundle.inputData.mobilePrivate){
        if(validator.isLength(bundle.inputData.mobilePrivate,{min:8, max:17})){
            channels.push({
                type: "mobile",
                subType: "private",
                payload: bundle.inputData.mobilePrivate
            });
        }
    }
    if(bundle.inputData.mobileBusiness){
        if(validator.isLength(bundle.inputData.mobileBusiness,{min:8, max:17})){
            channels.push({
                type: "mobile",
                subType: "business",
                payload: bundle.inputData.mobileBusiness
            });
        }
    }
    if(bundle.inputData.faxPrivate){
        if(validator.isLength(bundle.inputData.faxPrivate,{min:8, max:17})){
            channels.push({
                type: "fax",
                subType: "private",
                payload: bundle.inputData.faxPrivate
            });
        }
    }
    if(bundle.inputData.faxBusiness){
        if(validator.isLength(bundle.inputData.faxBusiness,{min:8, max:17})){
            channels.push({
                type: "fax",
                subType: "business",
                payload: bundle.inputData.faxBusiness
            });
        }
    }
    if(bundle.inputData.chatSkype){
        if(validator.isLength(bundle.inputData.chatSkype,{min:1, max:32})){
            channels.push({
                type: "chat",
                subType: "skype",
                payload: bundle.inputData.chatSkype
            });
        }
    }
    if(bundle.inputData.chatTelegram){
        if(validator.isLength(bundle.inputData.chatTelegram,{min:1, max:32})){
            channels.push({
                type: "chat",
                subType: "telegram",
                payload: bundle.inputData.chatTelegram
            });
        }
    }
    if(bundle.inputData.chatSMS){
        if(validator.isLength(bundle.inputData.chatSMS,{min:1, max:32})){
            channels.push({
                type: "chat",
                subType: "sms",
                payload: bundle.inputData.chatSMS
            });
        }
    }
    if(bundle.inputData.chatViber){
        if(validator.isLength(bundle.inputData.chatViber,{min:1, max:32})){
            channels.push({
                type: "chat",
                subType: "viber",
                payload: bundle.inputData.chatViber
            });
        }
    }
    if(bundle.inputData.pushApp1){
        if(validator.isLength(bundle.inputData.pushApp1,{min:1, max:32})){
            channels.push({
                type: "push",
                subType: "app1",
                payload: bundle.inputData.pushApp1
            });
        }
    }
    if(bundle.inputData.pushApp2){
        if(validator.isLength(bundle.inputData.pushApp2,{min:1, max:32})){
            channels.push({
                type: "push",
                subType: "app2",
                payload: bundle.inputData.pushApp2
            });
        }
    }
    if(bundle.inputData.pushApp3){
        if(validator.isLength(bundle.inputData.pushApp3,{min:1, max:32})){
            channels.push({
                type: "push",
                subType: "app3",
                payload: bundle.inputData.pushApp3
            });
        }
    }
    return channels;
}

function getAttributesFromBundle(bundle) {
    let attributes = {};
    if(bundle.inputData.birthday){
        if(isValidDate(bundle.inputData.birthday)){
            attributes.birthday = bundle.inputData.birthday;
        }
    }
    if(bundle.inputData.city) {
        if(validator.isLength(bundle.inputData.city,{min:1, max:64})){
            attributes.city = bundle.inputData.city;
        }
    }
    if(bundle.inputData.company) {
        if(validator.isLength(bundle.inputData.company,{min:1, max:64})){
            attributes.company = bundle.inputData.company;
        }
    }
    if(bundle.inputData.country) {
        if(validator.isLength(bundle.inputData.country,{min:1, max:64})){
            attributes.country = bundle.inputData.country;
        }
    }
    if(bundle.inputData.firstName) {
        if(validator.isLength(bundle.inputData.firstName,{min:1, max:64})){
            attributes.firstName = bundle.inputData.firstName;
        }
    }
    if(bundle.inputData.lastName) {
        if(validator.isLength(bundle.inputData.lastName,{min:1, max:64})){
            attributes.lastName = bundle.inputData.lastName;
        }
    }
    if(bundle.inputData.remarks) {
        if(validator.isLength(bundle.inputData.remarks,{min:1, max:255})){
            attributes.remarks = bundle.inputData.remarks;
        }
    }
    if(bundle.inputData.street) {
        if(validator.isLength(bundle.inputData.street,{min:1, max:64})){
            attributes.street = bundle.inputData.street;
        }
    }
    if(bundle.inputData.tag) {
        if(validator.isLength(bundle.inputData.tag,{min:1, max:64})){
            attributes.tag = bundle.inputData.tag;
        }
    }
    if(bundle.inputData.zip) {
        if(validator.isLength(bundle.inputData.zip,{min:1, max:64})){
            attributes.zip = bundle.inputData.zip;
        }
    }
    if(bundle.inputData.customField1) {
        if(validator.isLength(bundle.inputData.customField1,{min:1, max:64})){
            attributes.customField1 = bundle.inputData.customField1;
        }
    }
    if(bundle.inputData.customField2) {
        if(validator.isLength(bundle.inputData.customField2,{min:1, max:64})){
            attributes.customField2 = bundle.inputData.customField2;
        }
    }
    if(bundle.inputData.customField3) {
        if(validator.isLength(bundle.inputData.customField3,{min:1, max:64})){
            attributes.customField3 = bundle.inputData.customField3;
        }
    }
    if(bundle.inputData.customField4) {
        if(validator.isLength(bundle.inputData.customField4,{min:1, max:64})){
            attributes.customField4 = bundle.inputData.customField4;
        }
    }
    if(bundle.inputData.customInt1) {
        if(validator.isInt(bundle.inputData.customInt1)){
            attributes.customInt1 = bundle.inputData.customInt1;
        }
    }
    if(bundle.inputData.customInt2) {
        if(validator.isInt(bundle.inputData.customInt2)){
            attributes.customInt2 = bundle.inputData.customInt2;
        }
    }
    return attributes;
}

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    if(Number.isNaN(d.getTime())) return false; // Invalid date
    return d.toISOString().slice(0,10) === dateString;
  }

module.exports = {
    channelsFromBundle : getChannelsFromBundle,
    attributesFromBundle : getAttributesFromBundle
};