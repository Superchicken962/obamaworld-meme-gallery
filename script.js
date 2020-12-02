function page2(){
    var els = document.getElementsByClassName('page2');
    for(var i=0; i<els.length; ++i){
       var s = els[i].style;
       s.display = s.display==='none' ? 'block' : 'none';
    };
  }
  toggle_visibility('page2');

function page1(){
    var els = document.getElementsByClassName('page1');
    for(var i=0; i<els.length; ++i){
       var s = els[i].style;
       s.display = s.display==='none' ? 'block' : 'none';
    };
  }
  toggle_visibility('page1');

function test(){
    var els = document.getElementsByClassName('page1');
    for(var i=0; i<els.length; ++i){
       var s = els[i].style;
       s.display = s.display==='none' ? 'block' : 'none';
    };
  }
  toggle_visibility('page1');