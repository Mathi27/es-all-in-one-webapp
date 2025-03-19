// An array of funky or motivational quotes
const quotes = [
    "“Innovation is the ability to see change as an opportunity – not a threat.”",
    "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
    "“Be bold, be brave, be true. Endure.” – A New Motto",
    "“It always seems impossible until it’s done.” – Nelson Mandela",
    "“One’s mind, once stretched by a new idea, never regains its original dimensions.”"
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    // 1. Display random quote on splash screen
    const splashQuote = document.getElementById("splash-quote");
    splashQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  
    // 2. Hide splash screen after 2 seconds
    setTimeout(() => {
      document.getElementById("splash-screen").classList.add("hidden");
    }, 2000);
  
    // 3. Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  // If body now has the "dark-mode" class, show "Light Mode" on the button
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
    });
 

  });
   