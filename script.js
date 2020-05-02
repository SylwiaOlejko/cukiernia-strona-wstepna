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
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
      link.addEventListener('click' , titleClickHandler);
  }

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