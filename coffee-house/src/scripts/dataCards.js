import { dataJSON } from './dataJSON';
import validateData from './validateData';

const makeArrWithId = arr => arr.map((item, index) => {
    if (validateData(arr)) {
        return {
            id: index + 1, 
            name: item.name,
            image: item.image,  
            description: item.description,
            price: item.price,
            category: item.category,
            additives: item.additives,
            sizes: item.sizes,
        }
    }
});

export const cards =  makeArrWithId(dataJSON);