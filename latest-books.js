document.addEventListener('DOMContentLoaded', ()=>{


    const loadData = async() => {

      try {

        loader = document.querySelector('.loader');
        loader.style.color = 'red';

         const response = await fetch("https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php");
         console.log(response);
        const data = await response.json();
          console.log(data);
          
          target = document.querySelector("#latest-books");

        
       
    
          for(let i = 0; i < data.length ; i++) {
              newelement = document.createElement("li");
              target.appendChild(newelement).innerHTML = '<strong>' + data[i].title + " : </strong> " + data[i].description;
          }
      
        } catch (e) {

        console.log(e);

        }finally {

            loader.style.color = 'white';

        }

        
      
     
     }
     
     loadData();
})

