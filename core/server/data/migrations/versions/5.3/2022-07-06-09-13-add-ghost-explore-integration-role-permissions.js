const {addPermissionWithRoles} = require('../../utils');

module.exports = addPermissionWithRoles({
    name: 'Read explore',
    action: 'read',
    object: 'explore'
}, [
    'Ghost Explore Integration'
]);
