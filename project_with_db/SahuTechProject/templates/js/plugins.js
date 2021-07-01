/*!
 * jQuery v3.3.1
 *
 * (c) JS Foundation and other contributors
 * jquery.org/license
 *
 */

! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType
    },
    y = function e(t) {
      return null != t && t === t.window
    },
    v = {
      type: !0,
      src: !0,
      noModule: !0
    };

  function m(e, t, n) {
    var i, o = (t = t || r).createElement("script");
    if (o.text = e, n)
      for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o)
  }

  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
  }
  var b = "3.3.1",
    w = function(e, t) {
      return new w.fn.init(e, t)
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function() {
      return o.call(this)
    },
    get: function(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return w.each(this, e)
    },
    map: function(e) {
      return this.pushStack(w.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(o.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function() {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isPlainObject: function(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function(e) {
      m(e)
    },
    each: function(e, t) {
      var n, r = 0;
      if (C(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r])) break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(T, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : u.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
      return i
    },
    map: function(e, t, n) {
      var r, i, o = 0,
        s = [];
      if (C(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
      return a.apply([], s)
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    l["[object " + t + "]"] = t.toLowerCase()
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  var E = function(e) {
    var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function(e, t) {
        return e === t && (f = !0), 0
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1
      },
      P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
      W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      re = function() {
        p()
      },
      ie = me(function(e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
    } catch (e) {
      L = {
        apply: A.length ? function(e, t) {
          q.apply(e, H.call(t))
        } : function(e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1
        }
      }
    }

    function oe(e, t, r, i) {
      var o, s, l, c, f, h, v, m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e)))
          if (o = f[1]) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
          } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r
          } catch (e) {} finally {
            c === b && t.removeAttribute("id")
          }
        }
      }
      return u(e.replace(B, "$1"), t, r, i)
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
      }
      return t
    }

    function se(e) {
      return e[b] = !0, e
    }

    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t
    }

    function ce(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function fe(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function pe(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function de(e) {
      return function(t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function he(e) {
      return se(function(t) {
        return t = +t, se(function(n, r) {
          var i, o = e([], n.length, t),
            a = o.length;
          while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }
    n = oe.support = {}, o = oe.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, p = oe.setDocument = function(e) {
      var t, i, a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), n.getElementsByTagName = ue(function(e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
      }), n.getById ? (r.filter.ID = function(e) {
        var t = e.replace(Z, ee);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }, r.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (r.filter.ID = function(e) {
        var t = e.replace(Z, ee);
        return function(e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, r.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++])
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
      } : function(e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
      }), ue(function(e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          while (t = t.parentNode)
            if (t === e) return !0;
        return !1
      }, D = t ? function(e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
      } : function(e, t) {
        if (e === t) return f = !0, 0;
        var n, r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
      }, d) : d
    }, oe.matches = function(e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function(e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0
    }, oe.contains = function(e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t)
    }, oe.attr = function(e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
    }, oe.escape = function(e) {
      return (e + "").replace(te, ne)
    }, oe.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function(e) {
      var t, r = [],
        i = 0,
        o = 0;
      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) t === e[o] && (i = r.push(o));
        while (i--) e.splice(r[i], 1)
      }
      return c = null, e
    }, i = oe.getText = function(e) {
      var t, n = "",
        r = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else
        while (t = e[r++]) n += i(t);
      return n
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, t, n) {
          return function(r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
              y = t.parentNode,
              v = s && t.nodeName.toLowerCase(),
              m = !u && !s,
              x = !1;
            if (y) {
              if (o) {
                while (g) {
                  p = t;
                  while (p = p[g])
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break
                  }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                  if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              return (x -= i) === r || x % r == 0 && x / r >= 0
            }
          }
        },
        PSEUDO: function(e, t) {
          var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
            var r, o = i(e, t),
              a = o.length;
            while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
          }) : function(e) {
            return i(e, 0, n)
          }) : i
        }
      },
      pseudos: {
        not: se(function(e) {
          var t = [],
            n = [],
            r = s(e.replace(B, "$1"));
          return r[b] ? se(function(e, t, n, i) {
            var o, a = r(e, null, i, []),
              s = e.length;
            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function(e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
          }
        }),
        has: se(function(e) {
          return function(t) {
            return oe(e, t).length > 0
          }
        }),
        contains: se(function(e) {
          return e = e.replace(Z, ee),
            function(t) {
              return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
            }
        }),
        lang: se(function(e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
            function(t) {
              var n;
              do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === h
        },
        focus: function(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !r.pseudos.empty(e)
        },
        header: function(e) {
          return Y.test(e.nodeName)
        },
        input: function(e) {
          return G.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: he(function() {
          return [0]
        }),
        last: he(function(e, t) {
          return [t - 1]
        }),
        eq: he(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: he(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: he(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: he(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: he(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = r.pseudos.eq;
    for (t in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) r.pseudos[t] = fe(t);
    for (t in {
        submit: !0,
        reset: !0
      }) r.pseudos[t] = pe(t);

    function ye() {}
    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
      var n, i, o, a, s, u, l, c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;
      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));
        for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
          value: n,
          type: a,
          matches: i
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first ? function(t, n, i) {
        while (t = t[r])
          if (1 === t.nodeType || a) return e(t, n, i);
        return !1
      } : function(t, n, u) {
        var l, c, f, p = [T, s];
        if (u) {
          while (t = t[r])
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
        } else
          while (t = t[r])
            if (1 === t.nodeType || a)
              if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
              else {
                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                if (c[o] = p, p[2] = e(t, n, u)) return !0
              } return !1
      }
    }

    function xe(e) {
      return e.length > 1 ? function(t, n, r) {
        var i = e.length;
        while (i--)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
        var l, c, f, p = [],
          d = [],
          h = a.length,
          g = o || be(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !o && t ? g : we(g, p, e, s, u),
          v = n ? i || (o ? e : h || r) ? [] : a : y;
        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;
          while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
        }
        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;
              while (c--)(f = v[c]) && l.push(y[c] = f);
              i(null, v = [], l, u)
            }
            c = v.length;
            while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
      })
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
          return e === t
        }, s, !0), f = me(function(e) {
          return O(t, e) > -1
        }, s, !0), p = [function(e, n, r) {
          var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
          return t = null, i
        }]; u < o; u++)
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++)
              if (r.relative[e[i].type]) break;
            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
          }
          p.push(n)
        } return xe(p)
    }

    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function(o, a, s, u, c) {
          var f, h, y, v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;
          for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
            if (i && f) {
              h = 0, a || f.ownerDocument === d || (p(f), s = !g);
              while (y = e[h++])
                if (y(f, a || d, s)) {
                  u.push(f);
                  break
                } c && (T = E)
            }
            n && ((f = !y && f) && v--, o && x.push(f))
          }
          if (v += m, n && m !== v) {
            h = 0;
            while (y = t[h++]) y(x, b, a, s);
            if (o) {
              if (v > 0)
                while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b)
            }
            L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
          }
          return c && (T = E, l = w), x
        };
      return n ? se(o) : o
    }
    return s = oe.compile = function(e, t) {
      var n, r = [],
        i = [],
        o = S[e + " "];
      if (!o) {
        t || (t = a(e)), n = t.length;
        while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        (o = S(e, Ee(i, r))).selector = e
      }
      return o
    }, u = oe.select = function(e, t, n, i) {
      var o, u, l, c, f, p = "function" == typeof e && e,
        d = !i && a(e = p.selector || e);
      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length)
        }
        o = V.needsContext.test(e) ? 0 : u.length;
        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;
          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break
          }
        }
      }
      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
    }), ue(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || le("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), n.attributes && ue(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || le("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ue(function(e) {
      return null == e.getAttribute("disabled")
    }) || le(P, function(e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), oe
  }(e);
  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
  var k = function(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e)
        } return r
    },
    S = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    }) : t.nodeType ? w.grep(e, function(e) {
      return e === t !== n
    }) : "string" != typeof t ? w.grep(e, function(e) {
      return u.call(t, e) > -1 !== n
    }) : w.filter(t, e, n)
  }
  w.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, w.fn.extend({
    find: function(e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
        for (t = 0; t < r; t++)
          if (w.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
      return r > 1 ? w.uniqueSort(n) : n
    },
    filter: function(e) {
      return this.pushStack(j(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(j(this, e || [], !0))
    },
    is: function(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
    }
  });
  var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
    O = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  w.fn.extend({
    has: function(e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (w.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  w.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return k(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return k(e, "parentNode", n)
    },
    next: function(e) {
      return P(e, "nextSibling")
    },
    prev: function(e) {
      return P(e, "previousSibling")
    },
    nextAll: function(e) {
      return k(e, "nextSibling")
    },
    prevAll: function(e) {
      return k(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return k(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return k(e, "previousSibling", n)
    },
    siblings: function(e) {
      return S((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return S(e.firstChild)
    },
    contents: function(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
    }
  }, function(e, t) {
    w.fn[e] = function(n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function(e, n) {
      t[n] = !0
    }), t
  }
  w.Callbacks = function(e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t, n, r, i, o = [],
      a = [],
      s = -1,
      u = function() {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
        }
        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
      },
      l = {
        add: function() {
          return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
            w.each(n, function(n, r) {
              g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
            })
          }(arguments), n && !t && u()), this
        },
        remove: function() {
          return w.each(arguments, function(e, t) {
            var n;
            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
          }), this
        },
        has: function(e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0
        },
        empty: function() {
          return o && (o = []), this
        },
        disable: function() {
          return i = a = [], o = n = "", this
        },
        disabled: function() {
          return !o
        },
        lock: function() {
          return i = a = [], n || t || (o = n = ""), this
        },
        locked: function() {
          return !!i
        },
        fireWith: function(e, n) {
          return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
        },
        fire: function() {
          return l.fireWith(this, arguments), this
        },
        fired: function() {
          return !!r
        }
      };
    return l
  };

  function I(e) {
    return e
  }

  function W(e) {
    throw e
  }

  function $(e, t, n, r) {
    var i;
    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  w.extend({
    Deferred: function(t) {
      var n = [
          ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
          ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
        ],
        r = "pending",
        i = {
          state: function() {
            return r
          },
          always: function() {
            return o.done(arguments).fail(arguments), this
          },
          "catch": function(e) {
            return i.then(null, e)
          },
          pipe: function() {
            var e = arguments;
            return w.Deferred(function(t) {
              w.each(n, function(n, r) {
                var i = g(e[r[4]]) && e[r[4]];
                o[r[1]](function() {
                  var e = i && i.apply(this, arguments);
                  e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          then: function(t, r, i) {
            var o = 0;

            function a(t, n, r, i) {
              return function() {
                var s = this,
                  u = arguments,
                  l = function() {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                    }
                  },
                  c = i ? l : function() {
                    try {
                      l()
                    } catch (e) {
                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                    }
                  };
                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
              }
            }
            return w.Deferred(function(e) {
              n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
            }).promise()
          },
          promise: function(e) {
            return null != e ? w.extend(e, i) : i
          }
        },
        o = {};
      return w.each(n, function(e, t) {
        var a = t[2],
          s = t[5];
        i[t[1]] = a.add, s && a.add(function() {
          r = s
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = a.fireWith
      }), i.promise(o), t && t.call(o, o), o
    },
    when: function(e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function(e) {
          return function(n) {
            r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
          }
        };
      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise()
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, w.readyException = function(t) {
    e.setTimeout(function() {
      throw t
    })
  };
  var F = w.Deferred();
  w.fn.ready = function(e) {
    return F.then(e)["catch"](function(e) {
      w.readyException(e)
    }), this
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
  }
  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
  var z = function(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
          return l.call(w(e), n)
        })), t))
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    X = /^-ms-/,
    U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase()
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V)
  }
  var Y = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Q() {
    this.expando = w.expando + Q.uid++
  }
  Q.uid = 1, Q.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;
      else
        for (r in t) i[G(r)] = t[r];
      return i
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
    },
    access: function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t)
    }
  };
  var J = new Q,
    K = new Q,
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
        try {
          n = te(n)
        } catch (e) {}
        K.set(e, t, n)
      } else n = void 0;
    return n
  }
  w.extend({
    hasData: function(e) {
      return K.hasData(e) || J.hasData(e)
    },
    data: function(e, t, n) {
      return K.access(e, t, n)
    },
    removeData: function(e, t) {
      K.remove(e, t)
    },
    _data: function(e, t, n) {
      return J.access(e, t, n)
    },
    _removeData: function(e, t) {
      J.remove(e, t)
    }
  }), w.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;
          while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          J.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function() {
        K.set(this, e)
      }) : z(this, function(t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n
        } else this.each(function() {
          K.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        K.remove(this, e)
      })
    }
  }), w.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = w.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = w._queueHooks(e, t),
        a = function() {
          w.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function() {
          J.remove(e, [t + "queue", n])
        })
      })
    }
  }), w.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        w.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = w.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --r || i.resolveWith(o, [o])
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    },
    se = function(e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i
    };

  function ue(e, t, n, r) {
    var i, o, a = 20,
      s = r ? function() {
        return r.cur()
      } : function() {
        return w.css(e, t, "")
      },
      u = s(),
      l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, w.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var le = {};

  function ce(e) {
    var t, n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e
  }
  w.fn.extend({
    show: function() {
      return fe(this, !0)
    },
    hide: function() {
      return fe(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        ae(this) ? w(this).show() : w(this).hide()
      })
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
  }
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++])
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o)
    }
    return f
  }! function() {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0
  }

  function ke() {
    return !1
  }

  function Se() {
    try {
      return r.activeElement
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);
      for (s in t) De(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
    else if (!i) return e;
    return 1 === o && (a = i, (i = function(e) {
      return w().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
      w.event.add(this, t, i, r, n)
    })
  }
  w.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
        }), l = (t = (t || "").match(M) || [""]).length;
        while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && w.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
          } else
            for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t = w.event.fix(e),
        n, r, i, o, a, s, u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, a, s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function() {
          if (this.originalEvent) return t(this.originalEvent)
        } : function() {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function(e) {
      return e[w.expando] ? e : new w.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== Se() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === Se() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
        },
        _default: function(e) {
          return N(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, w.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, w.Event = function(e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), w.fn.extend({
    on: function(e, t, n, r) {
      return De(this, e, t, n, r)
    },
    one: function(e, t, n, r) {
      return De(this, e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
        w.event.remove(this, e, n, t)
      })
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
      }
      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i, o, s, u, l, c, f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
    });
    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
    }
    return e
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  w.extend({
    htmlPrefilter: function(e) {
      return e.replace(Ne, "<$1></$2>")
    },
    clone: function(e, t, n) {
      var r, i, o, a, s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
        else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
    },
    cleanData: function(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0
          }
          n[K.expando] && (n[K.expando] = void 0)
        }
    }
  }), w.fn.extend({
    detach: function(e) {
      return Ie(this, e, !0)
    },
    remove: function(e) {
      return Ie(this, e)
    },
    text: function(e) {
      return z(this, function(e) {
        return void 0 === e ? w.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return Re(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
      })
    },
    prepend: function() {
      return Re(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return Re(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return Re(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return w.clone(this, e, t)
      })
    },
    html: function(e) {
      return z(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = [];
      return Re(this, arguments, function(t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    w.fn[e] = function(e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    },
    Be = new RegExp(oe.join("|"), "i");
  ! function() {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
      }
    }

    function n(e) {
      return Math.round(parseFloat(e))
    }
    var i, o, a, s, u, l = r.createElement("div"),
      c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function() {
        return t(), o
      },
      pixelBoxStyles: function() {
        return t(), s
      },
      pixelPosition: function() {
        return t(), i
      },
      reliableMarginLeft: function() {
        return t(), u
      },
      scrollboxSize: function() {
        return t(), a
      }
    }))
  }();

  function Fe(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function _e(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ve = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--)
      if ((e = Ge[n] + t) in Ye) return e
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
  }

  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto"
    }
    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function(e, t, n, r) {
      var i, o, a, s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), w.each(["height", "width"], function(e, t) {
    w.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
          return et(e, t, r)
        })
      },
      set: function(e, n, r) {
        var i, o = $e(e),
          a = "border-box" === w.css(e, "boxSizing", !1, o),
          s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
      }
    }
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px"
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    w.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
  }), w.fn.extend({
    css: function(e, t) {
      return z(this, function(e, t, n) {
        var r, i, o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
      }, e, t, arguments.length > 1)
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i)
  }
  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, w.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt, rt, it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
  }

  function st() {
    return e.setTimeout(function() {
      nt = void 0
    }), nt = Date.now()
  }

  function ut(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function ct(e, t, n) {
    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
      a.unqueued || s()
    }), a.unqueued++, p.always(function() {
      p.always(function() {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
      })
    }));
    for (r in t)
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0
        }
        d[r] = y && y[r] || w.style(e, r)
      } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
        h.display = l
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      })), u = !1;
      for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
        display: l
      }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
        g || fe([e]), J.remove(e, "fxshow");
        for (r in d) w.style(e, r, d[r])
      })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function pt(e, t, n) {
    var r, i, o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, {
          specialEasing: {},
          easing: w.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  w.Animation = w.extend(pt, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n
        }]
      },
      tweener: function(e, t) {
        g(e) ? (t = e, e = ["*"]) : e = e.match(M);
        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
      },
      prefilters: [ct],
      prefilter: function(e, t) {
        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
      }
    }), w.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? w.extend({}, e) : {
        complete: n || !n && t || g(e) && e,
        duration: e,
        easing: n && t || t && !g(t) && t
      };
      return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
      }, r
    }, w.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(ae).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function() {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
          if (i) a[i] && a[i].stop && r(a[i]);
          else
            for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          !t && n || w.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;
          for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), w.each(["toggle", "show", "hide"], function(e, t) {
      var n = w.fn[t];
      w.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
      }
    }), w.each({
      slideDown: ut("show"),
      slideUp: ut("hide"),
      slideToggle: ut("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      w.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), w.timers = [], w.fx.tick = function() {
      var e, t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), nt = void 0
    }, w.fx.timer = function(e) {
      w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
      rt || (rt = !0, at())
    }, w.fx.stop = function() {
      rt = null
    }, w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, w.fn.delay = function(t, n) {
      return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
        var i = e.setTimeout(n, t);
        r.stop = function() {
          e.clearTimeout(i)
        }
      })
    },
    function() {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
    }();
  var dt, ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        w.removeAttr(this, e)
      })
    }
  }), w.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r = 0,
        i = t && t.match(M);
      if (i && 1 === e.nodeType)
        while (n = i[r++]) e.removeAttribute(n)
    }
  }), dt = {
    set: function(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = ht[t] || w.find.attr;
    ht[t] = function(e, t, r) {
      var i, o, a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
    }
  });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[w.propFix[e] || e]
      })
    }
  }), w.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    w.propFix[this.toLowerCase()] = this
  });

  function vt(e) {
    return (e.match(M) || []).join(" ")
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
  }
  w.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (g(e)) return this.each(function(t) {
        w(this).addClass(e.call(this, t, mt(this)))
      });
      if ((t = xt(e)).length)
        while (n = this[u++])
          if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
            a = 0;
            while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s)
          } return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (g(e)) return this.each(function(t) {
        w(this).removeClass(e.call(this, t, mt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while (n = this[u++])
          if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
            a = 0;
            while (o = t[a++])
              while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s)
          } return this
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t)
      }) : this.each(function() {
        var t, i, o, a;
        if (r) {
          i = 0, o = w(this), a = xt(e);
          while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
      })
    },
    hasClass: function(e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++])
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0]; {
        if (arguments.length) return r = g(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
            return null == e ? "" : e + ""
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e))
        }
      },
      select: {
        get: function(e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t)
            } return s
        },
        set: function(e, t) {
          var n, r, i = e.options,
            o = w.makeArray(t),
            a = i.length;
          while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), w.each(["radio", "checkbox"], function() {
    w.valHooks[this] = {
      set: function(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
      }
    }, h.checkOn || (w.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), h.focusin = "onfocusin" in e;
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function(e) {
      e.stopPropagation()
    };
  w.extend(w.event, {
    trigger: function(t, n, i, o) {
      var a, s, u, l, c, p, d, h, v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
      }
    },
    simulate: function(e, t, n) {
      var r = w.extend(new w.Event, n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t)
    }
  }), w.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        w.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0)
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      w.event.simulate(t, e.target, w.event.fix(e))
    };
    w.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
          i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
          i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
      }
    }
  });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function(t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== x(t)) r(e, t);
    else
      for (i in t) jt(e + "[" + i + "]", t[i], n, r)
  }
  w.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        var n = g(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) jt(n, e[n], t, i);
    return r.join("&")
  }, w.fn.extend({
    serialize: function() {
      return w.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
      }).map(function(e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        }
      }).get()
    }
  });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function(e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
      }), u
    }
    return a(t.dataTypes[0]) || !i["*"] && a("*")
  }

  function zt(e, t) {
    var n, r, i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e
  }

  function Xt(e, t, n) {
    var r, i, o, a, s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break
        } if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break
        }
        a || (a = i)
      }
      o = o || a
    }
    if (o) return o !== u[0] && u.unshift(o), n[o]
  }

  function Ut(e, t, n, r) {
    var i, o, a, s, u, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (!(a = l[u + " " + o] || l["* " + o]))
        for (i in l)
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break
          } if (!0 !== a)
        if (a && e["throws"]) t = a(t);
        else try {
          t = a(t)
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function(t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
              }
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return c ? a : null
          },
          setRequestHeader: function(e, t) {
            return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
          },
          overrideMimeType: function(e) {
            return null == c && (h.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else
                for (t in e) x[t] = [x[t], e[t]];
            return this
          },
          abort: function(e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this
          }
        };
      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");
        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function() {
          E.abort("timeout")
        }, h.timeout));
        try {
          c = !1, i.send(b, k)
        } catch (e) {
          if (c) throw e;
          k(-1, e)
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l, p, d, b, T, C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
      }
      return E
    },
    getJSON: function(e, t, n) {
      return w.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return w.get(e, void 0, t, "script")
    }
  }), w.each(["get", "post"], function(e, t) {
    w[t] = function(e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e))
    }
  }), w._evalUrl = function(e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  }, w.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function(e) {
      return g(e) ? this.each(function(t) {
        w(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = w(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = g(e);
      return this.each(function(n) {
        w(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function(e) {
      return this.parent(e).not("body").each(function() {
        w(this).replaceWith(this.childNodes)
      }), this
    }
  }), w.expr.pseudos.hidden = function(e) {
    return !w.expr.pseudos.visible(e)
  }, w.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, w.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {}
  };
  var Vt = {
      0: 200,
      1223: 204
    },
    Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
    var n, r;
    if (h.cors || Gt && !t.crossDomain) return {
      send: function(i, o) {
        var a, s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
          for (a in t.xhrFields) s[a] = t.xhrFields[a];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
        for (a in i) s.setRequestHeader(a, i[a]);
        n = function(e) {
          return function() {
            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()))
          }
        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
          4 === s.readyState && e.setTimeout(function() {
            n && r()
          })
        }, n = n("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function() {
        n && n()
      }
    }
  }), w.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return w.globalEval(e), e
      }
    }
  }), w.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), w.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
          }), r.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }
  });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e
    }
  }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return a || w.error(i + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      a = arguments
    }, r.always(function() {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
    }), "script"
  }), h.createHTMLDocument = function() {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), w.parseHTML = function(e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
  }, w.fn.load = function(e, t, n) {
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
      a.each(function() {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    w.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), w.expr.pseudos.animated = function(e) {
    return w.grep(w.timers, function(t) {
      return e === t.elem
    }).length
  }, w.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, a, s, u, l, c = w.css(e, "position"),
        f = w(e),
        p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
    }
  }, w.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        w.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      }
    },
    position: function() {
      if (this[0]) {
        var e, t, n, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
        else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent;
        while (e && "static" === w.css(e, "position")) e = e.offsetParent;
        return e || be
      })
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = "pageYOffset" === t;
    w.fn[e] = function(r) {
      return z(this, function(e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
      }, e, r, arguments.length)
    }
  }), w.each(["top", "left"], function(e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
    })
  }), w.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      w.fn[r] = function(i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
          s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function(t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
        }, t, a ? i : void 0, a)
      }
    })
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
    w.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), w.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), w.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), w.proxy = function(e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
      return e.apply(t || this, r.concat(o.call(arguments)))
    }, i.guid = e.guid = e.guid || w.guid++, i
  }, w.holdReady = function(e) {
    e ? w.readyWait++ : w.ready(!0)
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return w
  });
  var Jt = e.jQuery,
    Kt = e.$;
  return w.noConflict = function(t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
  }, t || (e.jQuery = e.$ = w), w
});

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

! function(t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n, s = "$()." + i + '("' + e + '")';
      return t.each(function(t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n
      }), void 0 !== n ? n : t
    }

    function h(t, e) {
      t.each(function(t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
      })
    }
    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e)
      }
      return h(this, t), this
    }, o(a))
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var n = Array.prototype.slice,
    s = t.console,
    r = "undefined" == typeof s ? function() {} : function(t) {
      s.error(t)
    };
  return o(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        o = i[t] = i[t] || {};
      return o[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      i = i.slice(0), e = e || [];
      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
          r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e)
      }
      return this
    }
  }, e.allOff = function() {
    delete this._events, delete this._onceEvents
  }, t
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0
    }
    return t
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
          c = s[f],
          m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        y = a.paddingTop + a.paddingBottom,
        g = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        z = a.borderTopWidth + a.borderBottomWidth,
        I = d && r,
        x = t(s.width);
      x !== !1 && (a.width = x + (I ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
    }
  }
  var r, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    h = u.length,
    d = !1;
  return s
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
        n = o + "MatchesSelector";
      if (t[n]) return n
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  };
  var o = Array.prototype.slice;
  i.makeArray = function(t) {
    if (Array.isArray(t)) return t;
    if (null === t || void 0 === t) return [];
    var e = "object" == typeof t && "number" == typeof t.length;
    return e ? o.call(t) : [t]
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t.parentNode && t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);
        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
      }
    }), n
  }, i.debounceMethod = function(t, e, i) {
    i = i || 100;
    var o = t.prototype[e],
      n = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[n];
      clearTimeout(t);
      var e = arguments,
        s = this;
      this[n] = setTimeout(function() {
        o.apply(s, e), delete s[n]
      }, i)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function(e, o) {
    i.docReady(function() {
      var s = i.toDashed(o),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        u = document.querySelectorAll(".js-" + s),
        h = i.makeArray(a).concat(i.makeArray(u)),
        d = r + "-options",
        l = t.jQuery;
      h.forEach(function(t) {
        var i, s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s)
        } catch (a) {
          return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
        }
        var u = new e(t, i);
        l && l.data(t, o, u)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var s = document.documentElement.style,
    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    } [r],
    h = {
      transform: a,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    },
    d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function() {
    this.size = e(this.element)
  }, d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i]
    }
  }, d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      o = t[e ? "left" : "right"],
      n = t[i ? "top" : "bottom"],
      s = parseFloat(o),
      r = parseFloat(n),
      a = this.layout.size;
    o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
  }, d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop"),
      n = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[n];
    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
      h = o ? "top" : "bottom",
      d = o ? "bottom" : "top",
      l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      o = this.position.y,
      n = t == this.position.x && e == this.position.y;
    if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
    var s = t - i,
      r = e - o,
      a = {};
    a.transform = this.getTranslate(s, r), this.transition({
      to: a,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      o = this.layout._getOption("originTop");
    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e)
  }, d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + n(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1)
    }
  }, d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        o = f[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
    this.css(c)
  }, d.stagger = function(t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function() {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, o
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
    return e(t, i, o, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();
    var s = this._getOption("initLayout");
    s && this.layout()
  }

  function r(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n
  }
  var u = t.console,
    h = t.jQuery,
    d = function() {},
    l = 0,
    f = {};
  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function(t) {
    o.extend(this.options, t)
  }, c._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, c.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, c._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
        r = new i(s, this);
      o.push(r)
    }
    return o
  }, c._filterFindItemElements = function(t) {
    return o.filterFindElements(t, this.options.itemSelector)
  }, c.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, c.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, c._init = c.layout, c._resetLayout = function() {
    this.getSize()
  }, c.getSize = function() {
    this.size = i(this.element)
  }, c._getMeasurement = function(t, e) {
    var o, n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
  }, c.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, c._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, c._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var o = this._getItemLayoutPosition(t);
        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
      }, this), this._processLayoutQueue(i)
    }
  }, c._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, c._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, c.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, c._positionItem = function(t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
  }, c._postLayout = function() {
    this.resizeContainer()
  }, c.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, c._emitCompleteOnItems = function(t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e])
    }

    function o() {
      r++, r == s && i()
    }
    var n = this,
      s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function(e) {
      e.once(t, o)
    })
  }, c.dispatchEvent = function(t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h)
      if (this.$element = this.$element || h(this.element), e) {
        var n = h.Event(e);
        n.type = t, this.$element.trigger(n, i)
      } else this.$element.trigger(t, i)
  }, c.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, c.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, c.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, c.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      o.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, c._find = function(t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
  }, c._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, c._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, c._manageStamp = d, c._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      o = this._boundingRect,
      n = i(t),
      s = {
        left: e.left - o.left - n.marginLeft,
        top: e.top - o.top - n.marginTop,
        right: o.right - e.right - n.marginRight,
        bottom: o.bottom - e.bottom - n.marginBottom
      };
    return s
  }, c.handleEvent = o.handleEvent, c.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, c.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, c.onresize = function() {
    this.resize()
  }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, c.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, c.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, c.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, c.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, c.reveal = function(t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, c.hide = function(t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, c.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, c.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, c.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, c.getItems = function(t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, c.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), o.removeFrom(this.items, t)
    }, this)
  }, c.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, s.data = function(t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e]
  }, s.create = function(t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
    o = i._create;
  i._create = function() {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
  }, i.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this)
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function() {
    n.apply(this, arguments), this.css({
      display: ""
    })
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var o = i.prototype,
    n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function(t) {
    o[t] = function() {
      return e.prototype[t].apply(this.isotope, arguments)
    }
  }), o.needsVerticalResizeLayout = function() {
    var e = t(this.isotope.element),
      i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight
  }, o._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments)
  }, o.getColumnWidth = function() {
    this.getSegmentSize("column", "Width")
  }, o.getRowHeight = function() {
    this.getSegmentSize("row", "Height")
  }, o.getSegmentSize = function(t, e) {
    var i = t + e,
      o = "outer" + e;
    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e]
    }
  }, o.getFirstItemSize = function() {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, o.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments)
  }, o.getSize = function() {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function(t, e) {
    function n() {
      i.apply(this, arguments)
    }
    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, o.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var o = this.columnWidth += this.gutter,
      n = this.containerWidth + this.gutter,
      s = n / o,
      r = o - n % o,
      a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1)
  }, o.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      o = e(i);
    this.containerWidth = o && o.innerWidth
  }, o._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && e < 1 ? "round" : "ceil",
      o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);
    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
        x: this.columnWidth * s.col,
        y: s.y
      }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
    return r
  }, o._getTopColPosition = function(t) {
    var e = this._getTopColGroup(t),
      i = Math.min.apply(Math, e);
    return {
      col: e.indexOf(i),
      y: i
    }
  }, o._getTopColGroup = function(t) {
    if (t < 2) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
    return e
  }, o._getColGroupY = function(t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i)
  }, o._getHorizontalColPosition = function(t, e) {
    var i = this.horizontalColIndex % this.cols,
      o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    }
  }, o._manageStamp = function(t) {
    var i = e(t),
      o = this._getElementOffset(t),
      n = this._getOption("originLeft"),
      s = n ? o.left : o.right,
      r = s + i.outerWidth,
      a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, o._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, o._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, o.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"),
    o = i.prototype,
    n = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };
  for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function() {
    this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = o._getOption;
  return o._getOption = function(t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return i._resetLayout = function() {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
  }, i._getContainerSize = function() {
    return {
      height: this.maxY
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("vertical", {
      horizontalAlignment: 0
    }),
    i = e.prototype;
  return i._resetLayout = function() {
    this.y = 0
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    }
  }, i._getContainerSize = function() {
    return {
      height: this.y
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
  function a(t, e) {
    return function(i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
          r = i.sortData[s],
          a = o.sortData[s];
        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
            h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h
        }
      }
      return 0
    }
  }
  var u = t.jQuery,
    h = String.prototype.trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/^\s+|\s+$/g, "")
    },
    d = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function() {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t in r.modes) this._initLayoutMode(t)
  }, l.reloadItems = function() {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, l._itemize = function() {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++
    }
    return this._updateItemsSortData(t), t
  }, l._initLayoutMode = function(t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, l.layout = function() {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, l._layout = function() {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, l.arrange = function(t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, l._init = l.arrange, l._hideReveal = function(t) {
    this.reveal(t.needReveal), this.hide(t.needHide)
  }, l._getIsInstant = function() {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return this._isInstant = e, e
  }, l._bindArrangeComplete = function() {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
    }
    var e, i, o, n = this;
    this.once("layoutComplete", function() {
      e = !0, t()
    }), this.once("hideComplete", function() {
      i = !0, t()
    }), this.once("revealComplete", function() {
      o = !0, t()
    })
  }, l._filter = function(t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];
      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
      }
    }
    return {
      matches: i,
      needReveal: o,
      needHide: n
    }
  }, l._getFilterTest = function(t) {
    return u && this.options.isJQueryFiltering ? function(e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function(e) {
      return t(e.element)
    } : function(e) {
      return o(e.element, t)
    }
  }, l.updateSortData = function(t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, l._getSorters = function() {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i)
    }
  }, l._updateItemsSortData = function(t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData()
    }
  };
  var f = function() {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
        o = i[0],
        n = o.match(/^\[(.+)\]$/),
        s = n && n[1],
        r = e(s, o),
        a = d.sortDataParsers[i[1]];
      return t = a ? function(t) {
        return t && a(r(t))
      } : function(t) {
        return t && r(t)
      }
    }

    function e(t, e) {
      return t ? function(e) {
        return e.getAttribute(t)
      } : function(t) {
        var i = t.querySelector(e);
        return i && i.textContent
      }
    }
    return t
  }();
  d.sortDataParsers = {
    parseInt: function(t) {
      return parseInt(t, 10)
    },
    parseFloat: function(t) {
      return parseFloat(t)
    }
  }, l._sort = function() {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e)
    }
  }, l._getIsSameSortBy = function(t) {
    for (var e = 0; e < t.length; e++)
      if (t[e] != this.sortHistory[e]) return !1;
    return !0
  }, l._mode = function() {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, l._resetLayout = function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, l._getItemLayoutPosition = function(t) {
    return this._mode()._getItemLayoutPosition(t)
  }, l._manageStamp = function(t) {
    this._mode()._manageStamp(t)
  }, l._getContainerSize = function() {
    return this._mode()._getContainerSize()
  }, l.needsResizeLayout = function() {
    return this._mode().needsResizeLayout()
  }, l.appended = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, l.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, l._filterRevealAdded = function(t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, l.insert = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, o, n = e.length;
      for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
      var s = this._filter(e).matches;
      for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
      this.reveal(s)
    }
  };
  var c = l.remove;
  return l.remove = function(t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s)
    }
  }, l.shuffle = function() {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, l._noTransition = function(t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o
  }, l.getFilteredItemElements = function() {
    return this.filteredItems.map(function(t) {
      return t.element
    })
  }, d
});

