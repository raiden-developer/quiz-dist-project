$(function () {
  let navBar = $(".header__bottom");
  let navPos = navBar.offset().top;
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos >= navPos) {
      navBar.addClass("header__bottom--fixed");
    } else {
      navBar.removeClass("header__bottom--fixed");
    }
  });

  let inputs = $('input[type="tel"]');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(inputs);

  $(".nav__link--menu").on("click", function (e) {
    if ($(window).width() <= "768") {
      e.preventDefault();
    }
    $(".submenu__list").toggleClass("submenu__list--active");
  });

  const submenuBtn = document.querySelectorAll(".submenu__btn");
  submenuBtn.forEach((el) => {
    el.addEventListener("click", () => {
      el.nextElementSibling.classList.toggle("dropdown--active");
    });
  });

  $(".fixed-menu__btn").on("click", function (el) {
    $(".fixed-menu__btn").toggleClass("fixed-menu__btn--active");
    $(".fixed-menu__inner").toggleClass("fixed-menu__inner--visible");
  });

  const headers = document.querySelectorAll(".faq__head");

  headers.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item.classList.contains("faq__head--active")) {
        item.classList.remove("faq__head--active");
        this.nextElementSibling.classList.remove("faq__text--active");
      } else {
        item.classList.add("faq__head--active");
        this.nextElementSibling.classList.add("faq__text--active");
      }
    });
  });

  $(".other-job__tab").on("click", function (e) {
    e.preventDefault();
    $(".other-job__tab").removeClass("other-job__tab--active");
    $(this).addClass("other-job__tab--active");

    $(".other-job__item").removeClass("other-job__item--active");
    $($(this).attr("href")).addClass("other-job__item--active");
  });

  $(".other-job__tab").on("click", function (e) {
    e.preventDefault();
    $(".other-job__tab").removeClass("other-job__tab--active");
    $(this).addClass("other-job__tab--active");

    $(".other-job__item").removeClass("other-job__item--active");
    $($(this).attr("href")).addClass("other-job__item--active");
  });

  if ($(".portfolio__swiper").length) {
    var swiperBig = new Swiper(".portfolio__swiper", {
      slidesPerView: 1,
      spaceBetween: 5,
      watchSlidesProgress: true,
      updateOnWindowResize: !0,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: "[data-work-example] .swiper-button-next",
        prevEl: "[data-work-example] .swiper-button-prev",
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 5,
          updateOnWindowResize: !0,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
    swiperBig.on("imagesReady", function () {
      swiperBigFunc(), swiperBig.update();
    }),
      swiperBig.on("beforeResize", function () {
        swiperBigFunc();
      }),
      swiperBig.on("orientationchange", function () {
        swiperBigFunc();
      });
  }

  swiperBigFunc();

  function swiperBigFunc() {
    var e = $(".portfolio__item.swiper-slide").eq(0).width();
    // console.log(e);
    return $(".portfolio__inner").css("width", e);
  }
  if (
    ($(".switch-slide__before").addClass("switch-slide__before--active"),
    $(".switch-slide__before").on("click", (e) => {
      $(".portfolio__item.swiper-slide").eq(1) &&
        (swiperBig.slideTo(0, 800, !0),
        $(".switch-slide__after").removeClass("switch-slide__after--active"),
        $(".switch-slide__before").addClass("switch-slide__before--active"));
    }),
    $(".switch-slide__after").on("click", (e) => {
      $(".portfolio__item.swiper-slide").eq(0) &&
        (swiperBig.slideTo(1, 800, !0),
        $(".switch-slide__before").removeClass("switch-slide__before--active"),
        $(".switch-slide__after").addClass("switch-slide__after--active"));
    }),
    $(".portfolio__subswiper-container").length)
  ) {
    var swiperMini = new Swiper(".portfolio__subswiper-container", {
      slidesPerView: 7,
      spaceBetween: 7,
      centeredSlides: !0,
      loop: !0,
      slideToClickedSlide: !0,
      pagination: {
        el: ".swiper-pagination",
        clickable: !0,
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 5,
        },
        1000: {
          slidesPerView: 7,
        },
      },
    });
    swiperMini.on("slideChange", function () {
      var e = swiperMini.realIndex;
      // console.log(e);
      var a = $("[data-swiper-slide-index=" + e + "]").data("img-mini"),
        t = $("[data-swiper-slide-index=" + e + "]").data("title-mini"),
        i = $("[data-swiper-slide-index=" + e + "]").data("day-mini"),
        r = $("[data-swiper-slide-index=" + e + "]").data("total-mini"),
        h = $("[data-swiper-slide-index=" + e + "]").data("href"),
        n = $(".portfolio__swiper .swiper-slide");
      console.log(h);
      swiperBig.slideTo(0, 800, !0),
        $(".portfolio__swiper .swiper-slide").removeAttr("href"),
        $(".portfolio__swiper .swiper-slide img").removeAttr("src"),
        $(".portfolio__subtitle").text(t),
        $("[data-total] span").text(r),
        $("[data-day] span").text(i);
      for (let e = 0; e < a.length; e++)
        $(n[e]).find("a").attr("href", h),
          $(n[e]).find("img").attr("src", a[e]);
    });
  }

  const workSlider = new Swiper(".work-process__slider", {
    slidesPerView: 3,
    spaceBetween: 12,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".work-process__arrow--next",
      prevEl: ".work-process__arrow--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1000: {
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 14,
      },
    },
  });

  const reviewSlider = new Swiper(".reviews__slider-container", {
    slidesPerView: 2,
    spaceBetween: 20,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        direction: "horizontal",
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      1000: {
        slidesPerView: 2,
      },
    },
  });

  $(".burger-btn").on("click", function () {
    $(this).toggleClass("burger-btn--active");
    $(".header-menu").toggleClass("header-menu--visible");
    $(".body").toggleClass("body--hidden");
  });

  $(".header-menu__overlay").on("click", function () {
    $(".burger-btn").removeClass("burger-btn--active");
    $(".header-menu").removeClass("header-menu--visible");
    $(".body").removeClass("body--hidden");
  });

  $(".modal-toggle").on("click", function () {
    $(".modal").toggleClass("modal--visible");
    $(".body").toggleClass("body--hidden");
  });

  $(".modal").on("click", function (e) {
    if ($(e.target).hasClass("modal__btn") || $(e.target).hasClass("modal")) {
      $(this).removeClass("modal--visible");
      $(".body").removeClass("body--hidden");
    }
  });

  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const before = slider.querySelector(".slider__before");
    const beforeImage = slider.querySelector(".slider__img");
    const change = slider.querySelector(".slider__change");
    const body = document.body;

    let isActive = false;

    document.addEventListener("DOMContentLoaded", () => {
      let width = slider.offsetWidth;
      beforeImage.style.width = `${width}px`;
    });

    change.addEventListener("mousedown", () => {
      isActive = true;
    });

    body.addEventListener("mouseup", () => {
      isActive = false;
    });

    body.addEventListener("mouseleave", () => {
      isActive = false;
    });

    const beforeAfterSlider = (x) => {
      let shift = Math.max(0, Math.min(x, slider.offsetWidth));
      before.style.width = `${shift}px`;
      change.style.left = `${shift}px`;
    };

    const pauseEvents = (e) => {
      e.stopPropagation();
      e.preventDefault();
      return false;
    };

    body.addEventListener("mousemove", (e) => {
      if (!isActive) {
        return;
      }

      let x = e.pageX;
      x -= slider.getBoundingClientRect().left;
      beforeAfterSlider(x);
      pauseEvents(e);
    });

    change.addEventListener("touchstart", () => {
      isActive = true;
    });

    body.addEventListener("touchend", () => {
      isActive = false;
    });

    body.addEventListener("touchcancel", () => {
      isActive = false;
    });

    body.addEventListener("touchmove", (e) => {
      if (!isActive) {
        return;
      }

      let x;

      let i;
      for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
      }

      x -= slider.getBoundingClientRect().left;

      beforeAfterSlider(x);
      pauseEvents(e);
    });
  });

  // const tabs = document.querySelectorAll('.tabs__btn');
  // const tabsItem = document.querySelectorAll('.tabs__tab');

  // function removeClass() {
  //   tabs.forEach(item => {
  //     item.classList.remove('tabs__btn--active');
  //   })
  // }

  // function getItem() {
  //   tabsItem.forEach(item => {
  //     item.classList.remove('tabs__tab--active');
  //   })
  // }

  // tabs.forEach(item => {
  //   item.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     let getAttr = item.getAttribute('href');
  //     removeClass()
  //     getItem()
  //     // settingSidebar.classList.toggle('setting__sidebar--visible');
  //     // modalBack.classList.toggle('modal__back--visible');
  //     item.classList.add('tabs__btn--active');
  //     document.querySelector(getAttr).classList.add('tabs__tab--active')
  //   })
  // })

  const tabsBtn = document.querySelectorAll(".tabs__btn");

  function removeActiveClass() {
    tabsBtn.forEach((tab) => {
      tab.classList.remove("tabs__btn--active");
      tab.nextElementSibling.classList.remove("tabs__content--active");
    });
  }
  tabsBtn.forEach((tab) => {
    tab.addEventListener("click", () => {
      removeActiveClass();
      tab.classList.add("tabs__btn--active");
      tab.nextElementSibling.classList.add("tabs__content--active");
    });
  });
  const demolitionSlider = new Swiper(".demolition__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".demolition__next",
      prevEl: ".demolition__prev",
    },
    scrollbar: {
      el: ".demolition__scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      568: {
        slidesPerView: 3,
      },
    },
  });

  const demolitionSliderBefore = new Swiper(".demolition__slider-before", {
    slidesPerView: 2,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
      nextEl: ".demolition__next--before",
      prevEl: ".demolition__prev--before",
    },
    scrollbar: {
      el: ".demolition__scrollbar--before",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      568: {
        slidesPerView: 2,
      },
    },
  });

  const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        direction: "horizontal",
        spaceBetween: 10,
      },
      1000: {
        direction: "vertical",
      },
    },
  });

  const sliderImages = new Swiper(".slider__images .swiper-container", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: true,
    grabCursor: true,
    thumbs: {
      swiper: sliderThumbs,
    },
  });

  let otherJob = document.querySelectorAll(".other-job__item");
  otherJob.forEach(function (el) {
    const mySwiper = new Swiper(el.querySelector(".swiper"), {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  });

  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [55.76, 37.64],
          zoom: 10,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // ?????????????? ?????????????????? ?? ?????????? ?????????????????? "??????????".
      myGeoObject = new ymaps.GeoObject({
        // ???????????????? ??????????????????.
      });

    myMap.geoObjects
      .add(myGeoObject)
      .add(
        new ymaps.Placemark(
          [55.684758, 37.738521],
          {
            balloonContent: `
        <div class="balloon">
          <span class = "balloon__title">
            ?????????????? 6 ??????????????
          </span>
          <p class = "balloon__descr">
            ???????????????? ???????????? ?? ???????????? ?? ?????????????? ??????????????.
          </p>
          <ul class = "balloon__list">
           <li class = "balloon__item">
              <p class = "balloon__text">
                ????????????: <span class = "balloon__text--orange"> ????????????????</span>
              </p>
            </li>
            <li class="balloon__item">
              <p class="balloon__text">
              ??????????????????????: <span class="balloon__text--orange">???? 7 ??????????????</span>
              </p>
            </li>
            <li class="balloon__item">
              <p class="balloon__text">
               ?????????? ????????????: <span class="balloon__text--orange">????-???? 5:00 - 23:00</span>
              </p>
            </li>
          </ul>
          <form class="form" action="#">
            <h3 class="form__title">
              ???????????????????? ????????????????????????
            </h3>
            <div class="form__inner">
              <label class="form__label">
                <span class="sr-only">???????? ?????? ???????????? ??????????</span>
                <input class="form__input" type="text" name="input-name" placeholder="??????" required="">
              </label>
              <label class="form__label">
                <span class="sr-only">?????????????? ?????????? ????????????????</span>
                <input class="form__input" type="tel" placeholder="+7" required="" inputmode="text">
            </div>
            <button class="form__btn btn" type="submit">
              ???????????????? ????????????
            </button>
          </form>
        </div>
        `,
            iconContent: "1",
          },
          {
            preset: "islands#icon",
            iconColor: "#FF931E",
          }
        )
      )
      .add(
        new ymaps.Placemark(
          [55.833436, 37.715175],
          {
            balloonContent: "<strong>??????????????????????????????????</strong> ????????",
            iconContent: "2",
          },
          {
            preset: "islands#icon",
            iconColor: "#FF931E",
          }
        )
      );
  }

  // ymaps.ready(init);

  // function init() {
  //   var myMap = new ymaps.Map('map', {
  //       center: [55.76, 37.64],
  //       zoom: 10
  //     }, {
  //       searchControlProvider: 'yandex#search'
  //     }),
  //     objectManager = new ymaps.ObjectManager({
  //       // ?????????? ?????????? ???????????? ????????????????????????????????, ???????????????????? ??????????.
  //       clusterize: true,
  //       // ObjectManager ?????????????????? ???? ???? ??????????, ?????? ?? ??????????????????????????.
  //       gridSize: 32,
  //       clusterDisableClickZoom: true
  //     });

  //   // ?????????? ???????????? ?????????? ?????????????????? ???????????????? ?? ??????????????????,
  //   // ?????????????????? ?? ???????????????? ???????????????????? ObjectManager.
  //   objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  //   objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
  //   myMap.geoObjects.add(objectManager);

  //   $.ajax({
  //     url: "https://sandbox.api.maps.yandex.net/examples/ru/2.1/object_manager/data.json"
  //   }).done(function (data) {
  //     objectManager.add(data);
  //   });
  // }

  // ymaps.ready(init);

  // function init() {
  //   var myMap = new ymaps.Map('map', {
  //       center: [55.76, 37.64],
  //       zoom: 10
  //     }, {
  //       searchControlProvider: 'yandex#search'
  //     }),
  //     objectManager = new ymaps.ObjectManager({
  //       clusterize: true,
  //       gridSize: 64,
  //       clusterDisableClickZoom: true
  //     });

  //   var data = {
  //     "type": "FeatureCollection",
  //     "features": [{
  //         "type": "Feature",
  //         "id": 0,
  //         "geometry": {
  //           "type": "Point"
  //         },
  //         "properties": {
  //           "address": "????????????, ??????????????, 26",
  //           "balloonContentBody": "?????????? ???????????? ??????",
  //           "clusterCaption": "?????? ???????? ??????????"
  //         }
  //       },
  //       {
  //         "type": "Feature",
  //         "id": 1,
  //         "geometry": {
  //           "type": "Point"
  //         },
  //         "properties": {
  //           "address": "????????????, ????????????????, 19",
  //           "balloonContentBody": "?????????? ???????????? ??????",
  //           "clusterCaption": "?????? ???????? ??????????"
  //         }
  //       },
  //       {
  //         "type": "Feature",
  //         "id": 2,
  //         "geometry": {
  //           "type": "Point"
  //         },
  //         "properties": {
  //           "address": "????????????, ??????????????, 21",
  //           "balloonContentBody": "?????????? ???????????? ??????",
  //           "clusterCaption": "?????? ???????? ??????????"
  //         }
  //       },
  //       {
  //         "type": "Feature",
  //         "id": 3,
  //         "geometry": {
  //           "type": "Point"
  //         },
  //         "properties": {
  //           "address": "????????????, ????????????????, 6",
  //           "balloonContentBody": "?????????? ???????????? ??????",
  //           "clusterCaption": "?????? ???????? ??????????"
  //         }
  //       }
  //     ]
  //   }
  //   objectManager.objects.options.set('preset', 'islands#redDotIcon');
  //   objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');

  //   data.features.forEach(function (obj) {
  //     var myGeocoder = ymaps.geocode(obj.properties.address);
  //     myGeocoder.then(function (res) {
  //       var newCoords = res.geoObjects.get(0).geometry.getCoordinates();
  //       obj.geometry.coordinates = newCoords
  //       objectManager.add(obj);
  //     });
  //   });
  //   myMap.geoObjects.add(objectManager);
  // }

  const listHead = document.querySelectorAll(".list__head");
  listHead.forEach((item) => {
    console.log(item.nextElementSibling);
    item.addEventListener("click", function () {
      item.nextElementSibling.classList.toggle("list__container--active");
    });
  });

  let fileSelect = document.querySelectorAll("[data-label-file]");

  fileSelect.forEach((item) => {
    let fileInput = item.querySelector('input[type="file"]');

    item.addEventListener("click", function () {
      fileInput.click();
    });

    fileInput.onchange = function () {
      let filename = fileInput.files[0].name;
      let selectName = item.querySelector(".file-select-button");
      selectName.innerText = filename;
    };
  });

  function DynamicAdapt(type) {
    this.type = type;
  }

  DynamicAdapt.prototype.init = function () {
    const _this = this;
    this.??bjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = document.querySelectorAll("[data-da]");

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const ??bject = {};
      ??bject.element = node;
      ??bject.parent = node.parentNode;
      ??bject.destination = document.querySelector(dataArray[0].trim());
      ??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      ??bject.place = dataArray[2] ? dataArray[2].trim() : "last";
      ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
      this.??bjects.push(??bject);
    }

    this.arraySort(this.??bjects);

    this.mediaQueries = Array.prototype.map.call(
      this.??bjects,
      function (item) {
        return (
          "(" +
          this.type +
          "-width: " +
          item.breakpoint +
          "px)," +
          item.breakpoint
        );
      },
      this
    );
    this.mediaQueries = Array.prototype.filter.call(
      this.mediaQueries,
      function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
      }
    );

    for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ",");
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      const ??bjectsFilter = Array.prototype.filter.call(
        this.??bjects,
        function (item) {
          return item.breakpoint === mediaBreakpoint;
        }
      );
      matchMedia.addListener(function () {
        _this.mediaHandler(matchMedia, ??bjectsFilter);
      });
      this.mediaHandler(matchMedia, ??bjectsFilter);
    }
  };

  DynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {
    if (matchMedia.matches) {
      for (let i = 0; i < ??bjects.length; i++) {
        const ??bject = ??bjects[i];
        ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
        this.moveTo(??bject.place, ??bject.element, ??bject.destination);
      }
    } else {
      for (let i = 0; i < ??bjects.length; i++) {
        const ??bject = ??bjects[i];
        if (??bject.element.classList.contains(this.daClassname)) {
          this.moveBack(??bject.parent, ??bject.element, ??bject.index);
        }
      }
    }
  };

  DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.insertAdjacentElement("beforeend", element);
      return;
    }
    if (place === "first") {
      destination.insertAdjacentElement("afterbegin", element);
      return;
    }
    destination.children[place].insertAdjacentElement("beforebegin", element);
  };

  DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement("beforebegin", element);
    } else {
      parent.insertAdjacentElement("beforeend", element);
    }
  };

  DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  };

  DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return -1;
          }

          if (a.place === "last" || b.place === "first") {
            return 1;
          }

          return a.place - b.place;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      Array.prototype.sort.call(arr, function (a, b) {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === "first" || b.place === "last") {
            return 1;
          }

          if (a.place === "last" || b.place === "first") {
            return -1;
          }

          return b.place - a.place;
        }

        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  };

  const da = new DynamicAdapt("max");
  da.init();

  // ?????????? ???????????????????? ?????? ?????? ??????????
  function quiz() {
    const progressbar = document.querySelector(".m-quiz__scrollbar-fill");
    let activeSlide;
    let inputsNum;
    let inputsText;
    let myInputs;

    const nextBtn = document.querySelector(".m-quiz__btn--next");

    function getActiveInputs(slider) {
      activeSlide = slider.slides[slider.activeIndex];
      inputsNum = activeSlide.querySelectorAll("input[required][type=number]");
      inputsText = activeSlide.querySelectorAll("input[required][type=text]");
      myInputs = [...inputsNum, ...inputsText];
    }

    function progressbarUpdate(slider) {
      progressbar.style.width =
        ((slider.activeIndex + 1) / slider.slides.length) * 100 + "%";
    }
    const swiper = new Swiper(".m-quiz__swiper", {
      threshold: 10,
      spaceBetween: 100,
      speed: 250,
      effect: "fade",
      initialSlide: 0,
      allowTouchMove: false,
      noSwiping: true,
      autoHeight: true,
      observer: true,
      fadeEffect: {
        crossFade: true,
      },
      on: {
        init: (swiper) => {
          getActiveInputs(swiper);
          progressbarUpdate(swiper);
        },
        resize: (swiper) => {
          // swiper.updateAutoHeight(1000)
        },
        observerUpdate() {
          // swiper.updateAutoHeight(1000)
        },
      },

      navigation: {
        nextEl: ".m-quiz__btn--next",
        prevEl: ".m-quiz__btn--prev",
      },
    });

    window.addEventListener("resize", resizeThrottler, false);

    let resizeTimeout;
    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandler();

          // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    }

    function actualResizeHandler() {
      swiper.updateAutoHeight(1000);
    }

    const isInputsValid = () => {
      let allowMove = true;

      myInputs.forEach((input) => {
        if (input.value === "") {
          allowMove = false;
        }
      });

      if (allowMove) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    };

    function checkQuizValidation(inputs) {
      isInputsValid();

      myInputs.forEach((input) => {
        input.addEventListener("input", isInputsValid);
      });
    }

    swiper.on("slideChange", () => {
      getActiveInputs(swiper);
      checkQuizValidation(myInputs);
      progressbarUpdate(swiper);
    });

    swiper.on("beforeSlideChangeStart", () => {
      myInputs.forEach((input) => {
        input.removeEventListener("input", isInputsValid);
      });
    });

    function updateDiscount(selector, num) {
      let elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        el.innerHTML = num;
      });
    }

    function watchSlidesProgress(selector) {
      const items = document.querySelectorAll(selector);
      const prevBtn = document.querySelector(".m-quiz__btn--prev");
      const nextBtn = document.querySelector(".m-quiz__btn--next");

      items.forEach((el) => {
        const current = el.querySelector(".js-current");
        const total = el.querySelector(".js-total");
        let discount = 250;

        current.innerHTML = `???????????? ${swiper.activeIndex + 1}`;
        total.innerHTML = swiper.slides.length - 1;

        swiper.on("slideChange", () => {
          if (swiper.activeIndex + 1 === swiper.slides.length) {
            el.innerHTML = "????????????";
            prevBtn.classList.add("hide");
            nextBtn.classList.add("hide");
            updateDiscount(".js-discount", discount);
          } else {
            discount = (swiper.activeIndex + 1) * 250;
            current.innerHTML = `???????????? ${swiper.activeIndex + 1}`;
            updateDiscount(".js-discount", discount);
          }
        });
      });
    }

    watchSlidesProgress(".js-slides-progress");

    const connectionTypes = [
      {
        name: "whatsapp",
        text: "?????? ?????????? ?? Whatsapp",
        nameAttr: "Whatsapp ??????????",
      },
      {
        name: "telegram",
        text: "?????? ?????????? ?? Telegram",
        nameAttr: "Telegram ??????????",
      },
      {
        name: "phone",
        text: "?????? ?????????? ????????????????",
        nameAttr: "?????????? ????????????????",
      },
    ];

    function selectConnectionType(connectionTypes, selector, targetSelector) {
      const elements = document.querySelectorAll(selector);
      const target = document.querySelector(targetSelector);
      let lastElement = null;

      elements.forEach((el) => {
        if (el.classList.contains("active")) lastElement = el;

        const currentConnection = connectionTypes.find((connection) => {
          return connection.name === el.getAttribute("data-connection");
        });

        el.addEventListener("click", () => {
          if (lastElement) lastElement.classList.remove("active");
          target.value = "";
          target.name = currentConnection.nameAttr;
          target.placeholder = currentConnection.text;
          target.focus();
          el.classList.add("active");
          lastElement = el;
        });
      });
    }

    selectConnectionType(
      connectionTypes,
      ".m-quiz__social-btn",
      ".m-quiz__final-number input"
    );

    function numberControls(selector) {
      let numbers = document.querySelectorAll(selector);

      function inputValidation(number) {
        if (number <= 0) return 1;
        return number;
      }

      numbers.forEach((el) => {
        const increase = el.querySelector(".m-number__control--inc");
        const decrease = el.querySelector(".m-number__control--dec");
        const input = el.querySelector(".m-number__field");

        input.addEventListener("change", (e) => {
          input.value = inputValidation(+e.target.value);
        });

        increase.addEventListener("click", () => {
          input.value = inputValidation(+input.value + 1);
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        });

        decrease.addEventListener("click", () => {
          input.value = inputValidation(+input.value - 1);
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        });
      });
    }

    numberControls(".js-number-input");

    function fileInputs(selector) {
      const fileInputs = document.querySelectorAll(selector);

      fileInputs.forEach((input) => {
        const field = input.querySelector("input[type=file]");
        const text = input.querySelector(".m-file__text");

        field.addEventListener("change", (e) => {
          const files = e.currentTarget.files;
          const keys = Object.keys(files);
          const fileNames = [];

          keys.forEach((key) => {
            fileNames.push(files[key].name);
          });

          text.innerHTML = fileNames.join(" , ");
        });
      });
    }

    fileInputs(".m-file");

    // ?????? ???????????? ?????? ???????????????? ?????????? ???? AJAX ?????????? ?????????????? ???? ???????????? ??????????????
    // function submitHandler(e) {
    //   e.preventDefault();

    //   let request = new XMLHttpRequest();

    //   request.onreadystatechange = function () {
    //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //     }
    //   };

    //   request.open(this.method, this.action, true);
    //   request.setRequestHeader(
    //     "Content-Type",
    //     "application/x-www-form-urlencoded"
    //   );

    //   let data = new FormData(this);

    //   let dataPost;
    //   // ?????????????????? ???????????? ???????????? ?????? ????????????????
    //   data.forEach(function (value, key) {
    //     dataPost += "&" + key + "=" + value;
    //   });

    //   request.send(dataPost);
    // }

    // const form = document.querySelector(".m-quiz__slider");
    // form.addEventListener("submit", submitHandler);
  }

  quiz();

  function customSelect() {
    // ???????????????? ?????? ???????????? forEach ?????? NodeList
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }

    document
      .querySelectorAll(".m-dropdown")
      .forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector(
          ".m-dropdown__button"
        );
        const dropDownList = dropDownWrapper.querySelector(".m-dropdown__list");
        const dropDownListItems = dropDownList.querySelectorAll(
          ".m-dropdown__list-item"
        );
        const dropDownInput = dropDownWrapper.querySelector(
          ".m-dropdown__input-hidden"
        );

        // ???????? ???? ????????????. ??????????????/?????????????? select
        dropDownBtn.addEventListener("click", function (e) {
          dropDownList.classList.toggle("m-dropdown__list--visible");
          this.classList.toggle("m-dropdown__button--active");
        });

        // ?????????? ???????????????? ????????????. ?????????????????? ?????????????????? ????????????????. ?????????????? ????????????????
        dropDownListItems.forEach(function (listItem) {
          listItem.addEventListener("click", function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownInput.dispatchEvent(new Event("input", { bubbles: true }));

            dropDownList.classList.remove("m-dropdown__list--visible");
            dropDownBtn.classList.remove("m-dropdown__button--active");
          });
        });

        // ???????? ?????????????? ??????????????????. ?????????????? ????????????????
        document.addEventListener("click", function (e) {
          if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove("m-dropdown__button--active");
            dropDownList.classList.remove("m-dropdown__list--visible");
          }
        });

        // ?????????????? ???? Tab ?????? Escape. ?????????????? ????????????????
        document.addEventListener("keydown", function (e) {
          if (e.key === "Tab" || e.key === "Escape") {
            dropDownBtn.classList.remove("m-dropdown__button--active");
            dropDownList.classList.remove("m-dropdown__list--visible");
          }
        });
      });
  }

  customSelect();

  function meterialCalculate() {
    const material = document.querySelector("input[name=select-material]");
    const length = document.querySelector(".calc__inputs input[name=??????????]");
    const width = document.querySelector(".calc__inputs input[name=????????????]");
    const height = document.querySelector(".calc__inputs input[name=????????????]");
    const price = document.querySelector(".calc__total-number");

    let additional = 0;

    function changeMaterial() {
      length.value = 4;
      width.value = 4;
      height.value = 4;
      const w = Number(width.value);
      const l = Number(length.value);
      const h = Number(height.value);

      if (material.value === "????????????") {
        // defaultSum = 17000;
        additional = "";
      } else if (material.value === "????????????") {
        // defaultSum = 20000;
        additional = 3000;
      } else if (material.value === "????????????") {
        // defaultSum = 23000;
        additional = 6000;
      }

      calculateSum();
    }

    [length, width, height].forEach((field) => {
      field.addEventListener("input", () => {
        calculateSum();
      });
    });

    [length, width, height].forEach((field) => {
      field.addEventListener("change", () => {
        calculateSum();
      });
    });

    function calculateSum() {
      const w = Number(width.value);
      const l = Number(length.value);
      const h = Number(height.value);

      let totalSum = ((w * l * h) / 3) * 800 + additional;

      if (material.value === "????????????") {
        if (totalSum > 18000) {
          totalSum = totalSum - ((((w * l * h) / 3) * 800) / 100) * 15;
        }
      }

      if (totalSum < 2000) {
        totalSum = 2000;
      }

      price.innerHTML = prettify(Math.trunc(totalSum));
    }

    function prettify(num) {
      let n = num.toString();
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
    }

    changeMaterial(material.value);

    material.addEventListener("input", () => {
      changeMaterial(material.value);
    });
  }

  meterialCalculate();
});
