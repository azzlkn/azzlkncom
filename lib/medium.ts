import axios from 'axios';
import xml2js from 'xml2js';
import dateFormatter from './dateFormatter';

export default async () => {
  const data = await axios.get('https://medium.com/feed/@azzlkn').then(async (res) => {
    const json = await xml2js.parseStringPromise(res.data, (_err, result) => result);
    const posts = json['rss']['channel'][0]['item'].map((item) => {
      return {
        title: item['title'][0],
        pubDate: dateFormatter(item['pubDate'][0]),
        categories: item['category'].sort(),
        link: item['link'],
      };
    });
    return posts;
  });

  return data;
};
