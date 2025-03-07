import axios from 'axios';

axios.post('https://www.luogu.com.cn/api/chat/new', JSON.parse(process.argv[2]), {
    headers: JSON.parse(process.argv[3])
}).then(r => {
    console.log(r);
})
.catch(e => {
    console.log(e);
});