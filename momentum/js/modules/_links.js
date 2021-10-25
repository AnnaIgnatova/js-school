const linkTitle = document.querySelector('.links-title');
const linksContainer = document.querySelector('.links-container');
const newLinkBtn = document.querySelector('.new-link');
const allLinksBlock = document.querySelector('.all-links');
const newLinkBlock = document.querySelector('.new-link-container');
const backToLinksBtn = document.querySelector('.links-back');
const createLinkBtn = document.querySelector('.create-link');
const editLinkBtn = document.querySelector('.edit-link-btn');
const nameLinkInput = document.querySelector('.name-link-input');
const souceLinkInput = document.querySelector('.souce-link-input');
const allLinksNav = document.querySelector('.all-links-nav');

let linkId = 2;
let allLinks = JSON.parse(localStorage.getItem('all-links')) || [
  ['Google', 'https://www.google.com/'],
  ['App RS School', 'https://app.rs.school/'],
];

const closeCreateLinkBlock = () => {
  newLinkBlock.classList.remove('animate-new-link');
  allLinksBlock.classList.remove('animate-all-links');
  newLinkBlock.classList.add('new-links-back-animation');
  allLinksBlock.classList.add('all-links-back-animation');
  setTimeout(() => {
    newLinkBlock.classList.add('animate-back-new-link');
    allLinksBlock.classList.add('animate-back-all-links');
  }, 500);
};

const openCreateLinkBlock = () => {
  newLinkBlock.classList.remove('animate-back-new-link');
  allLinksBlock.classList.remove('animate-back-all-links');
  newLinkBlock.classList.add('new-links-animation');
  allLinksBlock.classList.add('all-links-animation');
  setTimeout(() => {
    newLinkBlock.classList.add('animate-new-link');
    allLinksBlock.classList.add('animate-all-links');
  }, 500);
};

const createNewLink = (name, link) => {
  return `
    <a href="${link}">${name}</a>
    <button class="link-icon edit-link"></button>
    <button class="link-icon delete-link"></button>
   `;
};

fillLinksNav();

linkTitle.addEventListener('click', () => {
  linksContainer.classList.toggle('hide');
});

newLinkBtn.addEventListener('click', openCreateLinkBlock);

newLinkBlock.addEventListener('animationend', () => {
  newLinkBlock.classList.remove('new-links-animation');
  allLinksBlock.classList.remove('all-links-animation');
  newLinkBlock.classList.remove('new-links-back-animation');
  allLinksBlock.classList.remove('all-links-back-animation');
});

backToLinksBtn.addEventListener('click', () => {
  closeCreateLinkBlock();
  souceLinkInput.value = '';
  nameLinkInput.value = '';
  editLinkBtn.classList.add('hide');
  createLinkBtn.classList.remove('hide');
});

createLinkBtn.addEventListener('click', () => {
  closeCreateLinkBlock();
  const nameLink = nameLinkInput.value;
  const sourceLink = souceLinkInput.value;
  const li = document.createElement('li');

  li.id = `link-${linkId++}`;
  li.innerHTML = createNewLink(nameLink, sourceLink);

  allLinksNav.append(li);

  souceLinkInput.value = '';
  nameLinkInput.value = '';
  updateLocalStorage();
});

function fillLinksNav() {
  allLinksNav.innerHTML = '';
  allLinks.map((item) => {
    const li = document.createElement('li');
    li.id = `link-${linkId++}`;
    li.innerHTML = createNewLink(item[0], item[1]);
    allLinksNav.append(li);
  });
}

let currentItem;

linksContainer.addEventListener('click', (e) => {
  let target = e.target;

  if (target.classList.contains('delete-link')) {
    allLinksNav.removeChild(target.parentNode);
    updateLocalStorage();
  }
  if (target.classList.contains('edit-link')) {
    openCreateLinkBlock();
    nameLinkInput.value = target.parentNode.children[0].textContent;
    souceLinkInput.value = target.parentNode.children[0].href;

    editLinkBtn.classList.remove('hide');
    createLinkBtn.classList.add('hide');
    currentItem = target;
  }
});

editLinkBtn.addEventListener('click', () => {
  closeCreateLinkBlock();
  editLinkBtn.classList.add('hide');
  createLinkBtn.classList.remove('hide');
  currentItem.parentNode.children[0].textContent = nameLinkInput.value;
  currentItem.parentNode.children[0].href = souceLinkInput.value;

  souceLinkInput.value = '';
  nameLinkInput.value = '';
  updateLocalStorage();
});

function updateLocalStorage() {
  allLinks = [];
  [...allLinksNav.children].forEach((li) => {
    allLinks.push([li.children[0].textContent, li.children[0].href]);
  });

  localStorage.setItem('all-links', JSON.stringify(allLinks));
}
