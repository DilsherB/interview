const URL = "https://i.pravatar.cc/1000?img=";
      const container = document.querySelector(".container");

      createImg = (numImgs = 10) => {
        for (let i = 0; i < numImgs; i++) {
          const img = document.createElement("img");
          img.src = `${URL}${Math.floor(Math.random() * 100)}`;
          container.appendChild(img);
        }
      };
      createImg();
      window.addEventListener("scroll", () => {
        if (
          Math.ceil(window.scrollY) ===
          document.documentElement.scrollHeight - window.innerHeight
        ) {
          createImg();
        }
      });