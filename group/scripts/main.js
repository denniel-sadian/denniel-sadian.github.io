var team = [
  {
    name: "Mark Jastine Siena",
    title: "Software Developer",
    image: "images/team/siena.jpg",
    details:
      "I'm Jastine Siena, highly organized and introvert person. Friendly was one of the best characteristics that describes me. Solving computer problems was my passion and willing to learn to grow myself for a better version.",
  },
  {
    name: "Anna Marie Tenorio",
    title: "Software Developer",
    image: null,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias nulla totam eum distinctio, autem veniam ab non esse et maiores voluptates quam error quis, aperiam, at itaque consequatur sit?",
  },
  {
    name: "Denniel Luis Sadian",
    title: "Software Developer",
    image: "images/team/sadian.png",
    details:
      'Currently working on his bachelor\'s degree — and loves Lady Gaga a lot. Believes in the saying, <em>"people who envy other people are psychologically challenged."</em>',
  },
  {
    name: "Earl Jerald Cuba",
    title: "Software Developer",
    image: "images/team/cuba.jpg",
    details:
      "Hi! My name is Earl Jerald Cuba, from Caganhao, Boac, Marinduque. Contact me at: earljeralcuba@gmail.com",
  },
  {
    name: "Jet Francis Podaca",
    title: "Software Developer",
    image: "images/team/podaca.jpg",
    details:
      "I am the susceptible one who was born in Marinduque before the Month of the dead and was raised loving the music, the color, the mood, and the taste of a lone wolf.",
  },
  {
    name: "Jose Angelo Labrador",
    title: "Software Developer",
    image: null,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias nulla totam eum distinctio, autem veniam ab non esse et maiores voluptates quam error quis, aperiam, at itaque consequatur sit?",
  },
  {
    name: "Angelica Mae Escala",
    title: "Software Developer",
    image: null,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias nulla totam eum distinctio, autem veniam ab non esse et maiores voluptates quam error quis, aperiam, at itaque consequatur sit?",
  },
];

var members = [
  {
    name: "Lalisa Manobal",
    title: "THAI RAPPER, SINGER AND DANCER BASED IN SOUTH KOREA",
    details:
      "Lalisa Manobal, known mononymously as Lisa, is a Thai rapper, singer and dancer based in South Korea. She is a member of the South Korean girl group Blackpink formed by YG Entertainment. Lisa made her solo debut with her single album Lalisa in September 2021.",
    image: "images/members/lisa.jpg",
  },
  {
    name: "Jennie Kim",
    title:
      "A recognized Korean pop star who only seems to burn brighter with time",
    details:
      "Jennie Kim, known mononymously as Jennie, is a South Korean singer and rapper. Born and raised in South Korea, Jennie studied in New Zealand for five years before returning to South Korea in 2010. She debuted as a member of the girl group Blackpink, formed by YG Entertainment, in August 2016.",
    image: "images/members/jen.jpg",
  },
  {
    name: "Jisoo",
    title: "known for her quirky and unpredictable personality",
    details:
      "Kim Ji-soo, known mononymously as Jisoo, is a South Korean singer and actress. She is best known as a member of the best-selling K-pop girl group Blackpink, formed by YG Entertainment, in August 2016.",
    image: "images/members/jiso.jpg",
  },
  {
    name: "Rosé",
    title: "an Australian singer, based in South Korea",
    details:
      "Roseanne Chae-young Park (born February 11, 1997 in Auckland, New Zealand) better known as Rosé, is an Australian singer, based in South Korea. She is a member of Blackpink. Born as Roseanne Park in Auckland, New Zealand, she was given the Korean name of Park Chae-young and grew up in Melbourne, Australia.",
    image: "images/members/rose.jpg",
  },
];

var pics = [
  "images/members/them1.jpg",
  "images/members/them2.png",
  "images/members/them3.jpg",
  "images/members/jen1.jpg",
  "images/members/lisa1.jpg",
  "images/members/lisa2.jpg",
  "images/members/lisa3.jpg",
  "images/membg.jpg",
  "images/footbg.webp",
];
var picId = pics.length - 1;

for (var i = 0; members.length > i; i++) {
  pics.push(members[i].image);
}

function changePic() {
  var biggerPicsDiv = $("#bigger-id");
  var lastIndex = pics.length - 1;
  if (lastIndex == picId) picId = 0;
  else picId++;
  biggerPicsDiv.css("background-image", `url("${pics[picId]}")`);
}

function buildMembers() {
  var membersSection = $("#second");
  var html = "";
  for (var i = 0; members.length > i; i++) {
    var member = members[i];
    var item = `
      <div class="item">
        <div class="mem-pic" style="background-image: url(${member.image})"></div>
        <div class="details">
          <span class="title">${member.title}</span>
          <span class="name">${member.name}</span>
          <span class="content">${member.details}</span>
        </div>
      </div>`;
    html += item;
  }
  membersSection.html(html);
}

function buildTeam() {
  var teamList = $("#team-list");
  var html = "";
  for (var i = 0; team.length > i; i++) {
    var student = team[i];
    var img = student.image == null ? "images/team/anon.png" : student.image;
    var item = `
      <div class="student">
        <div class="img-cont">
          <div class="image"style="background-image: url(${img})"></div>
        </div>
        <span class="name">${student.name}</span>
        <span class="title">${student.title}</span>
        <span class="details">${student.details}</span>
      </div>`;
    html += item;
  }
  teamList.html(html);
}
