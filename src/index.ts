import axios from 'axios';

let uid:string = process.argv[2];
let data:string = process.argv[3];

axios.get('https://www.luogu.com.cn', {
    headers: {
        'Cookie': uid
    }
}).then(r => {
    
    let be: number = r.data.indexOf('<meta name="csrf-token" content="') + 33;
    let en: number = r.data.indexOf('">', be);
    let csrf: string = r.data.substring(be, en);
    
    axios.post('https://www.luogu.com.cn/api/chat/new', JSON.parse(data), {
        headers: {
            "Referer": "https://www.luogu.com.cn/chat",
            "X-Csrf-Token": csrf,
            "Cookie": uid
        }
    }).then(r => {
        console.log(r);
    }).catch(e => {
        console.log(e);
    });
}).catch(e => {
    console.log(e);
});