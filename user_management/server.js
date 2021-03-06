const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      img: 'https://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: 960220,
      gender: '남',
      job: '학생',
    },
    {
      id: 2,
      img: 'https://placeimg.com/64/64/2',
      name: '닥터후',
      birthday: 732102,
      gender: '여',
      job: '의사',
    },
    {
      id: 3,
      img: 'https://placeimg.com/64/64/3',
      name: '미스터 빈',
      birthday: 681209,
      gender: '남',
      job: '배우',
    },
    {
      id: 4,
      img: 'https://placeimg.com/64/64/15',
      name: '안젤리나 줄리',
      birthday: 693212,
      gender: '여',
      job: '배우',
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
