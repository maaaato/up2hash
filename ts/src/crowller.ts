import superagent from 'superagent';
import * as cheerio from 'cheerio';

interface Crowller {
    getSpecficDOM():void;
    _getRawHtml(url: string):Promise<string>;
}

class Community implements Crowller{
    private url:string;

    constructor(url:string){
        this.url = url;
    }

    getSpecficDOM(){
        this._getRawHtml(this.url).then((html) =>{
            let $ = cheerio.load(html);
            $("body").each((i, elem) => {
                $ = cheerio.load($(elem).text());
                $('a','.link-top-line').each((i, v)=>{
                    let t = $(v).first().text();
                    console.log(t);
                });
            });
        });
    }

    async _getRawHtml(url:string) {
        const result = await superagent.get(url);
        return result.text;
    }
}

const target_url = process.env.MYAPP_URL || 'localhost';
const a = new Community(target_url);
a.getSpecficDOM();