// import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vip } from './vips/vip';
import vipdata from '../assets/vips.json'

// @Injectable({
//   providedIn: 'root',
// })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const vips = vipdata
//     const vips = [
//         { 
//           "id": 1, 
//           "name": "Gouda Clark", 
//           "occupation": "", 
//           "type": "topps61",
//           "detail": "Atlanta",
//           "born": 1984,
//           "reason": "Software Developer",
//           "yt": "https://i.imgur.com/tuFrXbT.jpg?1"
//       },
//       { 
//           "id": 2, 
//           "name": "Hank Aaron", 
//           "occupation": "athlete", 
//           "type": "topps61",
//           "detail": "Milwaukee / Atlanta Braves",
//           "born": 1934,
//           "reason": "TRUE Home Run King",
//           "yt": "https://media.giphy.com/media/Qz5r099JNdDnwxI5UA/giphy.gif"
//       },
//       { 
//           "id": 3, 
//           "name": "Matt Ryan", 
//           "occupation": "athlete",
//           "type": "topps61",
//           "detail": "Atlanta Falcons",
//           "born": 1985,
//           "reason": "2016 MVP",
//           "yt": "https://media.giphy.com/media/TqBFkE0cpF4ha/source.gif"
//       },
//       { 
//           "id": 4, 
//           "name": "Josef Martinez", 
//           "occupation": "athlete",
//           "type": "topps61",
//           "detail": "Atlanta United FC",
//           "born": 1993,
//           "reason": "2018 Golden Boot / MVP",
//           "yt": "https://media.giphy.com/media/S7KS27yiGVjyfuWsz9/giphy-downsized-large.gif"
//       },
//       { 
//           "id": 5, 
//           "name": "Dominique Wilkins", 
//           "occupation": "athlete",
//           "type": "topps61",
//           "detail": "Atlanta Hawks",
//           "born": 1960,
//           "reason": "Human Highlight Reel",
//           "yt": "https://i.pinimg.com/originals/63/5e/ed/635eed91a211139d65f8e627c6be5670.gif" 
//       },
//       { 
//           "id": 6, 
//           "name": "Evander Holyfield", 
//           "occupation": "athlete",
//           "type": "topps61",
//           "detail": "Heavyweight Champion",
//           "born": 1962,
//           "reason": "The Real Deal",
//           "yt": "https://i.makeagif.com/media/11-25-2015/1oh3Cj.gif"
//       },
//       { 
//           "id": 7, 
//           "name": "Chipper Jones", 
//           "occupation": "athlete",
//           "type": "topps61",
//           "detail": "Atlanta Braves",
//           "born": 1972,
//           "reason": "Hall Of Famer",
//           "yt": "https://media.giphy.com/media/IRckCyD0YXr3O/giphy.gif"},
//       { 
//           "id": 8, 
//           "name": "Martin Luther King", 
//           "occupation": "leader",
//           "type": "topps61",
//           "detail": "Civil Rights Leader",
//           "born": 1929,
//           "reason": "Nobel Peace Prize",
//           "yt": "https://media.giphy.com/media/l0ErKxonRJTrhKjG8/giphy.gif"
//       },
//       { 
//           "id": 9, 
//           "name": "John Lewis", 
//           "occupation": "leader",
//           "type": "topps61",
//           "detail": "US Congressman",
//           "born": 1940,
//           "reason": "Presidential Medal of Freedom",
//           "yt": "https://api.time.com/wp-content/uploads/2017/03/john-lewis-georgia-congressman-civil-rights-movement.jpg" },
//       { 
//           "id": 10, 
//           "name": "Maynard Jackson", 
//           "occupation": "leader" ,
//           "type": "topps61",
//           "detail": "Politician",
//           "born": 1938,
//           "reason": "First Black Mayor of Atlanta",
//           "yt": "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2018/01/0118_CircaMaynardJackson_AlStephenson_oneuseonly.jpg"},
//       { 
//           "id": 11, 
//           "name": "Keisha Lance Bottoms",
//           "occupation": "leader",
//           "type": "topps61",
//           "detail": "Politician",
//           "born": 1970,
//           "reason": "Current Mayor of Atlanta",
//           "yt": "https://wpcdn.us-east-1.vip.tn-cloud.net/www.georgiatrend.com/content/uploads/2019/12/18_KLB_coverstory_photo.jpg"
//       },
//       { 
//           "id": 12, 
//           "name": "OutKast", 
//           "occupation": "musician",
//           "type": "topps61",
//           "detail": "Big Boi and Andre 3000",
//           "born": 1975,
//           "reason": "Six Grammy Awards",
//           "yt": "https://i0.wp.com/brightestyoungthings.com/wp-content/uploads/2014/05/Outkast-Gif-1.gif?fit=400%2C300&quality=100&ssl=1"
//       },
//       {
//           "id": 13,
//           "name": "TLC",
//           "occupation": "musician",
//           "type": "topps61",
//           "detail": "R&B Girl Group",
//           "born": 1971,
//           "reason": "Nine Top 10 Hits",
//           "yt": "https://i.ytimg.com/vi/M_o_lSiNAtI/hqdefault.jpg",
//       },
//       {
//           "id": 14,
//           "name": "T.I.",
//           "occupation": "musician",
//           "type": "topps61",
//           "detail": "King of the South",
//           "born": 1980,
//           "reason": "7 Billboard Top 5 Albums",
//           "yt": "https://upload.wikimedia.org/wikipedia/en/1/10/King_%28album%29.jpg",
//       },
//       {
//           "id": 15,
//           "name": "Ludacris",
//           "occupation": "musician actor",
//           "type": "topps61",
//           "detail": "Rapper / Actor",
//           "born": 1977,
//           "reason": "3 Grammy Awards",
//           "yt": "https://media.giphy.com/media/CsEIm9vZaUWiY/giphy.gif",
//       },
//       {
//           "id": 16,
//           "name": "Usher",
//           "occupation": "musician",
//           "type": "topps61",
//           "detail": "R&B Singer",
//           "born": 1978,
//           "reason": "80 million records sold",
//           "yt": "https://media.giphy.com/media/v8Lvu6LloqmR2/giphy.gif",
//       },
//       {
//           "id": 17,
//           "name": "Julia Roberts",
//           "occupation": "actor",
//           "type": "topps61",
//           "detail": "Actress",
//           "born": 1967,
//           "reason": "Oscar for Best Actress",
//           "yt": "https://media.giphy.com/media/2Z7WbDrluPJL2/giphy.gif",
//       },
//       {
//           "id": 18,
//           "name": "Donald Glover",
//           "occupation": "musician actor",
//           "type": "topps61",
//           "detail": "Actor / Rapper",
//           "born": 1983,
//           "reason": "Childish Gambino",
//           "yt": "https://media.giphy.com/media/lYf4uAJEWVo1FffnVD/giphy.gif",
//       },
//       {
//           "id": 19,
//           "name": "Tyler Perry",
//           "occupation": "actor business",
//           "type": "topps61",
//           "detail": "Actor / Businessman",
//           "born": 1969,
//           "reason": "Tyler Perry Studios",
//           "yt": "https://media.giphy.com/media/kFNaLHtn88ozrws6Le/giphy.gif",
//       },
//       {
//           "id": 20,
//           "name": "Ted Turner",
//           "occupation": "business",
//           "type": "topps61",
//           "detail": "Founder",
//           "born": 1938,
//           "reason": "Turner Broadcasting",
//           "yt": "https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr07/6/12/anigif_original-grid-image-685-1399394335-1.gif?crop=605:299;0,10&downsize=600:*&output-format=auto&output-quality=auto",
//       },
//       {
//           "id": 21,
//           "name": "Arthur Blank",
//           "occupation": "business",
//           "type": "topps61",
//           "detail": "Cofounder",
//           "born": 1942,
//           "reason": "Home Depot",
//           "yt": "https://media.giphy.com/media/jOVSkMmdvufGihdZw1/giphy-downsized-large.gif",
//       }
//   ]
    console.log(vips)
    console.log(JSON.stringify(vips))
    return {vips};
  }

  // Overrides the genId method to ensure that a vip always has an id.
  // If the vips array is empty,
  // the method below returns the initial number (11).
  // if the vips array is not empty, the method below returns the highest
  // vip id + 1.
  genId(vips: Vip[]): number {
    return vips.length > 0 ? Math.max(...vips.map(vip => vip.id)) + 1 : 11;
  }
}