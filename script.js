async function askAI() {
  const message = document.getElementById("message").value;
  const result = document.getElementById("result");

  if (!message.trim()) {
    result.innerText = "Please enter a message.";
    return;
  }

  result.innerText = "Thinking...";

  try {
    const response = await fetch("https://imran-ai-v2.john03032967.workers.dev/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: message
      })
    });

    const data = await response.json();
alert(JSON.stringify(data));
  result.innerText = data.data?.reply || data.reply || data.error || "No response";
  } catch (err) {
    result.innerText = "Error: " + err.message;
  }
}
