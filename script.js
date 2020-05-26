'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    console.log('Guzik został kliknięty');
  });*/

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('rtrdrdrtdrexre');
  });*/

const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    //event.preventDefault();

    /*remove class 'active' from all article links */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    } 
    /* add class 'active' to the clicked link*/

    console.log('clickedElement:', clickedElement);
    
   
    clickedElement.classList.add('active');
    
    /* remove class 'active' from all articles*/

    let activeArticles = document.querySelectorAll('post');

    for(let  activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    
    /*get 'href' attribute from the clicked link*/
    const articlesSelector = clickedElement.getAttribute ('href');
    
    console.log('articSelector');
    return(articlesSelector);

    /* find the correct article using the selector (value of 'href' attribute)*/

    const targetArticle = querySelector ('href');
    console.log('Link was clocked');


    //const targetArticle = querySelector('href');
    //    console.log('link id');

    /* add class 'active' to the correct article*/

   targetArticle = document.querySelectorAll('.titles a.active'); 
   
    //  targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click' , titleClickHandler);
    console.log (links);
}


 
/* get 'href' attribute from the clicked link */
const articleSelector = 'href';
const getAtribute = function (clickedElement);

/* find the correct article using the selector (value of 'href' attribute) */

const targetArticle = document.querySelector(articleSelector); 

const querySelector = function (querySelectorAll)

/* add class 'active' to the correct article */

document = classActive.querySelectorAll(targetArticle);

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
function generateTitleLinks  (){
}

/*remove contrnts od titleList*/

const querySelector = 'titleList';

function clearMessages  (){
    document.getElementById('messages').innerHTML = 'titleList';
}
/*for each article */
const article = document.querySelector(optArticleSelector);

for(let link of links){
    console.log(link);
}
/*get the srticle id*/
const articleId = document.id;

/*find the title element */
const articleTitle = article.querySelector(optTitleSelector).innerHTML;

/*get the title from the title element*/
title = document.articleId("title")

/* create HTML of the link*/
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log('dziala');

/*insert link into titleList*/
optTitleListSelector.innerHTML = titleList.innerHTML + linkHTML;
const insertAdjacentHTML = function (){
    linkHTML = 'innerHTML';
}
generateTitleLinks();

//const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',

function generateTitleLinks(){
    /*remove contents of titles */
    
    const li = document.querySelectorAll("#list li");
    for (let i=li.length-1; i<=0; i++) {
        li[i].remove();
    }
    /* find all the articles and save them to variable: articles */

    let html ='';
    for(let article of articles){

        /*get the article id*/
        var articleId = document.getElementById("artykul")

        /* find the title element */
        document.getElementsByClassName('title');

        /* get the title from the title element*/
        /* ... */

        /*create HTML of the link */
        const html = document.createElement("div");

        html.id = "myDiv";
        html.innerText = "Tekst w divie";
        html.setAttribute("title", "To jest tekst w dymku");
        html.classList.add("module");
        html.style.setProperty("background-color", "#FF6633");

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
