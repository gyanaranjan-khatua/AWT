import { useLocation, useNavigate, } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import a1 from "../assets/places/aus1.jpg"
import a2 from "../assets/places/aus2.jpg"
import a3 from "../assets/places/aus3.jpg"
import a4 from "../assets/places/aus4.jpg"
import a5 from "../assets/places/aus5.jpg"
import az1 from "../assets/places/az1.jpg"
import az2 from "../assets/places/az2.jpg"
import az3 from "../assets/places/az3.jpg"
import az4 from "../assets/places/az4.jpg"
import az5 from "../assets/places/az5.jpg"
import ay1 from "../assets/places/ay1.jpg"
import ay2 from "../assets/places/ay2.jpg"
import ay3 from "../assets/places/ay3.jpg"
import ay4 from "../assets/places/ay4.jpg"
import ay5 from "../assets/places/ay5.jpg"
import bali1 from "../assets/places/bali1.jpg"
import bali2 from "../assets/places/bali2.jpg"
import bali3 from "../assets/places/bali3.jpg"
import bali4 from "../assets/places/bali4.jpg"
import bali5 from "../assets/places/bali5.jpg"
import bhu1 from "../assets/places/bhu1.jpg"
import bhu2 from "../assets/places/bhu2.jpg"
import bhu3 from "../assets/places/bhu3.jpg"
import bhu4 from "../assets/places/bhu4.jpg"
import bhu5 from "../assets/places/bhu5.jpg"
import du1 from "../assets/places/du1.jpg"
import du2 from "../assets/places/du2.jpg"
import du3 from "../assets/places/du3.jpg"
import du4 from "../assets/places/du4.jpg"
import du5 from "../assets/places/du5.jpg"
import e1 from "../assets/places/e1.jpg"
import e2 from "../assets/places/e2.jpg"
import e3 from "../assets/places/e3.jpg"
import e4 from "../assets/places/e4.jpg"
import e5 from "../assets/places/e5.jpg"
import g1 from "../assets/places/g1.jpg"
import g2 from "../assets/places/g2.jpg"
import g3 from "../assets/places/g3.jpg"
import g4 from "../assets/places/g4.jpg"
import g5 from "../assets/places/g5.jpg"
import h1 from "../assets/places/h1.jpg"
import h2 from "../assets/places/h2.png"
import h3 from "../assets/places/h3.jpg"
import h4 from "../assets/places/h4.jpg"
import h5 from "../assets/places/h5.jpg"
import j1 from "../assets/places/j1.jpg"
import j2 from "../assets/places/j2.jpg"
import j3 from "../assets/places/j3.jpg"
import j4 from "../assets/places/j4.jpg"
import j5 from "../assets/places/j5.jpg"
import k1 from "../assets/places/k1.jpg"
import k2 from "../assets/places/k2.jpg"
import k3 from "../assets/places/k3.jpg"
import k4 from "../assets/places/k4.jpg"
import k5 from "../assets/places/k5.jpg"
import m1 from "../assets/places/m1.jpg"
import m2 from "../assets/places/m2.jpg"
import m3 from "../assets/places/m3.jpg"
import m4 from "../assets/places/m4.jpg"
import m5 from "../assets/places/m5.jpg"
import mal1 from "../assets/places/mal1.jpg"
import mal2 from "../assets/places/mal2.jpg"
import mal3 from "../assets/places/mal3.jpg"
import mal4 from "../assets/places/mal4.jpg"
import mal5 from "../assets/places/mal5.jpg"
import mau1 from "../assets/places/mau1.jpg"
import mau2 from "../assets/places/mau2.jpg"
import mau3 from "../assets/places/mau3.jpg"
import mau4 from "../assets/places/mau4.jpg"
import mau5 from "../assets/places/mau5.jpg"
import ne1 from "../assets/places/ne1.jpg"
import ne2 from "../assets/places/ne2.jpg"
import ne3 from "../assets/places/ne3.jpg"
import ne4 from "../assets/places/ne4.jpg"
import ne5 from "../assets/places/ne5.jpg"
import nz1 from "../assets/places/nz1.jpg"
import nz2 from "../assets/places/nz2.jpg"
import nz3 from "../assets/places/nz3.jpg"
import nz4 from "../assets/places/nz4.jpg"
import nz5 from "../assets/places/nz5.jpg"
import o1 from "../assets/places/o1.jpg"
import o2 from "../assets/places/o2.jpg"
import o3 from "../assets/places/o3.jpg"
import o4 from "../assets/places/o4.jpg"
import o5 from "../assets/places/o5.jpg"
import p1 from "../assets/places/p1.jpg"
import p2 from "../assets/places/p2.jpg"
import p3 from "../assets/places/p3.jpg"
import p4 from "../assets/places/p4.jpg"
import p5 from "../assets/places/p5.jpg"
import sr1 from "../assets/places/sr1.jpg"
import sr2 from "../assets/places/sr2.jpg"
import sr3 from "../assets/places/sr3.jpg"
import sr4 from "../assets/places/sr4.jpg"
import sr5 from "../assets/places/sr5.jpg"
import si1 from "../assets/places/si1.jpg"
import si2 from "../assets/places/si2.jpg"
import si3 from "../assets/places/si3.jpg"
import si4 from "../assets/places/si4.jpg"
import si5 from "../assets/places/si5.jpg"
import ta1 from "../assets/places/ta1.jpg"
import ta2 from "../assets/places/ta2.jpg"
import ta3 from "../assets/places/ta3.jpg"
import ta4 from "../assets/places/ta4.jpg"
import ta5 from "../assets/places/ta5.jpg"
import th1 from "../assets/places/th1.jpg"
import th2 from "../assets/places/th2.jpg"
import th3 from "../assets/places/th3.jpg"
import th4 from "../assets/places/th4.jpg"
import th5 from "../assets/places/th5.jpg"
import tu1 from "../assets/places/tu1.jpg"
import tu2 from "../assets/places/tu2.jpg"
import tu3 from "../assets/places/tu3.jpg"
import tu4 from "../assets/places/tu4.jpg"
import tu5 from "../assets/places/tu5.jpg"
import v1 from "../assets/places/v1.jpg"
import v2 from "../assets/places/v2.jpg"
import v3 from "../assets/places/v3.jpg"
import v4 from "../assets/places/v4.jpg"
import v5 from "../assets/places/v5.jpg"
import gs1 from "../assets/places2/gs1.jpg"
import gs2 from "../assets/places2/gs2.jpg"
import gs3 from "../assets/places2/gs3.jpg"
import gs4 from "../assets/places2/gs4.jpg"
import gs5 from "../assets/places2/gs5.jpg"
import anu1 from "../assets/places2/anu1.jpg"
import anu2 from "../assets/places2/anu2.jpg"
import anu3 from "../assets/places2/anu3.jpg"
import anu4 from "../assets/places2/anu4.jpg"
import anu5 from "../assets/places2/anu5.jpg"
import sd1 from "../assets/places2/sd1.jpg"
import sd2 from "../assets/places2/sd2.jpg"
import sd3 from "../assets/places2/sd3.jpg"
import sd4 from "../assets/places2/sd4.jpg"
import sd5 from "../assets/places2/sd5.jpg"
import wb1 from "../assets/places2/wb1.jpg"
import wb2 from "../assets/places2/wb2.jpg"
import wb3 from "../assets/places2/wb3.jpg"
import wb4 from "../assets/places2/wb4.jpg"
import wb5 from "../assets/places2/wb5.jpg"
import od1 from "../assets/places2/od1.jpg"
import od2 from "../assets/places2/od2.jpg"
import od3 from "../assets/places2/od3.jpg"
import od4 from "../assets/places2/od4.jpg"
import od5 from "../assets/places2/od5.jpg"
import mp1 from "../assets/places2/mp1.jpg"
import mp2 from "../assets/places2/mp2.jpg"
import mp3 from "../assets/places2/mp3.jpg"
import mp4 from "../assets/places2/mp4.jpg"
import mp5 from "../assets/places2/mp5.jpg"
import vi1 from "../assets/places2/vi1.jpg"
import vi2 from "../assets/places2/vi2.jpg"
import vi3 from "../assets/places2/vi3.jpg"
import vi4 from "../assets/places2/vi4.jpg"
import vi5 from "../assets/places2/vi5.jpg"
import tn1 from "../assets/places2/tn1.jpg"
import tn2 from "../assets/places2/tn2.jpg"
import tn3 from "../assets/places2/tn3.jpg"
import tn4 from "../assets/places2/tn4.jpg"
import tn5 from "../assets/places2/tn5.png"
import ke1 from "../assets/places2/ke1.jpg"
import ke2 from "../assets/places2/ke2.jpg"
import ke3 from "../assets/places2/ke3.jpg"
import ke4 from "../assets/places2/ke4.png"
import ke5 from "../assets/places2/ke5.jpg"
import ht1 from "../assets/places2/ht1.jpg"
import ht2 from "../assets/places2/ht2.jpg"
import ht3 from "../assets/places2/ht3.jpg"
import ht4 from "../assets/places2/ht4.jpg"
import ht5 from "../assets/places2/ht5.jpg"
import jk1 from "../assets/places2/jk1.jpg"
import jk2 from "../assets/places2/jk2.jpg"
import jk3 from "../assets/places2/jk3.jpg"
import jk4 from "../assets/places2/jk4.jpg"
import jk5 from "../assets/places2/jk5.jpg"
import mh1 from "../assets/places2/mh1.jpg"
import mh2 from "../assets/places2/mh2.jpg"
import mh3 from "../assets/places2/mh3.jpg"
import mh4 from "../assets/places2/mh4.jpg"
import mh5 from "../assets/places2/mh5.jpg"
import uk1 from "../assets/places2/uk1.jpg"
import uk2 from "../assets/places2/uk2.jpg"
import uk3 from "../assets/places2/uk3.jpg"
import uk4 from "../assets/places2/uk4.jpg"
import uk5 from "../assets/places2/uk5.jpg"
import gj1 from "../assets/places2/gj1.jpg"
import gj2 from "../assets/places2/gj2.jpg"
import gj3 from "../assets/places2/gj3.jpg"
import gj4 from "../assets/places2/gj4.jpg"
import gj5 from "../assets/places2/gj5.jpg"
import rj1 from "../assets/places2/rj1.jpg"
import rj2 from "../assets/places2/rj2.jpg"
import rj3 from "../assets/places2/rj3.jpg"
import rj4 from "../assets/places2/rj4.jpg"
import rj5 from "../assets/places2/rj5.jpg"
import him1 from "../assets/places2/him1.jpg"
import him2 from "../assets/places2/him2.jpg"
import him3 from "../assets/places2/him3.jpg"
import him4 from "../assets/places2/him4.jpg"
import him5 from "../assets/places2/him5.jpg"
import up1 from "../assets/places2/up1.jpg"
import up2 from "../assets/places2/up2.jpg"
import up3 from "../assets/places2/up3.jpg"
import up4 from "../assets/places2/up4.jpg"
import up5 from "../assets/places2/up5.jpg"
import ll1 from "../assets/places2/ll1.jpg"
import ll2 from "../assets/places2/ll2.jpg"
import ll3 from "../assets/places2/ll3.jpg"
import ll4 from "../assets/places2/ll4.jpg"
import ll5 from "../assets/places2/ll5.jpg"


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
// 🟢 Dummy data for destinations — add more as needed
const destinationDetails = {
  Australia: [
    { name: "Sydney", image: a1 },
    { name: "Melbourne", image: a2 },
    { name: "Gold Coast", image: a3 },
    { name: "Great Barrier Reef", image: a4 },
    { name: "Perth", image: a5 },
  ],
  Azerbaijan: [
    { name: "Baku", image: az1 },
    { name: "Gobustan", image: az2 },
    { name: "Sheki", image: az3 },
    { name: "Naftalan", image: az4 },
    { name: "Quba", image: az5 },
  ],
  Almaty: [
    { name: "Zenkov Cathedral", image: ay1 },
    { name: "Big Almaty Lake", image: ay2 },
    { name: "Kok Tobe Hill", image: ay3 },
    { name: "Shymbulak", image: ay4 },
    { name: "Medeu", image: ay5 },
  ],
  Bali: [
    { name: "Ubud", image: bali1 },
    { name: "Kuta Beach", image: bali2 },
    { name: "Tanah Lot", image: bali3 },
    { name: "Uluwatu Temple", image: bali4 },
    { name: "Tegallalang Rice Terrace", image: bali5 },
  ],
  Bhutan: [
    { name: "Paro", image: bhu1 },
    { name: "Thimphu", image: bhu2 },
    { name: "Punakha", image: bhu3 },
    { name: "Phobjikha Valley", image: bhu4 },
    { name: "Tiger's Nest", image: bhu5 },
  ],
  Dubai: [
    { name: "Burj Khalifa", image: du1 },
    { name: "Dubai Mall", image: du2 },
    { name: "Desert Safari", image: du3 },
    { name: "Palm Islands", image: du4 },
    { name: "Dubai Frame", image: du5 },
  ],
  Europe: [
    { name: "Paris", image: e1 },
    { name: "Rome", image: e2 },
    { name: "Amsterdam", image: e3 },
    { name: "Barcelona", image: e4 },
    { name: "Prague", image: e5 },
  ],
  Georgia: [
    { name: "Tbilisi", image: g1 },
    { name: "Batumi", image: g2 },
    { name: "Gudauri", image: g3 },
    { name: "Kazbegi", image: g4 },
    { name: "Mtskheta", image: g5 },
  ],
  Hongkong: [
    { name: "Victoria Peak", image: h1 },
    { name: "Hong Kong Disneyland", image: h2 },
    { name: "Tsim Sha Tsui", image: h3 },
    { name: "Big Buddha", image: h4 },
    { name: "Ladies Market", image: h5 },
  ],
  Japan: [
    { name: "Tokyo", image: j1 },
    { name: "Kyoto", image: j2 },
    { name: "Osaka", image: j3 },
    { name: "Mount Fuji", image: j4 },
    { name: "Hiroshima", image: j5 },
  ],
  Kambodia: [
    { name: "Angkor Wat", image: k1 },
    { name: "Phnom Penh", image: k2 },
    { name: "Siem Reap", image: k3 },
    { name: "Kampot", image: k4 },
    { name: "Sihanoukville", image: k5 },
  ],
  Malaysia: [
    { name: "Kuala Lumpur", image: m1 },
    { name: "Langkawi", image: m2 },
    { name: "Penang", image: m3 },
    { name: "Cameron Highlands", image: m4 },
    { name: "Malacca", image: m5 },
  ],
  Maldives: [
    { name: "Male", image: mal1 },
    { name: "Maafushi", image: mal2 },
    { name: "Hulhumale", image: mal3 },
    { name: "Vaadhoo Island", image: mal4 },
    { name: "Fulhadhoo", image: mal5 },
  ],
  Mauritius: [
    { name: "Port Louis", image: mau1 },
    { name: "Grand Baie", image: mau2 },
    { name: "Chamarel", image: mau3 },
    { name: "Le Morne", image: mau4 },
    { name: "Flic en Flac", image: mau5 },
  ],
  Nepal: [
    { name: "Kathmandu", image: ne1 },
    { name: "Pokhara", image: ne2 },
    { name: "Chitwan", image: ne3 },
    { name: "Lumbini", image: ne4 },
    { name: "Nagarkot", image: ne5 },
  ],
  Newzealand: [
    { name: "Auckland", image: nz1 },
    { name: "Queenstown", image: nz2 },
    { name: "Rotorua", image: nz3 },
    { name: "Christchurch", image: nz4 },
    { name: "Wellington", image: nz5 },
  ],
  Oman: [
    { name: "Muscat", image: o1 },
    { name: "Nizwa", image: o2 },
    { name: "Salalah", image: o3 },
    { name: "Wahiba Sands", image: o4 },
    { name: "Sur", image: o5 },
  ],
  Philipines: [
    { name: "Manila", image: p1 },
    { name: "Cebu", image: p2 },
    { name: "Boracay", image: p3 },
    { name: "Palawan", image: p4 },
    { name: "Bohol", image: p5 },
  ],
  Srilanka: [
    { name: "Colombo", image: sr1 },
    { name: "Kandy", image: sr2 },
    { name: "Galle", image: sr3 },
    { name: "Nuwara Eliya", image: sr4 },
    { name: "Sigiriya", image: sr5 },
  ],
    Singapore: [
    { name: "Marina Bay Sands", image: si1 },
    { name: "Gardens by the Bay", image: si2 },
    { name: "Sentosa Island", image: si3 },
    { name: "Universal Studios", image: si4 },
    { name: "Singapore Flyer", image: si5 },
  ],
  Tajikistan: [
    { name: "Dushanbe", image: ta1 },
    { name: "Iskanderkul Lake", image: ta2 },
    { name: "Pamir Mountains", image: ta3 },
    { name: "Fann Mountains", image: ta4 },
    { name: "Khorog", image: ta5 },
  ],
  Thailand: [
    { name: "Bangkok", image: th1 },
    { name: "Phuket", image: th2 },
    { name: "Chiang Mai", image: th3 },
    { name: "Pattaya", image: th4 },
    { name: "Krabi", image: th5 },
  ],
  Turkey: [
    { name: "Istanbul", image: tu1 },
    { name: "Cappadocia", image: tu2 },
    { name: "Pamukkale", image: tu3 },
    { name: "Antalya", image: tu4 },
    { name: "Ephesus", image: tu5 },
  ],
  Vietnam: [
    { name: "Hanoi", image: v1 },
    { name: "Halong Bay", image: v2 },
    { name: "Ho Chi Minh City", image: v3 },
    { name: "Hoi An", image: v4 },
    { name: "Sapa", image: v5 },
  ],
   "Guwahati -Shillong": [
    { name: "Kamakhya Temple", image: gs1 },
    { name: "Umiam Lake", image: gs2 },
    { name: "Elephant Falls", image: gs3 },
    { name: "Shillong Peak", image: gs4 },
    { name: "Cherrapunji", image: gs5 },
  ],
  "Arunachal Pradesh": [
    { name: "Tawang Monastery", image: anu1 },
    { name: "Ziro Valley", image: anu2 },
    { name: "Bomdila", image: anu3 },
    { name: "Dirang", image: anu4 },
    { name: "Sela Pass", image: anu5 },
  ],
  "Sikkim -Darjeeling": [
    { name: "Tsomgo Lake", image: sd1 },
    { name: "Nathula Pass", image: sd2 },
    { name: "Darjeeling Himalayan Railway", image: sd3 },
    { name: "Tiger Hill", image: sd4 },
    { name: "Batasia Loop", image: sd5 },
  ],
  Kolkata: [
    { name: "Victoria Memorial", image: wb1 },
    { name: "Howrah Bridge", image: wb2 },
    { name: "Dakshineswar Temple", image: wb3 },
    { name: "Eco Park", image: wb4 },
    { name: "Science City", image: wb5 },
  ],
  Odisha: [
    { name: "Puri Jagannath Temple", image: od1 },
    { name: "Konark Sun Temple", image: od2 },
    { name: "Chilika Lake", image: od3 },
    { name: "Simlipal National Park", image: od4 },
    { name: "Lingaraj Temple", image: od5 },
  ],
  "Madhya Pradesh": [
    { name: "Khajuraho Temples", image: mp1 },
    { name: "Kanha National Park", image: mp2 },
    { name: "Bhedaghat Marble Rocks", image: mp3 },
    { name: "Sanchi Stupa", image: mp4 },
    { name: "Ujjain Mahakaleshwar", image: mp5 },
  ],
  Visakhapatnam: [
    { name: "RK Beach", image: vi1 },
    { name: "Araku Valley", image: vi2 },
    { name: "Kailasagiri", image: vi3 },
    { name: "Submarine Museum", image: vi4 },
    { name: "Borra Caves", image: vi5 },
  ],
  Tamilnadu: [
    { name: "Meenakshi Temple", image: tn1 },
    { name: "Ooty", image: tn2 },
    { name: "Kodaikanal", image: tn3 },
    { name: "Rameswaram", image: tn4 },
    { name: "Mahabalipuram", image: tn5 },
  ],
  Kerala: [
    { name: "Alleppey Backwaters", image: ke1 },
    { name: "Munnar", image: ke2 },
    { name: "Kumarakom", image: ke3 },
    { name: "Thekkady", image: ke4 },
    { name: "Kovalam Beach", image: ke5 },
  ],
    Kashmir: [
    { name: "Srinagar", image: jk1 },
    { name: "Gulmarg", image: jk2 },
    { name: "Pahalgam", image: jk3 },
    { name: "Sonamarg", image: jk4 },
    { name: "Dal Lake", image: jk5 },
  ],
  "Hyderabad Telangana": [
    { name: "Charminar", image: ht1 },
    { name: "Golconda Fort", image: ht2 },
    { name: "Ramoji Film City", image: ht3 },
    { name: "Hussain Sagar", image: ht4 },
    { name: "Birla Mandir", image: ht5 },
  ],
  Maharashtra: [
    { name: "Mumbai", image: mh1 },
    { name: "Pune", image: mh2 },
    { name: "Lonavala", image: mh3 },
    { name: "Mahabaleshwar", image: mh4 },
    { name: "Ajanta & Ellora", image: mh5 },
  ],
  Uttarakhand: [
    { name: "Dehradun", image: uk1 },
    { name: "Mussoorie", image: uk2 },
    { name: "Nainital", image: uk3 },
    { name: "Rishikesh", image: uk4 },
    { name: "Haridwar", image: uk5 },
  ],
  Gujarat: [
    { name: "Ahmedabad", image: gj1 },
    { name: "Gir National Park", image: gj2 },
    { name: "Dwarka", image: gj3 },
    { name: "Somnath", image: gj4 },
    { name: "Statue of Unity", image: gj5 },
  ],
  Rajasthan: [
    { name: "Jaipur", image: rj1 },
    { name: "Udaipur", image: rj2 },
    { name: "Jaisalmer", image: rj3 },
    { name: "Jodhpur", image: rj4 },
    { name: "Pushkar", image: rj5 },
  ],
  Himachal: [
    { name: "Shimla", image: him1 },
    { name: "Manali", image: him2 },
    { name: "Dharamshala", image: him3 },
    { name: "Kullu", image: him4 },
    { name: "Spiti Valley", image: him5 },
  ],
  Uttarpradesh: [
    { name: "Varanasi", image: up1 },
    { name: "Agra", image: up2 },
    { name: "Lucknow", image: up3 },
    { name: "Mathura", image: up4 },
    { name: "Prayagraj", image: up5 },
  ],
  // GoldenTriangle: [
  //   { name: "Delhi", image: "/assets/golden1.jpg" },
  //   { name: "Agra", image: "/assets/golden2.jpg" },
  //   { name: "Jaipur", image: "/assets/golden3.jpg" },
  //   { name: "Fatehpur Sikri", image: "/assets/golden4.jpg" },
  //   { name: "Amber Fort", image: "/assets/golden5.jpg" },
  // ],
  "Leh-Ladakh": [
    { name: "Leh", image: ll1 },
    { name: "Nubra Valley", image: ll2 },
    { name: "Pangong Lake", image: ll3 },
    { name: "Magnetic Hill", image: ll4 },
    { name: "Tso Moriri", image: ll5 },
  ],
};

const DestinationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const rawTitle = location.state?.title;
  const title = rawTitle || "";

  const destinations = destinationDetails[title];

  if (!destinations) {
    return (
      <div className="text-red-500 text-center mt-10">
        Destination not found
      </div>
    );
  }

  return (
    <>
    <ScrollToTop />
   <div className="p-8 min-h-screen bg-gray-900 text-gray-100">
  <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 tracking-wide">
    {title} Tour Packages
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {destinations.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold tracking-wider">
              {item.name}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3 text-white">{item.name}</h2>
          <button
            onClick={() =>
              navigate("/booking", {
                state: {
                  country: title,
                  place: item.name,
                  image: item.image,
                },
              })
            }
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Now
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>
</>
  );
};

export default DestinationDetails;