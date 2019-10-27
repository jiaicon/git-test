const axios = require('axios');
const qs = require('qs');

axios.defaults.baseURL = "http://localhost:8000/" 
// axios({
// 	method: 'get',
//   	url: '/api/data',
// }).then(function (response) {
//     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     console.log(response);
//   });

axios({
	method: 'post',
  	url: '/api/setData',
  	data: qs.stringify({
  		name: 'admin'
  	})
}).then(function (response) {
    // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    console.log(response);
  });

// axios.get('/api/data')
// 	.then(res=> {
// 		console.log(res);
// 	})
// 	.then(error=> {
// 		if(error) {
// 			const err = new Error();
// 		err.msg = `请求发生错误，${err}`
// 		console.log(err);
// 		}
// 	})
// 	.then(()=>{
// 		console.log(123);
// 	})
