const PHOTOS = {
   1: { file: 'CosmicStrainWeb-1.png',      orientation: 'vertical' },
   2: { file: 'CosmicStrainWeb-2.png',      orientation: 'vertical' },
   3: { file: 'CosmicStrainWeb-3.png',      orientation: 'vertical' },
   4: { file: 'CosmicStrainWeb-4.png',      orientation: 'vertical' },
   5: { file: 'CosmicStrainWeb-5.png',      orientation: 'vertical' },
   6: { file: 'CosmicStrainWeb-6.png',      orientation: 'vertical' },
   7: { file: 'CosmicStrainWeb-7.png',      orientation: 'vertical' },
   8: { file: 'CosmicStrainWeb-8.png',      orientation: 'horizontal' },
   9: { file: 'CosmicStrainWeb-9.png',      orientation: 'horizontal' },
  10: { file: 'CosmicStrainWeb-10.png',     orientation: 'vertical' },
  11: { file: 'CosmicStrainWeb-11.png',     orientation: 'vertical' },
  12: { file: 'CosmicStrainWeb-12.png',     orientation: 'vertical' },
  13: { file: 'CosmicStrainWeb-13.png',     orientation: 'vertical' },
  14: { file: 'FilmCosmicStrainWeb-1.png',  orientation: 'vertical' },
  15: { file: 'FilmCosmicStrainWeb-2.png',  orientation: 'horizontal' },
  16: { file: 'FilmCosmicStrainWeb-3.png',  orientation: 'horizontal' },
  17: { file: 'FilmCosmicStrainWeb-4.png',  orientation: 'horizontal' },
  18: { file: 'FilmCosmicStrainWeb-5.png',  orientation: 'horizontal' },
  19: { file: 'FilmCosmicStrainWeb-6.png',  orientation: 'vertical' },
  20: { file: 'FilmCosmicStrainWeb-7.png',  orientation: 'horizontal' },
  21: { file: 'FilmCosmicStrainWeb-8.png',  orientation: 'horizontal' },
  22: { file: 'FilmCosmicStrainWeb-9.png',  orientation: 'vertical' },
  23: { file: 'FilmCosmicStrainWeb-10.png', orientation: 'horizontal' },
  24: { file: 'FilmCosmicStrainWeb-11.png', orientation: 'horizontal' },
  25: { file: 'FilmCosmicStrainWeb-12.png', orientation: 'horizontal' },
  26: { file: 'FilmCosmicStrainWeb-13.png', orientation: 'horizontal' },
};

const params = new URLSearchParams(window.location.search);
const num = parseInt(params.get('photo'), 10) || 14;
const photo = PHOTOS[num];

if (photo) {
  const img = document.querySelector('.header-shot');
  if (img) {
    img.src = `./assets/images/${photo.file}`;
    img.classList.add(`header-shot--${photo.orientation}`);
  }
}
