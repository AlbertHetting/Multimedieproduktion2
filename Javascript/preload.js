// Array af alle undersiderne
const pages = [
  'index.html',
  'Mainpage.html',
  'Quiz1.html',
  'Quiz2.html',
  'Quiz3.html',
  'Quiz4.html',
  'end.html'
];


  // tæller til at se hvor mange sider der er loadet ind
  let loadedCount = 0;

  // objekt der indeholder alle undersiderne
  const cachedPages = {};

  // Loader en enkelt underside
  function preloadPage(url) {
    return fetch(url)                    // Find siden
      .then(res => res.text())          // koverterer teksten til HTML
      .then(html => {
        cachedPages[url] = html;        // Holder sidens elementer loaded
        loadedCount++;                  // lægger 1 til loadedcount

        // Konsol logging så man kan se hvor mange sider der er loadet og hvor der eventuelt kunne opstå fejl
        console.log(`Loaded ${loadedCount} of ${pages.length}: ${url}`);
      });
  }

  // Promise.all er for at alle siderne skal load
  // Promise.all venter på at Preloadpage() er færdig med at loade alle sider
  Promise.all(pages.map(preloadPage))
    .then(() => {
      
      // console log at alle sider er loaded
      console.log('All pages preloaded. Redirecting...');


      // Redirect til landingpage
      window.location.href = 'Mainpage.html';
    })
    .catch(err => {
      // Hvis der er en error:
      // Console skriver error og der kommer en alert
      console.error('Error preloading all pages:', err);


      alert('Siden kunne ikke loade');
    });