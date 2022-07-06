const ghostVersion = require('@tryghost/version');

const createPostsService = require('./posts/posts-service');
const membersService = require('./members');
const statsService = require('./stats');

module.exports = async function data() {
    const totalMembers = await membersService.stats.getTotalMembers();
    const mrrStats = await statsService.getMRRHistory();

    const exploreProperties = {
        version: ghostVersion.full,
        totalMembers,
        mrrStats
    };

    const postsService = createPostsService();
    const mostRecentlyPublishedPost = await postsService.getMostRecentlyPublishedPost();

    if (mostRecentlyPublishedPost) {
        exploreProperties.mostRecentlyPublishedAt = mostRecentlyPublishedPost.get('published_at');
    }

    return exploreProperties;
};
