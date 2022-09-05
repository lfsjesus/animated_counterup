let section_counter = document.querySelector('.counter-container');
    let counters = document.querySelectorAll('.counter');
    // Scroll Animation
    let CounterObserver = new IntersectionObserver(
      (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;
        let speed = 200;
        counters.forEach((counter, index) => {
          function UpdateCounter() {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;
            if (initialNumber < targetNumber) {
              counter.innerText = Math.ceil(initialNumber + incPerCount);
              if (targetNumber < 10) {setTimeout(UpdateCounter, 950);}  // Add more conditions to change counting speed according to target number
              else if (targetNumber < 30) {setTimeout(UpdateCounter,150);}
              else {
              setTimeout(UpdateCounter, 38);}
            }
            else {
              counter.innerText = targetNumber;
            }
          }
          UpdateCounter();
          if (counter.parentElement.style.animation) {
            counter.parentElement.style.animation = '';
          } else {
            counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
              index / counters.length + 0.5
            }s`;
          }
        });
        observer.unobserve(section_counter);
      },
      {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
      }
    );
    CounterObserver.observe(section_counter);
