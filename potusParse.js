const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = function(url) {
    return rp(url)
        .then(function(html) {
            return {
                name: $('.firstHeading', html).text(),
                birthday: $('.bday', html).text(),
            };
        })
        .catch(function(err) {
            //handle error
        });
};

module.exports = potusParse;
/* 
const rp = require('request-promise');
const $ = require('request');

const potusParse = function(url) {
    return rp(url)
        .then(function(html) {
            return {
                name: $('.firstHeading', html).text(),
                birth: $('.bday', html).text(),
            }
        })
        .catch(function(err) {
            console.log(err)
        });
}

module exports = potusParse; */