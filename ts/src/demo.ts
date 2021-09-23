
import superagent from 'superagent';
import cheerio from 'cheerio';

class Crowller {
    private url = "https://qiita.com/Syoitu/items/6a136e3b8d2fb65e51a2"
    constructor(){
         this.getRawHtml();
    }
    async getRawHtml(){
        const result = await superagent.get(this.url);
        this.getJobInfo(result.text);
    }

    getJobInfo(html:string){
        console.log(html);
       const $ = cheerio.load(html)
       const jobItems = $('.c-job_offer-recruiter__name');
       jobItems.map((index, element)=>{
           const companyName = $(element).find('a').text();
           console.log(companyName)
       })
    }
}

const crowller = new Crowller()