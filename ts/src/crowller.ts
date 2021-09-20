import superagent from 'superagent';
import cheerio from 'cheerio';

interface Crowller {
    getSpecficDOM(dom: string):void;
    _getRawHtml(url: string):string;
}

class Community implements Crowller{
    private url:string;

    constructor(url:string){
        this.url = url;
    }

    getSpecficDOM(dom:string){
        const t = this._getRawHtml(this.url);
        const $ = cheerio.load(t);
        const jobItems = $(dom);
        jobItems.map((index, element)=>{
            const companyName = $(element).find('span').text();
            console.log(companyName)
        })
    }

    async _getRawHtml(url:string) {
        const result = await superagent.get(url);
        return result.text;
    }
}

const a = new Community("https://qiita.com/Syoitu/items/6a136e3b8d2fb65e51a2");
a.getSpecficDOM('.topic-list-item');