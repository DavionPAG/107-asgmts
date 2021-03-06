import axios from 'axios'

// let catalog = [
//   {
//     _id : 'gfdsnksdjnvdsv',
//     title: 'Link',
//     price: 15.50,
//     img: 'Link.png',
//     category: 'Collectible'
//   },
//   {
//     _id : 'gfdsnkgsdjds1',
//     title: "Majora's Mask",
//     price: 40.50,
//     img: 'Majoras-Mask.png',
//     category: 'Collectible'
//   },
//   {
//     _id : 'gfsdjnvds2',
//     title: 'Hylian Shield',
//     price: 25.50,
//     img: 'Master-Sword-Shield.png',
//     category: 'Collectible'
//   },
//   {
//     _id : 'dsnksdjnvds3',
//     title: 'Ocarina',
//     price: 30.50,
//     img: 'Ocarina.png',
//     category: 'Collectible'
//   },
//   {
//     _id : 'ksdjnvds4',
//     title: 'Sheika Eye',
//     price: 10.50,
//     img: 'Sheika-Eye.png',
//     category: 'Collectible'
//   },
//   {
//     _id : 'ksdjnvds5',
//     title: 'TriForce',
//     price: 45.50,
//     img: 'TriForce.png',
//     category: 'Collectible'
//   },
//   {
//     _id : 'vds6',
//     title: 'Z-Sword',
//     price: 10.50,
//     img: 'Z-Sword.png',
//     category: 'Collectible'
//   }
// ]

export default class DB {
  async getCatalog() {
    let res = await axios.get('http://127.0.0.1:5000/api/catalog');
    return res.data;
  }
}
