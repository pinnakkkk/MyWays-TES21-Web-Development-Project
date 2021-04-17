function loadin(){
  var monitor = setInterval(function(){
    console.log("tracking iframe-video clicks");
    var elem = document.activeElement;
    if(elem && elem === document.getElementById("trigger")){
      if (typeof(Storage) !== "undefined") {
        //set to 1
        setTimeout(function () {
          localStorage.setItem("content_1_flag_video_1", "1");
        }, 56000); //56000
    }
     else {
      alert("Sorry, your browser does not support Web Storage... \n Update Your browser");
     }
      clearInterval(monitor);
    }else if ( elem && elem == document.getElementById("trigger-2")) {

      if (typeof(Storage) !== "undefined") {
        //set to 1
        setTimeout(function () {
          localStorage.setItem("content_3_flag_video_2", "1");
        }, 30000);  //30000
     } else {
      alert("Sorry, your browser does not support Web Storage... \n Update Your browser");
     }
      clearInterval(monitor);
    }
  }, 500);
}

function askamiallowed() {

  console.log("ASKING");
      var next_elem = document.activeElement;

  if (localStorage.getItem("content_1_flag_video_1") == 1 && localStorage.getItem("content_2_flag_para") == 1 && localStorage.getItem("content_3_flag_video_2") == 1 && localStorage.getItem("content_4_flag_certifi") == 1) {
      console.log("STATUS: Watched all Content");
      if (next_elem && next_elem === document.getElementById("content-1-btn")) {
        load_C_2();
        console.log("content 2 loaded via fullaccess");
         document.getElementById("content-1-btn").id = "content-2-btn";

       } else if (next_elem && next_elem === document.getElementById("content-2-btn")) {
              load_C_3();
              console.log("content 3 loaded via fullaccess");
              document.getElementById("content-2-btn").id = "content-3-btn";

       } else if (next_elem && next_elem === document.getElementById("content-3-btn")) {
          load_C_4();
          document.getElementById('content-3-btn').style.display= 'none';
          console.log("content 4 loaded via fullaccess");
            document.getElementById("content-3-btn").id = "content-4-btn";
       }
     } else if (localStorage.getItem("content_1_flag_video_1") == 1 && localStorage.getItem("content_2_flag_para") == null && localStorage.getItem("content_3_flag_video_2") == null && localStorage.getItem("content_4_flag_certifi") == null && next_elem && next_elem === document.getElementById("content-1-btn")) { // this is 1,1,1,1 if ENDS HERE
       load_C_2();
       console.log("content 2 LOADED");
       document.getElementById('content-1-btn').id = "content-2-btn";
     } else if (localStorage.getItem("content_1_flag_video_1") == 1 && localStorage.getItem("content_2_flag_para") == 1 && localStorage.getItem("content_3_flag_video_2") == null && localStorage.getItem("content_4_flag_certifi") == null && next_elem && next_elem === document.getElementById("content-2-btn")) {
       load_C_3();
       loadin();
       console.log("content 3 loaded");
      document.getElementById('content-2-btn').id = "content-3-btn";
     } else if (localStorage.getItem("content_1_flag_video_1") == 1 && localStorage.getItem("content_2_flag_para") == 1 && localStorage.getItem("content_3_flag_video_2") == 1 && localStorage.getItem("content_4_flag_certifi") == null && next_elem && next_elem === document.getElementById("content-3-btn")) {
       load_C_4();
       console.log("content 4 loaded -last");
        document.getElementById('content-3-btn').id = "content-4-btn";
          document.getElementById('content-4-btn').style.display= 'none';
        mark_the_end();
     } else {
       document.getElementById('alert_div_id').classList.add('show-alert');
     }
}
function sidenavpermission() {
  console.log("i ran");
      var next_elem_1 = document.activeElement;
      if (localStorage.getItem("content_1_flag_video_1") == 1 && localStorage.getItem("content_2_flag_para") == 1 && localStorage.getItem("content_3_flag_video_2") == 1 && localStorage.getItem("content_4_flag_certifi") == 1) {
        console.log("STATUS: ALL OKA FOR LEFT");
    if (next_elem_1 && next_elem_1 === document.getElementById("l_2")) {
      console.log("content 2 loaded via sidenav");
      load_C_2();
     } else if (next_elem_1 && next_elem_1 === document.getElementById("l_3")) {
       console.log("content 3 loaded via sidenav");
       load_C_3();
     } else if (next_elem_1 && next_elem_1 === document.getElementById("l_4")) {
       console.log("content 4 loaded via sidenav");
       load_C_4();
     }
   } else {
     document.getElementById('alert_div_id').classList.add('show-alert');
   }
}
function load_C_2() {
  document.getElementById('c1').style.display= 'none';
  document.getElementById('c2').style.display= 'block';
  document.getElementById('home-btn').style.display= 'none';
  document.getElementById('prev-btn').style.display= 'block';
  setTimeout(function(){
  localStorage.setItem("content_2_flag_para", "1");
  }, 3000);
}

function load_C_3() {
  document.getElementById('c2').style.display= 'none';
  document.getElementById('c3').style.display= 'block';
}
function load_C_4() {
  var btn_1 = document.getElementById("content-1-btn");
  var btn_2 = document.getElementById("content-2-btn");
  document.getElementById('c3').style.display= 'none';
  document.getElementById('c4').style.display= 'block';
}
function mark_the_end() {
 localStorage.setItem("content_4_flag_certifi", "1");
}
function homepage_load() {
  location.replace("homepage.html");
}
function close_alert() {
  document.getElementById('alert_div_id').classList.remove('show-alert');
}
