  // Get references to the DOM elements
  const adviceId = document.getElementById("advice-id");
  const adviceText = document.getElementById("advice-text");
  const dice = document.getElementById("dice");

  // Function to update DOM with advice
  const updateAdvice = (id, advice) => {
    adviceId.innerText = id;
    adviceText.innerHTML = `<q>${advice}</q>`;
  };

  // Asynchronous function to fetch advice from the API
  const fetchAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const { id, advice } = json.slip;

      // Update DOM elements with fetched advice
      updateAdvice(id, advice);
    } catch (error) {
      console.error(error.message);
      adviceText.innerText = "Failed to fetch advice. Please try again later.";
    }
  };

  // Add event listener to the dice button to fetch new advice when clicked
  dice.addEventListener("click", fetchAdvice);

  // Initial fetch to display advice when the page loads
  fetchAdvice();