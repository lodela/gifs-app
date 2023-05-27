import { Injectable } from '@angular/core';
import { Place } from '../helpers/interfaces/gifs-card.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private places: Place[] = [
    {
      id: '1976d2',
      image:
        'https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/chichen-itza-depositphotos-900x600.jpg',
      title: 'Chichen Itza',
      description:
        'Chichen Itza is an ancient Maya city located in the Yucatán Peninsula of Mexico. It was one of the most important cities in the Maya world, and its ruins are now one of the most popular tourist destinations in Mexico. Chichen Itza is known for its many temples and pyramids, including the Kukulkan Pyramid, which is one of the most iconic structures in the Maya world.',
      button: {
        text: 'Visit Chichen Itza',
        link: 'https://www.chichenitza.com/',
      },
    },
    {
      id: '125699',
      image:
        'https://www.gob.mx/cms/uploads/gallery/main_image/41611/Coral_cuerno_de_alce_PN_Arrecifes_de_Cozumel_QR__foto_Archivo_CONANP-2.jpg',
      title: 'Cozumel',
      description:
        "Cozumel is an island located off the coast of Mexico's Yucatán Peninsula. It is known for its beautiful beaches, clear waters, and scuba diving. Cozumel is also home to a number of Mayan ruins, including the San Gervasio temple complex.",
      button: {
        text: 'Visit Cozumel',
        link: 'https://www.cozumel.travel/',
      },
    },
    {
      id: '105103',
      image:
        'https://www.cataloniahotels.com/es/blog/wp-content/uploads/2017/10/41787392400_eca30235eb_b.jpg',
      title: 'Playa del Carmen',
      description:
        'Playa del Carmen is a resort town located on the Yucatán Peninsula of Mexico. It is known for its beautiful beaches, clear waters, and nightlife. Playa del Carmen is also home to a number of Mayan ruins, including the Xcaret Park.',
      button: {
        text: 'Visit Playa del Carmen',
        link: 'https://www.playadelcarmen.travel/',
      },
    },
    {
      id: 'rgb(105, 103, 103)',
      image: 'https://www.cancunadventure.net/images/mayanruins/tulum.jpg',
      title: 'Tulum',
      description:
        'Tulum is an ancient Maya city located on the Yucatán Peninsula of Mexico. It is known for its beautiful beaches, clear waters, and Mayan ruins. Tulum is also home to a number of cenotes, which are natural swimming holes.',
      button: {
        text: 'Visit Tulum',
        link: 'https://www.tulum.travel/',
      },
    },
  ];

  constructor() {}

  get Places() {
    return this.places;
  }
}
