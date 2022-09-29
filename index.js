const testimonials = [
    {
        name: "Scottie A.",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "If you want real marketing that works and effective implementation - Apple's got you covered. It's really wonderful"

    },
     {
        name: "Donielle I.",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
        text: "Keep up the excellent work. I love Apple. Nice work on your Apple. Apple saved my business."

    },
     {
        name: "Aidan Z.",
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        text: "We're loving it. Absolutely wonderful! I made back the purchase price in just 48 hours! You won't regret it."

    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
      idx = 0;
    }
    setTimeout(() => {
      updateTestimonial();
    }, 10000);
  }