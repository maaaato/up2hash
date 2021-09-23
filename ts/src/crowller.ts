import superagent from 'superagent';
import * as cheerio from 'cheerio';

interface Crowller {
    getSpecficDOM(dom: string):void;
    _getRawHtml(url: string):Promise<string>;
}

class Community implements Crowller{
    private url:string;

    constructor(url:string){
        this.url = url;
    }

    getSpecficDOM(dom:string){
        this._getRawHtml(this.url).then((html) =>{
            const $ = cheerio.load(html);
            console.log(html);
            $('td','.topic-list-item').each((i, elem)=>{
                console.log("aaa");
            })
        });
    }

    async _getRawHtml(url:string) {
        const result = await superagent.get(url);
        return result.text;
    }
}

const a = new Community("https://ja.community.nulab.com/c/backlog/11");
a.getSpecficDOM('.topic-list-item');