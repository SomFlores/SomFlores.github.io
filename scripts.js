var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
/*ACC 2*/
var accordions2 = document.getElementsByClassName("accordion2");

for (var i = 0; i < accordions.length; i++) {
  accordions2[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion2 is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion2 is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
/*ACC 3*/
var accordions3 = document.getElementsByClassName("accordion3");

for (var i = 0; i < accordions.length; i++) {
  accordions3[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion3 is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion3 is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
/*ACC 4*/
var accordions4 = document.getElementsByClassName("accordion4");

for (var i = 0; i < accordions.length; i++) {
  accordions4[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion4 is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion4 is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
/*ACC 5*/
var accordions5 = document.getElementsByClassName("accordion5");

for (var i = 0; i < accordions.length; i++) {
  accordions5[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion5 is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion5 is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

/*ACC 6*/
var accordions6 = document.getElementsByClassName("accordion6");

for (var i = 0; i < accordions.length; i++) {
  accordions6[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion6 is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion6 is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}