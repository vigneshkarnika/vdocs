/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-dark&languages=markup+css+clike+javascript+c+csharp+cmake+coffeescript+csv+dart+docker+erlang+gcode+git+go+graphql+handlebars+http+hpkp+hsts+java+javadoclike+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+kotlin+latex+less+liquid+log+lua+makefile+markdown+markup-templating+matlab+mongodb+objectivec+perl+php+phpdoc+php-extras+plsql+powershell+properties+protobuf+pug+python+qml+r+jsx+tsx+rest+rust+sass+scss+scala+sql+stylus+swift+t4-templating+t4-cs+tcl+typescript+typoscript+visual-basic+wasm+xml-doc+yaml&plugins=line-highlight+line-numbers+show-language+normalize-whitespace+toolbar */
var _self =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      e = {},
      M = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler:
          u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof W
              ? new W(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id
            );
          },
          clone: function t(e, r) {
            var a, n;
            switch (((r = r || {}), M.util.type(e))) {
              case "Object":
                if (((n = M.util.objId(e)), r[n])) return r[n];
                for (var i in ((a = {}), (r[n] = a), e))
                  e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                return a;
              case "Array":
                return (
                  (n = M.util.objId(e)),
                  r[n]
                    ? r[n]
                    : ((a = []),
                      (r[n] = a),
                      e.forEach(function (e, n) {
                        a[n] = t(e, r);
                      }),
                      a)
                );
              default:
                return e;
            }
          },
          getLanguage: function (e) {
            for (; e && !c.test(e.className); ) e = e.parentElement;
            return e
              ? (e.className.match(c) || [, "none"])[1].toLowerCase()
              : "none";
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (e) {
              var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
              if (n) {
                var t = document.getElementsByTagName("script");
                for (var r in t) if (t[r].src == n) return t[r];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var r = "no-" + n; e; ) {
              var a = e.classList;
              if (a.contains(n)) return !0;
              if (a.contains(r)) return !1;
              e = e.parentElement;
            }
            return !!t;
          },
        },
        languages: {
          plain: e,
          plaintext: e,
          text: e,
          txt: e,
          extend: function (e, n) {
            var t = M.util.clone(M.languages[e]);
            for (var r in n) t[r] = n[r];
            return t;
          },
          insertBefore: function (t, e, n, r) {
            var a = (r = r || M.languages)[t],
              i = {};
            for (var l in a)
              if (a.hasOwnProperty(l)) {
                if (l == e)
                  for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                n.hasOwnProperty(l) || (i[l] = a[l]);
              }
            var s = r[t];
            return (
              (r[t] = i),
              M.languages.DFS(M.languages, function (e, n) {
                n === s && e != t && (this[e] = i);
              }),
              i
            );
          },
          DFS: function e(n, t, r, a) {
            a = a || {};
            var i = M.util.objId;
            for (var l in n)
              if (n.hasOwnProperty(l)) {
                t.call(n, l, n[l], r || l);
                var o = n[l],
                  s = M.util.type(o);
                "Object" !== s || a[i(o)]
                  ? "Array" !== s || a[i(o)] || ((a[i(o)] = !0), e(o, t, l, a))
                  : ((a[i(o)] = !0), e(o, t, null, a));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          M.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          M.hooks.run("before-highlightall", r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector)
            )),
            M.hooks.run("before-all-elements-highlight", r);
          for (var a, i = 0; (a = r.elements[i++]); )
            M.highlightElement(a, !0 === n, r.callback);
        },
        highlightElement: function (e, n, t) {
          var r = M.util.getLanguage(e),
            a = M.languages[r];
          e.className =
            e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
          var i = e.parentElement;
          i &&
            "pre" === i.nodeName.toLowerCase() &&
            (i.className =
              i.className.replace(c, "").replace(/\s+/g, " ") +
              " language-" +
              r);
          var l = { element: e, language: r, grammar: a, code: e.textContent };
          function o(e) {
            (l.highlightedCode = e),
              M.hooks.run("before-insert", l),
              (l.element.innerHTML = l.highlightedCode),
              M.hooks.run("after-highlight", l),
              M.hooks.run("complete", l),
              t && t.call(l.element);
          }
          if (
            (M.hooks.run("before-sanity-check", l),
            (i = l.element.parentElement) &&
              "pre" === i.nodeName.toLowerCase() &&
              !i.hasAttribute("tabindex") &&
              i.setAttribute("tabindex", "0"),
            !l.code)
          )
            return M.hooks.run("complete", l), void (t && t.call(l.element));
          if ((M.hooks.run("before-highlight", l), l.grammar))
            if (n && u.Worker) {
              var s = new Worker(M.filename);
              (s.onmessage = function (e) {
                o(e.data);
              }),
                s.postMessage(
                  JSON.stringify({
                    language: l.language,
                    code: l.code,
                    immediateClose: !0,
                  })
                );
            } else o(M.highlight(l.code, l.grammar, l.language));
          else o(M.util.encode(l.code));
        },
        highlight: function (e, n, t) {
          var r = { code: e, grammar: n, language: t };
          return (
            M.hooks.run("before-tokenize", r),
            (r.tokens = M.tokenize(r.code, r.grammar)),
            M.hooks.run("after-tokenize", r),
            W.stringify(M.util.encode(r.tokens), r.language)
          );
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var r in t) n[r] = t[r];
            delete n.rest;
          }
          var a = new i();
          return (
            I(a, a.head, e),
            (function e(n, t, r, a, i, l) {
              for (var o in r)
                if (r.hasOwnProperty(o) && r[o]) {
                  var s = r[o];
                  s = Array.isArray(s) ? s : [s];
                  for (var u = 0; u < s.length; ++u) {
                    if (l && l.cause == o + "," + u) return;
                    var c = s[u],
                      g = c.inside,
                      f = !!c.lookbehind,
                      h = !!c.greedy,
                      d = c.alias;
                    if (h && !c.pattern.global) {
                      var p = c.pattern.toString().match(/[imsuy]*$/)[0];
                      c.pattern = RegExp(c.pattern.source, p + "g");
                    }
                    for (
                      var v = c.pattern || c, m = a.next, y = i;
                      m !== t.tail && !(l && y >= l.reach);
                      y += m.value.length, m = m.next
                    ) {
                      var b = m.value;
                      if (t.length > n.length) return;
                      if (!(b instanceof W)) {
                        var k,
                          x = 1;
                        if (h) {
                          if (!(k = z(v, y, n, f))) break;
                          var w = k.index,
                            A = k.index + k[0].length,
                            P = y;
                          for (P += m.value.length; P <= w; )
                            (m = m.next), (P += m.value.length);
                          if (
                            ((P -= m.value.length),
                            (y = P),
                            m.value instanceof W)
                          )
                            continue;
                          for (
                            var E = m;
                            E !== t.tail &&
                            (P < A || "string" == typeof E.value);
                            E = E.next
                          )
                            x++, (P += E.value.length);
                          x--, (b = n.slice(y, P)), (k.index -= y);
                        } else if (!(k = z(v, 0, b, f))) continue;
                        var w = k.index,
                          S = k[0],
                          O = b.slice(0, w),
                          L = b.slice(w + S.length),
                          N = y + b.length;
                        l && N > l.reach && (l.reach = N);
                        var j = m.prev;
                        O && ((j = I(t, j, O)), (y += O.length)), q(t, j, x);
                        var C = new W(o, g ? M.tokenize(S, g) : S, d, S);
                        if (((m = I(t, j, C)), L && I(t, m, L), 1 < x)) {
                          var _ = { cause: o + "," + u, reach: N };
                          e(n, t, r, m.prev, y, _),
                            l && _.reach > l.reach && (l.reach = _.reach);
                        }
                      }
                    }
                  }
                }
            })(e, a, n, a.head, 0),
            (function (e) {
              var n = [],
                t = e.head.next;
              for (; t !== e.tail; ) n.push(t.value), (t = t.next);
              return n;
            })(a)
          );
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = M.hooks.all;
            (t[e] = t[e] || []), t[e].push(n);
          },
          run: function (e, n) {
            var t = M.hooks.all[e];
            if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n);
          },
        },
        Token: W,
      };
    function W(e, n, t, r) {
      (this.type = e),
        (this.content = n),
        (this.alias = t),
        (this.length = 0 | (r || "").length);
    }
    function z(e, n, t, r) {
      e.lastIndex = n;
      var a = e.exec(t);
      if (a && r && a[1]) {
        var i = a[1].length;
        (a.index += i), (a[0] = a[0].slice(i));
      }
      return a;
    }
    function i() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null };
      (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
    }
    function I(e, n, t) {
      var r = n.next,
        a = { value: t, prev: n, next: r };
      return (n.next = a), (r.prev = a), e.length++, a;
    }
    function q(e, n, t) {
      for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
      ((n.next = r).prev = n), (e.length -= a);
    }
    if (
      ((u.Prism = M),
      (W.stringify = function n(e, t) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) {
          var r = "";
          return (
            e.forEach(function (e) {
              r += n(e, t);
            }),
            r
          );
        }
        var a = {
            type: e.type,
            content: n(e.content, t),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
          },
          i = e.alias;
        i &&
          (Array.isArray(i)
            ? Array.prototype.push.apply(a.classes, i)
            : a.classes.push(i)),
          M.hooks.run("wrap", a);
        var l = "";
        for (var o in a.attributes)
          l +=
            " " +
            o +
            '="' +
            (a.attributes[o] || "").replace(/"/g, "&quot;") +
            '"';
        return (
          "<" +
          a.tag +
          ' class="' +
          a.classes.join(" ") +
          '"' +
          l +
          ">" +
          a.content +
          "</" +
          a.tag +
          ">"
        );
      }),
      !u.document)
    )
      return (
        u.addEventListener &&
          (M.disableWorkerMessageHandler ||
            u.addEventListener(
              "message",
              function (e) {
                var n = JSON.parse(e.data),
                  t = n.language,
                  r = n.code,
                  a = n.immediateClose;
                u.postMessage(M.highlight(r, M.languages[t], t)),
                  a && u.close();
              },
              !1
            )),
        M
      );
    var t = M.util.currentScript();
    function r() {
      M.manual || M.highlightAll();
    }
    if (
      (t &&
        ((M.filename = t.src),
        t.hasAttribute("data-manual") && (M.manual = !0)),
      !M.manual)
    ) {
      var a = document.readyState;
      "loading" === a || ("interactive" === a && t && t.defer)
        ? document.addEventListener("DOMContentLoaded", r)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(r)
        : window.setTimeout(r, 16);
    }
    return M;
  })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
  "undefined" != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
    /&#x?[\da-f]{1,8};/i,
  ],
}),
  (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
    Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside["internal-subset"].inside =
    Prism.languages.markup),
  Prism.hooks.add("wrap", function (a) {
    "entity" === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, "&"));
  }),
  Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (a, e) {
      var s = {};
      (s["language-" + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e],
      }),
        (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var t = {
        "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
      };
      t["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
      var n = {};
      (n[a] = {
        pattern: RegExp(
          "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
            /__/g,
            function () {
              return a;
            }
          ),
          "i"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: t,
      }),
        Prism.languages.insertBefore("markup", "cdata", n);
    },
  }),
  Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function (a, e) {
      Prism.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          "(^|[\"'\\s])(?:" +
            a +
            ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [e, "language-" + e],
                inside: Prism.languages[e],
              },
              punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
            },
          },
        },
      });
    },
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend("markup", {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
  var e =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  (s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
        "i"
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp("^" + e.source + "$"), alias: "url" },
      },
    },
    selector: {
      pattern: RegExp(
        "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
          e.source +
          ")*(?=\\s*\\{)"
      ),
      lookbehind: !0,
    },
    string: { pattern: e, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/,
  }),
    (s.languages.css.atrule.inside.rest = s.languages.css);
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
  (Prism.languages.javascript["class-name"][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex,
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/,
      },
    },
    "function-variable": {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function",
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Prism.languages.insertBefore("javascript", "string", {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
    "template-string": {
      pattern:
        /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": { pattern: /^`|`$/, alias: "string" },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\${|}$/,
              alias: "punctuation",
            },
            rest: Prism.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Prism.languages.markup &&
    (Prism.languages.markup.tag.addInlined("script", "javascript"),
    Prism.languages.markup.tag.addAttribute(
      "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
      "javascript"
    )),
  (Prism.languages.js = Prism.languages.javascript);
(Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern:
      /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
})),
  Prism.languages.insertBefore("c", "string", {
    macro: {
      pattern:
        /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: "property",
      inside: {
        string: [
          { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
          Prism.languages.c.string,
        ],
        comment: Prism.languages.c.comment,
        "macro-name": [
          { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: !0,
            alias: "function",
          },
        ],
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: "keyword",
        },
        "directive-hash": /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c },
      },
    },
    constant:
      /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
  }),
  delete Prism.languages.c.boolean;
