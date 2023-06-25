// Get chatbot elements

const name = document.querySelector("#name")
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');




// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
  const keyword = input.toLowerCase();

  if (keyword.includes('service')) {
    // Return service contact information
    return 'For service inquiries, please contact us at service@example.com or call +1-123-456-7890.';
  } else if (keyword.includes('sales')) {
    // Return sales contact information
    return 'For sales inquiries, please contact us at sales@example.com or call +1-987-654-3210.';
  } else {
    // Generate a generic response
    const responses = [
      "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      // Other generic responses...
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

  // Add chatbot logic here
   // const responses = [
    //  {service: "For more information about Services, Please send an email to services@readywebsites.co.uk"},
    //  {sales: "Formore information aboutb Sales please contact sales@readywebsites.co.uk or call 014000"}
    //];
    
    // Return a random response
   // if (responses.includes('service')){
   //   message([0])
    //}
  //}



  function toggleContent(){
    const chatbotContainer = document.getElementById('containerid');
    if (chatbotContainer.style.display === 'none'){
      chatbotContainer.style.display = 'block';
    } else { chatbotContainer.style.display = 'none'}
  }


  function services(){
    const trigger = [
      
    ];
  }