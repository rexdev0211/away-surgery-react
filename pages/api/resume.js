const fs = require('fs');

export default function handler(req, res) {
  console.log('req -> ', req.method, req.url);

  switch (req.method) {
    case 'GET':
      const resume = fs.readFileSync('public/assets/storage/resume.json', 'utf8');
      res.setHeader('Content-Type', 'application/json');
      res.end(resume);
      break;

    case 'POST':
      const data = JSON.stringify(req.body);
      fs.writeFile('public/assets/storage/resume.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        res.status(200).json({ statusCode: 200, message: 'WRITE TO FILE IS SUCCESSFULL', response: JSON.parse(data) });
      });
      break;

    default:
      res.status(404).json({ statusCode: 800, message: 'NO OPERATION DONE' });

  }

}

