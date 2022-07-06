const _ = require('lodash');
const debug = require('@tryghost/debug')('api:endpoints:utils:serializers:output:explore');

module.exports = {
    all(data, apiConfig, frame) {
        debug('all');

        const keys = [
            'version',
            'totalMembers',
            'mrrStats',
            'mostRecentlyPublishedAt'
        ];

        frame.response = {
            explore: _.pick(data, keys)
        };
    }
};