/*!
 * Magnific Popup v1.1.0
 *
 * Copyright (c) 2016
 */

! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function() {},
    u = !!window.jQuery,
    v = a(window),
    w = function(a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function(b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function(c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function(c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function() {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function() {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function(c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function() {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function() {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function(c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function(a, c) {
      var d = function(d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
        if (void 0 === d || d === !1) return !0;
        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);
          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
          }
        } else b.find(p + "-" + c).html(d)
      })
    },
    _getScrollbarSize: function() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function(c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function() {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        b.types.push(F), w(h + "." + F, function() {
          G()
        })
      },
      getInline: function(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function() {
      H && a(document.body).removeClass(H)
    },
    K = function() {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function() {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function() {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function(a) {
        var c = 0,
          d = a.img[0],
          e = function(f) {
            L && clearInterval(L), L = setInterval(function() {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function(c, d) {
        var e = 0,
          f = function() {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function() {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function(a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function() {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                f.css(b._getOffset(!0)), e = setTimeout(function() {
                  k(), setTimeout(function() {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function() {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function() {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function() {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function(a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function() {
        b.types.push(P), w("BeforeChange", function(a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function() {
          R()
        })
      },
      getIframe: function(c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function() {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function(a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function(a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function(a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function() {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function() {
              b.prev()
            }), f.click(function() {
              b.next()
            }), b.container.append(e.add(f))
          }
        }), w(n + e, function() {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function() {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
            d.hasSize = !0
          }).on("error.mfploader", function() {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function(a) {
        return a.src.replace(/\.\w+$/, function(a) {
          return "@2x" + a
        })
      },
      ratio: 1
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            })
          }), w("ElementParse." + U, function(b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), A()
});



/*!
 * Waypoints v4.0.0
 *
 * Licensed under the MIT license.
 * https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 *
 * Copyright Â© 2011-2015 Caleb Troughton
 */

! function() {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
  }
  var e = 0,
    i = {};
  t.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t)
  }, t.prototype.trigger = function(t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, t.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete i[this.key]
  }, t.prototype.disable = function() {
    return this.enabled = !1, this
  }, t.prototype.enable = function() {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function() {
    return this.group.next(this)
  }, t.prototype.previous = function() {
    return this.group.previous(this)
  }, t.invokeAll = function(t) {
    var e = [];
    for (var o in i) e.push(i[o]);
    for (var n = 0, r = e.length; r > n; n++) e[n][t]()
  }, t.destroyAll = function() {
    t.invokeAll("destroy")
  }, t.disableAll = function() {
    t.invokeAll("disable")
  }, t.enableAll = function() {
    t.invokeAll("enable")
  }, t.refreshAll = function() {
    t.Context.refreshAll()
  }, t.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function() {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(),
function() {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var i = 0,
    o = {},
    n = window.Waypoint,
    r = window.onload;
  e.prototype.add = function(t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, e.prototype.checkEmpty = function() {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical);
    t && e && (this.adapter.off(".waypoints"), delete o[this.key])
  }, e.prototype.createThrottledResizeHandler = function() {
    function t() {
      e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function() {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.createThrottledScrollHandler = function() {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function() {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.handleResize = function() {
    n.Context.refreshAll()
  }, e.prototype.handleScroll = function() {
    var t = {},
      e = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };
    for (var i in e) {
      var o = e[i],
        n = o.newScroll > o.oldScroll,
        r = n ? o.forward : o.backward;
      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s],
          l = o.oldScroll < a.triggerPoint,
          h = o.newScroll >= a.triggerPoint,
          p = l && h,
          u = !l && !h;
        (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
      }
    }
    for (var c in t) t[c].flushTriggers();
    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    }
  }, e.prototype.innerHeight = function() {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
  }, e.prototype.remove = function(t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, e.prototype.innerWidth = function() {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
  }, e.prototype.destroy = function() {
    var t = [];
    for (var e in this.waypoints)
      for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
    for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
  }, e.prototype.refresh = function() {
    var t, e = this.element == this.element.window,
      i = e ? void 0 : this.adapter.offset(),
      o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };
    for (var r in t) {
      var s = t[r];
      for (var a in this.waypoints[r]) {
        var l, h, p, u, c, d = this.waypoints[r][a],
          f = d.options.offset,
          w = d.triggerPoint,
          y = 0,
          g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
      }
    }
    return n.requestAnimationFrame(function() {
      for (var t in o) o[t].flushTriggers()
    }), this
  }, e.findOrCreateByElement = function(t) {
    return e.findByElement(t) || new e(t)
  }, e.refreshAll = function() {
    for (var t in o) o[t].refresh()
  }, e.findByElement = function(t) {
    return o[t.waypointContextKey]
  }, window.onload = function() {
    r && r(), e.refreshAll()
  }, n.requestAnimationFrame = function(e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e)
  }, n.Context = e
}(),
function() {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
  }
  var o = {
      vertical: {},
      horizontal: {}
    },
    n = window.Waypoint;
  i.prototype.add = function(t) {
    this.waypoints.push(t)
  }, i.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }, i.prototype.flushTriggers = function() {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
        n = "up" === i || "left" === i;
      o.sort(n ? e : t);
      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i])
      }
    }
    this.clearTriggerQueues()
  }, i.prototype.next = function(e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
      o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1]
  }, i.prototype.previous = function(e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null
  }, i.prototype.queueTrigger = function(t, e) {
    this.triggerQueues[e].push(t)
  }, i.prototype.remove = function(t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
  }, i.prototype.first = function() {
    return this.waypoints[0]
  }, i.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }, i.findOrCreate = function(t) {
    return o[t.axis][t.name] || new i(t)
  }, n.Group = i
}(),
function() {
  "use strict";

  function t(t) {
    this.$element = e(t)
  }
  var e = window.jQuery,
    i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
    t.prototype[i] = function() {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t)
    }
  }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
    t[o] = e[o]
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t
}(),
function() {
  "use strict";

  function t(t) {
    return function() {
      var i = [],
        o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
      }), i
    }
  }
  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();


/*!
 * Flickity PACKAGED v1.0.0
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function(t) {
  function e() {}

  function i(t) {
    function i(e) {
      e.prototype.option || (e.prototype.option = function(e) {
        t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
      })
    }

    function o(e, i) {
      t.fn[e] = function(o) {
        if ("string" == typeof o) {
          for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
            var h = this[a],
              c = t.data(h, e);
            if (c)
              if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                var d = c[o].apply(c, s);
                if (void 0 !== d) return d
              } else r("no such method '" + o + "' for " + e + " instance");
            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
          }
          return this
        }
        return this.each(function() {
          var n = t.data(this, e);
          n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
        })
      }
    }
    if (t) {
      var r = "undefined" == typeof console ? e : function(t) {
        console.error(t)
      };
      return t.bridget = function(t, e) {
        i(e), o(t, e)
      }, t.bridget
    }
  }
  var n = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function(t) {
  function e(t) {
    return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
  }

  function i(t, e) {
    var i = n(t, e) ? r : o;
    i(t, e)
  }
  var n, o, r;
  "classList" in document.documentElement ? (n = function(t, e) {
    return t.classList.contains(e)
  }, o = function(t, e) {
    t.classList.add(e)
  }, r = function(t, e) {
    t.classList.remove(e)
  }) : (n = function(t, i) {
    return e(i).test(t.className)
  }, o = function(t, e) {
    n(t, e) || (t.className = t.className + " " + e)
  }, r = function(t, i) {
    t.className = t.className.replace(e(i), " ")
  });
  var s = {
    hasClass: n,
    addClass: o,
    removeClass: r,
    toggleClass: i,
    has: n,
    add: o,
    remove: r,
    toggle: i
  };
  "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window),
function() {
  function t() {}

  function e(t, e) {
    for (var i = t.length; i--;)
      if (t[i].listener === e) return i;
    return -1
  }

  function i(t) {
    return function() {
      return this[t].apply(this, arguments)
    }
  }
  var n = t.prototype,
    o = this,
    r = o.EventEmitter;
  n.getListeners = function(t) {
    var e, i, n = this._getEvents();
    if (t instanceof RegExp) {
      e = {};
      for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
    } else e = n[t] || (n[t] = []);
    return e
  }, n.flattenListeners = function(t) {
    var e, i = [];
    for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
    return i
  }, n.getListenersAsObject = function(t) {
    var e, i = this.getListeners(t);
    return i instanceof Array && (e = {}, e[t] = i), e || i
  }, n.addListener = function(t, i) {
    var n, o = this.getListenersAsObject(t),
      r = "object" == typeof i;
    for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
      listener: i,
      once: !1
    });
    return this
  }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
    return this.addListener(t, {
      listener: e,
      once: !0
    })
  }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
    return this.getListeners(t), this
  }, n.defineEvents = function(t) {
    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
    return this
  }, n.removeListener = function(t, i) {
    var n, o, r = this.getListenersAsObject(t);
    for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
    return this
  }, n.off = i("removeListener"), n.addListeners = function(t, e) {
    return this.manipulateListeners(!1, t, e)
  }, n.removeListeners = function(t, e) {
    return this.manipulateListeners(!0, t, e)
  }, n.manipulateListeners = function(t, e, i) {
    var n, o, r = t ? this.removeListener : this.addListener,
      s = t ? this.removeListeners : this.addListeners;
    if ("object" != typeof e || e instanceof RegExp)
      for (n = i.length; n--;) r.call(this, e, i[n]);
    else
      for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
    return this
  }, n.removeEvent = function(t) {
    var e, i = typeof t,
      n = this._getEvents();
    if ("string" === i) delete n[t];
    else if (t instanceof RegExp)
      for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
    else delete this._events;
    return this
  }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
    var i, n, o, r, s = this.getListenersAsObject(t);
    for (o in s)
      if (s.hasOwnProperty(o))
        for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
    return this
  }, n.trigger = i("emitEvent"), n.emit = function(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e)
  }, n.setOnceReturnValue = function(t) {
    return this._onceReturnValue = t, this
  }, n._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, n._getEvents = function() {
    return this._events || (this._events = {})
  }, t.noConflict = function() {
    return o.EventEmitter = r, t
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return t
  }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
  function(t) {
    function e(e) {
      var i = t.event;
      return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
      n = function() {};
    i.addEventListener ? n = function(t, e, i) {
      t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
      t[i + n] = n.handleEvent ? function() {
        var i = e(t);
        n.handleEvent.call(n, i)
      } : function() {
        var i = e(t);
        n.call(t, i)
      }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
      t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
      t.detachEvent("on" + e, t[e + i]);
      try {
        delete t[e + i]
      } catch (n) {
        t[e + i] = void 0
      }
    });
    var r = {
      bind: n,
      unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
  }(window),
  function(t) {
    function e(t) {
      if (t) {
        if ("string" == typeof n[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, o = 0, r = i.length; r > o; o++)
          if (e = i[o] + t, "string" == typeof n[e]) return e
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
      return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
  }(window),
  function(t) {
    function e(t) {
      var e = parseFloat(t),
        i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e
    }

    function i() {}

    function n() {
      for (var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
        var n = s[e];
        t[n] = 0
      }
      return t
    }

    function o(i) {
      function o() {
        if (!p) {
          p = !0;
          var n = t.getComputedStyle;
          if (h = function() {
              var t = n ? function(t) {
                return n(t, null)
              } : function(t) {
                return t.currentStyle
              };
              return function(e) {
                var i = t(e);
                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
              }
            }(), c = i("boxSizing")) {
            var o = document.createElement("div");
            o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
            var s = document.body || document.documentElement;
            s.appendChild(o);
            var a = h(o);
            d = 200 === e(a.width), s.removeChild(o)
          }
        }
      }

      function a(t) {
        if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
          var i = h(t);
          if ("none" === i.display) return n();
          var r = {};
          r.width = t.offsetWidth, r.height = t.offsetHeight;
          for (var a = r.isBorderBox = !(!c || !i[c] || "border-box" !== i[c]), p = 0, u = s.length; u > p; p++) {
            var f = s[p],
              v = i[f];
            v = l(t, v);
            var y = parseFloat(v);
            r[f] = isNaN(y) ? 0 : y
          }
          var g = r.paddingLeft + r.paddingRight,
            m = r.paddingTop + r.paddingBottom,
            b = r.marginLeft + r.marginRight,
            x = r.marginTop + r.marginBottom,
            S = r.borderLeftWidth + r.borderRightWidth,
            C = r.borderTopWidth + r.borderBottomWidth,
            w = a && d,
            E = e(i.width);
          E !== !1 && (r.width = E + (w ? 0 : g + S));
          var P = e(i.height);
          return P !== !1 && (r.height = P + (w ? 0 : m + C)), r.innerWidth = r.width - (g + S), r.innerHeight = r.height - (m + C), r.outerWidth = r.width + b, r.outerHeight = r.height + x, r
        }
      }

      function l(e, i) {
        if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
        var n = e.style,
          o = n.left,
          r = e.runtimeStyle,
          s = r && r.left;
        return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
      }
      var h, c, d, p = !1;
      return a
    }
    var r = "undefined" == typeof console ? i : function(t) {
        console.error(t)
      },
      s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
  }(window),
  function(t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
      var i = "readystatechange" === t.type && "complete" !== r.readyState;
      e.isReady || i || n()
    }

    function n() {
      e.isReady = !0;
      for (var t = 0, i = s.length; i > t; t++) {
        var n = s[t];
        n()
      }
    }

    function o(o) {
      return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }
    var r = t.document,
      s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
  }(window),
  function(t) {
    function e(t, e) {
      return t[s](e)
    }

    function i(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t)
      }
    }

    function n(t, e) {
      i(t);
      for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
        if (n[o] === t) return !0;
      return !1
    }

    function o(t, n) {
      return i(t), e(t, n)
    }
    var r, s = function() {
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
        var o = e[i],
          r = o + "MatchesSelector";
        if (t[r]) return r
      }
    }();
    if (s) {
      var a = document.createElement("div"),
        l = e(a, "div");
      r = l ? e : o
    } else r = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
      return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
  }(Element.prototype),
  function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
  }(window, function(t, e, i) {
    function n(t) {
      return t.replace(/(.)([A-Z])/g, function(t, e, i) {
        return e + "-" + i
      }).toLowerCase()
    }
    var o = {};
    o.extend = function(t, e) {
      for (var i in e) t[i] = e[i];
      return t
    }, o.modulo = function(t, e) {
      return (t % e + e) % e
    };
    var r = Object.prototype.toString;
    o.isArray = function(t) {
      return "[object Array]" == r.call(t)
    }, o.makeArray = function(t) {
      var e = [];
      if (o.isArray(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
      else e.push(t);
      return e
    }, o.indexOf = Array.prototype.indexOf ? function(t, e) {
      return t.indexOf(e)
    } : function(t, e) {
      for (var i = 0, n = t.length; n > i; i++)
        if (t[i] === e) return i;
      return -1
    }, o.removeFrom = function(t, e) {
      var i = o.indexOf(t, e); - 1 != i && t.splice(i, 1)
    }, o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
      return t instanceof HTMLElement
    } : function(t) {
      return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, o.setText = function() {
      function t(t, i) {
        e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
      }
      var e;
      return t
    }(), o.getParent = function(t, e) {
      for (; t != document.body;)
        if (t = t.parentNode, i(t, e)) return t
    }, o.getQueryElement = function(t) {
      return "string" == typeof t ? document.querySelector(t) : t
    }, o.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, o.filterFindElements = function(t, e) {
      t = o.makeArray(t);
      for (var n = [], r = 0, s = t.length; s > r; r++) {
        var a = t[r];
        if (o.isElement(a))
          if (e) {
            i(a, e) && n.push(a);
            for (var l = a.querySelectorAll(e), h = 0, c = l.length; c > h; h++) n.push(l[h])
          } else n.push(a)
      }
      return n
    }, o.debounceMethod = function(t, e, i) {
      var n = t.prototype[e],
        o = e + "Timeout";
      t.prototype[e] = function() {
        var t = this[o];
        t && clearTimeout(t);
        var e = arguments,
          r = this;
        this[o] = setTimeout(function() {
          n.apply(r, e), delete r[o]
        }, i || 100)
      }
    };
    var s = t.jQuery,
      a = t.console;
    return o.htmlInit = function(t, i) {
      e(function() {
        for (var e = n(i), o = document.querySelectorAll(".js-" + e), r = "data-" + e + "-options", l = 0, h = o.length; h > l; l++) {
          var c, d = o[l],
            p = d.getAttribute(r);
          try {
            c = p && JSON.parse(p)
          } catch (u) {
            a && a.error("Error parsing " + r + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + u);
            continue
          }
          var f = new t(d, c);
          s && s.data(d, i, f)
        }
      })
    }, o
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
      return e(t, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
  }(window, function(t, e) {
    function i(t, e) {
      this.element = t, this.parent = e, this.create()
    }
    var n = "attachEvent" in t;
    return i.prototype.create = function() {
      this.element.style.position = "absolute", n && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0
    }, i.prototype.destroy = function() {
      this.element.style.position = "";
      var t = this.parent.originSide;
      this.element.style[t] = ""
    }, i.prototype.getSize = function() {
      this.size = e(this.element)
    }, i.prototype.setPosition = function(t) {
      this.x = t, this.setDefaultTarget(), this.renderPosition(t)
    }, i.prototype.setDefaultTarget = function() {
      var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
      this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, i.prototype.renderPosition = function(t) {
      var e = this.parent.originSide;
      this.element.style[e] = this.parent.getPositionValue(t)
    }, i.prototype.wrapShift = function(t) {
      this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, i.prototype.remove = function() {
      this.element.parentNode.removeChild(this.element)
    }, i
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.getStyleProperty, t.fizzyUIUtils))
  }(window, function(t, e, i) {
    for (var n, o = 0, r = "webkit moz ms o".split(" "), s = t.requestAnimationFrame, a = t.cancelAnimationFrame, l = 0; l < r.length && (!s || !a); l++) n = r[l], s = s || t[n + "RequestAnimationFrame"], a = a || t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"];
    s && a || (s = function(e) {
      var i = (new Date).getTime(),
        n = Math.max(0, 16 - (i - o)),
        r = t.setTimeout(function() {
          e(i + n)
        }, n);
      return o = i + n, r
    }, a = function(e) {
      t.clearTimeout(e)
    });
    var h = {};
    h.startAnimation = function() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    }, h.animate = function() {
      this.applySelectedAttraction();
      var t = this.x;
      if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
        var e = this;
        s(function() {
          e.animate()
        })
      }
    };
    var c = e("transform"),
      d = !!e("perspective");
    return h.positionSlider = function() {
      var t = this.x;
      this.options.wrapAround && this.cells.length > 1 && (t = i.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && c ? -t : t;
      var e = this.getPositionValue(t);
      c ? this.slider.style[c] = d && this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")" : this.slider.style[this.originSide] = e
    }, h.positionSliderAtSelected = function() {
      if (this.cells.length) {
        var t = this.cells[this.selectedIndex];
        this.x = -t.target, this.positionSlider()
      }
    }, h.getPositionValue = function(t) {
      return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }, h.settle = function(t) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, d && this.positionSlider(), this.dispatchEvent("settle"))
    }, h.shiftWrapCells = function(t) {
      var e = this.cursorPosition + t;
      this._shiftCells(this.beforeShiftCells, e, -1);
      var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
      this._shiftCells(this.afterShiftCells, i, 1)
    }, h._shiftCells = function(t, e, i) {
      for (var n = 0, o = t.length; o > n; n++) {
        var r = t[n],
          s = e > 0 ? i : 0;
        r.wrapShift(s), e -= r.size.outerWidth
      }
    }, h._unshiftCells = function(t) {
      if (t && t.length)
        for (var e = 0, i = t.length; i > e; e++) t[e].wrapShift(0)
    }, h.integratePhysics = function() {
      this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0
    }, h.applyForce = function(t) {
      this.accel += t
    }, h.getFrictionFactor = function() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }, h.getRestingPosition = function() {
      return this.x + this.velocity / (1 - this.getFrictionFactor())
    }, h.applySelectedAttraction = function() {
      var t = this.cells.length;
      if (!this.isPointerDown && !this.isFreeScrolling && t) {
        var e = this.cells[this.selectedIndex],
          i = this.options.wrapAround && t > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / t) : 0,
          n = -1 * (e.target + i) - this.x,
          o = n * this.options.selectedAttraction;
        this.applyForce(o)
      }
    }, h
  }),
  function(t, e) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function(i, n, o, r, s, a, l) {
      return e(t, i, n, o, r, s, a, l)
    });
    else if ("object" == typeof exports) module.exports = e(t, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate"));
    else {
      var i = t.Flickity;
      t.Flickity = e(t, t.classie, t.EventEmitter, t.eventie, t.getSize, t.fizzyUIUtils, i.Cell, i.animatePrototype)
    }
  }(window, function(t, e, i, n, o, r, s, a) {
    function l(t, e) {
      for (t = r.makeArray(t); t.length;) e.appendChild(t.shift())
    }

    function h(t, e) {
      var i = r.getQueryElement(t);
      return i ? (this.element = i, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void(p && p.error("Bad element for Flickity: " + (i || t)))
    }
    var c = t.jQuery,
      d = t.getComputedStyle,
      p = t.console,
      u = 0,
      f = {};
    h.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: .075,
      friction: .28,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: .025,
      setGallerySize: !0
    }, h.createMethods = [], r.extend(h.prototype, i.prototype), h.prototype._create = function() {
      var e = this.guid = ++u;
      this.element.flickityGUID = e, f[e] = this, this.selectedIndex = this.options.initialIndex || 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", h.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (n.bind(t, "resize", this), this.isResizeBound = !0);
      for (var i = 0, o = h.createMethods.length; o > i; i++) {
        var r = h.createMethods[i];
        this[r]()
      }
      this.options.watchCSS ? this.watchCSS() : this.activate()
    }, h.prototype.option = function(t) {
      r.extend(this.options, t)
    }, h.prototype.activate = function() {
      if (!this.isActive) {
        this.isActive = !0, e.add(this.element, "flickity-enabled"), this.options.rightToLeft && e.add(this.element, "flickity-rtl");
        var t = this._filterFindCellElements(this.element.children);
        l(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.getSize(), this.reloadCells(), this.setGallerySize(), this.options.accessibility && (this.element.tabIndex = 0, n.bind(this.element, "keydown", this)), this.emit("activate"), this.positionSliderAtSelected(), this.select(this.selectedIndex)
      }
    }, h.prototype._createSlider = function() {
      var t = document.createElement("div");
      t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, h.prototype._filterFindCellElements = function(t) {
      return r.filterFindElements(t, this.options.cellSelector)
    }, h.prototype.reloadCells = function() {
      this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, h.prototype._makeCells = function(t) {
      for (var e = this._filterFindCellElements(t), i = [], n = 0, o = e.length; o > n; n++) {
        var r = e[n],
          a = new s(r, this);
        i.push(a)
      }
      return i
    }, h.prototype.getLastCell = function() {
      return this.cells[this.cells.length - 1]
    }, h.prototype.positionCells = function() {
      this._sizeCells(this.cells), this._positionCells(0)
    }, h.prototype._positionCells = function(t) {
      this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
      var e = 0;
      if (t > 0) {
        var i = this.cells[t - 1];
        e = i.x + i.size.outerWidth
      }
      for (var n, o = this.cells.length, r = t; o > r; r++) n = this.cells[r], n.setPosition(e), e += n.size.outerWidth, this.maxCellHeight = Math.max(n.size.outerHeight, this.maxCellHeight);
      this.slideableWidth = e, this._containCells()
    }, h.prototype._sizeCells = function(t) {
      for (var e = 0, i = t.length; i > e; e++) {
        var n = t[e];
        n.getSize()
      }
    }, h.prototype._init = h.prototype.reposition = function() {
      this.positionCells(), this.positionSliderAtSelected()
    }, h.prototype.getSize = function() {
      this.size = o(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var v = {
      center: {
        left: .5,
        right: .5
      },
      left: {
        left: 0,
        right: 1
      },
      right: {
        right: 0,
        left: 1
      }
    };
    h.prototype.setCellAlign = function() {
      var t = v[this.options.cellAlign];
      this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, h.prototype.setGallerySize = function() {
      this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px")
    }, h.prototype._getWrapShiftCells = function() {
      if (this.options.wrapAround) {
        this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
        var t = this.cursorPosition,
          e = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
      }
    }, h.prototype._getGapCells = function(t, e, i) {
      for (var n = []; t > 0;) {
        var o = this.cells[e];
        if (!o) break;
        n.push(o), e += i, t -= o.size.outerWidth
      }
      return n
    }, h.prototype._containCells = function() {
      if (this.options.contain && !this.options.wrapAround && this.cells.length)
        for (var t = this.options.rightToLeft ? "marginRight" : "marginLeft", e = this.options.rightToLeft ? "marginLeft" : "marginRight", i = this.cells[0].size[t], n = this.getLastCell(), o = this.slideableWidth - n.size[e], r = o - this.size.innerWidth * (1 - this.cellAlign), s = o < this.size.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
          var h = this.cells[a];
          h.setDefaultTarget(), s ? h.target = o * this.cellAlign : (h.target = Math.max(h.target, this.cursorPosition + i), h.target = Math.min(h.target, r))
        }
    }, h.prototype.dispatchEvent = function(t, e, i) {
      var n = [e].concat(i);
      if (this.emitEvent(t, n), c && this.$element)
        if (e) {
          var o = c.Event(e);
          o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, h.prototype.select = function(t, e) {
      if (this.isActive) {
        var i = this.cells.length;
        this.options.wrapAround && i > 1 && (0 > t ? this.x -= this.slideableWidth : t >= i && (this.x += this.slideableWidth)), (this.options.wrapAround || e) && (t = r.modulo(t, i)), this.cells[t] && (this.selectedIndex = t, this.setSelectedCell(), this.startAnimation(), this.dispatchEvent("cellSelect"))
      }
    }, h.prototype.previous = function(t) {
      this.select(this.selectedIndex - 1, t)
    }, h.prototype.next = function(t) {
      this.select(this.selectedIndex + 1, t)
    }, h.prototype.setSelectedCell = function() {
      this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, e.add(this.selectedElement, "is-selected")
    }, h.prototype._removeSelectedCellClass = function() {
      this.selectedCell && e.remove(this.selectedCell.element, "is-selected")
    }, h.prototype.getCell = function(t) {
      for (var e = 0, i = this.cells.length; i > e; e++) {
        var n = this.cells[e];
        if (n.element == t) return n
      }
    }, h.prototype.getCells = function(t) {
      t = r.makeArray(t);
      for (var e = [], i = 0, n = t.length; n > i; i++) {
        var o = t[i],
          s = this.getCell(o);
        s && e.push(s)
      }
      return e
    }, h.prototype.getCellElements = function() {
      for (var t = [], e = 0, i = this.cells.length; i > e; e++) t.push(this.cells[e].element);
      return t
    }, h.prototype.getParentCell = function(t) {
      var e = this.getCell(t);
      return e ? e : (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, h.prototype.uiChange = function() {
      this.emit("uiChange")
    }, h.prototype.childUIPointerDown = function(t) {
      this.emitEvent("childUIPointerDown", [t])
    }, h.prototype.onresize = function() {
      this.watchCSS(), this.resize()
    }, r.debounceMethod(h, "onresize", 150), h.prototype.resize = function() {
      this.isActive && (this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected())
    };
    var y = h.supportsConditionalCSS = function() {
      var t;
      return function() {
        if (void 0 !== t) return t;
        if (!d) return void(t = !1);
        var e = document.createElement("style"),
          i = document.createTextNode('body:after { content: "foo"; display: none; }');
        e.appendChild(i), document.head.appendChild(e);
        var n = d(document.body, ":after").content;
        return t = -1 != n.indexOf("foo"), document.head.removeChild(e), t
      }
    }();
    h.prototype.watchCSS = function() {
      var t = this.options.watchCSS;
      if (t) {
        var e = y();
        if (!e) {
          var i = "fallbackOn" == t ? "activate" : "deactivate";
          return void this[i]()
        }
        var n = d(this.element, ":after").content; - 1 != n.indexOf("flickity") ? this.activate() : this.deactivate()
      }
    }, h.prototype.onkeydown = function(t) {
      if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
        if (37 == t.keyCode) {
          var e = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[e]()
        } else if (39 == t.keyCode) {
        var i = this.options.rightToLeft ? "previous" : "next";
        this.uiChange(), this[i]()
      }
    }, h.prototype.deactivate = function() {
      if (this.isActive) {
        e.remove(this.element, "flickity-enabled"), e.remove(this.element, "flickity-rtl");
        for (var t = 0, i = this.cells.length; i > t; t++) {
          var o = this.cells[t];
          o.destroy()
        }
        this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), n.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
      }
    }, h.prototype.destroy = function() {
      this.deactivate(), this.isResizeBound && n.unbind(t, "resize", this), this.emit("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
    }, r.extend(h.prototype, a);
    var g = "attachEvent" in t;
    return h.setUnselectable = function(t) {
      g && t.setAttribute("unselectable", "on")
    }, h.data = function(t) {
      t = r.getQueryElement(t);
      var e = t && t.flickityGUID;
      return e && f[e]
    }, r.htmlInit(h, "flickity"), c && c.bridget && c.bridget("flickity", h), h.Cell = s, h
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.Unipointer = e(t, t.EventEmitter, t.eventie)
  }(window, function(t, e, i) {
    function n() {}

    function o() {}
    o.prototype = new e, o.prototype.bindStartEvent = function(t) {
      this._bindStartEvent(t, !0)
    }, o.prototype.unbindStartEvent = function(t) {
      this._bindStartEvent(t, !1)
    }, o.prototype._bindStartEvent = function(e, n) {
      n = void 0 === n ? !0 : !!n;
      var o = n ? "bind" : "unbind";
      t.navigator.pointerEnabled ? i[o](e, "pointerdown", this) : t.navigator.msPointerEnabled ? i[o](e, "MSPointerDown", this) : (i[o](e, "mousedown", this), i[o](e, "touchstart", this))
    }, o.prototype.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, o.prototype.getTouch = function(t) {
      for (var e = 0, i = t.length; i > e; e++) {
        var n = t[e];
        if (n.identifier == this.pointerIdentifier) return n
      }
    }, o.prototype.onmousedown = function(t) {
      var e = t.button;
      e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, o.prototype.ontouchstart = function(t) {
      this._pointerDown(t, t.changedTouches[0])
    }, o.prototype.onMSPointerDown = o.prototype.onpointerdown = function(t) {
      this._pointerDown(t, t)
    }, o.prototype._pointerDown = function(t, e) {
      this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, o.prototype.pointerDown = function(t, e) {
      this._bindPostStartEvents(t), this.emitEvent("pointerDown", [this, t, e])
    };
    var r = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
      MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
    };
    return o.prototype._bindPostStartEvents = function(e) {
      if (e) {
        for (var n = r[e.type], o = e.preventDefault ? t : document, s = 0, a = n.length; a > s; s++) {
          var l = n[s];
          i.bind(o, l, this)
        }
        this._boundPointerEvents = {
          events: n,
          node: o
        }
      }
    }, o.prototype._unbindPostStartEvents = function() {
      var t = this._boundPointerEvents;
      if (t && t.events) {
        for (var e = 0, n = t.events.length; n > e; e++) {
          var o = t.events[e];
          i.unbind(t.node, o, this)
        }
        delete this._boundPointerEvents
      }
    }, o.prototype.onmousemove = function(t) {
      this._pointerMove(t, t)
    }, o.prototype.onMSPointerMove = o.prototype.onpointermove = function(t) {
      t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, o.prototype.ontouchmove = function(t) {
      var e = this.getTouch(t.changedTouches);
      e && this._pointerMove(t, e)
    }, o.prototype._pointerMove = function(t, e) {
      this.pointerMove(t, e)
    }, o.prototype.pointerMove = function(t, e) {
      this.emitEvent("pointerMove", [this, t, e])
    }, o.prototype.onmouseup = function(t) {
      this._pointerUp(t, t)
    }, o.prototype.onMSPointerUp = o.prototype.onpointerup = function(t) {
      t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, o.prototype.ontouchend = function(t) {
      var e = this.getTouch(t.changedTouches);
      e && this._pointerUp(t, e)
    }, o.prototype._pointerUp = function(t, e) {
      this._pointerDone(), this.pointerUp(t, e)
    }, o.prototype.pointerUp = function(t, e) {
      this.emitEvent("pointerUp", [this, t, e])
    }, o.prototype._pointerDone = function() {
      this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
    }, o.prototype.pointerDone = n, o.prototype.onMSPointerCancel = o.prototype.onpointercancel = function(t) {
      t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, o.prototype.ontouchcancel = function(t) {
      var e = this.getTouch(t.changedTouches);
      e && this._pointerCancel(t, e)
    }, o.prototype._pointerCancel = function(t, e) {
      this._pointerDone(), this.pointerCancel(t, e)
    }, o.prototype.pointerCancel = function(t, e) {
      this.emitEvent("pointerCancel", [this, t, e])
    }, o.getPointerPoint = function(t) {
      return {
        x: void 0 !== t.pageX ? t.pageX : t.clientX,
        y: void 0 !== t.pageY ? t.pageY : t.clientY
      }
    }, o
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("unipointer")) : t.Unidragger = e(t, t.eventie, t.Unipointer)
  }(window, function(t, e, i) {
    function n() {}

    function o(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function r(t) {
      for (; t != document.body;)
        if (t = t.parentNode, "A" == t.nodeName) return t
    }

    function s() {}

    function a() {
      return !1
    }
    s.prototype = new i, s.prototype.bindHandles = function() {
      this._bindHandles(!0)
    }, s.prototype.unbindHandles = function() {
      this._bindHandles(!1)
    };
    var l = t.navigator;
    s.prototype._bindHandles = function(t) {
      t = void 0 === t ? !0 : !!t;
      var i;
      i = l.pointerEnabled ? function(e) {
        e.style.touchAction = t ? "none" : ""
      } : l.msPointerEnabled ? function(e) {
        e.style.msTouchAction = t ? "none" : ""
      } : function() {
        t && c(s)
      };
      for (var n = t ? "bind" : "unbind", o = 0, r = this.handles.length; r > o; o++) {
        var s = this.handles[o];
        this._bindStartEvent(s, t), i(s), e[n](s, "click", this)
      }
    };
    var h = "attachEvent" in document.documentElement,
      c = h ? function(t) {
        "IMG" == t.nodeName && (t.ondragstart = a);
        for (var e = t.querySelectorAll("img"), i = 0, n = e.length; n > i; i++) {
          var o = e[i];
          o.ondragstart = a
        }
      } : n,
      d = s.allowTouchstartNodes = {
        INPUT: !0,
        A: !0,
        BUTTON: !0,
        SELECT: !0
      };
    return s.prototype.pointerDown = function(t, e) {
      this._dragPointerDown(t, e);
      var i = document.activeElement;
      i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [this, t, e])
    }, s.prototype._dragPointerDown = function(t, e) {
      this.pointerDownPoint = i.getPointerPoint(e);
      var n = t.target.nodeName,
        s = "touchstart" == t.type && (d[n] || r(t.target));
      s || "SELECT" == n || o(t)
    }, s.prototype.pointerMove = function(t, e) {
      var i = this._dragPointerMove(t, e);
      this.emitEvent("pointerMove", [this, t, e, i]), this._dragMove(t, e, i)
    }, s.prototype._dragPointerMove = function(t, e) {
      var n = i.getPointerPoint(e),
        o = {
          x: n.x - this.pointerDownPoint.x,
          y: n.y - this.pointerDownPoint.y
        };
      return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, e), o
    }, s.prototype.hasDragStarted = function(t) {
      return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }, s.prototype.pointerUp = function(t, e) {
      this.emitEvent("pointerUp", [this, t, e]), this._dragPointerUp(t, e)
    }, s.prototype._dragPointerUp = function(t, e) {
      this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, s.prototype._dragStart = function(t, e) {
      this.isDragging = !0, this.dragStartPoint = s.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
    }, s.prototype.dragStart = function(t, e) {
      this.emitEvent("dragStart", [this, t, e])
    }, s.prototype._dragMove = function(t, e, i) {
      this.isDragging && this.dragMove(t, e, i)
    }, s.prototype.dragMove = function(t, e, i) {
      this.emitEvent("dragMove", [this, t, e, i])
    }, s.prototype._dragEnd = function(t, e) {
      this.isDragging = !1;
      var i = this;
      setTimeout(function() {
        delete i.isPreventingClicks
      }), this.dragEnd(t, e)
    }, s.prototype.dragEnd = function(t, e) {
      this.emitEvent("dragEnd", [this, t, e])
    }, s.prototype.onclick = function(t) {
      this.isPreventingClicks && o(t)
    }, s.prototype._staticClick = function(t, e) {
      "INPUT" == t.target.nodeName && "text" == t.target.type && t.target.focus(), this.staticClick(t, e)
    }, s.prototype.staticClick = function(t, e) {
      this.emitEvent("staticClick", [this, t, e])
    }, s.getPointerPoint = function(t) {
      return {
        x: void 0 !== t.pageX ? t.pageX : t.clientX,
        y: void 0 !== t.pageY ? t.pageY : t.clientY
      }
    }, s.getPointerPoint = i.getPointerPoint, s
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, o, r, s) {
      return e(t, i, n, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.dragPrototype = e(t, t.classie, t.eventie, t.Flickity, t.Unidragger, t.fizzyUIUtils))
  }(window, function(t, e, i, n, o, r) {
    function s(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function a(e) {
      var i = o.getPointerPoint(e);
      return i.y - t.pageYOffset
    }
    r.extend(n.defaults, {
      draggable: !0,
      touchVerticalScroll: !0
    }), n.createMethods.push("_createDrag");
    var l = {};
    r.extend(l, o.prototype), l._createDrag = function() {
      this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag)
    }, l.bindDrag = function() {
      this.options.draggable && !this.isDragBound && (e.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
    }, l.unbindDrag = function() {
      this.isDragBound && (e.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound)
    }, l.hasDragStarted = function(t) {
      return Math.abs(t.x) > 3
    }, l._uiChangeDrag = function() {
      delete this.isFreeScrolling
    }, l._childUIPointerDownDrag = function(t) {
      s(t), this.pointerDownFocus(t)
    }, l.pointerDown = function(t, i) {
      this._dragPointerDown(t, i);
      var n = document.activeElement;
      n && n.blur && n != this.element && n.blur(), this.pointerDownFocus(t), this.velocity = 0, e.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [i])
    };
    var h = {
        touchstart: !0,
        MSPointerDown: !0
      },
      c = {
        INPUT: !0,
        SELECT: !0
      };
    l.pointerDownFocus = function(t) {
      !this.options.accessibility || h[t.type] || c[t.target.nodeName] || this.element.focus()
    }, l.pointerMove = function(t, e) {
      var i = this._dragPointerMove(t, e);
      this.touchVerticalScrollMove(t, e, i), this._dragMove(t, e, i), this.dispatchEvent("pointerMove", t, [e, i])
    }, l.pointerUp = function(t, i) {
      delete this.isTouchScrolling, e.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
    };
    var d = {
      touchmove: !0,
      MSPointerMove: !0
    };
    return l.touchVerticalScrollMove = function(e, i, n) {
      if (this.options.touchVerticalScroll && d[e.type] && (!this.isTouchScrolling && Math.abs(n.y) > 16 && (this.startScrollY = t.pageYOffset, this.pointerWindowStartY = a(i), this.isTouchScrolling = !0), this.isTouchScrolling)) {
        var o = this.pointerWindowStartY - a(i),
          r = this.startScrollY + o;
        t.scroll(t.pageXOffset, r)
      }
    }, l.dragStart = function(t, e) {
      this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e])
    }, l.dragMove = function(t, e, i) {
      this.previousDragX = this.x;
      var n = i.x,
        o = this.options.rightToLeft ? -1 : 1;
      if (this.x = this.dragStartPosition + n * o, !this.options.wrapAround && this.cells.length) {
        var r = Math.max(-this.cells[0].target, this.dragStartPosition);
        this.x = this.x > r ? .5 * (this.x - r) + r : this.x;
        var s = Math.min(-this.getLastCell().target, this.dragStartPosition);
        this.x = this.x < s ? .5 * (this.x - s) + s : this.x
      }
      this.previousDragMoveTime = this.dragMoveTime, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
    }, l.dragEnd = function(t, e) {
      this.dragEndFlick(), this.options.freeScroll && (this.isFreeScrolling = !0);
      var i = this.dragEndRestingSelect();
      if (this.options.freeScroll && !this.options.wrapAround) {
        var n = this.getRestingPosition();
        this.isFreeScrolling = -n > this.cells[0].target && -n < this.getLastCell().target
      } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
      this.select(i), this.dispatchEvent("dragEnd", t, [e])
    }, l.dragEndFlick = function() {
      if (isFinite(this.previousDragX)) {
        var t = this.dragMoveTime - this.previousDragMoveTime;
        if (t) {
          t /= 1e3 / 60;
          var e = this.x - this.previousDragX;
          this.velocity = e / t
        }
        delete this.previousDragX
      }
    }, l.dragEndRestingSelect = function() {
      var t = this.getRestingPosition(),
        e = Math.abs(this.getCellDistance(-t, this.selectedIndex)),
        i = this._getClosestResting(t, e, 1),
        n = this._getClosestResting(t, e, -1),
        o = i.distance < n.distance ? i.index : n.index;
      return this.options.contain && !this.options.wrapAround && (o = Math.abs(o - this.selectedIndex) <= 1 ? this.selectedIndex : o), o
    }, l._getClosestResting = function(t, e, i) {
      for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(t, e) {
          return e >= t
        } : function(t, e) {
          return e > t
        }; r(e, o) && (n += i, o = e, e = this.getCellDistance(-t, n), null !== e);) e = Math.abs(e);
      return {
        distance: o,
        index: n - i
      }
    }, l.getCellDistance = function(t, e) {
      var i = this.cells.length,
        n = this.options.wrapAround && i > 1,
        o = n ? r.modulo(e, i) : e,
        s = this.cells[o];
      if (!s) return null;
      var a = n ? this.slideableWidth * Math.floor(e / i) : 0;
      return t - (s.target + a)
    }, l.dragEndBoostSelect = function() {
      var t = this.getCellDistance(-this.x, this.selectedIndex);
      return t > 0 && this.velocity < -1 ? 1 : 0 > t && this.velocity > 1 ? -1 : 0
    }, l.staticClick = function(t, e) {
      var i = this.getParentCell(t.target),
        n = i && i.element,
        o = i && r.indexOf(this.cells, i);
      this.dispatchEvent("staticClick", t, [e, n, o])
    }, r.extend(n.prototype, l), n
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
      return e(t, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
  }(window, function(t, e) {
    function i(t) {
      this.bindTap(t)
    }
    i.prototype = new e, i.prototype.bindTap = function(t) {
      t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
    }, i.prototype.unbindTap = function() {
      this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
    };
    var n = void 0 !== t.pageYOffset;
    return i.prototype.pointerUp = function(i, o) {
      var r = e.getPointerPoint(o),
        s = this.tapElement.getBoundingClientRect(),
        a = n ? t.pageXOffset : document.body.scrollLeft,
        l = n ? t.pageYOffset : document.body.scrollTop,
        h = r.x >= s.left + a && r.x <= s.right + a && r.y >= s.top + l && r.y <= s.bottom + l;
      h && this.emitEvent("tap", [this, i, o])
    }, i.prototype.destroy = function() {
      this.pointerDone(), this.unbindTap()
    }, i
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o, r) {
      return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.PrevNextButton = e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils))
  }(window, function(t, e, i, n, o) {
    function r(t, e) {
      this.direction = t, this.parent = e, this._create()
    }
    var s = "http://www.w3.org/2000/svg",
      a = function() {
        function t() {
          if (void 0 !== e) return e;
          var t = document.createElement("div");
          return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == s
        }
        var e;
        return t
      }();
    return r.prototype = new n, r.prototype._create = function() {
      this.isEnabled = !0, this.isPrevious = -1 == this.direction;
      var t = this.parent.options.rightToLeft ? 1 : -1;
      this.isLeft = this.direction == t;
      var e = this.element = document.createElement("button");
      if (e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), i.setUnselectable(e), a()) {
        var n = this.createSVG();
        e.appendChild(n)
      } else this.setArrowText(), e.className += " no-svg";
      var o = this;
      this.onCellSelect = function() {
        o.update()
      }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(t, e) {
        o.parent.childUIPointerDown(e)
      })
    }, r.prototype.activate = function() {
      this.update(), this.bindTap(this.element), e.bind(this.element, "click", this), this.parent.element.appendChild(this.element)
    }, r.prototype.deactivate = function() {
      this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), e.unbind(this.element, "click", this)
    }, r.prototype.createSVG = function() {
      var t = document.createElementNS(s, "svg");
      t.setAttribute("viewBox", "0 0 100 100");
      var e = document.createElementNS(s, "path");
      e.setAttribute("d", "M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"), e.setAttribute("class", "arrow");
      var i = this.isLeft ? "translate(15,0)" : "translate(85,100) rotate(180)";
      return e.setAttribute("transform", i), t.appendChild(e), t
    }, r.prototype.setArrowText = function() {
      var t = this.parent.options,
        e = this.isLeft ? t.leftArrowText : t.rightArrowText;
      o.setText(this.element, e)
    }, r.prototype.onTap = function() {
      if (this.isEnabled) {
        this.parent.uiChange();
        var t = this.isPrevious ? "previous" : "next";
        this.parent[t]()
      }
    }, r.prototype.handleEvent = o.handleEvent, r.prototype.onclick = function() {
      var t = document.activeElement;
      t && t == this.element && this.onTap()
    }, r.prototype.enable = function() {
      this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, r.prototype.disable = function() {
      this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, r.prototype.update = function() {
      var t = this.parent.cells;
      if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
      var e = t.length ? t.length - 1 : 0,
        i = this.isPrevious ? 0 : e,
        n = this.parent.selectedIndex == i ? "disable" : "enable";
      this[n]()
    }, r.prototype.destroy = function() {
      this.deactivate()
    }, o.extend(i.defaults, {
      prevNextButtons: !0,
      leftArrowText: "â€¹",
      rightArrowText: "â€º"
    }), i.createMethods.push("_createPrevNextButtons"), i.prototype._createPrevNextButtons = function() {
      this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
    }, i.prototype.activatePrevNextButtons = function() {
      this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, i.prototype.deactivatePrevNextButtons = function() {
      this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, i.PrevNextButton = r, r
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o, r) {
      return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.PageDots = e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils))
  }(window, function(t, e, i, n, o) {
    function r(t) {
      this.parent = t, this._create()
    }
    return r.prototype = new n, r.prototype._create = function() {
      this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", i.setUnselectable(this.holder), this.dots = [];
      var t = this;
      this.onCellSelect = function() {
        t.updateSelected()
      }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(e, i) {
        t.parent.childUIPointerDown(i)
      })
    }, r.prototype.activate = function() {
      this.setDots(), this.updateSelected(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
    }, r.prototype.deactivate = function() {
      this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
    }, r.prototype.setDots = function() {
      var t = this.parent.cells.length - this.dots.length;
      t > 0 ? this.addDots(t) : 0 > t && this.removeDots(-t)
    }, r.prototype.addDots = function(t) {
      for (var e = document.createDocumentFragment(), i = []; t;) {
        var n = document.createElement("li");
        n.className = "dot", e.appendChild(n), i.push(n), t--
      }
      this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, r.prototype.removeDots = function(t) {
      for (var e = this.dots.splice(this.dots.length - t, t), i = 0, n = e.length; n > i; i++) {
        var o = e[i];
        this.holder.removeChild(o)
      }
    }, r.prototype.updateSelected = function() {
      this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
    }, r.prototype.onTap = function(t, e) {
      var i = e.target;
      if ("LI" == i.nodeName) {
        this.parent.uiChange();
        var n = o.indexOf(this.dots, i);
        this.parent.select(n)
      }
    }, r.prototype.destroy = function() {
      this.deactivate()
    }, i.PageDots = r, o.extend(i.defaults, {
      pageDots: !0
    }), i.createMethods.push("_createPageDots"), i.prototype._createPageDots = function() {
      this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots))
    }, i.prototype.activatePageDots = function() {
      this.pageDots.activate()
    }, i.prototype.onCellAddedRemovedPageDots = function() {
      this.pageDots.setDots()
    }, i.prototype.deactivatePageDots = function() {
      this.pageDots.deactivate()
    }, i.PageDots = r, r
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "./flickity"], function(t, i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("eventie"), require("./flickity")) : (t.Flickity = t.Flickity || {}, t.Flickity.Player = e(t.EventEmitter, t.eventie, t.Flickity))
  }(window, function(t, e, i) {
    function n(t) {
      if (this.isPlaying = !1, this.parent = t, r) {
        var e = this;
        this.onVisibilityChange = function() {
          e.visibilityChange()
        }
      }
    }
    var o, r;
    return "hidden" in document ? (o = "hidden", r = "visibilitychange") : "webkitHidden" in document && (o = "webkitHidden", r = "webkitvisibilitychange"), n.prototype = new t, n.prototype.play = function() {
      this.isPlaying = !0, delete this.isPaused, r && document.addEventListener(r, this.onVisibilityChange, !1), this.tick()
    }, n.prototype.tick = function() {
      if (this.isPlaying && !this.isPaused) {
        this.tickTime = new Date;
        var t = this.parent.options.autoPlay;
        t = "number" == typeof t ? t : 3e3;
        var e = this;
        this.timeout = setTimeout(function() {
          e.parent.next(!0), e.tick()
        }, t)
      }
    }, n.prototype.stop = function() {
      this.isPlaying = !1, delete this.isPaused, this.clear(), r && document.removeEventListener(r, this.onVisibilityChange, !1)
    }, n.prototype.clear = function() {
      clearTimeout(this.timeout)
    }, n.prototype.pause = function() {
      this.isPlaying && (this.isPaused = !0, this.clear())
    }, n.prototype.unpause = function() {
      this.isPaused && this.play()
    }, n.prototype.visibilityChange = function() {
      var t = document[o];
      this[t ? "pause" : "unpause"]()
    }, i.createMethods.push("_createPlayer"), i.prototype._createPlayer = function() {
      this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, i.prototype.activatePlayer = function() {
      this.options.autoPlay && (this.player.play(), e.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0)
    }, i.prototype.stopPlayer = function() {
      this.player.stop()
    }, i.prototype.deactivatePlayer = function() {
      this.player.stop(), this.isMouseenterBound && (e.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound)
    }, i.prototype.onmouseenter = function() {
      this.player.pause(), e.bind(this.element, "mouseleave", this)
    }, i.prototype.onmouseleave = function() {
      this.player.unpause(), e.unbind(this.element, "mouseleave", this)
    }, i.Player = n, n
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity = e(t, t.Flickity, t.fizzyUIUtils))
  }(window, function(t, e, i) {
    function n(t) {
      for (var e = document.createDocumentFragment(), i = 0, n = t.length; n > i; i++) {
        var o = t[i];
        e.appendChild(o.element)
      }
      return e
    }
    return e.prototype.insert = function(t, e) {
      var i = this._makeCells(t);
      if (i && i.length) {
        var o = this.cells.length;
        e = void 0 === e ? o : e;
        var r = n(i),
          s = e == o;
        if (s) this.slider.appendChild(r);
        else {
          var a = this.cells[e].element;
          this.slider.insertBefore(r, a)
        }
        if (0 === e) this.cells = i.concat(this.cells);
        else if (s) this.cells = this.cells.concat(i);
        else {
          var l = this.cells.splice(e, o - e);
          this.cells = this.cells.concat(i).concat(l)
        }
        this._sizeCells(i);
        var h = e > this.selectedIndex ? 0 : i.length;
        this._cellAddedRemoved(e, h)
      }
    }, e.prototype.append = function(t) {
      this.insert(t, this.cells.length)
    }, e.prototype.prepend = function(t) {
      this.insert(t, 0)
    }, e.prototype.remove = function(t) {
      var e, n, o, r = this.getCells(t),
        s = 0;
      for (e = 0, n = r.length; n > e; e++) {
        o = r[e];
        var a = i.indexOf(this.cells, o) < this.selectedIndex;
        s -= a ? 1 : 0
      }
      for (e = 0, n = r.length; n > e; e++) o = r[e], o.remove(), i.removeFrom(this.cells, o);
      r.length && this._cellAddedRemoved(0, s)
    }, e.prototype._cellAddedRemoved = function(t, e) {
      e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [t, e]), this.cellChange(t)
    }, e.prototype.cellSizeChange = function(t) {
      var e = this.getCell(t);
      if (e) {
        e.getSize();
        var n = i.indexOf(this.cells, e);
        this.cellChange(n)
      }
    }, e.prototype.cellChange = function(t) {
      t = t || 0, this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll ? this.positionSlider() : (this.positionSliderAtSelected(), this.select(this.selectedIndex))
    }, e
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell"], e) : "object" == typeof exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell")))
  }(window, function(t) {
    return t
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function(i, n, o) {
      return e(t, i, n, o)
    }) : "object" == typeof exports ? module.exports = e(t, require("dessandro-classie"), require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.Flickity, t.fizzyUIUtils)
  }(window, function(t, e, i, n) {
    return i.createMethods.push("_createAsNavFor"), i.prototype._createAsNavFor = function() {
      this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
      var t = this.options.asNavFor;
      if (t) {
        var e = this;
        setTimeout(function() {
          e.setNavCompanion(t)
        })
      }
    }, i.prototype.setNavCompanion = function(t) {
      t = n.getQueryElement(t);
      var e = i.data(t);
      if (e && e != this) {
        this.navCompanion = e;
        var o = this;
        this.onNavCompanionSelect = function() {
          o.navCompanionSelect()
        }, e.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
      }
    }, i.prototype.navCompanionSelect = function() {
      if (this.navCompanion) {
        var t = this.navCompanion.selectedIndex;
        this.select(t), this.removeNavSelectedElement(), this.selectedIndex == t && (this.navSelectedElement = this.cells[t].element, e.add(this.navSelectedElement, "is-nav-selected"))
      }
    }, i.prototype.activateAsNavFor = function() {
      this.navCompanionSelect()
    }, i.prototype.removeNavSelectedElement = function() {
      this.navSelectedElement && (e.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement)
    }, i.prototype.onNavStaticClick = function(t, e, i, n) {
      "number" == typeof n && this.navCompanion.select(n)
    }, i.prototype.deactivateAsNavFor = function() {
      this.removeNavSelectedElement()
    }, i.prototype.destroyAsNavFor = function() {
      this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, i
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
  }(window, function(t, e, i) {
    function n(t, e) {
      for (var i in e) t[i] = e[i];
      return t
    }

    function o(t) {
      return "[object Array]" === p.call(t)
    }

    function r(t) {
      var e = [];
      if (o(t)) e = t;
      else if ("number" == typeof t.length)
        for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
      else e.push(t);
      return e
    }

    function s(t, e, i) {
      if (!(this instanceof s)) return new s(t, e);
      "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
      var o = this;
      setTimeout(function() {
        o.check()
      })
    }

    function a(t) {
      this.img = t
    }

    function l(t) {
      this.src = t, u[t] = this
    }
    var h = t.jQuery,
      c = t.console,
      d = "undefined" != typeof c,
      p = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
      this.images = [];
      for (var t = 0, e = this.elements.length; e > t; t++) {
        var i = this.elements[t];
        "IMG" === i.nodeName && this.addImage(i);
        var n = i.nodeType;
        if (n && (1 === n || 9 === n || 11 === n))
          for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
            var a = o[r];
            this.addImage(a)
          }
      }
    }, s.prototype.addImage = function(t) {
      var e = new a(t);
      this.images.push(e)
    }, s.prototype.check = function() {
      function t(t, o) {
        return e.options.debug && d && c.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
      }
      var e = this,
        i = 0,
        n = this.images.length;
      if (this.hasAnyBroken = !1, !n) return void this.complete();
      for (var o = 0; n > o; o++) {
        var r = this.images[o];
        r.on("confirm", t), r.check()
      }
    }, s.prototype.progress = function(t) {
      this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
      var e = this;
      setTimeout(function() {
        e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
      })
    }, s.prototype.complete = function() {
      var t = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0;
      var e = this;
      setTimeout(function() {
        if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
          var i = e.hasAnyBroken ? "reject" : "resolve";
          e.jqDeferred[i](e)
        }
      })
    }, h && (h.fn.imagesLoaded = function(t, e) {
      var i = new s(this, t, e);
      return i.jqDeferred.promise(h(this))
    }), a.prototype = new e, a.prototype.check = function() {
      var t = u[this.img.src] || new l(this.img.src);
      if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
      if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
      var e = this;
      t.on("confirm", function(t, i) {
        return e.confirm(t.isLoaded, i), !0
      }), t.check()
    }, a.prototype.confirm = function(t, e) {
      this.isLoaded = t, this.emit("confirm", this, e)
    };
    var u = {};
    return l.prototype = new e, l.prototype.check = function() {
      if (!this.isChecked) {
        var t = new Image;
        i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
      }
    }, l.prototype.handleEvent = function(t) {
      var e = "on" + t.type;
      this[e] && this[e](t)
    }, l.prototype.onload = function(t) {
      this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, l.prototype.onerror = function(t) {
      this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, l.prototype.confirm = function(t, e) {
      this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
    }, l.prototype.unbindProxyEvents = function(t) {
      i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
    }, s
  }),
  function(t, e) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
      return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
  }(window, function(t, e, i) {
    return e.createMethods.push("_createImagesLoaded"), e.prototype._createImagesLoaded = function() {
      this.on("activate", this.imagesLoaded)
    }, e.prototype.imagesLoaded = function() {
      function t(t, i) {
        var n = e.getParentCell(i.img);
        e.cellSizeChange(n && n.element)
      }
      if (this.options.imagesLoaded) {
        var e = this;
        i(this.slider).on("progress", t)
      }
    }, e
  });


/*!
 * Slick v1.5.5
 * Author: Ken Wheeler
 *
 * Open source use
 * Commercial License for commercial use
 *
 */

! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
  "use strict";
  var b = window.Slick || {};
  b = function() {
    function c(c, d) {
      var f, g, h, e = this;
      if (e.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(c),
          appendDots: a(c),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(a, b) {
            return '<button type="button" data-role="none">' + (b + 1) + "</button>"
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0
        }, e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, g = e.options.responsive || null, g && g.length > -1) {
        e.respondTo = e.options.respondTo || "window";
        for (h in g) g.hasOwnProperty(h) && (e.breakpoints.push(g[h].breakpoint), e.breakpointSettings[g[h].breakpoint] = g[h].settings);
        e.breakpoints.sort(function(a, b) {
          return e.options.mobileFirst === !0 ? a - b : b - a
        })
      }
      "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init(!0), e.checkResponsive(!0)
    }
    var b = 0;
    return c
  }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;
    else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function() {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed)
    }
  }, b.prototype.animateSlide = function(b, c) {
    var d = {},
      e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function() {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.asNavFor = function(b) {
    var c = this,
      d = c.options.asNavFor;
    d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function(a) {
    var b = this,
      c = {};
    c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function() {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function() {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function() {
    var a = this;
    a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
  }, b.prototype.buildArrows = function() {
    var b = this;
    b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
  }, b.prototype.buildDots = function() {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
      d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function() {
    var b = this;
    b.$slides = b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function() {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.html(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function(b) {
    var d, e, f, c = this,
      g = !1,
      h = c.$slider.width(),
      i = window.innerWidth || a(window).width();
    if ("window" === c.respondTo ? f = i : "slider" === c.respondTo ? f = h : "min" === c.respondTo && (f = Math.min(i, h)), c.originalSettings.responsive && c.originalSettings.responsive.length > -1 && null !== c.originalSettings.responsive) {
      e = null;
      for (d in c.breakpoints) c.breakpoints.hasOwnProperty(d) && (c.originalSettings.mobileFirst === !1 ? f < c.breakpoints[d] && (e = c.breakpoints[d]) : f > c.breakpoints[d] && (e = c.breakpoints[d]));
      null !== e ? null !== c.activeBreakpoint ? e !== c.activeBreakpoint && (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick(e) : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(b)), g = e) : (c.activeBreakpoint = e, "unslick" === c.breakpointSettings[e] ? c.unslick(e) : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(b)), g = e) : null !== c.activeBreakpoint && (c.activeBreakpoint = null, c.options = c.originalSettings, b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh(b), g = e), b || g === !1 || c.$slider.trigger("breakpoint", [c, g])
    }
  }, b.prototype.changeSlide = function(b, c) {
    var f, g, h, d = this,
      e = a(b.target);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function(a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
    else
      for (var e in c) {
        if (a < c[e]) {
          a = d;
          break
        }
        d = c[e]
      }
    return a
  }, b.prototype.cleanUpEvents = function() {
    var b = this;
    b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpRows = function() {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
  }, b.prototype.clickHandler = function(a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function(b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && "object" != typeof c.options.prevArrow && c.$prevArrow.remove(), c.$nextArrow && "object" != typeof c.options.nextArrow && c.$nextArrow.remove(), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function(a) {
    var b = this,
      c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function(a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: 1e3
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: 1e3
    }), b && setTimeout(function() {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
    var b = this;
    null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function() {
    var a = this,
      b = 0,
      c = 0,
      d = 0;
    if (a.options.infinite === !0)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else if (a.options.centerMode === !0) d = a.slideCount;
    else
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d - 1
  }, b.prototype.getLeft = function(a) {
    var c, d, f, b = this,
      e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function() {
    var e, a = this,
      b = 0,
      c = 0,
      d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function() {
    return this
  }, b.prototype.getSlideCount = function() {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b)
  }, b.prototype.init = function(b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c])
  }, b.prototype.initArrowEvents = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.on("click.slick", {
      message: "next"
    }, a.changeSlide))
  }, b.prototype.initDotEvents = function() {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
  }, b.prototype.initializeEvents = function() {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
  }, b.prototype.keyHandler = function(a) {
    var b = this;
    37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.lazyLoad = function() {
    function g(b) {
      a("img[data-lazy]", b).each(function() {
        var b = a(this),
          c = a(this).attr("data-lazy"),
          d = document.createElement("img");
        d.onload = function() {
          b.animate({
            opacity: 1
          }, 200)
        }, d.src = c, b.css({
          opacity: 0
        }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
      })
    }
    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function() {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function() {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.orientationChange = function() {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function() {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function() {
    var a = this;
    a.paused = !1, a.autoPlay()
  }, b.prototype.postSlide = function(a) {
    var b = this;
    b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
  }, b.prototype.prev = b.prototype.slickPrev = function() {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, b.prototype.preventDefault = function(a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function() {
    var c, d, b = this;
    c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
    }).error(function() {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad()
    }))
  }, b.prototype.refresh = function(b) {
    var c = this,
      d = c.currentSlide;
    c.destroy(!0), a.extend(c, c.initials), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.reinit = function() {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
  }, b.prototype.resize = function() {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
  }, b.prototype.setCSS = function(a) {
    var d, e, b = this,
      c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function() {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function() {
    var c, b = this;
    b.$slides.each(function(d, e) {
      c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: 800,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: 800,
        opacity: 0
      })
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: 900,
      opacity: 1
    })
  }, b.prototype.setHeight = function() {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function(a, b, c) {
    var d = this;
    d.options[a] = b, c === !0 && (d.unload(), d.reinit())
  }, b.prototype.setPosition = function() {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function() {
    var a = this,
      b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function(a) {
    var c, d, e, f, b = this;
    b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function() {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.setPaused = function(a) {
    var b = this;
    b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
  }, b.prototype.selectHandler = function(b) {
    var c = this,
      d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), c.$slides.eq(e).addClass("slick-active").attr("aria-hidden", "false"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(e).addClass("slick-center")), c.asNavFor(e), void 0) : (c.slideHandler(e), void 0)
  }, b.prototype.slideHandler = function(a, b, c) {
    var d, e, f, g, h = null,
      i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
      i.postSlide(d)
    }) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
      i.postSlide(d)
    }) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function() {
      i.postSlide(e)
    }) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function() {
      i.postSlide(e)
    }) : i.postSlide(e), void 0)))
  }, b.prototype.startLoad = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function() {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
  }, b.prototype.swipeEnd = function() {
    var c, b = this;
    if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
      case "left":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
        break;
      case "right":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function(a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;
      case "move":
        b.swipeMove(a);
        break;
      case "end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function(a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
  }, b.prototype.swipeStart = function(a) {
    var c, b = this;
    return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function() {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function(a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function() {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
  }, b.prototype.updateDots = function() {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function() {
    var a = this;
    document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
  }, a.fn.slick = function() {
    var g, a = this,
      c = arguments[0],
      d = Array.prototype.slice.call(arguments, 1),
      e = a.length,
      f = 0;
    for (f; e > f; f++)
      if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    return a
  }
});

/*!
 * RaphaÃ«l 2.1.2
 * JavaScript Vector Library
 *
 * Copyright Â© 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)
 * Copyright Â© 2008-2012 Sencha Labs (http://sencha.com)
 *
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 */

! function(a) {
  var b, c, d = "0.4.2",
    e = "hasOwnProperty",
    f = /[\.\/]/,
    g = "*",
    h = function() {},
    i = function(a, b) {
      return a - b
    },
    j = {
      n: {}
    },
    k = function(a, d) {
      a = String(a);
      var e, f = c,
        g = Array.prototype.slice.call(arguments, 2),
        h = k.listeners(a),
        j = 0,
        l = [],
        m = {},
        n = [],
        o = b;
      b = a, c = 0;
      for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
      for (l.sort(i); l[j] < 0;)
        if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
      for (p = 0; q > p; p++)
        if (e = h[p], "zIndex" in e)
          if (e.zIndex == l[j]) {
            if (n.push(e.apply(d, g)), c) break;
            do
              if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break; while (e)
          } else m[e.zIndex] = e;
      else if (n.push(e.apply(d, g)), c) break;
      return c = f, b = o, n.length ? n : null
    };
  k._events = j, k.listeners = function(a) {
    var b, c, d, e, h, i, k, l, m = a.split(f),
      n = j,
      o = [n],
      p = [];
    for (e = 0, h = m.length; h > e; e++) {
      for (l = [], i = 0, k = o.length; k > i; i++)
        for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
      o = l
    }
    return p
  }, k.on = function(a, b) {
    if (a = String(a), "function" != typeof b) return function() {};
    for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
      n: {}
    });
    for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
      if (d.f[e] == b) return h;
    return d.f.push(b),
      function(a) {
        +a == +a && (b.zIndex = +a)
      }
  }, k.f = function(a) {
    var b = [].slice.call(arguments, 1);
    return function() {
      k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
    }
  }, k.stop = function() {
    c = 1
  }, k.nt = function(a) {
    return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
  }, k.nts = function() {
    return b.split(f)
  }, k.off = k.unbind = function(a, b) {
    if (!a) return k._events = j = {
      n: {}
    }, void 0;
    var c, d, h, i, l, m, n, o = a.split(f),
      p = [j];
    for (i = 0, l = o.length; l > i; i++)
      for (m = 0; m < p.length; m += h.length - 2) {
        if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
        else
          for (d in c) c[e](d) && h.push(c[d]);
        p.splice.apply(p, h)
      }
    for (i = 0, l = p.length; l > i; i++)
      for (c = p[i]; c.n;) {
        if (b) {
          if (c.f) {
            for (m = 0, n = c.f.length; n > m; m++)
              if (c.f[m] == b) {
                c.f.splice(m, 1);
                break
              }! c.f.length && delete c.f
          }
          for (d in c.n)
            if (c.n[e](d) && c.n[d].f) {
              var q = c.n[d].f;
              for (m = 0, n = q.length; n > m; m++)
                if (q[m] == b) {
                  q.splice(m, 1);
                  break
                }! q.length && delete c.n[d].f
            }
        } else {
          delete c.f;
          for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f
        }
        c = c.n
      }
  }, k.once = function(a, b) {
    var c = function() {
      return k.unbind(a, c), b.apply(this, arguments)
    };
    return k.on(a, c)
  }, k.version = d, k.toString = function() {
    return "You are running Eve " + d
  }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
    return k
  }) : a.eve = k
}(this),
function(a, b) {
  "function" == typeof define && define.amd ? define(["eve"], function(c) {
    return b(a, c)
  }) : b(a, a.eve)
}(this, function(a, b) {
  function c(a) {
    if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a);
    if (c.is(a, V)) return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a);
    var d = Array.prototype.slice.call(arguments, 0);
    if (c.is(d[d.length - 1], "function")) {
      var e = d.pop();
      return u ? e.call(c._engine.create[D](c, d)) : b.on("raphael.DOMload", function() {
        e.call(c._engine.create[D](c, d))
      })
    }
    return c._engine.create[D](c, arguments)
  }

  function d(a) {
    if ("function" == typeof a || Object(a) !== a) return a;
    var b = new a.constructor;
    for (var c in a) a[z](c) && (b[c] = d(a[c]));
    return b
  }

  function e(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      if (a[c] === b) return a.push(a.splice(c, 1)[0])
  }

  function f(a, b, c) {
    function d() {
      var f = Array.prototype.slice.call(arguments, 0),
        g = f.join("â€"),
        h = d.cache = d.cache || {},
        i = d.count = d.count || [];
      return h[z](g) ? (e(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[D](b, f), c ? c(h[g]) : h[g])
    }
    return d
  }

  function g() {
    return this.hex
  }

  function h(a, b) {
    for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
      var f = [{
        x: +a[d - 2],
        y: +a[d - 1]
      }, {
        x: +a[d],
        y: +a[d + 1]
      }, {
        x: +a[d + 2],
        y: +a[d + 3]
      }, {
        x: +a[d + 4],
        y: +a[d + 5]
      }];
      b ? d ? e - 4 == d ? f[3] = {
        x: +a[0],
        y: +a[1]
      } : e - 2 == d && (f[2] = {
        x: +a[0],
        y: +a[1]
      }, f[3] = {
        x: +a[2],
        y: +a[3]
      }) : f[0] = {
        x: +a[e - 2],
        y: +a[e - 1]
      } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
        x: +a[d],
        y: +a[d + 1]
      }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
    }
    return c
  }

  function i(a, b, c, d, e) {
    var f = -3 * b + 9 * c - 9 * d + 3 * e,
      g = a * f + 6 * b - 12 * c + 6 * d;
    return a * g - 3 * b + 3 * c
  }

  function j(a, b, c, d, e, f, g, h, j) {
    null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
    for (var k = j / 2, l = 12, m = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; l > p; p++) {
      var q = k * m[p] + k,
        r = i(q, a, c, e, g),
        s = i(q, b, d, f, h),
        t = r * r + s * s;
      o += n[p] * N.sqrt(t)
    }
    return k * o
  }

  function k(a, b, c, d, e, f, g, h, i) {
    if (!(0 > i || j(a, b, c, d, e, f, g, h) < i)) {
      var k, l = 1,
        m = l / 2,
        n = l - m,
        o = .01;
      for (k = j(a, b, c, d, e, f, g, h, n); Q(k - i) > o;) m /= 2, n += (i > k ? 1 : -1) * m, k = j(a, b, c, d, e, f, g, h, n);
      return n
    }
  }

  function l(a, b, c, d, e, f, g, h) {
    if (!(O(a, c) < P(e, g) || P(a, c) > O(e, g) || O(b, d) < P(f, h) || P(b, d) > O(f, h))) {
      var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
        j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
        k = (a - c) * (f - h) - (b - d) * (e - g);
      if (k) {
        var l = i / k,
          m = j / k,
          n = +l.toFixed(2),
          o = +m.toFixed(2);
        if (!(n < +P(a, c).toFixed(2) || n > +O(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +O(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +O(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +O(f, h).toFixed(2))) return {
          x: l,
          y: m
        }
      }
    }
  }

  function m(a, b, d) {
    var e = c.bezierBBox(a),
      f = c.bezierBBox(b);
    if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
    for (var g = j.apply(0, a), h = j.apply(0, b), i = O(~~(g / 5), 1), k = O(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; i + 1 > q; q++) {
      var r = c.findDotsAtSegment.apply(c, a.concat(q / i));
      m.push({
        x: r.x,
        y: r.y,
        t: q / i
      })
    }
    for (q = 0; k + 1 > q; q++) r = c.findDotsAtSegment.apply(c, b.concat(q / k)), n.push({
      x: r.x,
      y: r.y,
      t: q / k
    });
    for (q = 0; i > q; q++)
      for (var s = 0; k > s; s++) {
        var t = m[q],
          u = m[q + 1],
          v = n[s],
          w = n[s + 1],
          x = Q(u.x - t.x) < .001 ? "y" : "x",
          y = Q(w.x - v.x) < .001 ? "y" : "x",
          z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
        if (z) {
          if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
          o[z.x.toFixed(4)] = z.y.toFixed(4);
          var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
            B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
          A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({
            x: z.x,
            y: z.y,
            t1: P(A, 1),
            t2: P(B, 1)
          }))
        }
      }
    return p
  }

  function n(a, b, d) {
    a = c._path2curve(a), b = c._path2curve(b);
    for (var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
      var s = a[q];
      if ("M" == s[0]) e = i = s[1], f = j = s[2];
      else {
        "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
        for (var t = 0, u = b.length; u > t; t++) {
          var v = b[t];
          if ("M" == v[0]) g = k = v[1], h = l = v[2];
          else {
            "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, l, k, l], g = k, h = l);
            var w = m(n, o, d);
            if (d) p += w;
            else {
              for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
              p = p.concat(w)
            }
          }
        }
      }
    }
    return p
  }

  function o(a, b, c, d, e, f) {
    null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
  }

  function p() {
    return this.x + H + this.y + H + this.width + " Ã— " + this.height
  }

  function q(a, b, c, d, e, f) {
    function g(a) {
      return ((l * a + k) * a + j) * a
    }

    function h(a, b) {
      var c = i(a, b);
      return ((o * c + n) * c + m) * c
    }

    function i(a, b) {
      var c, d, e, f, h, i;
      for (e = a, i = 0; 8 > i; i++) {
        if (f = g(e) - a, Q(f) < b) return e;
        if (h = (3 * l * e + 2 * k) * e + j, Q(h) < 1e-6) break;
        e -= f / h
      }
      if (c = 0, d = 1, e = a, c > e) return c;
      if (e > d) return d;
      for (; d > c;) {
        if (f = g(e), Q(f - a) < b) return e;
        a > f ? c = e : d = e, e = (d - c) / 2 + c
      }
      return e
    }
    var j = 3 * b,
      k = 3 * (d - b) - j,
      l = 1 - j - k,
      m = 3 * c,
      n = 3 * (e - c) - m,
      o = 1 - m - n;
    return h(a, 1 / (200 * f))
  }

  function r(a, b) {
    var c = [],
      d = {};
    if (this.ms = b, this.times = 1, a) {
      for (var e in a) a[z](e) && (d[_(e)] = a[e], c.push(_(e)));
      c.sort(lb)
    }
    this.anim = d, this.top = c[c.length - 1], this.percents = c
  }

  function s(a, d, e, f, g, h) {
    e = _(e);
    var i, j, k, l, m, n, p = a.ms,
      r = {},
      s = {},
      t = {};
    if (f)
      for (v = 0, x = ic.length; x > v; v++) {
        var u = ic[v];
        if (u.el.id == d.id && u.anim == a) {
          u.percent != e ? (ic.splice(v, 1), k = 1) : j = u, d.attr(u.totalOrigin);
          break
        }
      } else f = +s;
    for (var v = 0, x = a.percents.length; x > v; v++) {
      if (a.percents[v] == e || a.percents[v] > f * a.top) {
        e = a.percents[v], m = a.percents[v - 1] || 0, p = p / a.top * (e - m), l = a.percents[v + 1], i = a.anim[e];
        break
      }
      f && d.attr(a.anim[a.percents[v]])
    }
    if (i) {
      if (j) j.initstatus = f, j.start = new Date - j.ms * f;
      else {
        for (var y in i)
          if (i[z](y) && (db[z](y) || d.paper.customAttributes[z](y))) switch (r[y] = d.attr(y), null == r[y] && (r[y] = cb[y]), s[y] = i[y], db[y]) {
            case T:
              t[y] = (s[y] - r[y]) / p;
              break;
            case "colour":
              r[y] = c.getRGB(r[y]);
              var A = c.getRGB(s[y]);
              t[y] = {
                r: (A.r - r[y].r) / p,
                g: (A.g - r[y].g) / p,
                b: (A.b - r[y].b) / p
              };
              break;
            case "path":
              var B = Kb(r[y], s[y]),
                C = B[1];
              for (r[y] = B[0], t[y] = [], v = 0, x = r[y].length; x > v; v++) {
                t[y][v] = [0];
                for (var D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (C[v][D] - r[y][v][D]) / p
              }
              break;
            case "transform":
              var G = d._,
                H = Pb(G[y], s[y]);
              if (H)
                for (r[y] = H.from, s[y] = H.to, t[y] = [], t[y].real = !0, v = 0, x = r[y].length; x > v; v++)
                  for (t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length; F > D; D++) t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p;
              else {
                var K = d.matrix || new o,
                  L = {
                    _: {
                      transform: G.transform
                    },
                    getBBox: function() {
                      return d.getBBox(1)
                    }
                  };
                r[y] = [K.a, K.b, K.c, K.d, K.e, K.f], Nb(L, s[y]), s[y] = L._.transform, t[y] = [(L.matrix.a - K.a) / p, (L.matrix.b - K.b) / p, (L.matrix.c - K.c) / p, (L.matrix.d - K.d) / p, (L.matrix.e - K.e) / p, (L.matrix.f - K.f) / p]
              }
              break;
            case "csv":
              var M = I(i[y])[J](w),
                N = I(r[y])[J](w);
              if ("clip-rect" == y)
                for (r[y] = N, t[y] = [], v = N.length; v--;) t[y][v] = (M[v] - r[y][v]) / p;
              s[y] = M;
              break;
            default:
              for (M = [][E](i[y]), N = [][E](r[y]), t[y] = [], v = d.paper.customAttributes[y].length; v--;) t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
          }
        var O = i.easing,
          P = c.easing_formulas[O];
        if (!P)
          if (P = I(O).match(Z), P && 5 == P.length) {
            var Q = P;
            P = function(a) {
              return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
            }
          } else P = nb;
        if (n = i.start || a.start || +new Date, u = {
            anim: a,
            percent: e,
            timestamp: n,
            start: n + (a.del || 0),
            status: 0,
            initstatus: f || 0,
            stop: !1,
            ms: p,
            easing: P,
            from: r,
            diff: t,
            to: s,
            el: d,
            callback: i.callback,
            prev: m,
            next: l,
            repeat: h || a.times,
            origin: d.attr(),
            totalOrigin: g
          }, ic.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - p * f, 1 == ic.length)) return kc();
        k && (u.start = new Date - u.ms * f), 1 == ic.length && jc(kc)
      }
      b("raphael.anim.start." + d.id, d, a)
    }
  }

  function t(a) {
    for (var b = 0; b < ic.length; b++) ic[b].el.paper == a && ic.splice(b--, 1)
  }
  c.version = "2.1.2", c.eve = b;
  var u, v, w = /[, ]+/,
    x = {
      circle: 1,
      rect: 1,
      path: 1,
      ellipse: 1,
      text: 1,
      image: 1
    },
    y = /\{(\d+)\}/g,
    z = "hasOwnProperty",
    A = {
      doc: document,
      win: a
    },
    B = {
      was: Object.prototype[z].call(A.win, "Raphael"),
      is: A.win.Raphael
    },
    C = function() {
      this.ca = this.customAttributes = {}
    },
    D = "apply",
    E = "concat",
    F = "ontouchstart" in A.win || A.win.DocumentTouch && A.doc instanceof DocumentTouch,
    G = "",
    H = " ",
    I = String,
    J = "split",
    K = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [J](H),
    L = {
      mousedown: "touchstart",
      mousemove: "touchmove",
      mouseup: "touchend"
    },
    M = I.prototype.toLowerCase,
    N = Math,
    O = N.max,
    P = N.min,
    Q = N.abs,
    R = N.pow,
    S = N.PI,
    T = "number",
    U = "string",
    V = "array",
    W = Object.prototype.toString,
    X = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
    Y = {
      NaN: 1,
      Infinity: 1,
      "-Infinity": 1
    },
    Z = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    $ = N.round,
    _ = parseFloat,
    ab = parseInt,
    bb = I.prototype.toUpperCase,
    cb = c._availableAttrs = {
      "arrow-end": "none",
      "arrow-start": "none",
      blur: 0,
      "clip-rect": "0 0 1e9 1e9",
      cursor: "default",
      cx: 0,
      cy: 0,
      fill: "#fff",
      "fill-opacity": 1,
      font: '10px "Arial"',
      "font-family": '"Arial"',
      "font-size": "10",
      "font-style": "normal",
      "font-weight": 400,
      gradient: 0,
      height: 0,
      href: "http://raphaeljs.com/",
      "letter-spacing": 0,
      opacity: 1,
      path: "M0,0",
      r: 0,
      rx: 0,
      ry: 0,
      src: "",
      stroke: "#000",
      "stroke-dasharray": "",
      "stroke-linecap": "butt",
      "stroke-linejoin": "butt",
      "stroke-miterlimit": 0,
      "stroke-opacity": 1,
      "stroke-width": 1,
      target: "_blank",
      "text-anchor": "middle",
      title: "Raphael",
      transform: "",
      width: 0,
      x: 0,
      y: 0
    },
    db = c._availableAnimAttrs = {
      blur: T,
      "clip-rect": "csv",
      cx: T,
      cy: T,
      fill: "colour",
      "fill-opacity": T,
      "font-size": T,
      height: T,
      opacity: T,
      path: "path",
      r: T,
      rx: T,
      ry: T,
      stroke: "colour",
      "stroke-opacity": T,
      "stroke-width": T,
      transform: "transform",
      width: T,
      x: T,
      y: T
    },
    eb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
    fb = {
      hs: 1,
      rg: 1
    },
    gb = /,?([achlmqrstvxz]),?/gi,
    hb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
    ib = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
    jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
    kb = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
    lb = function(a, b) {
      return _(a) - _(b)
    },
    mb = function() {},
    nb = function(a) {
      return a
    },
    ob = c._rectPath = function(a, b, c, d, e) {
      return e ? [
        ["M", a + e, b],
        ["l", c - 2 * e, 0],
        ["a", e, e, 0, 0, 1, e, e],
        ["l", 0, d - 2 * e],
        ["a", e, e, 0, 0, 1, -e, e],
        ["l", 2 * e - c, 0],
        ["a", e, e, 0, 0, 1, -e, -e],
        ["l", 0, 2 * e - d],
        ["a", e, e, 0, 0, 1, e, -e],
        ["z"]
      ] : [
        ["M", a, b],
        ["l", c, 0],
        ["l", 0, d],
        ["l", -c, 0],
        ["z"]
      ]
    },
    pb = function(a, b, c, d) {
      return null == d && (d = c), [
        ["M", a, b],
        ["m", 0, -d],
        ["a", c, d, 0, 1, 1, 0, 2 * d],
        ["a", c, d, 0, 1, 1, 0, -2 * d],
        ["z"]
      ]
    },
    qb = c._getPath = {
      path: function(a) {
        return a.attr("path")
      },
      circle: function(a) {
        var b = a.attrs;
        return pb(b.cx, b.cy, b.r)
      },
      ellipse: function(a) {
        var b = a.attrs;
        return pb(b.cx, b.cy, b.rx, b.ry)
      },
      rect: function(a) {
        var b = a.attrs;
        return ob(b.x, b.y, b.width, b.height, b.r)
      },
      image: function(a) {
        var b = a.attrs;
        return ob(b.x, b.y, b.width, b.height)
      },
      text: function(a) {
        var b = a._getBBox();
        return ob(b.x, b.y, b.width, b.height)
      },
      set: function(a) {
        var b = a._getBBox();
        return ob(b.x, b.y, b.width, b.height)
      }
    },
    rb = c.mapPath = function(a, b) {
      if (!b) return a;
      var c, d, e, f, g, h, i;
      for (a = Kb(a), e = 0, g = a.length; g > e; e++)
        for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
      return a
    };
  if (c._g = A, c.type = A.win.SVGAngle || A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
    var sb, tb = A.doc.createElement("div");
    if (tb.innerHTML = '<v:shape adj="1"/>', sb = tb.firstChild, sb.style.behavior = "url(#default#VML)", !sb || "object" != typeof sb.adj) return c.type = G;
    tb = null
  }
  c.svg = !(c.vml = "VML" == c.type), c._Paper = C, c.fn = v = C.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function(a, b) {
    return b = M.call(b), "finite" == b ? !Y[z](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || W.call(a).slice(8, -1).toLowerCase() == b
  }, c.angle = function(a, b, d, e, f, g) {
    if (null == f) {
      var h = a - d,
        i = b - e;
      return h || i ? (180 + 180 * N.atan2(-i, -h) / S + 360) % 360 : 0
    }
    return c.angle(a, b, f, g) - c.angle(d, e, f, g)
  }, c.rad = function(a) {
    return a % 360 * S / 180
  }, c.deg = function(a) {
    return 180 * a / S % 360
  }, c.snapTo = function(a, b, d) {
    if (d = c.is(d, "finite") ? d : 10, c.is(a, V)) {
      for (var e = a.length; e--;)
        if (Q(a[e] - b) <= d) return a[e]
    } else {
      a = +a;
      var f = b % a;
      if (d > f) return b - f;
      if (f > a - d) return b - f + a
    }
    return b
  }, c.createUUID = function(a, b) {
    return function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
    }
  }(/[xy]/g, function(a) {
    var b = 0 | 16 * N.random(),
      c = "x" == a ? b : 8 | 3 & b;
    return c.toString(16)
  }), c.setWindow = function(a) {
    b("raphael.setWindow", c, A.win, a), A.win = a, A.doc = A.win.document, c._engine.initWin && c._engine.initWin(A.win)
  };
  var ub = function(a) {
      if (c.vml) {
        var b, d = /^\s+|\s+$/g;
        try {
          var e = new ActiveXObject("htmlfile");
          e.write("<body>"), e.close(), b = e.body
        } catch (g) {
          b = createPopup().document.body
        }
        var h = b.createTextRange();
        ub = f(function(a) {
          try {
            b.style.color = I(a).replace(d, G);
            var c = h.queryCommandValue("ForeColor");
            return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
          } catch (e) {
            return "none"
          }
        })
      } else {
        var i = A.doc.createElement("i");
        i.title = "RaphaÃ«l Colour Picker", i.style.display = "none", A.doc.body.appendChild(i), ub = f(function(a) {
          return i.style.color = a, A.doc.defaultView.getComputedStyle(i, G).getPropertyValue("color")
        })
      }
      return ub(a)
    },
    vb = function() {
      return "hsb(" + [this.h, this.s, this.b] + ")"
    },
    wb = function() {
      return "hsl(" + [this.h, this.s, this.l] + ")"
    },
    xb = function() {
      return this.hex
    },
    yb = function(a, b, d) {
      if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, U)) {
        var e = c.getRGB(a);
        a = e.r, b = e.g, d = e.b
      }
      return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
    },
    zb = function(a, b, d, e) {
      a *= 255, b *= 255, d *= 255;
      var f = {
        r: a,
        g: b,
        b: d,
        hex: c.rgb(a, b, d),
        toString: xb
      };
      return c.is(e, "finite") && (f.opacity = e), f
    };
  c.color = function(a) {
    var b;
    return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
      hex: "none"
    }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = xb, a
  }, c.hsb2rgb = function(a, b, c, d) {
    this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
    var e, f, g, h, i;
    return a = a % 360 / 60, i = c * b, h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
  }, c.hsl2rgb = function(a, b, c, d) {
    this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
    var e, f, g, h, i;
    return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - Q(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], zb(e, f, g, d)
  }, c.rgb2hsb = function(a, b, c) {
    c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
    var d, e, f, g;
    return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
      h: d,
      s: e,
      b: f,
      toString: vb
    }
  }, c.rgb2hsl = function(a, b, c) {
    c = yb(a, b, c), a = c[0], b = c[1], c = c[2];
    var d, e, f, g, h, i;
    return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
      h: d,
      s: e,
      l: f,
      toString: wb
    }
  }, c._path2string = function() {
    return this.join(",").replace(gb, "$1")
  }, c._preload = function(a, b) {
    var c = A.doc.createElement("img");
    c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
      b.call(this), this.onload = null, A.doc.body.removeChild(this)
    }, c.onerror = function() {
      A.doc.body.removeChild(this)
    }, A.doc.body.appendChild(c), c.src = a
  }, c.getRGB = f(function(a) {
    if (!a || (a = I(a)).indexOf("-") + 1) return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: g
    };
    if ("none" == a) return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      toString: g
    };
    !(fb[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = ub(a));
    var b, d, e, f, h, i, j = a.match(X);
    return j ? (j[2] && (e = ab(j[2].substring(5), 16), d = ab(j[2].substring(3, 5), 16), b = ab(j[2].substring(1, 3), 16)), j[3] && (e = ab((h = j[3].charAt(3)) + h, 16), d = ab((h = j[3].charAt(2)) + h, 16), b = ab((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100)), j[5] ? (i = j[5][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "Â°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsb2rgb(b, d, e, f)) : j[6] ? (i = j[6][J](eb), b = _(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = _(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = _(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "Â°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (f = _(i[3])), i[3] && "%" == i[3].slice(-1) && (f /= 100), c.hsl2rgb(b, d, e, f)) : (j = {
      r: b,
      g: d,
      b: e,
      toString: g
    }, j.hex = "#" + (16777216 | e | d << 8 | b << 16).toString(16).slice(1), c.is(f, "finite") && (j.opacity = f), j)) : {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: g
    }
  }, c), c.hsb = f(function(a, b, d) {
    return c.hsb2rgb(a, b, d).hex
  }), c.hsl = f(function(a, b, d) {
    return c.hsl2rgb(a, b, d).hex
  }), c.rgb = f(function(a, b, c) {
    return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
  }), c.getColor = function(a) {
    var b = this.getColor.start = this.getColor.start || {
        h: 0,
        s: 1,
        b: a || .75
      },
      c = this.hsb2rgb(b.h, b.s, b.b);
    return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
      h: 0,
      s: 1,
      b: b.b
    })), c.hex
  }, c.getColor.reset = function() {
    delete this.start
  }, c.parsePathString = function(a) {
    if (!a) return null;
    var b = Ab(a);
    if (b.arr) return Cb(b.arr);
    var d = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
      },
      e = [];
    return c.is(a, V) && c.is(a[0], V) && (e = Cb(a)), e.length || I(a).replace(hb, function(a, b, c) {
      var f = [],
        g = b.toLowerCase();
      if (c.replace(jb, function(a, b) {
          b && f.push(+b)
        }), "m" == g && f.length > 2 && (e.push([b][E](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][E](f));
      else
        for (; f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]););
    }), e.toString = c._path2string, b.arr = Cb(e), e
  }, c.parseTransformString = f(function(a) {
    if (!a) return null;
    var b = [];
    return c.is(a, V) && c.is(a[0], V) && (b = Cb(a)), b.length || I(a).replace(ib, function(a, c, d) {
      var e = [];
      M.call(c), d.replace(jb, function(a, b) {
        b && e.push(+b)
      }), b.push([c][E](e))
    }), b.toString = c._path2string, b
  });
  var Ab = function(a) {
    var b = Ab.ps = Ab.ps || {};
    return b[a] ? b[a].sleep = 100 : b[a] = {
      sleep: 100
    }, setTimeout(function() {
      for (var c in b) b[z](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
    }), b[a]
  };
  c.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
    var j = 1 - i,
      k = R(j, 3),
      l = R(j, 2),
      m = i * i,
      n = m * i,
      o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
      p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
      q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
      r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
      s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
      t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
      u = j * a + i * c,
      v = j * b + i * d,
      w = j * e + i * g,
      x = j * f + i * h,
      y = 90 - 180 * N.atan2(q - s, r - t) / S;
    return (q > s || t > r) && (y += 180), {
      x: o,
      y: p,
      m: {
        x: q,
        y: r
      },
      n: {
        x: s,
        y: t
      },
      start: {
        x: u,
        y: v
      },
      end: {
        x: w,
        y: x
      },
      alpha: y
    }
  }, c.bezierBBox = function(a, b, d, e, f, g, h, i) {
    c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
    var j = Jb.apply(null, a);
    return {
      x: j.min.x,
      y: j.min.y,
      x2: j.max.x,
      y2: j.max.y,
      width: j.max.x - j.min.x,
      height: j.max.y - j.min.y
    }
  }, c.isPointInsideBBox = function(a, b, c) {
    return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
  }, c.isBBoxIntersect = function(a, b) {
    var d = c.isPointInsideBBox;
    return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
  }, c.pathIntersection = function(a, b) {
    return n(a, b)
  }, c.pathIntersectionNumber = function(a, b) {
    return n(a, b, 1)
  }, c.isPointInsidePath = function(a, b, d) {
    var e = c.pathBBox(a);
    return c.isPointInsideBBox(e, b, d) && 1 == n(a, [
      ["M", b, d],
      ["H", e.x2 + 10]
    ], 1) % 2
  }, c._removedFactory = function(a) {
    return function() {
      b("raphael.log", null, "RaphaÃ«l: you are calling to method â€œ" + a + "â€ of removed object", a)
    }
  };
  var Bb = c.pathBBox = function(a) {
      var b = Ab(a);
      if (b.bbox) return d(b.bbox);
      if (!a) return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        x2: 0,
        y2: 0
      };
      a = Kb(a);
      for (var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
        if (c = a[i], "M" == c[0]) e = c[1], f = c[2], g.push(e), h.push(f);
        else {
          var k = Jb(e, f, c[1], c[2], c[3], c[4], c[5], c[6]);
          g = g[E](k.min.x, k.max.x), h = h[E](k.min.y, k.max.y), e = c[5], f = c[6]
        } var l = P[D](0, g),
        m = P[D](0, h),
        n = O[D](0, g),
        o = O[D](0, h),
        p = n - l,
        q = o - m,
        r = {
          x: l,
          y: m,
          x2: n,
          y2: o,
          width: p,
          height: q,
          cx: l + p / 2,
          cy: m + q / 2
        };
      return b.bbox = d(r), r
    },
    Cb = function(a) {
      var b = d(a);
      return b.toString = c._path2string, b
    },
    Db = c._pathToRelative = function(a) {
      var b = Ab(a);
      if (b.rel) return Cb(b.rel);
      c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a));
      var d = [],
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;
      "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
      for (var j = i, k = a.length; k > j; j++) {
        var l = d[j] = [],
          m = a[j];
        if (m[0] != M.call(m[0])) switch (l[0] = M.call(m[0]), l[0]) {
          case "a":
            l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
            break;
          case "v":
            l[1] = +(m[1] - f).toFixed(3);
            break;
          case "m":
            g = m[1], h = m[2];
          default:
            for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
        } else {
          l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
          for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
        }
        var r = d[j].length;
        switch (d[j][0]) {
          case "z":
            e = g, f = h;
            break;
          case "h":
            e += +d[j][r - 1];
            break;
          case "v":
            f += +d[j][r - 1];
            break;
          default:
            e += +d[j][r - 2], f += +d[j][r - 1]
        }
      }
      return d.toString = c._path2string, b.rel = Cb(d), d
    },
    Eb = c._pathToAbsolute = function(a) {
      var b = Ab(a);
      if (b.abs) return Cb(b.abs);
      if (c.is(a, V) && c.is(a && a[0], V) || (a = c.parsePathString(a)), !a || !a.length) return [
        ["M", 0, 0]
      ];
      var d = [],
        e = 0,
        f = 0,
        g = 0,
        i = 0,
        j = 0;
      "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, i = f, j++, d[0] = ["M", e, f]);
      for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
        if (d.push(k = []), l = a[n], l[0] != bb.call(l[0])) switch (k[0] = bb.call(l[0]), k[0]) {
            case "A":
              k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
              break;
            case "V":
              k[1] = +l[1] + f;
              break;
            case "H":
              k[1] = +l[1] + e;
              break;
            case "R":
              for (var p = [e, f][E](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
              d.pop(), d = d[E](h(p, m));
              break;
            case "M":
              g = +l[1] + e, i = +l[2] + f;
            default:
              for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
          } else if ("R" == l[0]) p = [e, f][E](l.slice(1)), d.pop(), d = d[E](h(p, m)), k = ["R"][E](l.slice(-2));
          else
            for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
        switch (k[0]) {
          case "Z":
            e = g, f = i;
            break;
          case "H":
            e = k[1];
            break;
          case "V":
            f = k[1];
            break;
          case "M":
            g = k[k.length - 2], i = k[k.length - 1];
          default:
            e = k[k.length - 2], f = k[k.length - 1]
        }
      }
      return d.toString = c._path2string, b.abs = Cb(d), d
    },
    Fb = function(a, b, c, d) {
      return [a, b, c, d, c, d]
    },
    Gb = function(a, b, c, d, e, f) {
      var g = 1 / 3,
        h = 2 / 3;
      return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    },
    Hb = function(a, b, c, d, e, g, h, i, j, k) {
      var l, m = 120 * S / 180,
        n = S / 180 * (+e || 0),
        o = [],
        p = f(function(a, b, c) {
          var d = a * N.cos(c) - b * N.sin(c),
            e = a * N.sin(c) + b * N.cos(c);
          return {
            x: d,
            y: e
          }
        });
      if (k) y = k[0], z = k[1], w = k[2], x = k[3];
      else {
        l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
        var q = (N.cos(S / 180 * e), N.sin(S / 180 * e), (a - i) / 2),
          r = (b - j) / 2,
          s = q * q / (c * c) + r * r / (d * d);
        s > 1 && (s = N.sqrt(s), c = s * c, d = s * d);
        var t = c * c,
          u = d * d,
          v = (g == h ? -1 : 1) * N.sqrt(Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
          w = v * c * r / d + (a + i) / 2,
          x = v * -d * q / c + (b + j) / 2,
          y = N.asin(((b - x) / d).toFixed(9)),
          z = N.asin(((j - x) / d).toFixed(9));
        y = w > a ? S - y : y, z = w > i ? S - z : z, 0 > y && (y = 2 * S + y), 0 > z && (z = 2 * S + z), h && y > z && (y -= 2 * S), !h && z > y && (z -= 2 * S)
      }
      var A = z - y;
      if (Q(A) > m) {
        var B = z,
          C = i,
          D = j;
        z = y + m * (h && z > y ? 1 : -1), i = w + c * N.cos(z), j = x + d * N.sin(z), o = Hb(i, j, c, d, e, 0, h, C, D, [z, B, w, x])
      }
      A = z - y;
      var F = N.cos(y),
        G = N.sin(y),
        H = N.cos(z),
        I = N.sin(z),
        K = N.tan(A / 4),
        L = 4 / 3 * c * K,
        M = 4 / 3 * d * K,
        O = [a, b],
        P = [a + L * G, b - M * F],
        R = [i + L * I, j - M * H],
        T = [i, j];
      if (P[0] = 2 * O[0] - P[0], P[1] = 2 * O[1] - P[1], k) return [P, R, T][E](o);
      o = [P, R, T][E](o).join()[J](",");
      for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
      return U
    },
    Ib = function(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i;
      return {
        x: R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
        y: R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h
      }
    },
    Jb = f(function(a, b, c, d, e, f, g, h) {
      var i, j = e - 2 * c + a - (g - 2 * e + c),
        k = 2 * (c - a) - 2 * (e - c),
        l = a - c,
        m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
        n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
        o = [b, h],
        p = [a, g];
      return Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j, Q(m) > "1e12" && (m = .5), Q(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ib(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ib(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
        min: {
          x: P[D](0, p),
          y: P[D](0, o)
        },
        max: {
          x: O[D](0, p),
          y: O[D](0, o)
        }
      }
    }),
    Kb = c._path2curve = f(function(a, b) {
      var c = !b && Ab(a);
      if (!b && c.curve) return Cb(c.curve);
      for (var d = Eb(a), e = b && Eb(b), f = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, g = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, h = (function(a, b, c) {
          var d, e;
          if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
          switch (!(a[0] in {
              T: 1,
              Q: 1
            }) && (b.qx = b.qy = null), a[0]) {
            case "M":
              b.X = a[1], b.Y = a[2];
              break;
            case "A":
              a = ["C"][E](Hb[D](0, [b.x, b.y][E](a.slice(1))));
              break;
            case "S":
              "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][E](a.slice(1));
              break;
            case "T":
              "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][E](Gb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
              break;
            case "Q":
              b.qx = a[1], b.qy = a[2], a = ["C"][E](Gb(b.x, b.y, a[1], a[2], a[3], a[4]));
              break;
            case "L":
              a = ["C"][E](Fb(b.x, b.y, a[1], a[2]));
              break;
            case "H":
              a = ["C"][E](Fb(b.x, b.y, a[1], b.y));
              break;
            case "V":
              a = ["C"][E](Fb(b.x, b.y, b.x, a[1]));
              break;
            case "Z":
              a = ["C"][E](Fb(b.x, b.y, b.X, b.Y))
          }
          return a
        }), i = function(a, b) {
          if (a[b].length > 7) {
            a[b].shift();
            for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][E](c.splice(0, 6)));
            a.splice(b, 1), l = O(d.length, e && e.length || 0)
          }
        }, j = function(a, b, c, f, g) {
          a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = O(d.length, e && e.length || 0))
        }, k = 0, l = O(d.length, e && e.length || 0); l > k; k++) {
        d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
        var m = d[k],
          n = e && e[k],
          o = m.length,
          p = e && n.length;
        f.x = m[o - 2], f.y = m[o - 1], f.bx = _(m[o - 4]) || f.x, f.by = _(m[o - 3]) || f.y, g.bx = e && (_(n[p - 4]) || g.x), g.by = e && (_(n[p - 3]) || g.y), g.x = e && n[p - 2], g.y = e && n[p - 1]
      }
      return e || (c.curve = Cb(d)), e ? [d, e] : d
    }, null, Cb),
    Lb = (c._parseDots = f(function(a) {
      for (var b = [], d = 0, e = a.length; e > d; d++) {
        var f = {},
          g = a[d].match(/^([^:]*):?([\d\.]*)/);
        if (f.color = c.getRGB(g[1]), f.color.error) return null;
        f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
      }
      for (d = 1, e = b.length - 1; e > d; d++)
        if (!b[d].offset) {
          for (var h = _(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
            if (b[j].offset) {
              i = b[j].offset;
              break
            } i || (i = 100, j = e), i = _(i);
          for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
        } return b
    }), c._tear = function(a, b) {
      a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
    }),
    Mb = (c._tofront = function(a, b) {
      b.top !== a && (Lb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
    }, c._toback = function(a, b) {
      b.bottom !== a && (Lb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
    }, c._insertafter = function(a, b, c) {
      Lb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
    }, c._insertbefore = function(a, b, c) {
      Lb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
    }, c.toMatrix = function(a, b) {
      var c = Bb(a),
        d = {
          _: {
            transform: G
          },
          getBBox: function() {
            return c
          }
        };
      return Nb(d, b), d.matrix
    }),
    Nb = (c.transformPath = function(a, b) {
      return rb(a, Mb(a, b))
    }, c._extractTransform = function(a, b) {
      if (null == b) return a._.transform;
      b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G);
      var d = c.parseTransformString(b),
        e = 0,
        f = 0,
        g = 0,
        h = 1,
        i = 1,
        j = a._,
        k = new o;
      if (j.transform = d || [], d)
        for (var l = 0, m = d.length; m > l; l++) {
          var n, p, q, r, s, t = d[l],
            u = t.length,
            v = I(t[0]).toLowerCase(),
            w = t[0] != v,
            x = w ? k.invert() : 0;
          "t" == v && 3 == u ? w ? (n = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - n, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
        }
      a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
    }),
    Ob = function(a) {
      var b = a[0];
      switch (b.toLowerCase()) {
        case "t":
          return [b, 0, 0];
        case "m":
          return [b, 1, 0, 0, 1, 0, 0];
        case "r":
          return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
        case "s":
          return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
      }
    },
    Pb = c._equaliseTransform = function(a, b) {
      b = I(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
      for (var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0; h > k; k++) {
        if (f = a[k] || Ob(b[k]), g = b[k] || Ob(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
        for (i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
      }
      return {
        from: i,
        to: j
      }
    };
  c._getContainer = function(a, b, d, e) {
      var f;
      return f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
        container: f,
        width: f.style.pixelWidth || f.offsetWidth,
        height: f.style.pixelHeight || f.offsetHeight
      } : {
        container: f,
        width: b,
        height: d
      } : {
        container: 1,
        x: a,
        y: b,
        width: d,
        height: e
      } : void 0
    }, c.pathToRelative = Db, c._engine = {}, c.path2curve = Kb, c.matrix = function(a, b, c, d, e, f) {
      return new o(a, b, c, d, e, f)
    },
    function(a) {
      function b(a) {
        return a[0] * a[0] + a[1] * a[1]
      }

      function d(a) {
        var c = N.sqrt(b(a));
        a[0] && (a[0] /= c), a[1] && (a[1] /= c)
      }
      a.add = function(a, b, c, d, e, f) {
        var g, h, i, j, k = [
            [],
            [],
            []
          ],
          l = [
            [this.a, this.c, this.e],
            [this.b, this.d, this.f],
            [0, 0, 1]
          ],
          m = [
            [a, c, e],
            [b, d, f],
            [0, 0, 1]
          ];
        for (a && a instanceof o && (m = [
            [a.a, a.c, a.e],
            [a.b, a.d, a.f],
            [0, 0, 1]
          ]), g = 0; 3 > g; g++)
          for (h = 0; 3 > h; h++) {
            for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
            k[g][h] = j
          }
        this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
      }, a.invert = function() {
        var a = this,
          b = a.a * a.d - a.b * a.c;
        return new o(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
      }, a.clone = function() {
        return new o(this.a, this.b, this.c, this.d, this.e, this.f)
      }, a.translate = function(a, b) {
        this.add(1, 0, 0, 1, a, b)
      }, a.scale = function(a, b, c, d) {
        null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
      }, a.rotate = function(a, b, d) {
        a = c.rad(a), b = b || 0, d = d || 0;
        var e = +N.cos(a).toFixed(9),
          f = +N.sin(a).toFixed(9);
        this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
      }, a.x = function(a, b) {
        return a * this.a + b * this.c + this.e
      }, a.y = function(a, b) {
        return a * this.b + b * this.d + this.f
      }, a.get = function(a) {
        return +this[I.fromCharCode(97 + a)].toFixed(4)
      }, a.toString = function() {
        return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
      }, a.toFilter = function() {
        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
      }, a.offset = function() {
        return [this.e.toFixed(4), this.f.toFixed(4)]
      }, a.split = function() {
        var a = {};
        a.dx = this.e, a.dy = this.f;
        var e = [
          [this.a, this.c],
          [this.b, this.d]
        ];
        a.scalex = N.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = N.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
        var f = -e[0][1],
          g = e[1][1];
        return 0 > g ? (a.rotate = c.deg(N.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(N.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
      }, a.toTransformString = function(a) {
        var b = a || this[J]();
        return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : G) + (b.rotate ? "r" + [b.rotate, 0, 0] : G)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
      }
    }(o.prototype);
  var Qb = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
  v.safari = "Apple Computer, Inc." == navigator.vendor && (Qb && Qb[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Qb && Qb[1] < 8 ? function() {
    var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
      stroke: "none"
    });
    setTimeout(function() {
      a.remove()
    })
  } : mb;
  for (var Rb = function() {
      this.returnValue = !1
    }, Sb = function() {
      return this.originalEvent.preventDefault()
    }, Tb = function() {
      this.cancelBubble = !0
    }, Ub = function() {
      return this.originalEvent.stopPropagation()
    }, Vb = function(a) {
      var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
        c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
      return {
        x: a.clientX + c,
        y: a.clientY + b
      }
    }, Wb = function() {
      return A.doc.addEventListener ? function(a, b, c, d) {
        var e = function(a) {
          var b = Vb(a);
          return c.call(d, a, b.x, b.y)
        };
        if (a.addEventListener(b, e, !1), F && L[b]) {
          var f = function(b) {
            for (var e = Vb(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
              if (b.targetTouches[g].target == a) {
                b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Sb, b.stopPropagation = Ub;
                break
              } return c.call(d, b, e.x, e.y)
          };
          a.addEventListener(L[b], f, !1)
        }
        return function() {
          return a.removeEventListener(b, e, !1), F && L[b] && a.removeEventListener(L[b], e, !1), !0
        }
      } : A.doc.attachEvent ? function(a, b, c, d) {
        var e = function(a) {
          a = a || A.win.event;
          var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
            e = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
            f = a.clientX + e,
            g = a.clientY + b;
          return a.preventDefault = a.preventDefault || Rb, a.stopPropagation = a.stopPropagation || Tb, c.call(d, a, f, g)
        };
        a.attachEvent("on" + b, e);
        var f = function() {
          return a.detachEvent("on" + b, e), !0
        };
        return f
      } : void 0
    }(), Xb = [], Yb = function(a) {
      for (var c, d = a.clientX, e = a.clientY, f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop, g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft, h = Xb.length; h--;) {
        if (c = Xb[h], F && a.touches) {
          for (var i, j = a.touches.length; j--;)
            if (i = a.touches[j], i.identifier == c.el._drag.id) {
              d = i.clientX, e = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
              break
            }
        } else a.preventDefault();
        var k, l = c.el.node,
          m = l.nextSibling,
          n = l.parentNode,
          o = l.style.display;
        A.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && b("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, b("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
      }
    }, Zb = function(a) {
      c.unmousemove(Yb).unmouseup(Zb);
      for (var d, e = Xb.length; e--;) d = Xb[e], d.el._drag = {}, b("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, a);
      Xb = []
    }, $b = c.el = {}, _b = K.length; _b--;) ! function(a) {
    c[a] = $b[a] = function(b, d) {
      return c.is(b, "function") && (this.events = this.events || [], this.events.push({
        name: a,
        f: b,
        unbind: Wb(this.shape || this.node || A.doc, a, b, d || this)
      })), this
    }, c["un" + a] = $b["un" + a] = function(b) {
      for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
      return this
    }
  }(K[_b]);
  $b.data = function(a, d) {
    var e = kb[this.id] = kb[this.id] || {};
    if (0 == arguments.length) return e;
    if (1 == arguments.length) {
      if (c.is(a, "object")) {
        for (var f in a) a[z](f) && this.data(f, a[f]);
        return this
      }
      return b("raphael.data.get." + this.id, this, e[a], a), e[a]
    }
    return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
  }, $b.removeData = function(a) {
    return null == a ? kb[this.id] = {} : kb[this.id] && delete kb[this.id][a], this
  }, $b.getData = function() {
    return d(kb[this.id] || {})
  }, $b.hover = function(a, b, c, d) {
    return this.mouseover(a, c).mouseout(b, d || c)
  }, $b.unhover = function(a, b) {
    return this.unmouseover(a).unmouseout(b)
  };
  var ac = [];
  $b.drag = function(a, d, e, f, g, h) {
    function i(i) {
      (i.originalEvent || i).preventDefault();
      var j = i.clientX,
        k = i.clientY,
        l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
        m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft;
      if (this._drag.id = i.identifier, F && i.touches)
        for (var n, o = i.touches.length; o--;)
          if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
            j = n.clientX, k = n.clientY;
            break
          } this._drag.x = j + m, this._drag.y = k + l, !Xb.length && c.mousemove(Yb).mouseup(Zb), Xb.push({
        el: this,
        move_scope: f,
        start_scope: g,
        end_scope: h
      }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
    }
    return this._drag = {}, ac.push({
      el: this,
      start: i
    }), this.mousedown(i), this
  }, $b.onDragOver = function(a) {
    a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
  }, $b.undrag = function() {
    for (var a = ac.length; a--;) ac[a].el == this && (this.unmousedown(ac[a].start), ac.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
    !ac.length && c.unmousemove(Yb).unmouseup(Zb), Xb = []
  }, v.circle = function(a, b, d) {
    var e = c._engine.circle(this, a || 0, b || 0, d || 0);
    return this.__set__ && this.__set__.push(e), e
  }, v.rect = function(a, b, d, e, f) {
    var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
    return this.__set__ && this.__set__.push(g), g
  }, v.ellipse = function(a, b, d, e) {
    var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
    return this.__set__ && this.__set__.push(f), f
  }, v.path = function(a) {
    a && !c.is(a, U) && !c.is(a[0], V) && (a += G);
    var b = c._engine.path(c.format[D](c, arguments), this);
    return this.__set__ && this.__set__.push(b), b
  }, v.image = function(a, b, d, e, f) {
    var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
    return this.__set__ && this.__set__.push(g), g
  }, v.text = function(a, b, d) {
    var e = c._engine.text(this, a || 0, b || 0, I(d));
    return this.__set__ && this.__set__.push(e), e
  }, v.set = function(a) {
    !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
    var b = new mc(a);
    return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
  }, v.setStart = function(a) {
    this.__set__ = a || this.set()
  }, v.setFinish = function() {
    var a = this.__set__;
    return delete this.__set__, a
  }, v.setSize = function(a, b) {
    return c._engine.setSize.call(this, a, b)
  }, v.setViewBox = function(a, b, d, e, f) {
    return c._engine.setViewBox.call(this, a, b, d, e, f)
  }, v.top = v.bottom = null, v.raphael = c;
  var bc = function(a) {
    var b = a.getBoundingClientRect(),
      c = a.ownerDocument,
      d = c.body,
      e = c.documentElement,
      f = e.clientTop || d.clientTop || 0,
      g = e.clientLeft || d.clientLeft || 0,
      h = b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
      i = b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
    return {
      y: h,
      x: i
    }
  };
  v.getElementByPoint = function(a, b) {
    var c = this,
      d = c.canvas,
      e = A.doc.elementFromPoint(a, b);
    if (A.win.opera && "svg" == e.tagName) {
      var f = bc(d),
        g = d.createSVGRect();
      g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
      var h = d.getIntersectionList(g, null);
      h.length && (e = h[h.length - 1])
    }
    if (!e) return null;
    for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
    return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
  }, v.getElementsByBBox = function(a) {
    var b = this.set();
    return this.forEach(function(d) {
      c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
    }), b
  }, v.getById = function(a) {
    for (var b = this.bottom; b;) {
      if (b.id == a) return b;
      b = b.next
    }
    return null
  }, v.forEach = function(a, b) {
    for (var c = this.bottom; c;) {
      if (a.call(b, c) === !1) return this;
      c = c.next
    }
    return this
  }, v.getElementsByPoint = function(a, b) {
    var c = this.set();
    return this.forEach(function(d) {
      d.isPointInside(a, b) && c.push(d)
    }), c
  }, $b.isPointInside = function(a, b) {
    var d = this.realPath = qb[this.type](this);
    return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
  }, $b.getBBox = function(a) {
    if (this.removed) return {};
    var b = this._;
    return a ? ((b.dirty || !b.bboxwt) && (this.realPath = qb[this.type](this), b.bboxwt = Bb(this.realPath), b.bboxwt.toString = p, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = qb[this.type](this)), b.bbox = Bb(rb(this.realPath, this.matrix)), b.bbox.toString = p, b.dirty = b.dirtyT = 0), b.bbox)
  }, $b.clone = function() {
    if (this.removed) return null;
    var a = this.paper[this.type]().attr(this.attr());
    return this.__set__ && this.__set__.push(a), a
  }, $b.glow = function(a) {
    if ("text" == this.type) return null;
    a = a || {};
    var b = {
        width: (a.width || 10) + (+this.attr("stroke-width") || 1),
        fill: a.fill || !1,
        opacity: a.opacity || .5,
        offsetx: a.offsetx || 0,
        offsety: a.offsety || 0,
        color: a.color || "#000"
      },
      c = b.width / 2,
      d = this.paper,
      e = d.set(),
      f = this.realPath || qb[this.type](this);
    f = this.matrix ? rb(f, this.matrix) : f;
    for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
      stroke: b.color,
      fill: b.fill ? b.color : "none",
      "stroke-linejoin": "round",
      "stroke-linecap": "round",
      "stroke-width": +(b.width / c * g).toFixed(3),
      opacity: +(b.opacity / c).toFixed(3)
    }));
    return e.insertBefore(this).translate(b.offsetx, b.offsety)
  };
  var cc = function(a, b, d, e, f, g, h, i, l) {
      return null == l ? j(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, k(a, b, d, e, f, g, h, i, l))
    },
    dc = function(a, b) {
      return function(d, e, f) {
        d = Kb(d);
        for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
          if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
          else {
            if (j = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
              if (b && !m.start) {
                if (k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                continue
              }
              if (!a && !b) return k = cc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                x: k.x,
                y: k.y,
                alpha: k.alpha
              }
            }
            n += j, g = +i[5], h = +i[6]
          }
          l += i.shift() + i
        }
        return m.end = l, k = a ? n : b ? m : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
          x: k.x,
          y: k.y,
          alpha: k.alpha
        }), k
      }
    },
    ec = dc(1),
    fc = dc(),
    gc = dc(0, 1);
  c.getTotalLength = ec, c.getPointAtLength = fc, c.getSubpath = function(a, b, c) {
    if (this.getTotalLength(a) - c < 1e-6) return gc(a, b).end;
    var d = gc(a, c, 1);
    return b ? gc(d, b).end : d
  }, $b.getTotalLength = function() {
    var a = this.getPath();
    if (a) return this.node.getTotalLength ? this.node.getTotalLength() : ec(a)
  }, $b.getPointAtLength = function(a) {
    var b = this.getPath();
    if (b) return fc(b, a)
  }, $b.getPath = function() {
    var a, b = c._getPath[this.type];
    if ("text" != this.type && "set" != this.type) return b && (a = b(this)), a
  }, $b.getSubpath = function(a, b) {
    var d = this.getPath();
    if (d) return c.getSubpath(d, a, b)
  };
  var hc = c.easing_formulas = {
    linear: function(a) {
      return a
    },
    "<": function(a) {
      return R(a, 1.7)
    },
    ">": function(a) {
      return R(a, .48)
    },
    "<>": function(a) {
      var b = .48 - a / 1.04,
        c = N.sqrt(.1734 + b * b),
        d = c - b,
        e = R(Q(d), 1 / 3) * (0 > d ? -1 : 1),
        f = -c - b,
        g = R(Q(f), 1 / 3) * (0 > f ? -1 : 1),
        h = e + g + .5;
      return 3 * (1 - h) * h * h + h * h * h
    },
    backIn: function(a) {
      var b = 1.70158;
      return a * a * ((b + 1) * a - b)
    },
    backOut: function(a) {
      a -= 1;
      var b = 1.70158;
      return a * a * ((b + 1) * a + b) + 1
    },
    elastic: function(a) {
      return a == !!a ? a : R(2, -10 * a) * N.sin((a - .075) * 2 * S / .3) + 1
    },
    bounce: function(a) {
      var b, c = 7.5625,
        d = 2.75;
      return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
    }
  };
  hc.easeIn = hc["ease-in"] = hc["<"], hc.easeOut = hc["ease-out"] = hc[">"], hc.easeInOut = hc["ease-in-out"] = hc["<>"], hc["back-in"] = hc.backIn, hc["back-out"] = hc.backOut;
  var ic = [],
    jc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
      setTimeout(a, 16)
    },
    kc = function() {
      for (var a = +new Date, d = 0; d < ic.length; d++) {
        var e = ic[d];
        if (!e.el.removed && !e.paused) {
          var f, g, h = a - e.start,
            i = e.ms,
            j = e.easing,
            k = e.from,
            l = e.diff,
            m = e.to,
            n = (e.t, e.el),
            o = {},
            p = {};
          if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && ic.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
            if (i > h) {
              var q = j(h / i);
              for (var r in k)
                if (k[z](r)) {
                  switch (db[r]) {
                    case T:
                      f = +k[r] + q * i * l[r];
                      break;
                    case "colour":
                      f = "rgb(" + [lc($(k[r].r + q * i * l[r].r)), lc($(k[r].g + q * i * l[r].g)), lc($(k[r].b + q * i * l[r].b))].join(",") + ")";
                      break;
                    case "path":
                      f = [];
                      for (var t = 0, u = k[r].length; u > t; t++) {
                        f[t] = [k[r][t][0]];
                        for (var v = 1, w = k[r][t].length; w > v; v++) f[t][v] = +k[r][t][v] + q * i * l[r][t][v];
                        f[t] = f[t].join(H)
                      }
                      f = f.join(H);
                      break;
                    case "transform":
                      if (l[r].real)
                        for (f = [], t = 0, u = k[r].length; u > t; t++)
                          for (f[t] = [k[r][t][0]], v = 1, w = k[r][t].length; w > v; v++) f[t][v] = k[r][t][v] + q * i * l[r][t][v];
                      else {
                        var x = function(a) {
                          return +k[r][a] + q * i * l[r][a]
                        };
                        f = [
                          ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                        ]
                      }
                      break;
                    case "csv":
                      if ("clip-rect" == r)
                        for (f = [], t = 4; t--;) f[t] = +k[r][t] + q * i * l[r][t];
                      break;
                    default:
                      var y = [][E](k[r]);
                      for (f = [], t = n.paper.customAttributes[r].length; t--;) f[t] = +y[t] + q * i * l[r][t]
                  }
                  o[r] = f
                } n.attr(o),
                function(a, c, d) {
                  setTimeout(function() {
                    b("raphael.anim.frame." + a, c, d)
                  })
                }(n.id, n, e.anim)
            } else {
              if (function(a, d, e) {
                  setTimeout(function() {
                    b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                  })
                }(e.callback, n, e.anim), n.attr(m), ic.splice(d--, 1), e.repeat > 1 && !e.next) {
                for (g in m) m[z](g) && (p[g] = e.totalOrigin[g]);
                e.el.attr(p), s(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
              }
              e.next && !e.stop && s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
            }
        }
      }
      c.svg && n && n.paper && n.paper.safari(), ic.length && jc(kc)
    },
    lc = function(a) {
      return a > 255 ? 255 : 0 > a ? 0 : a
    };
  $b.animateWith = function(a, b, d, e, f, g) {
    var h = this;
    if (h.removed) return g && g.call(h), h;
    var i = d instanceof r ? d : c.animation(d, e, f, g);
    s(i, h, i.percents[0], null, h.attr());
    for (var j = 0, k = ic.length; k > j; j++)
      if (ic[j].anim == b && ic[j].el == a) {
        ic[k - 1].start = ic[j].start;
        break
      } return h
  }, $b.onAnimation = function(a) {
    return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
  }, r.prototype.delay = function(a) {
    var b = new r(this.anim, this.ms);
    return b.times = this.times, b.del = +a || 0, b
  }, r.prototype.repeat = function(a) {
    var b = new r(this.anim, this.ms);
    return b.del = this.del, b.times = N.floor(O(a, 0)) || 1, b
  }, c.animation = function(a, b, d, e) {
    if (a instanceof r) return a;
    (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
    var f, g, h = {};
    for (g in a) a[z](g) && _(g) != g && _(g) + "%" != g && (f = !0, h[g] = a[g]);
    return f ? (d && (h.easing = d), e && (h.callback = e), new r({
      100: h
    }, b)) : new r(a, b)
  }, $b.animate = function(a, b, d, e) {
    var f = this;
    if (f.removed) return e && e.call(f), f;
    var g = a instanceof r ? a : c.animation(a, b, d, e);
    return s(g, f, g.percents[0], null, f.attr()), f
  }, $b.setTime = function(a, b) {
    return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
  }, $b.status = function(a, b) {
    var c, d, e = [],
      f = 0;
    if (null != b) return s(a, this, -1, P(b, 1)), this;
    for (c = ic.length; c > f; f++)
      if (d = ic[f], d.el.id == this.id && (!a || d.anim == a)) {
        if (a) return d.status;
        e.push({
          anim: d.anim,
          status: d.status
        })
      } return a ? 0 : e
  }, $b.pause = function(a) {
    for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.pause." + this.id, this, ic[c].anim) !== !1 && (ic[c].paused = !0);
    return this
  }, $b.resume = function(a) {
    for (var c = 0; c < ic.length; c++)
      if (ic[c].el.id == this.id && (!a || ic[c].anim == a)) {
        var d = ic[c];
        b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
      } return this
  }, $b.stop = function(a) {
    for (var c = 0; c < ic.length; c++) ic[c].el.id != this.id || a && ic[c].anim != a || b("raphael.anim.stop." + this.id, this, ic[c].anim) !== !1 && ic.splice(c--, 1);
    return this
  }, b.on("raphael.remove", t), b.on("raphael.clear", t), $b.toString = function() {
    return "RaphaÃ«lâ€™s object"
  };
  var mc = function(a) {
      if (this.items = [], this.length = 0, this.type = "set", a)
        for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != $b.constructor && a[b].constructor != mc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    },
    nc = mc.prototype;
  nc.push = function() {
    for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != $b.constructor && a.constructor != mc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
    return this
  }, nc.pop = function() {
    return this.length && delete this[this.length--], this.items.pop()
  }, nc.forEach = function(a, b) {
    for (var c = 0, d = this.items.length; d > c; c++)
      if (a.call(b, this.items[c], c) === !1) return this;
    return this
  };
  for (var oc in $b) $b[z](oc) && (nc[oc] = function(a) {
    return function() {
      var b = arguments;
      return this.forEach(function(c) {
        c[a][D](c, b)
      })
    }
  }(oc));
  return nc.attr = function(a, b) {
      if (a && c.is(a, V) && c.is(a[0], "object"))
        for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
      else
        for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
      return this
    }, nc.clear = function() {
      for (; this.length;) this.pop()
    }, nc.splice = function(a, b) {
      a = 0 > a ? O(this.length + a, 0) : a, b = O(0, P(this.length - a, b));
      var c, d = [],
        e = [],
        f = [];
      for (c = 2; c < arguments.length; c++) f.push(arguments[c]);
      for (c = 0; b > c; c++) e.push(this[a + c]);
      for (; c < this.length - a; c++) d.push(this[a + c]);
      var g = f.length;
      for (c = 0; c < g + d.length; c++) this.items[a + c] = this[a + c] = g > c ? f[c] : d[c - g];
      for (c = this.items.length = this.length -= b - g; this[c];) delete this[c++];
      return new mc(e)
    }, nc.exclude = function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (this[b] == a) return this.splice(b, 1), !0
    }, nc.animate = function(a, b, d, e) {
      (c.is(d, "function") || !d) && (e = d || null);
      var f, g, h = this.items.length,
        i = h,
        j = this;
      if (!h) return this;
      e && (g = function() {
        !--h && e.call(j)
      }), d = c.is(d, U) ? d : g;
      var k = c.animation(a, b, d, g);
      for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
      return this
    }, nc.insertAfter = function(a) {
      for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
      return this
    }, nc.getBBox = function() {
      for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
        if (!this.items[e].removed) {
          var f = this.items[e].getBBox();
          a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
        } return a = P[D](0, a), b = P[D](0, b), c = O[D](0, c), d = O[D](0, d), {
        x: a,
        y: b,
        x2: c,
        y2: d,
        width: c - a,
        height: d - b
      }
    }, nc.clone = function(a) {
      a = this.paper.set();
      for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
      return a
    }, nc.toString = function() {
      return "RaphaÃ«lâ€˜s set"
    }, nc.glow = function(a) {
      var b = this.paper.set();
      return this.forEach(function(c) {
        var d = c.glow(a);
        null != d && d.forEach(function(a) {
          b.push(a)
        })
      }), b
    }, nc.isPointInside = function(a, b) {
      var c = !1;
      return this.forEach(function(d) {
        return d.isPointInside(a, b) ? (console.log("runned"), c = !0, !1) : void 0
      }), c
    }, c.registerFont = function(a) {
      if (!a.face) return a;
      this.fonts = this.fonts || {};
      var b = {
          w: a.w,
          face: {},
          glyphs: {}
        },
        c = a.face["font-family"];
      for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d]);
      if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
        b.face["units-per-em"] = ab(a.face["units-per-em"], 10);
        for (var e in a.glyphs)
          if (a.glyphs[z](e)) {
            var f = a.glyphs[e];
            if (b.glyphs[e] = {
                w: f.w,
                k: {},
                d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                  return {
                    l: "L",
                    c: "C",
                    x: "z",
                    t: "m",
                    r: "l",
                    v: "c"
                  } [a] || "M"
                }) + "z"
              }, f.k)
              for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
          }
      }
      return a
    }, v.getFont = function(a, b, d, e) {
      if (e = e || "normal", d = d || "normal", b = +b || {
          normal: 400,
          bold: 700,
          lighter: 300,
          bolder: 800
        } [b] || 400, c.fonts) {
        var f = c.fonts[a];
        if (!f) {
          var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)", "i");
          for (var h in c.fonts)
            if (c.fonts[z](h) && g.test(h)) {
              f = c.fonts[h];
              break
            }
        }
        var i;
        if (f)
          for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != b || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
        return i
      }
    }, v.print = function(a, b, d, e, f, g, h, i) {
      g = g || "middle", h = O(P(h || 0, 1), -1), i = O(P(i || 1, 3), 1);
      var j, k = I(d)[J](G),
        l = 0,
        m = 0,
        n = G;
      if (c.is(e, "string") && (e = this.getFont(e)), e) {
        j = (f || 16) / e.face["units-per-em"];
        for (var o = e.face.bbox[J](w), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
          if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
          else {
            var v = m && e.glyphs[k[t - 1]] || {},
              x = e.glyphs[k[t]];
            l += m ? (v.w || e.w) + (v.k && v.k[k[t]] || 0) + e.w * h : 0, m = 1
          }
          x && x.d && (n += c.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (b - s) / j]))
        }
      }
      return this.path(n).attr({
        fill: "#000",
        stroke: "none"
      })
    }, v.add = function(a) {
      if (c.is(a, "array"))
        for (var b, d = this.set(), e = 0, f = a.length; f > e; e++) b = a[e] || {}, x[z](b.type) && d.push(this[b.type]().attr(b));
      return d
    }, c.format = function(a, b) {
      var d = c.is(b, V) ? [0][E](b) : arguments;
      return a && c.is(a, U) && d.length - 1 && (a = a.replace(y, function(a, b) {
        return null == d[++b] ? G : d[b]
      })), a || G
    }, c.fullfill = function() {
      var a = /\{([^\}]+)\}/g,
        b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        c = function(a, c, d) {
          var e = d;
          return c.replace(b, function(a, b, c, d, f) {
            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
          }), e = (null == e || e == d ? a : e) + ""
        };
      return function(b, d) {
        return String(b).replace(a, function(a, b) {
          return c(a, b, d)
        })
      }
    }(), c.ninja = function() {
      return B.was ? A.win.Raphael = B.is : delete Raphael, c
    }, c.st = nc,
    function(a, b, d) {
      function e() {
        /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
      }
      null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function() {
        a.removeEventListener(b, d, !1), a.readyState = "complete"
      }, !1), a.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function() {
      u = !0
    }),
    function() {
      if (c.svg) {
        var a = "hasOwnProperty",
          b = String,
          d = parseFloat,
          e = parseInt,
          f = Math,
          g = f.max,
          h = f.abs,
          i = f.pow,
          j = /[, ]+/,
          k = c.eve,
          l = "",
          m = " ",
          n = "http://www.w3.org/1999/xlink",
          o = {
            block: "M5,0 0,2.5 5,5z",
            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
            open: "M6,1 1,3.5 6,6",
            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
          },
          p = {};
        c.toString = function() {
          return "Your browser supports SVG.\nYou are running RaphaÃ«l " + this.version
        };
        var q = function(d, e) {
            if (e) {
              "string" == typeof d && (d = q(d));
              for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
            } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
            return d
          },
          r = function(a, e) {
            var j = "linear",
              k = a.id + e,
              m = .5,
              n = .5,
              o = a.node,
              p = a.paper,
              r = o.style,
              s = c._g.doc.getElementById(k);
            if (!s) {
              if (e = b(e).replace(c._radial_gradient, function(a, b, c) {
                  if (j = "radial", b && c) {
                    m = d(b), n = d(c);
                    var e = 2 * (n > .5) - 1;
                    i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                  }
                  return l
                }), e = e.split(/\s*\-\s*/), "linear" == j) {
                var t = e.shift();
                if (t = -d(t), isNaN(t)) return null;
                var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                  v = 1 / (g(h(u[2]), h(u[3])) || 1);
                u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
              }
              var w = c._parseDots(e);
              if (!w) return null;
              if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                s = q(j + "Gradient", {
                  id: k
                }), a.gradient = s, q(s, "radial" == j ? {
                  fx: m,
                  fy: n
                } : {
                  x1: u[0],
                  y1: u[1],
                  x2: u[2],
                  y2: u[3],
                  gradientTransform: a.matrix.invert()
                }), p.defs.appendChild(s);
                for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                  offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                  "stop-color": w[x].color || "#fff"
                }))
              }
            }
            return q(o, {
              fill: "url(#" + k + ")",
              opacity: 1,
              "fill-opacity": 1
            }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
          },
          s = function(a) {
            var b = a.getBBox(1);
            q(a.pattern, {
              patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
            })
          },
          t = function(d, e, f) {
            if ("path" == d.type) {
              for (var g, h, i, j, k, m = b(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  w = m[v];
                  break;
                case "wide":
                  y = 5;
                  break;
                case "narrow":
                  y = 2;
                  break;
                case "long":
                  x = 5;
                  break;
                case "short":
                  x = 2
              }
              if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                  fill: "none",
                  stroke: t.stroke
                }) : (j = i = x / 2, k = {
                  fill: t.stroke,
                  stroke: "none"
                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                var A = "raphael-marker-" + w,
                  B = "raphael-marker-" + r + w + x + y;
                c._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                  "stroke-linecap": "round",
                  d: o[w],
                  id: A
                })), p[A] = 1);
                var C, D = c._g.doc.getElementById(B);
                D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                  id: B,
                  markerHeight: y,
                  markerWidth: x,
                  orient: "auto",
                  refX: j,
                  refY: y / 2
                }), C = q(q("use"), {
                  "xlink:href": "#" + A,
                  transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                  "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                var E = i * ("diamond" != w && "oval" != w);
                f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - E * u) : (g = E * u, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = c.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
              } else f ? (g = d._.arrows.startdx * u || 0, h = c.getTotalLength(t.path) - g) : (g = 0, h = c.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                d: c.getSubpath(t.path, g, h)
              }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
              for (k in p)
                if (p[a](k) && !p[k]) {
                  var F = c._g.doc.getElementById(k);
                  F && F.parentNode.removeChild(F)
                }
            }
          },
          u = {
            "": [0],
            none: [0],
            "-": [3, 1],
            ".": [1, 1],
            "-.": [3, 1, 1, 1],
            "-..": [3, 1, 1, 1, 1, 1],
            ". ": [1, 3],
            "- ": [4, 3],
            "--": [8, 3],
            "- .": [4, 3, 1, 3],
            "--.": [8, 3, 1, 3],
            "--..": [8, 3, 1, 3, 1, 3]
          },
          v = function(a, c, d) {
            if (c = u[b(c).toLowerCase()]) {
              for (var e = a.attrs["stroke-width"] || "1", f = {
                  round: e,
                  square: e,
                  butt: 0
                } [a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
              q(a.node, {
                "stroke-dasharray": g.join(",")
              })
            }
          },
          w = function(d, f) {
            var i = d.node,
              k = d.attrs,
              m = i.style.visibility;
            i.style.visibility = "hidden";
            for (var o in f)
              if (f[a](o)) {
                if (!c._availableAttrs[a](o)) continue;
                var p = f[o];
                switch (k[o] = p, o) {
                  case "blur":
                    d.blur(p);
                    break;
                  case "href":
                  case "title":
                    var u = q("title"),
                      w = c._g.doc.createTextNode(p);
                    u.appendChild(w), i.appendChild(u);
                    break;
                  case "target":
                    var x = i.parentNode;
                    if ("a" != x.tagName.toLowerCase()) {
                      var u = q("a");
                      x.insertBefore(u, i), u.appendChild(i), x = u
                    }
                    "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                    break;
                  case "cursor":
                    i.style.cursor = p;
                    break;
                  case "transform":
                    d.transform(p);
                    break;
                  case "arrow-start":
                    t(d, p);
                    break;
                  case "arrow-end":
                    t(d, p, 1);
                    break;
                  case "clip-rect":
                    var z = b(p).split(j);
                    if (4 == z.length) {
                      d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                      var A = q("clipPath"),
                        B = q("rect");
                      A.id = c.createUUID(), q(B, {
                        x: z[0],
                        y: z[1],
                        width: z[2],
                        height: z[3]
                      }), A.appendChild(B), d.paper.defs.appendChild(A), q(i, {
                        "clip-path": "url(#" + A.id + ")"
                      }), d.clip = B
                    }
                    if (!p) {
                      var C = i.getAttribute("clip-path");
                      if (C) {
                        var D = c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g, l));
                        D && D.parentNode.removeChild(D), q(i, {
                          "clip-path": l
                        }), delete d.clip
                      }
                    }
                    break;
                  case "path":
                    "path" == d.type && (q(i, {
                      d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                    }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                    break;
                  case "width":
                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                    o = "x", p = k.x;
                  case "x":
                    k.fx && (p = -k.x - (k.width || 0));
                  case "rx":
                    if ("rx" == o && "rect" == d.type) break;
                  case "cx":
                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                    break;
                  case "height":
                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                    o = "y", p = k.y;
                  case "y":
                    k.fy && (p = -k.y - (k.height || 0));
                  case "ry":
                    if ("ry" == o && "rect" == d.type) break;
                  case "cy":
                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                    break;
                  case "r":
                    "rect" == d.type ? q(i, {
                      rx: p,
                      ry: p
                    }) : i.setAttribute(o, p), d._.dirty = 1;
                    break;
                  case "src":
                    "image" == d.type && i.setAttributeNS(n, "href", p);
                    break;
                  case "stroke-width":
                    (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                    break;
                  case "stroke-dasharray":
                    v(d, p, f);
                    break;
                  case "fill":
                    var E = b(p).match(c._ISURL);
                    if (E) {
                      A = q("pattern");
                      var F = q("image");
                      A.id = c.createUUID(), q(A, {
                          x: 0,
                          y: 0,
                          patternUnits: "userSpaceOnUse",
                          height: 1,
                          width: 1
                        }), q(F, {
                          x: 0,
                          y: 0,
                          "xlink:href": E[1]
                        }), A.appendChild(F),
                        function(a) {
                          c._preload(E[1], function() {
                            var b = this.offsetWidth,
                              c = this.offsetHeight;
                            q(a, {
                              width: b,
                              height: c
                            }), q(F, {
                              width: b,
                              height: c
                            }), d.paper.safari()
                          })
                        }(A), d.paper.defs.appendChild(A), q(i, {
                          fill: "url(#" + A.id + ")"
                        }), d.pattern = A, d.pattern && s(d);
                      break
                    }
                    var G = c.getRGB(p);
                    if (G.error) {
                      if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                        if ("opacity" in k || "fill-opacity" in k) {
                          var H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                          if (H) {
                            var I = H.getElementsByTagName("stop");
                            q(I[I.length - 1], {
                              "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                            })
                          }
                        }
                        k.gradient = p, k.fill = "none";
                        break
                      }
                    } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                      opacity: k.opacity
                    }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                      "fill-opacity": k["fill-opacity"]
                    });
                    G[a]("opacity") && q(i, {
                      "fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                    });
                  case "stroke":
                    G = c.getRGB(p), i.setAttribute(o, G.hex), "stroke" == o && G[a]("opacity") && q(i, {
                      "stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                    }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                    break;
                  case "gradient":
                    ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                    break;
                  case "opacity":
                    k.gradient && !k[a]("stroke-opacity") && q(i, {
                      "stroke-opacity": p > 1 ? p / 100 : p
                    });
                  case "fill-opacity":
                    if (k.gradient) {
                      H = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length - 1], {
                        "stop-opacity": p
                      }));
                      break
                    }
                    default:
                      "font-size" == o && (p = e(p, 10) + "px");
                      var J = o.replace(/(\-.)/g, function(a) {
                        return a.substring(1).toUpperCase()
                      });
                      i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p)
                }
              } y(d, f), i.style.visibility = m
          },
          x = 1.2,
          y = function(d, f) {
            if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
              var g = d.attrs,
                h = d.node,
                i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
              if (f[a]("text")) {
                for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                for (var j, k = b(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                  dy: i * x,
                  x: g.x
                }), j.appendChild(c._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
              } else
                for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                  dy: i * x,
                  x: g.x
                }) : q(m[0], {
                  dy: 0
                });
              q(h, {
                x: g.x,
                y: g.y
              }), d._.dirty = 1;
              var p = d._getBBox(),
                r = g.y - (p.y + p.height / 2);
              r && c.is(r, "finite") && q(m[0], {
                dy: r
              })
            }
          },
          z = function(a, b) {
            this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
              transform: [],
              sx: 1,
              sy: 1,
              deg: 0,
              dx: 0,
              dy: 0,
              dirty: 1
            }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
          },
          A = c.el;
        z.prototype = A, A.constructor = z, c._engine.path = function(a, b) {
          var c = q("path");
          b.canvas && b.canvas.appendChild(c);
          var d = new z(c, b);
          return d.type = "path", w(d, {
            fill: "none",
            stroke: "#000",
            path: a
          }), d
        }, A.rotate = function(a, c, e) {
          if (this.removed) return this;
          if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
            var f = this.getBBox(1);
            c = f.x + f.width / 2, e = f.y + f.height / 2
          }
          return this.transform(this._.transform.concat([
            ["r", a, c, e]
          ])), this
        }, A.scale = function(a, c, e, f) {
          if (this.removed) return this;
          if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
          return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
            ["s", a, c, e, f]
          ])), this
        }, A.translate = function(a, c) {
          return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
            ["t", a, c]
          ])), this)
        }, A.transform = function(b) {
          var d = this._;
          if (null == b) return d.transform;
          if (c._extractTransform(this, b), this.clip && q(this.clip, {
              transform: this.matrix.invert()
            }), this.pattern && s(this), this.node && q(this.node, {
              transform: this.matrix
            }), 1 != d.sx || 1 != d.sy) {
            var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
              "stroke-width": e
            })
          }
          return this
        }, A.hide = function() {
          return !this.removed && this.paper.safari(this.node.style.display = "none"), this
        }, A.show = function() {
          return !this.removed && this.paper.safari(this.node.style.display = ""), this
        }, A.remove = function() {
          if (!this.removed && this.node.parentNode) {
            var a = this.paper;
            a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
            this.removed = !0
          }
        }, A._getBBox = function() {
          if ("none" == this.node.style.display) {
            this.show();
            var a = !0
          }
          var b = {};
          try {
            b = this.node.getBBox()
          } catch (c) {} finally {
            b = b || {}
          }
          return a && this.hide(), b
        }, A.attr = function(b, d) {
          if (this.removed) return this;
          if (null == b) {
            var e = {};
            for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
            return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
          }
          if (null == d && c.is(b, "string")) {
            if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            if ("transform" == b) return this._.transform;
            for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
            return l - 1 ? h : h[g[0]]
          }
          if (null == d && c.is(b, "array")) {
            for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
            return h
          }
          if (null != d) {
            var m = {};
            m[b] = d
          } else null != b && c.is(b, "object") && (m = b);
          for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
          for (n in this.paper.customAttributes)
            if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
              var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
              this.attrs[n] = m[n];
              for (var p in o) o[a](p) && (m[p] = o[p])
            } return w(this, m), this
        }, A.toFront = function() {
          if (this.removed) return this;
          "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
          var a = this.paper;
          return a.top != this && c._tofront(this, a), this
        }, A.toBack = function() {
          if (this.removed) return this;
          var a = this.node.parentNode;
          return "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper), this.paper, this
        }, A.insertAfter = function(a) {
          if (this.removed) return this;
          var b = a.node || a[a.length - 1].node;
          return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
        }, A.insertBefore = function(a) {
          if (this.removed) return this;
          var b = a.node || a[0].node;
          return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
        }, A.blur = function(a) {
          var b = this;
          if (0 !== +a) {
            var d = q("filter"),
              e = q("feGaussianBlur");
            b.attrs.blur = a, d.id = c.createUUID(), q(e, {
              stdDeviation: +a || 1.5
            }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
              filter: "url(#" + d.id + ")"
            })
          } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
          return b
        }, c._engine.circle = function(a, b, c, d) {
          var e = q("circle");
          a.canvas && a.canvas.appendChild(e);
          var f = new z(e, a);
          return f.attrs = {
            cx: b,
            cy: c,
            r: d,
            fill: "none",
            stroke: "#000"
          }, f.type = "circle", q(e, f.attrs), f
        }, c._engine.rect = function(a, b, c, d, e, f) {
          var g = q("rect");
          a.canvas && a.canvas.appendChild(g);
          var h = new z(g, a);
          return h.attrs = {
            x: b,
            y: c,
            width: d,
            height: e,
            r: f || 0,
            rx: f || 0,
            ry: f || 0,
            fill: "none",
            stroke: "#000"
          }, h.type = "rect", q(g, h.attrs), h
        }, c._engine.ellipse = function(a, b, c, d, e) {
          var f = q("ellipse");
          a.canvas && a.canvas.appendChild(f);
          var g = new z(f, a);
          return g.attrs = {
            cx: b,
            cy: c,
            rx: d,
            ry: e,
            fill: "none",
            stroke: "#000"
          }, g.type = "ellipse", q(f, g.attrs), g
        }, c._engine.image = function(a, b, c, d, e, f) {
          var g = q("image");
          q(g, {
            x: c,
            y: d,
            width: e,
            height: f,
            preserveAspectRatio: "none"
          }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
          var h = new z(g, a);
          return h.attrs = {
            x: c,
            y: d,
            width: e,
            height: f,
            src: b
          }, h.type = "image", h
        }, c._engine.text = function(a, b, d, e) {
          var f = q("text");
          a.canvas && a.canvas.appendChild(f);
          var g = new z(f, a);
          return g.attrs = {
            x: b,
            y: d,
            "text-anchor": "middle",
            text: e,
            font: c._availableAttrs.font,
            stroke: "none",
            fill: "#000"
          }, g.type = "text", w(g, g.attrs), g
        }, c._engine.setSize = function(a, b) {
          return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
        }, c._engine.create = function() {
          var a = c._getContainer.apply(0, arguments),
            b = a && a.container,
            d = a.x,
            e = a.y,
            f = a.width,
            g = a.height;
          if (!b) throw new Error("SVG container not found.");
          var h, i = q("svg"),
            j = "overflow:hidden;";
          return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
            height: g,
            version: 1.1,
            width: f,
            xmlns: "http://www.w3.org/2000/svg"
          }), 1 == b ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i)), b = new c._Paper, b.width = f, b.height = g, b.canvas = i, b.clear(), b._left = b._top = 0, h && (b.renderfix = function() {}), b.renderfix(), b
        }, c._engine.setViewBox = function(a, b, c, d, e) {
          k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
          var f, h, i = g(c / this.width, d / this.height),
            j = this.top,
            l = e ? "meet" : "xMinYMin";
          for (null == a ? (this._vbSize && (i = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = i, f = a + m + b + m + c + m + d), q(this.canvas, {
              viewBox: f,
              preserveAspectRatio: l
            }); i && j;) h = "stroke-width" in j.attrs ? j.attrs["stroke-width"] : 1, j.attr({
            "stroke-width": h
          }), j._.dirty = 1, j._.dirtyT = 1, j = j.prev;
          return this._viewBox = [a, b, c, d, !!e], this
        }, c.prototype.renderfix = function() {
          var a, b = this.canvas,
            c = b.style;
          try {
            a = b.getScreenCTM() || b.createSVGMatrix()
          } catch (d) {
            a = b.createSVGMatrix()
          }
          var e = -a.e % 1,
            f = -a.f % 1;
          (e || f) && (e && (this._left = (this._left + e) % 1, c.left = this._left + "px"), f && (this._top = (this._top + f) % 1, c.top = this._top + "px"))
        }, c.prototype.clear = function() {
          c.eve("raphael.clear", this);
          for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
          this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with RaphaÃ«l " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
        }, c.prototype.remove = function() {
          k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
          for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
        };
        var B = c.st;
        for (var C in A) A[a](C) && !B[a](C) && (B[C] = function(a) {
          return function() {
            var b = arguments;
            return this.forEach(function(c) {
              c[a].apply(c, b)
            })
          }
        }(C))
      }
    }(),
    function() {
      if (c.vml) {
        var a = "hasOwnProperty",
          b = String,
          d = parseFloat,
          e = Math,
          f = e.round,
          g = e.max,
          h = e.min,
          i = e.abs,
          j = "fill",
          k = /[, ]+/,
          l = c.eve,
          m = " progid:DXImageTransform.Microsoft",
          n = " ",
          o = "",
          p = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
          },
          q = /([clmz]),?([^clmz]*)/gi,
          r = / progid:\S+Blur\([^\)]+\)/g,
          s = /-?[^,\s-]+/g,
          t = "position:absolute;left:0;top:0;width:1px;height:1px",
          u = 21600,
          v = {
            path: 1,
            rect: 1,
            image: 1
          },
          w = {
            circle: 1,
            ellipse: 1
          },
          x = function(a) {
            var d = /[ahqstv]/gi,
              e = c._pathToAbsolute;
            if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
              var g = b(a).replace(q, function(a, b, c) {
                var d = [],
                  e = "m" == b.toLowerCase(),
                  g = p[b];
                return c.replace(s, function(a) {
                  e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                }), g + d
              });
              return g
            }
            var h, i, j = e(a);
            g = [];
            for (var k = 0, l = j.length; l > k; k++) {
              h = j[k], i = j[k][0].toLowerCase(), "z" == i && (i = "x");
              for (var m = 1, r = h.length; r > m; m++) i += f(h[m] * u) + (m != r - 1 ? "," : o);
              g.push(i)
            }
            return g.join(n)
          },
          y = function(a, b, d) {
            var e = c.matrix();
            return e.rotate(-a, .5, .5), {
              dx: e.x(b, d),
              dy: e.y(b, d)
            }
          },
          z = function(a, b, c, d, e, f) {
            var g = a._,
              h = a.matrix,
              k = g.fillpos,
              l = a.node,
              m = l.style,
              o = 1,
              p = "",
              q = u / b,
              r = u / c;
            if (m.visibility = "hidden", b && c) {
              if (l.coordsize = i(q) + n + i(r), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                var s = y(f, d, e);
                d = s.dx, e = s.dy
              }
              if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -q + n + e * -r, k || g.fillsize) {
                var t = l.getElementsByTagName(j);
                t = t && t[0], l.removeChild(t), k && (s = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), t.position = s.dx * o + n + s.dy * o), g.fillsize && (t.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(t)
              }
              m.visibility = "visible"
            }
          };
        c.toString = function() {
          return "Your browser doesnâ€™t support SVG. Falling down to VML.\nYou are running RaphaÃ«l " + this.version
        };
        var A = function(a, c, d) {
            for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                h = e[g];
                break;
              case "wide":
              case "narrow":
                j = e[g];
                break;
              case "long":
              case "short":
                i = e[g]
            }
            var k = a.node.getElementsByTagName("stroke")[0];
            k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
          },
          B = function(e, i) {
            e.attrs = e.attrs || {};
            var l = e.node,
              m = e.attrs,
              p = l.style,
              q = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
              r = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
              s = e;
            for (var t in i) i[a](t) && (m[t] = i[t]);
            if (q && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
              var y = +m.cx,
                B = +m.cy,
                D = +m.rx || +m.r || 0,
                E = +m.ry || +m.r || 0;
              l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((y - D) * u), f((B - E) * u), f((y + D) * u), f((B + E) * u), f(y * u)), e._.dirty = 1
            }
            if ("clip-rect" in i) {
              var G = b(i["clip-rect"]).split(k);
              if (4 == G.length) {
                G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                var H = l.clipRect || c._g.doc.createElement("div"),
                  I = H.style;
                I.clip = c.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
              }
              i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
            }
            if (e.textpath) {
              var J = e.textpath.style;
              i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
            }
            if ("arrow-start" in i && A(s, i["arrow-start"]), "arrow-end" in i && A(s, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
              var K = l.getElementsByTagName(j),
                L = !1;
              if (K = K && K[0], !K && (L = K = F(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), (null == K.on || "none" == i.fill || null === i.fill) && (K.on = !1), K.on && i.fill) {
                var M = b(i.fill).match(c._ISURL);
                if (M) {
                  K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = M[1], K.type = "tile";
                  var N = e.getBBox(1);
                  K.position = N.x + n + N.y, e._.fillpos = [N.x, N.y], c._preload(M[1], function() {
                    e._.fillsize = [this.offsetWidth, this.offsetHeight]
                  })
                } else K.color = c.getRGB(i.fill).hex, K.src = o, K.type = "solid", c.getRGB(i.fill).error && (s.type in {
                  circle: 1,
                  ellipse: 1
                } || "r" != b(i.fill).charAt()) && C(s, i.fill, K) && (m.fill = "none", m.gradient = i.fill, K.rotate = !1)
              }
              if ("fill-opacity" in i || "opacity" in i) {
                var O = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                O = h(g(O, 0), 1), K.opacity = O, K.src && (K.color = "none")
              }
              l.appendChild(K);
              var P = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                Q = !1;
              !P && (Q = P = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (P.on = !0), ("none" == i.stroke || null === i.stroke || null == P.on || 0 == i.stroke || 0 == i["stroke-width"]) && (P.on = !1);
              var R = c.getRGB(i.stroke);
              P.on && i.stroke && (P.color = R.hex), O = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+R.o + 1 || 2) - 1);
              var S = .75 * (d(i["stroke-width"]) || 1);
              if (O = h(g(O, 0), 1), null == i["stroke-width"] && (S = m["stroke-width"]), i["stroke-width"] && (P.weight = S), S && 1 > S && (O *= S) && (P.weight = 1), P.opacity = O, i["stroke-linejoin"] && (P.joinstyle = i["stroke-linejoin"] || "miter"), P.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (P.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), i["stroke-dasharray"]) {
                var T = {
                  "-": "shortdash",
                  ".": "shortdot",
                  "-.": "shortdashdot",
                  "-..": "shortdashdotdot",
                  ". ": "dot",
                  "- ": "dash",
                  "--": "longdash",
                  "- .": "dashdot",
                  "--.": "longdashdot",
                  "--..": "longdashdotdot"
                };
                P.dashstyle = T[a](i["stroke-dasharray"]) ? T[i["stroke-dasharray"]] : o
              }
              Q && l.appendChild(P)
            }
            if ("text" == s.type) {
              s.paper.canvas.style.display = o;
              var U = s.paper.span,
                V = 100,
                W = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
              p = U.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), W = d(m["font-size"] || W && W[0]) || 10, p.fontSize = W * V + "px", s.textpath.string && (U.innerHTML = b(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
              var X = U.getBoundingClientRect();
              s.W = m.w = (X.right - X.left) / V, s.H = m.h = (X.bottom - X.top) / V, s.X = m.x, s.Y = m.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
              for (var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, $ = Y.length; $ > Z; Z++)
                if (Y[Z] in i) {
                  s._.dirty = 1;
                  break
                } switch (m["text-anchor"]) {
                case "start":
                  s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                  break;
                case "end":
                  s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                  break;
                default:
                  s.textpath.style["v-text-align"] = "center", s.bbx = 0
              }
              s.textpath.style["v-text-kern"] = !0
            }
          },
          C = function(a, f, g) {
            a.attrs = a.attrs || {};
            var h = (a.attrs, Math.pow),
              i = "linear",
              j = ".5 .5";
            if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function(a, b, c) {
                return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + n + c), o
              }), f = f.split(/\s*\-\s*/), "linear" == i) {
              var k = f.shift();
              if (k = -d(k), isNaN(k)) return null
            }
            var l = c._parseDots(f);
            if (!l) return null;
            if (a = a.shape || a.node, l.length) {
              a.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
              for (var m = [], p = 0, q = l.length; q > p; p++) l[p].offset && m.push(l[p].offset + n + l[p].color);
              g.colors = m.length ? m.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), a.appendChild(g)
            }
            return 1
          },
          D = function(a, b) {
            this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
              transform: [],
              sx: 1,
              sy: 1,
              dx: 0,
              dy: 0,
              deg: 0,
              dirty: 1,
              dirtyT: 1
            }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
          },
          E = c.el;
        D.prototype = E, E.constructor = D, E.transform = function(a) {
          if (null == a) return this._.transform;
          var d, e = this.paper._viewBoxShift,
            f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : o;
          e && (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, f + a);
          var g, h = this.matrix.clone(),
            i = this.skew,
            j = this.node,
            k = ~b(this.attrs.fill).indexOf("-"),
            l = !b(this.attrs.fill).indexOf("url(");
          if (h.translate(1, 1), l || k || "image" == this.type)
            if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
              j.style.filter = h.toFilter();
              var m = this.getBBox(),
                p = this.getBBox(1),
                q = m.x - p.x,
                r = m.y - p.y;
              j.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
            } else j.style.filter = o, z(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
          else j.style.filter = o, i.matrix = b(h), i.offset = h.offset();
          return d && (this._.transform = d), this
        }, E.rotate = function(a, c, e) {
          if (this.removed) return this;
          if (null != a) {
            if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
              var f = this.getBBox(1);
              c = f.x + f.width / 2, e = f.y + f.height / 2
            }
            return this._.dirtyT = 1, this.transform(this._.transform.concat([
              ["r", a, c, e]
            ])), this
          }
        }, E.translate = function(a, c) {
          return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([
            ["t", a, c]
          ])), this)
        }, E.scale = function(a, c, e, f) {
          if (this.removed) return this;
          if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
          return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
            ["s", a, c, e, f]
          ])), this._.dirtyT = 1, this
        }, E.hide = function() {
          return !this.removed && (this.node.style.display = "none"), this
        }, E.show = function() {
          return !this.removed && (this.node.style.display = o), this
        }, E._getBBox = function() {
          return this.removed ? {} : {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
          }
        }, E.remove = function() {
          if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
            this.removed = !0
          }
        }, E.attr = function(b, d) {
          if (this.removed) return this;
          if (null == b) {
            var e = {};
            for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
            return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
          }
          if (null == d && c.is(b, "string")) {
            if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
            return m - 1 ? h : h[g[0]]
          }
          if (this.attrs && null == d && c.is(b, "array")) {
            for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
            return h
          }
          var n;
          null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
          for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
          if (n) {
            for (o in this.paper.customAttributes)
              if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                this.attrs[o] = n[o];
                for (var q in p) p[a](q) && (n[q] = p[q])
              } n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
          }
          return this
        }, E.toFront = function() {
          return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
        }, E.toBack = function() {
          return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
        }, E.insertAfter = function(a) {
          return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
        }, E.insertBefore = function(a) {
          return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
        }, E.blur = function(a) {
          var b = this.node.runtimeStyle,
            d = b.filter;
          return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
        }, c._engine.path = function(a, b) {
          var c = F("shape");
          c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
          var d = new D(c, b),
            e = {
              fill: "none",
              stroke: "#000"
            };
          a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
          var f = F("skew");
          return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
        }, c._engine.rect = function(a, b, d, e, f, g) {
          var h = c._rectPath(b, d, e, f, g),
            i = a.path(h),
            j = i.attrs;
          return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
        }, c._engine.ellipse = function(a, b, c, d, e) {
          var f = a.path();
          return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
            cx: b,
            cy: c,
            rx: d,
            ry: e
          }), f
        }, c._engine.circle = function(a, b, c, d) {
          var e = a.path();
          return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
            cx: b,
            cy: c,
            r: d
          }), e
        }, c._engine.image = function(a, b, d, e, f, g) {
          var h = c._rectPath(d, e, f, g),
            i = a.path(h).attr({
              stroke: "none"
            }),
            k = i.attrs,
            l = i.node,
            m = l.getElementsByTagName(j)[0];
          return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
        }, c._engine.text = function(a, d, e, g) {
          var h = F("shape"),
            i = F("path"),
            j = F("textpath");
          d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
          var k = new D(h, a),
            l = {
              fill: "#000",
              stroke: "none",
              font: c._availableAttrs.font,
              text: g
            };
          k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
          var m = F("skew");
          return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
        }, c._engine.setSize = function(a, b) {
          var d = this.canvas.style;
          return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
        }, c._engine.setViewBox = function(a, b, d, e, f) {
          c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
          var h, i, j = this.width,
            k = this.height,
            l = 1 / g(d / j, e / k);
          return f && (h = k / e, i = j / d, j > d * h && (a -= (j - d * h) / 2 / h), k > e * i && (b -= (k - e * i) / 2 / i)), this._viewBox = [a, b, d, e, !!f], this._viewBoxShift = {
            dx: -a,
            dy: -b,
            scale: l
          }, this.forEach(function(a) {
            a.transform("...")
          }), this
        };
        var F;
        c._engine.initWin = function(a) {
          var b = a.document;
          b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
          try {
            !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
              return b.createElement("<rvml:" + a + ' class="rvml">')
            }
          } catch (c) {
            F = function(a) {
              return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
          }
        }, c._engine.initWin(c._g.win), c._engine.create = function() {
          var a = c._getContainer.apply(0, arguments),
            b = a.container,
            d = a.height,
            e = a.width,
            f = a.x,
            g = a.y;
          if (!b) throw new Error("VML container not found.");
          var h = new c._Paper,
            i = h.canvas = c._g.doc.createElement("div"),
            j = i.style;
          return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 1e3 * u + n + 1e3 * u, h.coordorigin = "0 0", h.span = c._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == b ? (c._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : b.firstChild ? b.insertBefore(i, b.firstChild) : b.appendChild(i), h.renderfix = function() {}, h
        }, c.prototype.clear = function() {
          c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
        }, c.prototype.remove = function() {
          c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
          for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
          return !0
        };
        var G = c.st;
        for (var H in E) E[a](H) && !G[a](H) && (G[H] = function(a) {
          return function() {
            var b = arguments;
            return this.forEach(function(c) {
              c[a].apply(c, b)
            })
          }
        }(H))
      }
    }(), B.was ? A.win.Raphael = c : Raphael = c, c
});

