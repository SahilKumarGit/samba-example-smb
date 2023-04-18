import smb2 from "@stifani/smb2";


try {

  const client = new smb2.Client('172.16.1.61');
  const session = await client.authenticate({
    username: 'sahil',
    password: 'emor@123',
    domain: 'WORKGROUP',
  });
  const tree = await session.connectTree('open');

  const entries = await tree.readDirectory("/");
  console.log(entries);

} catch (error) {
  console.error({error})
}