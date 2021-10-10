import {Website} from './website';
import {TextHashing} from './hash';
import { FileManager } from './file';

const target_url = process.env.TARGET_URL || 'localhost';
const site = new Website(target_url);

site.getSpecificDOM("a", ".link-top-line")
.then((data) =>{
    if (0 < data.length) {
        let hashText = TextHashing.execute(data[1], 'sha256')
        FileManager.save(hashText);
    }else{
        console.log("No result");
    }
})
.catch((e) => {
    console.error(e);
});

