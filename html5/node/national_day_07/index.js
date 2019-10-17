const package = require('./package.json');
const images = require('images');
console.log(package.version);

const bg_image = images('./images/WechatIMG1.jpeg');
console.log(background);
const gq_images = images('./images/gq.jpeg');
const offset = { x:5, y:5};
console.log(qg_images.width(),qg_images.height());
const foreground_image = images(gq_images.width()+offset.x, gq_images.height()+offset.y).fill(0xff,0xff,0xff, 1).draw(gq_images,offset.x,offset.y);
const pos = {
    x:bg_image.width - gq_images.width(),
    y:bg_image.height - gq_images.height()
}
bg_image.draw(foreground_image,pos.x,pos.y).save('./images/result.jpg',{quality:100});