import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const renderGallery = (galleryItems) =>
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
        <a class = "gallery__link" 
        href = "${original}">
        <img class = "gallery__image" 
        src = "${preview}" 
        data-source = "${original}"  
        alt = "${description}"/>
        </a>
        </li>`
    )
    .join("");

const insertGallery = (cardGallery) => {
  galleryEl.insertAdjacentHTML("beforeend", cardGallery);
};

insertGallery(renderGallery(galleryItems));

galleryEl.addEventListener("click", onOriginalImg);

function onOriginalImg(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

// function onOriginalImg(event) {
//   event.preventDefault();

//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}" width="800" height="600">`,
//     {
//       onShow: () => {
//         document.addEventListener("keydown", onCloseModal);
//       },
//       onClose: () => {
//         document.removeEventListener("keydown", onCloseModal);
//       },
//     }
//   );
//   instance.show();

//   function onCloseModal(event) {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   }
// }
