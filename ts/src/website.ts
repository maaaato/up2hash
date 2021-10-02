import superagent from 'superagent';
import * as cheerio from 'cheerio';

interface IWebsite {
    getSpecificDOM(dom:string, attr: string):Promise<unknown>;
    _getRawHtml(url: string):Promise<string>;
}

export class Website implements IWebsite{
    private url:string;

    constructor(url:string){
        this.url = url;
    }

    getSpecificDOM(dom:string, attr:string){
        let dom_array: Array<string> = new Array;
        return new Promise<string[]>((resolve, reject) => {
            const html = this._getRawHtml(this.url);
            html.then((elem) => {
                let $ = cheerio.load(elem);
                $("body").each((i, elem) => {
                    $ = cheerio.load($(elem).text());
                    $(dom, attr).each((i, v)=>{
                        let t = $(v).first().text();
                        dom_array.push(t);
                    });
                });
                resolve(dom_array);
            });
        });
    }

    async _getRawHtml(url:string) {
        const result = await superagent.get(url);
        // Promiseオブジェクトが返る
        return result.text;
    }
}