/*!
 * Morris.js v0.5.0
 * Copyright 2014 Olly Smith All rights reserved.
 */

(function() {
  var a, b, c, d, e = [].slice,
    f = function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    },
    g = {}.hasOwnProperty,
    h = function(a, b) {
      function c() {
        this.constructor = a
      }
      for (var d in b) g.call(b, d) && (a[d] = b[d]);
      return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
    },
    i = [].indexOf || function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
    };
  b = window.Morris = {}, a = jQuery, b.EventEmitter = function() {
    function a() {}
    return a.prototype.on = function(a, b) {
      return null == this.handlers && (this.handlers = {}), null == this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b), this
    }, a.prototype.fire = function() {
      var a, b, c, d, f, g, h;
      if (c = arguments[0], a = 2 <= arguments.length ? e.call(arguments, 1) : [], null != this.handlers && null != this.handlers[c]) {
        for (g = this.handlers[c], h = [], d = 0, f = g.length; f > d; d++) b = g[d], h.push(b.apply(null, a));
        return h
      }
    }, a
  }(), b.commas = function(a) {
    var b, c, d, e;
    return null != a ? (d = 0 > a ? "-" : "", b = Math.abs(a), c = Math.floor(b).toFixed(0), d += c.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), e = b.toString(), e.length > c.length && (d += e.slice(c.length)), d) : "-"
  }, b.pad2 = function(a) {
    return (10 > a ? "0" : "") + a
  }, b.Grid = function(c) {
    function d(b) {
      this.resizeHandler = f(this.resizeHandler, this);
      var c = this;
      if (this.el = "string" == typeof b.element ? a(document.getElementById(b.element)) : a(b.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
      "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = a.extend({}, this.gridDefaults, this.defaults || {}, b), "string" == typeof this.options.units && (this.options.postUnits = b.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(a) {
        var b, d, e, f, g;
        return d = c.el.offset(), g = a.pageX - d.left, c.selectFrom ? (b = c.data[c.hitTest(Math.min(g, c.selectFrom))]._x, e = c.data[c.hitTest(Math.max(g, c.selectFrom))]._x, f = e - b, c.selectionRect.attr({
          x: b,
          width: f
        })) : c.fire("hovermove", g, a.pageY - d.top)
      }), this.el.bind("mouseleave", function() {
        return c.selectFrom && (c.selectionRect.hide(), c.selectFrom = null), c.fire("hoverout")
      }), this.el.bind("touchstart touchmove touchend", function(a) {
        var b, d;
        return d = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], b = c.el.offset(), c.fire("hover", d.pageX - b.left, d.pageY - b.top), d
      }), this.el.bind("click", function(a) {
        var b;
        return b = c.el.offset(), c.fire("gridclick", a.pageX - b.left, a.pageY - b.top)
      }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
        fill: this.options.rangeSelectColor,
        stroke: !1
      }).toBack().hide(), this.el.bind("mousedown", function(a) {
        var b;
        return b = c.el.offset(), c.startRange(a.pageX - b.left)
      }), this.el.bind("mouseup", function(a) {
        var b;
        return b = c.el.offset(), c.endRange(a.pageX - b.left), c.fire("hovermove", a.pageX - b.left, a.pageY - b.top)
      })), this.options.resize && a(window).bind("resize", function() {
        return null != c.timeoutId && window.clearTimeout(c.timeoutId), c.timeoutId = window.setTimeout(c.resizeHandler, 100)
      }), this.postInit && this.postInit()
    }
    return h(d, c), d.prototype.gridDefaults = {
      dateFormat: null,
      axes: !0,
      grid: !0,
      gridLineColor: "#aaa",
      gridStrokeWidth: .5,
      gridTextColor: "#888",
      gridTextSize: 12,
      gridTextFamily: "sans-serif",
      gridTextWeight: "normal",
      hideHover: !1,
      yLabelFormat: null,
      xLabelAngle: 0,
      numLines: 5,
      padding: 25,
      parseTime: !0,
      postUnits: "",
      preUnits: "",
      ymax: "auto",
      ymin: "auto 0",
      goals: [],
      goalStrokeWidth: 1,
      goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
      events: [],
      eventStrokeWidth: 1,
      eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
      rangeSelect: null,
      rangeSelectColor: "#eef",
      resize: !1
    }, d.prototype.setData = function(a, c) {
      var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
      return null == c && (c = !0), this.options.data = a, null == a || 0 === a.length ? (this.data = [], this.raphael.clear(), null != this.hover && this.hover.hide(), void 0) : (o = this.cumulative ? 0 : null, p = this.cumulative ? 0 : null, this.options.goals.length > 0 && (h = Math.min.apply(Math, this.options.goals), g = Math.max.apply(Math, this.options.goals), p = null != p ? Math.min(p, h) : h, o = null != o ? Math.max(o, g) : g), this.data = function() {
        var c, d, g;
        for (g = [], f = c = 0, d = a.length; d > c; f = ++c) j = a[f], i = {
          src: j
        }, i.label = j[this.options.xkey], this.options.parseTime ? (i.x = b.parseDate(i.label), this.options.dateFormat ? i.label = this.options.dateFormat(i.x) : "number" == typeof i.label && (i.label = new Date(i.label).toString())) : (i.x = f, this.options.xLabelFormat && (i.label = this.options.xLabelFormat(i))), l = 0, i.y = function() {
          var a, b, c, d;
          for (c = this.options.ykeys, d = [], e = a = 0, b = c.length; b > a; e = ++a) n = c[e], q = j[n], "string" == typeof q && (q = parseFloat(q)), null != q && "number" != typeof q && (q = null), null != q && (this.cumulative ? l += q : null != o ? (o = Math.max(q, o), p = Math.min(q, p)) : o = p = q), this.cumulative && null != l && (o = Math.max(l, o), p = Math.min(l, p)), d.push(q);
          return d
        }.call(this), g.push(i);
        return g
      }.call(this), this.options.parseTime && (this.data = this.data.sort(function(a, b) {
        return (a.x > b.x) - (b.x > a.x)
      })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.events = this.options.parseTime ? function() {
        var a, c, e, f;
        for (e = this.options.events, f = [], a = 0, c = e.length; c > a; a++) d = e[a], f.push(b.parseDate(d));
        return f
      }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", p), this.ymax = this.yboundary("max", o), this.ymin === this.ymax && (p && (this.ymin -= 1), this.ymax += 1), ((r = this.options.axes) === !0 || "both" === r || "y" === r || this.options.grid === !0) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (k = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() {
        var a, b, c, d;
        for (d = [], m = a = b = this.ymin, c = this.ymax; k > 0 ? c >= a : a >= c; m = a += k) d.push(m);
        return d
      }.call(this))), this.dirty = !0, c ? this.redraw() : void 0)
    }, d.prototype.yboundary = function(a, b) {
      var c, d;
      return c = this.options["y" + a], "string" == typeof c ? "auto" === c.slice(0, 4) ? c.length > 5 ? (d = parseInt(c.slice(5), 10), null == b ? d : Math[a](b, d)) : null != b ? b : 0 : parseInt(c, 10) : c
    }, d.prototype.autoGridLines = function(a, b, c) {
      var d, e, f, g, h, i, j, k, l;
      return h = b - a, l = Math.floor(Math.log(h) / Math.log(10)), j = Math.pow(10, l), e = Math.floor(a / j) * j, d = Math.ceil(b / j) * j, i = (d - e) / (c - 1), 1 === j && i > 1 && Math.ceil(i) !== i && (i = Math.ceil(i), d = e + i * (c - 1)), 0 > e && d > 0 && (e = Math.floor(a / i) * i, d = Math.ceil(b / i) * i), 1 > i ? (g = Math.floor(Math.log(i) / Math.log(10)), f = function() {
        var a, b;
        for (b = [], k = a = e; i > 0 ? d >= a : a >= d; k = a += i) b.push(parseFloat(k.toFixed(1 - g)));
        return b
      }()) : f = function() {
        var a, b;
        for (b = [], k = a = e; i > 0 ? d >= a : a >= d; k = a += i) b.push(k);
        return b
      }(), f
    }, d.prototype._calc = function() {
      var a, b, c, d, e, f, g, h;
      return e = this.el.width(), c = this.el.height(), (this.elementWidth !== e || this.elementHeight !== c || this.dirty) && (this.elementWidth = e, this.elementHeight = c, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, ((g = this.options.axes) === !0 || "both" === g || "y" === g) && (f = function() {
        var a, c, d, e;
        for (d = this.grid, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(this.measureText(this.yAxisFormat(b)).width);
        return e
      }.call(this), this.left += Math.max.apply(Math, f)), ((h = this.options.axes) === !0 || "both" === h || "x" === h) && (a = function() {
        var a, b, c;
        for (c = [], d = a = 0, b = this.data.length; b >= 0 ? b > a : a > b; d = b >= 0 ? ++a : --a) c.push(this.measureText(this.data[d].text, -this.options.xLabelAngle).height);
        return c
      }.call(this), this.bottom -= Math.max.apply(Math, a)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0
    }, d.prototype.transY = function(a) {
      return this.bottom - (a - this.ymin) * this.dy
    }, d.prototype.transX = function(a) {
      return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (a - this.xmin) * this.dx
    }, d.prototype.redraw = function() {
      return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0
    }, d.prototype.measureText = function(a, b) {
      var c, d;
      return null == b && (b = 0), d = this.raphael.text(100, 100, a).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(b), c = d.getBBox(), d.remove(), c
    }, d.prototype.yAxisFormat = function(a) {
      return this.yLabelFormat(a)
    }, d.prototype.yLabelFormat = function(a) {
      return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(a) : "" + this.options.preUnits + b.commas(a) + this.options.postUnits
    }, d.prototype.drawGrid = function() {
      var a, b, c, d, e, f, g, h;
      if (this.options.grid !== !1 || (e = this.options.axes) === !0 || "both" === e || "y" === e) {
        for (f = this.grid, h = [], c = 0, d = f.length; d > c; c++) a = f[c], b = this.transY(a), ((g = this.options.axes) === !0 || "both" === g || "y" === g) && this.drawYAxisLabel(this.left - this.options.padding / 2, b, this.yAxisFormat(a)), this.options.grid ? h.push(this.drawGridLine("M" + this.left + "," + b + "H" + (this.left + this.width))) : h.push(void 0);
        return h
      }
    }, d.prototype.drawGoals = function() {
      var a, b, c, d, e, f, g;
      for (f = this.options.goals, g = [], c = d = 0, e = f.length; e > d; c = ++d) b = f[c], a = this.options.goalLineColors[c % this.options.goalLineColors.length], g.push(this.drawGoal(b, a));
      return g
    }, d.prototype.drawEvents = function() {
      var a, b, c, d, e, f, g;
      for (f = this.events, g = [], c = d = 0, e = f.length; e > d; c = ++d) b = f[c], a = this.options.eventLineColors[c % this.options.eventLineColors.length], g.push(this.drawEvent(b, a));
      return g
    }, d.prototype.drawGoal = function(a, b) {
      return this.raphael.path("M" + this.left + "," + this.transY(a) + "H" + this.right).attr("stroke", b).attr("stroke-width", this.options.goalStrokeWidth)
    }, d.prototype.drawEvent = function(a, b) {
      return this.raphael.path("M" + this.transX(a) + "," + this.bottom + "V" + this.top).attr("stroke", b).attr("stroke-width", this.options.eventStrokeWidth)
    }, d.prototype.drawYAxisLabel = function(a, b, c) {
      return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
    }, d.prototype.drawGridLine = function(a) {
      return this.raphael.path(a).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
    }, d.prototype.startRange = function(a) {
      return this.hover.hide(), this.selectFrom = a, this.selectionRect.attr({
        x: a,
        width: 0
      }).show()
    }, d.prototype.endRange = function(a) {
      var b, c;
      return this.selectFrom ? (c = Math.min(this.selectFrom, a), b = Math.max(this.selectFrom, a), this.options.rangeSelect.call(this.el, {
        start: this.data[this.hitTest(c)].x,
        end: this.data[this.hitTest(b)].x
      }), this.selectFrom = null) : void 0
    }, d.prototype.resizeHandler = function() {
      return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
    }, d
  }(b.EventEmitter), b.parseDate = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l;
    return "number" == typeof a ? a : (c = a.match(/^(\d+) Q(\d)$/), e = a.match(/^(\d+)-(\d+)$/), f = a.match(/^(\d+)-(\d+)-(\d+)$/), h = a.match(/^(\d+) W(\d+)$/), i = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), j = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), c ? new Date(parseInt(c[1], 10), 3 * parseInt(c[2], 10) - 1, 1).getTime() : e ? new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, 1).getTime() : f ? new Date(parseInt(f[1], 10), parseInt(f[2], 10) - 1, parseInt(f[3], 10)).getTime() : h ? (k = new Date(parseInt(h[1], 10), 0, 1), 4 !== k.getDay() && k.setMonth(0, 1 + (4 - k.getDay() + 7) % 7), k.getTime() + 6048e5 * parseInt(h[2], 10)) : i ? i[6] ? (g = 0, "Z" !== i[6] && (g = 60 * parseInt(i[8], 10) + parseInt(i[9], 10), "+" === i[7] && (g = 0 - g)), Date.UTC(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10) + g)) : new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10)).getTime() : j ? (l = parseFloat(j[6]), b = Math.floor(l), d = Math.round(1e3 * (l - b)), j[8] ? (g = 0, "Z" !== j[8] && (g = 60 * parseInt(j[10], 10) + parseInt(j[11], 10), "+" === j[9] && (g = 0 - g)), Date.UTC(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10) + g, b, d)) : new Date(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10), b, d).getTime()) : new Date(parseInt(a, 10), 0, 1).getTime())
  }, b.Hover = function() {
    function c(c) {
      null == c && (c = {}), this.options = a.extend({}, b.Hover.defaults, c), this.el = a("<div class='" + this.options["class"] + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
    }
    return c.defaults = {
      "class": "morris-hover morris-default-style"
    }, c.prototype.update = function(a, b, c) {
      return this.html(a), this.show(), this.moveTo(b, c)
    }, c.prototype.html = function(a) {
      return this.el.html(a)
    }, c.prototype.moveTo = function(a, b) {
      var c, d, e, f, g, h;
      return g = this.options.parent.innerWidth(), f = this.options.parent.innerHeight(), d = this.el.outerWidth(), c = this.el.outerHeight(), e = Math.min(Math.max(0, a - d / 2), g - d), null != b ? (h = b - c - 10, 0 > h && (h = b + 10, h + c > f && (h = f / 2 - c / 2))) : h = f / 2 - c / 2, this.el.css({
        left: e + "px",
        top: parseInt(h) + "px"
      })
    }, c.prototype.show = function() {
      return this.el.show()
    }, c.prototype.hide = function() {
      return this.el.hide()
    }, c
  }(), b.Line = function(a) {
    function c(a) {
      return this.hilight = f(this.hilight, this), this.onHoverOut = f(this.onHoverOut, this), this.onHoverMove = f(this.onHoverMove, this), this.onGridClick = f(this.onGridClick, this), this instanceof b.Line ? (c.__super__.constructor.call(this, a), void 0) : new b.Line(a)
    }
    return h(c, a), c.prototype.init = function() {
      return "always" !== this.options.hideHover ? (this.hover = new b.Hover({
        parent: this.el
      }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
    }, c.prototype.defaults = {
      lineWidth: 3,
      pointSize: 4,
      lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
      pointStrokeWidths: [1],
      pointStrokeColors: ["#ffffff"],
      pointFillColors: [],
      smooth: !0,
      xLabels: "auto",
      xLabelFormat: null,
      xLabelMargin: 24,
      continuousLine: !0,
      hideHover: !1
    }, c.prototype.calc = function() {
      return this.calcPoints(), this.generatePaths()
    }, c.prototype.calcPoints = function() {
      var a, b, c, d, e, f;
      for (e = this.data, f = [], c = 0, d = e.length; d > c; c++) a = e[c], a._x = this.transX(a.x), a._y = function() {
        var c, d, e, f;
        for (e = a.y, f = [], c = 0, d = e.length; d > c; c++) b = e[c], null != b ? f.push(this.transY(b)) : f.push(b);
        return f
      }.call(this), f.push(a._ymax = Math.min.apply(Math, [this.bottom].concat(function() {
        var c, d, e, f;
        for (e = a._y, f = [], c = 0, d = e.length; d > c; c++) b = e[c], null != b && f.push(b);
        return f
      }())));
      return f
    }, c.prototype.hitTest = function(a) {
      var b, c, d, e, f;
      if (0 === this.data.length) return null;
      for (f = this.data.slice(1), b = d = 0, e = f.length; e > d && (c = f[b], !(a < (c._x + this.data[b]._x) / 2)); b = ++d);
      return b
    }, c.prototype.onGridClick = function(a, b) {
      var c;
      return c = this.hitTest(a), this.fire("click", c, this.data[c].src, a, b)
    }, c.prototype.onHoverMove = function(a) {
      var b;
      return b = this.hitTest(a), this.displayHoverForRow(b)
    }, c.prototype.onHoverOut = function() {
      return this.options.hideHover !== !1 ? this.displayHoverForRow(null) : void 0
    }, c.prototype.displayHoverForRow = function(a) {
      var b;
      return null != a ? ((b = this.hover).update.apply(b, this.hoverContentForRow(a)), this.hilight(a)) : (this.hover.hide(), this.hilight())
    }, c.prototype.hoverContentForRow = function(a) {
      var b, c, d, e, f, g, h;
      for (d = this.data[a], b = "<div class='morris-hover-row-label'>" + d.label + "</div>", h = d.y, c = f = 0, g = h.length; g > f; c = ++f) e = h[c], b += "<div class='morris-hover-point' style='color: " + this.colorFor(d, c, "label") + "'>\n  " + this.options.labels[c] + ":\n  " + this.yLabelFormat(e) + "\n</div>";
      return "function" == typeof this.options.hoverCallback && (b = this.options.hoverCallback(a, this.options, b, d.src)), [b, d._x, d._ymax]
    }, c.prototype.generatePaths = function() {
      var a, c, d, e, f;
      return this.paths = function() {
        var g, h, j, k;
        for (k = [], d = g = 0, h = this.options.ykeys.length; h >= 0 ? h > g : g > h; d = h >= 0 ? ++g : --g) f = "boolean" == typeof this.options.smooth ? this.options.smooth : (j = this.options.ykeys[d], i.call(this.options.smooth, j) >= 0), c = function() {
          var a, b, c, f;
          for (c = this.data, f = [], a = 0, b = c.length; b > a; a++) e = c[a], void 0 !== e._y[d] && f.push({
            x: e._x,
            y: e._y[d]
          });
          return f
        }.call(this), this.options.continuousLine && (c = function() {
          var b, d, e;
          for (e = [], b = 0, d = c.length; d > b; b++) a = c[b], null !== a.y && e.push(a);
          return e
        }()), c.length > 1 ? k.push(b.Line.createPath(c, f, this.bottom)) : k.push(null);
        return k
      }.call(this)
    }, c.prototype.draw = function() {
      var a;
      return ((a = this.options.axes) === !0 || "both" === a || "x" === a) && this.drawXAxis(), this.drawSeries(), this.options.hideHover === !1 ? this.displayHoverForRow(this.data.length - 1) : void 0
    }, c.prototype.drawXAxis = function() {
      var a, c, d, e, f, g, h, i, j, k, l = this;
      for (h = this.bottom + this.options.padding / 2, f = null, e = null, a = function(a, b) {
          var c, d, g, i, j;
          return c = l.drawXAxisLabel(l.transX(b), h, a), j = c.getBBox(), c.transform("r" + -l.options.xLabelAngle), d = c.getBBox(), c.transform("t0," + d.height / 2 + "..."), 0 !== l.options.xLabelAngle && (i = -.5 * j.width * Math.cos(l.options.xLabelAngle * Math.PI / 180), c.transform("t" + i + ",0...")), d = c.getBBox(), (null == f || f >= d.x + d.width || null != e && e >= d.x) && d.x >= 0 && d.x + d.width < l.el.width() ? (0 !== l.options.xLabelAngle && (g = 1.25 * l.options.gridTextSize / Math.sin(l.options.xLabelAngle * Math.PI / 180), e = d.x - g), f = d.x - l.options.xLabelMargin) : c.remove()
        }, d = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
          [this.data[0].label, this.data[0].x]
        ] : b.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
          var a, b, c, d;
          for (c = this.data, d = [], a = 0, b = c.length; b > a; a++) g = c[a], d.push([g.label, g.x]);
          return d
        }.call(this), d.reverse(), k = [], i = 0, j = d.length; j > i; i++) c = d[i], k.push(a(c[0], c[1]));
      return k
    }, c.prototype.drawSeries = function() {
      var a, b, c, d, e, f;
      for (this.seriesPoints = [], a = b = d = this.options.ykeys.length - 1; 0 >= d ? 0 >= b : b >= 0; a = 0 >= d ? ++b : --b) this._drawLineFor(a);
      for (f = [], a = c = e = this.options.ykeys.length - 1; 0 >= e ? 0 >= c : c >= 0; a = 0 >= e ? ++c : --c) f.push(this._drawPointFor(a));
      return f
    }, c.prototype._drawPointFor = function(a) {
      var b, c, d, e, f, g;
      for (this.seriesPoints[a] = [], f = this.data, g = [], d = 0, e = f.length; e > d; d++) c = f[d], b = null, null != c._y[a] && (b = this.drawLinePoint(c._x, c._y[a], this.colorFor(c, a, "point"), a)), g.push(this.seriesPoints[a].push(b));
      return g
    }, c.prototype._drawLineFor = function(a) {
      var b;
      return b = this.paths[a], null !== b ? this.drawLinePath(b, this.colorFor(null, a, "line"), a) : void 0
    }, c.createPath = function(a, c, d) {
      var e, f, g, h, i, j, k, l, m, n, o, p, q, r;
      for (k = "", c && (g = b.Line.gradients(a)), l = {
          y: null
        }, h = q = 0, r = a.length; r > q; h = ++q) e = a[h], null != e.y && (null != l.y ? c ? (f = g[h], j = g[h - 1], i = (e.x - l.x) / 4, m = l.x + i, o = Math.min(d, l.y + i * j), n = e.x - i, p = Math.min(d, e.y - i * f), k += "C" + m + "," + o + "," + n + "," + p + "," + e.x + "," + e.y) : k += "L" + e.x + "," + e.y : c && null == g[h] || (k += "M" + e.x + "," + e.y)), l = e;
      return k
    }, c.gradients = function(a) {
      var b, c, d, e, f, g, h, i;
      for (c = function(a, b) {
          return (a.y - b.y) / (a.x - b.x)
        }, i = [], d = g = 0, h = a.length; h > g; d = ++g) b = a[d], null != b.y ? (e = a[d + 1] || {
        y: null
      }, f = a[d - 1] || {
        y: null
      }, null != f.y && null != e.y ? i.push(c(f, e)) : null != f.y ? i.push(c(f, b)) : null != e.y ? i.push(c(b, e)) : i.push(null)) : i.push(null);
      return i
    }, c.prototype.hilight = function(a) {
      var b, c, d, e, f;
      if (null !== this.prevHilight && this.prevHilight !== a)
        for (b = c = 0, e = this.seriesPoints.length - 1; e >= 0 ? e >= c : c >= e; b = e >= 0 ? ++c : --c) this.seriesPoints[b][this.prevHilight] && this.seriesPoints[b][this.prevHilight].animate(this.pointShrinkSeries(b));
      if (null !== a && this.prevHilight !== a)
        for (b = d = 0, f = this.seriesPoints.length - 1; f >= 0 ? f >= d : d >= f; b = f >= 0 ? ++d : --d) this.seriesPoints[b][a] && this.seriesPoints[b][a].animate(this.pointGrowSeries(b));
      return this.prevHilight = a
    }, c.prototype.colorFor = function(a, b, c) {
      return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, a, b, c) : "point" === c ? this.options.pointFillColors[b % this.options.pointFillColors.length] || this.options.lineColors[b % this.options.lineColors.length] : this.options.lineColors[b % this.options.lineColors.length]
    }, c.prototype.drawXAxisLabel = function(a, b, c) {
      return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
    }, c.prototype.drawLinePath = function(a, b, c) {
      return this.raphael.path(a).attr("stroke", b).attr("stroke-width", this.lineWidthForSeries(c))
    }, c.prototype.drawLinePoint = function(a, b, c, d) {
      return this.raphael.circle(a, b, this.pointSizeForSeries(d)).attr("fill", c).attr("stroke-width", this.pointStrokeWidthForSeries(d)).attr("stroke", this.pointStrokeColorForSeries(d))
    }, c.prototype.pointStrokeWidthForSeries = function(a) {
      return this.options.pointStrokeWidths[a % this.options.pointStrokeWidths.length]
    }, c.prototype.pointStrokeColorForSeries = function(a) {
      return this.options.pointStrokeColors[a % this.options.pointStrokeColors.length]
    }, c.prototype.lineWidthForSeries = function(a) {
      return this.options.lineWidth instanceof Array ? this.options.lineWidth[a % this.options.lineWidth.length] : this.options.lineWidth
    }, c.prototype.pointSizeForSeries = function(a) {
      return this.options.pointSize instanceof Array ? this.options.pointSize[a % this.options.pointSize.length] : this.options.pointSize
    }, c.prototype.pointGrowSeries = function(a) {
      return Raphael.animation({
        r: this.pointSizeForSeries(a) + 3
      }, 25, "linear")
    }, c.prototype.pointShrinkSeries = function(a) {
      return Raphael.animation({
        r: this.pointSizeForSeries(a)
      }, 25, "linear")
    }, c
  }(b.Grid), b.labelSeries = function(c, d, e, f, g) {
    var h, i, j, k, l, m, n, o, p, q, r;
    if (j = 200 * (d - c) / e, i = new Date(c), n = b.LABEL_SPECS[f], void 0 === n)
      for (r = b.AUTO_LABEL_ORDER, p = 0, q = r.length; q > p; p++)
        if (k = r[p], m = b.LABEL_SPECS[k], j >= m.span) {
          n = m;
          break
        } for (void 0 === n && (n = b.LABEL_SPECS.second), g && (n = a.extend({}, n, {
        fmt: g
      })), h = n.start(i), l = [];
      (o = h.getTime()) <= d;) o >= c && l.push([n.fmt(h), o]), n.incr(h);
    return l
  }, c = function(a) {
    return {
      span: 60 * a * 1e3,
      start: function(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours())
      },
      fmt: function(a) {
        return "" + b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes())
      },
      incr: function(b) {
        return b.setUTCMinutes(b.getUTCMinutes() + a)
      }
    }
  }, d = function(a) {
    return {
      span: 1e3 * a,
      start: function(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes())
      },
      fmt: function(a) {
        return "" + b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes()) + ":" + b.pad2(a.getSeconds())
      },
      incr: function(b) {
        return b.setUTCSeconds(b.getUTCSeconds() + a)
      }
    }
  }, b.LABEL_SPECS = {
    decade: {
      span: 1728e8,
      start: function(a) {
        return new Date(a.getFullYear() - a.getFullYear() % 10, 0, 1)
      },
      fmt: function(a) {
        return "" + a.getFullYear()
      },
      incr: function(a) {
        return a.setFullYear(a.getFullYear() + 10)
      }
    },
    year: {
      span: 1728e7,
      start: function(a) {
        return new Date(a.getFullYear(), 0, 1)
      },
      fmt: function(a) {
        return "" + a.getFullYear()
      },
      incr: function(a) {
        return a.setFullYear(a.getFullYear() + 1)
      }
    },
    month: {
      span: 24192e5,
      start: function(a) {
        return new Date(a.getFullYear(), a.getMonth(), 1)
      },
      fmt: function(a) {
        return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1)
      },
      incr: function(a) {
        return a.setMonth(a.getMonth() + 1)
      }
    },
    week: {
      span: 6048e5,
      start: function(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate())
      },
      fmt: function(a) {
        return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate())
      },
      incr: function(a) {
        return a.setDate(a.getDate() + 7)
      }
    },
    day: {
      span: 864e5,
      start: function(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate())
      },
      fmt: function(a) {
        return "" + a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate())
      },
      incr: function(a) {
        return a.setDate(a.getDate() + 1)
      }
    },
    hour: c(60),
    "30min": c(30),
    "15min": c(15),
    "10min": c(10),
    "5min": c(5),
    minute: c(1),
    "30sec": d(30),
    "15sec": d(15),
    "10sec": d(10),
    "5sec": d(5),
    second: d(1)
  }, b.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], b.Area = function(c) {
    function d(c) {
      var f;
      return this instanceof b.Area ? (f = a.extend({}, e, c), this.cumulative = !f.behaveLikeLine, "auto" === f.fillOpacity && (f.fillOpacity = f.behaveLikeLine ? .8 : 1), d.__super__.constructor.call(this, f), void 0) : new b.Area(c)
    }
    var e;
    return h(d, c), e = {
      fillOpacity: "auto",
      behaveLikeLine: !1
    }, d.prototype.calcPoints = function() {
      var a, b, c, d, e, f, g;
      for (f = this.data, g = [], d = 0, e = f.length; e > d; d++) a = f[d], a._x = this.transX(a.x), b = 0, a._y = function() {
        var d, e, f, g;
        for (f = a.y, g = [], d = 0, e = f.length; e > d; d++) c = f[d], this.options.behaveLikeLine ? g.push(this.transY(c)) : (b += c || 0, g.push(this.transY(b)));
        return g
      }.call(this), g.push(a._ymax = Math.max.apply(Math, a._y));
      return g
    }, d.prototype.drawSeries = function() {
      var a, b, c, d, e, f, g, h;
      for (this.seriesPoints = [], b = this.options.behaveLikeLine ? function() {
          f = [];
          for (var a = 0, b = this.options.ykeys.length - 1; b >= 0 ? b >= a : a >= b; b >= 0 ? a++ : a--) f.push(a);
          return f
        }.apply(this) : function() {
          g = [];
          for (var a = e = this.options.ykeys.length - 1; 0 >= e ? 0 >= a : a >= 0; 0 >= e ? a++ : a--) g.push(a);
          return g
        }.apply(this), h = [], c = 0, d = b.length; d > c; c++) a = b[c], this._drawFillFor(a), this._drawLineFor(a), h.push(this._drawPointFor(a));
      return h
    }, d.prototype._drawFillFor = function(a) {
      var b;
      return b = this.paths[a], null !== b ? (b += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(b, this.fillForSeries(a))) : void 0
    }, d.prototype.fillForSeries = function(a) {
      var b;
      return b = Raphael.rgb2hsl(this.colorFor(this.data[a], a, "line")), Raphael.hsl(b.h, this.options.behaveLikeLine ? .9 * b.s : .75 * b.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * b.l : 1.25 * b.l))
    }, d.prototype.drawFilledPath = function(a, b) {
      return this.raphael.path(a).attr("fill", b).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
    }, d
  }(b.Line), b.Bar = function(c) {
    function d(c) {
      return this.onHoverOut = f(this.onHoverOut, this), this.onHoverMove = f(this.onHoverMove, this), this.onGridClick = f(this.onGridClick, this), this instanceof b.Bar ? (d.__super__.constructor.call(this, a.extend({}, c, {
        parseTime: !1
      })), void 0) : new b.Bar(c)
    }
    return h(d, c), d.prototype.init = function() {
      return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new b.Hover({
        parent: this.el
      }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
    }, d.prototype.defaults = {
      barSizeRatio: .75,
      barGap: 3,
      barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
      barOpacity: 1,
      barRadius: [0, 0, 0, 0],
      xLabelMargin: 50
    }, d.prototype.calc = function() {
      var a;
      return this.calcBars(), this.options.hideHover === !1 ? (a = this.hover).update.apply(a, this.hoverContentForRow(this.data.length - 1)) : void 0
    }, d.prototype.calcBars = function() {
      var a, b, c, d, e, f, g;
      for (f = this.data, g = [], a = d = 0, e = f.length; e > d; a = ++d) b = f[a], b._x = this.left + this.width * (a + .5) / this.data.length, g.push(b._y = function() {
        var a, d, e, f;
        for (e = b.y, f = [], a = 0, d = e.length; d > a; a++) c = e[a], null != c ? f.push(this.transY(c)) : f.push(null);
        return f
      }.call(this));
      return g
    }, d.prototype.draw = function() {
      var a;
      return ((a = this.options.axes) === !0 || "both" === a || "x" === a) && this.drawXAxis(), this.drawSeries()
    }, d.prototype.drawXAxis = function() {
      var a, b, c, d, e, f, g, h, i, j, k, l, m;
      for (j = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), g = null, f = null, m = [], a = k = 0, l = this.data.length; l >= 0 ? l > k : k > l; a = l >= 0 ? ++k : --k) h = this.data[this.data.length - 1 - a], b = this.drawXAxisLabel(h._x, j, h.label), i = b.getBBox(), b.transform("r" + -this.options.xLabelAngle), c = b.getBBox(), b.transform("t0," + c.height / 2 + "..."), 0 !== this.options.xLabelAngle && (e = -.5 * i.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), b.transform("t" + e + ",0...")), (null == g || g >= c.x + c.width || null != f && f >= c.x) && c.x >= 0 && c.x + c.width < this.el.width() ? (0 !== this.options.xLabelAngle && (d = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), f = c.x - d), m.push(g = c.x - this.options.xLabelMargin)) : m.push(b.remove());
      return m
    }, d.prototype.drawSeries = function() {
      var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
      return c = this.width / this.options.data.length, h = null != this.options.stacked ? 1 : this.options.ykeys.length, a = (c * this.options.barSizeRatio - this.options.barGap * (h - 1)) / h, this.options.barSize && (a = Math.min(a, this.options.barSize)), l = c - a * h - this.options.barGap * (h - 1), g = l / 2, o = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
        var h, l, p, q;
        for (p = this.data, q = [], d = h = 0, l = p.length; l > h; d = ++h) i = p[d], e = 0, q.push(function() {
          var h, l, p, q;
          for (p = i._y, q = [], j = h = 0, l = p.length; l > h; j = ++h) n = p[j], null !== n ? (o ? (m = Math.min(n, o), b = Math.max(n, o)) : (m = n, b = this.bottom), f = this.left + d * c + g, this.options.stacked || (f += j * (a + this.options.barGap)), k = b - m, this.options.stacked && (m -= e), this.drawBar(f, m, a, k, this.colorFor(i, j, "bar"), this.options.barOpacity, this.options.barRadius), q.push(e += k)) : q.push(null);
          return q
        }.call(this));
        return q
      }.call(this)
    }, d.prototype.colorFor = function(a, b, c) {
      var d, e;
      return "function" == typeof this.options.barColors ? (d = {
        x: a.x,
        y: a.y[b],
        label: a.label
      }, e = {
        index: b,
        key: this.options.ykeys[b],
        label: this.options.labels[b]
      }, this.options.barColors.call(this, d, e, c)) : this.options.barColors[b % this.options.barColors.length]
    }, d.prototype.hitTest = function(a) {
      return 0 === this.data.length ? null : (a = Math.max(Math.min(a, this.right), this.left), Math.min(this.data.length - 1, Math.floor((a - this.left) / (this.width / this.data.length))))
    }, d.prototype.onGridClick = function(a, b) {
      var c;
      return c = this.hitTest(a), this.fire("click", c, this.data[c].src, a, b)
    }, d.prototype.onHoverMove = function(a) {
      var b, c;
      return b = this.hitTest(a), (c = this.hover).update.apply(c, this.hoverContentForRow(b))
    }, d.prototype.onHoverOut = function() {
      return this.options.hideHover !== !1 ? this.hover.hide() : void 0
    }, d.prototype.hoverContentForRow = function(a) {
      var b, c, d, e, f, g, h, i;
      for (d = this.data[a], b = "<div class='morris-hover-row-label'>" + d.label + "</div>", i = d.y, c = g = 0, h = i.length; h > g; c = ++g) f = i[c], b += "<div class='morris-hover-point' style='color: " + this.colorFor(d, c, "label") + "'>\n  " + this.options.labels[c] + ":\n  " + this.yLabelFormat(f) + "\n</div>";
      return "function" == typeof this.options.hoverCallback && (b = this.options.hoverCallback(a, this.options, b, d.src)), e = this.left + (a + .5) * this.width / this.data.length, [b, e]
    }, d.prototype.drawXAxisLabel = function(a, b, c) {
      var d;
      return d = this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
    }, d.prototype.drawBar = function(a, b, c, d, e, f, g) {
      var h, i;
      return h = Math.max.apply(Math, g), i = 0 === h || h > d ? this.raphael.rect(a, b, c, d) : this.raphael.path(this.roundedRect(a, b, c, d, g)), i.attr("fill", e).attr("fill-opacity", f).attr("stroke", "none")
    }, d.prototype.roundedRect = function(a, b, c, d, e) {
      return null == e && (e = [0, 0, 0, 0]), ["M", a, e[0] + b, "Q", a, b, a + e[0], b, "L", a + c - e[1], b, "Q", a + c, b, a + c, b + e[1], "L", a + c, b + d - e[2], "Q", a + c, b + d, a + c - e[2], b + d, "L", a + e[3], b + d, "Q", a, b + d, a, b + d - e[3], "Z"]
    }, d
  }(b.Grid), b.Donut = function(c) {
    function d(c) {
      this.resizeHandler = f(this.resizeHandler, this), this.select = f(this.select, this), this.click = f(this.click, this);
      var d = this;
      if (!(this instanceof b.Donut)) return new b.Donut(c);
      if (this.options = a.extend({}, this.defaults, c), this.el = "string" == typeof c.element ? a(document.getElementById(c.element)) : a(c.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
      void 0 !== c.data && 0 !== c.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && a(window).bind("resize", function() {
        return null != d.timeoutId && window.clearTimeout(d.timeoutId), d.timeoutId = window.setTimeout(d.resizeHandler, 100)
      }), this.setData(c.data))
    }
    return h(d, c), d.prototype.defaults = {
      colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
      backgroundColor: "#FFFFFF",
      labelColor: "#000000",
      formatter: b.commas,
      resize: !1
    }, d.prototype.redraw = function() {
      var a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
      for (this.raphael.clear(), c = this.el.width() / 2, d = this.el.height() / 2, n = (Math.min(c, d) - 10) / 3, l = 0, u = this.values, o = 0, r = u.length; r > o; o++) m = u[o], l += m;
      for (i = 5 / (2 * n), a = 1.9999 * Math.PI - i * this.data.length, g = 0, f = 0, this.segments = [], v = this.values, e = p = 0, s = v.length; s > p; e = ++p) m = v[e], j = g + i + a * (m / l), k = new b.DonutSegment(c, d, 2 * n, n, g, j, this.data[e].color || this.options.colors[f % this.options.colors.length], this.options.backgroundColor, f, this.raphael), k.render(), this.segments.push(k), k.on("hover", this.select), k.on("click", this.click), g = j, f += 1;
      for (this.text1 = this.drawEmptyDonutLabel(c, d - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(c, d + 10, this.options.labelColor, 14), h = Math.max.apply(Math, this.values), f = 0, w = this.values, x = [], q = 0, t = w.length; t > q; q++) {
        if (m = w[q], m === h) {
          this.select(f);
          break
        }
        x.push(f += 1)
      }
      return x
    }, d.prototype.setData = function(a) {
      var b;
      return this.data = a, this.values = function() {
        var a, c, d, e;
        for (d = this.data, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(parseFloat(b.value));
        return e
      }.call(this), this.redraw()
    }, d.prototype.click = function(a) {
      return this.fire("click", a, this.data[a])
    }, d.prototype.select = function(a) {
      var b, c, d, e, f, g;
      for (g = this.segments, e = 0, f = g.length; f > e; e++) c = g[e], c.deselect();
      return d = this.segments[a], d.select(), b = this.data[a], this.setLabels(b.label, this.options.formatter(b.value, b))
    }, d.prototype.setLabels = function(a, b) {
      var c, d, e, f, g, h, i, j;
      return c = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, f = 1.8 * c, e = c / 2, d = c / 3, this.text1.attr({
        text: a,
        transform: ""
      }), g = this.text1.getBBox(), h = Math.min(f / g.width, e / g.height), this.text1.attr({
        transform: "S" + h + "," + h + "," + (g.x + g.width / 2) + "," + (g.y + g.height)
      }), this.text2.attr({
        text: b,
        transform: ""
      }), i = this.text2.getBBox(), j = Math.min(f / i.width, d / i.height), this.text2.attr({
        transform: "S" + j + "," + j + "," + (i.x + i.width / 2) + "," + i.y
      })
    }, d.prototype.drawEmptyDonutLabel = function(a, b, c, d, e) {
      var f;
      return f = this.raphael.text(a, b, "").attr("font-size", d).attr("fill", c), null != e && f.attr("font-weight", e), f
    }, d.prototype.resizeHandler = function() {
      return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
    }, d
  }(b.EventEmitter), b.DonutSegment = function(a) {
    function b(a, b, c, d, e, g, h, i, j, k) {
      this.cx = a, this.cy = b, this.inner = c, this.outer = d, this.color = h, this.backgroundColor = i, this.index = j, this.raphael = k, this.deselect = f(this.deselect, this), this.select = f(this.select, this), this.sin_p0 = Math.sin(e), this.cos_p0 = Math.cos(e), this.sin_p1 = Math.sin(g), this.cos_p1 = Math.cos(g), this.is_long = g - e > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
    }
    return h(b, a), b.prototype.calcArcPoints = function(a) {
      return [this.cx + a * this.sin_p0, this.cy + a * this.cos_p0, this.cx + a * this.sin_p1, this.cy + a * this.cos_p1]
    }, b.prototype.calcSegment = function(a, b) {
      var c, d, e, f, g, h, i, j, k, l;
      return k = this.calcArcPoints(a), c = k[0], e = k[1], d = k[2], f = k[3], l = this.calcArcPoints(b), g = l[0], i = l[1], h = l[2], j = l[3], "M" + c + "," + e + ("A" + a + "," + a + ",0," + this.is_long + ",0," + d + "," + f) + ("L" + h + "," + j) + ("A" + b + "," + b + ",0," + this.is_long + ",1," + g + "," + i) + "Z"
    }, b.prototype.calcArc = function(a) {
      var b, c, d, e, f;
      return f = this.calcArcPoints(a), b = f[0], d = f[1], c = f[2], e = f[3], "M" + b + "," + d + ("A" + a + "," + a + ",0," + this.is_long + ",0," + c + "," + e)
    }, b.prototype.render = function() {
      var a = this;
      return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
        return a.fire("hover", a.index)
      }, function() {
        return a.fire("click", a.index)
      })
    }, b.prototype.drawDonutArc = function(a, b) {
      return this.raphael.path(a).attr({
        stroke: b,
        "stroke-width": 2,
        opacity: 0
      })
    }, b.prototype.drawDonutSegment = function(a, b, c, d, e) {
      return this.raphael.path(a).attr({
        fill: b,
        stroke: c,
        "stroke-width": 3
      }).hover(d).click(e)
    }, b.prototype.select = function() {
      return this.selected ? void 0 : (this.seg.animate({
        path: this.selectedPath
      }, 150, "<>"), this.arc.animate({
        opacity: 1
      }, 150, "<>"), this.selected = !0)
    }, b.prototype.deselect = function() {
      return this.selected ? (this.seg.animate({
        path: this.path
      }, 150, "<>"), this.arc.animate({
        opacity: 0
      }, 150, "<>"), this.selected = !1) : void 0
    }, b
  }(b.EventEmitter)
}).call(this);


