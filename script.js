'use strict';


const optArticleSelctor = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

const titleClickHandler = function (event) {

    event.preventDefault;
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {

        activeLink.classList.remove('active');

    }

    /* add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {

        activeArticle.classList.remove('active');

    }

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */


    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

};

function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);
    titleList.innerHTML = '';

    /* for each article */

    let html = '';
    const articles = document.querySelectorAll(optArticleSelctor + customSelector);

    for (let article of articles) {

        /* get the article id */

        const articleId = article.getAttribute('id');

        /* find the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        /* insert link into titleList */

        html = html + linkHTML;
        console.log(html);
    }

    titleList.innerHTML = html;

}

generateTitleLinks();


const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}


function generateTags(){
    /* find all articles */
    const optArticleTagsSelector = document.querySelector(optTitleSelector).innerHTML;

    /* START LOOP: for every article: */

    for (let article of optArticleTagsSelector){
    
        /* find tags wrapper */
       
        tagsWrapper.innerHTML = '';

        /* make html variable with empty string */

        let html = '';

        /* get tags from data-tags attribute */

        const articleTags = article.getAttribute('data-tags');


        /* split tags into array */

        const articleTagsArray = articleTags.split(' ');
        console.log(articleTagsArray);
        /* START LOOP: for each tag */
    
        for (let tag of articleTagsArray){
            console.log(tag)

            /* generate HTML of the link */
            const generateTitleLinks = document.querySelector(optTitleListSelector);
            generateTitleLinks.innerHTML = '';

        

            /* add generated code to html variable */

            let html = document.querySelectorAll().linkHTML;

            /* END LOOP: for each tag */
            
        
        }

        /* insert HTML of all the links into the tags wrapper */
        const tagsWrapper = document.querySelector(optTitleListSelector);
        console.log(tagsWrapper);

        tagsWrapper.innerHTML = '';
        
        

        /* END LOOP: for every article: */
        

    }
}
  
generateTags();

function tagClickHandler(event){
    /* prevent default action for this event */
  

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    
    const linksTag = document.querySelectorAll('.class active');

    /* START LOOP: for each active tag link */

    for (let activeTag of clickedElement){

        /* remove class active */

        activeTag.linksTag.remove('.active');

    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */

    const linksTags = href.getAttribute('.href');

    /* START LOOP: for each found tag link */

    for (let tag of linksTags){

        /* add class active */

        clickedElement.linksTags.add('active');

    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
}
function generateTitleLinks  (customSelector = ''){}
    //function multiplyNumbers(numA, numB = 2){
    //return numA * numB;
    //}
    //const articles = document.querySelectorAll(optArticleSelector + customSelector);
    //console.log('multiplyNumbers(5, 3) =', multiplyNumbers(5, 3)); // multiplyNumbers(5, 3) = 15
    //console.log('multiplyNumbers(5) =', multiplyNumbers(5)); // multiplyNumbers(5) = 10


  
function addClickListenersToTags(){
    /* find all links to tags */
    const linkTags = document.getAttribute('tags');
    /* START LOOP: for each link */
    for (let link of linkTags);
    /* add tagClickHandler as event listener for that link */
    tagClickHandler.link.add('addClickListenersToTags');
    /* END LOOP: for each link */
}
  
addClickListenersToTags();

finction generateAuthors(){
    const optArticleAuthorSelector = document.querySelectorAll(optAuthor).innerHTML;
for (let author of optArticleAuthorSelector){
    tagsWrapper.innerHTML = '';
    let html = '';
    const articleAuthor = article.getAttribute('data-author')
}
}
function addClickListenersToAuthors(){

}