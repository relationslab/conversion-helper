/// <reference path="./typings/bundle.d.ts" />

"use strict";

import * as request from 'superagent';
const platform: PlatformStatic = require('platform');

class ConversionHelper {

  constructor(private url: string = '/conversion') { }

  post(tag: string, json: Object) {
    const data = {
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

    request.post(this.url).send(data).end((error, res) => {
      if (error) console.error(error);
      // DO NOTHING

      console.log("success");
    });
  }
}

module.exports = ConversionHelper;