!(function (s) {
  function a(e, s) {
    return e.replace(/<<(\d+)>>/g, function (e, n) {
      return "(?:" + s[+n] + ")";
    });
  }
  function t(e, n, s) {
    return RegExp(a(e, n), s || "");
  }
  function e(e, n) {
    for (var s = 0; s < n; s++)
      e = e.replace(/<<self>>/g, function () {
        return "(?:" + e + ")";
      });
    return e.replace(/<<self>>/g, "[^\\s\\S]");
  }
  var n =
      "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
    i = "class enum interface struct",
    r =
      "add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where",
    o =
      "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
  function l(e) {
    return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
  }
  var d = l(i),
    p = RegExp(l(n + " " + i + " " + r + " " + o)),
    c = l(i + " " + r + " " + o),
    u = l(n + " " + i + " " + o),
    g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
    b = e("\\((?:[^()]|<<self>>)*\\)", 2),
    h = "@?\\b[A-Za-z_]\\w*\\b",
    f = a("<<0>>(?:\\s*<<1>>)?", [h, g]),
    m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]),
    k = "\\[\\s*(?:,\\s*)*\\]",
    y = a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),
    w = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [
      a("\\(<<0>>+(?:,<<0>>+)+\\)", [
        a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k]),
      ]),
      m,
      k,
    ]),
    v = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
    x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
    $ = '"(?:\\\\.|[^\\\\"\r\n])*"';
  (s.languages.csharp = s.languages.extend("clike", {
    string: [
      {
        pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: t("(^|[^@$\\\\])<<0>>", [$]), lookbehind: !0, greedy: !0 },
      { pattern: RegExp(x), greedy: !0, alias: "character" },
    ],
    "class-name": [
      {
        pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
        lookbehind: !0,
        inside: v,
      },
      {
        pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, w]),
        lookbehind: !0,
        inside: v,
      },
      { pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: !0 },
      { pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]), lookbehind: !0, inside: v },
      {
        pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
        lookbehind: !0,
        inside: v,
      },
      { pattern: t("(\\bwhere\\s+)<<0>>", [h]), lookbehind: !0 },
      {
        pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
        lookbehind: !0,
        inside: v,
      },
      {
        pattern: t(
          "\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",
          [w, u, h]
        ),
        inside: v,
      },
    ],
    keyword: p,
    number:
      /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/,
  })),
    s.languages.insertBefore("csharp", "number", {
      range: { pattern: /\.\./, alias: "operator" },
    }),
    s.languages.insertBefore("csharp", "punctuation", {
      "named-parameter": {
        pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
        lookbehind: !0,
        alias: "punctuation",
      },
    }),
    s.languages.insertBefore("csharp", "class-name", {
      namespace: {
        pattern: t(
          "(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",
          [h]
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
      "type-expression": {
        pattern: t(
          "(\\b(?:default|typeof|sizeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",
          [b]
        ),
        lookbehind: !0,
        alias: "class-name",
        inside: v,
      },
      "return-type": {
        pattern: t(
          "<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",
          [w, m]
        ),
        inside: v,
        alias: "class-name",
      },
      "constructor-invocation": {
        pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [w]),
        lookbehind: !0,
        inside: v,
        alias: "class-name",
      },
      "generic-method": {
        pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
        inside: {
          function: t("^<<0>>", [h]),
          generic: { pattern: RegExp(g), alias: "class-name", inside: v },
        },
      },
      "type-list": {
        pattern: t(
          "\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))",
          [d, f, h, w, p.source]
        ),
        lookbehind: !0,
        inside: {
          keyword: p,
          "class-name": { pattern: RegExp(w), greedy: !0, inside: v },
          punctuation: /,/,
        },
      },
      preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {
          directive: {
            pattern:
              /(#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
            lookbehind: !0,
            alias: "keyword",
          },
        },
      },
    });
  var _ = $ + "|" + x,
    B = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [_]),
    E = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),
    R =
      "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
    P = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, E]);
  s.languages.insertBefore("csharp", "class-name", {
    attribute: {
      pattern: t(
        "((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",
        [R, P]
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: { pattern: t("^<<0>>(?=\\s*:)", [R]), alias: "keyword" },
        "attribute-arguments": {
          pattern: t("\\(<<0>>*\\)", [E]),
          inside: s.languages.csharp,
        },
        "class-name": { pattern: RegExp(m), inside: { punctuation: /\./ } },
        punctuation: /[:,]/,
      },
    },
  });
  var z = ":[^}\r\n]+",
    S = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),
    j = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [S, z]),
    A = e(
      a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [
        _,
      ]),
      2
    ),
    F = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [A, z]);
  function U(e, n) {
    return {
      interpolation: {
        pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [e]),
        lookbehind: !0,
        inside: {
          "format-string": {
            pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n, z]),
            lookbehind: !0,
            inside: { punctuation: /^:/ },
          },
          punctuation: /^\{|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            alias: "language-csharp",
            inside: s.languages.csharp,
          },
        },
      },
      string: /[\s\S]+/,
    };
  }
  s.languages.insertBefore("csharp", "string", {
    "interpolation-string": [
      {
        pattern: t(
          '(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
          [j]
        ),
        lookbehind: !0,
        greedy: !0,
        inside: U(j, S),
      },
      {
        pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [F]),
        lookbehind: !0,
        greedy: !0,
        inside: U(F, A),
      },
    ],
  });
})(Prism),
  (Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp);
