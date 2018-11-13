import { StoreEnhancer } from "redux";

declare module "redux" {
    export type GenericStoreEnhancer = StoreEnhancer;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.less' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}
