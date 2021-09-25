import { getJSON } from "jquery";
import { isObject } from "util";

interface IObject {
    GetObject():object;
}

abstract class AbstractJsonApi implements IObject {
    GetObject(){
        let jsonString = this.GetJson();
        let a: {
            json: string;
        } = {
            json:jsonString
        };
        return a;
    }

    protected abstract GetJson():string;

}

class TwitterApi extends AbstractJsonApi{
    protected  GetJson(){
        return "TwitterAPIの結果"
    }
}

const t = new TwitterApi();

console.log(t);