import { data } from './dataJSON';
import validateData from './validateData';

const makeArrWithId = arr => arr.map((item, index) => {
    if (validateData(arr)) {
        return { 
            name: item.name,
            description: item.description,
            category: item.category,
            img: item.img,
            superpowers: item.superpowers,
            id: index + 1,
        }
    }
});
export const cards =  makeArrWithId(data);

