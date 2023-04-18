import smb2 from "smb2";
try {
  const client = new smb2({
    share: "\\\\172.16.1.61\\open",
    domain: "WORKGROUP",
    username: "sahil",
    password: "emor@123",
  });

  client.exists('\\',(err) => {
    if (err) throw err;
    console.log('Connected to Samba server');
    client.readdir("", (err, files) => {
      if (err) throw err;
      console.log("Files and folders in the share:", files);
    });
  });
  
} catch (error) {
  console.error(error);
}
