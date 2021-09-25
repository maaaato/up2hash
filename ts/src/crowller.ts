import superagent from 'superagent';
import * as cheerio from 'cheerio';

interface Crowller {
    getSpecificDOM(dom:string, attr: string):void;
    _getRawHtml(url: string):Promise<string>;
}

class Website implements Crowller{
    private url:string;

    constructor(url:string){
        this.url = url;
    }

    getSpecificDOM(dom:string, attr:string){
        this._getRawHtml(this.url).then((html) =>{
            let $ = cheerio.load(html);
            $("body").each((i, elem) => {
                $ = cheerio.load($(elem).text());
                $(dom, attr).each((i, v)=>{
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

const target_url = process.env.TARGET_URL || 'localhost';
const com = new Website(target_url);
com.getSpecificDOM("a", ".link-top-line");