// Project data
const projects = [
    {
      title: "Painful Breakout",
      link: "https://designdialectics.itch.io/painful-breakout",
      img: "imgs/painful.jpg",
      desc: "Entry into the UTS Playmakers Gaming Geek Week Game Jam 2020",
    },
    {
      title: "Unity game prototype",
      link: "https://ricepaddyhat.itch.io/cool-2d-pixel-art-platformer-prototype",
      img: "imgs/plat.jpg",
      desc:
        "2D playformer game in Unity2D, playable demo, currently in development",
    },
    {
      title: "USB Rubber Ducky",
      link: "https://www.youtube.com/watch?v=9T9lXhGNJ5c",
      img: "imgs/digispark.jpg",
      desc:
        "Payloads for keystroke injection on a digispark microcontroller, based on the popular Rubber Ducky",
    },
    {
      title: "CI calculator",
      link: "https://github.com/ricepaddyhat/coincidenceIndex",
      img: "imgs/cipher.jpg",
      desc:
        "Cryptographic tool for calculating the coincidence index of text or images of text (tesseract-ocr)",
    },
  ];
  




const projectContainer = document.getElementById("projects-row");

// Add project html elements to the page
projects.map(project => {
    const div = createElement('div', null, { class: 'col-xs-1 col-sm-6 col-md-4 col-xl-3 project-container'});
    const a = createElement('a', null, { href: project.link, target: '_blank' });
    const containerDiv = createElement('div', null, { class: 'card project-item'});
    const ul = createElement('ul', null, { class: 'list-group list-group-flush'});
    
    const projGroup = createElement('div', null, { class: 'project-img-group'});
    projGroup.appendChild(createElement('img', null, { src: project.img, class: "card-img", alt: "platformer game" }));
    projGroup.appendChild(createElement('p', project.desc, { class: 'card-text'}));

    ul.appendChild(projGroup);
    ul.appendChild(createElement('p', project.title, { class: 'card-title pb-3 pb-sm-0'}));

    containerDiv.appendChild(ul);
    a.appendChild(containerDiv);
    div.appendChild(a);
    projectContainer.appendChild(div);
});

// For convenience
function createElement(tag, data, options = {}) {
  const el = document.createElement(tag);
  el.textContent = data;

  return Object.entries(options).reduce((element, [field, value]) => {
    element.setAttribute(field, value);
    return element;
  }, el);
}
