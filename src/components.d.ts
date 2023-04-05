/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "foo": () => Promise<void>;
    }
    interface MyOtherComponent {
        "foo": () => Promise<void>;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyOtherComponentElement extends Components.MyOtherComponent, HTMLStencilElement {
    }
    var HTMLMyOtherComponentElement: {
        prototype: HTMLMyOtherComponentElement;
        new (): HTMLMyOtherComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-other-component": HTMLMyOtherComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
    }
    interface MyOtherComponent {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-other-component": MyOtherComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-other-component": LocalJSX.MyOtherComponent & JSXBase.HTMLAttributes<HTMLMyOtherComponentElement>;
        }
    }
}
