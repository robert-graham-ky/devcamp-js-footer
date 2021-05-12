'use strict';

var moment = require('moment');



exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " All rights reserved";
};