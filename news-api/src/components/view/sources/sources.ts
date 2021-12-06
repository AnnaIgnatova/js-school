import './sources.css';

export interface ISource {
  id: string;
  name: string;
}


class Sources {
  draw(data: ISource[]) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      sourceClone.querySelector('.source__item-name')!.textContent = item.name;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    (document.querySelector('.sources') as HTMLElement).innerHTML = '';
    document.querySelector('.sources')!.append(fragment);
  }
}

export default Sources;
