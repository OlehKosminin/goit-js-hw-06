const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.border = "1px solid tomato";
galleryEl.style.listStyle = "none";

const arrayGalleryEl = [];

for (const item of images) {
  const itemCreateEl = document.createElement("li");
  const imgCreateEl = document.createElement("img");
  imgCreateEl.src = item.url;
  imgCreateEl.alt = item.alt;
  imgCreateEl.style.width = "200px";

  itemCreateEl.appendChild(imgCreateEl);

  arrayGalleryEl.push(itemCreateEl);
}

galleryEl.append(...arrayGalleryEl);