Prism.languages.cmake = {
  comment: /#.*/,
  string: {
    pattern: /"(?:[^\\"]|\\.)*"/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\${(?:[^{}$]|\${[^{}$]*})*}/,
        inside: { punctuation: /\${|}/, variable: /\w+/ },
      },
    },
  },
  variable:
    /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
  property:
    /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
  keyword:
    /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
  boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/,
  namespace:
    /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
  operator:
    /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
  inserted: { pattern: /\b\w+::\w+\b/, alias: "class-name" },
  number: /\b\d+(?:\.\d+)*\b/,
  function: /\b[a-z_]\w*(?=\s*\()\b/i,
  punctuation: /[()>}]|\$[<{]/,
};
!(function (e) {
  var t = /#(?!\{).+/,
    n = { pattern: /#\{[^}]+\}/, alias: "variable" };
  (e.languages.coffeescript = e.languages.extend("javascript", {
    comment: t,
    string: [
      { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: { interpolation: n },
      },
    ],
    keyword:
      /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
  })),
    e.languages.insertBefore("coffeescript", "comment", {
      "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
      "block-regex": {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: "regex",
        inside: { comment: t, interpolation: n },
      },
    }),
    e.languages.insertBefore("coffeescript", "string", {
      "inline-javascript": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: { pattern: /^`|`$/, alias: "punctuation" },
          script: {
            pattern: /[\s\S]+/,
            alias: "language-javascript",
            inside: e.languages.javascript,
          },
        },
      },
      "multiline-string": [
        { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: !0,
          alias: "string",
          inside: { interpolation: n },
        },
      ],
    }),
    e.languages.insertBefore("coffeescript", "keyword", {
      property: /(?!\d)\w+(?=\s*:(?!:))/,
    }),
    delete e.languages.coffeescript["template-string"],
    (e.languages.coffee = e.languages.coffeescript);
})(Prism);
Prism.languages.csv = {
  value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
  punctuation: /,/,
};
!(function (e) {
  var a = [
      /\b(?:async|sync|yield)\*/,
      /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/,
    ],
    t = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
    s = {
      pattern: RegExp(t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ },
        },
      },
    };
  (e.languages.dart = e.languages.extend("clike", {
    string: [
      { pattern: /r?("""|''')[\s\S]*?\1/, greedy: !0 },
      { pattern: /r?(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    ],
    "class-name": [
      s,
      {
        pattern: RegExp(t + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
        lookbehind: !0,
        inside: s.inside,
      },
    ],
    keyword: a,
    operator:
      /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/,
  })),
    e.languages.insertBefore("dart", "function", {
      metadata: { pattern: /@\w+/, alias: "symbol" },
    }),
    e.languages.insertBefore("dart", "class-name", {
      generics: {
        pattern:
          /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          "class-name": s,
          keyword: a,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/,
        },
      },
    });
})(Prism);
!(function (e) {
  var r = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(
      /<SP_BS>/g,
      function () {
        return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
      }
    ),
    n =
      "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
    t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(
      /<STR>/g,
      function () {
        return n;
      }
    ),
    o = { pattern: RegExp(n), greedy: !0 },
    i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
  function a(e, n) {
    return (
      (e = e
        .replace(/<OPT>/g, function () {
          return t;
        })
        .replace(/<SP>/g, function () {
          return r;
        })),
      RegExp(e, n)
    );
  }
  (e.languages.docker = {
    instruction: {
      pattern:
        /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: !0,
      greedy: !0,
      inside: {
        options: {
          pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
          lookbehind: !0,
          greedy: !0,
          inside: {
            property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
            string: [
              o,
              { pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0 },
            ],
            operator: /\\$/m,
            punctuation: /=/,
          },
        },
        keyword: [
          {
            pattern: a(
              "(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b",
              "i"
            ),
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: a(
              "(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS",
              "i"
            ),
            lookbehind: !0,
            greedy: !0,
          },
          { pattern: a("(^ONBUILD<SP>)\\w+", "i"), lookbehind: !0, greedy: !0 },
          { pattern: /^\w+/, greedy: !0 },
        ],
        comment: i,
        string: o,
        variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
        operator: /\\$/m,
      },
    },
    comment: i,
  }),
    (e.languages.dockerfile = e.languages.docker);
})(Prism);
Prism.languages.erlang = {
  comment: /%.+/,
  string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
  "quoted-function": {
    pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
    alias: "function",
  },
  "quoted-atom": { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: "atom" },
  boolean: /\b(?:true|false)\b/,
  keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
  number: [
    /\$\\?./,
    /\b\d+#[a-z0-9]+/i,
    /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  ],
  function: /\b[a-z][\w@]*(?=\()/,
  variable: { pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/, lookbehind: !0 },
  operator: [
    /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
    { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
    { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 },
  ],
  atom: /\b[a-z][\w@]*/,
  punctuation: /[()[\]{}:;,.#|]|<<|>>/,
};
Prism.languages.gcode = {
  comment: /;.*|\B\(.*?\)\B/,
  string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
  keyword: /\b[GM]\d+(?:\.\d+)?\b/,
  property: /\b[A-Z]/,
  checksum: { pattern: /\*\d+/, alias: "punctuation" },
  punctuation: /:/,
};
Prism.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } },
  coord: /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m,
};
(Prism.languages.go = Prism.languages.extend("clike", {
  string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
  keyword:
    /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|iota|nil|true|false)\b/,
  number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin:
    /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
})),
  delete Prism.languages.go["class-name"];
(Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown,
      },
    },
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0,
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:true|false)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
  "attr-name": {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0,
  },
  "atom-input": { pattern: /[A-Z]\w*Input(?=!?.*$)/m, alias: "class-name" },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern:
      /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0,
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  keyword:
    /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/,
}),
  Prism.hooks.add("after-tokenize", function (n) {
    if ("graphql" === n.language)
      for (
        var o = n.tokens.filter(function (n) {
            return (
              "string" != typeof n &&
              "comment" !== n.type &&
              "scalar" !== n.type
            );
          }),
          s = 0;
        s < o.length;

      ) {
        var t = o[s++];
        if ("keyword" === t.type && "mutation" === t.content) {
          var e = [];
          if (
            c(["definition-mutation", "punctuation"]) &&
            "(" === l(1).content
          ) {
            s += 2;
            var a = f(/^\($/, /^\)$/);
            if (-1 === a) continue;
            for (; s < a; s++) {
              var r = l(0);
              "variable" === r.type &&
                (m(r, "variable-input"), e.push(r.content));
            }
            s = a + 1;
          }
          if (
            c(["punctuation", "property-query"]) &&
            "{" === l(0).content &&
            (s++, m(l(0), "property-mutation"), 0 < e.length)
          ) {
            var i = f(/^{$/, /^}$/);
            if (-1 === i) continue;
            for (var u = s; u < i; u++) {
              var p = o[u];
              "variable" === p.type &&
                0 <= e.indexOf(p.content) &&
                m(p, "variable-input");
            }
          }
        }
      }
    function l(n) {
      return o[s + n];
    }
    function c(n, t) {
      t = t || 0;
      for (var e = 0; e < n.length; e++) {
        var a = l(e + t);
        if (!a || a.type !== n[e]) return !1;
      }
      return !0;
    }
    function f(n, t) {
      for (var e = 1, a = s; a < o.length; a++) {
        var r = o[a],
          i = r.content;
        if ("punctuation" === r.type && "string" == typeof i)
          if (n.test(i)) e++;
          else if (t.test(i) && 0 === --e) return a;
      }
      return -1;
    }
    function m(n, t) {
      var e = n.alias;
      e ? Array.isArray(e) || (n.alias = e = [e]) : (n.alias = e = []),
        e.push(t);
    }
  });
!(function (h) {
  function v(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }
  Object.defineProperties((h.languages["markup-templating"] = {}), {
    buildPlaceholders: {
      value: function (a, r, e, o) {
        if (a.language === r) {
          var c = (a.tokenStack = []);
          (a.code = a.code.replace(e, function (e) {
            if ("function" == typeof o && !o(e)) return e;
            for (var n, t = c.length; -1 !== a.code.indexOf((n = v(r, t))); )
              ++t;
            return (c[t] = e), n;
          })),
            (a.grammar = h.languages.markup);
        }
      },
    },
    tokenizePlaceholders: {
      value: function (p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k];
          var m = 0,
            d = Object.keys(p.tokenStack);
          !(function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t];
              if (
                "string" == typeof a ||
                (a.content && "string" == typeof a.content)
              ) {
                var r = d[m],
                  o = p.tokenStack[r],
                  c = "string" == typeof a ? a : a.content,
                  i = v(k, r),
                  u = c.indexOf(i);
                if (-1 < u) {
                  ++m;
                  var g = c.substring(0, u),
                    l = new h.Token(
                      k,
                      h.tokenize(o, p.grammar),
                      "language-" + k,
                      o
                    ),
                    s = c.substring(u + i.length),
                    f = [];
                  g && f.push.apply(f, e([g])),
                    f.push(l),
                    s && f.push.apply(f, e([s])),
                    "string" == typeof a
                      ? n.splice.apply(n, [t, 1].concat(f))
                      : (a.content = f);
                }
              } else a.content && e(a.content);
            }
            return n;
          })(p.tokens);
        }
      },
    },
  });
})(Prism);
!(function (e) {
  (e.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    boolean: /\b(?:true|false)\b/,
    block: {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
      lookbehind: !0,
      alias: "keyword",
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
    },
    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
  }),
    e.hooks.add("before-tokenize", function (a) {
      e.languages["markup-templating"].buildPlaceholders(
        a,
        "handlebars",
        /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
      );
    }),
    e.hooks.add("after-tokenize", function (a) {
      e.languages["markup-templating"].tokenizePlaceholders(a, "handlebars");
    }),
    (e.languages.hbs = e.languages.handlebars);
})(Prism);
!(function (t) {
  t.languages.http = {
    "request-line": {
      pattern:
        /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,
      inside: {
        method: { pattern: /^[A-Z]+\b/, alias: "property" },
        "request-target": {
          pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
          lookbehind: !0,
          alias: "url",
          inside: t.languages.uri,
        },
        "http-version": {
          pattern: /^(\s)HTTP\/[0-9.]+/,
          lookbehind: !0,
          alias: "property",
        },
      },
    },
    "response-status": {
      pattern: /^HTTP\/[0-9.]+ \d+ .+/m,
      inside: {
        "http-version": { pattern: /^HTTP\/[0-9.]+/, alias: "property" },
        "status-code": {
          pattern: /^(\s)\d+(?=\s)/,
          lookbehind: !0,
          alias: "number",
        },
        "reason-phrase": {
          pattern: /^(\s).+/,
          lookbehind: !0,
          alias: "string",
        },
      },
    },
    "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" },
  };
  var a,
    e,
    s,
    n = t.languages,
    r = {
      "application/javascript": n.javascript,
      "application/json": n.json || n.javascript,
      "application/xml": n.xml,
      "text/xml": n.xml,
      "text/html": n.html,
      "text/css": n.css,
    },
    i = { "application/json": !0, "application/xml": !0 };
  for (var p in r)
    if (r[p]) {
      a = a || {};
      var o = i[p]
        ? (void 0,
          (s = (e = p).replace(/^[a-z]+\//, "")),
          "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + s + "(?![+\\w.-]))")
        : p;
      a[p.replace(/\//g, "-")] = {
        pattern: RegExp(
          "(content-type:\\s*" +
            o +
            "(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*",
          "i"
        ),
        lookbehind: !0,
        inside: r[p],
      };
    }
  a && t.languages.insertBefore("http", "header-name", a);
})(Prism);
Prism.languages.hpkp = {
  directive: {
    pattern:
      /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
    alias: "keyword",
  },
  safe: { pattern: /\b\d{7,}\b/, alias: "selector" },
  unsafe: { pattern: /\b\d{1,6}\b/, alias: "function" },
};
Prism.languages.hsts = {
  directive: {
    pattern: /\b(?:max-age=|includeSubDomains|preload)/,
    alias: "keyword",
  },
  safe: { pattern: /\b\d{8,}\b/, alias: "selector" },
  unsafe: { pattern: /\b\d{1,7}\b/, alias: "function" },
};
!(function (e) {
  var t =
      /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
    n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",
    a = {
      pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: { punctuation: /\./ },
        },
        punctuation: /\./,
      },
    };
  (e.languages.java = e.languages.extend("clike", {
    "class-name": [
      a,
      {
        pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
        lookbehind: !0,
        inside: a.inside,
      },
    ],
    keyword: t,
    function: [
      e.languages.clike.function,
      { pattern: /(\:\:\s*)[a-z_]\w*/, lookbehind: !0 },
    ],
    number:
      /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern:
        /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: "string",
      },
    }),
    e.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation",
      },
      generics: {
        pattern:
          /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": a,
          keyword: t,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/,
        },
      },
      namespace: {
        pattern: RegExp(
          "(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(
            /<keyword>/g,
            function () {
              return t.source;
            }
          )
        ),
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
    });
})(Prism);
!(function (a) {
  var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
    t = [
      { pattern: /\b(?:false|true)\b/i, alias: "boolean" },
      { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: !0, lookbehind: !0 },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: !0,
        lookbehind: !0,
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
    ],
    i =
      /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    n =
      /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
    s = /[{}\[\](),:;]/;
  a.languages.php = {
    delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" },
    comment: e,
    variable: /\$+(?:\w+\b|(?={))/i,
    package: {
      pattern:
        /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: { punctuation: /\\/ },
    },
    "class-name-definition": {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name",
    },
    "function-definition": {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: "function",
    },
    keyword: [
      {
        pattern:
          /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
        alias: "type-casting",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern:
          /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
        alias: "type-declaration",
        greedy: !0,
      },
      {
        pattern: /(\|\s*)(?:null|false)\b/i,
        alias: "type-declaration",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: "static-context",
        greedy: !0,
      },
      { pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
      /\bclass\b/i,
      {
        pattern:
          /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
        lookbehind: !0,
      },
    ],
    "argument-name": {
      pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0,
    },
    "class-name": [
      {
        pattern:
          /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0,
      },
      { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
      { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern:
          /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: "type-declaration",
        greedy: !0,
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-declaration"],
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: !0 },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ["class-name-fully-qualified", "static-context"],
        greedy: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-hint"],
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0,
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ["class-name-fully-qualified", "return-type"],
        greedy: !0,
        lookbehind: !0,
        inside: { punctuation: /\\/ },
      },
    ],
    constant: t,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: { punctuation: /\\/ },
    },
    property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
    number: i,
    operator: n,
    punctuation: s,
  };
  var l = {
      pattern:
        /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: a.languages.php,
    },
    r = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: { punctuation: /^<<<'?|[';]$/ },
          },
        },
      },
      {
        pattern:
          /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: { punctuation: /^<<<"?|[";]$/ },
          },
          interpolation: l,
        },
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0,
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0,
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: !0,
        inside: { interpolation: l },
      },
    ];
  a.languages.insertBefore("php", "variable", {
    string: r,
    attribute: {
      pattern:
        /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=]$)/,
          lookbehind: !0,
          inside: {
            comment: e,
            string: r,
            "attribute-class-name": [
              {
                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                alias: "class-name",
                greedy: !0,
                lookbehind: !0,
              },
              {
                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                alias: ["class-name", "class-name-fully-qualified"],
                greedy: !0,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            ],
            constant: t,
            number: i,
            operator: n,
            punctuation: s,
          },
        },
        delimiter: { pattern: /^#\[|]$/, alias: "punctuation" },
      },
    },
  }),
    a.hooks.add("before-tokenize", function (e) {
      if (/<\?/.test(e.code)) {
        a.languages["markup-templating"].buildPlaceholders(
          e,
          "php",
          /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi
        );
      }
    }),
    a.hooks.add("after-tokenize", function (e) {
      a.languages["markup-templating"].tokenizePlaceholders(e, "php");
    });
})(Prism);
!(function (p) {
  var a = (p.languages.javadoclike = {
    parameter: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
      lookbehind: !0,
    },
    keyword: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: !0,
    },
    punctuation: /[{}]/,
  });
  Object.defineProperty(a, "addSupport", {
    value: function (a, e) {
      "string" == typeof a && (a = [a]),
        a.forEach(function (a) {
          !(function (a, e) {
            var n = "doc-comment",
              t = p.languages[a];
            if (t) {
              var r = t[n];
              if (!r) {
                var o = {
                  "doc-comment": {
                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    alias: "comment",
                  },
                };
                r = (t = p.languages.insertBefore(a, "comment", o))[n];
              }
              if (
                (r instanceof RegExp && (r = t[n] = { pattern: r }),
                Array.isArray(r))
              )
                for (var i = 0, s = r.length; i < s; i++)
                  r[i] instanceof RegExp && (r[i] = { pattern: r[i] }), e(r[i]);
              else e(r);
            }
          })(a, function (a) {
            a.inside || (a.inside = {}), (a.inside.rest = e);
          });
        });
    },
  }),
    a.addSupport(["java", "javascript", "php"], a);
})(Prism);
!(function (e) {
  (e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null,
    },
    builtin:
      /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
  })),
    e.languages.typescript.keyword.push(
      /\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)(?!\s*[^\s_${}*a-zA-Z\xA0-\uFFFF])/
    ),
    delete e.languages.typescript.parameter;
  var s = e.languages.extend("typescript", {});
  delete s["class-name"],
    (e.languages.typescript["class-name"].inside = s),
    e.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: { pattern: /^@/, alias: "operator" },
          function: /^[\s\S]+/,
        },
      },
      "generic-function": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: s },
        },
      },
    }),
    (e.languages.ts = e.languages.typescript);
})(Prism);
!(function (e) {
  var a = e.languages.javascript,
    n = "{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}",
    t = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
  (e.languages.jsdoc = e.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp(t + "(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)"),
      lookbehind: !0,
      inside: { punctuation: /\./ },
    },
  })),
    e.languages.insertBefore("jsdoc", "keyword", {
      "optional-parameter": {
        pattern: RegExp(
          t + "\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)"
        ),
        lookbehind: !0,
        inside: {
          parameter: {
            pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
            lookbehind: !0,
            inside: { punctuation: /\./ },
          },
          code: {
            pattern: /(=)[\s\S]*(?=\]$)/,
            lookbehind: !0,
            inside: a,
            alias: "language-javascript",
          },
          punctuation: /[=[\]]/,
        },
      },
      "class-name": [
        {
          pattern: RegExp(
            "(@(?:augments|extends|class|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(
              /<TYPE>/g,
              function () {
                return n;
              }
            )
          ),
          lookbehind: !0,
          inside: { punctuation: /\./ },
        },
        {
          pattern: RegExp("(@[a-z]+\\s+)" + n),
          lookbehind: !0,
          inside: {
            string: a.string,
            number: a.number,
            boolean: a.boolean,
            keyword: e.languages.typescript.keyword,
            operator: /=>|\.\.\.|[&|?:*]/,
            punctuation: /[.,;=<>{}()[\]]/,
          },
        },
      ],
      example: {
        pattern:
          /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
        lookbehind: !0,
        inside: {
          code: {
            pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
            lookbehind: !0,
            inside: a,
            alias: "language-javascript",
          },
        },
      },
    }),
    e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(Prism);
!(function (a) {
  function e(a, e) {
    return RegExp(
      a.replace(/<ID>/g, function () {
        return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*";
      }),
      e
    );
  }
  a.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp(
        "(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source
      ),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"],
    },
  }),
    a.languages.insertBefore("javascript", "function", {
      method: {
        pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
        lookbehind: !0,
        alias: ["function", "property-access"],
      },
    }),
    a.languages.insertBefore("javascript", "constant", {
      "known-class-name": [
        {
          pattern:
            /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
          alias: "class-name",
        },
        { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
      ],
    }),
    a.languages.insertBefore("javascript", "keyword", {
      imports: {
        pattern: e(
          "(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
      exports: {
        pattern: e(
          "(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
    }),
    a.languages.javascript.keyword.unshift(
      { pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" },
      {
        pattern:
          /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
        alias: "control-flow",
      },
      { pattern: /\bnull\b/, alias: ["null", "nil"] },
      { pattern: /\bundefined\b/, alias: "nil" }
    ),
    a.languages.insertBefore("javascript", "operator", {
      spread: { pattern: /\.{3}/, alias: "operator" },
      arrow: { pattern: /=>/, alias: "operator" },
    }),
    a.languages.insertBefore("javascript", "punctuation", {
      "property-access": { pattern: e("(\\.\\s*)#?<ID>"), lookbehind: !0 },
      "maybe-class-name": {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0,
      },
      dom: {
        pattern:
          /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
        alias: "variable",
      },
      console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
    });
  for (
    var t = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access",
      ],
      r = 0;
    r < t.length;
    r++
  ) {
    var n = t[r],
      s = a.languages.javascript[n];
    "RegExp" === a.util.type(s) &&
      (s = a.languages.javascript[n] = { pattern: s });
    var o = s.inside || {};
    (s.inside = o)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(Prism);
(Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:true|false)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
}),
  (Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
  var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
  n.languages.json5 = n.languages.extend("json", {
    property: [
      { pattern: RegExp(e.source + "(?=\\s*:)"), greedy: !0 },
      {
        pattern:
          /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: "unquoted",
      },
    ],
    string: { pattern: e, greedy: !0 },
    number:
      /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
  });
})(Prism);
(Prism.languages.jsonp = Prism.languages.extend("json", {
  punctuation: /[{}[\]();,.]/,
})),
  Prism.languages.insertBefore("jsonp", "punctuation", {
    function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
  });
Prism.languages.jsstacktrace = {
  "error-message": { pattern: /^\S.*/m, alias: "string" },
  "stack-frame": {
    pattern: /(^[ \t]+)at[ \t].*/m,
    lookbehind: !0,
    inside: {
      "not-my-code": {
        pattern:
          /^at[ \t]+(?!\s)(?:node\.js|\<unknown\>|.*(?:node_modules|\(\<anonymous\>\)|\(\<unknown\>|\<anonymous\>$|\(internal\/|\(node\.js)).*/m,
        alias: "comment",
      },
      filename: {
        pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
        lookbehind: !0,
        alias: "url",
      },
      function: {
        pattern:
          /(at\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
        lookbehind: !0,
        inside: { punctuation: /\./ },
      },
      punctuation: /[()]/,
      keyword: /\b(?:at|new)\b/,
      alias: {
        pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
        alias: "variable",
      },
      "line-number": {
        pattern: /:[0-9]+(?::[0-9]+)?\b/,
        alias: "number",
        inside: { punctuation: /:/ },
      },
    },
  },
};
!(function (u) {
  var e = u.languages.javascript["template-string"],
    n = e.pattern.source,
    a = e.inside.interpolation,
    i = a.inside["interpolation-punctuation"],
    r = a.pattern.source;
  function t(e, t) {
    if (u.languages[e])
      return {
        pattern: RegExp("((?:" + t + ")\\s*)" + n),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          "embedded-code": { pattern: /[\s\S]+/, alias: e },
        },
      };
  }
  function s(e, t, n) {
    var r = { code: e, grammar: t, language: n };
    return (
      u.hooks.run("before-tokenize", r),
      (r.tokens = u.tokenize(r.code, r.grammar)),
      u.hooks.run("after-tokenize", r),
      r.tokens
    );
  }
  function d(e) {
    var t = {};
    t["interpolation-punctuation"] = i;
    var n = u.tokenize(e, t);
    if (3 === n.length) {
      var r = [1, 1];
      r.push.apply(r, s(n[1], u.languages.javascript, "javascript")),
        n.splice.apply(n, r);
    }
    return new u.Token("interpolation", n, a.alias, e);
  }
  function c(a, e, i) {
    var t = u.tokenize(a, {
        interpolation: { pattern: RegExp(r), lookbehind: !0 },
      }),
      f = 0,
      y = {},
      n = s(
        t
          .map(function (e) {
            if ("string" == typeof e) return e;
            for (
              var t, n = e.content;
              -1 !==
              a.indexOf(
                ((r = f++), (t = "___" + i.toUpperCase() + "_" + r + "___"))
              );

            );
            return (y[t] = n), t;
            var r;
          })
          .join(""),
        e,
        i
      ),
      v = Object.keys(y);
    return (
      (f = 0),
      (function e(t) {
        for (var n = 0; n < t.length; n++) {
          if (f >= v.length) return;
          var r = t[n];
          if ("string" == typeof r || "string" == typeof r.content) {
            var a = v[f],
              i = "string" == typeof r ? r : r.content,
              s = i.indexOf(a);
            if (-1 !== s) {
              ++f;
              var o = i.substring(0, s),
                p = d(y[a]),
                l = i.substring(s + a.length),
                g = [];
              if ((o && g.push(o), g.push(p), l)) {
                var u = [l];
                e(u), g.push.apply(g, u);
              }
              "string" == typeof r
                ? (t.splice.apply(t, [n, 1].concat(g)), (n += g.length - 1))
                : (r.content = g);
            }
          } else {
            var c = r.content;
            Array.isArray(c) ? e(c) : e([c]);
          }
        }
      })(n),
      new u.Token(i, n, "language-" + i, a)
    );
  }
  u.languages.javascript["template-string"] = [
    t(
      "css",
      "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"
    ),
    t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),
    t("svg", "\\bsvg"),
    t("markdown", "\\b(?:md|markdown)"),
    t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),
    t("sql", "\\bsql"),
    e,
  ].filter(Boolean);
  var o = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  function f(e) {
    return "string" == typeof e
      ? e
      : Array.isArray(e)
      ? e.map(f).join("")
      : f(e.content);
  }
  u.hooks.add("after-tokenize", function (e) {
    e.language in o &&
      !(function e(t) {
        for (var n = 0, r = t.length; n < r; n++) {
          var a = t[n];
          if ("string" != typeof a) {
            var i = a.content;
            if (Array.isArray(i))
              if ("template-string" === a.type) {
                var s = i[1];
                if (
                  3 === i.length &&
                  "string" != typeof s &&
                  "embedded-code" === s.type
                ) {
                  var o = f(s),
                    p = s.alias,
                    l = Array.isArray(p) ? p[0] : p,
                    g = u.languages[l];
                  if (!g) continue;
                  i[1] = c(o, g, l);
                }
              } else e(i);
            else "string" != typeof i && e([i]);
          }
        }
      })(e.tokens);
  });
})(Prism);
!(function (e) {
  (e.languages.kotlin = e.languages.extend("clike", {
    keyword: {
      pattern:
        /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
      lookbehind: !0,
    },
    function: [
      { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
      {
        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
        lookbehind: !0,
        greedy: !0,
      },
    ],
    number:
      /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
    operator:
      /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
  })),
    delete e.languages.kotlin["class-name"],
    e.languages.insertBefore("kotlin", "string", {
      "raw-string": { pattern: /("""|''')[\s\S]*?\1/, alias: "string" },
    }),
    e.languages.insertBefore("kotlin", "keyword", {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: "builtin",
      },
    }),
    e.languages.insertBefore("kotlin", "function", {
      label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" },
    });
  var n = [
    {
      pattern: /\$\{[^}]+\}/,
      inside: {
        delimiter: { pattern: /^\$\{|\}$/, alias: "variable" },
        rest: e.languages.kotlin,
      },
    },
    { pattern: /\$\w+/, alias: "variable" },
  ];
  (e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside =
    { interpolation: n }),
    (e.languages.kt = e.languages.kotlin),
    (e.languages.kts = e.languages.kotlin);
})(Prism);
!(function (a) {
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
    n = { "equation-command": { pattern: e, alias: "regex" } };
  (a.languages.latex = {
    comment: /%.*/m,
    cdata: {
      pattern:
        /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0,
    },
    equation: [
      {
        pattern:
          /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: n,
        alias: "string",
      },
      {
        pattern:
          /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: n,
        alias: "string",
      },
    ],
    keyword: {
      pattern:
        /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
    },
    url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
    headline: {
      pattern:
        /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name",
    },
    function: { pattern: e, alias: "selector" },
    punctuation: /[[\]{}&]/,
  }),
    (a.languages.tex = a.languages.latex),
    (a.languages.context = a.languages.latex);
})(Prism);
(Prism.languages.less = Prism.languages.extend("css", {
  comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
  atrule: {
    pattern:
      /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { punctuation: /[:()]/ },
  },
  selector: {
    pattern:
      /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { variable: /@+[\w-]+/ },
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  operator: /[+\-*\/]/,
})),
  Prism.languages.insertBefore("less", "property", {
    variable: [
      { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
      /@@?[\w-]+/,
    ],
    "mixin-usage": {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: "function",
    },
  });
(Prism.languages.liquid = {
  comment: {
    pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
    lookbehind: !0,
  },
  delimiter: {
    pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
    alias: "punctuation",
  },
  string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
  keyword:
    /\b(?:as|assign|break|continue|cycle|decrement|echo|else|elsif|(?:end)?(?:capture|case|comment|for|form|if|paginate|style|raw|tablerow|unless)|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
  function: [
    { pattern: /(\|\s*)\w+/, lookbehind: !0, alias: "filter" },
    { pattern: /(\.\s*)(?:first|last|size)/, lookbehind: !0 },
  ],
  boolean: /\b(?:true|false|nil)\b/,
  range: { pattern: /\.\./, alias: "operator" },
  number: /\b\d+(?:\.\d+)?\b/,
  operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|or|contains(?=\s))\b/,
  punctuation: /[.,\[\]()]/,
}),
  Prism.hooks.add("before-tokenize", function (e) {
    var r = !1;
    Prism.languages["markup-templating"].buildPlaceholders(
      e,
      "liquid",
      /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,
      function (e) {
        var n = /^\{%-?\s*(\w+)/.exec(e);
        if (n) {
          var t = n[1];
          if ("raw" === t && !r) return (r = !0);
          if ("endraw" === t) return !(r = !1);
        }
        return !r;
      }
    );
  }),
  Prism.hooks.add("after-tokenize", function (e) {
    Prism.languages["markup-templating"].tokenizePlaceholders(e, "liquid");
  });
Prism.languages.log = {
  string: {
    pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,
    greedy: !0,
  },
  level: [
    {
      pattern:
        /\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,
      alias: ["error", "important"],
    },
    { pattern: /\b(?:WARN|WARNING|WRN)\b/, alias: ["warning", "important"] },
    {
      pattern: /\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,
      alias: ["info", "keyword"],
    },
    { pattern: /\b(?:DBG|DEBUG|FINE)\b/, alias: ["debug", "keyword"] },
    {
      pattern: /\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,
      alias: ["trace", "comment"],
    },
  ],
  property: {
    pattern:
      /((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,
    lookbehind: !0,
  },
  separator: {
    pattern: /(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,
    lookbehind: !0,
    alias: "comment",
  },
  url: /\b(?:https?|ftp|file):\/\/[^\s|,;'"]*[^\s|,;'">.]/,
  email: {
    pattern: /(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,
    lookbehind: !0,
    alias: "url",
  },
  "ip-address": {
    pattern: /\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/i,
    alias: "constant",
  },
  "mac-address": {
    pattern: /\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,
    alias: "constant",
  },
  domain: {
    pattern:
      /(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,
    lookbehind: !0,
    alias: "constant",
  },
  uuid: {
    pattern:
      /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,
    alias: "constant",
  },
  hash: { pattern: /\b(?:[a-f0-9]{32}){1,2}\b/i, alias: "constant" },
  "file-path": {
    pattern:
      /\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,
    lookbehind: !0,
    greedy: !0,
    alias: "string",
  },
  date: {
    pattern: RegExp(
      "\\b\\d{4}[-/]\\d{2}[-/]\\d{2}(?:T(?=\\d{1,2}:)|(?=\\s\\d{1,2}:))|\\b\\d{1,4}[-/ ](?:\\d{1,2}|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-/ ]\\d{2,4}T?\\b|\\b(?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:\\s{1,2}(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))?|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s{1,2}\\d{1,2}\\b",
      "i"
    ),
    alias: "number",
  },
  time: {
    pattern:
      /\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,
    alias: "number",
  },
  boolean: /\b(?:true|false|null)\b/i,
  number: {
    pattern:
      /(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,
    lookbehind: !0,
  },
  operator: /[;:?<=>~/@!$%&+\-|^(){}*#]/,
  punctuation: /[\[\].,]/,
};
Prism.languages.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  string: {
    pattern:
      /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    greedy: !0,
  },
  number:
    /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword:
    /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  operator: [
    /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
    { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 },
  ],
  punctuation: /[\[\](){},;]|\.+|:+/,
};
Prism.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0,
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  symbol: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword: [
    /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    {
      pattern:
        /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
      lookbehind: !0,
    },
  ],
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/,
};
!(function (u) {
  function n(n) {
    return (
      (n = n.replace(/<inner>/g, function () {
        return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
      })),
      RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    );
  }
  var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
    t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(
      /__/g,
      function () {
        return e;
      }
    ),
    a =
      "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
  (u.languages.markdown = u.languages.extend("markup", {})),
    u.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "font-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: u.languages.yaml,
          },
        },
      },
      blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
      table: {
        pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(e),
                inside: u.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
          "table-line": {
            pattern: RegExp("^(" + t + ")" + a + "$"),
            lookbehind: !0,
            inside: { punctuation: /\||:?-{3,}:?/ },
          },
          "table-header-row": {
            pattern: RegExp("^" + t + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(e),
                alias: "important",
                inside: u.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
        },
      },
      code: [
        {
          pattern:
            /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: "keyword",
        },
        { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0,
            },
            "code-language": { pattern: /^(```).+/, lookbehind: !0 },
            punctuation: /```/,
          },
        },
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: { punctuation: /==+$|--+$/ },
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: "important",
          inside: { punctuation: /^#+|#+$/ },
        },
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      "url-reference": {
        pattern:
          /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
          string:
            /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: "url",
      },
      bold: {
        pattern: n(
          "\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /\*\*|__/,
        },
      },
      italic: {
        pattern: n(
          "\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
          punctuation: /[*_]/,
        },
      },
      strike: {
        pattern: n("(~~?)(?:(?!~)<inner>)+\\2"),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /~~?/,
        },
      },
      url: {
        pattern: n(
          '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
          variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
          url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0,
          },
        },
      },
    }),
    ["url", "bold", "italic", "strike"].forEach(function (e) {
      ["url", "bold", "italic", "strike"].forEach(function (n) {
        e !== n &&
          (u.languages.markdown[e].inside.content.inside[n] =
            u.languages.markdown[n]);
      });
    }),
    u.hooks.add("after-tokenize", function (n) {
      ("markdown" !== n.language && "md" !== n.language) ||
        !(function n(e) {
          if (e && "string" != typeof e)
            for (var t = 0, a = e.length; t < a; t++) {
              var i = e[t];
              if ("code" === i.type) {
                var r = i.content[1],
                  o = i.content[3];
                if (
                  r &&
                  o &&
                  "code-language" === r.type &&
                  "code-block" === o.type &&
                  "string" == typeof r.content
                ) {
                  var l = r.content
                      .replace(/\b#/g, "sharp")
                      .replace(/\b\+\+/g, "pp"),
                    s =
                      "language-" +
                      (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                  o.alias
                    ? "string" == typeof o.alias
                      ? (o.alias = [o.alias, s])
                      : o.alias.push(s)
                    : (o.alias = [s]);
                }
              } else n(i.content);
            }
        })(n.tokens);
    }),
    u.hooks.add("wrap", function (n) {
      if ("code-block" === n.type) {
        for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
          var i = n.classes[t],
            r = /language-(.+)/.exec(i);
          if (r) {
            e = r[1];
            break;
          }
        }
        var o = u.languages[e];
        if (o) {
          var l = document.createElement("div");
          l.innerHTML = n.content;
          var s = l.textContent;
          n.content = u.highlight(s, o, e);
        } else if (e && "none" !== e && u.plugins.autoloader) {
          var d =
            "md-" +
            new Date().valueOf() +
            "-" +
            Math.floor(1e16 * Math.random());
          (n.attributes.id = d),
            u.plugins.autoloader.loadLanguages(e, function () {
              var n = document.getElementById(d);
              n &&
                (n.innerHTML = u.highlight(n.textContent, u.languages[e], e));
            });
        }
      }
    }),
    (u.languages.md = u.languages.markdown);
})(Prism);
Prism.languages.matlab = {
  comment: [/%\{[\s\S]*?\}%/, /%.+/],
  string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
  keyword:
    /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
  function: /\b(?!\d)\w+(?=\s*\()/,
  operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
  punctuation: /\.{3}|[.,;\[\](){}!]/,
};
!(function ($) {
  var e = [
      "$eq",
      "$gt",
      "$gte",
      "$in",
      "$lt",
      "$lte",
      "$ne",
      "$nin",
      "$and",
      "$not",
      "$nor",
      "$or",
      "$exists",
      "$type",
      "$expr",
      "$jsonSchema",
      "$mod",
      "$regex",
      "$text",
      "$where",
      "$geoIntersects",
      "$geoWithin",
      "$near",
      "$nearSphere",
      "$all",
      "$elemMatch",
      "$size",
      "$bitsAllClear",
      "$bitsAllSet",
      "$bitsAnyClear",
      "$bitsAnySet",
      "$comment",
      "$elemMatch",
      "$meta",
      "$slice",
      "$currentDate",
      "$inc",
      "$min",
      "$max",
      "$mul",
      "$rename",
      "$set",
      "$setOnInsert",
      "$unset",
      "$addToSet",
      "$pop",
      "$pull",
      "$push",
      "$pullAll",
      "$each",
      "$position",
      "$slice",
      "$sort",
      "$bit",
      "$addFields",
      "$bucket",
      "$bucketAuto",
      "$collStats",
      "$count",
      "$currentOp",
      "$facet",
      "$geoNear",
      "$graphLookup",
      "$group",
      "$indexStats",
      "$limit",
      "$listLocalSessions",
      "$listSessions",
      "$lookup",
      "$match",
      "$merge",
      "$out",
      "$planCacheStats",
      "$project",
      "$redact",
      "$replaceRoot",
      "$replaceWith",
      "$sample",
      "$set",
      "$skip",
      "$sort",
      "$sortByCount",
      "$unionWith",
      "$unset",
      "$unwind",
      "$abs",
      "$accumulator",
      "$acos",
      "$acosh",
      "$add",
      "$addToSet",
      "$allElementsTrue",
      "$and",
      "$anyElementTrue",
      "$arrayElemAt",
      "$arrayToObject",
      "$asin",
      "$asinh",
      "$atan",
      "$atan2",
      "$atanh",
      "$avg",
      "$binarySize",
      "$bsonSize",
      "$ceil",
      "$cmp",
      "$concat",
      "$concatArrays",
      "$cond",
      "$convert",
      "$cos",
      "$dateFromParts",
      "$dateToParts",
      "$dateFromString",
      "$dateToString",
      "$dayOfMonth",
      "$dayOfWeek",
      "$dayOfYear",
      "$degreesToRadians",
      "$divide",
      "$eq",
      "$exp",
      "$filter",
      "$first",
      "$floor",
      "$function",
      "$gt",
      "$gte",
      "$hour",
      "$ifNull",
      "$in",
      "$indexOfArray",
      "$indexOfBytes",
      "$indexOfCP",
      "$isArray",
      "$isNumber",
      "$isoDayOfWeek",
      "$isoWeek",
      "$isoWeekYear",
      "$last",
      "$last",
      "$let",
      "$literal",
      "$ln",
      "$log",
      "$log10",
      "$lt",
      "$lte",
      "$ltrim",
      "$map",
      "$max",
      "$mergeObjects",
      "$meta",
      "$min",
      "$millisecond",
      "$minute",
      "$mod",
      "$month",
      "$multiply",
      "$ne",
      "$not",
      "$objectToArray",
      "$or",
      "$pow",
      "$push",
      "$radiansToDegrees",
      "$range",
      "$reduce",
      "$regexFind",
      "$regexFindAll",
      "$regexMatch",
      "$replaceOne",
      "$replaceAll",
      "$reverseArray",
      "$round",
      "$rtrim",
      "$second",
      "$setDifference",
      "$setEquals",
      "$setIntersection",
      "$setIsSubset",
      "$setUnion",
      "$size",
      "$sin",
      "$slice",
      "$split",
      "$sqrt",
      "$stdDevPop",
      "$stdDevSamp",
      "$strcasecmp",
      "$strLenBytes",
      "$strLenCP",
      "$substr",
      "$substrBytes",
      "$substrCP",
      "$subtract",
      "$sum",
      "$switch",
      "$tan",
      "$toBool",
      "$toDate",
      "$toDecimal",
      "$toDouble",
      "$toInt",
      "$toLong",
      "$toObjectId",
      "$toString",
      "$toLower",
      "$toUpper",
      "$trim",
      "$trunc",
      "$type",
      "$week",
      "$year",
      "$zip",
      "$comment",
      "$explain",
      "$hint",
      "$max",
      "$maxTimeMS",
      "$min",
      "$orderby",
      "$query",
      "$returnKey",
      "$showDiskLoc",
      "$natural",
    ],
    t =
      "(?:" +
      (e = e.map(function ($) {
        return $.replace("$", "\\$");
      })).join("|") +
      ")\\b";
  ($.languages.mongodb = $.languages.extend("javascript", {})),
    $.languages.insertBefore("mongodb", "string", {
      property: {
        pattern:
          /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
        greedy: !0,
        inside: { keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$") },
      },
    }),
    ($.languages.mongodb.string.inside = {
      url: {
        pattern:
          /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
        greedy: !0,
      },
      entity: {
        pattern:
          /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
        greedy: !0,
      },
    }),
    $.languages.insertBefore("mongodb", "constant", {
      builtin: {
        pattern: RegExp(
          "\\b(?:" +
            [
              "ObjectId",
              "Code",
              "BinData",
              "DBRef",
              "Timestamp",
              "NumberLong",
              "NumberDecimal",
              "MaxKey",
              "MinKey",
              "RegExp",
              "ISODate",
              "UUID",
            ].join("|") +
            ")\\b"
        ),
        alias: "keyword",
      },
    });
})(Prism);
(Prism.languages.objectivec = Prism.languages.extend("c", {
  string:
    /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  keyword:
    /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
})),
  delete Prism.languages.objectivec["class-name"],
  (Prism.languages.objc = Prism.languages.objectivec);
Prism.languages.perl = {
  comment: [
    { pattern: /(^\s*)=\w[\s\S]*?=cut.*/m, lookbehind: !0 },
    { pattern: /(^|[^\\$])#.*/, lookbehind: !0 },
  ],
  string: [
    {
      pattern:
        /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: !0,
    },
    {
      pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: !0,
    },
    { pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, greedy: !0 },
    { pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, greedy: !0 },
    { pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, greedy: !0 },
    { pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, greedy: !0 },
    { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
    { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
  ],
  regex: [
    {
      pattern:
        /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern:
        /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
      lookbehind: !0,
      greedy: !0,
    },
    {
      pattern:
        /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
      greedy: !0,
    },
  ],
  variable: [
    /[&*$@%]\{\^[A-Z]+\}/,
    /[&*$@%]\^[A-Z_]/,
    /[&*$@%]#?(?=\{)/,
    /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/i,
    /[&*$@%]\d+/,
    /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/,
  ],
  filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: "symbol" },
  vstring: { pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: "string" },
  function: { pattern: /sub \w+/i, inside: { keyword: /sub/ } },
  keyword:
    /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
  number:
    /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
  operator:
    /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
  punctuation: /[{}[\];(),:]/,
};
!(function (a) {
  var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
  (a.languages.phpdoc = a.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp(
        "(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" +
          e +
          "\\s+)?)\\$\\w+"
      ),
      lookbehind: !0,
    },
  })),
    a.languages.insertBefore("phpdoc", "keyword", {
      "class-name": [
        {
          pattern: RegExp(
            "(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" +
              e
          ),
          lookbehind: !0,
          inside: {
            keyword:
              /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
            punctuation: /[|\\[\]()]/,
          },
        },
      ],
    }),
    a.languages.javadoclike.addSupport("php", a.languages.phpdoc);
})(Prism);
Prism.languages.insertBefore("php", "variable", {
  this: /\$this\b/,
  global:
    /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
  scope: {
    pattern: /\b[\w\\]+::/,
    inside: { keyword: /static|self|parent/, punctuation: /::|\\/ },
  },
});
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0,
  },
  variable: [
    { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
    /@[\w.$]+/,
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0,
  },
  function:
    /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword:
    /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator:
    /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/,
};
!(function (E) {
  var A = (E.languages.plsql = E.languages.extend("sql", {
      comment: [/\/\*[\s\S]*?\*\//, /--.*/],
    })),
    T = A.keyword;
  Array.isArray(T) || (T = A.keyword = [T]),
    T.unshift(
      /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i
    );
  var R = A.operator;
  Array.isArray(R) || (R = A.operator = [R]), R.unshift(/:=/);
})(Prism);
!(function (e) {
  var i = (Prism.languages.powershell = {
      comment: [
        { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
        { pattern: /(^|[^`])#.*/, lookbehind: !0 },
      ],
      string: [
        {
          pattern: /"(?:`[\s\S]|[^`"])*"/,
          greedy: !0,
          inside: {
            function: {
              pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
              lookbehind: !0,
              inside: {},
            },
          },
        },
        { pattern: /'(?:[^']|'')*'/, greedy: !0 },
      ],
      namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
      boolean: /\$(?:true|false)\b/i,
      variable: /\$\w+\b/,
      function: [
        /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
        /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
      ],
      keyword:
        /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
      operator: {
        pattern:
          /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
        lookbehind: !0,
      },
      punctuation: /[|{}[\];(),.]/,
    }),
    r = i.string[0].inside;
  (r.boolean = i.boolean), (r.variable = i.variable), (r.function.inside = i);
})();
Prism.languages.properties = {
  comment: /^[ \t]*[#!].*$/m,
  "attr-value": {
    pattern:
      /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
    lookbehind: !0,
  },
  "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
  punctuation: /[=:]/,
};
!(function (e) {
  var s =
    /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;
  (e.languages.protobuf = e.languages.extend("clike", {
    "class-name": [
      {
        pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
        lookbehind: !0,
      },
      {
        pattern:
          /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
        lookbehind: !0,
      },
    ],
    keyword:
      /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
  })),
    e.languages.insertBefore("protobuf", "operator", {
      map: {
        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
        alias: "class-name",
        inside: { punctuation: /[<>.,]/, builtin: s },
      },
      builtin: s,
      "positional-class-name": {
        pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
        alias: "class-name",
        inside: { punctuation: /\./ },
      },
      annotation: { pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i, lookbehind: !0 },
    });
})(Prism);
!(function (e) {
  e.languages.pug = {
    comment: {
      pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
      lookbehind: !0,
    },
    "multiline-script": {
      pattern:
        /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    filter: {
      pattern:
        /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" } },
    },
    "multiline-plain-text": {
      pattern:
        /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
    },
    markup: {
      pattern: /(^[\t ]*)<.+/m,
      lookbehind: !0,
      inside: e.languages.markup,
    },
    doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
    "flow-control": {
      pattern:
        /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
      lookbehind: !0,
      inside: {
        each: {
          pattern: /^each .+? in\b/,
          inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ },
        },
        branch: {
          pattern: /^(?:if|unless|else|case|when|default|while)\b/,
          alias: "keyword",
        },
        rest: e.languages.javascript,
      },
    },
    keyword: {
      pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
      lookbehind: !0,
    },
    mixin: [
      {
        pattern: /(^[\t ]*)mixin .+/m,
        lookbehind: !0,
        inside: {
          keyword: /^mixin/,
          function: /\w+(?=\s*\(|\s*$)/,
          punctuation: /[(),.]/,
        },
      },
      {
        pattern: /(^[\t ]*)\+.+/m,
        lookbehind: !0,
        inside: {
          name: { pattern: /^\+\w+/, alias: "function" },
          rest: e.languages.javascript,
        },
      },
    ],
    script: {
      pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    "plain-text": {
      pattern:
        /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
      lookbehind: !0,
    },
    tag: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: !0,
      inside: {
        attributes: [
          { pattern: /&[^(]+\([^)]+\)/, inside: e.languages.javascript },
          {
            pattern: /\([^)]+\)/,
            inside: {
              "attr-value": {
                pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
              punctuation: /[!=(),]+/,
            },
          },
        ],
        punctuation: /:/,
        "attr-id": /#[\w\-]+/,
        "attr-class": /\.[\w\-]+/,
      },
    },
    code: [
      {
        pattern: /(^[\t ]*(?:-|!?=)).+/m,
        lookbehind: !0,
        inside: e.languages.javascript,
      },
    ],
    punctuation: /[.\-!=|]+/,
  };
  for (
    var t = [
        { filter: "atpl", language: "twig" },
        { filter: "coffee", language: "coffeescript" },
        "ejs",
        "handlebars",
        "less",
        "livescript",
        "markdown",
        { filter: "sass", language: "scss" },
        "stylus",
      ],
      n = {},
      a = 0,
      i = t.length;
    a < i;
    a++
  ) {
    var r = t[a];
    (r = "string" == typeof r ? { filter: r, language: r } : r),
      e.languages[r.language] &&
        (n["filter-" + r.filter] = {
          pattern: RegExp(
            "(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ].+|\\s*?(?=\r?\n|\r)))+".replace(
              "{{filter_name}}",
              function () {
                return r.filter;
              }
            ),
            "m"
          ),
          lookbehind: !0,
          inside: {
            "filter-name": { pattern: /^:[\w-]+/, alias: "variable" },
            rest: e.languages[r.language],
          },
        });
  }
  e.languages.insertBefore("pug", "filter", n);
})(Prism);
(Prism.languages.python = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
  "string-interpolation": {
    pattern:
      /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern:
          /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: !0,
        inside: {
          "format-spec": { pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0 },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation",
          },
          rest: null,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string",
  },
  string: {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0,
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0,
  },
  "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: { punctuation: /\./ },
  },
  keyword:
    /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin:
    /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:True|False|None)\b/,
  number:
    /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/,
}),
  (Prism.languages.python[
    "string-interpolation"
  ].inside.interpolation.inside.rest = Prism.languages.python),
  (Prism.languages.py = Prism.languages.python);
!(function (e) {
  for (
    var r =
        "(?:[^\\\\()[\\]{}\"'/]|<string>|/(?![*/])|<comment>|\\(<expr>*\\)|\\[<expr>*\\]|\\{<expr>*\\}|\\\\[^])"
          .replace(/<string>/g, function () {
            return "\"(?:\\\\.|[^\\\\\"\r\n])*\"|'(?:\\\\.|[^\\\\'\r\n])*'";
          })
          .replace(/<comment>/g, function () {
            return "//.*(?!.)|/\\*(?:[^*]|\\*(?!/))*\\*/";
          }),
      n = 0;
    n < 2;
    n++
  )
    r = r.replace(/<expr>/g, function () {
      return r;
    });
  (r = r.replace(/<expr>/g, "[^\\s\\S]")),
    (e.languages.qml = {
      comment: { pattern: /\/\/.*|\/\*[\s\S]*?\*\//, greedy: !0 },
      "javascript-function": {
        pattern: RegExp(
          "((?:^|;)[ \t]*)function\\s+(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*\\s*\\(<js>*\\)\\s*\\{<js>*\\}".replace(
            /<js>/g,
            function () {
              return r;
            }
          ),
          "m"
        ),
        lookbehind: !0,
        greedy: !0,
        alias: "language-javascript",
        inside: e.languages.javascript,
      },
      "class-name": {
        pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
        lookbehind: !0,
      },
      property: [
        {
          pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
          lookbehind: !0,
        },
        {
          pattern:
            /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
          lookbehind: !0,
          inside: { keyword: /^property/, property: /\w+(?:\.\w+)*/ },
        },
      ],
      "javascript-expression": {
        pattern: RegExp(
          "(:[ \t]*)(?![\\s;}[])(?:(?!$|[;}])<js>)+".replace(
            /<js>/g,
            function () {
              return r;
            }
          ),
          "m"
        ),
        lookbehind: !0,
        greedy: !0,
        alias: "language-javascript",
        inside: e.languages.javascript,
      },
      string: /"(?:\\.|[^\\"\r\n])*"/,
      keyword: /\b(?:as|import|on)\b/,
      punctuation: /[{}[\]:;,]/,
    });
})(Prism);
Prism.languages.r = {
  comment: /#.*/,
  string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
  boolean: /\b(?:TRUE|FALSE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [
    /\b(?:NaN|Inf)\b/,
    /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
  ],
  keyword:
    /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
  operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
  punctuation: /[(){}\[\],;]/,
};
!(function (i) {
  var t = i.util.clone(i.languages.javascript),
    e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
  function n(t, n) {
    return (
      (t = t
        .replace(/<S>/g, function () {
          return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
        })
        .replace(/<BRACES>/g, function () {
          return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
        })
        .replace(/<SPREAD>/g, function () {
          return e;
        })),
      RegExp(t, n)
    );
  }
  (e = n(e).source),
    (i.languages.jsx = i.languages.extend("markup", t)),
    (i.languages.jsx.tag.pattern = n(
      "</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"
    )),
    (i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
    (i.languages.jsx.tag.inside["attr-value"].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i),
    (i.languages.jsx.tag.inside.tag.inside["class-name"] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (i.languages.jsx.tag.inside.comment = t.comment),
    i.languages.insertBefore(
      "inside",
      "attr-name",
      { spread: { pattern: n("<SPREAD>"), inside: i.languages.jsx } },
      i.languages.jsx.tag
    ),
    i.languages.insertBefore(
      "inside",
      "special-attr",
      {
        script: {
          pattern: n("=<BRACES>"),
          inside: {
            "script-punctuation": { pattern: /^=(?={)/, alias: "punctuation" },
            rest: i.languages.jsx,
          },
          alias: "language-javascript",
        },
      },
      i.languages.jsx.tag
    );
  var o = function (t) {
      return t
        ? "string" == typeof t
          ? t
          : "string" == typeof t.content
          ? t.content
          : t.content.map(o).join("")
        : "";
    },
    r = function (t) {
      for (var n = [], e = 0; e < t.length; e++) {
        var a = t[e],
          s = !1;
        if (
          ("string" != typeof a &&
            ("tag" === a.type && a.content[0] && "tag" === a.content[0].type
              ? "</" === a.content[0].content[0].content
                ? 0 < n.length &&
                  n[n.length - 1].tagName === o(a.content[0].content[1]) &&
                  n.pop()
                : "/>" === a.content[a.content.length - 1].content ||
                  n.push({
                    tagName: o(a.content[0].content[1]),
                    openedBraces: 0,
                  })
              : 0 < n.length && "punctuation" === a.type && "{" === a.content
              ? n[n.length - 1].openedBraces++
              : 0 < n.length &&
                0 < n[n.length - 1].openedBraces &&
                "punctuation" === a.type &&
                "}" === a.content
              ? n[n.length - 1].openedBraces--
              : (s = !0)),
          (s || "string" == typeof a) &&
            0 < n.length &&
            0 === n[n.length - 1].openedBraces)
        ) {
          var g = o(a);
          e < t.length - 1 &&
            ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) &&
            ((g += o(t[e + 1])), t.splice(e + 1, 1)),
            0 < e &&
              ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) &&
              ((g = o(t[e - 1]) + g), t.splice(e - 1, 1), e--),
            (t[e] = new i.Token("plain-text", g, null, g));
        }
        a.content && "string" != typeof a.content && r(a.content);
      }
    };
  i.hooks.add("after-tokenize", function (t) {
    ("jsx" !== t.language && "tsx" !== t.language) || r(t.tokens);
  });
})(Prism);
!(function (a) {
  var e = a.util.clone(a.languages.typescript);
  a.languages.tsx = a.languages.extend("jsx", e);
  var t = a.languages.tsx.tag;
  (t.pattern = RegExp(
    "(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")",
    t.pattern.flags
  )),
    (t.lookbehind = !0);
})(Prism);
Prism.languages.rest = {
  table: [
    {
      pattern:
        /(^[\t ]*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1[+|].+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/m,
      lookbehind: !0,
      inside: { punctuation: /\||(?:\+[=-]+)+\+/ },
    },
    {
      pattern:
        /(^[\t ]*)=+ [ =]*=(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1=+ [ =]*=(?=(?:\r?\n|\r){2}|\s*$)/m,
      lookbehind: !0,
      inside: { punctuation: /[=-]+/ },
    },
  ],
  "substitution-def": {
    pattern: /(^[\t ]*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
    lookbehind: !0,
    inside: {
      substitution: {
        pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
        alias: "attr-value",
        inside: { punctuation: /^\||\|$/ },
      },
      directive: {
        pattern: /( )(?! )[^:]+::/,
        lookbehind: !0,
        alias: "function",
        inside: { punctuation: /::$/ },
      },
    },
  },
  "link-target": [
    {
      pattern: /(^[\t ]*\.\. )\[[^\]]+\]/m,
      lookbehind: !0,
      alias: "string",
      inside: { punctuation: /^\[|\]$/ },
    },
    {
      pattern: /(^[\t ]*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
      lookbehind: !0,
      alias: "string",
      inside: { punctuation: /^_|:$/ },
    },
  ],
  directive: {
    pattern: /(^[\t ]*\.\. )[^:]+::/m,
    lookbehind: !0,
    alias: "function",
    inside: { punctuation: /::$/ },
  },
  comment: {
    pattern:
      /(^[\t ]*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
    lookbehind: !0,
  },
  title: [
    {
      pattern:
        /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
      inside: {
        punctuation:
          /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
        important: /.+/,
      },
    },
    {
      pattern:
        /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
      lookbehind: !0,
      inside: {
        punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
        important: /.+/,
      },
    },
  ],
  hr: {
    pattern:
      /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
    lookbehind: !0,
    alias: "punctuation",
  },
  field: {
    pattern: /(^[\t ]*):[^:\r\n]+:(?= )/m,
    lookbehind: !0,
    alias: "attr-name",
  },
  "command-line-option": {
    pattern:
      /(^[\t ]*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
    lookbehind: !0,
    alias: "symbol",
  },
  "literal-block": {
    pattern: /::(?:\r?\n|\r){2}([ \t]+)(?![ \t]).+(?:(?:\r?\n|\r)\1.+)*/,
    inside: {
      "literal-block-punctuation": { pattern: /^::/, alias: "punctuation" },
    },
  },
  "quoted-literal-block": {
    pattern:
      /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
    inside: {
      "literal-block-punctuation": {
        pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
        alias: "punctuation",
      },
    },
  },
  "list-bullet": {
    pattern:
      /(^[\t ]*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
    lookbehind: !0,
    alias: "punctuation",
  },
  "doctest-block": {
    pattern: /(^[\t ]*)>>> .+(?:(?:\r?\n|\r).+)*/m,
    lookbehind: !0,
    inside: { punctuation: /^>>>/ },
  },
  inline: [
    {
      pattern:
        /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s)(?:(?!\2).)*\S\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
      lookbehind: !0,
      inside: {
        bold: { pattern: /(^\*\*).+(?=\*\*$)/, lookbehind: !0 },
        italic: { pattern: /(^\*).+(?=\*$)/, lookbehind: !0 },
        "inline-literal": {
          pattern: /(^``).+(?=``$)/,
          lookbehind: !0,
          alias: "symbol",
        },
        role: {
          pattern: /^:[^:]+:|:[^:]+:$/,
          alias: "function",
          inside: { punctuation: /^:|:$/ },
        },
        "interpreted-text": {
          pattern: /(^`).+(?=`$)/,
          lookbehind: !0,
          alias: "attr-value",
        },
        substitution: {
          pattern: /(^\|).+(?=\|$)/,
          lookbehind: !0,
          alias: "attr-value",
        },
        punctuation: /\*\*?|``?|\|/,
      },
    },
  ],
  link: [
    {
      pattern: /\[[^\[\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
      alias: "string",
      inside: { punctuation: /^\[|\]_$/ },
    },
    {
      pattern:
        /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
      alias: "string",
      inside: { punctuation: /^_?`|`$|`?_?_$/ },
    },
  ],
  punctuation: {
    pattern: /(^[\t ]*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
    lookbehind: !0,
  },
};
!(function (e) {
  for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++)
    a = a.replace(/<self>/g, function () {
      return a;
    });
  (a = a.replace(/<self>/g, function () {
    return "[^\\s\\S]";
  })),
    (e.languages.rust = {
      comment: [
        { pattern: RegExp("(^|[^\\\\])" + a), lookbehind: !0, greedy: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0,
      },
      char: {
        pattern:
          /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0,
        alias: "string",
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: { string: null },
      },
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" },
          rest: null,
        },
      },
      "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation",
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function",
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name",
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace",
        },
        {
          pattern:
            /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: { punctuation: /::/ },
        },
      ],
      keyword: [
        /\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/,
      ],
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: { pattern: /\b\w+!/, alias: "property" },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: { punctuation: /::/ },
      },
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
    }),
    (e.languages.rust["closure-params"].inside.rest = e.languages.rust),
    (e.languages.rust.attribute.inside.string = e.languages.rust.string);
})(Prism);
!(function (e) {
  (e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
    },
  })),
    e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        inside: { atrule: /(?:@[\w-]+|[+=])/m },
      },
    }),
    delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
    a = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
      { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
    ];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      inside: { punctuation: /:/, variable: t, operator: a },
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          { pattern: /(:)[^:\s]+/, lookbehind: !0 },
        ],
        punctuation: /:/,
        variable: t,
        operator: a,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern:
          /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
        lookbehind: !0,
      },
    });
})(Prism);
(Prism.languages.scss = Prism.languages.extend("css", {
  comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ },
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern:
      /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
    inside: {
      parent: { pattern: /&/, alias: "important" },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
  },
})),
  Prism.languages.insertBefore("scss", "atrule", {
    keyword: [
      /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
      { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
    ],
  }),
  Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/,
  }),
  Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|with|show|hide)\b/i,
      alias: "keyword",
    },
    placeholder: { pattern: /%[-\w]+/, alias: "selector" },
    statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" },
    boolean: /\b(?:true|false)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
      lookbehind: !0,
    },
  }),
  (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
(Prism.languages.scala = Prism.languages.extend("java", {
  "triple-quoted-string": {
    pattern: /"""[\s\S]*?"""/,
    greedy: !0,
    alias: "string",
  },
  string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  keyword:
    /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
  number:
    /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
  builtin:
    /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
  symbol: /'[^\d\s\\]\w*/,
})),
  delete Prism.languages.scala["class-name"],
  delete Prism.languages.scala.function;
!(function (e) {
  var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
    r = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
    t = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: !0,
      },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s|$)|@[\w-]+)/,
        lookbehind: !0,
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [
        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
        {
          pattern:
            /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: {
            unit: n,
            number: r,
            function: /[\w-]+(?=\()/,
            punctuation: /[(),]/,
          },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: n,
      boolean: /\b(?:true|false)\b/,
      operator: [
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
      ],
      number: r,
      punctuation: /[{}()\[\];:,]/,
    };
  (t.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: { delimiter: { pattern: /^{|}$/, alias: "punctuation" }, rest: t },
  }),
    (t.func = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: { function: /^[^(]+/, rest: t },
    }),
    (e.languages.stylus = {
      "atrule-declaration": {
        pattern: /(^[ \t]*)@.+/m,
        lookbehind: !0,
        inside: { atrule: /^@[\w-]+/, rest: t },
      },
      "variable-declaration": {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
        lookbehind: !0,
        inside: { variable: /^\S+/, rest: t },
      },
      statement: {
        pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
        lookbehind: !0,
        inside: { keyword: /^\S+/, rest: t },
      },
      "property-declaration": {
        pattern:
          /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
        lookbehind: !0,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: { interpolation: t.interpolation },
          },
          rest: t,
        },
      },
      selector: {
        pattern:
          /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
        lookbehind: !0,
        inside: {
          interpolation: t.interpolation,
          comment: t.comment,
          punctuation: /[{},]/,
        },
      },
      func: t.func,
      string: t.string,
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0,
      },
      interpolation: t.interpolation,
      punctuation: /[{}()\[\];:.]/,
    });
})(Prism);
(Prism.languages.swift = Prism.languages.extend("clike", {
  string: {
    pattern:
      /("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[^(])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
        inside: { delimiter: { pattern: /^\\\(|\)$/, alias: "variable" } },
      },
    },
  },
  keyword:
    /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|some|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
  number:
    /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  atrule:
    /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
  builtin:
    /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/,
})),
  (Prism.languages.swift.string.inside.interpolation.inside.rest =
    Prism.languages.swift);
!(function (n) {
  function i(e, t, a) {
    return {
      pattern: RegExp("<#" + e + "[\\s\\S]*?#>"),
      alias: "block",
      inside: {
        delimiter: { pattern: RegExp("^<#" + e + "|#>$"), alias: "important" },
        content: { pattern: /[\s\S]+/, inside: t, alias: a },
      },
    };
  }
  n.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
    value: function (e) {
      var t = n.languages[e],
        a = "language-" + e;
      return {
        block: {
          pattern: /<#[\s\S]+?#>/,
          inside: {
            directive: i("@", {
              "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                inside: { punctuation: /^=|^["']|["']$/ },
              },
              keyword: /\b\w+(?=\s)/,
              "attr-name": /\b\w+/,
            }),
            expression: i("=", t, a),
            "class-feature": i("\\+", t, a),
            standard: i("", t, a),
          },
        },
      };
    },
  });
})(Prism);
Prism.languages.t4 = Prism.languages["t4-cs"] =
  Prism.languages["t4-templating"].createT4("csharp");
Prism.languages.tcl = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
  string: { pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/, greedy: !0 },
  variable: [
    { pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/, lookbehind: !0 },
    { pattern: /(\$){[^}]+}/, lookbehind: !0 },
    {
      pattern: /(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
      lookbehind: !0,
    },
  ],
  function: { pattern: /(^[\t ]*proc[ \t]+)\S+/m, lookbehind: !0 },
  builtin: [
    {
      pattern:
        /(^[\t ]*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
      lookbehind: !0,
    },
    /\b(?:elseif|else)\b/,
  ],
  scope: {
    pattern: /(^[\t ]*)(?:global|upvar|variable)\b/m,
    lookbehind: !0,
    alias: "constant",
  },
  keyword: {
    pattern:
      /(^[\t ]*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
    lookbehind: !0,
  },
  operator:
    /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
  punctuation: /[{}()\[\]]/,
};
!(function (E) {
  var n =
    /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
  (E.languages.typoscript = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
      {
        pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^"'])#.*/, lookbehind: !0, greedy: !0 },
    ],
    function: [
      {
        pattern:
          /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
        inside: {
          string: {
            pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
            inside: { keyword: n },
          },
          keyword: { pattern: /INCLUDE_TYPOSCRIPT/ },
        },
      },
      {
        pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
        inside: { string: /"[^"\r\n]*"|'[^'\r\n]*'/ },
      },
    ],
    string: {
      pattern: /^([^=]*=[< ]?)(?:(?!]\n).)*/,
      lookbehind: !0,
      inside: {
        function: /{\$.*}/,
        keyword: n,
        number: /^[0-9]+$/,
        punctuation: /[,|:]/,
      },
    },
    keyword: n,
    number: { pattern: /\b[0-9]+\s*[.{=]/, inside: { operator: /[.{=]/ } },
    tag: { pattern: /\.?[\w-\\]+\.?/, inside: { punctuation: /\./ } },
    punctuation: /[{}[\];(),.:|]/,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  }),
    (E.languages.tsconfig = E.languages.typoscript);
})(Prism);
(Prism.languages["visual-basic"] = {
  comment: {
    pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
    inside: { keyword: /^REM/i },
  },
  directive: {
    pattern:
      /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
    alias: "comment",
    greedy: !0,
  },
  string: { pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i, greedy: !0 },
  date: {
    pattern:
      /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?)[^\S\r\n]*#/i,
    alias: "builtin",
  },
  number:
    /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
  boolean: /\b(?:True|False|Nothing)\b/i,
  keyword:
    /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Until|Xor)\b/i,
  operator: [
    /[+\-*/\\^<=>&#@$%!]/,
    { pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/, lookbehind: !0 },
  ],
  punctuation: /[{}().,:?]/,
}),
  (Prism.languages.vb = Prism.languages["visual-basic"]),
  (Prism.languages.vba = Prism.languages["visual-basic"]);
Prism.languages.wasm = {
  comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
  string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
  keyword: [
    { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
    {
      pattern:
        /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
      inside: { punctuation: /\./ },
    },
    /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
  ],
  variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/i,
  number:
    /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/,
};
!(function (n) {
  function a(a, e) {
    n.languages[a] &&
      n.languages.insertBefore(a, "comment", { "doc-comment": e });
  }
  var e = n.languages.markup.tag,
    t = {
      pattern: /\/\/\/.*/,
      greedy: !0,
      alias: "comment",
      inside: { tag: e },
    },
    g = { pattern: /'''.*/, greedy: !0, alias: "comment", inside: { tag: e } };
  a("csharp", t), a("fsharp", t), a("vbnet", g);
})(Prism);
!(function (e) {
  var n = /[*&][^\s[\]{},]+/,
    r =
      /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    t =
      "(?:" +
      r.source +
      "(?:[ \t]+" +
      n.source +
      ")?|" +
      n.source +
      "(?:[ \t]+" +
      r.source +
      ")?)",
    a =
      "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(
        /<PLAIN>/g,
        function () {
          return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
        }
      ),
    d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";
  function o(e, n) {
    n = (n || "").replace(/m/g, "") + "m";
    var r =
      "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\\s*)?#))"
        .replace(/<<prop>>/g, function () {
          return t;
        })
        .replace(/<<value>>/g, function () {
          return e;
        });
    return RegExp(r, n);
  }
  (e.languages.yaml = {
    scalar: {
      pattern: RegExp(
        "([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(
          /<<prop>>/g,
          function () {
            return t;
          }
        )
      ),
      lookbehind: !0,
      alias: "string",
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        "((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)"
          .replace(/<<prop>>/g, function () {
            return t;
          })
          .replace(/<<key>>/g, function () {
            return "(?:" + a + "|" + d + ")";
          })
      ),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule",
    },
    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
    datetime: {
      pattern: o(
        "\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"
      ),
      lookbehind: !0,
      alias: "number",
    },
    boolean: {
      pattern: o("true|false", "i"),
      lookbehind: !0,
      alias: "important",
    },
    null: { pattern: o("null|~", "i"), lookbehind: !0, alias: "important" },
    string: { pattern: o(d), lookbehind: !0, greedy: !0 },
    number: {
      pattern: o(
        "[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)",
        "i"
      ),
      lookbehind: !0,
    },
    tag: r,
    important: n,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
  }),
    (e.languages.yml = e.languages.yaml);
})(Prism);
!(function () {
  if (
    "undefined" != typeof Prism &&
    "undefined" != typeof document &&
    document.querySelector
  ) {
    var t,
      o = "line-numbers",
      s = "linkable-line-numbers",
      a = function () {
        if (void 0 === t) {
          var e = document.createElement("div");
          (e.style.fontSize = "13px"),
            (e.style.lineHeight = "1.5"),
            (e.style.padding = "0"),
            (e.style.border = "0"),
            (e.innerHTML = "&nbsp;<br />&nbsp;"),
            document.body.appendChild(e),
            (t = 38 === e.offsetHeight),
            document.body.removeChild(e);
        }
        return t;
      },
      l = !0,
      u = 0;
    Prism.hooks.add("before-sanity-check", function (e) {
      var t = e.element.parentElement;
      if (c(t)) {
        var n = 0;
        v(".line-highlight", t).forEach(function (e) {
          (n += e.textContent.length), e.parentNode.removeChild(e);
        }),
          n &&
            /^(?: \n)+$/.test(e.code.slice(-n)) &&
            (e.code = e.code.slice(0, -n));
      }
    }),
      Prism.hooks.add("complete", function e(t) {
        var n = t.element.parentElement;
        if (c(n)) {
          clearTimeout(u);
          var i = Prism.plugins.lineNumbers,
            r = t.plugins && t.plugins.lineNumbers;
          if (b(n, o) && i && !r) Prism.hooks.add("line-numbers", e);
          else d(n)(), (u = setTimeout(f, 1));
        }
      }),
      window.addEventListener("hashchange", f),
      window.addEventListener("resize", function () {
        v("pre")
          .filter(c)
          .map(function (e) {
            return d(e);
          })
          .forEach(y);
      });
  }
  function v(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }
  function b(e, t) {
    return e.classList.contains(t);
  }
  function y(e) {
    e();
  }
  function c(e) {
    return (
      !(!e || !/pre/i.test(e.nodeName)) &&
      (!!e.hasAttribute("data-line") || !(!e.id || !Prism.util.isActive(e, s)))
    );
  }
  function d(u, e, c) {
    var t = (e = "string" == typeof e ? e : u.getAttribute("data-line") || "")
        .replace(/\s+/g, "")
        .split(",")
        .filter(Boolean),
      d = +u.getAttribute("data-line-offset") || 0,
      f = (a() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
      p = Prism.util.isActive(u, o),
      n = u.querySelector("code"),
      h = p ? u : n || u,
      m = [],
      g =
        n && h != n
          ? (function (e, t) {
              var n = getComputedStyle(e),
                i = getComputedStyle(t);
              function r(e) {
                return +e.substr(0, e.length - 2);
              }
              return (
                t.offsetTop +
                r(i.borderTopWidth) +
                r(i.paddingTop) -
                r(n.paddingTop)
              );
            })(u, n)
          : 0;
    t.forEach(function (e) {
      var t = e.split("-"),
        n = +t[0],
        i = +t[1] || n,
        r =
          u.querySelector('.line-highlight[data-range="' + e + '"]') ||
          document.createElement("div");
      if (
        (m.push(function () {
          r.setAttribute("aria-hidden", "true"),
            r.setAttribute("data-range", e),
            (r.className = (c || "") + " line-highlight");
        }),
        p && Prism.plugins.lineNumbers)
      ) {
        var o = Prism.plugins.lineNumbers.getLine(u, n),
          s = Prism.plugins.lineNumbers.getLine(u, i);
        if (o) {
          var a = o.offsetTop + g + "px";
          m.push(function () {
            r.style.top = a;
          });
        }
        if (s) {
          var l = s.offsetTop - o.offsetTop + s.offsetHeight + "px";
          m.push(function () {
            r.style.height = l;
          });
        }
      } else
        m.push(function () {
          r.setAttribute("data-start", String(n)),
            n < i && r.setAttribute("data-end", String(i)),
            (r.style.top = (n - d - 1) * f + g + "px"),
            (r.textContent = new Array(i - n + 2).join(" \n"));
        });
      m.push(function () {
        h.appendChild(r);
      });
    });
    var i = u.id;
    if (p && Prism.util.isActive(u, s) && i) {
      b(u, s) ||
        m.push(function () {
          u.classList.add(s);
        });
      var r = parseInt(u.getAttribute("data-start") || "1");
      v(".line-numbers-rows > span", u).forEach(function (e, t) {
        var n = t + r;
        e.onclick = function () {
          var e = i + "." + n;
          (l = !1),
            (location.hash = e),
            setTimeout(function () {
              l = !0;
            }, 1);
        };
      });
    }
    return function () {
      m.forEach(y);
    };
  }
  function f() {
    var e = location.hash.slice(1);
    v(".temporary.line-highlight").forEach(function (e) {
      e.parentNode.removeChild(e);
    });
    var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
    if (t && !document.getElementById(e)) {
      var n = e.slice(0, e.lastIndexOf(".")),
        i = document.getElementById(n);
      if (i)
        i.hasAttribute("data-line") || i.setAttribute("data-line", ""),
          d(i, t, "temporary ")(),
          l &&
            document
              .querySelector(".temporary.line-highlight")
              .scrollIntoView();
    }
  }
})();
!(function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var o = "line-numbers",
      a = /\n(?!$)/g,
      e = (Prism.plugins.lineNumbers = {
        getLine: function (e, n) {
          if ("PRE" === e.tagName && e.classList.contains(o)) {
            var t = e.querySelector(".line-numbers-rows");
            if (t) {
              var i = parseInt(e.getAttribute("data-start"), 10) || 1,
                r = i + (t.children.length - 1);
              n < i && (n = i), r < n && (n = r);
              var s = n - i;
              return t.children[s];
            }
          }
        },
        resize: function (e) {
          u([e]);
        },
        assumeViewportIndependence: !0,
      }),
      n = void 0;
    window.addEventListener("resize", function () {
      (e.assumeViewportIndependence && n === window.innerWidth) ||
        ((n = window.innerWidth),
        u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))));
    }),
      Prism.hooks.add("complete", function (e) {
        if (e.code) {
          var n = e.element,
            t = n.parentNode;
          if (
            t &&
            /pre/i.test(t.nodeName) &&
            !n.querySelector(".line-numbers-rows") &&
            Prism.util.isActive(n, o)
          ) {
            n.classList.remove(o), t.classList.add(o);
            var i,
              r = e.code.match(a),
              s = r ? r.length + 1 : 1,
              l = new Array(s + 1).join("<span></span>");
            (i = document.createElement("span")).setAttribute(
              "aria-hidden",
              "true"
            ),
              (i.className = "line-numbers-rows"),
              (i.innerHTML = l),
              t.hasAttribute("data-start") &&
                (t.style.counterReset =
                  "linenumber " +
                  (parseInt(t.getAttribute("data-start"), 10) - 1)),
              e.element.appendChild(i),
              u([t]),
              Prism.hooks.run("line-numbers", e);
          }
        }
      }),
      Prism.hooks.add("line-numbers", function (e) {
        (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
      });
  }
  function u(e) {
    if (
      0 !=
      (e = e.filter(function (e) {
        var n = (function (e) {
          return e
            ? window.getComputedStyle
              ? getComputedStyle(e)
              : e.currentStyle || null
            : null;
        })(e)["white-space"];
        return "pre-wrap" === n || "pre-line" === n;
      })).length
    ) {
      var n = e
        .map(function (e) {
          var n = e.querySelector("code"),
            t = e.querySelector(".line-numbers-rows");
          if (n && t) {
            var i = e.querySelector(".line-numbers-sizer"),
              r = n.textContent.split(a);
            i ||
              (((i = document.createElement("span")).className =
                "line-numbers-sizer"),
              n.appendChild(i)),
              (i.innerHTML = "0"),
              (i.style.display = "block");
            var s = i.getBoundingClientRect().height;
            return (
              (i.innerHTML = ""),
              {
                element: e,
                lines: r,
                lineHeights: [],
                oneLinerHeight: s,
                sizer: i,
              }
            );
          }
        })
        .filter(Boolean);
      n.forEach(function (e) {
        var i = e.sizer,
          n = e.lines,
          r = e.lineHeights,
          s = e.oneLinerHeight;
        (r[n.length - 1] = void 0),
          n.forEach(function (e, n) {
            if (e && 1 < e.length) {
              var t = i.appendChild(document.createElement("span"));
              (t.style.display = "block"), (t.textContent = e);
            } else r[n] = s;
          });
      }),
        n.forEach(function (e) {
          for (
            var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
            r < t.length;
            r++
          )
            void 0 === t[r] &&
              (t[r] = n.children[i++].getBoundingClientRect().height);
        }),
        n.forEach(function (e) {
          var n = e.sizer,
            t = e.element.querySelector(".line-numbers-rows");
          (n.style.display = "none"),
            (n.innerHTML = ""),
            e.lineHeights.forEach(function (e, n) {
              t.children[n].style.height = e + "px";
            });
        });
    }
  }
})();
!(function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var i = [],
      l = {},
      d = function () {};
    Prism.plugins.toolbar = {};
    var e = (Prism.plugins.toolbar.registerButton = function (e, n) {
        var t;
        (t =
          "function" == typeof n
            ? n
            : function (e) {
                var t;
                return (
                  "function" == typeof n.onClick
                    ? (((t = document.createElement("button")).type = "button"),
                      t.addEventListener("click", function () {
                        n.onClick.call(this, e);
                      }))
                    : "string" == typeof n.url
                    ? ((t = document.createElement("a")).href = n.url)
                    : (t = document.createElement("span")),
                  n.className && t.classList.add(n.className),
                  (t.textContent = n.text),
                  t
                );
              }),
          e in l
            ? console.warn(
                'There is a button with the key "' + e + '" registered already.'
              )
            : i.push((l[e] = t));
      }),
      t = (Prism.plugins.toolbar.hook = function (a) {
        var e = a.element.parentNode;
        if (
          e &&
          /pre/i.test(e.nodeName) &&
          !e.parentNode.classList.contains("code-toolbar")
        ) {
          var t = document.createElement("div");
          t.classList.add("code-toolbar"),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
          var r = document.createElement("div");
          r.classList.add("toolbar");
          var n = i,
            o = (function (e) {
              for (; e; ) {
                var t = e.getAttribute("data-toolbar-order");
                if (null != t)
                  return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                e = e.parentElement;
              }
            })(a.element);
          o &&
            (n = o.map(function (e) {
              return l[e] || d;
            })),
            n.forEach(function (e) {
              var t = e(a);
              if (t) {
                var n = document.createElement("div");
                n.classList.add("toolbar-item"),
                  n.appendChild(t),
                  r.appendChild(n);
              }
            }),
            t.appendChild(r);
        }
      });
    e("label", function (e) {
      var t = e.element.parentNode;
      if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
        var n,
          a,
          r = t.getAttribute("data-label");
        try {
          a = document.querySelector("template#" + r);
        } catch (e) {}
        return (
          a
            ? (n = a.content)
            : (t.hasAttribute("data-url")
                ? ((n = document.createElement("a")).href =
                    t.getAttribute("data-url"))
                : (n = document.createElement("span")),
              (n.textContent = r)),
          n
        );
      }
    }),
      Prism.hooks.add("complete", t);
  }
})();
!(function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document)
    if (Prism.plugins.toolbar) {
      var i = {
        none: "Plain text",
        plain: "Plain text",
        plaintext: "Plain text",
        text: "Plain text",
        txt: "Plain text",
        html: "HTML",
        xml: "XML",
        svg: "SVG",
        mathml: "MathML",
        ssml: "SSML",
        rss: "RSS",
        css: "CSS",
        clike: "C-like",
        js: "JavaScript",
        abap: "ABAP",
        abnf: "ABNF",
        al: "AL",
        antlr4: "ANTLR4",
        g4: "ANTLR4",
        apacheconf: "Apache Configuration",
        apl: "APL",
        aql: "AQL",
        arff: "ARFF",
        asciidoc: "AsciiDoc",
        adoc: "AsciiDoc",
        aspnet: "ASP.NET (C#)",
        asm6502: "6502 Assembly",
        autohotkey: "AutoHotkey",
        autoit: "AutoIt",
        basic: "BASIC",
        bbcode: "BBcode",
        bnf: "BNF",
        rbnf: "RBNF",
        bsl: "BSL (1C:Enterprise)",
        oscript: "OneScript",
        csharp: "C#",
        cs: "C#",
        dotnet: "C#",
        cpp: "C++",
        cfscript: "CFScript",
        cfc: "CFScript",
        cil: "CIL",
        cmake: "CMake",
        cobol: "COBOL",
        coffee: "CoffeeScript",
        conc: "Concurnas",
        csp: "Content-Security-Policy",
        "css-extras": "CSS Extras",
        csv: "CSV",
        dataweave: "DataWeave",
        dax: "DAX",
        django: "Django/Jinja2",
        jinja2: "Django/Jinja2",
        "dns-zone-file": "DNS zone file",
        "dns-zone": "DNS zone file",
        dockerfile: "Docker",
        dot: "DOT (Graphviz)",
        gv: "DOT (Graphviz)",
        ebnf: "EBNF",
        editorconfig: "EditorConfig",
        ejs: "EJS",
        etlua: "Embedded Lua templating",
        erb: "ERB",
        "excel-formula": "Excel Formula",
        xlsx: "Excel Formula",
        xls: "Excel Formula",
        fsharp: "F#",
        "firestore-security-rules": "Firestore security rules",
        ftl: "FreeMarker Template Language",
        gml: "GameMaker Language",
        gamemakerlanguage: "GameMaker Language",
        gcode: "G-code",
        gdscript: "GDScript",
        gedcom: "GEDCOM",
        glsl: "GLSL",
        graphql: "GraphQL",
        hbs: "Handlebars",
        hs: "Haskell",
        hcl: "HCL",
        hlsl: "HLSL",
        http: "HTTP",
        hpkp: "HTTP Public-Key-Pins",
        hsts: "HTTP Strict-Transport-Security",
        ichigojam: "IchigoJam",
        "icu-message-format": "ICU Message Format",
        idr: "Idris",
        ignore: ".ignore",
        gitignore: ".gitignore",
        hgignore: ".hgignore",
        npmignore: ".npmignore",
        inform7: "Inform 7",
        javadoc: "JavaDoc",
        javadoclike: "JavaDoc-like",
        javastacktrace: "Java stack trace",
        jq: "JQ",
        jsdoc: "JSDoc",
        "js-extras": "JS Extras",
        json: "JSON",
        webmanifest: "Web App Manifest",
        json5: "JSON5",
        jsonp: "JSONP",
        jsstacktrace: "JS stack trace",
        "js-templates": "JS Templates",
        kts: "Kotlin Script",
        kt: "Kotlin",
        kumir: "KuMir (КуМир)",
        kum: "KuMir (КуМир)",
        latex: "LaTeX",
        tex: "TeX",
        context: "ConTeXt",
        lilypond: "LilyPond",
        ly: "LilyPond",
        emacs: "Lisp",
        elisp: "Lisp",
        "emacs-lisp": "Lisp",
        llvm: "LLVM IR",
        log: "Log file",
        lolcode: "LOLCODE",
        md: "Markdown",
        "markup-templating": "Markup templating",
        matlab: "MATLAB",
        mel: "MEL",
        mongodb: "MongoDB",
        moon: "MoonScript",
        n1ql: "N1QL",
        n4js: "N4JS",
        n4jsd: "N4JS",
        "nand2tetris-hdl": "Nand To Tetris HDL",
        naniscript: "Naninovel Script",
        nani: "Naninovel Script",
        nasm: "NASM",
        neon: "NEON",
        nginx: "nginx",
        nsis: "NSIS",
        objectivec: "Objective-C",
        objc: "Objective-C",
        ocaml: "OCaml",
        opencl: "OpenCL",
        openqasm: "OpenQasm",
        qasm: "OpenQasm",
        parigp: "PARI/GP",
        objectpascal: "Object Pascal",
        psl: "PATROL Scripting Language",
        pcaxis: "PC-Axis",
        px: "PC-Axis",
        peoplecode: "PeopleCode",
        pcode: "PeopleCode",
        php: "PHP",
        phpdoc: "PHPDoc",
        "php-extras": "PHP Extras",
        plsql: "PL/SQL",
        powerquery: "PowerQuery",
        pq: "PowerQuery",
        mscript: "PowerQuery",
        powershell: "PowerShell",
        promql: "PromQL",
        properties: ".properties",
        protobuf: "Protocol Buffers",
        purebasic: "PureBasic",
        pbfasm: "PureBasic",
        purs: "PureScript",
        py: "Python",
        qsharp: "Q#",
        qs: "Q#",
        q: "Q (kdb+ database)",
        qml: "QML",
        rkt: "Racket",
        jsx: "React JSX",
        tsx: "React TSX",
        renpy: "Ren'py",
        rpy: "Ren'py",
        rest: "reST (reStructuredText)",
        robotframework: "Robot Framework",
        robot: "Robot Framework",
        rb: "Ruby",
        sas: "SAS",
        sass: "Sass (Sass)",
        scss: "Sass (Scss)",
        "shell-session": "Shell session",
        "sh-session": "Shell session",
        shellsession: "Shell session",
        sml: "SML",
        smlnj: "SML/NJ",
        solidity: "Solidity (Ethereum)",
        sol: "Solidity (Ethereum)",
        "solution-file": "Solution file",
        sln: "Solution file",
        soy: "Soy (Closure Template)",
        sparql: "SPARQL",
        rq: "SPARQL",
        "splunk-spl": "Splunk SPL",
        sqf: "SQF: Status Quo Function (Arma 3)",
        sql: "SQL",
        iecst: "Structured Text (IEC 61131-3)",
        "t4-templating": "T4 templating",
        "t4-cs": "T4 Text Templates (C#)",
        t4: "T4 Text Templates (C#)",
        "t4-vb": "T4 Text Templates (VB)",
        tap: "TAP",
        tt2: "Template Toolkit 2",
        toml: "TOML",
        trig: "TriG",
        ts: "TypeScript",
        tsconfig: "TSConfig",
        uscript: "UnrealScript",
        uc: "UnrealScript",
        uri: "URI",
        url: "URL",
        vbnet: "VB.Net",
        vhdl: "VHDL",
        vim: "vim",
        "visual-basic": "Visual Basic",
        vba: "VBA",
        vb: "Visual Basic",
        wasm: "WebAssembly",
        wiki: "Wiki markup",
        wolfram: "Wolfram language",
        nb: "Mathematica Notebook",
        wl: "Wolfram language",
        xeoracube: "XeoraCube",
        "xml-doc": "XML doc (.net)",
        xojo: "Xojo (REALbasic)",
        xquery: "XQuery",
        yaml: "YAML",
        yml: "YAML",
        yang: "YANG",
      };
      Prism.plugins.toolbar.registerButton("show-language", function (e) {
        var a = e.element.parentNode;
        if (a && /pre/i.test(a.nodeName)) {
          var t,
            s =
              a.getAttribute("data-language") ||
              i[e.language] ||
              ((t = e.language)
                ? (t.substring(0, 1).toUpperCase() + t.substring(1)).replace(
                    /s(?=cript)/,
                    "S"
                  )
                : t);
          if (s) {
            var o = document.createElement("span");
            return (o.textContent = s), o;
          }
        }
      });
    } else console.warn("Show Languages plugin loaded before Toolbar plugin.");
})();
!(function () {
  if ("undefined" != typeof Prism && "undefined" != typeof document) {
    var i =
      Object.assign ||
      function (e, n) {
        for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        return e;
      };
    (e.prototype = {
      setDefaults: function (e) {
        this.defaults = i(this.defaults, e);
      },
      normalize: function (e, n) {
        for (var t in (n = i(this.defaults, n))) {
          var r = t.replace(/-(\w)/g, function (e, n) {
            return n.toUpperCase();
          });
          "normalize" !== t &&
            "setDefaults" !== r &&
            n[t] &&
            this[r] &&
            (e = this[r].call(this, e, n[t]));
        }
        return e;
      },
      leftTrim: function (e) {
        return e.replace(/^\s+/, "");
      },
      rightTrim: function (e) {
        return e.replace(/\s+$/, "");
      },
      tabsToSpaces: function (e, n) {
        return (n = 0 | n || 4), e.replace(/\t/g, new Array(++n).join(" "));
      },
      spacesToTabs: function (e, n) {
        return (n = 0 | n || 4), e.replace(RegExp(" {" + n + "}", "g"), "\t");
      },
      removeTrailing: function (e) {
        return e.replace(/\s*?$/gm, "");
      },
      removeInitialLineFeed: function (e) {
        return e.replace(/^(?:\r?\n|\r)/, "");
      },
      removeIndent: function (e) {
        var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
        return n && n[0].length
          ? (n.sort(function (e, n) {
              return e.length - n.length;
            }),
            n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e)
          : e;
      },
      indent: function (e, n) {
        return e.replace(
          /^[^\S\n\r]*(?=\S)/gm,
          new Array(++n).join("\t") + "$&"
        );
      },
      breakLines: function (e, n) {
        n = !0 === n ? 80 : 0 | n || 80;
        for (var t = e.split("\n"), r = 0; r < t.length; ++r)
          if (!(s(t[r]) <= n)) {
            for (
              var i = t[r].split(/(\s+)/g), o = 0, a = 0;
              a < i.length;
              ++a
            ) {
              var l = s(i[a]);
              n < (o += l) && ((i[a] = "\n" + i[a]), (o = l));
            }
            t[r] = i.join("");
          }
        return t.join("\n");
      },
    }),
      "undefined" != typeof module && module.exports && (module.exports = e),
      "undefined" != typeof Prism &&
        ((Prism.plugins.NormalizeWhitespace = new e({
          "remove-trailing": !0,
          "remove-indent": !0,
          "left-trim": !0,
          "right-trim": !0,
        })),
        Prism.hooks.add("before-sanity-check", function (e) {
          var n = Prism.plugins.NormalizeWhitespace;
          if (
            (!e.settings || !1 !== e.settings["whitespace-normalization"]) &&
            Prism.util.isActive(e.element, "whitespace-normalization", !0)
          )
            if ((e.element && e.element.parentNode) || !e.code) {
              var t = e.element.parentNode;
              if (e.code && t && "pre" === t.nodeName.toLowerCase()) {
                for (
                  var r = t.childNodes, i = "", o = "", a = !1, l = 0;
                  l < r.length;
                  ++l
                ) {
                  var s = r[l];
                  s == e.element
                    ? (a = !0)
                    : "#text" === s.nodeName &&
                      (a ? (o += s.nodeValue) : (i += s.nodeValue),
                      t.removeChild(s),
                      --l);
                }
                if (e.element.children.length && Prism.plugins.KeepMarkup) {
                  var c = i + e.element.innerHTML + o;
                  (e.element.innerHTML = n.normalize(c, e.settings)),
                    (e.code = e.element.textContent);
                } else
                  (e.code = i + e.code + o),
                    (e.code = n.normalize(e.code, e.settings));
              }
            } else e.code = n.normalize(e.code, e.settings);
        }));
  }
  function e(e) {
    this.defaults = i({}, e);
  }
  function s(e) {
    for (var n = 0, t = 0; t < e.length; ++t)
      e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
    return e.length + n;
  }
})();

(Prism.languages.dart = Prism.languages.extend("clike", {
  string: [
    { pattern: /r?("""|''')[\s\S]*?\1/, greedy: !0 },
    { pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  ],
  keyword: [
    /\b(?:async|sync|yield)\*/,
    /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|Function|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/,
  ],
  operator:
    /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/,
})),
  Prism.languages.insertBefore("dart", "function", {
    metadata: { pattern: /@\w+/, alias: "symbol" },
  });
