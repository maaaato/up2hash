import {Website} from './website';
import {HashManager} from './hash';

const target_url = process.env.TARGET_URL || 'localhost';
const site = new Website(target_url);
const hm = new HashManager('sha256');


site.getSpecificDOM("a", ".link-top-line").then((data) =>{
    if (data) {
        hm.execute(data[0]);
        hm.save()
    }
});

