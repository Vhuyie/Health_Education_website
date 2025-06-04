    function Character(name, age, role) {
      this.name = name;
      this.age = age;
      this.role = role;
    }

    Character.prototype.introduce = function () {
      return `My name is ${this.name}, I am ${this.age} years old and I am the ${this.role}.`;
    };

    let team = [
      new Character("Kinglee", 19, "Web Developer"),
      new Character("Bokang", 20, "Web Developer"),
      new Character("Vutomi", 21, "Web Developer")
    ];

    document.getElementById("characterIntroduction").innerHTML = team.map(c => c.introduce()).join("<br>");

    
    const boxes = document.querySelectorAll('.content-box');

    const revealOnScroll = () => {
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxTop < windowHeight - 50) {
          box.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);