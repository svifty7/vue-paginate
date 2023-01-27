import type { DefineComponent, Ref, WritableComputedRef, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
export declare type TVuePaginatePage = {
    index: number;
    content?: number;
    selected?: boolean;
    disabled?: boolean;
    breakView?: boolean;
};
export declare type TVuePaginateProps = {
    modelValue?: number;
    forcePage?: number;
    containerClass?: string;
    pageClass?: string;
    pageLinkClass?: string;
    prevClass?: string;
    prevLinkClass?: string;
    nextClass?: string;
    nextLinkClass?: string;
    breakViewClass?: string;
    breakViewLinkClass?: string;
    pageCount: number;
    clickHandler?: Function;
    pageRange?: number;
    marginPages?: number;
    prevText?: string;
    nextText?: string;
    breakViewText?: string;
    activeClass?: string;
    disabledClass?: string;
    noLiSurround?: boolean;
    firstLastButton?: boolean;
    firstButtonText?: string;
    lastButtonText?: string;
    hidePrevNext?: boolean;
};
declare const _sfc_main: DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: false;
    };
    forcePage: {
        type: NumberConstructor;
        required: false;
    };
    containerClass: {
        type: StringConstructor;
        required: false;
    };
    pageClass: {
        type: StringConstructor;
        required: false;
    };
    pageLinkClass: {
        type: StringConstructor;
        required: false;
    };
    prevClass: {
        type: StringConstructor;
        required: false;
    };
    prevLinkClass: {
        type: StringConstructor;
        required: false;
    };
    nextClass: {
        type: StringConstructor;
        required: false;
    };
    nextLinkClass: {
        type: StringConstructor;
        required: false;
    };
    breakViewClass: {
        type: StringConstructor;
        required: false;
    };
    breakViewLinkClass: {
        type: StringConstructor;
        required: false;
    };
    pageCount: {
        type: NumberConstructor;
        required: true;
    };
    clickHandler: {
        type: FunctionConstructor;
        required: false;
        default: () => void;
    };
    pageRange: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    marginPages: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    prevText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    breakViewText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    activeClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabledClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    noLiSurround: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    firstLastButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    firstButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lastButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    hidePrevNext: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    innerValue: Ref<number>;
    selected: WritableComputedRef<number>;
    pages: ComputedRef<TVuePaginatePage[]>;
    handlePageSelected: (newSelected: number) => void;
    prevPage: () => void;
    nextPage: () => void;
    firstPageSelected: () => boolean;
    lastPageSelected: () => boolean;
    selectFirstPage: () => void;
    selectLastPage: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: false;
    };
    forcePage: {
        type: NumberConstructor;
        required: false;
    };
    containerClass: {
        type: StringConstructor;
        required: false;
    };
    pageClass: {
        type: StringConstructor;
        required: false;
    };
    pageLinkClass: {
        type: StringConstructor;
        required: false;
    };
    prevClass: {
        type: StringConstructor;
        required: false;
    };
    prevLinkClass: {
        type: StringConstructor;
        required: false;
    };
    nextClass: {
        type: StringConstructor;
        required: false;
    };
    nextLinkClass: {
        type: StringConstructor;
        required: false;
    };
    breakViewClass: {
        type: StringConstructor;
        required: false;
    };
    breakViewLinkClass: {
        type: StringConstructor;
        required: false;
    };
    pageCount: {
        type: NumberConstructor;
        required: true;
    };
    clickHandler: {
        type: FunctionConstructor;
        required: false;
        default: () => void;
    };
    pageRange: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    marginPages: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    prevText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    breakViewText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    activeClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabledClass: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    noLiSurround: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    firstLastButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    firstButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lastButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    hidePrevNext: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    clickHandler: Function;
    pageRange: number;
    marginPages: number;
    prevText: string;
    nextText: string;
    breakViewText: string;
    activeClass: string;
    disabledClass: string;
    noLiSurround: boolean;
    firstLastButton: boolean;
    firstButtonText: string;
    lastButtonText: string;
    hidePrevNext: boolean;
}>;
export default _sfc_main;
