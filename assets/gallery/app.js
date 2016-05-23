// Example photo array.
var photos = [
  { image: 'assets/gallery/images/2.jpg', credits: '<a href="https://www.flickr.com/photos/polandmfa/21141111196">Photo</a> by polandmfa / <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY-NC</a>' },
  { image: 'assets/gallery/images/4.jpg', credits: '<a href="https://www.flickr.com/photos/dprzybyla/5848365797">Photo</a> by damian przybyla / <a href="https://creativecommons.org/licenses/by/2.0/">CC BY</a>' },
  { image: 'assets/gallery/images/5.jpg', credits: '<a href="https://www.flickr.com/photos/dlp/5900419720">Photo</a> by Marcin Lachowicz / <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND</a>' },
  { image: 'assets/gallery/images/6.jpg', credits: '<a href="https://www.flickr.com/photos/movaxdx/25284720124/">Photo</a> by Max Bashyrov / <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY-NC</a>' },
  { image: 'assets/gallery/images/7.jpg', credits: '<a href="https://www.flickr.com/photos/polandmfa/8231248443">Photo</a> by polandmfa / <a href="https://creativecommons.org/licenses/by-nd/2.0/">CC BY-ND</a>' },
  { image: 'assets/gallery/images/8.jpg', credits: '<a href="https://www.flickr.com/photos/medialabkatowice/17026179160/">Photo</a> by Medialab Katowice / <a href="https://creativecommons.org/licenses/by/2.0/">CC BY</a>' },
  { image: 'assets/gallery/images/9.jpg', credits: '<a href="https://www.flickr.com/photos/131383707@N02/21509741512">Photo</a> by Ziemowit Cabanek / <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY-NC</a>' },
  { image: 'assets/gallery/images/10.jpg', credits: '<a href="https://www.flickr.com/photos/medialabkatowice/21953162241">Photo</a> by Medialab Katowice / <a href="https://creativecommons.org/licenses/by/2.0/">CC BY</a>' },
  { image: 'assets/gallery/images/11.jpg', credits: '<a href="https://www.flickr.com/photos/movaxdx/24658100239">Photo</a> by Max Bashyrov / <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY-NC</a>' }
];

bgImageGallery(photos, '.bg1', '.bg2', '.bg-credits');