var faker = require('faker');
var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var image = faker.image.avatar();

console.log(randomName);
console.log(randomEmail);
console.log(image);