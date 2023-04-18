import  Client  from 'samba-client';


const client = new Client({
  address: '172.16.1.61',
  username: 'sahil',
  password: 'emor@123',
  domain: 'WORKGROUP',
});

const dd = await client.getAllShares();

console.log(dd)