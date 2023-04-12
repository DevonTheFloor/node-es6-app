export const indexPage = (req, res, next)=> {
  res.render('index', { title: 'Acueil' });
}
export const secondPage = (req, res, next) => {
  res.render('second', {title: 'Second'});
}