const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then(function(html) {
        const wikiUrls = [];
        const presidents = $('big > a', html);
        for (let i = 0; i < presidents.length; i++) {
            wikiUrls.push(presidents[i].attribs.href);
        }
        return Promise.all(
                wikiUrls.map((function(url) {
                    return potusParse('https://en.wikipedia.org' + url);
                }))
            )
            .then(function(presidents) {
                console.log(presidents);
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .catch(function(err) {
        console.log(err);
    });
