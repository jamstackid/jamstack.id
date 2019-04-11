// mobile menu

$(function() {
  $("#menu").slicknav({
    brand:
      '<a class="mobile-logo" href="/"><img src="/img/jamstack-full-logo.svg"/></a>',
    label: "",
    appendTo: "header"
  });
});

// Sticky Nav Functionality in Vanilla JS

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  else
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    const reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}

const header = document.getElementById("header");

window.onscroll = function() {
  const currentWindowPos =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentWindowPos > 0) {
    addClass(header, "scrolled");
  } else {
    removeClass(header, "scrolled");
  }
};

// scrolling for anchor links
window.onload = function() {
  const addAnchorClick = function(evt) {
    evt.preventDefault();
    const getHref = evt.currentTarget.getAttribute("href");
    const currentHref = document.getElementById(getHref.replace("#", ""));
    anchorScroll(evt.currentTarget, currentHref, 1000);
  };

  const eachScrollElement = function(scroll) {
    if (scroll && !scroll.onclick) {
      scroll.onclick = addAnchorClick;
    }
  };

  Array.from(document.getElementsByClassName("scrolling-link")).forEach(
    eachScrollElement
  );
};

function anchorScroll(this_obj, that_obj, base_speed) {
  const offset_diff = Math.abs(this_obj.offsetTop - that_obj.offsetTop);
  const speed = 1000;

  $("html,body").animate(
    {
      scrollTop: Math.abs(that_obj.offsetTop - 125)
    },
    speed
  );
}
