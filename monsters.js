const monsters = {
    Emby: {
      position: {
        x: 260,
        y: 385
      },
      image: {
        src: './img/embySprite.png'
      },
      frames: {
        max: 4,
        hold: 30
      },
      animate: true,
      name: 'Fury',
      attacks: [attacks.Tackle, attacks.Fireball]
    },
    Draggle: {
      position: {
        x: 630,
        y: 230
      },
      image: {
        src: './img/draggleSprite.png'
      },
      frames: {
        max: 4,
        hold: 30
      },
      animate: true,
      isEnemy: true,
      name: 'Eerie',
      attacks: [attacks.Tackle]
    }
  }