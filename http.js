/**
 * Created with http2.js
 * @Description:
 * @Author: muchaoyang
 * @Date: 2016-06-22 5:58 PM
 * To change this template use File | Settings | File Templates.
 */

const http = require('http'),
    PORT = 8090;

http.createServer((request, response) => {
    console.log("到这里了");
    const url = request.url;
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:63342");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    response.setHeader("X-Powered-By", ' 3.2.1');
    if (url === '/') {
        response.end('Welcome  HTTP1.X!');
    } else if (url === '/http') {
        setTimeout(() => response.end('HTTP1.X success'), 300);
    }
}).listen(PORT, () => {
    console.log('Listening to port' + PORT);
});