
let project = document.getElementById('Project');
flag = 1;
function moveto_otherpage1() {
    if (flag % 2) {
        window.location.href = "Project.html";
    }
    else {
        window.location.href = "index.html";//if flag increment by 2 then it gives me index.html page that's why we click the two times on project to return  our index.html page
    }
    flag++;
}

let about = document.getElementById('About');
flag2 = 1;
function moveto_otherpage2() {
    if (flag2 % 2) {
        window.location.href = "About.html";
    }
    else {
        window.location.href = "index.html";
    }
    flag2++;
}

let contact = document.getElementById('Contact');
flag3 = 1;
function moveto_otherpage3() {
    if (flag3 % 2) {
        window.location.href = "contact.html";
    }
    else {
        window.location.href = "index.html";
    }
    flag3++;
}

let resume = document.getElementById('Resume');
flag4 = 1;
function moveto_otherpage4() {
    if (flag4 % 2) {
        window.location.href = "Resume.html";
    }
    else {
        window.location.href = "index.html";
    }
    flag4++;
}





project.addEventListener('click', moveto_otherpage1);
about.addEventListener('click', moveto_otherpage2);
contact.addEventListener('click', moveto_otherpage3);
resume.addEventListener('click', moveto_otherpage4);
