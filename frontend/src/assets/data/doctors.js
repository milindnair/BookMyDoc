import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export const doctors = [
  {
    id: "01",
    name: "Dr. Bhupendra Jogi",
    specialization: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, US.",
    route:"http://localhost:5173/doctors/123"
  },
  {
    id: "02",
    name: "Dr. Zaidali Merchant",
    specialization: "Neurologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg02,
    totalPatients: 1000,
    hospital: "Mount Alpha Hospital, kurla.",
    route:"http://localhost:5173/doctors/234"

  },
  {
    id: "03",
    name: "Dr. Rylan lewis ",
    specialization: "Dermatologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03,
    totalPatients: 700,
    hospital: "Mount Beta Hospital, bandStand.",
    route:"http://localhost:5173/doctors/345"

  },
  {
    id: "04",
    name: "Dr. Neil Carnac",
    specialization: "Nuerosurgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01,
    totalPatients: 2000,
    hospital: "Hill Adora Hospital, dadar Parsi Colony  .",
    route:"http://localhost:5173/doctors/345"

  },
];