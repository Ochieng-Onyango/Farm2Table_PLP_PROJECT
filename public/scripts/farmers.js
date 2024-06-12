const farmers = [
  {name: 'Joshua Kimani', image: '../images/Josh.jpg', bio: 'Joshua has been a farmer for over 20 years and specializes in organic produce.', contact: 'john@farm2table.com'},
  {name: 'Loureen Kivutha', image: '../images/Loureen.jpg', bio: `Loureen is a fourth-generation farmer who takes great pride in her family's farming traditions.`, contact: 'emma@farm2table.com'},
  {name: 'Winnie Atieno', image: '../images/Winnie.jpg', bio: 'Winnie is passionate about sustainable farming practices and believes in preserving the environment.', contact: 'michael@farm2table.com'},
  // More farmers to be added as needed
];

function renderFarmers() {
  const farmerList = document.querySelector('.farmer-list');
  farmerList.innerHTML = '';
  farmers.forEach(farmer => {
    const farmerItem = document.createElement('div');
    farmerItem.classList.add('farmer');
    farmerItem.innerHTML = `
      <img src="${farmer.image}" alt="${farmer.name}">
      <h3>${farmer.name}</h3>
      <p>${farmer.bio}</p>
      <p>Contact: <a href="mailto:${farmer.contact}">${farmer.contact}</a></p>
    `;
    farmerList.appendChild(farmerItem);
  });
}