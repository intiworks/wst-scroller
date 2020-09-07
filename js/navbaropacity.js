//Change navbar opacity on scroll
let last_known_scroll_position = 0;
let ticking = false;
let finishPos = 800;
let navBar = document.getElementById('sideNav');
let navBarPrevOpacity = navBar.style.opacity;
let navBarPrevFilter  = navBar.style.filter;
let header = document.getElementById('header');

navBar.onmouseover = function() 
{
    navBarPrevOpacity = navBar.style.opacity;
    navBarPrevFilter  = navBar.style.filter;
    navBar.style.opacity = 0.95;
    navBar.style.filter = 'unset';
}
navBar.onmouseout = function() 
{
    navBar.style.opacity = navBarPrevOpacity;
    navBar.style.filter = navBarPrevFilter;
}

function changeOpacity(scroll_pos) {
    let percent = scroll_pos/finishPos;
    let x = window.innerWidth;
    if(992 < x){
      if(percent < 0.15) {
        navBar.style.opacity = 0;
        navBar.style.filter = 'blur('+ '1' +'px)';
        header.style.backgroundColor = "unset";
      }
      else if(percent*1.3 < 0.90) {
        navBar.style.opacity = percent*1.3;
        navBar.style.filter = 'blur('+ '0' +'px)';
      }else{
        navBar.style.opacity = 0.95;
        navBar.style.filter = 'blur('+ '0' +'px)';
        header.style.backgroundColor = "var(--custom-highlight)";
      }
    }else{
      navBar.style.opacity = 0.95;
      navBar.style.filter = 'blur('+ '0' +'px)';
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      changeOpacity(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});