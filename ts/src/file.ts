
import fs from "fs";

const filename:string = "website_result_hash.txt";

export class FileManager{
    // ファイルの保存
    static save(hashData:string){
        fs.writeFile(filename, hashData, (err)=>{
            if (err) throw err;
            console.log("saved");
        });
    }

    // ファイル内容の比較
    static compaire(){}
}