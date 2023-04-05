import { Component, Host, h, Method } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true,
})
export class MyOtherComponent {
  render() {
    return (
      <Host>
        <div>Here's another component</div>
      </Host>
    );
  }

  @Method()
  async foo() {
    console.log("[my-other-component] Foo was called.");
  }
}
