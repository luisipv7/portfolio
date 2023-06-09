function updateProfileData(profData) {
  const photo = document.getElementById("profile.photo");
  const name = document.getElementById("profile.name");
  const email = document.getElementById("profile.email");
  const phone = document.getElementById("profile.phone");
  const location = document.getElementById("profile.location");
  const job = document.getElementById("profile.job");
  photo.src = profData.photo;
  photo.alt = profData.name;
  name.innerText = profData.name;
  email.innerText = profData.email;
  phone.innerText = profData.phone;
  email.href = `mailto:${profData.email}`;
  phone.href = `https://api.whatsapp.com/send/?phone=${profData.phone}&text=Ol%C3%A1%2C%20meu%20amigo!`;
  location.innerText = profData.location;
  job.innerText = profData.job;
}

function updateSoftSkills(profData) {
  const softSkills = document.getElementById("profile.skills.softSkills");

  softSkills.innerHTML = profData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");

  hardSkills.innerHTML = profData.skills.hardSkills
    .map(
      (skills) => `<li><img
                    src="${skills.logo}"
                    alt="${skills.name}"
                    title="${skills.name}"
                  /></li>`
    )
    .join("");
}

function updateLanguages(profData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updateProjects(profData) {
  const projects = document.getElementById("profile.projects");

  projects.innerHTML = profData.portfolio
    .map(
      (project) => `<li>
   <span class="title">${project.name} </span>
   <a href="${project.url}" target="_blank">
     ${project.url}
   </a>
 </li>`
    )
    .join("");
}

function updateExperience(profData) {
  const experience = document.getElementById("profile.experience");

  experience.innerHTML = profData.professionalExperience
    .map(
      (xp) => `<li>
  <span class="title">${xp.name}</span>
  <span class="period">${xp.period}</span>
  <p>
    ${xp.description}
  </p>
</li>`
    )
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileData(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updateProjects(profileData);
  updateExperience(profileData);
})();



