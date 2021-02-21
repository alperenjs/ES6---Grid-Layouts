// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  // What you need
  [20, 24, 56, 88]


  var officersID = officers.map((officer) =>{
     return officer.id
  })
  ////////////////////////////////////

  var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 31,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  const totalYears = pilots.reduce((total, pilot) => total + pilot.years, 0)
  
  var mostExpPilot = pilots.reduce((oldest, pilot) => {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
  }, {});


  const actoname = pilots.filter(pilot => pilot.name === "Poe Dameron");




  //////////


  const dogs = [
    {name : 'Snickers', age:2},
    {name : 'Jom', age:12},
    {name : 'mmmor', age:21}
  ]

  const markup = `
  <ul class="dogs">
  ${dogs.map(dog => `
  <li>
  ${dog.name}
  is
  ${dog.age * 7}
  </li>
  `).join('')}
  `





  