fetch('https://whatyearisit-backend-nu-coral.vercel.app/year')
 .then(response => response.json())
 .then(data => {
    const year = data.year;
    document.querySelector('#year').textContent = year.toString();
 });