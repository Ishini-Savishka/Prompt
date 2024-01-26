const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


 /*   const fullPrompt = "This is the complete generated prompt. It's amazing!";  // Replace with your actual full prompt

    function purchasePrompt() {
        alert("To view the full prompt, you need to make a purchase.");
        // Implement the logic for purchasing the prompt
        displayFullPrompt();
    }

    function playAd() {
        alert("Ad is playing. Enjoy! After the ad, you'll be able to view the full prompt.");
        // Implement the logic for playing an ad and then displaying the full prompt
        displayFullPrompt();
    }

    function displayFullPrompt() {
        const promptDisplay = document.getElementById('promptDisplay');
        promptDisplay.innerHTML = `
            <h3>Full Prompt:</h3>
            <p>${fullPrompt}</p>
        `;
    }*/
    function showPublishSection() {
        document.getElementById('landing').style.display = 'none';
        document.getElementById('publishPrompt').style.display = 'block';
        document.getElementById('playAd').style.display = 'none';
      }
      
      function showAdSection() {
        document.getElementById('landing').style.display = 'none';
        document.getElementById('publishPrompt').style.display = 'none';
        document.getElementById('playAd').style.display = 'block';
      }
      
      function uploadImage() {
        const imageUpload = document.getElementById('imageUpload');
        imageUpload.click();  // Trigger the click event on the file input
      
        // Display the selected image filename
        imageUpload.addEventListener('change', function() {
          const fileName = this.files[0].name;
          const fileNameDisplay = document.getElementById('fileNameDisplay');
          fileNameDisplay.innerText = 'Selected image: ' + fileName;
        });
      }
      
      
      function submitPrompt() {
        const promptText = document.getElementById('promptTextArea').value;
        if (promptText) {
          // Handle prompt submission logic here
          alert('Prompt submitted successfully: ' + promptText);
        } else {
          alert('Please enter a prompt.');
        }
      }
      
      function purchase() {
        // Handle watch ad logic here
        alert('Prompt purchasing...');
      }
      

      function navigateToMessagePage() {
        // Redirect to the message page
        window.location.href = 'ad.html';
    }
    
    function navigateToHomePage() {
        // Redirect to the message page
        window.location.href = 'index.html';
    }