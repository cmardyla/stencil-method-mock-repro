import { newSpecPage } from '@stencil/core/testing';
import { MyOtherComponent } from '../my-other-component/my-other-component';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it("foo() calls foo on MyOtherComponent", async () => {
    const page = await newSpecPage({
      components: [MyComponent, MyOtherComponent],
      html: `<my-component></my-component>`
    });

    const myComponent = page.root as HTMLMyComponentElement;
    const myOtherComponent = myComponent.shadowRoot.querySelector("my-other-component");

    // This errors with
    //  TypeError: Cannot assign to read only property 'foo' of object '[object Object]'
    const fooSpy = jest.spyOn(myOtherComponent, "foo");

    await myComponent.foo();
    expect(fooSpy).toHaveBeenCalled();
  });

  it("foo() calls foo on MyOtherComponent", async () => {
    const fooSpy = jest.fn();

    const page = await newSpecPage({
      components: [MyComponent, MyOtherComponent],
      html: `<my-component></my-component>`
    });

    // Alternate attempt to spy on `foo`
    // This errors because HTMLMyOtherComponentElement is not defined on `win`
    Object.defineProperties(page.win.HTMLMyOtherComponentElement.prototype,
      {
        foo: {
          get() {
            return fooSpy;
          }
        }
      }
    );

    const myComponent = page.root as HTMLMyComponentElement;
    await myComponent.foo();
    expect(fooSpy).toHaveBeenCalled();
  });
});
