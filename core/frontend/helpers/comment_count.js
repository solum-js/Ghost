const {SafeString} = require('../services/handlebars');
const {labs} = require('../services/proxy');

function comment_count(options) {
    return new SafeString(`
       <span data-ghost-comment-count="${this.id}" style="display:none">
           ${options.fn(this)}
       </span>`
    );
}

module.exports = async function commentsLabsWrapper() {
    const self = this;
    const args = arguments;

    return labs.enabledHelper({
        flagKey: 'comments',
        flagName: 'Comments',
        helperName: 'comments'
    }, () => {
        return comment_count.apply(self, args);
    });
};

module.exports.async = true;
