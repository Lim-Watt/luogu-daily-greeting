import axios from 'axios';

console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(JSON.parse(process.argv[2]));
console.log(JSON.parse(process.argv[3]));

axios.post('https://www.luogu.com.cn/api/chat/new', JSON.parse(process.argv[2]), {
    headers: JSON.parse(process.argv[3])
}).then(r => {
    console.log(r);
})
.catch(e => {
    console.log(e);
});