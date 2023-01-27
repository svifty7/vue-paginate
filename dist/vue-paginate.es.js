import { defineComponent as E, ref as I, computed as F, onBeforeUpdate as O, openBlock as u, createElementBlock as d, normalizeClass as a, createElementVNode as w, withKeys as k, renderSlot as v, createTextVNode as f, toDisplayString as r, createCommentVNode as y, Fragment as g, renderList as S, unref as H } from "vue";
const j = ["tabindex"], z = ["tabindex"], D = ["onClick", "onKeyup"], M = ["tabindex"], U = ["tabindex"], q = ["onClick", "onKeyup"], A = /* @__PURE__ */ E({
  __name: "VuePaginate",
  props: {
    modelValue: null,
    forcePage: null,
    containerClass: null,
    pageClass: null,
    pageLinkClass: null,
    prevClass: null,
    prevLinkClass: null,
    nextClass: null,
    nextLinkClass: null,
    breakViewClass: null,
    breakViewLinkClass: null,
    pageCount: null,
    clickHandler: { type: Function, default: () => {
    } },
    pageRange: { default: 3 },
    marginPages: { default: 1 },
    prevText: { default: "Prev" },
    nextText: { default: "Next" },
    breakViewText: { default: "…" },
    activeClass: { default: "active" },
    disabledClass: { default: "disabled" },
    noLiSurround: { type: Boolean, default: !1 },
    firstLastButton: { type: Boolean, default: !1 },
    firstButtonText: { default: "First" },
    lastButtonText: { default: "Last" },
    hidePrevNext: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: K }) {
    const l = t, P = I(1), o = F({
      get: () => l.modelValue || P.value,
      set: (s) => {
        P.value = s;
      }
    }), R = F(() => {
      const s = [];
      if (l.pageCount <= l.pageRange)
        for (let n = 0; n < l.pageCount; n++)
          s[n] = {
            index: n,
            content: n + 1,
            selected: n === o.value - 1
          };
      if (l.pageCount > l.pageRange) {
        const n = Math.floor(l.pageRange / 2), e = (i) => {
          s[i] = {
            index: i,
            content: i + 1,
            selected: i === o.value - 1
          };
        }, L = (i) => {
          s[i] = {
            index: i,
            disabled: !0,
            breakView: !0
          };
        };
        for (let i = 0; i < l.marginPages; i++)
          e(i);
        let C = 0;
        o.value - n > 0 && (C = o.value - 1 - n);
        let $ = C + l.pageRange - 1;
        $ >= l.pageCount && ($ = l.pageCount - 1, C = $ - l.pageRange + 1);
        for (let i = C; i <= $ && i <= l.pageCount - 1; i++)
          e(i);
        C > l.marginPages && L(C - 1), $ + 1 < l.pageCount - l.marginPages && L($ + 1);
        for (let i = l.pageCount - 1; i >= l.pageCount - l.marginPages; i--)
          e(i);
      }
      return s.filter((n) => !!n);
    }), x = (s) => {
      o.value !== s && (P.value = s, K("update:modelValue", s), l.clickHandler(s));
    }, V = () => {
      o.value <= 1 || x(o.value - 1);
    }, m = () => {
      o.value >= l.pageCount || x(o.value + 1);
    }, b = () => o.value === 1, c = () => o.value === l.pageCount || l.pageCount === 0, B = () => {
      o.value <= 1 || x(1);
    }, T = () => {
      o.value >= l.pageCount || x(l.pageCount);
    };
    return O(() => {
      l.forcePage !== void 0 && l.forcePage !== o.value && (o.value = l.forcePage);
    }), (s, n) => t.noLiSurround ? (u(), d("div", {
      key: 1,
      class: a(t.containerClass)
    }, [
      t.firstLastButton ? (u(), d("a", {
        key: 0,
        class: a([t.pageLinkClass, b() ? t.disabledClass : ""]),
        tabindex: "0",
        onClick: n[8] || (n[8] = (e) => B()),
        onKeyup: n[9] || (n[9] = k((e) => B(), ["enter"]))
      }, [
        v(s.$slots, "firstBtnText", {}, () => [
          f(r(t.firstButtonText), 1)
        ], !0)
      ], 34)) : y("", !0),
      b() && t.hidePrevNext ? y("", !0) : (u(), d("a", {
        key: 1,
        class: a([t.prevLinkClass, b() ? t.disabledClass : ""]),
        tabindex: "0",
        onClick: n[10] || (n[10] = (e) => V()),
        onKeyup: n[11] || (n[11] = k((e) => V(), ["enter"]))
      }, [
        v(s.$slots, "prevBtnText", {}, () => [
          f(r(t.prevText), 1)
        ], !0)
      ], 34)),
      (u(!0), d(g, null, S(H(R), (e, L) => (u(), d(g, { key: L }, [
        e != null && e.breakView ? (u(), d("a", {
          key: 0,
          class: a([t.pageLinkClass, t.breakViewLinkClass, e != null && e.disabled ? t.disabledClass : ""]),
          tabindex: "0"
        }, [
          v(s.$slots, "breakViewContent", {}, () => [
            f(r(t.breakViewText), 1)
          ], !0)
        ], 2)) : e != null && e.disabled ? (u(), d("a", {
          key: 1,
          class: a([t.pageLinkClass, e != null && e.selected ? t.activeClass : "", t.disabledClass]),
          tabindex: "0"
        }, r(e == null ? void 0 : e.content), 3)) : (u(), d("a", {
          key: 2,
          class: a([t.pageLinkClass, e != null && e.selected ? t.activeClass : ""]),
          tabindex: "0",
          onClick: (C) => x(e.index + 1),
          onKeyup: k((C) => x(e.index + 1), ["enter"])
        }, r(e == null ? void 0 : e.content), 43, q))
      ], 64))), 128)),
      c() && t.hidePrevNext ? y("", !0) : (u(), d("a", {
        key: 2,
        class: a([t.nextLinkClass, c() ? t.disabledClass : ""]),
        tabindex: "0",
        onClick: n[12] || (n[12] = (e) => m()),
        onKeyup: n[13] || (n[13] = k((e) => m(), ["enter"]))
      }, [
        v(s.$slots, "nextBtnText", {}, () => [
          f(r(t.nextText), 1)
        ], !0)
      ], 34)),
      t.firstLastButton ? (u(), d("a", {
        key: 3,
        class: a([t.pageLinkClass, c() ? t.disabledClass : ""]),
        tabindex: "0",
        onClick: n[14] || (n[14] = (e) => T()),
        onKeyup: n[15] || (n[15] = k((e) => T(), ["enter"]))
      }, [
        v(s.$slots, "lastBtnText", {}, () => [
          f(r(t.lastButtonText), 1)
        ], !0)
      ], 34)) : y("", !0)
    ], 2)) : (u(), d("ul", {
      key: 0,
      class: a(t.containerClass)
    }, [
      t.firstLastButton ? (u(), d("li", {
        key: 0,
        class: a([t.pageClass, b() ? t.disabledClass : ""])
      }, [
        w("a", {
          class: a(t.pageLinkClass),
          tabindex: b() ? -1 : 0,
          onClick: n[0] || (n[0] = (e) => B()),
          onKeyup: n[1] || (n[1] = k((e) => B(), ["enter"]))
        }, [
          v(s.$slots, "firstBtnText", {}, () => [
            f(r(t.firstButtonText), 1)
          ], !0)
        ], 42, j)
      ], 2)) : y("", !0),
      b() && t.hidePrevNext ? y("", !0) : (u(), d("li", {
        key: 1,
        class: a([t.prevClass, b() ? t.disabledClass : ""])
      }, [
        w("a", {
          class: a(t.prevLinkClass),
          tabindex: b() ? -1 : 0,
          onClick: n[2] || (n[2] = (e) => V()),
          onKeyup: n[3] || (n[3] = k((e) => V(), ["enter"]))
        }, [
          v(s.$slots, "prevBtnText", {}, () => [
            f(r(t.prevText), 1)
          ], !0)
        ], 42, z)
      ], 2)),
      (u(!0), d(g, null, S(H(R), (e, L) => (u(), d("li", {
        key: L,
        class: a([
          t.pageClass,
          e != null && e.selected ? t.activeClass : "",
          e != null && e.disabled ? t.disabledClass : "",
          e != null && e.breakView ? t.breakViewClass : ""
        ])
      }, [
        e != null && e.breakView ? (u(), d("a", {
          key: 0,
          class: a([t.pageLinkClass, t.breakViewLinkClass]),
          tabindex: "0"
        }, [
          v(s.$slots, "breakViewContent", {}, () => [
            f(r(t.breakViewText), 1)
          ], !0)
        ], 2)) : e != null && e.disabled ? (u(), d("a", {
          key: 1,
          class: a(t.pageLinkClass),
          tabindex: "0"
        }, r(e == null ? void 0 : e.content), 3)) : (u(), d("a", {
          key: 2,
          class: a(t.pageLinkClass),
          tabindex: "0",
          onClick: (C) => x(e.index + 1),
          onKeyup: k((C) => x(e.index + 1), ["enter"])
        }, r(e == null ? void 0 : e.content), 43, D))
      ], 2))), 128)),
      c() && t.hidePrevNext ? y("", !0) : (u(), d("li", {
        key: 2,
        class: a([t.nextClass, c() ? t.disabledClass : ""])
      }, [
        w("a", {
          class: a(t.nextLinkClass),
          tabindex: c() ? -1 : 0,
          onClick: n[4] || (n[4] = (e) => m()),
          onKeyup: n[5] || (n[5] = k((e) => m(), ["enter"]))
        }, [
          v(s.$slots, "nextBtnText", {}, () => [
            f(r(t.nextText), 1)
          ], !0)
        ], 42, M)
      ], 2)),
      t.firstLastButton ? (u(), d("li", {
        key: 3,
        class: a([t.pageClass, c() ? t.disabledClass : ""])
      }, [
        w("a", {
          class: a(t.pageLinkClass),
          tabindex: c() ? -1 : 0,
          onClick: n[6] || (n[6] = (e) => T()),
          onKeyup: n[7] || (n[7] = k((e) => T(), ["enter"]))
        }, [
          v(s.$slots, "lastBtnText", {}, () => [
            f(r(t.lastButtonText), 1)
          ], !0)
        ], 42, U)
      ], 2)) : y("", !0)
    ], 2));
  }
});
const G = (t, K) => {
  const l = t.__vccOpts || t;
  for (const [P, o] of K)
    l[P] = o;
  return l;
}, N = /* @__PURE__ */ G(A, [["__scopeId", "data-v-1cbf8445"]]), Q = Object.assign(N, {
  install: (t) => {
    t.component(N.name, N);
  }
});
export {
  N as VuePaginate,
  Q as default
};
