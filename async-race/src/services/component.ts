type Options = {
  tag: keyof HTMLElementTagNameMap;
  className: Array<string>;
  text: string;
  attributes: Record<string, string>;
  children: Array<HTMLElement | SVGSVGElement>;
};

export class Component<T extends HTMLElement = HTMLDivElement> {
  protected readonly node: T;
  public children: Array<HTMLElement | SVGSVGElement> = [];

  constructor({
    tag = 'div',
    className = [],
    text = '',
    attributes = {},
    children = [],
  }: Partial<Options>) {
    const node = <T>document.createElement(tag);
    this.node = node;
    this.children = children;
    if (className) {
      this.setClassName(className);
    }
    if (attributes) {
      this.setAttribute(attributes);
    }
    if (text) {
      this.setTextContent(text);
    }
    if (children) {
      this.appendChildren(children);
    }
  }

  public append(child: Component) {
    this.node.append(child.getNode());
  }

  public appendChildren(children: Array<HTMLElement | SVGSVGElement>) {
    children.forEach((element) => {
      this.node.append(element);
    });
  }

  public getNode() {
    return this.node;
  }

  public getChildren() {
    return this.children;
  }

  public setTextContent(content: string) {
    this.node.textContent = content;
  }

  public setClassName(className: Array<string>) {
    className.forEach((item) => {
      this.node.classList.add(item);
    });
  }

  public removeClassName(className: Array<string>) {
    className.forEach((item) => {
      this.node.classList.remove(item);
    });
  }

  public setAttribute(attributes: Record<string, string>) {
    Object.entries(attributes).forEach(([key, value]) => {
      this.node.setAttribute(key, value);
    });
  }

  public removeAttribute(attribute: string) {
    this.node.removeAttribute(attribute);
  }

  public toggleClass(className: string) {
    this.node.classList.toggle(className);
  }

  public addListener(event: string, listener: EventListener) {
    this.node.addEventListener(event, listener);
  }

  public removeListener(event: string, listener: EventListener) {
    this.node.removeEventListener(event, listener);
  }

  public destroyChildren() {
    while (this.node.firstElementChild) {
      this.node.firstElementChild.remove();
    }
  }

  public destroy() {
    this.destroyChildren();
    this.node.remove();
  }
}
