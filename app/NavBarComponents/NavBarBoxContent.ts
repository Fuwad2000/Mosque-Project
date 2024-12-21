export const BoxContent = [
  {
    title: "Home",
    link: "/",
  },
  { title: "About", link: "/about" },

  {
    title: "Prayer Time Table",
    link: "/prayer/timetable",
    DropDownContent: [
      "Weekly Iqama Schedule",
      "Iqama Timings: First Half of the Year",
      "Iqama Timings: Second Half of the Year",
    ],
  },

  {
    title: "Events",
    link: "/events",
    DropDownContent: [
      "Basketball Program for Youth",
      "BBQ Family Event",
      "Special Days Of The Year",
    ],
    Link: ["/events/basketball", "/events/bbqevent", "/events/specialdays"],
  },
  {
    title: "Service",
    link: "/services",
  },
  { title: "Donate", link: "/donate" },
  { title: "Contact", link: "/contact" },
];
