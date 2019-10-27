
const express = require('express');
const app = express();

app.get('/api/data', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'get');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Content-Type', 'application/json;charset=utf-8');
	res.send({
		status: 0,
		msg: '',
		data: 'hello world'
	})
})

app.post('/api/setData', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'get');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Content-Type', 'application/json;charset=utf-8');
	console.log(req);
	res.send({
		status: 0,
		msg: '获取到数据'
	})
})

app.listen(8000, function() {
	console.log('server start at: localhost:8000');
})
