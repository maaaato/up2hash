import crypto from "crypto";
import fs from "fs";

const filename:string = "crowller_hash_result.txt";

/* 
hashのアルゴリズム毎にhash化する
*/
export class HashManager{
    private algo: string = "sha256"|| "sha512";
    hashData!:string;

    constructor(algo:string){
        this.algo = algo;
    }

    execute(text:string){
        let sha = crypto.createHash(this.algo);
        sha.update(text);
        this.hashData = sha.digest('hex').toUpperCase();
    }

    save(){
        fs.writeFile(filename, this.hashData, (err)=>{
            if (err) throw err;
            console.log("finished");
        });
    }
}


