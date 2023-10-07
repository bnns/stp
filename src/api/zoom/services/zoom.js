'use strict';

/**
 * zoom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zoom.zoom');
