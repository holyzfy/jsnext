var devHost = [
    '127.0.0.1',
    'localhost'
];
var env = devHost.includes(location.hostname) ? 'development': 'production';

export default {
    env
};

