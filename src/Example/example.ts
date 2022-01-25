import { audioY2Dl, videoY2Dl, otherY2Dl } from '../lib';


(async(base_url: string) => {
   const audio = await audioY2Dl(base_url);
   const video = await videoY2Dl(base_url);
   const other = await otherY2Dl(base_url);
   console.log(audio, video, other);
})('https://youtu.be/4OBPf0rgecc');