let brower = document.body;


/*---------------------Header---------------------*/

let header = document.createElement('div');
header.setAttribute('class','head');
header.setAttribute('style','border-style: solid;');

//Profile Imag
let profileImage = document.createElement('img');
profileImage.setAttribute('src',"https://www.w3schools.com/howto/img_avatar.png");
profileImage.setAttribute('class', 'avatar');

//Image Section
let imageHolder = document.createElement('div');
imageHolder.setAttribute('class', 'image-cropper');

imageHolder.append(profileImage)

//Profile Name
let authorName = document.createElement('div');
authorName.setAttribute('class', 'author');
authorName.innerText = 'BHARANI'

//Profile Name Section
let authorNameSection = document.createElement('div');
authorNameSection.setAttribute('style', 'background-color: lightgray; height: 3px;')
authorNameSection.setAttribute('class', 'image-cropper');

authorNameSection.append(authorName);

// append name and image to header
header.append(imageHolder, authorNameSection);

//append header to body
brower.append(header);


/*---------------------About---------------------*/


let aboutAuthor = document.createElement('div');
aboutAuthor.setAttribute('class', 'image-cropper');
aboutAuthor.setAttribute('style', ' height: 2px; padding: 20px 0 10px;');
aboutAuthor.innerText = 'Rohini Avenue, Chennai 600021 | 9840930677 | bharani@gmail.com | www.bharanij27.com';

let lineBreak = document.createElement('hr');

brower.append(aboutAuthor, lineBreak);


/*---------------------Content---------------------*/


let content = document.createElement('div');
content.setAttribute('class','row');
content.setAttribute('style','border-style: solid;');

/*-------------------Left Side---------------------*/

let leftSide = document.createElement('div');
leftSide.setAttribute('class','column left');
leftSide.setAttribute('style','border-right-style: outset;');


//Profile

let profile = document.createElement('div');
profile.setAttribute('class','heading');
profile.setAttribute('style', 'clear: bottom;')

let image = document.createElement('img');
image.setAttribute('id', 'profile');
image.setAttribute('src', 'https://icons-for-free.com/iconfiles/png/512/guy+man+user+icon-1320166689116245256.png')
image.setAttribute('class', 'avatar border');

let profileLabel = document.createElement('label');
profileLabel.setAttribute('for', 'profile');
profileLabel.innerText = 'Profile';

profile.append(image, profileLabel);
leftSide.appendChild(profile);

let profileContent = document.createElement('div');
profileContent.setAttribute('class', 'text profile-content');
profileContent.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ;

leftSide.appendChild(profileContent);

// Skills

let skill = document.createElement('div');
skill.setAttribute('class','heading');

let skillImage = document.createElement('img');
skillImage.setAttribute('id', 'profile');
skillImage.setAttribute('src', 'https://image.flaticon.com/icons/svg/924/924518.svg')
skillImage.setAttribute('class', 'avatar border');

let skillLabel = document.createElement('label');
skillLabel.setAttribute('for', 'profile');
skillLabel.innerText = 'Skills';

skill.append(skillImage, skillLabel);
leftSide.appendChild(skill);

let skillContent = document.createElement('div');
skillContent.setAttribute('class', 'text skills');

cLabel= document.createElement('label');
cLabel.setAttribute('for', 'C');
cLabel.innerHTML = 'C &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;'

cMeter = document.createElement('meter');
cMeter.setAttribute('id', 'c')
cMeter.setAttribute('value', 5)
cMeter.setAttribute('min', 0)
cMeter.setAttribute('max', 10);
cMeter.innerText = '2 out of 10 ';
skillContent.append(cLabel, cMeter)
leftSide.append(skillContent);


jsLabel= document.createElement('label');
jsLabel.setAttribute('for', 'JavaScript');
jsLabel.innerHTML = 'JavaScript &ensp;'

jsMeter = document.createElement('meter');
jsMeter.setAttribute('id', 'js')
jsMeter.setAttribute('value', 8)
jsMeter.setAttribute('min', 0)
jsMeter.setAttribute('max', 10);
jsMeter.innerText = '8 out of 10';

skillContent.append(jsLabel, jsMeter)
leftSide.append(skillContent);


htmlLabel= document.createElement('label');
htmlLabel.setAttribute('for', 'JavaScript');
htmlLabel.innerHTML = 'HTML\CSS&nbsp;'

htmlMeter = document.createElement('meter');
htmlMeter.setAttribute('id', 'js')
htmlMeter.setAttribute('value', 7)
htmlMeter.setAttribute('min', 0)
htmlMeter.setAttribute('max', 10);
htmlMeter.innerText = '8 out of 10';

