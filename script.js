'use strict';


const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';
const templates = {
    articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML)
};
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
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    for (let article of articles) {

        /* get the article id */

        const articleId = article.getAttribute('id');

        /* find the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */

        const linkHTMLData = {id: articleId, title: articleTitle};
        const linkHTML = templates.articleLink(linkHTMLData);

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
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */

    for (let article of articles){
    
        /* find tags wrapper */
        const tagsWrapper = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */

        let html = '';

        /* get tags from data-tags attribute */

        const articleTags = article.getAttribute('data-tags');

        /* split tags into array */

        const articleTagsArray = articleTags.split(' ');
        /* START LOOP: for each tag */
    
        for (let tag of articleTagsArray){

            /* generate HTML of the link */
            
            

            const linkHTMLData = {id: 'tag-' + tag , title: tag};
            const link = templates.articleLink(linkHTMLData);

            /* add generated code to html variable */

            html = html + link;

            /* END LOOP: for each tag */
        }

        /* insert HTML of all the links into the tags wrapper */
        tagsWrapper.innerHTML = html;
        /* END LOOP: for every article: */
        
    }
}
  
generateTags();

function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    
    const activeLinksTag = document.querySelectorAll(optArticleTagsSelector + ' .active');

    /* START LOOP: for each active tag link */

    for (let activeLinkTag of activeLinksTag){

        /* remove class active */

        activeLinkTag.remove('.active');

    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    
    const linksTags = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */

    for (let linkTag of linksTags){

        /* add class active */

        linkTag.add('active');

    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks();
}
  
function addClickListenersToTags(){
    /* find all links to tags */
    const linkTags = document.querySelectorAll('tags');
    /* START LOOP: for each link */
    for (let tag of linkTags){
    /* add tagClickHandler as event listener for that link */
        tag.add('active');
    /* END LOOP: for each link */
    }
}
  
addClickListenersToTags();

function generateAuthors() {
    /* [DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* [DONE] START LOOP: for every article: */

    for (let article of articles) {

        /* [DONE] get authors from data-author attribute */

        const authorAtribute = article.getAttribute('data-author');
        console.log(authorAtribute);

        /* [DONE] get author title from article */

        const authorTitle = article.querySelector(optArticleSelector);
        console.log(authorTitle);

        /* [DONE] generate HTML of the link */

        const linkHtmlData = { author: authorAtribute };
        authorTitle.innerHTML = templates.articleAuthor(linkHtmlData);

        //authorTitle.innerHTML = `<a href="#author-${authorAtribute}">by ${authorAtribute}</a>`;
        //console.log(authorTitle);

        /* [DONE] END LOOP: for every article: */
    }
 
    
}
generateAuthors();

function addClickListenersToAuthors(){
    const listeners = document.querySelectorAll('optArticleTagsSelector');
    for (let listener of listeners){
        listener.classList.remove('active');
        
    }
}
addClickListenersToAuthors();

const tplHelloSource = document.querySelector('#template-hello').innerHTML;

const tplHello = Handlebars.compile(tplHelloSource);

const dataHello = {firstName: 'John', lastName: 'Smith'};

let generatedHTML = tplHello(dataHello);

const targetElement = document.body;

targetElement.insertAdjacentHTML('beforeend', generatedHTML);

console.log('tplHello:');

console.log(tplHelloSource);

console.log('=========');

console.log('dataHello:');

console.log(dataHello);

console.log('=========');

console.log('generatedHTML:');

console.log(generatedHTML);

console.log('=========');

const tplProductListSource = document.querySelector('#template-product-list').innerHTML;
const tplProductList = Handlebars.compile(tplProductListSource);

const productListData = {
    title: 'Great offers!',
    products: {
        'product-football': {
            name: 'Football',
            price: '$10'
        },
        'product-volleyball': {
            name: 'Volleyball',
            price: '$8'
        },
        'product-basketball': {
            name: 'Basketball',
            price: '$12'
        }
    }
};


generatedHTML = tplProductList(productListData);
targetElement.insertAdjacentHTML('beforeend', generatedHTML);