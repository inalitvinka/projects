import { Component } from './index';

export class Button extends Component {
  private onClick?: EventListener;

  constructor(
    className: Array<string>,
    textContent: string,
    attributes: Record<string, string>
  ) {
    super({
      tag: 'button',
      className: className,
      text: textContent,
      attributes: attributes,
    });
  }

  public addOnClick(onClick: EventListener) {
    this.onClick = onClick;
    this.addListener('click', onClick);
  }

  public destroy() {
    if (this.onClick) {
      this.removeListener('click', this.onClick);
    }
    super.destroy();
  }
}
