const applyMinimumHeading = require('mdast-minimum-heading');

module.exports = ({markdownAST}, options = {}) => 
  applyMinimumHeading(markdownAST, options.minimumDepth || 1);
