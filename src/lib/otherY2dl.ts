import axios from 'axios';
import cheerio from 'cheerio';
import { yotubeUrlId } from './yotubeUrlId';


export async function otherY2Dl(baseUrl: string) {
    const result = [];
    try {
        await axios({
            method: 'get',
            url: `https://y2convert.net/file/all/${yotubeUrlId(baseUrl)}`
        }).then(async (response) => {
            const $ = await cheerio.load(response.data);
            const Elements = await $('#tab-mkv > table > tbody > tr').each(async function(is, Elements) {
                const tdElenents = $(this).find('td');
                await result.push({
                    qualidade: $(tdElenents[0]).text().split("\n")[0],
                    tamanho: $(tdElenents[1]).text(),
                    link: $(this).find('td').find('a').attr('href')
                });
            });
        });
        return result
    } catch (error) {
        console.log(error)
    };
};