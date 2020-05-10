'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    console.log('Guzik został kliknięty');
  });*/

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('rtrdrdrtdrexre');
  });*/

const titleClickHandler = function(event){
    console.log('Link was clicked!');
    /*remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link*/
    /* remove class 'active' from all articles*/
    const activeArticles = document.querySelectorAll('titles a.actice');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    /*get 'href' attribute from the clicked link*/
    /* find the correct article using the selector (value of 'href' attribute)*/
    /* add class 'active' to the correct article*/
};

const links = document.querySelectorAll('.titles a');

/*for(let link of links){
      link.addEventListener('click' , titleClickHandler);
      console.log (links);
  }*/

// const titleClickHandler = function(event){
  
const clickedElement = this;
console.log('Link was clicked!');
    
/*[DONE] remove class 'active from all article links */

const activeLinks = document.querySelectorAll('titles a.active');

for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}

/*[IN PROGRES] add class 'active' to the clicked link */

console.log('clikedElement:' , clickedElement);

/*[DONE] remove class 'active' from all articles */

/* get 'href' attribute from the clicked link */

/* find the correct article using the selector (value of 'href' attribute) */

/* add class 'active' to thecorrect srticle */
// }

//const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

//event.preventDefault(); 

 
/* get 'href' attribute from the clicked link */
const articleSelector = 'href';
function getAtribute (clickedElement){

}
/* find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector(articleSelector);
//function querySelector(querySelectorAll)

/* add class 'active' to the correct article */

document.querySelectorAll(targetArticle).classActive;

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
function generateTitleLinks(){
}
/*remove contrnts od titleList*/

const querySelector = 'titleList';

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}
/*for each article */
const article = document.optArticleSelector;


for(let link of links){
    console.log(link);
}
/*get the srticle id*/
const articleId = document.id;

/*find the title element */
const articleTitle = article.querySelector(optTitleSelector).innerHTML;

/*get the title from the title element*/

/* create HTML of the link*/
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log('dziala');
/*insert link into titleList*/
optTitleListSelector.innerHTML = titleList.innerHTML + linkHTML;
function insertAdjacentHTML(){
    linkHTML = 'innerHTML';
}
generateTitleLinks();

//const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',

function generateTitleLinks(){
    /*remove contents of titles */
    /* ... */

    /* find all the articles and save them to variable: articles */
    /* ... */

    let html ='';
    for(let article of articles){
        /*get the article id*/
        /* ... */

        /* find the title element */
        /* ... */

        /* get the title from the title element*/
        /* ... */

        /*create HTML of the link */
        /* ... */

        /*insert link into html variable*/

        html = html + linkHTML;
        console.log = html;
    }

    titleList.innerHTML = html;
};

generateTitleLinks();
for(let link of links){
    link.addEventListener('click' , titleClickHandler);
    console.log (links);
}
function generateTags(){
    /* find all articles */
  
    /* START LOOP: for every article: */
  
    /* find tags wrapper */
  
    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

    /* generate HTML of the link */

    /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

/* END LOOP: for every article: */
}
  
generateTags();