/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this = this;
(function(v, p) {
  "function" === typeof define && define.amd ? define([], p) : "object" === typeof module && module.exports ? module.exports = p() : v.anime = p()
})(this, function() {
  function v(a) {
    if (!g.col(a)) try {
      return document.querySelectorAll(a)
    } catch (b) {}
  }

  function p(a) {
    return a.reduce(function(a, d) {
      return a.concat(g.arr(d) ? p(d) : d)
    }, [])
  }

  function w(a) {
    if (g.arr(a)) return a;
    g.str(a) && (a = v(a) || a);
    return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
  }

  function F(a, b) {
    return a.some(function(a) {
      return a === b
    })
  }

  function A(a) {
    var b = {},
      d;
    for (d in a) b[d] = a[d];
    return b
  }

  function G(a, b) {
    var d = A(a),
      c;
    for (c in a) d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
    return d
  }

  function B(a, b) {
    var d = A(a),
      c;
    for (c in b) d[c] = g.und(a[c]) ? b[c] : a[c];
    return d
  }

  function S(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, d, h) {
      return b + b + d + d + h + h
    });
    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(b[1], 16);
    var d = parseInt(b[2], 16),
      b = parseInt(b[3], 16);
    return "rgb(" + a + "," + d + "," + b + ")"
  }

  function T(a) {
    function b(a, b, c) {
      0 >
        c && (c += 1);
      1 < c && --c;
      return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
    }
    var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
    a = parseInt(d[1]) / 360;
    var c = parseInt(d[2]) / 100,
      d = parseInt(d[3]) / 100;
    if (0 == c) c = d = a = d;
    else {
      var e = .5 > d ? d * (1 + c) : d + c - d * c,
        l = 2 * d - e,
        c = b(l, e, a + 1 / 3),
        d = b(l, e, a);
      a = b(l, e, a - 1 / 3)
    }
    return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")"
  }

  function x(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2]
  }

  function U(a) {
    if (-1 < a.indexOf("translate")) return "px";
    if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg"
  }

  function H(a, b) {
    return g.fnc(a) ? a(b.target, b.id, b.total) : a
  }

  function C(a, b) {
    if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
  }

  function I(a, b) {
    if (g.dom(a) && F(V, b)) return "transform";
    if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute";
    if (g.dom(a) && "transform" !== b && C(a, b)) return "css";
    if (null != a[b]) return "object"
  }

  function W(a, b) {
    var d = U(b),
      d = -1 < b.indexOf("scale") ?
      1 : 0 + d;
    a = a.style.transform;
    if (!a) return d;
    for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) e.push(c[1]), l.push(c[2]);
    a = l.filter(function(a, c) {
      return e[c] === b
    });
    return a.length ? a[0] : d
  }

  function J(a, b) {
    switch (I(a, b)) {
      case "transform":
        return W(a, b);
      case "css":
        return C(a, b);
      case "attribute":
        return a.getAttribute(b)
    }
    return a[b] || 0
  }

  function K(a, b) {
    var d = /^(\*=|\+=|-=)/.exec(a);
    if (!d) return a;
    b = parseFloat(b);
    a = parseFloat(a.replace(d[0], ""));
    switch (d[0][0]) {
      case "+":
        return b + a;
      case "-":
        return b - a;
      case "*":
        return b *
          a
    }
  }

  function D(a) {
    return g.obj(a) && a.hasOwnProperty("totalLength")
  }

  function X(a, b) {
    function d(c) {
      c = void 0 === c ? 0 : c;
      return a.el.getPointAtLength(1 <= b + c ? b + c : 0)
    }
    var c = d(),
      e = d(-1),
      l = d(1);
    switch (a.property) {
      case "x":
        return c.x;
      case "y":
        return c.y;
      case "angle":
        return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI
    }
  }

  function L(a, b) {
    var d = /-?\d*\.?\d+/g;
    a = D(a) ? a.totalLength : a;
    if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;
    else {
      var c = x(a);
      a = c ? a.substr(0, a.length - c.length) : a;
      b = b ? a + b : a
    }
    b += "";
    return {
      original: b,
      numbers: b.match(d) ? b.match(d).map(Number) : [0],
      strings: b.split(d)
    }
  }

  function Y(a, b) {
    return b.reduce(function(b, c, e) {
      return b + a[e - 1] + c
    })
  }

  function M(a) {
    return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function(a, d, c) {
      return c.indexOf(a) === d
    })
  }

  function Z(a) {
    var b = M(a);
    return b.map(function(a, c) {
      return {
        target: a,
        id: c,
        total: b.length
      }
    })
  }

  function aa(a, b) {
    var d = A(b);
    if (g.arr(a)) {
      var c = a.length;
      2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = {
        value: a
      }
    }
    return w(a).map(function(a, c) {
      c = c ? 0 : b.delay;
      a = g.obj(a) && !D(a) ? a : {
        value: a
      };
      g.und(a.delay) && (a.delay = c);
      return a
    }).map(function(a) {
      return B(a, d)
    })
  }

  function ba(a, b) {
    var d = {},
      c;
    for (c in a) {
      var e = H(a[c], b);
      g.arr(e) && (e = e.map(function(a) {
        return H(a, b)
      }), 1 === e.length && (e = e[0]));
      d[c] = e
    }
    d.duration = parseFloat(d.duration);
    d.delay = parseFloat(d.delay);
    return d
  }

  function ca(a) {
    return g.arr(a) ? y.apply(this, a) : N[a]
  }

  function da(a, b) {
    var d;
    return a.tweens.map(function(c) {
      c = ba(c, b);
      var e = c.value,
        l = J(b.target, a.name),
        h = d ? d.to.original : l,
        h = g.arr(e) ? e[0] : h,
        m = K(g.arr(e) ?
          e[1] : e, h),
        l = x(m) || x(h) || x(l);
      c.isPath = D(e);
      c.from = L(h, l);
      c.to = L(m, l);
      c.start = d ? d.end : a.offset;
      c.end = c.start + c.delay + c.duration;
      c.easing = ca(c.easing);
      c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;
      g.col(c.from.original) && (c.round = 1);
      return d = c
    })
  }

  function ea(a, b) {
    return p(a.map(function(a) {
      return b.map(function(b) {
        var c = I(a.target, b.name);
        if (c) {
          var d = da(b, a);
          b = {
            type: c,
            property: b.name,
            animatable: a,
            tweens: d,
            duration: d[d.length - 1].end,
            delay: d[0].delay
          }
        } else b = void 0;
        return b
      })
    })).filter(function(a) {
      return !g.und(a)
    })
  }

  function O(a, b, d) {
    var c = "delay" === a ? Math.min : Math.max;
    return b.length ? c.apply(Math, b.map(function(b) {
      return b[a]
    })) : d[a]
  }

  function fa(a) {
    var b = G(ga, a),
      d = G(ha, a),
      c = Z(a.targets),
      e = [],
      g = B(b, d),
      h;
    for (h in a) g.hasOwnProperty(h) || "targets" === h || e.push({
      name: h,
      offset: g.offset,
      tweens: aa(a[h], d)
    });
    a = ea(c, e);
    return B(b, {
      children: [],
      animatables: c,
      animations: a,
      duration: O("duration", a, d),
      delay: O("delay", a, d)
    })
  }

  function n(a) {
    function b() {
      return window.Promise && new Promise(function(a) {
        return Q = a
      })
    }

    function d(a) {
      return f.reversed ?
        f.duration - a : a
    }

    function c(a) {
      for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
        var g = d[b],
          h = g.animatable,
          m = g.tweens;
        e.tween = m.filter(function(b) {
          return a < b.end
        })[0] || m[m.length - 1];
        e.isPath$1 = e.tween.isPath;
        e.round = e.tween.round;
        e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
        m = Y(e.tween.to.numbers.map(function(a) {
          return function(b, c) {
            c = a.isPath$1 ? 0 : a.tween.from.numbers[c];
            b = c + a.eased * (b - c);
            a.isPath$1 && (b = X(a.tween.value,
              b));
            a.round && (b = Math.round(b * a.round) / a.round);
            return b
          }
        }(e)), e.tween.to.strings);
        ia[g.type](h.target, g.property, m, c, h.id);
        g.currentValue = m;
        b++;
        e = {
          isPath$1: e.isPath$1,
          tween: e.tween,
          eased: e.eased,
          round: e.round
        }
      }
      if (c)
        for (var k in c) E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
      f.currentTime = a;
      f.progress = a / f.duration * 100
    }

    function e(a) {
      if (f[a]) f[a](f)
    }

    function g() {
      f.remaining && !0 !== f.remaining && f.remaining--
    }

    function h(a) {
      var h = f.duration,
        l = f.offset,
        n = f.delay,
        P = f.currentTime,
        q = f.reversed,
        r = d(a),
        r = Math.min(Math.max(r, 0), h);
      if (f.children) {
        var p = f.children;
        if (r >= f.currentTime)
          for (var u = 0; u < p.length; u++) p[u].seek(r);
        else
          for (u = p.length; u--;) p[u].seek(r)
      }
      r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));
      a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))),
        k = 0);
      e("update")
    }
    a = void 0 === a ? {} : a;
    var m, t, k = 0,
      Q = null,
      R = b(),
      f = fa(a);
    f.reset = function() {
      var a = f.direction,
        b = f.loop;
      f.currentTime = 0;
      f.progress = 0;
      f.paused = !0;
      f.began = !1;
      f.completed = !1;
      f.reversed = "reverse" === a;
      f.remaining = "alternate" === a && 1 === b ? 2 : b;
      for (a = f.children.length; a--;) b = f.children[a], b.seek(b.offset), b.reset()
    };
    f.tick = function(a) {
      m = a;
      t || (t = m);
      h((k + m - t) * n.speed)
    };
    f.seek = function(a) {
      h(d(a))
    };
    f.pause = function() {
      var a = q.indexOf(f); - 1 < a && q.splice(a, 1);
      f.paused = !0
    };
    f.play = function() {
      f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja())
    };
    f.reverse = function() {
      f.reversed = !f.reversed;
      t = 0;
      k = d(f.currentTime)
    };
    f.restart = function() {
      f.pause();
      f.reset();
      f.play()
    };
    f.finished = R;
    f.reset();
    f.autoplay && f.play();
    return f
  }
  var ga = {
      update: void 0,
      begin: void 0,
      run: void 0,
      complete: void 0,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      offset: 0
    },
    ha = {
      duration: 1E3,
      delay: 0,
      easing: "easeOutElastic",
      elasticity: 500,
      round: 0
    },
    V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
    E, g = {
      arr: function(a) {
        return Array.isArray(a)
      },
      obj: function(a) {
        return -1 < Object.prototype.toString.call(a).indexOf("Object")
      },
      svg: function(a) {
        return a instanceof SVGElement
      },
      dom: function(a) {
        return a.nodeType || g.svg(a)
      },
      str: function(a) {
        return "string" === typeof a
      },
      fnc: function(a) {
        return "function" === typeof a
      },
      und: function(a) {
        return "undefined" === typeof a
      },
      hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      },
      rgb: function(a) {
        return /^rgb/.test(a)
      },
      hsl: function(a) {
        return /^hsl/.test(a)
      },
      col: function(a) {
        return g.hex(a) ||
          g.rgb(a) || g.hsl(a)
      }
    },
    y = function() {
      function a(a, d, c) {
        return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a
      }
      return function(b, d, c, e) {
        if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
          var g = new Float32Array(11);
          if (b !== d || c !== e)
            for (var h = 0; 11 > h; ++h) g[h] = a(.1 * h, b, c);
          return function(h) {
            if (b === d && c === e) return h;
            if (0 === h) return 0;
            if (1 === h) return 1;
            for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) m += .1;
            --k;
            var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
            if (.001 <= l) {
              for (m = 0; 4 > m; ++m) {
                l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
                if (0 === l) break;
                var n = a(k, b, c) - h,
                  k = k - n / l
              }
              h = k
            } else if (0 === l) h = k;
            else {
              var k = m,
                m = m + .1,
                f = 0;
              do n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n; while (1e-7 < Math.abs(l) && 10 > ++f);
              h = n
            }
            return a(h, d, e)
          }
        }
      }
    }(),
    N = function() {
      function a(a, b) {
        return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b)
      }
      var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = {
          In: [
            [.55, .085, .68, .53],
            [.55, .055, .675, .19],
            [.895, .03, .685, .22],
            [.755, .05, .855, .06],
            [.47, 0, .745, .715],
            [.95, .05, .795, .035],
            [.6, .04, .98,
              .335
            ],
            [.6, -.28, .735, .045], a
          ],
          Out: [
            [.25, .46, .45, .94],
            [.215, .61, .355, 1],
            [.165, .84, .44, 1],
            [.23, 1, .32, 1],
            [.39, .575, .565, 1],
            [.19, 1, .22, 1],
            [.075, .82, .165, 1],
            [.175, .885, .32, 1.275],
            function(b, c) {
              return 1 - a(1 - b, c)
            }
          ],
          InOut: [
            [.455, .03, .515, .955],
            [.645, .045, .355, 1],
            [.77, 0, .175, 1],
            [.86, 0, .07, 1],
            [.445, .05, .55, .95],
            [1, 0, 0, 1],
            [.785, .135, .15, .86],
            [.68, -.55, .265, 1.55],
            function(b, c) {
              return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2
            }
          ]
        },
        c = {
          linear: y(.25, .25, .75, .75)
        },
        e = {},
        l;
      for (l in d) e.type = l, d[e.type].forEach(function(a) {
        return function(d,
          e) {
          c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d)
        }
      }(e)), e = {
        type: e.type
      };
      return c
    }(),
    ia = {
      css: function(a, b, d) {
        return a.style[b] = d
      },
      attribute: function(a, b, d) {
        return a.setAttribute(b, d)
      },
      object: function(a, b, d) {
        return a[b] = d
      },
      transform: function(a, b, d, c, e) {
        c[e] || (c[e] = []);
        c[e].push(b + "(" + d + ")")
      }
    },
    q = [],
    z = 0,
    ja = function() {
      function a() {
        z = requestAnimationFrame(b)
      }

      function b(b) {
        var c = q.length;
        if (c) {
          for (var d = 0; d < c;) q[d] && q[d].tick(b), d++;
          a()
        } else cancelAnimationFrame(z), z = 0
      }
      return a
    }();
  n.version = "2.0.2";
  n.speed = 1;
  n.running = q;
  n.remove = function(a) {
    a = M(a);
    for (var b = q.length; b--;)
      for (var d = q[b], c = d.animations, e = c.length; e--;) F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause())
  };
  n.getValue = J;
  n.path = function(a, b) {
    var d = g.str(a) ? v(a)[0] : a,
      c = b || 100;
    return function(a) {
      return {
        el: d,
        property: a,
        totalLength: d.getTotalLength() * (c / 100)
      }
    }
  };
  n.setDashoffset = function(a) {
    var b = a.getTotalLength();
    a.setAttribute("stroke-dasharray", b);
    return b
  };
  n.bezier = y;
  n.easings = N;
  n.timeline = function(a) {
    var b = n(a);
    b.pause();
    b.duration = 0;
    b.add = function(a) {
      b.children.forEach(function(a) {
        a.began = !0;
        a.completed = !0
      });
      w(a).forEach(function(a) {
        var c = b.duration,
          d = a.offset;
        a.autoplay = !1;
        a.offset = g.und(d) ? c : K(d, c);
        b.seek(a.offset);
        a = n(a);
        a.duration > c && (b.duration = a.duration);
        a.began = !0;
        b.children.push(a)
      });
      b.reset();
      b.seek(0);
      b.autoplay && b.restart();
      return b
    };
    return b
  };
  n.random = function(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  };
  return n
});


