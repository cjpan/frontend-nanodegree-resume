/*
This is empty on purpose! Your code to build the resume will go here.
 */

// bio contains:

// name : string
// role : string
// contacts : an object with
//       mobile: string
//       email: string 
//       github: string
//       twitter: string 
//       location: string
// welcomeMessage: string 
// skills: array of strings
// biopic: url
// display: function

// education contains:

// schools: array of objects with
//      name: string
//      location: string
//      degree: string
//      majors: array of strings
//      dates: integer (graduation date)
//      url: string
// onlineCourses: array of objects with
//      title: string
//      school: string
//      date: integer (date finished)
//      url: string
// display: function

// work contains

// jobs: array of objects with
//      employer: string 
//      title: string 
//      location: string 
//      dates: string (works with a hyphen between them)
//      description: string 
// display: function

// projects contains:

// projects: array of objects with
//       title: string 
//       dates: string (works with a hyphen between them)
//       description: string
//       images: array with string urls
// display: function

var bio = {
    "name": "Chengjie Pan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+86 15317718182",
        "email": "chengjie.pan@gmail.com",
        "github": "cjpan",
        "twitter": "@cjpan",
        "blog": "http://cjpan.github.io",
        "location": "Luodian, Shanghai, China"
    },
    "welcomeMessage": "Hello Web",
    "bioPic": "images/portrait.jpg",
    "skills": ["Programming", "HTML5", "CSS", "JavaScript"]
};

bio.display = function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedBlog);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkills);
    }
}

var work = {
    jobs: [{
        "employer": "Hewlette Packard",
        "title": "Firmware Engineer",
        "location": "Waigaoqiao, Shanghai, China",
        "dates": "2010 - Now",
        "description": "Firmware development",
        "url": "http://www.hp.com"
    }, {
        "employer": "Ricoh",
        "title": "Firmware Engineer",
        "location": "Caohejing, Shanghai, China",
        "dates": "2005 - 2010",
        "description": "Firmware development",
        "url": "http:// www.ricoh.com"
    }]
};

work.display = function displayWork() {

    for (job in work.jobs) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
        $(".work-entry:last").find('a').attr('href', work.jobs[job].url);
    }
}

var projects = {
    projects: [{
        title: "Portfolio Site",
        dates: 2015,
        description: "design mockup as a PDF-file with HTML and CSS.",
        images: "http://i.imgur.com/MtxM7by.jpg"
    }, {
        title: "Online Resume",
        dates: 2015,
        description: "Power my own online resume with JavaScript.",
        images: "http://i.imgur.com/DQAgBen.jpg"
    }, ]
};

projects.display = function displayWork() {

    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        $(".project-entry:last").append(formattedProjectImage);
    }
}

var education = {
    schools: [{
        "name": "Tongji University",
        "location": "Yangpu, Shanghai, China",
        "degree": "Bachelor",
        "majors": "Computer Science",
        "dates": 2004,
        "url": "http://www.tongji.edu.cn"
    }],
    onlineCourses: [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        date: 2015,
        "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        date: 2015,
        "url": "https://www.udacity.com/course/viewer#!/c-ud245-nd"
    }]
};

education.display = function displayEducation() {


    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").find('a').attr('href', education.schools[school].url);
    }

    $(HTMLonlineClasses).insertAfter($('#education').find('div').first());

    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").find('a').attr('href', education.onlineCourses[course].url);
    }
}

bio.display();
work.display();
projects.display();
education.display();

function inName() {
    iName = bio.name.trim().split(" ");
    iName[1] = iName[1].toUpperCase();
    iName[0] = iName[0].slice(0, 1).toUpperCase() + iName[0].slice(1).toLowerCase();

    return iName[0] + " " + iName[1];
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);