import xml2js from 'xml2js';
import dateFormatter from './dateFormatter';

export default async (res) => {
  const json = await xml2js.parseStringPromise(res.data);
  const posts = json['rss']['channel'][0]['item'].map((item) => {
    return {
      title: item['title'][0],
      pubDate: dateFormatter(item['pubDate'][0]),
      categories: item['category'].sort(),
      link: item['link']
    };
  });

  return posts;
};
