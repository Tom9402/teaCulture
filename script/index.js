function addLoadEvent(func) {
  let oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  let elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  let xpos = parseInt(elem.style.left);
  let ypos = parseInt(elem.style.top);
  let dist=0;
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    dist=Math.ceil((final_x-xpos)/7);
    xpos=xpos+dist;
  }
  if (xpos > final_x) {
    dist=Math.ceil((xpos-final_x)/7);
    xpos=xpos-dist;
  }
  if (ypos < final_y) {
    dist=Math.ceil((final_y-ypos)/7);
    ypos=ypos+dist;
  }
  if (ypos > final_y) {
    dist=Math.ceil((ypos-final_y)/7);
    ypos=ypos-dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  let repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow() {
// Make sure the browser understands the DOM methods
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
// Make sure the elements exist
  if (!document.getElementById("linklist")) return false;
  if (!document.getElementById("preview")) return false;
// Apply styles to the preview image
  let preview = document.getElementById("preview");
  preview.style.position = "absolute";
  preview.style.left = "0px";
  preview.style.top = "0px";
// Get all the links in the list
  let list = document.getElementById("linklist");
  let links = list.getElementsByTagName("a");
// Attach the animation behavior to the mouseover event
  links[0].onmouseover = function() {
    moveElement("preview",-0,0,10);
  }
  links[1].onmouseover = function() {
    moveElement("preview",-480,0,10);
  }
  links[2].onmouseover = function() {
    moveElement("preview",-960,0,10);
  }
  links[3].onmouseover = function() {
    moveElement("preview",-1440,0,10);
  }
  links[4].onmouseover = function() {
    moveElement("preview",-1920,0,10);
  };
}
addLoadEvent(prepareSlideshow);

