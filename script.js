const modaal = {
  alleInhoud: document.querySelectorAll('.modaalContent'),
  alleKnoppen: document.querySelectorAll('.modaalKnop'),
  maakAchtergrond() {
    let achtergrond = document.createElement('div');
    achtergrond.classList.add('modaal-achtergrond');
    achtergrond.addEventListener('click', () => this.sluiten());
    return achtergrond;
  },
  maakModaal() {
    let modaal = document.createElement('div');
    modaal.classList.add('modaal');
    modaal.addEventListener('click', (evt) => evt.stopPropagation());
    return modaal;
  },
  maakSluitknop() {
    let sluitKnop = document.createElement('div');
    sluitKnop.classList.add('sluit-knop');
    sluitKnop.innerHTML = '&#x00D7;';
    sluitKnop.addEventListener('click', () => this.sluiten());
    return sluitKnop;
  },
  open(element) {
    this.achtergrond = this.maakAchtergrond();
    this.sluitKnop = this.maakSluitknop();
    this.modaal = this.maakModaal();
    this.modaal.appendChild(this.sluitKnop);
    this.modaal.appendChild(element);
    this.achtergrond.appendChild(this.modaal);
    document.body.appendChild(this.achtergrond);
  },
  sluiten() {
    this.modaal.innerHTML = '';
    document.body.removeChild(this.achtergrond);
  }
}

for (let i = 0; i < modaal.alleInhoud.length; i++) {
  modaal.alleInhoud[i].parentNode.removeChild(modaal.alleInhoud[i]);
}

for (let i = 0; i < modaal.alleKnoppen.length; i++) {
  modaal.alleKnoppen[i].addEventListener('click', () => {
    let inhoud = modaal.alleInhoud[i];
    modaal.open(inhoud);
  })
}
