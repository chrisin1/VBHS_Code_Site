module.exports = (app) => {


  app.get('/', (req, res) => {
    res.render('home', {location: 'Home'});
  })

  app.get('/about', (req, res) => {
    res.render('about', {location: 'About Us'})
  })

  app.get('/whycode', (req, res) => {
    res.render('code', {location: 'Why Code?'})
  })

  app.get('/popularcode', (req, res) => {
    res.render('pop', {location: 'Popular Languages'})
  })

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  })

}
