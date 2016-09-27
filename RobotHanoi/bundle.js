! function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "/dist", t(0)
}([function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var i = r(1),
        a = r(46);
    n(a);
    window.addEventListener("resize", i.resize), document.addEventListener("DOMContentLoaded", i.init)
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i() {
        P && (x["default"].rightArm.rotate(M * -.3), x["default"].rightForearm.rotate(O * -.3), x["default"].rightHand.rotate(O * -.3), x["default"].leftArm.rotate(.3 * M), x["default"].leftForearm.rotate(.3 * O), x["default"].leftHand.rotate(.3 * O));
        for (var e in x["default"]) x["default"][e].render && x["default"][e].render();
        w["default"].render()
    }

    function a() {
        i(), requestAnimationFrame(a)
    }

    function o() {
        var e = f.getBoundingClientRect();
        p = e.width, g = e.height, l.setAttribute("width", p), l.setAttribute("height", g), l.setAttribute("viewBox", [0, 0, d, y].join(" ")), c.setAttribute("width", 1.251 * p), c.setAttribute("height", 1.251 * g), c.setAttribute("viewBox", [0, 0, d, y].join(" ")), x["default"].resize(), w["default"].resize()
    }

    function u(e) {
        f.classList.add("powered"), x["default"].powerUp(), setTimeout(e, 1e3), a()
    }

    function s() {
        h = document.createElement("canvas"), f = document.querySelector("#cover"), l = document.querySelector("#graphic-android svg"), c = document.querySelector("#graphic-logo svg"), v = document.querySelector("#overlay"), d = l.getAttribute("width"), y = l.getAttribute("height"), x["default"].init(l), f.appendChild(h), w["default"].init(l), o();
        var e = document.querySelector("#preloader");
        e.parentNode.removeChild(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resize = o, t.powerUp = u, t.init = s;
    var c, f, l, h, v, d, y, p, g, m = r(2),
        x = n(m),
        b = r(3),
        w = n(b),
        A = 0,
        _ = 0,
        O = 0,
        M = 0,
        P = !1;
    window.addEventListener("mousemove", function (e) {
        M = e.pageX - A, O = e.pageY - _, A = e.pageX, _ = e.pageY
    }), window.addEventListener("mousedown", function (e) {
        P = !0
    }), window.addEventListener("mouseup", function (e) {
        P = !1
    }), window.addEventListener("keydown", function (e) {
        32 === e.which ? x["default"].rightHand.toggleGrasp() : 13 === e.which && x["default"].leftHand.toggleGrasp()
    })
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function u(e) {
        for (var t in Q) t.indexOf("rightFinger") !== -1 && e(Q[t])
    }

    function s(e) {
        for (var t in Q) t.indexOf("leftFinger") !== -1 && e(Q[t])
    }

    function c() {
        var e = V.getAttribute("width"),
            t = e,
            r = V.getAttribute("viewBox");
        return r && (t = r.split(" ")[2]), e / t
    }

    function f(e) {
        var t = e.getScreenCTM(),
            r = e.getBBox(),
            n = r.x,
            i = r.y,
            a = r.width,
            o = r.height,
            u = Math.atan2(t.c, t.a),
            s = V.getBoundingClientRect();
        return {
            x: t.a * n + t.c * i + t.e - s.left,
            y: t.b * n + t.d * i + t.f - s.top,
            width: a,
            height: o,
            rotation: u
        }
    }

    function l(e) {
        var t = P(e);
        if (!("undefined" == typeof t || ee !== t && p())) {
            $ = e, ee = t;
            var r = Q.leftHand;
            e === N && (r = Q.rightHand), r.emit("disk", t)
        }
    }

    function h(e) {
        e === $ && ($ = null, ee = null)
    }

    function v(e) {
        return e === $
    }

    function d() {
        p() || I["default"].release()
    }

    function y(e) {
        return e === N || e === H
    }

    function p() {
        return v(N) || v(H)
    }

    function g(e) {
        if (y(e) && p()) {
            var t = P(e);
            "undefined" != typeof t && I["default"].tryToPickUp(t)
        }
    }

    function m(e) {
        var t = e === N ? u : s;
        this.setState(C, L), t(function (e) {
            return e.setState(C, L)
        }), l(e)
    }

    function x(e) {
        var t = e === N ? u : s;
        this.setState(j, L), t(function (e) {
            return e.setState(j, L)
        }), h(e)
    }

    function b(e) {
        switch (this.currentState) {
            case j:
                m.call(this, e);
                break;
            case C:
            default:
                x.call(this, e)
        }
    }

    function w(e, t) {
        switch (t) {
            case C:
                g(e);
                break;
            case j:
                d()
        }
    }

    function A(e, t) {
        var r = e === N ? "#right-touch-map" : "#left-touch-map";
        X.prototype.connect.call(this, t), this.touchmap = t.querySelector(r), this.calcPosition()
    }

    function _() {
        var e = f(this.touchmap);
        this.diffX = e.x - this.currX, this.diffY = e.y - this.currY, this.currX = e.x, this.currY = e.y
    }

    function O(e, t) {
        return T["default"].circleCollision(e, t, V, Y)
    }

    function M(e, t, r) {
        var n = te[t][e];
        if (n) {
            n.previous = n.current, n.current = r;
            var i = t === N ? Q.rightHand : Q.leftHand;
            n.current && !n.previous && i.emit("disk-enter", e), !n.current && n.previous && i.emit("disk-leave", e)
        }
    }

    function P(e) {
        var t = void 0;
        return te[e].forEach(function (e, r) {
            e.current && I["default"].isOnTop(r) && (t = r)
        }), t
    }

    function S(e) {
        var t = this,
            r = e === N ? u : s;
        if (X.prototype.render.call(this), I["default"].plates.forEach(function (r, n) {
                var i = O(t.touchmap, r.el);
                M(n, e, i)
        }), v(e)) {
            var n = f(this.touchmap);
            n.x -= n.width / 2, n.x /= Y, n.y /= Y, n.cx = n.width / 2, I["default"].setTransforms(n)
        }
        this.applyState(), r(function (e) {
            return e.applyState()
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BodyPart = t.STATE_HAND_CLOSE = t.STATE_HAND_OPEN = void 0;
    var E = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
        k = r(3),
        I = n(k),
        F = r(4),
        T = n(F),
        j = (r(6), t.STATE_HAND_OPEN = "opened"),
        C = t.STATE_HAND_CLOSE = "closed",
        L = 10,
        N = 0,
        H = 1,
        D = 259,
        R = 0,
        q = 1,
        B = r(5),
        V = void 0,
        Y = void 0,
        X = t.BodyPart = function (e) {
            function t(e, r) {
                var n = r.cx,
                    o = r.cy,
                    u = r.maxAngle,
                    s = void 0 === u ? 1 / 0 : u,
                    c = r.minAngle,
                    f = void 0 === c ? -(1 / 0) : c;
                i(this, t);
                var l = a(this, Object.getPrototypeOf(t).call(this));
                return l.name = e, l.cx = n, l.cy = o, l.angle = 0, l.maxAngle = s, l.minAngle = f, l.el = null, l.possibleStates = {}, l.previousState = null, l.currentState = null, l.stateChangeFrames = 0, l.stateChangeInProgress = !1, l.frame = 0, l.direction = q, l
            }
            return o(t, e), E(t, [{
                key: "connect",
                value: function (e) {
                    this.el = e.querySelector("#" + this.name)
                }
            }, {
                key: "rotate",
                value: function (e) {
                    var t = this.angle + e;
                    return t < this.minAngle || t > this.maxAngle ? this : (this.angle = t, this.emit("rotate", e), this)
                }
            }, {
                key: "render",
                value: function () {
                    var e = "rotate(" + [this.angle, this.cx, this.cy].join(", ") + ")";
                    return this.el.setAttribute("transform", e), this.frame++, this
                }
            }, {
                key: "addState",
                value: function (e, t) {
                    this.possibleStates[e] = t
                }
            }, {
                key: "setState",
                value: function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
                    this.previousState = this.currentState, this.currentState = e, this.stateChangeFrames = t, this.frame = 0, this.progress = 0, this.stateChangeInProgress = !0
                }
            }, {
                key: "getState",
                value: function (e) {
                    return this.possibleStates[e]
                }
            }, {
                key: "applyState",
                value: function () {
                    this.progress = Math.min(t.calcProgress(this.stateChangeFrames, this.frame), 1);
                    var e = t.interpolateState(this.getState(this.previousState), this.getState(this.currentState), this.direction === R ? 1 - this.progress : this.progress);
                    for (var r in e) this[r] = e[r];
                    this.progress >= 1 && this.stateChangeInProgress && (this.stateChangeInProgress = !1, this.emit("state", this.currentState))
                }
            }], [{
                key: "calcProgress",
                value: function (e, t) {
                    return t / e
                }
            }, {
                key: "interpolateValue",
                value: function (e, t, r) {
                    return r = r < 0 ? 0 : r, r = r > 1 ? 1 : r, e + (t - e) * r
                }
            }, {
                key: "interpolateState",
                value: function (e, r, n) {
                    var i = {};
                    for (var a in e) i[a] = t.interpolateValue(e[a], r[a], n);
                    return i
                }
            }]), t
        }(B),
        Q = {},
        K = {
            rightArm: {
                cy: 329.45,
                cx: 209.475,
                maxAngle: 41,
                minAngle: -35
            },
            rightForearm: {
                cx: 108.475,
                cy: 442.95,
                maxAngle: 80,
                minAngle: -6
            },
            rightForearmPiston: {
                cx: 137.507,
                cy: 445.825
            },
            rightArmPiston: {
                cx: 135.103,
                cy: 416.462
            },
            rightShoulderPiston1: {
                cx: 165.5,
                cy: 385.984
            },
            rightShoulder: {
                cx: 206.961,
                cy: 325.02
            },
            rightHand: {
                cx: 164.209,
                cy: 490.504,
                maxAngle: 42,
                minAngle: -20
            },
            rightPalm: {
                cx: 164.209,
                cy: 490.504
            },
            rightFinger1: {
                cx: 184.85,
                cy: 482.367,
                maxAngle: 15,
                minAngle: -35
            },
            rightFinger2: {
                cx: 186.858,
                cy: 476.206,
                maxAngle: 10,
                minAngle: -10
            },
            rightFinger3: {
                cx: 186.858,
                cy: 486.105,
                maxAngle: 10,
                minAngle: -10
            },
            rightFinger4: {
                cx: 186.858,
                cy: 496.712,
                maxAngle: 10,
                minAngle: -10
            },
            rightFinger5: {
                cx: 186.858,
                cy: 503.783,
                maxAngle: 10,
                minAngle: -10
            }
        };
    for (var G in K) {
        var W = G.replace("right", "left");
        K[W] = {}, K[W].cx = D + D - K[G].cx, K[W].cy = K[G].cy, K[W].maxAngle = K[G].minAngle * -1, K[W].minAngle = K[G].maxAngle * -1
    }
    Q.powerUp = function () {
        x.call(Q.rightHand, N), x.call(Q.leftHand, H)
    }, Q.rightArm = new X("right-arm", K.rightArm), Q.rightForearm = new X("right-forearm", K.rightForearm), Q.rightForearmPiston = new X("right-forearm-piston", K.rightForearmPiston), Q.rightArmPiston = new X("right-arm-piston", K.rightArmPiston), Q.rightShoulderPiston1 = new X("right-shoulder-piston1", K.rightShoulderPiston1), Q.rightShoulder = new X("right-shoulder", K.rightShoulder), Q.rightHand = new X("right-hand", K.rightHand), Q.rightPalm = new X("right-palm", K.rightPalm), Q.rightFinger1 = new X("right-finger-1", K.rightFinger1), Q.rightFinger2 = new X("right-finger-2", K.rightFinger2), Q.rightFinger3 = new X("right-finger-3", K.rightFinger3), Q.rightFinger4 = new X("right-finger-4", K.rightFinger4), Q.rightFinger5 = new X("right-finger-5", K.rightFinger5), Q.leftArm = new X("left-arm", K.leftArm), Q.leftForearm = new X("left-forearm", K.leftForearm), Q.leftForearmPiston = new X("left-forearm-piston", K.leftForearmPiston), Q.leftArmPiston = new X("left-arm-piston", K.leftArmPiston), Q.leftShoulderPiston1 = new X("left-shoulder-piston1", K.leftShoulderPiston1), Q.leftShoulder = new X("left-shoulder", K.leftShoulder), Q.leftHand = new X("left-hand", K.leftHand), Q.leftPalm = new X("left-palm", K.leftPalm), Q.leftFinger1 = new X("left-finger-1", K.leftFinger1), Q.leftFinger2 = new X("left-finger-2", K.leftFinger2), Q.leftFinger3 = new X("left-finger-3", K.leftFinger3), Q.leftFinger4 = new X("left-finger-4", K.leftFinger4), Q.leftFinger5 = new X("left-finger-5", K.leftFinger5);
    var z = {
        rightFinger1: {
            angle_close: 15,
            angle_open: -20
        },
        rightFinger2: {
            angle_close: 5,
            angle_open: 0
        },
        rightFinger3: {
            angle_close: 1,
            angle_open: 0
        },
        rightFinger4: {
            angle_close: -5,
            angle_open: 3
        },
        rightFinger5: {
            angle_close: -10,
            angle_open: 5
        }
    };
    for (var U in z) {
        var Z = U,
            J = U.replace("right", "left");
        Q[Z].addState(j, {
            angle: z[Z].angle_open
        }), Q[Z].addState(C, {
            angle: z[Z].angle_close
        }), Q[J].addState(j, {
            angle: z[Z].angle_close * -1
        }), Q[J].addState(C, {
            angle: z[Z].angle_open * -1
        })
    }
    var $ = null,
        ee = null;
    Q.resize = function () {
        Y = c()
    };
    var te = {};
    te[H] = [{
        current: !1,
        previous: !1
    }, {
        current: !1,
        previous: !1
    }, {
        current: !1,
        previous: !1
    }], te[N] = [{
        current: !1,
        previous: !1
    }, {
        current: !1,
        previous: !1
    }, {
        current: !1,
        previous: !1
    }], Q.rightHand.connect = function (e) {
        return A.call(Q.rightHand, N, e)
    }, Q.leftHand.connect = function (e) {
        return A.call(Q.leftHand, H, e)
    }, Q.rightHand.calcPosition = _.bind(Q.rightHand), Q.leftHand.calcPosition = _.bind(Q.leftHand), Q.leftHand.render = function () {
        return S.call(Q.leftHand, H)
    }, Q.rightHand.render = function () {
        return S.call(Q.rightHand, N)
    }, Q.rightHand.on("state", function (e) {
        return w(N, e)
    }), Q.leftHand.on("state", function (e) {
        return w(H, e)
    }), Q.rightHand.toggleGrasp = function () {
        return b.call(Q.rightHand, N)
    }, Q.leftHand.toggleGrasp = function () {
        return b.call(Q.leftHand, H)
    }, Q.rightForearm.on("rotate", function (e) {
        Q.rightArmPiston.rotate(.33 * e), Q.rightForearmPiston.rotate(.62 * -e)
    }), Q.rightArm.on("rotate", function (e) {
        Q.rightShoulderPiston1.rotate(.1 * e), Q.rightShoulder.rotate(e)
    }), Q.leftForearm.on("rotate", function (e) {
        Q.leftArmPiston.rotate(.33 * e), Q.leftForearmPiston.rotate(.62 * -e)
    }), Q.leftArm.on("rotate", function (e) {
        Q.leftShoulderPiston1.rotate(.1 * e), Q.leftShoulder.rotate(e)
    }), Q.init = function (e) {
        V = e;
        for (var t in this) this[t] instanceof X && this[t].connect(e);
        var r = [Q.leftHand, Q.leftFinger1, Q.leftFinger2, Q.leftFinger3, Q.leftFinger4, Q.leftFinger5],
            n = [Q.rightHand, Q.rightFinger1, Q.rightFinger2, Q.rightFinger3, Q.rightFinger4, Q.rightFinger5];
        r.concat(n).forEach(function (e) {
            return e.setState(C, L)
        }), r.forEach(function (e) {
            return e.direction = R
        })
    }, t["default"] = Q
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u() {
        var e = V.getAttribute("width"),
            t = e,
            r = V.getAttribute("viewBox");
        return r && (t = r.split(" ")[2]), e / t
    }

    function s(e) {
        J.x = G[e].x, J.y = G[e].y, J.translateX = G[e].translateX, J.translateY = G[e].translateY
    }

    function c(e) {
        G[z].x = J.x, G[z].y = J.y, G[z].translateX = J.translateX, G[z].translateY = J.translateY, G[z].rotation = 0
    }

    function f() {
        return null === z
    }

    function l(e, t) {
        return W[t].isOnTop(e)
    }

    function h(e) {
        return l(e, 0) || l(e, 1) || l(e, 2)
    }

    function v() {
        d() && document.querySelector("#success").classList.add("completed")
    }

    function d() {
        var e = W[2].children;
        return 0 === e[0] && 1 === e[1] && 2 === e[2]
    }

    function y(e) {
        s(e), z = e
    }

    function p(e) {
        var t = Z,
            r = G[e];
        if (!t) return !1;
        var n = m(e, t);
        return r.getComputedY() >= n
    }

    function g(e, t) {
        var r = W[0],
            n = G[e];
        return r.y + r.height - n.hitmask.height - t * B
    }

    function m(e, t) {
        var r = t.children.indexOf(e);
        return g(e, r)
    }

    function x() { }

    function b(e) {
        V = e, G[0] = new Q(document.querySelector("#plate0")), G[1] = new Q(document.querySelector("#plate1")), G[2] = new Q(document.querySelector("#plate2")), G[0].id = 0, G[1].id = 1, G[2].id = 2, W[0] = new K(document.querySelector("#socket0"), [0, 1, 2]), W[1] = new K(document.querySelector("#socket1"), []), W[2] = new K(document.querySelector("#socket2"), []), W[0].id = 0, W[1].id = 1, W[2].id = 2, G.forEach(function (e) {
            return e.el.addEventListener("transitionend", x)
        }), G.forEach(function (e, t) {
            e.el.addEventListener("mousedown", function (e) {
                w(t)
            })
        }), G[0].set(I(0, W[0]), g(0, 0)), G[1].set(I(1, W[0]), g(1, 1)), G[2].set(I(2, W[0]), g(2, 2))
    }

    function w(e) {
        f() && h(e) && y(e)
    }

    function A(e) {
        W.forEach(function (t) {
            for (var r = 0; r <= t.children.length; ++r)
                if (t.children[r] === e) return void t.children.splice(r, 1)
        })
    }

    function _(e) {
        G[e].rotation = 0, U = e;
        var t = M(e);
        Z = t, P(t.id)
    }

    function O(e, t) {
        _(e), A(e), t.children.push(e);
        var r = [
            [].concat(W[0].children), [].concat(W[1].children), [].concat(W[2].children)
        ];
        ee.emit("change", r), v()
    }

    function M(e) {
        var t = G[e],
            r = W.filter(function (e, r) {
                var n = R["default"].circleColumnCollision(t.el, e.el, V, Y);
                return n
            })[0];
        return r
    }

    function P(e) {
        $[e].previous = $[e].current, $[e].current = !1, ee.emit("tower-leave", e)
    }

    function S() {
        if (null !== z) {
            var e = G[z];
            W.forEach(function (t, r) {
                var n = R["default"].circleColumnCollision(e.el, t.el, V, Y);
                $[r].previous = $[r].current, $[r].current = n
            }), $.forEach(function (e, t) {
                e.current && !e.previous && ee.emit("tower-enter", t), !e.current && e.previous && ee.emit("tower-leave", t)
            })
        }
    }

    function E() {
        if (S(), null !== U) {
            var e = G[U];
            if (!p(U)) return void e.move(0, 5);
            var t = F(U);
            e.set(I(U, t), m(U, t)), k()
        }
    }

    function k() {
        U = null, Z = null
    }

    function I(e, t) {
        return t.x - G[e].width / 2 + t.width / 2
    }

    function F(e) {
        return W.filter(function (t) {
            return t.children.indexOf(e) !== -1
        })[0]
    }

    function T(e, t) {
        if (null !== z) {
            var r = G[z];
            r.move(e, t)
        }
    }

    function j(e) {
        if (null !== z) {
            var t = G[z];
            t.setTransforms(e)
        }
    }

    function C(e, t) {
        var r = t.children[t.children.length - 1];
        return void 0 === r || r < e
    }

    function L() {
        if (null !== z) {
            var e = M(z),
                t = G[z];
            e && C(z, e) ? O(z, e) : (c(z), t.render()), z = null
        }
    }

    function N() {
        Y = u()
    }
    var H = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
        D = r(4),
        R = n(D),
        q = r(5),
        B = 5,
        V = void 0,
        Y = void 0,
        X = function () {
            function e(t) {
                o(this, e), this.el = t;
                var r = this.el.getBBox();
                this.x = r.x, this.y = r.y, this.width = r.width, this.height = r.height, this.translateX = 0, this.translateY = 0
            }
            return H(e, [{
                key: "getComputedX",
                value: function () {
                    return this.x + this.translateX
                }
            }, {
                key: "getComputedY",
                value: function () {
                    return this.y + this.translateY
                }
            }]), e
        }(),
        Q = function (e) {
            function t(e) {
                o(this, t);
                var r = i(this, Object.getPrototypeOf(t).call(this, e));
                return r.cx = 0, r.cy = 0, r.rotation = 0, r.move(0, 0), r.hitmaskEl = r.el.querySelector('[id^="plate-hitmask"]'), r.hitmask = r.hitmaskEl.getBBox(), r
            }
            return a(t, e), H(t, [{
                key: "move",
                value: function (e, t) {
                    this.translateX += e, this.translateY += t, this.render()
                }
            }, {
                key: "setTransforms",
                value: function (e) {
                    this.rotation = -e.rotation * (180 / Math.PI), this.translateX = e.x || 0, this.translateY = e.y || 0, this.cx = e.cx || 0, this.cy = e.cy || 0, this.render()
                }
            }, {
                key: "render",
                value: function () {
                    this.el.setAttribute("transform", "translate(" + this.translateX + ", " + this.translateY + ") rotate(" + this.rotation + ", " + this.cx + "," + this.cy + ")")
                }
            }, {
                key: "set",
                value: function (e, t) {
                    this.translateX = e, this.translateY = t, this.render()
                }
            }]), t
        }(X),
        K = function (e) {
            function t(e, r) {
                o(this, t);
                var n = i(this, Object.getPrototypeOf(t).call(this, e));
                return n.children = r || [], n
            }
            return a(t, e), H(t, [{
                key: "isOnTop",
                value: function (e) {
                    var t = this.children.indexOf(e);
                    return t !== -1 && t + 1 === this.children.length
                }
            }, {
                key: "collides",
                value: function (e) {
                    var t = V.createSVGRect();
                    return t.x = (this.x + this.translateX) * Y, t.y = (this.y + this.translateY) * Y, t.width = this.width * Y, t.height = this.height * Y, V.checkIntersection(e.hitmaskEl, t)
                }
            }]), t
        }(X),
        G = [],
        W = [],
        z = null,
        U = null,
        Z = null,
        J = {
            x: 0,
            y: 0,
            translateX: 0,
            translateY: 0
        },
        $ = [{
            current: !1,
            previous: !1
        }, {
            current: !1,
            previous: !1
        }, {
            current: !1,
            previous: !1
        }],
        ee = new q;
    ee.render = E, ee.init = b, ee.move = T, ee.release = L, ee.plates = G, ee.tryToPickUp = w, ee.setTransforms = j, ee.isOnTop = h, ee.resize = N, e.exports = ee
}, function (e, t) {
    "use strict";
    e.exports = {
        getAbsoluteBBox: function (e, t, r) {
            var n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect();
            return {
                x: n.left / r - i.left / r,
                y: n.top / r - i.top / r,
                width: n.width / r,
                height: n.height / r
            }
        },
        circleColumnCollision: function (e, t, r, n) {
            var i = this.getAbsoluteBBox(e, r, n),
                a = this.getAbsoluteBBox(t, r, n),
                o = {
                    x: i.x + i.width / 2,
                    y: i.y + i.height / 2
                },
                u = a.x,
                s = a.x + a.width;
            return o.x >= u && o.x <= s
        },
        circleCollision: function (e, t, r, n) {
            var i = this.getAbsoluteBBox(e, r, n),
                a = this.getAbsoluteBBox(t, r, n),
                o = {
                    x: i.x + i.width / 2,
                    y: i.y + i.height / 2
                },
                u = {
                    x: a.x + a.width / 2,
                    y: a.y + a.height / 2
                },
                s = i.width / 2,
                c = this.getDistance(o, u);
            return c <= s
        },
        getDistance: function (e, t) {
            return Math.sqrt(Math.pow(t.y - e.y, 2) + Math.pow(t.x - e.x, 2))
        },
        clamp: function (e, t, r) {
            return e = Math.max(e, t), e = Math.min(e, r)
        }
    }
}, function (e, t) {
    function r() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function n(e) {
        return "function" == typeof e
    }

    function i(e) {
        return "number" == typeof e
    }

    function a(e) {
        return "object" == typeof e && null !== e
    }

    function o(e) {
        return void 0 === e
    }
    e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (e) {
        if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, r.prototype.emit = function (e) {
        var t, r, i, u, s, c;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw f.context = t, f
        }
        if (r = this._events[e], o(r)) return !1;
        if (n(r)) switch (arguments.length) {
            case 1:
                r.call(this);
                break;
            case 2:
                r.call(this, arguments[1]);
                break;
            case 3:
                r.call(this, arguments[1], arguments[2]);
                break;
            default:
                u = Array.prototype.slice.call(arguments, 1), r.apply(this, u)
        } else if (a(r))
            for (u = Array.prototype.slice.call(arguments, 1), c = r.slice(), i = c.length, s = 0; s < i; s++) c[s].apply(this, u);
        return !0
    }, r.prototype.addListener = function (e, t) {
        var i;
        if (!n(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (i = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
    }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (e, t) {
        function r() {
            this.removeListener(e, r), i || (i = !0, t.apply(this, arguments))
        }
        if (!n(t)) throw TypeError("listener must be a function");
        var i = !1;
        return r.listener = t, this.on(e, r), this
    }, r.prototype.removeListener = function (e, t) {
        var r, i, o, u;
        if (!n(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (r = this._events[e], o = r.length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(r)) {
            for (u = o; u-- > 0;)
                if (r[u] === t || r[u].listener && r[u].listener === t) {
                    i = u;
                    break
                }
            if (i < 0) return this;
            1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, r.prototype.removeAllListeners = function (e) {
        var t, r;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (r = this._events[e], n(r)) this.removeListener(e, r);
        else if (r)
            for (; r.length;) this.removeListener(e, r[r.length - 1]);
        return delete this._events[e], this
    }, r.prototype.listeners = function (e) {
        var t;
        return t = this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, r.prototype.listenerCount = function (e) {
        if (this._events) {
            var t = this._events[e];
            if (n(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, r.listenerCount = function (e, t) {
        return e.listenerCount(t)
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.timeline = t.state = t.shape = t.render = t.play = t.pause = void 0;
    var n = r(7),
        i = r(42);
    t.pause = n.pause, t.play = i.play, t.render = i.render, t.shape = i.shape, t.state = n.state, t.timeline = i.timeline
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tick = t.state = t.shape = t.play = t.pause = t.create = void 0;
    var i = r(8),
        a = n(i),
        o = r(33),
        u = n(o),
        s = r(34),
        c = n(s);
    t.create = s.create, t.pause = a["default"], t.play = u["default"], t.shape = c["default"], t.state = s.state, t.tick = o.tick
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        i = function (e) {
            var t = e.state,
                r = t.animation;
            r && !(0, n.paused)(r) && (r.pause = Date.now())
        };
    t["default"] = i
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tween = t.previousIteration = t.paused = t.normalise = t.match = t.iterationsComplete = t.finished = t.filter = t.easingFunc = t.currentReverse = t.currentState = t.currentIteration = void 0;
    var i = r(10),
        a = r(12),
        o = r(13),
        u = n(o),
        s = r(14),
        c = n(s),
        f = r(30),
        l = n(f);
    t.currentIteration = i.currentIteration, t.currentState = i.currentState, t.currentReverse = i.currentReverse, t.easingFunc = i.easingFunc, t.filter = a.filter, t.finished = i.finished, t.iterationsComplete = i.iterationsComplete, t.match = u["default"], t.normalise = c["default"], t.paused = i.paused, t.previousIteration = i.previousIteration, t.tween = l["default"]
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.previousIteration = t.paused = t.iterationsComplete = t.finished = t.easingFunc = t.currentReverse = t.currentState = t.currentIteration = void 0;
    var i = r(11),
        a = n(i),
        o = function (e) {
            return Math.max(1, Math.ceil(e))
        },
        u = function () {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.alternate,
                r = void 0 !== t && t,
                n = e.initialProgress,
                i = void 0 === n ? 0 : n,
                a = e.reverse,
                u = void 0 !== a && a,
                c = e.started,
                f = void 0 !== c && c,
                h = f ? l(e) : 0,
                d = h + i,
                y = o(d),
                p = s(r, y, u),
                g = d - v(d);
            return {
                currentProgress: p ? 1 - g : g,
                currentReverse: p,
                iterationsComplete: h
            }
        },
        s = function (e, t, r) {
            return e && t % 2 === 0 ? !r : r
        },
        c = function (e, t) {
            var r = e || t;
            return "function" == typeof r ? r : a["default"][r]
        },
        f = function (e) {
            return l(e) >= e.iterations
        },
        l = function (e) {
            var t = e.duration,
                r = e.iterations,
                n = e.play,
                i = e.pause,
                a = Math.max(0, i ? i - n : Date.now() - n);
            return Math.min(r, a / t)
        },
        h = function (e) {
            var t = e.pause;
            return Boolean(t)
        },
        v = function (e) {
            return Math.max(0, e % 1 === 0 ? Math.floor(e - .1) : Math.floor(e))
        };
    t.currentIteration = o, t.currentState = u, t.currentReverse = s, t.easingFunc = c, t.finished = f, t.iterationsComplete = l, t.paused = h, t.previousIteration = v
}, function (e, t) {
    "use strict";
    var r = {
        linear: function (e, t, r, n) {
            var i = r - t;
            return i * e / n + t
        },
        easeInQuad: function (e, t, r, n) {
            var i = r - t;
            return i * (e /= n) * e + t
        },
        easeOutQuad: function (e, t, r, n) {
            var i = r - t;
            return -i * (e /= n) * (e - 2) + t
        },
        easeInOutQuad: function (e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function (e, t, r, n) {
            var i = r - t;
            return i * (e /= n) * e * e + t
        },
        easeOutCubic: function (e, t, r, n) {
            var i = r - t;
            return i * ((e = e / n - 1) * e * e + 1) + t
        },
        easeInOutCubic: function (e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function (e, t, r, n) {
            var i = r - t;
            return i * (e /= n) * e * e * e + t
        },
        easeOutQuart: function (e, t, r, n) {
            var i = r - t;
            return -i * ((e = e / n - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function (e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function (e, t, r, n) {
            var i = r - t;
            return i * (e /= n) * e * e * e * e + t
        },
        easeOutQuint: function (e, t, r, n) {
            var i = r - t;
            return i * ((e = e / n - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function (e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function (e, t, r, n) {
            var i = r - t;
            return -i * Math.cos(e / n * (Math.PI / 2)) + i + t
        },
        easeOutSine: function (e, t, r, n) {
            var i = r - t;
            return i * Math.sin(e / n * (Math.PI / 2)) + t
        },
        easeInOutSine: function (e, t, r, n) {
            var i = r - t;
            return -i / 2 * (Math.cos(Math.PI * e / n) - 1) + t
        },
        easeInExpo: function (e, t, r, n) {
            var i = r - t;
            return 0 == e ? t : i * Math.pow(2, 10 * (e / n - 1)) + t
        },
        easeOutExpo: function (e, t, r, n) {
            var i = r - t;
            return e == n ? t + i : i * (-Math.pow(2, -10 * e / n) + 1) + t
        },
        easeInOutExpo: function (e, t, r, n) {
            var i = r - t;
            return 0 === e ? t : e === n ? t + i : (e /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function (e, t, r, n) {
            var i = r - t;
            return -i * (Math.sqrt(1 - (e /= n) * e) - 1) + t
        },
        easeOutCirc: function (e, t, r, n) {
            var i = r - t;
            return i * Math.sqrt(1 - (e = e / n - 1) * e) + t
        },
        easeInOutCirc: function (e, t, r, n) {
            var i = r - t;
            return (e /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function (e, t, r, n) {
            var i, a, o, u = r - t;
            return o = 1.70158, a = 0, i = u, 0 === e ? t : 1 === (e /= n) ? t + u : (a || (a = .3 * n), i < Math.abs(u) ? (i = u, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(u / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / a)) + t)
        },
        easeOutElastic: function (e, t, r, n) {
            var i, a, o, u = r - t;
            return o = 1.70158, a = 0, i = u, 0 === e ? t : 1 === (e /= n) ? t + u : (a || (a = .3 * n), i < Math.abs(u) ? (i = u, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(u / i), i * Math.pow(2, -10 * e) * Math.sin((e * n - o) * (2 * Math.PI) / a) + u + t)
        },
        easeInOutElastic: function (e, t, r, n) {
            var i, a, o, u = r - t;
            return o = 1.70158, a = 0, i = u, 0 === e ? t : 2 === (e /= n / 2) ? t + u : (a || (a = n * (.3 * 1.5)), i < Math.abs(u) ? (i = u, o = a / 4) : o = a / (2 * Math.PI) * Math.asin(u / i), e < 1 ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / a)) + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / a) * .5 + u + t)
        },
        easeInBack: function (e, t, r, n, i) {
            var a = r - t;
            return void 0 === i && (i = 1.70158), a * (e /= n) * e * ((i + 1) * e - i) + t
        },
        easeOutBack: function (e, t, r, n, i) {
            var a = r - t;
            return void 0 === i && (i = 1.70158), a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
        },
        easeInOutBack: function (e, t, r, n, i) {
            var a = r - t;
            return void 0 === i && (i = 1.70158), (e /= n / 2) < 1 ? a / 2 * (e * e * (((i *= 1.525) + 1) * e - i)) + t : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
        },
        easeInBounce: function (e, t, n, i) {
            var a, o = n - t;
            return a = r.easeOutBounce(i - e, 0, o, i), o - a + t
        },
        easeOutBounce: function (e, t, r, n) {
            var i = r - t;
            return (e /= n) < 1 / 2.75 ? i * (7.5625 * e * e) + t : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function (e, t, n, i) {
            var a, o = n - t;
            return e < i / 2 ? (a = r.easeInBounce(2 * e, 0, o, i), .5 * a + t) : (a = r.easeOutBounce(2 * e - i, 0, o, i), .5 * a + .5 * o + t)
        }
    };
    e.exports = r
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function (e, t) {
        var r = {};
        return e.forEach(function (e) {
            var n = t[e];
            "undefined" != typeof n && (r[e] = n)
        }), r
    };
    t.filter = r
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    },
        n = function i(e, t, n) {
            if (Array.isArray(e) && Array.isArray(t)) {
                for (var a = [], o = 0, u = e.length; o < u; o++) a.push(i(e[o], t[o], n));
                return a
            }
            if ("object" === ("undefined" == typeof e ? "undefined" : r(e)) && "object" === ("undefined" == typeof t ? "undefined" : r(t)) && null !== e && null !== t) {
                var s = {},
                    c = !0,
                    f = !1,
                    l = void 0;
                try {
                    for (var h, v = Object.keys(e)[Symbol.iterator]() ; !(c = (h = v.next()).done) ; c = !0) {
                        var d = h.value;
                        s[d] = i(e[d], t[d], n)
                    }
                } catch (y) {
                    f = !0, l = y
                } finally {
                    try {
                        !c && v["return"] && v["return"]()
                    } finally {
                        if (f) throw l
                    }
                }
                return s
            }
            return n(e, t)
        };
    t["default"] = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        a = r(15),
        o = function (e, t) {
            for (var r = [], n = 0, a = e.length; n < a; n++) !e[n].curve && t[n].curve ? r.push(i({}, e[n], {
                curve: {
                    type: "cubic",
                    x1: e[n - 1].x,
                    y1: e[n - 1].y,
                    x2: e[n].x,
                    y2: e[n].y
                }
            })) : r.push(e[n]);
            return r
        },
        u = function (e, t) {
            return [o(e, t), o(t, e)]
        },
        s = function (e, t) {
            var r = (0, a.cubify)((0, a.remove)(e)),
                n = (0, a.cubify)((0, a.remove)(t));
            return n.length > r.length ? r = (0, a.add)(r, n.length) : r.length > n.length && (n = (0, a.add)(n, r.length)), u(r, n)
        },
        c = function (e, t) {
            var r = s(e.points, t.points),
                a = n(r, 2),
                o = a[0],
                u = a[1];
            return [i({}, e, {
                points: o
            }), i({}, t, {
                points: u
            })]
        };
    t["default"] = c
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.scale = t.rotate = t.reverse = t.remove = t.position = t.offset = t.moveIndex = t.length = t.cubify = t.boundingBox = t.add = void 0;
    var i = r(16),
        a = n(i),
        o = r(20),
        u = n(o),
        s = r(17),
        c = n(s),
        f = r(22),
        l = n(f),
        h = r(23),
        v = n(h),
        d = r(24),
        y = n(d),
        p = r(25),
        g = n(p),
        m = r(26),
        x = n(m),
        b = r(27),
        w = n(b),
        A = r(28),
        _ = n(A),
        O = r(29),
        M = n(O);
    t.add = a["default"], t.boundingBox = u["default"], t.cubify = c["default"], t.length = l["default"], t.moveIndex = v["default"], t.offset = y["default"], t.position = g["default"], t.remove = x["default"], t.reverse = w["default"], t.rotate = _["default"], t.scale = M["default"]
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length) ; t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.curvePoints = void 0;
    var a = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        o = r(17),
        u = n(o),
        s = r(19),
        c = function (e, t) {
            return [{
                x: (0, s.numberAtInterval)(e.x, t.x, .5),
                y: (0, s.numberAtInterval)(e.y, t.y, .5)
            }, t]
        },
        f = function (e, t) {
            var r = t.curve,
                n = r.x1,
                i = r.y1,
                a = r.x2,
                o = r.y2,
                u = {
                    x: e.x,
                    y: e.y
                },
                c = {
                    x: n,
                    y: i
                },
                f = {
                    x: a,
                    y: o
                },
                l = {
                    x: t.x,
                    y: t.y
                },
                h = {
                    x: (0, s.numberAtInterval)(u.x, c.x, .5),
                    y: (0, s.numberAtInterval)(u.y, c.y, .5)
                },
                v = {
                    x: (0, s.numberAtInterval)(c.x, f.x, .5),
                    y: (0, s.numberAtInterval)(c.y, f.y, .5)
                },
                d = {
                    x: (0, s.numberAtInterval)(f.x, l.x, .5),
                    y: (0, s.numberAtInterval)(f.y, l.y, .5)
                },
                y = {
                    x: (0, s.numberAtInterval)(h.x, v.x, .5),
                    y: (0, s.numberAtInterval)(h.y, v.y, .5)
                },
                p = {
                    x: (0, s.numberAtInterval)(v.x, d.x, .5),
                    y: (0, s.numberAtInterval)(v.y, d.y, .5)
                },
                g = {
                    x: (0, s.numberAtInterval)(y.x, p.x, .5),
                    y: (0, s.numberAtInterval)(y.y, p.y, .5)
                };
            return [{
                x: g.x,
                y: g.y,
                curve: {
                    type: "cubic",
                    x1: h.x,
                    y1: h.y,
                    x2: y.x,
                    y2: y.y
                }
            }, {
                x: l.x,
                y: l.y,
                curve: {
                    type: "cubic",
                    x1: p.x,
                    y1: p.y,
                    x2: d.x,
                    y2: d.y
                }
            }]
        },
        l = function (e, t) {
            return t.curve ? f(e, t) : c(e, t)
        },
        h = function d(e, t) {
            for (var r = [].concat(i(e)), n = 1; n < r.length; n += 2) {
                if (r.length >= t) return r;
                var o = l(r[n - 1], r[n]),
                    u = a(o, 2),
                    s = u[0],
                    c = u[1];
                r.splice(n, 1, s, c)
            }
            return d(r, t)
        },
        v = function (e, t) {
            return h((0, u["default"])(e), t)
        };
    t.curvePoints = f, t["default"] = v
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(18),
        a = n(i),
        o = r(19),
        u = function (e) {
            for (var t = [], r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                if (i.curve && "cubic" !== i.curve.type) {
                    var o = e[r - 1],
                        u = o.x,
                        s = o.y,
                        c = i.x,
                        f = i.y;
                    if ("arc" === i.curve.type) {
                        var l = (0, a["default"])({
                            px: u,
                            py: s,
                            cx: c,
                            cy: f,
                            rx: i.curve.rx,
                            ry: i.curve.ry,
                            xAxisRotation: i.curve.xAxisRotation,
                            largeArcFlag: i.curve.largeArcFlag,
                            sweepFlag: i.curve.sweepFlag
                        });
                        l.forEach(function (e) {
                            var r = e.x1,
                                n = e.y1,
                                i = e.x2,
                                a = e.y2,
                                o = e.x,
                                u = e.y;
                            t.push({
                                x: o,
                                y: u,
                                curve: {
                                    type: "cubic",
                                    x1: r,
                                    y1: n,
                                    x2: i,
                                    y2: a
                                }
                            })
                        })
                    } else if ("quadratic" === i.curve.type) {
                        var h = u + 2 / 3 * (i.curve.x1 - u),
                            v = s + 2 / 3 * (i.curve.y1 - s),
                            d = c + 2 / 3 * (i.curve.x1 - c),
                            y = f + 2 / 3 * (i.curve.y1 - f);
                        t.push({
                            x: c,
                            y: f,
                            curve: {
                                type: "cubic",
                                x1: h,
                                y1: v,
                                x2: d,
                                y2: y
                            }
                        })
                    }
                } else t.push(i)
            }
            return t
        },
        s = function (e) {
            return (0, o.applyFuncToShapes)(u, e)
        };
    t["default"] = s
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        n = 2 * Math.PI,
        i = function (e, t, r, n, i, a, o) {
            var u = e.x,
                s = e.y;
            u *= t, s *= r;
            var c = n * u - i * s,
                f = i * u + n * s;
            return {
                x: c + a,
                y: f + o
            }
        },
        a = function (e, t) {
            var r = 4 / 3 * Math.tan(t / 4),
                n = Math.cos(e),
                i = Math.sin(e),
                a = Math.cos(e + t),
                o = Math.sin(e + t);
            return [{
                x: n - i * r,
                y: i + n * r
            }, {
                x: a + o * r,
                y: o - a * r
            }, {
                x: a,
                y: o
            }]
        },
        o = function (e, t, r, n) {
            var i = e * n - t * r < 0 ? -1 : 1,
                a = Math.sqrt(e * e + t * t),
                o = Math.sqrt(e * e + t * t),
                u = e * r + t * n,
                s = u / (a * o);
            return s > 1 && (s = 1), s < -1 && (s = -1), i * Math.acos(s)
        },
        u = function (e, t, r, i, a, u, s, c, f, l, h, v) {
            var d = Math.pow(a, 2),
                y = Math.pow(u, 2),
                p = Math.pow(h, 2),
                g = Math.pow(v, 2),
                m = d * y - d * g - y * p;
            m < 0 && (m = 0), m /= d * g + y * p, m = Math.sqrt(m) * (s === c ? -1 : 1);
            var x = m * a / u * v,
                b = m * -u / a * h,
                w = l * x - f * b + (e + r) / 2,
                A = f * x + l * b + (t + i) / 2,
                _ = (h - x) / a,
                O = (v - b) / u,
                M = (-h - x) / a,
                P = (-v - b) / u,
                S = o(1, 0, _, O),
                E = o(_, O, M, P);
            return 0 === c && E > 0 && (E -= n), 1 === c && E < 0 && (E += n), [w, A, S, E]
        },
        s = function (e) {
            var t = e.px,
                o = e.py,
                s = e.cx,
                c = e.cy,
                f = e.rx,
                l = e.ry,
                h = e.xAxisRotation,
                v = void 0 === h ? 0 : h,
                d = e.largeArcFlag,
                y = void 0 === d ? 0 : d,
                p = e.sweepFlag,
                g = void 0 === p ? 0 : p,
                m = [];
            if (0 === f || 0 === l) return [];
            var x = Math.sin(v * n / 360),
                b = Math.cos(v * n / 360),
                w = b * (t - s) / 2 + x * (o - c) / 2,
                A = -x * (t - s) / 2 + b * (o - c) / 2;
            if (0 === w && 0 === A) return [];
            f = Math.abs(f), l = Math.abs(l);
            var _ = Math.pow(w, 2) / Math.pow(f, 2) + Math.pow(A, 2) / Math.pow(l, 2);
            _ > 1 && (f *= Math.sqrt(_), l *= Math.sqrt(_));
            var O = u(t, o, s, c, f, l, y, g, x, b, w, A),
                M = r(O, 4),
                P = M[0],
                S = M[1],
                E = M[2],
                k = M[3],
                I = Math.max(Math.ceil(Math.abs(k) / (n / 4)), 1);
            k /= I;
            for (var F = 0; F < I; F++) m.push(a(E, k)), E += k;
            return m.map(function (e) {
                var t = i(e[0], f, l, b, x, P, S),
                    r = t.x,
                    n = t.y,
                    a = i(e[1], f, l, b, x, P, S),
                    o = a.x,
                    u = a.y,
                    s = i(e[2], f, l, b, x, P, S),
                    c = s.x,
                    h = s.y;
                return {
                    x1: r,
                    y1: n,
                    x2: o,
                    y2: u,
                    x: c,
                    y: h
                }
            })
        };
    t["default"] = s
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function (e, t, r) {
        var n = Math.acos((Math.pow(e, 2) + Math.pow(t, 2) - Math.pow(r, 2)) / (2 * e * t));
        return n * (180 / Math.PI)
    },
        n = function (e, t) {
            for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
            return a(t) ? t.map(function (t) {
                return e.apply(void 0, [t].concat(n))
            }) : e.apply(void 0, [t].concat(n))
        },
        i = function (e) {
            return a(e) ? e : [e]
        },
        a = function (e) {
            return Array.isArray(e[0])
        },
        o = function (e, t, r) {
            var n = e === t ? 0 : Math.abs(t - e);
            return 0 === n ? e : e < t ? e + n * r : e - n * r
        };
    t.angleFromSides = r, t.applyFuncToShapes = n, t.getShapeArray = i, t.isShapeArray = a, t.numberAtInterval = o
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(21),
        a = n(i),
        o = r(19),
        u = function (e) {
            var t = void 0,
                r = void 0,
                n = void 0,
                i = void 0,
                u = (0, o.getShapeArray)(e);
            return u.map(function (e) {
                return (0, a["default"])(e).map(function (e) {
                    var a = e.x,
                        o = e.y;
                    ("number" != typeof t || o > t) && (t = o), ("number" != typeof r || a < r) && (r = a), ("number" != typeof n || a > n) && (n = a), ("number" != typeof i || o < i) && (i = o)
                })
            }), {
                bottom: t,
                center: {
                    x: r + (n - r) / 2,
                    y: i + (t - i) / 2
                },
                left: r,
                right: n,
                top: i
            }
        };
    t["default"] = u
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length) ; t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        o = r(19),
        u = r(17),
        s = n(u),
        c = r(16),
        f = r(22),
        l = function (e) {
            var t = a(e[0], 2),
                r = t[0],
                n = t[1],
                i = a(e[1], 2),
                u = i[0],
                s = i[1],
                c = a(e[2], 2),
                l = c[0],
                h = c[1],
                v = (0, f.linearLength)(r, n, u, s),
                d = (0, f.linearLength)(u, s, l, h),
                y = (0, f.linearLength)(l, h, r, n);
            return (0, o.angleFromSides)(v, d, y)
        },
        h = function (e) {
            return e.reduce(function (e, t) {
                var r = t.curve;
                return !!r || e
            }, !1)
        },
        v = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1];
            if (!h(e)) return e;
            var r = (0, s["default"])(e),
                n = [];
            return r.map(function (e, i) {
                if (e.curve) {
                    var a = r[i - 1];
                    y(a, e, t).map(function (e) {
                        return n.push(e)
                    })
                } else n.push(e)
            }), n
        },
        d = function (e, t, r, n, i, a, o, u, s) {
            var c = [
                    [r, n],
                    [i, a],
                    [e, t]
            ],
                f = [
                    [o, u],
                    [e, t],
                    [i, a]
                ];
            return l(c) < s && l(f) < s
        },
        y = function p(e, t, r) {
            var n = e.x,
                o = e.y,
                u = t.x,
                s = t.y,
                f = t.curve,
                l = f.x1,
                h = f.y1,
                v = f.x2,
                y = f.y2;
            if (d(n, o, l, h, u, s, v, y, r)) return [t];
            var g = (0, c.curvePoints)(e, t),
                m = a(g, 2),
                x = m[0],
                b = m[1];
            return [].concat(i(p(e, x, r)), i(p(x, b, r)))
        };
    t["default"] = v
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.linearLength = void 0;
    var i = r(21),
        a = n(i),
        o = function (e, t) {
            var r = (0, a["default"])(e, t);
            return r.reduce(function (e, t, n) {
                var i = t.x,
                    a = t.y,
                    o = t.moveTo;
                if (!o) {
                    var s = r[n - 1],
                        c = s.x,
                        f = s.y;
                    e += u(c, f, i, a)
                }
                return e
            }, 0)
        },
        u = function (e, t, r, n) {
            return Math.sqrt(Math.pow(e - r, 2) + Math.pow(t - n, 2))
        };
    t.linearLength = u, t["default"] = o
}, function (e, t) {
    "use strict";

    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length) ; t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e, t) {
        var n = e.length - 1,
            i = e[0],
            a = e[n],
            o = (t % n + n) % n;
        return i.x === a.x && i.y === a.y ? [{
            x: e[o].x,
            y: e[o].y,
            moveTo: !0
        }].concat(r(e.splice(o + 1)), r(e.splice(1, o))) : e
    };
    t["default"] = n
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
        i = r(19),
        a = function (e, t, r) {
            return e.map(function (e) {
                var i = n({}, e);
                return i.x += t, i.y += r, i.curve && (i.curve = n({}, i.curve), "quadratic" !== i.curve.type && "cubic" !== i.curve.type || (i.curve.x1 += t, i.curve.y1 += r), "cubic" === i.curve.type && (i.curve.x2 += t, i.curve.y2 += r)), i
            })
        },
        o = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                r = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
            return (0, i.applyFuncToShapes)(a, e, t, r)
        };
    t["default"] = o
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(21),
        a = n(i),
        o = r(22),
        u = n(o),
        s = r(19),
        c = function (e, t, r, n, i) {
            if (e === r) return t >= n ? 0 : 180;
            var a = 100,
                u = (0, o.linearLength)(r, n, e, t - a),
                c = (0, s.angleFromSides)(i, a, u);
            return e < r ? c : 360 - c
        },
        f = function (e, t, r, n) {
            var i = e[t - 2],
                a = i.x,
                u = i.y,
                s = e[t - 1],
                c = s.x,
                f = s.y,
                l = (0, o.linearLength)(a, u, c, f),
                h = (n - r) / l + 1;
            return {
                x1: a,
                y1: u,
                x2: c,
                y2: f,
                segmentInterval: h,
                segmentLength: l
            }
        },
        l = function (e, t, r) {
            var n = (0, a["default"])(e, r),
                i = n.length,
                o = (0, u["default"])(n),
                l = o * t,
                d = t > 1 ? f(n, i, o, l) : t < 0 ? h(n, l) : v(n, i, l),
                y = d.x1,
                p = d.y1,
                g = d.x2,
                m = d.y2,
                x = d.segmentInterval,
                b = d.segmentLength;
            return {
                angle: c(y, p, g, m, b),
                x: (0, s.numberAtInterval)(y, g, x),
                y: (0, s.numberAtInterval)(p, m, x)
            }
        },
        h = function (e, t) {
            var r = e[0],
                n = r.x,
                i = r.y,
                a = e[1],
                u = a.x,
                s = a.y,
                c = (0, o.linearLength)(n, i, u, s),
                f = t / c;
            return {
                x1: n,
                y1: i,
                x2: u,
                y2: s,
                segmentInterval: f,
                segmentLength: c
            }
        },
        v = function (e, t, r) {
            for (var n = 0, i = 0; i < t; i++) {
                var a = e[i].moveTo;
                if (!a) {
                    var u = e[i - 1],
                        s = u.x,
                        c = u.y,
                        f = e[i],
                        l = f.x,
                        h = f.y,
                        v = (0, o.linearLength)(s, c, l, h);
                    if (n + v >= r) {
                        var d = (r - n) / v;
                        return {
                            x1: s,
                            y1: c,
                            x2: l,
                            y2: h,
                            segmentInterval: d,
                            segmentLength: v
                        }
                    }
                    n += v
                }
            }
        };
    t["default"] = l
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(19),
        i = function (e, t, r) {
            if (t.curve || r.curve) return !1;
            var n = (r.y - e.y) * (t.x - e.x) - (r.x - e.x) * (t.y - e.y);
            if (Math.abs(n) > Number.EPSILON) return !1;
            var i = (r.x - e.x) * (t.x - e.x) + (r.y - e.y) * (t.y - e.y);
            if (i < 0) return !1;
            var a = (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
            return !(i > a)
        },
        a = function (e) {
            for (var t = [], r = 0, n = e.length; r < n; r++) {
                var a = t[t.length - 1],
                    o = e[r + 1],
                    u = e[r];
                a && o && u && i(a, o, u) || t.push(u)
            }
            return t
        },
        o = function (e) {
            return (0, n.applyFuncToShapes)(a, e)
        };
    t["default"] = o
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(17),
        a = n(i),
        o = r(19),
        u = function (e) {
            var t = void 0;
            return e.reverse().map(function (e) {
                var r = e.x,
                    n = e.y,
                    i = e.curve,
                    a = {
                        x: r,
                        y: n
                    };
                if (t) {
                    var o = t,
                        u = o.x1,
                        s = o.y1,
                        c = o.x2,
                        f = o.y2;
                    a.curve = {
                        type: "cubic",
                        x1: c,
                        y1: f,
                        x2: u,
                        y2: s
                    }
                }
                return t = i ? i : null, a
            })
        },
        s = function (e) {
            return (0, o.applyFuncToShapes)(u, (0, a["default"])(e))
        };
    t["default"] = s
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
        a = function () {
            function e(e, t) {
                var r = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
                } catch (s) {
                    i = !0, a = s
                } finally {
                    try {
                        !n && u["return"] && u["return"]()
                    } finally {
                        if (i) throw a
                    }
                }
                return r
            }
            return function (t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = r(19),
        u = r(20),
        s = n(u),
        c = function (e, t, r, n, i) {
            var a = i.x,
                o = i.y,
                u = e - a,
                s = t - o;
            return [u * r - s * n + a, u * n + s * r + o]
        },
        f = function (e, t, r) {
            return e.map(function (e) {
                var n = t * Math.PI / 180,
                    o = Math.cos(n),
                    u = Math.sin(n),
                    s = c(e.x, e.y, o, u, r),
                    f = a(s, 2),
                    l = f[0],
                    h = f[1],
                    v = i({}, e, {
                        x: l,
                        y: h
                    });
                if (v.curve) {
                    if ("quadratic" === v.curve.type || "cubic" === v.curve.type) {
                        var d = c(v.curve.x1, v.curve.y1, o, u, r),
                            y = a(d, 2),
                            p = y[0],
                            g = y[1];
                        v.curve = i({}, v.curve, {
                            x1: p,
                            y1: g
                        })
                    }
                    if ("cubic" === v.curve.type) {
                        var m = c(v.curve.x2, v.curve.y2, o, u, r),
                            x = a(m, 2),
                            b = x[0],
                            w = x[1];
                        v.curve = i({}, v.curve, {
                            x2: b,
                            y2: w
                        })
                    }
                }
                return v
            })
        },
        l = function (e, t) {
            var r = (0, s["default"])(e),
                n = r.center;
            return (0, o.applyFuncToShapes)(f, e, t, n)
        };
    t["default"] = l
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
        a = r(20),
        o = n(a),
        u = r(19),
        s = function (e, t, r, n) {
            var a = i({}, e);
            return a.x = r - (r - a.x) * t, a.y = n - (n - a.y) * t, e.curve && (a.curve = i({}, a.curve), "arc" === a.curve.type ? (a.curve.rx && (a.curve.rx = a.curve.rx * t), a.curve.ry && (a.curve.ry = a.curve.ry * t)) : (a.curve.x1 = r - (r - a.curve.x1) * t, a.curve.y1 = n - (n - a.curve.y1) * t, "cubic" === a.curve.type && (a.curve.x2 = r - (r - a.curve.x2) * t, a.curve.y2 = n - (n - a.curve.y2) * t))), a
        },
        c = function (e, t) {
            var r = arguments.length <= 2 || void 0 === arguments[2] ? "center" : arguments[2],
                n = (0, o["default"])(e),
                i = n.bottom,
                a = n.center,
                c = n.left,
                f = n.right,
                l = n.top,
                h = a.x,
                v = a.y;
            switch (r) {
                case "topLeft":
                    h = c, v = l;
                    break;
                case "topRight":
                    h = f, v = l;
                    break;
                case "bottomRight":
                    h = f, v = i;
                    break;
                case "bottomLeft":
                    h = c, v = i
            }
            return (0, u.applyFuncToShapes)(function (e) {
                return e.map(function (e) {
                    return s(e, t, h, v)
                })
            }, e)
        };
    t["default"] = c
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    },
        a = r(31),
        o = r(13),
        u = n(o),
        s = r(32),
        c = [{
            name: "color",
            i: a.colorIn,
            o: a.colorOut
        }, {
            name: "units",
            i: s.unitsIn,
            o: s.unitsOut
        }];
    t["default"] = function (e, t, r, n, a) {
        var o = function s(e, t) {
            if (e === t) return e;
            if ("number" == typeof e && "number" == typeof t) return a(r, e, t, n);
            var o = e,
                f = t;
            if (c.map(function (e) {
                    var t = e.i;
                    "string" == typeof o && "string" == typeof f && (o = t(o), f = t(f))
            }), "object" === ("undefined" == typeof o ? "undefined" : i(o)) && "object" === ("undefined" == typeof f ? "undefined" : i(f)))
                for (var l in c) {
                    var h = c[l],
                        v = h.name,
                        d = h.o;
                    if (v === o.middleware && v === f.middleware) return d((0, u["default"])(o, f, s))
                }
            return e
        };
        return (0, u["default"])(e, t, o)
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        n = function (e, t, r) {
            return Math.max(t, Math.min(r, e))
        },
        i = function (e) {
            return null !== e.match(/^#(?:[0-9a-f]{3}){1,2}$/i)
        },
        a = function (e) {
            return e.startsWith("rgb(")
        },
        o = function (e) {
            return e.startsWith("rgba(")
        },
        u = function (e) {
            var t = e.replace("#", "");
            return 3 === t.length && (t = t.split("").map(function (e) {
                return "" + e + e
            }).join("")), {
                middleware: "color",
                colorType: "hex",
                r: parseInt(t.slice(0, 2), 16),
                g: parseInt(t.slice(2, 4), 16),
                b: parseInt(t.slice(4, 6), 16),
                a: 1
            }
        },
        s = function (e) {
            var t = e.replace(/\s/g, ""),
                n = t.substring(4, t.length - 1).split(","),
                i = r(n, 3),
                a = i[0],
                o = i[1],
                u = i[2];
            return {
                middleware: "color",
                colorType: "rgb",
                r: parseFloat(a),
                g: parseFloat(o),
                b: parseFloat(u),
                a: 1
            }
        },
        c = function (e) {
            var t = e.replace(/\s/g, ""),
                n = t.substring(5, t.length - 1).split(","),
                i = r(n, 4),
                a = i[0],
                o = i[1],
                u = i[2],
                s = i[3];
            return {
                middleware: "color",
                colorType: "rgba",
                r: parseFloat(a),
                g: parseFloat(o),
                b: parseFloat(u),
                a: parseFloat(s)
            }
        },
        f = function (e) {
            var t = Math.ceil(n(e.r, 0, 255)).toString(16),
                r = Math.ceil(n(e.g, 0, 255)).toString(16),
                i = Math.ceil(n(e.b, 0, 255)).toString(16);
            return t = 1 === t.length ? "0" + t : t, r = 1 === r.length ? "0" + r : r, i = 1 === i.length ? "0" + i : i, "#" + t + r + i
        },
        l = function (e) {
            var t = e.r,
                r = e.g,
                i = e.b;
            return "rgb(" + n(t, 0, 255) + "," + n(r, 0, 255) + "," + n(i, 0, 255) + ")"
        },
        h = function (e) {
            var t = e.r,
                r = e.g,
                i = e.b,
                a = e.a;
            return "rgba(" + n(t, 0, 255) + "," + n(r, 0, 255) + "," + n(i, 0, 255) + "," + n(a, 0, 1) + ")"
        },
        v = function (e) {
            return i(e) ? u(e) : a(e) ? s(e) : o(e) ? c(e) : e
        },
        d = function (e) {
            var t = e.colorType,
                r = e.middleware;
            if ("color" === r) switch (t) {
                case "rgba":
                    return h(e);
                case "rgb":
                    return l(e);
                case "hex":
                    return f(e)
            }
            return e
        };
    t.colorIn = v, t.colorOut = d
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = ["ch", "cm", "em", "ex", "in", "mm", "pc", "pt", "px", "rem", "vh", "vmax", "vmin", "vw", "%"],
        n = function (e) {
            var t = e.split(" "),
                n = t.map(function (e) {
                    var t = parseFloat(e),
                        n = e.replace(t, "");
                    return isNaN(t) || "" !== n && r.indexOf(n) === -1 ? e : [t, n]
                });
            return n.toString() === t.toString() ? e : {
                middleware: "units",
                values: n
            }
        },
        i = function (e) {
            var t = e.middleware,
                r = e.values;
            return "units" === t ? r.map(function (e) {
                return e.join("")
            }).join(" ") : e
        };
    t.unitsIn = n, t.unitsOut = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tick = void 0;
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
        i = r(9),
        a = r(34),
        o = function (e, t) {
            var r = e.timeline,
                a = e.state,
                o = void 0 === a ? {} : a,
                s = o.animation,
                c = void 0 === s ? {} : s,
                f = r.duration,
                l = r.keyframes,
                h = Date.now(),
                v = n({}, u, c, t),
                d = v.alternate,
                y = v.delay,
                p = v.duration,
                g = void 0 === p ? f : p,
                m = v.easing,
                x = v.finish,
                b = v.rate,
                w = v.start,
                A = v.update,
                _ = (0, i.currentState)(c),
                O = _.currentProgress,
                M = _.currentReverse,
                P = _.iterationsComplete,
                S = M,
                E = !1;
            "undefined" != typeof t.reverse && (M = t.reverse, S = t.reverse, c.started && (E = t.reverse !== M));
            var k = S && !E || !S && E ? 1 - O : O;
            "undefined" != typeof t.initialProgress && (k = t.initialProgress);
            var I = S ? k : 1 - k;
            c.started && (I = c.iterations - P), "undefined" != typeof t.iterations && (I = t.iterations), "function" == typeof w && w(), o.animation = {
                alternate: d,
                currentProgress: O,
                currentReverse: M,
                duration: g / b,
                easing: m,
                finish: x,
                finished: !1,
                initialProgress: k,
                iterations: I,
                iterationsComplete: P,
                keyframes: l.map(function () {
                    return {
                        finished: !1,
                        reverse: M,
                        started: !1
                    }
                }),
                play: h + y,
                reverse: S,
                start: w,
                started: !0,
                update: A
            }
        },
        u = {
            alternate: !1,
            delay: 0,
            easing: "easeInOutQuad",
            rate: 1
        },
        s = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                r = arguments.length <= 2 || void 0 === arguments[2] ? c : arguments[2];
            o(e, t), r(e)
        },
        c = function (e) {
            (0, a.state)(e), (0, a.events)(e)
        };
    t.tick = c, t["default"] = s
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.state = t.events = t.create = void 0;
    var i = r(35),
        a = n(i),
        o = r(40),
        u = n(o),
        s = r(41),
        c = n(s);
    t.create = a["default"], t.events = u["default"], t.state = c["default"], t["default"] = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = (0, a["default"])(t);
        return (0, c["default"])(n), n
    }
}, function (e, t, r) {
    "use strict";

    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length) ; t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }

    function i(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.timing = t.manipulate = t.keyframeShape = t.keyframe = t.addDurations = void 0;
    var a = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        u = r(36),
        s = r(9),
        c = r(15),
        f = r(37),
        l = function (e) {
            var t = 0;
            return e.forEach(function (e) {
                var r = e.animation;
                r && (t += r.duration)
            }), t
        },
        h = function (e) {
            var t = [],
                r = [];
            e.map(function (n, a) {
                var o = n.motionPath,
                    u = i(n, ["motionPath"]),
                    s = u.type ? u : e[a - 1];
                t.push(v(s, a)), r.push(o)
            });
            var n = l(t);
            return {
                timeline: {
                    duration: n,
                    keyframes: t,
                    motionPaths: r,
                    timing: p(t, n)
                }
            }
        },
        v = function (e, t) {
            var r = e.shapes,
                n = i(e, ["shapes"]),
                a = [n];
            r && r.map(function (e) {
                return a.push(e)
            });
            var c = {
                shapes: a.map(d)
            };
            return t > 0 && (c.animation = o({}, u.animationDefaults, (0, s.filter)(u.animationProps, n))), c
        },
        d = function (e) {
            var t = {
                styles: (0, s.filter)(u.styleProps, e)
            };
            if ("g" !== e.type) {
                var r = (0, s.filter)(u.manipulationProps, e),
                    n = (0, f.toPoints)((0, s.filter)(u.shapeProps, e));
                t.points = y(n, r)
            }
            return t
        },
        y = function (e, t) {
            var r = [].concat(n(e));
            return Object.keys(t).forEach(function (e) {
                var n = t[e];
                switch (e) {
                    case "moveIndex":
                        r = (0, c.moveIndex)(r, n);
                        break;
                    case "offset":
                        var i = a(n, 2),
                            o = i[0],
                            u = void 0 === o ? 0 : o,
                            s = i[1],
                            f = void 0 === s ? 0 : s;
                        r = (0, c.offset)(r, u, f);
                        break;
                    case "reverse":
                        n && (r = (0, c.reverse)(r));
                        break;
                    case "scale":
                        var l = Array.isArray(n),
                            h = l ? n[0] : n,
                            v = l ? n[1] : "center";
                        r = (0, c.scale)(r, h, v)
                }
            }), r
        },
        p = function (e, t) {
            var r = 0;
            return e.map(function (e) {
                var n = e.animation;
                return n ? (r += n.duration, r / t) : r
            })
        };
    t.addDurations = l, t.keyframe = v, t.keyframeShape = d, t.manipulate = y, t.timing = p, t["default"] = h
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        delay: 0,
        duration: 250
    },
        n = ["delay", "duration", "easing", "finish", "motionPath", "name", "start", "update"],
        i = ["moveIndex", "offset", "reverse", "scale"],
        a = ["cx", "cy", "d", "height", "points", "r", "rx", "ry", "shapes", "type", "width", "x", "x1", "x2", "y", "y1", "y2"],
        o = {
            fill: "fill",
            fillOpactity: "fill-opacity",
            fillRule: "fill-rule",
            stroke: "stroke",
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeOpactity: "stroke-opacity",
            strokeWidth: "stroke-width",
            vectorEffect: "vector-effect"
        },
        u = Object.keys(o);
    t.animationDefaults = r, t.animationProps = n, t.manipulationProps = i, t.shapeProps = a, t.stylePropAttrMap = o, t.styleProps = u
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0, t.toPoints = t.toPath = void 0;
    var i = r(38),
        a = n(i),
        o = r(39),
        u = n(o);
    t.toPath = a["default"], t.toPoints = u["default"]
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var i = r(39),
        a = n(i),
        o = function (e) {
            for (var t = "", r = 0, n = e[r], i = e, a = Array.isArray(i), o = 0, i = a ? i : i[Symbol.iterator]() ; ;) {
                var u;
                if (a) {
                    if (o >= i.length) break;
                    u = i[o++]
                } else {
                    if (o = i.next(), o.done) break;
                    u = o.value
                }
                var s = u,
                    c = 0 === r,
                    f = r === e.length - 1,
                    l = c ? null : e[r - 1],
                    h = s.curve,
                    v = void 0 !== h && h,
                    d = s.moveTo,
                    y = s.x,
                    p = s.y;
                if (d || c) f || (t += "M" + y + "," + p);
                else if (v) {
                    switch (v.type) {
                        case "arc":
                            var g = s.curve,
                                m = g.largeArcFlag,
                                x = void 0 === m ? 0 : m,
                                b = g.rx,
                                w = g.ry,
                                A = g.sweepFlag,
                                _ = void 0 === A ? 0 : A,
                                O = g.xAxisRotation,
                                M = void 0 === O ? 0 : O;
                            t += "A" + b + "," + w + "," + M + "," + x + "," + _ + "," + y + "," + p;
                            break;
                        case "cubic":
                            var P = s.curve,
                                S = P.x1,
                                E = P.y1,
                                k = P.x2,
                                I = P.y2;
                            t += "C" + S + "," + E + "," + k + "," + I + "," + y + "," + p;
                            break;
                        case "quadratic":
                            var F = s.curve,
                                T = F.x1,
                                j = F.y1;
                            t += "Q" + T + "," + j + "," + y + "," + p
                    }
                    f && y === n.x && p === n.y && (t += "Z")
                } else f && y === n.x && p === n.y ? t += "Z" : y !== l.x && p !== l.y ? t += "L" + y + "," + p : y !== l.x ? t += "H" + y : p !== l.y && (t += "V" + p);
                r++
            }
            return t
        },
        u = function (e) {
            var t = Array.isArray(e),
                r = t ? Array.isArray(e[0]) : "g" === e.type,
                n = t ? e : r ? e.shapes.map(function (e) {
                    return (0, a["default"])(e)
                }) : (0, a["default"])(e);
            return r ? n.map(function (e) {
                return o(e)
            }) : o(n)
        };
    t["default"] = u
}, function (e, t) {
    "use strict";

    function r(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }
    t.__esModule = !0;
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
        i = function (e) {
            var t = e.type,
                n = r(e, ["type"]);
            switch (t) {
                case "circle":
                    return a(n);
                case "ellipse":
                    return o(n);
                case "line":
                    return u(n);
                case "path":
                    return v(n);
                case "polygon":
                    return d(n);
                case "polyline":
                    return y(n);
                case "rect":
                    return g(n);
                case "g":
                    return b(n);
                default:
                    throw new Error("Not a valid shape type")
            }
        },
        a = function (e) {
            var t = e.cx,
                r = e.cy,
                n = e.r;
            return [{
                x: t,
                y: r - n,
                moveTo: !0
            }, {
                x: t,
                y: r + n,
                curve: {
                    type: "arc",
                    rx: n,
                    ry: n,
                    sweepFlag: 1
                }
            }, {
                x: t,
                y: r - n,
                curve: {
                    type: "arc",
                    rx: n,
                    ry: n,
                    sweepFlag: 1
                }
            }]
        },
        o = function (e) {
            var t = e.cx,
                r = e.cy,
                n = e.rx,
                i = e.ry;
            return [{
                x: t,
                y: r - i,
                moveTo: !0
            }, {
                x: t,
                y: r + i,
                curve: {
                    type: "arc",
                    rx: n,
                    ry: i,
                    sweepFlag: 1
                }
            }, {
                x: t,
                y: r - i,
                curve: {
                    type: "arc",
                    rx: n,
                    ry: i,
                    sweepFlag: 1
                }
            }]
        },
        u = function (e) {
            var t = e.x1,
                r = e.x2,
                n = e.y1,
                i = e.y2;
            return [{
                x: t,
                y: n,
                moveTo: !0
            }, {
                x: r,
                y: i
            }]
        },
        s = /[MmLlHhVvCcSsQqTtAaZz]/g,
        c = {
            m: 2,
            l: 2,
            h: 1,
            v: 1,
            c: 6,
            s: 4,
            q: 4,
            t: 2,
            a: 7,
            z: 0
        },
        f = ["xAxisRotation", "largeArcFlag", "sweepFlag"],
        l = function (e) {
            return e.match(s)
        },
        h = function (e) {
            return e.split(s).map(function (e) {
                return e.replace(/[0-9]+-/g, function (e) {
                    return e.slice(0, -1) + " -"
                })
            }).map(function (e) {
                return e.replace(/\.[0-9]+/g, function (e) {
                    return e + " "
                })
            }).map(function (e) {
                return e.trim()
            }).filter(function (e) {
                return e.length > 0
            }).map(function (e) {
                return e.split(/[ ,]+/).map(parseFloat).filter(function (e) {
                    return !isNaN(e)
                })
            })
        },
        v = function (e) {
            for (var t = e.d, r = l(t), n = h(t), i = [], a = void 0, o = 0, u = r.length; o < u; o++) {
                var s = r[o],
                    v = c[s.toLowerCase()],
                    d = !1;
                if (v > 0)
                    for (var y = n.shift(), p = y.length / v, g = 0; g < p; g++) {
                        var m = 0 === o ? null : i[i.length - 1];
                        switch (s) {
                            case "m":
                                d = !0;
                            case "M":
                                var x = (d && m ? m.x : 0) + y.shift(),
                                    b = (d && m ? m.y : 0) + y.shift();
                                a = {
                                    x: x,
                                    y: b
                                }, i.push({
                                    x: x,
                                    y: b,
                                    moveTo: !0
                                });
                                break;
                            case "l":
                                d = !0;
                            case "L":
                                i.push({
                                    x: (d ? m.x : 0) + y.shift(),
                                    y: (d ? m.y : 0) + y.shift()
                                });
                                break;
                            case "h":
                                d = !0;
                            case "H":
                                i.push({
                                    x: (d ? m.x : 0) + y.shift(),
                                    y: m.y
                                });
                                break;
                            case "v":
                                d = !0;
                            case "V":
                                i.push({
                                    x: m.x,
                                    y: (d ? m.y : 0) + y.shift()
                                });
                                break;
                            case "a":
                                d = !0;
                            case "A":
                                i.push({
                                    curve: {
                                        type: "arc",
                                        rx: y.shift(),
                                        ry: y.shift(),
                                        xAxisRotation: y.shift(),
                                        largeArcFlag: y.shift(),
                                        sweepFlag: y.shift()
                                    },
                                    x: (d ? m.x : 0) + y.shift(),
                                    y: (d ? m.y : 0) + y.shift()
                                });
                                for (var w = f, A = Array.isArray(w), _ = 0, w = A ? w : w[Symbol.iterator]() ; ;) {
                                    var O;
                                    if (A) {
                                        if (_ >= w.length) break;
                                        O = w[_++]
                                    } else {
                                        if (_ = w.next(), _.done) break;
                                        O = _.value
                                    }
                                    var M = O;
                                    0 === i[o].curve[M] && delete i[o].curve[M]
                                }
                                break;
                            case "c":
                                d = !0;
                            case "C":
                                i.push({
                                    curve: {
                                        type: "cubic",
                                        x1: (d ? m.x : 0) + y.shift(),
                                        y1: (d ? m.y : 0) + y.shift(),
                                        x2: (d ? m.x : 0) + y.shift(),
                                        y2: (d ? m.y : 0) + y.shift()
                                    },
                                    x: (d ? m.x : 0) + y.shift(),
                                    y: (d ? m.y : 0) + y.shift()
                                });
                                break;
                            case "s":
                                d = !0;
                            case "S":
                                var P = (d ? m.x : 0) + y.shift(),
                                    S = (d ? m.y : 0) + y.shift(),
                                    E = (d ? m.x : 0) + y.shift(),
                                    k = (d ? m.y : 0) + y.shift(),
                                    I = {},
                                    F = void 0,
                                    T = void 0;
                                m.curve && "cubic" === m.curve.type ? (I.x = Math.abs(m.x - m.curve.x2), I.y = Math.abs(m.y - m.curve.y2), F = m.x < m.curve.x2 ? m.x - I.x : m.x + I.x, T = m.y < m.curve.y2 ? m.y - I.y : m.y + I.y) : (I.x = Math.abs(E - P), I.y = Math.abs(k - S), F = E < P ? m.x - I.x : m.x + I.x, T = k < S ? m.y + I.y : m.y - I.y), i.push({
                                    curve: {
                                        type: "cubic",
                                        x1: F,
                                        y1: T,
                                        x2: P,
                                        y2: S
                                    },
                                    x: E,
                                    y: k
                                });
                                break;
                            case "q":
                                d = !0;
                            case "Q":
                                i.push({
                                    curve: {
                                        type: "quadratic",
                                        x1: (d ? m.x : 0) + y.shift(),
                                        y1: (d ? m.y : 0) + y.shift()
                                    },
                                    x: (d ? m.x : 0) + y.shift(),
                                    y: (d ? m.y : 0) + y.shift()
                                });
                                break;
                            case "t":
                                d = !0;
                            case "T":
                                var j = (d ? m.x : 0) + y.shift(),
                                    C = (d ? m.y : 0) + y.shift(),
                                    L = void 0,
                                    N = void 0;
                                if (m.curve && "quadratic" === m.curve.type) {
                                    var H = {
                                        x: Math.abs(m.x - m.curve.x1),
                                        y: Math.abs(m.y - m.curve.y1)
                                    };
                                    L = m.x < m.curve.x1 ? m.x - H.x : m.x + H.x, N = m.y < m.curve.y1 ? m.y - H.y : m.y + H.y
                                } else L = m.x, N = m.y;
                                i.push({
                                    curve: {
                                        type: "quadratic",
                                        x1: L,
                                        y1: N
                                    },
                                    x: j,
                                    y: C
                                })
                        }
                    } else i.push({
                        x: a.x,
                        y: a.y
                    })
            }
            return i
        },
        d = function (e) {
            var t = e.points;
            return p({
                closed: !0,
                points: t
            })
        },
        y = function (e) {
            var t = e.points;
            return p({
                closed: !1,
                points: t
            })
        },
        p = function (e) {
            var t = e.closed,
                r = e.points,
                i = r.split(/[\s,]+/).map(function (e) {
                    return parseFloat(e)
                }),
                a = i.reduce(function (e, t, r) {
                    return r % 2 === 0 ? e.push({
                        x: t
                    }) : e[(r - 1) / 2].y = t, e
                }, []);
            return t && a.push(n({}, a[0])), a[0].moveTo = !0, a
        },
        g = function (e) {
            var t = e.height,
                r = e.rx,
                n = e.ry,
                i = e.width,
                a = e.x,
                o = e.y;
            return r || n ? x({
                height: t,
                rx: r ? r : n,
                ry: n ? n : r,
                width: i,
                x: a,
                y: o
            }) : m({
                height: t,
                width: i,
                x: a,
                y: o
            })
        },
        m = function (e) {
            var t = e.height,
                r = e.width,
                n = e.x,
                i = e.y;
            return [{
                x: n,
                y: i,
                moveTo: !0
            }, {
                x: n + r,
                y: i
            }, {
                x: n + r,
                y: i + t
            }, {
                x: n,
                y: i + t
            }, {
                x: n,
                y: i
            }]
        },
        x = function (e) {
            var t = e.height,
                r = e.rx,
                n = e.ry,
                i = e.width,
                a = e.x,
                o = e.y,
                u = {
                    type: "arc",
                    rx: r,
                    ry: n,
                    sweepFlag: 1
                };
            return [{
                x: a + r,
                y: o,
                moveTo: !0
            }, {
                x: a + i - r,
                y: o
            }, {
                x: a + i,
                y: o + n,
                curve: u
            }, {
                x: a + i,
                y: o + t - n
            }, {
                x: a + i - r,
                y: o + t,
                curve: u
            }, {
                x: a + r,
                y: o + t
            }, {
                x: a,
                y: o + t - n,
                curve: u
            }, {
                x: a,
                y: o + n
            }, {
                x: a + r,
                y: o,
                curve: u
            }]
        },
        b = function (e) {
            var t = e.shapes;
            return t.map(function (e) {
                return i(e)
            })
        };
    t["default"] = i
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        i = function (e, t) {
            return e > 0 && e < 1 ? t : null
        },
        a = function (e) {
            var t = e.state,
                r = e.timeline,
                a = t.animation,
                u = r.keyframes,
                s = a.alternate,
                c = a.currentProgress,
                f = a.currentReverse,
                l = a.iterationsComplete,
                h = a.keyframe1Index,
                v = a.keyframe2,
                d = a.keyframe2Index;
            if (v) {
                var y = i(c, d),
                    p = o({
                        alternate: s,
                        currentProgress: c,
                        currentReverse: f,
                        iterationsComplete: l,
                        keyframe1Index: h,
                        keyframe2Index: d,
                        keyframeLength: u.length
                    });
                p && (p === y && a.keyframes[p].reverse === f || a.keyframes[p].started && !a.keyframes[p].finished && (a.keyframes[p].started = !1, a.keyframes[p].finished = !0, "function" == typeof u[p].animation.finish && u[p].animation.finish())), y && (a.keyframes[y].started || (a.keyframes[y].started = !0, a.keyframes[y].finished = !1, a.keyframes[y].reverse = f, "function" == typeof u[y].animation.start && u[y].animation.start()), "function" == typeof u[y].animation.update && u[y].animation.update()), "function" == typeof a.update && a.update(), (0, n.finished)(a) && (a.finished = !0, "function" == typeof a.finish && a.finish())
            }
        },
        o = function (e) {
            var t = e.alternate,
                r = e.currentProgress,
                n = e.currentReverse,
                i = e.iterationsComplete,
                a = e.keyframe1Index,
                o = e.keyframe2Index,
                u = e.keyframeLength;
            return n ? 0 === r ? o : o + 1 === u ? i > 1 ? t ? o : 1 : null : o + 1 : 1 === r ? o : 0 === a ? i > 1 ? t ? 1 : u - 1 : null : a
        };
    t["default"] = a
}, function (e, t, r) {
    "use strict";

    function n(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shapeState = t.styleAttributes = t.shapeAttributes = t.normalisedShapes = t.motionPathShapes = t.motionPathOffset = t.frameShapes = t.currentShapes = t.currentKeyframes = t.animationState = void 0;
    var i = function () {
        function e(e, t) {
            var r = [],
                n = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, u = e[Symbol.iterator]() ; !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t) ; n = !0);
            } catch (s) {
                i = !0, a = s
            } finally {
                try {
                    !n && u["return"] && u["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return r
        }
        return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
        a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        },
        o = r(9),
        u = r(15),
        s = r(36),
        c = r(37),
        f = function (e, t) {
            var r = t.keyframes,
                n = t.timing,
                i = e && e.animation ? e.animation : {},
                u = a({}, i, (0, o.currentState)(i)),
                s = u.currentProgress;
            return a({}, u, l(s, r, n))
        },
        l = function (e, t, r) {
            var n = r.reduce(function (t, r, n) {
                return e > r ? n : t
            }, 0),
                i = n + 1,
                a = t[n],
                o = t[i];
            return {
                keyframe1: a,
                keyframe1Index: n,
                keyframe2: o,
                keyframe2Index: i
            }
        },
        h = function (e) {
            var t = e.duration,
                r = e.easing,
                n = e.shapes1,
                a = e.shapes2,
                u = e.time,
                s = p(n, a),
                c = i(s, 2),
                f = c[0],
                l = c[1];
            return f.map(function (e, n) {
                var i = l[n];
                return (0, o.tween)(e, i, u, t, r)
            })
        },
        v = function (e, t) {
            var r = e.currentProgress,
                n = e.easing,
                i = e.keyframe1,
                a = e.keyframe1Index,
                u = e.keyframe2,
                s = e.keyframe2Index,
                c = i.shapes,
                f = u || {},
                l = f.shapes;
            if (0 === r || !u) return c;
            if (1 === r) return l;
            var v = t[s] - t[a],
                d = r - t[a],
                y = e.duration * v,
                p = y * d / v,
                g = (0, o.easingFunc)(u.animation.easing, n);
            return h({
                currentProgress: r,
                duration: y,
                easing: g,
                shapes1: c,
                shapes2: l,
                time: p
            })
        },
        d = function (e, t) {
            var r = e.currentProgress,
                i = e.easing,
                a = t.accuracy,
                s = void 0 === a ? 1 : a,
                f = n(t, ["accuracy"]),
                l = (0, c.toPoints)(f),
                h = r > 0 && r < 1 ? (0, o.easingFunc)(t.easing, i) : null,
                v = h ? h(r, 0, 1, 1) : r;
            return (0, u.position)(l, v, s)
        },
        y = function (e, t, r) {
            var i = t.rotate,
                o = void 0 !== i && i,
                s = d(e, t),
                c = s.angle,
                f = s.x,
                l = s.y,
                h = "number" == typeof o ? (o + c) % 360 : c;
            return f || l ? r.map(function (e) {
                var t = e.points,
                    r = n(e, ["points"]);
                if (t) {
                    var i = (0, u.offset)(t, f, l);
                    return o && (i = (0, u.rotate)(i, h)), a({}, r, {
                        points: i
                    })
                }
                return r
            }) : r
        },
        p = function (e, t) {
            var r = [],
                n = [];
            return e.map(function (e, a) {
                var u = t[a],
                    s = e.points ? (0, o.normalise)(e, u) : [e, u],
                    c = i(s, 2),
                    f = c[0],
                    l = c[1];
                r.push(f), n.push(l)
            }), [r, n]
        },
        g = function (e) {
            var t = e.points,
                r = e.styles,
                n = m(r);
            return t && (n.d = (0, c.toPath)(t)), n
        },
        m = function (e) {
            var t = {};
            return Object.keys(e).map(function (r) {
                var n = s.stylePropAttrMap[r];
                n && (t[n] = e[r])
            }), t
        },
        x = function (e, t, r) {
            var n = e.keyframe2Index,
                i = t[n],
                a = v(e, r);
            return i ? y(e, i, a).map(g) : a.map(g)
        };
    t.animationState = f, t.currentKeyframes = l, t.currentShapes = h, t.frameShapes = v, t.motionPathOffset = d, t.motionPathShapes = y, t.normalisedShapes = p, t.shapeAttributes = g, t.styleAttributes = m, t.shapeState = x, t["default"] = function (e) {
        var t = e.state,
            r = e.timeline,
            n = r.motionPaths,
            i = r.timing,
            a = f(t, r),
            o = x(a, n, i),
            u = {
                animation: a,
                shapes: o
            };
        return e.state = u, u
    }
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shape = t.render = t.play = void 0;
    var i = r(43),
        a = n(i),
        o = r(44),
        u = n(o),
        s = r(45),
        c = n(s);
    t.play = a["default"], t.render = u["default"], t.shape = c["default"]
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(9),
        i = r(7),
        a = r(44),
        o = function s(e) {
            var t = e.state.animation;
            (0, i.tick)(e), (0, a.renderNodes)(e), (0, n.paused)(t) || (0, n.finished)(t) || window.requestAnimationFrame(function () {
                s(e)
            })
        },
        u = function (e, t) {
            (0, i.play)(e, t, o)
        };
    t["default"] = u
}, function (e, t) {
    "use strict";

    function r(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function (e, t) {
        var r = s(e);
        t.map(function (e) {
            var t = e.nodes,
                n = e.selector,
                i = e.state;
            t.map(function (e, t) {
                if (0 === t && n) {
                    var a = r.querySelector(n);
                    a.parentNode.replaceChild(e, a)
                } else r.appendChild(e);
                i.shapes[t].d || (r = e)
            })
        })
    },
        i = function (e) {
            e.nodes = e.state.shapes.map(function (e) {
                var t = e.d;
                return t ? document.createElementNS("http://www.w3.org/2000/svg", "path") : document.createElementNS("http://www.w3.org/2000/svg", "g")
            })
        },
        a = function (e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
            r.map(function (e) {
                o(e)
            }), n(e, r)
        },
        o = function (e) {
            e.nodes || i(e), c(e)
        },
        u = ["height", "preserveAspectRatio", "viewBox", "width"],
        s = function (e) {
            var t = e.selector,
                n = r(e, ["selector"]);
            if (!t) return n;
            var i = document.querySelector(t);
            if ("svg" === i.nodeName) return i;
            var a = i.querySelector("svg");
            if ("svg" === a.nodeName) return a;
            var o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return Object.keys(e).filter(function (e) {
                return u.indexOf(e) !== -1
            }).forEach(function (t) {
                o.setAttribute(t, e[t])
            }), i.appendChild(o), o
        },
        c = function (e) {
            var t = e.nodes,
                r = e.state;
            t.map(function (e, t) {
                var n = r.shapes[t];
                Object.keys(n).forEach(function (t) {
                    e.setAttribute(t, n[t])
                })
            })
        };
    t.renderNodes = o, t["default"] = a
}, function (e, t, r) {
    "use strict";

    function n(e, t) {
        var r = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r
    }

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length) ; t < e.length; t++) r[t] = e[t];
            return r
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.create = void 0;
    var a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
        o = r(7),
        u = r(36),
        s = a({}, u.stylePropAttrMap),
        c = Object.keys(s),
        f = c.map(function (e) {
            return s[e]
        }),
        l = function d(e) {
            var t = e.attributes,
                r = e.nodeName,
                n = {
                    type: r
                };
            return Object.keys(t).map(function (e) {
                var r = t[e],
                    i = r.name,
                    a = r.value,
                    o = f.indexOf(i);
                o > -1 && (i = c[o]), n[i] = isNaN(a) ? a : parseFloat(a)
            }), "g" === r && (n.shapes = [].concat(i(e.children)).map(d)), n
        },
        h = function (e) {
            if (!e) return {};
            var t = document.querySelector(e);
            return l(t)
        },
        v = function (e) {
            var t = e.map(function (e) {
                var t = e.selector,
                    r = n(e, ["selector"]);
                return a({}, h(t), r)
            });
            return a({
                selector: e[0].selector
            }, (0, o.create)(t))
        };
    t.create = v, t["default"] = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n = v(t);
        return (0, o.state)(n), n
    }
}, function (e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i() {
        return {
            commands: S,
            reactions: E,
            bodyParts: ["rightArm", "rightForearm", "rightHand", "leftArm", "leftForearm", "leftHand"],
            docs: k,
            examples: I
        }
    }

    function a(e) {
        var t = void 0;
        try {
            t = JSON.parse(e)
        } catch (r) {
            t = null
        }
        return t
    }

    function o(e) {
        F = e
    }

    function u(e, t) {
        var r = s(e, t);
        F && F.postMessage(r)
    }

    function s(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
            r = {};
        return r.type = e, r.body = t, JSON.stringify(r)
    }

    function c(e) {
        return "undefined" != typeof S[e]
    }

    function f(e) {
        return !(null === e || !c(e.type))
    }

    function l(e) {
        return w["default"][e]
    }

    function h(e, t) {
        switch (t) {
            case b.STATE_HAND_OPEN:
                u(E.HAND_OPENED, {
                    bodyPart: e
                });
                break;
            case b.STATE_HAND_CLOSE:
                u(E.HAND_CLOSED, {
                    bodyPart: e
                })
        }
    }

    function v(e, t) {
        u(E.DISK, {
            bodyPart: e,
            diskNumber: t
        })
    }

    function d(e, t) {
        u(E.DISK_ENTER, {
            bodyPart: e,
            diskNumber: t
        })
    }

    function y(e, t) {
        u(E.DISK_LEAVE, {
            bodyPart: e,
            diskNumber: t
        })
    }

    function p(e) {
        u(E.HANOI, {
            state: e
        })
    }

    function g(e) {
        u(E.TOWER_ENTER, {
            towerNumber: e
        })
    }

    function m(e) {
        u(E.TOWER_LEAVE, {
            towerNumber: e
        })
    }

    function x() {
        w["default"].rightHand.on("state", function (e) {
            h("rightHand", e)
        }), w["default"].rightHand.on("disk", function (e) {
            v("rightHand", e)
        }), w["default"].rightHand.on("disk-enter", function (e) {
            d("rightHand", e)
        }), w["default"].rightHand.on("disk-leave", function (e) {
            y("rightHand", e)
        }), w["default"].leftHand.on("state", function (e) {
            h("leftHand", e)
        }), w["default"].leftHand.on("disk", function (e) {
            v("leftHand", e)
        }), w["default"].leftHand.on("disk-enter", function (e) {
            d("leftHand", e)
        }), w["default"].leftHand.on("disk-leave", function (e) {
            y("leftHand", e)
        }), _["default"].on("tower-enter", g), _["default"].on("tower-leave", m), _["default"].on("change", p)
    }
    var b = r(2),
        w = n(b),
        A = r(3),
        _ = n(A),
        O = r(1),
        M = r(4),
        P = n(M),
        S = {
            CONNECT: 0,
            ACTIVATE: 1,
            MOVE: 2,
            HAND: 3
        },
        E = {
            CONNECTED: 0,
            ACTIVATED: 1,
            MOVED: 2,
            LIMIT_REACHED: 3,
            HAND_OPENED: 4,
            HAND_CLOSED: 5,
            DISK: 6,
            DISK_ENTER: 7,
            DISK_LEAVE: 8,
            HANOI: 9,
            TOWER_ENTER: 16,
            TOWER_LEAVE: 17,
            INVALID_MESSAGE: 18,
            UNKNOWN_BODY_PART: 19
        },
        k = {
            commands: {},
            reactions: {}
        };
    k.commands[S.CONNECT] = "Connects to the remove document. This is the first message that needs to be sent with a port object to the remote document.", k.commands[S.ACTIVATE] = "Activated the robot.", k.commands[S.MOVE] = "Moves a hand by a given value", k.commands[S.HAND] = "Toggles hand state (grasp)", k.reactions[E.CONNECTED] = "Successfully connected to the remote document. Robot can be now activated.", k.reactions[E.ACTIVATED] = "Robot has been activated. His limbs can be now moved.", k.reactions[E.MOVED] = "A body part has been moved by a value.", k.reactions[E.LIMIT_REACHED] = "A body part cannot be moved any more", k.reactions[E.HAND_OPENED] = "A hand has been opened.", k.reactions[E.HAND_CLOSED] = "A hand has been closed", k.reactions[E.DISK] = "A disk has been placed in a hand.", k.reactions[E.DISK_ENTER] = "A disk is now under a hand and can be picked up.", k.reactions[E.DISK_LEAVE] = "A disk in now out of reach and cannot be picked up.", k.reactions[E.HANOI] = "State of disks on Hanoi Towers has changed.", k.reactions[E.TOWER_ENTER] = "Disk is over a tower and can be dropped.", k.reactions[E.TOWER_LEAVE] = "Disk is no longer over a tower and cannot be dropped.";
    var I = {};
    I[S.CONNECT] = "/* Connects to remote document */\n{\n  type: " + S.CONNECT + "\n}", I[S.ACTIVATE] = "/* Connects to remote document */\n{\n  type: " + S.ACTIVATE + "\n}", I[S.MOVE] = "/* Moves rightArm by given angle */\n{\n  type: " + S.MOVE + ",\n  body: {\n    bodyPart: 'rightArm',\n    value: 1\n  }\n}", I[S.HAND] = "/* Changes grasp of a hand */\n{\n  type: " + S.HAND + ",\n  body: {\n    bodyPart: 'rightArm',\n    value: 1\n  }\n}";
    var F = void 0,
        T = !1;
    window.addEventListener("message", function (e) {
        e.ports && e.ports[0] && o(e.ports[0]);
        var t = a(e.data),
            r = void 0,
            n = void 0,
            s = void 0;
        switch (f(t) || (r = E.INVALID_MESSAGE), t.type) {
            case S.CONNECT:
                r = E.CONNECTED, n = i(), u(r, n);
                break;
            case S.ACTIVATE:
                T || ((0, O.powerUp)(function () {
                    r = E.ACTIVATED, u(r, n), x()
                }), T = !0);
                break;
            case S.MOVE:
                if (s = l(t.body.bodyPart)) {
                    var c = s.angle;
                    s.rotate(P["default"].clamp(t.body.value, -3, 3));
                    var h = s.angle;
                    r = h === c ? E.LIMIT_REACHED : E.MOVED, n = {
                        bodyPart: t.body.bodyPart,
                        currentValue: s.angle
                    }
                }
                u(r, n);
                break;
            case S.HAND:
                s = l(t.body.bodyPart), s.toggleGrasp && s.toggleGrasp();
                break;
            default:
                r = E.INVALID_MESSAGE, u(r, n)
        }
    })
}]);