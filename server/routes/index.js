var express = require('express');
var router = express.Router();
var controller = require('../controller')
const multer = require('multer');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Cơ khí Shinzen | Trang chủ', layout: 'layout', styleUrl: '/stylesheets/home.css', jsUrl: '/javascripts/home.js' });
});

router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Cơ khí Shinzen | Dịch vụ',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/shearing', function(req, res, next) {
  res.render('shearing', {
    title: 'Cơ khí Shinzen | Gia Công Khuông Mẫu Kim Loại',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/stamping', function(req, res, next) {
  res.render('stamping', {
    title: 'Cơ khí Shinzen | Dập',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/cnc-bending', function(req, res, next) {
  res.render('cnc-bending', {
    title: 'Cơ khí Shinzen | Chấn CNC',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/cnc-bending', function(req, res, next) {
  res.render('cnc-bending', {
    title: 'Cơ khí Shinzen | Chấn CNC',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/lazer-cutting', function(req, res, next) {
  res.render('lazer-cutting', {
    title: 'Cơ khí Shinzen | Cắt Lazer',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/welding', function(req, res, next) {
  res.render('welding', {
    title: 'Cơ khí Shinzen | Hàn, Hàn Robot',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/services/onsite-mechanical-repair', function(req, res, next) {
  res.render('onsite-mechanical-repair', {
    title: 'Cơ khí Shinzen | Hàn, Hàn Robot',
    layout: 'layout',
    styleUrl: '/stylesheets/services.css',
  })
});

router.get('/product-showcases', function(req, res, next) {
  res.render('product-showcases', {
    title: 'Cơ khí Shinzen | Sản Phẩm',
    layout: 'layout',
    styleUrl: '/stylesheets/product-showcases.css',
    jsUrl: '/javascripts/product-showcases.js'
  })
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy', {
    title: 'Cơ khí Shinzen | Chính Sách Bảo Mật',
    layout: 'layout',
  })
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', {
    title: 'Cơ khí Shinzen | Giới Thiệu',
    layout: 'layout',
    styleUrl: '/stylesheets/about-us.css',
    jsUrl: '/javascripts/about-us.js'
  })
});

router.get('/about-factory', function(req, res, next) {
  res.render('about-factory', {
    title: 'Cơ khí Shinzen | Nhà Máy',
    layout: 'layout',
  })
});

router.get('/recruitment-contact', function(req, res, next) {
  res.render('recruitment-contact', {
    title: 'Cơ khí Shinzen | Tuyển Dụng & Liên Hệ',
    layout: 'layout',
    styleUrl: '/stylesheets/recruitment-contact.css',
    jsUrl: '/javascripts/recruitment-contact.js'
  })
});

const upload = multer({ dest: 'uploads/' })

router.post('/recruitment-contact/recruitment', upload.single('cv'), controller.cvReceiver)

module.exports = router;
