const instance = basicLightbox.create(`
    <img src="https://onetreeplanted.org/cdn/shop/articles/Healthy_Forest_520x500_cf5376c9-8ccb-4b9d-919f-802cf1758b3c_520x.jpg?v=1734541188" width="800" height="600">
`);

document.querySelector('button').addEventListener('click', () => {
  instance.show();
});


