var munin = require('../');

var config = {
  statsHost: '127.0.0.1',
  statsPort: '8082',
  statsPath: '/stats'
};

var stats = munin(config);
stats.describeGraph('uptime', {}, ['uptime']);
stats.initStat('uptime', { type: 'GAUGE' }, null, function() {
    return process.uptime();
});
