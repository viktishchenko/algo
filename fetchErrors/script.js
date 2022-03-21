// Fetch Errors
// Only throws an error if cannot resolve.
// Error Response still a response (400-500)

const url = "https://www.course-api.com/react-tours-project";

const getData = async () => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const msg = `There is an error "${resp.status}" ${resp.statusText}`;
      throw new Error(msg);
    }
    const data = await resp.json();
    console.log("data :>> ", data);
  } catch (error) {
    console.log(error);
  }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", getData);
