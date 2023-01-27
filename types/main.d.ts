import type { TVuePaginatePage } from "./VuePaginate";
import type { ComponentInternalInstance, ExtractPropTypes, VNodeProps, AllowedComponentProps, ComponentCustomProps, Slot, ComponentPublicInstance, ComponentOptionsBase, Ref, WritableComputedRef, ComputedRef, ComponentOptionsMixin, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, Plugin } from 'vue';
import VuePaginate from "./VuePaginate";
declare const VuePaginatePlugin: {
    new (...args: any[]): {
        $: ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<ExtractPropTypes<{
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
        } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "clickHandler" | "pageRange" | "marginPages" | "prevText" | "nextText" | "breakViewText" | "activeClass" | "disabledClass" | "noLiSurround" | "firstLastButton" | "firstButtonText" | "lastButtonText" | "hidePrevNext">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Slot | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: ComponentOptionsBase<Readonly<ExtractPropTypes<{
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
        }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], string, {
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
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
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
    } & ShallowUnwrapRef<{
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
    }> & {} & ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<{
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
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
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
}, {}, string> & VNodeProps & AllowedComponentProps & ComponentCustomProps & Plugin;
export { VuePaginate };
export default VuePaginatePlugin;
