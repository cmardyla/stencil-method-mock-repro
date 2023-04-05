import { Component, Prop, h, Method } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  #myOtherComponent: HTMLMyOtherComponentElement;

  render() {
    return (
      <div>
        Hello, World! I'm a Stencil component.
        <div>
          I'm made up of another component, see below.
          <my-other-component ref={(element) => this.#myOtherComponent = element as HTMLMyOtherComponentElement}></my-other-component>
        </div>
      </div>);
  }

  @Method()
  async foo(): Promise<void> {
    await this.#myOtherComponent.foo();
  }
}
