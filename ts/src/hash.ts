import crypto from "crypto";

/*
hashのアルゴリズム毎にhash化する
*/
export class TextHashing{

    static execute(text:string, algo:string) :string {
        let sha = crypto.createHash(algo);
        sha.update(text);
        return sha.digest('hex').toUpperCase();
    }
}


