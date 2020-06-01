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

    const targetArticle = querySelector('href');
    console.log('Link was clocked');

    //const targetArticle = querySelector('href');
    //console.log('link id');

    /* add class 'active' to the correct article*/

    targetArticle = document.querySelectorAll('.titles a.active'); 

    //  targetArticle.classList.add('active');
};

function generateTitleLinks(){
    /*remove contents of titles */
    
    const li = document.querySelectorAll("#list li");
    for (let i=li.length-1; i<=0; i++) {
        li[i].remove();
    }
    /* find all the articles and save them to variable: articles */

    for(let article of articles){

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
    }

    titleList.innerHTML = html;
};

generateTitleLinks();

for(let link of links){
    link.addEventListener('click' , titleClickHandler);
    console.log (links);
}