skillContent.append(htmlLabel, htmlMeter)
leftSide.append(skillContent);


// work col-1

let work1 = document.createElement('div');
work1.setAttribute('class','heading');

let work1Image = document.createElement('img');
work1Image.setAttribute('id', 'work');
work1Image.setAttribute('src', 'https://img.pngio.com/briefcase-case-job-work-icon-work-icon-png-512_512.png')
work1Image.setAttribute('class', 'avatar border');

let work1Label = document.createElement('label');
work1Label.setAttribute('for', 'work');
work1Label.innerText = 'Work Experience';

work1.append(work1Image, work1Label);
leftSide.appendChild(work1);

let workContent = document.createElement('div');
workContent.setAttribute('class', 'text');
workContent.innerText = "";

let title = document.createElement('div');
title.setAttribute('style', 'float:left');
let bold = document.createElement('b');
bold.innerText = 'Event Manager'

title.append(bold);

let date = document.createElement('div');
date.setAttribute('style', 'float:right');
date.innerText = '20/12/2020';
workContent.append(title, date);

let experience = document.createElement('div');
experience.setAttribute('class', 'experience')

let unorderdList = document.createElement('ul');
let list1 = document.createElement('li');
list1.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

let list2 = document.createElement('li');
list2.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

let list3 = document.createElement('li');
list3.innerText = "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

unorderdList.append(list1, list2, list3);
experience.append(unorderdList);
workContent.append(experience)


leftSide.appendChild(workContent)
/*-------------------Right Side---------------------*/

let rightSide = document.createElement('div');
rightSide.setAttribute('class','column');

// work 2

let work2 = document.createElement('div');
work2.setAttribute('class','heading');

let work2Image = document.createElement('img');
work2Image.setAttribute('id', 'work');
work2Image.setAttribute('src', 'https://img.pngio.com/briefcase-case-job-work-icon-work-icon-png-512_512.png')
work2Image.setAttribute('class', 'avatar border');

let work2Label = document.createElement('label');
work2Label.setAttribute('for', 'work');
work2Label.innerText = 'Work Experience';

work2.append(work2Image, work2Label);
rightSide.appendChild(work2);

let workContent2 = document.createElement('div');
workContent2.setAttribute('class', 'text work');
workContent2.innerText = "";

let title2 = document.createElement('div');
title2.setAttribute('style', 'float:left');
let bold1 = document.createElement('b');
bold1.innerText = 'Event Manager'

title2.append(bold1);

let date2 = document.createElement('div');
date2.setAttribute('style', 'float:right');
date2.innerText = '20/12/2016';
workContent2.append(title2, date2);

let experience2 = document.createElement('div');
experience2.setAttribute('class', 'experience')

let unorderdList2 = document.createElement('ul');
let list21 = document.createElement('li');
list21.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

let list22 = document.createElement('li');
list22.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

let list23 = document.createElement('li');
list23.innerText = "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

unorderdList2.append(list21, list22, list23);
experience2.append(unorderdList2);
workContent2.append(experience2)

rightSide.appendChild(workContent2)


// education


let Ed = document.createElement('div');
Ed.setAttribute('class','heading');

let EdImage = document.createElement('img');
EdImage.setAttribute('id', 'work');
EdImage.setAttribute('src', 'https://img.pngio.com/briefcase-case-job-work-icon-work-icon-png-512_512.png')
EdImage.setAttribute('class', 'avatar border');

let EdLabel = document.createElement('label');
EdLabel.setAttribute('for', 'education');
EdLabel.innerText = 'Education';

Ed.append(EdImage, EdLabel);
rightSide.appendChild(Ed);

let EdContent = document.createElement('div');
EdContent.setAttribute('class', 'text');
EdContent.innerText = "";

let title3 = document.createElement('div');
title3.setAttribute('style', 'float:left');
let bold2 = document.createElement('b');
bold2.innerText = 'Computer Science Engineering'

title3.append(bold2);

let date3 = document.createElement('div');
date3.setAttribute('style', 'float:right');
date3.innerText = '20/12/2014';
EdContent.append(title3, date3);

let education = document.createElement('div');
education.setAttribute('class', 'experience')

let unorderdListEd = document.createElement('ul');
let list1Ed = document.createElement('li');
list1Ed.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."

let list2Ed = document.createElement('li');
list2Ed.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

let list3Ed = document.createElement('li');
list3Ed.innerText = "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

unorderdListEd.append(list1Ed, list2Ed, list3Ed);
education.append(unorderdListEd);
EdContent.append(education)

rightSide.appendChild(EdContent)

content.append(leftSide, rightSide);

brower.append(content)

