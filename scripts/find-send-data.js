function fetchData() {
  const selectedText = window.getSelection().toString();
  const url_of_quote = window.location.href
  const title = document.querySelector("h1").innerText
  const website = window.location.hostname
  const url_of_website = url_of_quote
// Todo: 1. Get the Date, 2. Get the Author, 3. Find a solution for Favicons
  return {
    content: selectedText,
    url_of_quote: url_of_quote,
    title: title,
    website: website,
    url_of_website: url_of_website
  }
}

// chrome.runtime.onMessage.addListener(MessageReceived)
//     function MessageReceived(message, sender, reply) {
// console.log(message)
// };

chrome.runtime.onMessage.addListener(MessageReceived)
    function MessageReceived(message) {
      const cookie = message
      console.log(cookie)
};

// console.log(fetchData())

// function sendData (data) {
//   // const url = 'https://capture-maximilianjg.herokuapp.com/api/v1/quotes'
//   const url = 'localhost:3000/api/v1/quotes'

//   const params = {
//     quote: {
//       content: data.content,
//       url_of_quote: data.url_of_quote,
//     },
//     source: {
//       title: data.title,
//       website: data.website,
//       url_of_website: data.url_of_website
//     }
//   }

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json", "Cookie": "" },
//     body: JSON.stringify(params)
//   }

//   console.log(params)

//   fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data))
// }

// sendData(fetchData());

//_________________________________________________ THIS IS SHIT:

// browser.runtime.getBackgroundPage()
// console.log(cookie)

// chrome.runtime.onMessage.addListener(gotMessage)

// function gotMessage(message, sender, sendResponse) {
//   console.log(message)
// }

