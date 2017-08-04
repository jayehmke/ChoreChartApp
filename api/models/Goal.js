/**
 * Goal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: 'Name is required',

    },

    complete: {
      type: 'boolean',
      required: false,
    },

    goalTracks: {
      collection: 'goaltrack',
      via: 'owner'
    }

  }
};

