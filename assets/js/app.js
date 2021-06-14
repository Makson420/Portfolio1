!function (e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }

    o.m = e, o.c = t, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) o.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}
([function (e, t) {
    $((function () {
        $("[data-filter]").on("click", (function (e) {
            e.preventDefault();
            var t = $(this).data("filter");
            "all" == t ? $("[data-cat]").removeClass("hide") : $("[data-cat]").each((function () {
                $(this).data("cat") != t ? $(this).addClass("hide") : $(this).removeClass("hide")
            }))
        })), $("body").removeClass("no-scroll");
        var e = $("[data-modal]"), t = $("[data-close]");
        e.on("click", (function (e) {
            e.preventDefault();
            var t = $(this).data("modal");
            $(t).addClass("show"), $("body").addClass("no-scroll"), setTimeout((function () {
                $(t).find(".modal__dialog").css({transform: "scale(1)"})
            }), 200), $('[data-slider="slick"]').slick("setPosition")
        })), t.on("click", (function (e) {
            e.preventDefault();
            var t = $(this).parents(".modal");
            t.find(".modal__dialog").css({transform: "scale(0)"}), setTimeout((function () {
                t.removeClass("show"), $("body").removeClass("no-scroll")
            }), 200)
        })), $(".modal").on("click", (function (e) {
            var t = $(this);
            t.find(".modal__dialog").css({transform: "scale(0)"}), setTimeout((function () {
                t.removeClass("show"), $("body").removeClass("no-scroll")
            }), 200)
        })), $(".modal__dialog").on("click", (function (e) {
            e.stopPropagation()
        })), $('[data-slider="slick"]').slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            arrows: !1,
            dots: !0
        }),

            $(".slickPrev").on("click", (function (e) {
            e.preventDefault(), $(this).parents(".modal").find('[data-slider="slick"]').slick("slickPrev")
        })), $(".slickNext").on("click", (function (e) {
            e.preventDefault(), $(this).parents(".modal").find('[data-slider="slick"]').slick("slickNext")
        }));
    }))}]);


// Burger

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
if (burger){
    burger.addEventListener("click", function (e){
        document.body.classList.toggle('_lock');
        navigation.classList.toggle('_active');
        burger.classList.toggle('_active');
    });
}


//Scroll


const nav = document.querySelectorAll('[data-goto]');
if (nav.length > 0) {
    nav.forEach(nav => {
        nav.addEventListener("click", onNavClick);
    });
    function onNavClick(e) {
        const nav = e.target;
        if (nav.dataset.goto && document.querySelector(nav.dataset.goto)) {
            const gotoBlock = document.querySelector(nav.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect()
                .top + pageYOffset - document.querySelector('header').offsetHeight;

            if (navigation.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                navigation.classList.remove('_active');
                burger.classList.remove('_active');
            }

            window.scroll({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

    }
}