"function" !== typeof Object.create && (Object.create = function(f) {
  function g() {}
  g.prototype = f;
  return new g
});
(function(f, g, k) {
  var l = {
    init: function(a, b) {
      this.$elem = f(b);
      this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
      this.userOptions = a;
      this.loadContent()
    },
    loadContent: function() {
      function a(a) {
        var d, e = "";
        if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
        else {
          for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          b.$elem.html(e)
        }
        b.logIn()
      }
      var b = this,
        e;
      "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath ?
        (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
    },
    logIn: function() {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
      this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
      this.$elem.css({
        opacity: 0
      });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars()
    },
    setVars: function() {
      if (0 === this.$elem.children().length) return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup()
    },
    onStartup: function() {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay &&
        (this.options.autoPlay = 5E3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
    },
    eachMoveUpdate: function() {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction && this.options.afterAction.apply(this,
        [this.$elem])
    },
    updateVars: function() {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
    },
    reload: function() {
      var a = this;
      g.setTimeout(function() {
        a.updateVars()
      }, 0)
    },
    watchVisibility: function() {
      var a = this;
      if (!1 === a.$elem.is(":visible")) a.$elem.css({
          opacity: 0
        }),
        g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
      else return !1;
      a.checkVisible = g.setInterval(function() {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
          opacity: 1
        }, 200), g.clearInterval(a.checkVisible))
      }, 500)
    },
    wrapItems: function() {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block")
    },
    baseClass: function() {
      var a = this.$elem.hasClass(this.options.baseClass),
        b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme)
    },
    updateItems: function() {
      var a, b;
      if (!1 === this.options.responsive) return !1;
      if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)
        for (this.options.itemsCustom.sort(function(a, b) {
            return a[0] - b[0]
          }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
        a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount &&
        !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
    },
    response: function() {
      var a = this,
        b, e;
      if (!0 !== a.options.responsive) return !1;
      e = f(g).width();
      a.resizer = function() {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
          e = f(g).width();
          a.updateVars()
        }, a.options.responsiveRefreshRate))
      };
      f(g).resize(a.resizer)
    },
    updatePosition: function() {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp()
    },
    appendItemsSizes: function() {
      var a =
        this,
        b = 0,
        e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function(c) {
        var d = f(this);
        d.css({
          width: a.itemWidth
        }).data("owl-item", Number(c));
        if (0 === c % a.options.items || c === e) c > e || (b += 1);
        d.data("owl-roundPages", b)
      })
    },
    appendWrapperSizes: function() {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0
      });
      this.appendItemsSizes()
    },
    calculateAll: function() {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max()
    },
    calculateWidth: function() {
      this.itemWidth = Math.round(this.$elem.width() /
        this.options.items)
    },
    max: function() {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
      return a
    },
    min: function() {
      return 0
    },
    loops: function() {
      var a = 0,
        b = 0,
        e, c;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
        c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
    },
    buildControls: function() {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons()
    },
    buildButtons: function() {
      var a = this,
        b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev =
        f("<div/>", {
          "class": "owl-prev",
          html: a.options.navigationText[0] || ""
        });
      a.buttonNext = f("<div/>", {
        "class": "owl-next",
        html: a.options.navigationText[1] || ""
      });
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
        a.preventDefault()
      });
      b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
        b.preventDefault();
        f(this).hasClass("owl-next") ? a.next() : a.prev()
      })
    },
    buildPagination: function() {
      var a = this;
      a.paginationWrapper =
        f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
        b.preventDefault();
        Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
      })
    },
    updatePagination: function() {
      var a, b, e, c, d, g;
      if (!1 === this.options.pagination) return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - this.itemsAmount % this.options.items;
      for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
        (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
          "class": "owl-page"
        }), g = f("<span></span>", {
          text: !0 === this.options.paginationNumbers ? a : "",
          "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
        }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      this.checkPagination()
    },
    checkPagination: function() {
      var a = this;
      if (!1 === a.options.pagination) return !1;
      a.paginationWrapper.find(".owl-page").each(function() {
        f(this).data("owl-roundPages") ===
          f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
      })
    },
    checkNavigation: function() {
      if (!1 === this.options.navigation) return !1;
      !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
        this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
    },
    updateControls: function() {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
    },
    destroyControls: function() {
      this.owlControls && this.owlControls.remove()
    },
    next: function(a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
        if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
        else return this.currentItem = this.maximumItem, !1;
      this.goTo(this.currentItem, a)
    },
    prev: function(a) {
      if (this.isTransition) return !1;
      this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
        this.options.items : 1);
      if (0 > this.currentItem)
        if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
        else return this.currentItem = 0, !1;
      this.goTo(this.currentItem, a)
    },
    goTo: function(a, b, e) {
      var c = this;
      if (c.isTransition) return !1;
      "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
      a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
      c.currentItem = c.owl.currentItem = a;
      if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0),
        !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
      a = c.positionsInArray[a];
      !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
        c.isCss3Finish = !0
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
        c.isCss3Finish = !0
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
          c.isCss3Finish = !0
        },
        c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
      c.afterGo()
    },
    jumpTo: function(a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem =
        this.owl.currentItem = a;
      this.afterGo()
    },
    afterGo: function() {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
    },
    stop: function() {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval)
    },
    checkAp: function() {
      "stop" !== this.apStatus && this.play()
    },
    play: function() {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay) return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function() {
        a.next(!0)
      }, a.options.autoPlay)
    },
    swapSpeed: function(a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
    },
    addCssSpeed: function(a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease"
      }
    },
    removeTransition: function() {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: ""
      }
    },
    doTranslate: function(a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" +
          a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)"
      }
    },
    transition3d: function(a) {
      this.$owlWrapper.css(this.doTranslate(a))
    },
    css2move: function(a) {
      this.$owlWrapper.css({
        left: a
      })
    },
    css2slide: function(a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate({
        left: a
      }, {
        duration: b || e.options.slideSpeed,
        complete: function() {
          e.isCssFinish = !0
        }
      })
    },
    checkBrowser: function() {
      var a = k.createElement("div");
      a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
      }
    },
    moveEvents: function() {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
    },
    eventTypes: function() {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
        !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2]
    },
    disabledEvents: function() {
      this.$elem.on("dragstart.owl", function(a) {
        a.preventDefault()
      });
      this.$elem.on("mousedown.disableTextSelect", function(a) {
        return f(a.target).is("input, textarea, select, option")
      })
    },
    gestures: function() {
      function a(a) {
        if (void 0 !== a.touches) return {
          x: a.touches[0].pageX,
          y: a.touches[0].pageY
        };
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return {
            x: a.pageX,
            y: a.pageY
          };
          if (void 0 === a.pageX) return {
            x: a.clientX,
            y: a.clientY
          }
        }
      }

      function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
      }

      function e(b) {
        b = b.originalEvent || b || g.event;
        d.newPosX = a(b).x - h.offsetX;
        d.newPosY = a(b).y - h.offsetY;
        d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
        (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
        (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
        d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
        !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
      }

      function c(a) {
        a = a.originalEvent || a || g.event;
        var c;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
        d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
        0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
            a.stopImmediatePropagation();
            a.stopPropagation();
            a.preventDefault();
            f(a.target).off("click.disable")
          }),
          a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
        b("off")
      }
      var d = this,
        h = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null
        };
      d.isCssFinish = !0;
      d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
        c = c.originalEvent || c || g.event;
        var e;
        if (3 === c.which) return !1;
        if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
          !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
          d.newPosX = 0;
          d.newRelativeX = 0;
          f(this).css(d.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(c).x - e.left;
          h.offsetY = a(c).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = c.target || c.srcElement
        }
      })
    },
    getNewPosition: function() {
      var a = this.closestItem();
      a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
        a = 0);
      return a
    },
    closestItem: function() {
      var a = this,
        b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
        e = a.newPosX,
        c = null;
      f.each(b, function(d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
          (c = b[d + 1], a.currentItem = d + 1))
      });
      return a.currentItem
    },
    moveDirection: function() {
      var a;
      0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
      return a
    },
    customEvents: function() {
      var a = this;
      a.$elem.on("owl.next", function() {
        a.next()
      });
      a.$elem.on("owl.prev", function() {
        a.prev()
      });
      a.$elem.on("owl.play", function(b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play"
      });
      a.$elem.on("owl.stop", function() {
        a.stop();
        a.hoverStatus = "stop"
      });
      a.$elem.on("owl.goTo", function(b, e) {
        a.goTo(e)
      });
      a.$elem.on("owl.jumpTo", function(b, e) {
        a.jumpTo(e)
      })
    },
    stopOnHover: function() {
      var a = this;
      !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
        a.stop()
      }), a.$elem.on("mouseout", function() {
        "stop" !== a.hoverStatus && a.play()
      }))
    },
    lazyLoad: function() {
      var a, b, e, c, d;
      if (!1 === this.options.lazyLoad) return !1;
      for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
        b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
    },
    lazyPreload: function(a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this,
          [d.$elem])
      }

      function c() {
        f += 1;
        d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
      }
      var d = this,
        f = 0,
        k;
      "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
      c()
    },
    autoHeight: function() {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
          e.wrapperOuter.addClass("autoHeight")
        }, 0)
      }

      function b() {
        d += 1;
        e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
          100) : e.wrapperOuter.css("height", "")
      }
      var e = this,
        c = f(e.$owlItems[e.currentItem]).find("img"),
        d;
      void 0 !== c.get(0) ? (d = 0, b()) : a()
    },
    completeImg: function(a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
    },
    onVisibleItems: function() {
      var a;
      !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems
    },
    transitionTypes: function(a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in"
    },
    singleItemTransition: function() {
      var a = this,
        b = a.outClass,
        e = a.inClass,
        c = a.$owlItems.eq(a.currentItem),
        d = a.$owlItems.eq(a.prevItem),
        f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
        g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": g + "px",
        "-moz-perspective-origin": g +
          "px",
        "perspective-origin": g + "px"
      });
      d.css({
        position: "relative",
        left: f + "px"
      }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
        a.endPrev = !0;
        d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(d, b)
      });
      c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
        a.endCurrent = !0;
        c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(c, e)
      })
    },
    clearTransStyle: function(a,
      b) {
      a.css({
        position: "",
        left: ""
      }).removeClass(b);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
    },
    owlStatus: function() {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection
      }
    },
    clearEvents: function() {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer)
    },
    unWrap: function() {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
    },
    destroy: function() {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData()
    },
    reinit: function(a) {
      a = f.extend({}, this.userOptions,
        a);
      this.unWrap();
      this.init(a, this.$elem)
    },
    addItem: function(a, b) {
      var e;
      if (!a) return !1;
      if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
      this.setVars()
    },
    removeItem: function(a) {
      if (0 === this.$elem.children().length) return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars()
    }
  };
  f.fn.owlCarousel = function(a) {
    return this.each(function() {
      if (!0 ===
        f(this).data("owl-init")) return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b)
    })
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1E3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["prev", "next"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1
  }
})(jQuery, window, document);


