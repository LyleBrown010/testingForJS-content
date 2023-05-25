// education array of objects

let education = [
    {
      id: 1,
      year: "2023 - Present" ,
      desc: "My latest chapter, and the start of something beautiful.",
      place: "Life Choices Coding Academy",
    },
    {
      id: 2,
      year: "2018 - 2022",
      desc: "STUDIED?",
      place: "University of Cape Town",
    },
    {
      id: 3,
      year: "2013 - 2017",
      desc: "Schoooooooool ",
      place: "Mondale High School",
    },
  ];
  
  let dispEducation = document.querySelector(".education");
  education.forEach((data) => {
    dispEducation.innerHTML += `
    
      <div class= "education-card">
      <h4 class="display-4">${data.year}</h4>
      <div class="card-body">
      <p class="text-white">${data.desc} @ <span>${data.place}</span></p>
      </div>
      </div>`;
  });
