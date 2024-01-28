const url = "https://api.github.com/users/";

const input = document.querySelector("#search");
const button = document.querySelector(".btn");

// for search section
button.addEventListener("click", () => {
  if (input.value !== "") {
    // console.log(input.value);
    getUserData(url + input.value);
  }
});

input.addEventListener(
  "keydown",
  (e) => {
    //   console.log(e.key);
    if (e.key === "Enter") {
      if (input.value !== "") {
        getUserData(url + input.value);
      }
    }
  },
  false
);

async function getUserData(gitUserUrl) {
  const response = await fetch(gitUserUrl);
  const data = await response.json();
  if (!data) {
    console.log("No Data Found");
  }
  console.log(data);
  renderProfile(data);
}

// for rendering items from api call on UI
const noResultsElem = document.querySelector("#noResultsElem");
function renderProfile(data) {
  // making the noResultsElem invisible in start
  noResultsElem.style.scale = 0;
  // if the user is found then this condition will work and display the data on UI
  if (data.message !== "Not Found") {
    // for checking whether the data field present on the specific user URL/Profile is null/empty or not
    function checkNull(apiItem, domItem) {
      // if the data field is null/empty
      if (apiItem === "" || apiItem === null) {
        // chaging the opacticy of that particular element's field on UI
        domItem.style.opacity = 0.5;
        domItem.previousElementSibling.style.opacity = 0.5;
        return false;
      }
      // if the data field is filled/not empty, then the following data will be reflected on the UI
      else {
        return true;
      }
    }

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // fetching elements
    const userImage = document.querySelector("[data-image]");
    const name = document.querySelector("[data-name]");
    const username = document.querySelector("[data-username]");
    const dateJoined = document.querySelector("[data-date]");
    const bio = document.querySelector("[data-bio]");
    const repo = document.querySelector("[data-repoCount]");
    const followers = document.querySelector("[data-followers]");
    const following = document.querySelector("[data-following]");
    const location = document.querySelector("[data-location]");
    const twitter = document.querySelector("[data-twitter]");
    const website = document.querySelector("[data-website]");
    const company = document.querySelector("[data-company]");

    //   updating on UI
    userImage.src = `${data.avatar_url}`;
    name.innerHTML = data?.name;
    username.innerText = `@${data?.login}`;
    username.href = data?.html_url;
    //   for getting date
    let dateSegment = data?.created_at.split("T").shift().split("-");
    dateJoined.innerText = `Joined on ${dateSegment[2]} ${
      month[dateSegment[1] - 1]
    } ${dateSegment[0]}`;

    bio.innerText = data?.bio === null ? "This Profile has no Bio" : data?.bio;

    repo.innerText = data?.public_repos;
    repo.href = data?.repos_url;
    followers.innerText = data?.followers;
    followers.href = data?.followers_url;
    following.innerText = data?.following;
    following.href = data?.following_url;

    location.innerText = checkNull(data?.location, location)
      ? data?.location
      : "Not Available";

    website.innerText = checkNull(data?.blog, website)
      ? data?.blog
      : "Not Available";

    website.href = checkNull(data?.blog, website) ? data?.blog : "#";

    twitter.innerText = checkNull(data?.twitter_username, twitter)
      ? data?.twitter_username
      : "Not Available";

    twitter.href = checkNull(data?.twitter_username, twitter)
      ? `https://twitter.com/${data?.twitter_username}`
      : "#";
    company.innerText = checkNull(data?.company, company)
      ? data?.company
      : "Not Available";
  }

  // if no user is found then this block of code will be executed
  else {
    // making the noResultsElem visible
    noResultsElem.style.scale = 1;
    // making the noResultsElem invisible again after 2.5 milliseconds
    setTimeout(() => {
      noResultsElem.style.scale = 0;
    }, 2500);
  }
}

// for dark and light mode
const modeBtn = document.querySelector(".mode-container");
const modeText = document.querySelector("[data-modeText]");
const modeIcon = document.querySelector("#modeIcon");

let darkMode = false;
const root = document.documentElement.style;

modeBtn.addEventListener("click", () => {
  if (darkMode === false) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

function enableDarkMode() {
  root.setProperty("--bg", "#141D2F");
  root.setProperty("--bg-content", "#1E2A47");
  root.setProperty("--text", "white");
  root.setProperty("--text-alt", "white");
  root.setProperty("--shadow-xl", "rgba(70,88,109,0.15)");
  modeText.innerText = "LIGHT";
  modeIcon.src = "./Images/sun-icon.svg";
  root.setProperty("--icon-bg", "brightness(1000%)");
  darkMode = true;
}

function enableLightMode() {
  root.setProperty("--bg", "#F6F8FF");
  root.setProperty("--bg-content", "#FEFEFE");
  root.setProperty("--text", "#4B6A9B");
  root.setProperty("--text-alt", "#2B3442");
  root.setProperty("--shadow-xl", "rgba(70, 88, 109, 0.25)");
  modeText.innerText = "DARK";
  modeIcon.src = "./Images/moon-icon.svg";
  root.setProperty("--icon-bg", "brightness(100%)");
  darkMode = false;
}

// on homepage this user data will be showed
getUserData(url + "saurabh-shivam");
