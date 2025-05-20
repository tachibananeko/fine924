"use strict";

(function($) {
    // 初始化 Lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy-load",
        class_loaded: "lazy-load--loaded",
        class_entered: "lazy-load--entered",
        threshold: 0
    });

    // 初始化 Swiper 輪播
    var initSwiper = function initSwiper() {
        new Swiper(".hero .swiper-container", {
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            loop: true,
            autoHeight: true,
            lazy: {
                loadOnTransitionStart: true
            },
            pagination: {
                el: ".hero .swiper-pagination",
                type: "bullets",
                clickable: true
            }
        });

        new Swiper(".design-think .swiper-container", {
            spaceBetween: 20,
            slidesPerView: 1,
            lazy: {
                loadOnTransitionStart: true
            },
            watchOverflow: true,
            navigation: {
                nextEl: ".design-think .swiper-btn-next",
                prevEl: ".design-think .swiper-btn-prev"
            },
            breakpoints: {
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2
                },
                1024: {
                    spaceBetween: 20,
                    slidesPerView: 3
                },
                1280: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                1536: {
                    spaceBetween: 40,
                    slidesPerView: 3
                }
            }
        });

        new Swiper(".about-communicate .swiper-container", {
            slidesPerView: "auto",
            loop: true,
            centeredSlides: true,
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: true
            },
            navigation: {
                nextEl: ".about-communicate .swiper-btn-next",
                prevEl: ".about-communicate .swiper-btn-prev"
            },
            breakpoints: {
                992: {
                    centeredSlides: false
                }
            },
            on: {
                init: function init() {
                    lazyLoadInstance.update();
                }
            }
        });
    };

    // 初始化 AOS 動畫
    var ininAnimation = function ininAnimation() {
        AOS.init({
            duration: 1000,
            once: true
        });
    };

    // 捲動時 Header 加上線段
    var scrollHeader = function scrollHeader() {
        var target = $(".site-header");

        $(window).on("scroll", function() {
            var scrollTop = $(this).scrollTop();
            scrollTop > 0 ? target.addClass("is-scroll") : target.removeClass("is-scroll");
        });
    };

    // 打開手機版選單
    var openMenu = function openMenu() {
        $(".site-header__burger").on("click", function() {
            $("body").toggleClass("overflow-hidden");
            $(this).toggleClass("is-active");
            $(".site-mobile-nav").toggleClass("is-active");
        });
    };

    // CSR tab 滾動
    var csrTabScroll = function csrTabScroll() {
        $(window).on("scroll", function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 200) {
                $(".csr-tab").addClass("is-active");
            } else {
                $(".csr-tab").removeClass("is-active");
            }
        });

        $("[data-href]").on("click", function() {
            var target = $(this).data("href");
            var targetPosition = $(target).offset().top;
            $("html, body").animate({
                scrollTop: targetPosition - 100
            }, 750);
        });
    };

    // 相片畫廊
    var justifiedGallery = function justifiedGallery() {
        $("#gallery").justifiedGallery({
            rowHeight: 300,
            margins: 10
        });
    };

    // 回到最上方
    var goTop = function goTop() {
        $(".go-top").on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
    };

    // DOM 元素載入完成後執行
    $(function() {
        initSwiper();
        ininAnimation();
        scrollHeader();
        openMenu();
        csrTabScroll();
        justifiedGallery();
        goTop();
    });

    // 網頁所有元素載入完成後執行
    $(window).on("load", function() {});
})(jQuery);