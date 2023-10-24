const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

exports.relativeTime = time => dayjs(new Date(time * 1000)).fromNow();
