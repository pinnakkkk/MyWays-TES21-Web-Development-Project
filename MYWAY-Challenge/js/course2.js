function loadin(){
  var monitor = setInterval(function(){
    console.log("tracking iframe-video clicks");
    var elem = document.activeElement;
    if(elem && elem === document.getElementById("trigger")){
      if (typeof(Storage) !== "undefined") {
        //set to 1
        setTimeout(function () {
          localStorage.setItem("content_1_flag_video_1-course-2", "1");
        }, 56000);
    }
     else {
      alert("Sorry, your browser does not support Web Storage... \n Update Your browser");
     }
      clearInterval(monitor);
    }else if ( elem && elem == document.getElementById("trigger-2")) {

      if (typeof(Storage) !== "undefined") {
        //set to 1
        setTimeout(function () {
          localStorage.setItem("content_3_flag_video_2-course-2", "1");
        }, 30000);
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

  if (localStorage.getItem("content_1_flag_video_1-course-2") == 1 && localStorage.getItem("content_2_flag_para-course-2") == 1 && localStorage.getItem("content_3_flag_video_2-course-2") == 1 && localStorage.getItem("content_4_flag_certifi-course-2") == 1) {
      console.log("STATUS: Watched all Content");
      if (next_elem && next_elem === document.getElementById("content-1-btn-course-2")) {
        load_C_2();
        console.log("content 2 loaded via fullaccess");
         document.getElementById("content-1-btn-course-2").id = "content-2-btn-course-2";

       } else if (next_elem && next_elem === document.getElementById("content-2-btn-course-2")) {
              load_C_3();
              console.log("content 3 loaded via fullaccess");
              document.getElementById("content-2-btn-course-2").id = "content-3-btn-course-2";

       } else if (next_elem && next_elem === document.getElementById("content-3-btn-course-2")) {
          load_C_4();
          console.log("content 4 loaded via fullaccess");
            document.getElementById("content-3-btn-course-2").id = "content-4-btn-course-2";
       }
     } else if (localStorage.getItem("content_1_flag_video_1-course-2") == 1 && localStorage.getItem("content_2_flag_para-course-2") == null && localStorage.getItem("content_3_flag_video_2-course-2") == null && localStorage.getItem("content_4_flag_certifi-course-2") == null && next_elem && next_elem === document.getElementById("content-1-btn-course-2")) {
       load_C_2();
       console.log("content 2 LOADED");
       document.getElementById('content-1-btn-course-2').id = "content-2-btn-course-2";
     } else if (localStorage.getItem("content_1_flag_video_1-course-2") == 1 && localStorage.getItem("content_2_flag_para-course-2") == 1 && localStorage.getItem("content_3_flag_video_2-course-2") == null && localStorage.getItem("content_4_flag_certifi-course-2") == null && next_elem && next_elem === document.getElementById("content-2-btn-course-2")) {
       load_C_3();
       loadin();
       console.log("content 3 loaded");
      document.getElementById('content-2-btn-course-2').id = "content-3-btn-course-2";
     } else if (localStorage.getItem("content_1_flag_video_1-course-2") == 1 && localStorage.getItem("content_2_flag_para-course-2") == 1 && localStorage.getItem("content_3_flag_video_2-course-2") == 1 && localStorage.getItem("content_4_flag_certifi-course-2") == null && next_elem && next_elem === document.getElementById("content-3-btn-course-2")) {
       load_C_4();
       console.log("content 4 loaded -last");
        document.getElementById('content-3-btn-course-2').id = "content-4-btn-course-2";
        document.getElementById('content-4-btn-course-2').style.display= 'none';
        mark_the_end();
     } else {
       document.getElementById('alert_div_id').classList.add('show-alert');
     }
}
function sidenavpermission() {
      var next_elem_2 = document.activeElement;
      if (localStorage.getItem("content_1_flag_video_1-course-2") == 1 && localStorage.getItem("content_2_flag_para-course-2") == 1 && localStorage.getItem("content_3_flag_video_2-course-2") == 1 && localStorage.getItem("content_4_flag_certifi-course-2")) {

    if (next_elem_2 && next_elem_2 === document.getElementById("l_2_course_2")) {
      console.log("content 2 loaded via sidenav");
      load_C_2();
    } else if (next_elem_2 && next_elem_2 === document.getElementById("l_3_course_2")) {
       console.log("content 3 loaded via sidenav");
       load_C_3();
     } else if (next_elem_2 && next_elem_2 === document.getElementById("l_4_course_2")) {
       console.log("content 4 loaded via sidenav");
       load_C_4();
     }
   }else {
     document.getElementById('alert_div_id').classList.add('show-alert');
   }
}
function load_C_2() {
  document.getElementById('c1').style.display= 'none';
  document.getElementById('c2').style.display= 'block';
  document.getElementById('home-btn').style.display= 'none';
  document.getElementById('prev-btn-course-2').style.display= 'block';
  setTimeout(function(){
  localStorage.setItem("content_2_flag_para-course-2", "1");
  }, 3000);
}

function load_C_3() {
  document.getElementById('c2').style.display= 'none';
  document.getElementById('c3').style.display= 'block';
}
function load_C_4() {
  document.getElementById('c3').style.display= 'none';
  document.getElementById('c4').style.display= 'block';
  document.getElementById('content-3-btn-course-2').style.display= 'none';
}
function mark_the_end() {
 localStorage.setItem("content_4_flag_certifi-course-2", "1");
}
function homepage_load() {
  location.replace("homepage.html");
}
function close_alert() {
  document.getElementById('alert_div_id').classList.remove('show-alert');
}