/*!
 * Animation Effects
 */

! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
  return function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0)
  }([function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
      },
      r = n(1),
      a = (o(r), n(6)),
      u = o(a),
      c = n(7),
      f = o(c),
      s = n(8),
      d = o(s),
      l = n(9),
      p = o(l),
      m = n(10),
      b = o(m),
      v = n(11),
      y = o(v),
      g = n(14),
      h = o(g),
      w = [],
      k = !1,
      x = document.all && !window.atob,
      j = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        startEvent: "DOMContentLoaded",
        throttleDelay: 99,
        debounceDelay: 50,
        disableMutationObserver: !1
      },
      O = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
      },
      _ = function() {
        w = (0, h.default)(), O()
      },
      S = function() {
        w.forEach(function(e, t) {
          e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
        })
      },
      z = function(e) {
        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
      },
      A = function(e) {
        return j = i(j, e), w = (0, h.default)(), z(j.disable) || x ? S() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
          O(!0)
        }) : document.addEventListener(j.startEvent, function() {
          O(!0)
        }), window.addEventListener("resize", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
          (0, b.default)(w, j.once)
        }, j.throttleDelay)), j.disableMutationObserver || (0, d.default)("[data-aos]", _), w)
      };
    e.exports = {
      init: A,
      refresh: O,
      refreshHard: _
    }
  }, function(e, t) {}, , , , , function(e, t) {
    (function(t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
            o = v;
          return b = v = void 0, k = t, g = e.apply(o, n)
        }

        function r(e) {
          return k = e, h = setTimeout(s, t), _ ? o(e) : g
        }

        function a(e) {
          var n = e - w,
            o = e - k,
            i = t - n;
          return S ? j(i, y - o) : i
        }

        function c(e) {
          var n = e - w,
            o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y
        }

        function s() {
          var e = O();
          return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
        }

        function d(e) {
          return h = void 0, z && b ? o(e) : (b = v = void 0, g)
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
        }

        function p() {
          return void 0 === h ? g : d(O())
        }

        function m() {
          var e = O(),
            n = c(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(s, t), o(w)
          }
          return void 0 === h && (h = setTimeout(s, t)), g
        }
        var b, v, y, g, h, w, k = 0,
          _ = !1,
          S = !1,
          z = !0;
        if ("function" != typeof e) throw new TypeError(f);
        return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
      }

      function o(e, t, o) {
        var r = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError(f);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        })
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t)
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return s;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
      }
      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        f = "Expected a function",
        s = NaN,
        d = "[object Symbol]",
        l = /^\s+|\s+$/g,
        p = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        b = /^0o[0-7]+$/i,
        v = parseInt,
        y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
        g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
        h = y || g || Function("return this")(),
        w = Object.prototype,
        k = w.toString,
        x = Math.max,
        j = Math.min,
        O = function() {
          return h.Date.now()
        };
      e.exports = o
    }).call(t, function() {
      return this
    }())
  }, function(e, t) {
    (function(t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
            o = v;
          return b = v = void 0, O = t, g = e.apply(o, n)
        }

        function r(e) {
          return O = e, h = setTimeout(s, t), _ ? i(e) : g
        }

        function u(e) {
          var n = e - w,
            o = e - O,
            i = t - n;
          return S ? x(i, y - o) : i
        }

        function f(e) {
          var n = e - w,
            o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y
        }

        function s() {
          var e = j();
          return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
        }

        function d(e) {
          return h = void 0, z && b ? i(e) : (b = v = void 0, g)
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
        }

        function p() {
          return void 0 === h ? g : d(j())
        }

        function m() {
          var e = j(),
            n = f(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(s, t), i(w)
          }
          return void 0 === h && (h = setTimeout(s, t)), g
        }
        var b, v, y, g, h, w, O = 0,
          _ = !1,
          S = !1,
          z = !0;
        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t)
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return f;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
      }
      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        c = "Expected a function",
        f = NaN,
        s = "[object Symbol]",
        d = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        b = parseInt,
        v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
        y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
        g = v || y || Function("return this")(),
        h = Object.prototype,
        w = h.toString,
        k = Math.max,
        x = Math.min,
        j = function() {
          return g.Date.now()
        };
      e.exports = n
    }).call(t, function() {
      return this
    }())
  }, function(e, t) {
    "use strict";

    function n(e, t) {
      var n = new r(o);
      a = t, n.observe(i.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      })
    }

    function o(e) {
      e && e.forEach(function(e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes),
          o = t.concat(n).filter(function(e) {
            return e.hasAttribute && e.hasAttribute("data-aos")
          }).length;
        o && a()
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = window.document,
      r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
      a = function() {};
    t.default = n
  }, function(e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || ""
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      }(),
      r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      f = function() {
        function e() {
          n(this, e)
        }
        return i(e, [{
          key: "phone",
          value: function() {
            var e = o();
            return !(!r.test(e) && !a.test(e.substr(0, 4)))
          }
        }, {
          key: "mobile",
          value: function() {
            var e = o();
            return !(!u.test(e) && !c.test(e.substr(0, 4)))
          }
        }, {
          key: "tablet",
          value: function() {
            return this.mobile() && !this.phone()
          }
        }]), e
      }();
    t.default = new f
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function(e, t, n) {
        var o = e.node.getAttribute("data-aos-once");
        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
      },
      o = function(e, t) {
        var o = window.pageYOffset,
          i = window.innerHeight;
        e.forEach(function(e, r) {
          n(e, i + o, t)
        })
      };
    t.default = o
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(12),
      r = o(i),
      a = function(e, t) {
        return e.forEach(function(e, n) {
          e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
        }), e
      };
    t.default = a
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(13),
      r = o(i),
      a = function(e, t) {
        var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
            offset: e.getAttribute("data-aos-offset"),
            anchor: e.getAttribute("data-aos-anchor"),
            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
          };
        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n += e.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n += e.offsetHeight;
            break;
          case "top-center":
            n += i / 2;
            break;
          case "bottom-center":
            n += i / 2 + e.offsetHeight;
            break;
          case "center-center":
            n += i / 2 + e.offsetHeight / 2;
            break;
          case "top-top":
            n += i;
            break;
          case "bottom-top":
            n += e.offsetHeight + i;
            break;
          case "center-top":
            n += e.offsetHeight / 2 + i
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
      };
    t.default = a
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      return {
        top: n,
        left: t
      }
    };
    t.default = n
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
        return {
          node: e
        }
      })
    };
    t.default = n
  }])
});
