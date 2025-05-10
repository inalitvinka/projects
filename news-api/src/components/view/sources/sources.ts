import './sources.css';
import { type SourcesData, assertCondition } from '../../../utils/types';

class Sources {
    public draw(data: Array<SourcesData>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
        const mainSources = document.querySelector<HTMLDivElement>('.sources');
        if (!sourceItemTemp || !mainSources) {
            return;
        }

        data.forEach((item): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            assertCondition(sourceClone instanceof DocumentFragment);
            const sourceItemName = sourceClone.querySelector<HTMLSpanElement>('.source__item-name');
            const sourceItem = sourceClone.querySelector<HTMLDivElement>('.source__item');
            if (!sourceItemName || !sourceItem) {
                return;
            }
            sourceItemName.textContent = item.name;

            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        mainSources.append(fragment);
    }
}

export default Sources;
