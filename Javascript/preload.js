// Array of all the internal pages you want to preload
const pages = [
  'index.html',
  'Mainpage.html',
  'Video1.html',
  'Quiz1.html',
  'Video2.html',
  'Quiz2.html',
  'Video3.html',
  'Quiz3.html',
  'Video4.html',
  'Quiz4.html',
  'end.html'
  // Add all your HTML pages used in the interactive experience
];


  // A counter to track how many pages have been successfully loaded
  let loadedCount = 0;

  // Optional: An object to store the HTML content of each page
  // Useful if you want to access the content later without refetching
  const cachedPages = {};

  // This function preloads a single page by URL
  // It returns a Promise so we can use Promise.all to wait for all pages to load
  function preloadPage(url) {
    return fetch(url)                    // Send a request to get the page
      .then(res => res.text())          // Convert the response to plain text (HTML)
      .then(html => {
        cachedPages[url] = html;        // Store the page content (optional)
        loadedCount++;                  // Increment the number of successfully loaded pages

        // Log progress in the browser console for debugging purposes
        console.log(`Loaded ${loadedCount} of ${pages.length}: ${url}`);
      });
  }

  // Start preloading all pages listed in the 'pages' array
  // Promise.all waits for every preloadPage() promise to finish
  Promise.all(pages.map(preloadPage))
    .then(() => {
      // All pages finished loading successfully

      console.log('All pages preloaded. Redirecting...');

      // Redirect the browser to the main experience page
      // This is the page that will run the interactive museum content
      window.location.href = 'Mainpage.html';
    })
    .catch(err => {
      // If any page fails to load, catch the error here

      console.error('Error preloading pages:', err);

      // Show a simple alert to the user (for debugging/fail-safe)
      // You can replace this with a more elegant error UI if needed
      alert('Failed to load experience. Please refresh or contact support.');
    });