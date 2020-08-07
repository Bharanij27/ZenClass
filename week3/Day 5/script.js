let brower = document.body;


/*---------------------Header---------------------*/

let header = document.createElement('div');
header.setAttribute('class','head');
header.setAttribute('style','border-style: solid;');

//Profile Image
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

let leftSide = document.createElement('div');
leftSide.setAttribute('class','column');
leftSide.setAttribute('style','border-right-style: outset;');

let rightSide = document.createElement('div');
rightSide.setAttribute('class','column');

content.append(leftSide, rightSide)