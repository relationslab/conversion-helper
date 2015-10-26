/// <reference path="./typings/bundle.d.ts" />
"use strict";
var request = require('superagent');
var platform = require('platform');
var ConversionHelper = (function () {
    function ConversionHelper(url) {
        if (url === void 0) { url = '/conversion'; }
        this.url = url;
    }
    ConversionHelper.prototype.post = function (tag, json) {
        var data = {
            tag_name: tag,
            browser: platform.name,
            browser_version: platform.version,
            os: platform.os ? platform.os.family : 'unknown',
            os_version: platform.os ? platform.os.version : 'unknown',
            options: json
        };
        if (location.hostname === 'localhost') {
            return console.log('conversion', data);
        }
        request.post(this.url).send(data).end(function (error, res) {
            if (error)
                console.error(error);
            console.log("success");
        });
    };
    return ConversionHelper;
})();
module.exports = ConversionHelper;
