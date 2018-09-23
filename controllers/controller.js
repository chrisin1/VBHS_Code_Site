module.exports = (app) => {


  app.get('/', (req, res) => {
    res.render('home');
  })

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  })

}
