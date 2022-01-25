  /*
   * Créditos hakai ofc
   * licença MIT
   * 
   * Totais créditos tambem aos desenvolvedores
   * do site : y2convert.net 
   *
  */

import axios from 'axios';
import cheerio from 'cheerio';
import { yotubeUrlId } from './yotubeUrlId';

export async function audioY2Convert(baseUrl: string) {
    const result = [];
    try {
        await axios({
            method: 'get',
            url: `https://y2convert.net/file/all/${yotubeUrlId(baseUrl)}`
        }).then(async (response) => {
            const $ = await cheerio.load(response.data);
            const Elements = await $('#tab-mp3 > table > tbody > tr').each(async function(is, Elements) {
                const tdElenents = $(this).find('td');
                await result.push({
                    qualidade: $(tdElenents[0]).text(),
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