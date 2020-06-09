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


