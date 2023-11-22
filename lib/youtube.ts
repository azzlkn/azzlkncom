import xml2js from 'xml2js';
import dateFormatter from './dateFormatter';

export default async (res) => {
  const json = await xml2js.parseStringPromise(res.data);
  const videos = json['feed']['entry'].map((item) => {
    return {
      title: item['title'][0],
      thumbnail: item['media:group'][0]['media:thumbnail'][0]['$']['url'],
      link: `https://www.youtube.com/watch?v=${item['yt:videoId'][0]}`,
      description: item['media:group'][0]['media:description'][0],
      pubDate: dateFormatter(item['published'][0])
    };
  });
  return videos;
};
