import axios from 'axios';
import xml2js from 'xml2js';

const YOUTUBE_CHANNEL_LINK = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCZFrmB9bphLaTH91WDiPCEg';

export default async () => {
  const data = await axios.get(YOUTUBE_CHANNEL_LINK).then(async (res) => {
    const json = await xml2js.parseStringPromise(res.data, (_err, result) => result);
    const videos = json['feed']['entry'].map((item) => {
      return {
        title: item['title'][0],
        thumbnail: item['media:group'][0]['media:thumbnail'][0]['$']['url'],
        link: `https://www.youtube.com/watch?v=${item['yt:videoId'][0]}`,
        description: item['media:group'][0]['media:description'][0].slice(0, 100) + '...',
      };
    });
    return videos;
  });

  return data;
};
