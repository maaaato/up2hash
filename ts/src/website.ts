import superagent from 'superagent';
import * as cheerio from 'cheerio';

interface IWebsite {
    getSpecificDOM(dom:string, attr: string):Promise<void|string[]>;
    _getRawHtml(url: string):Promise<string>;
}

export class Website implements IWebsite{
    private url:string;

    constructor(url:string){
        this.url = url;
    }

    getSpecificDOM(dom:string, attr:string){
        let dom_array: Array<string> = new Array;
        const v = this._getRawHtml(this.url).then((html) =>{
            let $ = cheerio.load(html);
            $("body").each((i, elem) => {
                $ = cheerio.load($(elem).text());
                $(dom, attr).each((i, v)=>{
                    let t = $(v).first().text();
                    dom_array.push(t);
                });
            });
            return dom_array;
        }).catch((error =>{
            console.error(error);
        }));
        return v;
    }

    async _getRawHtml(url:string) {
        const result = await superagent.get(url);
        // Promiseオブジェクトが返る
        return result.text;
    }
}