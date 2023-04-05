const mockFoo = jest.fn();
// Uncomment the below lines to test out the "third attempt" unit test
// jest.mock("../my-other-component/my-other-component", () => ({
//    foo: mockFoo
// }));

import { newSpecPage } from '@stencil/core/testing';
import { MyOtherComponent } from '../my-other-component/my-other-component';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it("First attempt - foo() calls foo on MyOtherComponent", async () => {
    const page = await newSpecPage({
      components: [MyComponent, MyOtherComponent],
      html: `<my-component></my-component>`
    });

    const myComponent = page.root as HTMLMyComponentElement;
    const myOtherComponent = myComponent.shadowRoot.querySelector("my-other-component");

    // This errors with
    // TypeError: Cannot assign to read only property 'foo' of object '[object Object]'
    const fooSpy = jest.spyOn(myOtherComponent, "foo");

    await myComponent.foo();
    expect(fooSpy).toHaveBeenCalled();
  });

  it("Second attempt - foo() calls foo on MyOtherComponent", async () => {
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

  it("Third attempt - foo() calls foo on MyOtherComponent", async () => {
    // This line errors with
    // TypeError: Cannot read properties of undefined (reading 'COMPILER_META')
    const page = await newSpecPage({
      components: [MyComponent, MyOtherComponent],
      html: `<my-component></my-component>`
    });

    const myComponent = page.root as HTMLMyComponentElement;
    await myComponent.foo();
    expect(mockFoo).toHaveBeenCalled();
  });
});
