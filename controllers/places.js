const router = require('express').Router()

router.post('/', (req, res) => {
	console.log(req.body)
	router.post('/', (req, res) => {
		console.log(req.body)
		if (!req.body.pic) {
		  // Default image if one is not provided
		  req.body.pic = 'http://placekitten.com/400/400'
		}
		if (!req.body.city) {
		  req.body.city = 'Anytown'
		}
		if (!req.body.state) {
		  req.body.state = 'USA'
		}
		res.send('POST /places')
	      })
	res.send('POST /places')
	})


router.get('/', (req, res) => {
	let places = [{
		name: 'H-Thai-ML',
		city: 'Seattle',
		state: 'WA',
		cuisines: 'Thai, Pan-Asian',
		pic: '/images/h-thai-ml-tables.jpg'
	      }, {
		  name: 'Coding Cat Cafe',
		  city: 'Phoenix',
		  state: 'AZ',
		  cuisines: 'Coffee, Bakery',
		  pic: '/images/coffee-cat.png'
	      }]
    res.render('places/index', { places })
})



router.get('/new', (req, res) => {
	res.render('places/new')
      });



module.exports = router