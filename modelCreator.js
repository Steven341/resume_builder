function createResume() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const fullAddress = document.getElementById("fullAddress").value;
    const phone = document.getElementById("telePhone").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const career = document.getElementById("careerSkills").value;
    const personal = document.getElementById("personalInfo").value;
    const education = document.getElementById("educationDeets").value;
   
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let employment = document.getElementById("employment").value;
    let myText =
        `<html>
          <head>
            <title>My Resume</title>
              <link rel='stylesheet' type='text/css' href='resume.css' />
              </head>
         <body>
         `;
    const fullName = firstName +" " + lastName; 
    myText += ` 
    <header style="background-color: #9575cd" class="jumbotron">
    <div class="container">
        <div class="row row-header">
            <div class="col-5" >
               <h1 style="color:aliceblue">${fullName}</h1>
            </div>
        </div>
    </div>
    </div>
</header>`;
    myText += `<div> 
                ${ fullAddress }   /  ${ phone } 
                </div> `;
    myText += `<div> 
                  ${ email } 
                  </div>`;
    myText += `<div>
                 ${ website } 
                </div>
                <br>
                <hr>`;
    
    myText +=
        `<div>
            <div class='left'> MY SKILLS </div>
            <div class='right'> ${ career }</div>
          </div>
              <br> `;
    myText +=
          `<div>
            <div class='left'> ABOUT ME </div>
            <div class='right'> ${ personal } </div>
          </div>
             <br>`;
  myText +=
       `<div>
          <div class='left'> EDUCATION </div>
          <div class='right'> ${ education } </div>
        </div>
          <br>`;

  if (startDate )
    {
    myText += `<div>
          <div class='left'> EMPLOYMENT </div>
          </div>
          <br>`;
  
    myText += `<div>
            <div class= 'left'> ${ startDate }  - ${ endDate } </div>
            <div class='right'> ${ employment }  </div>
            </div> 
            <br>`
  }
 
  myText +=
          `<div class='right'>
            <br>
            <input type='button' id='download' name='download' value='Download' onclick='window.print()' />
            </div>
          </body>
          </html>`;


let flyWindow = window.open(
    "about:blank",
    "myResume",
    "width=800,height=800,left=200,top=200"
  );
  flyWindow.document.write(myText);
        
      }
      