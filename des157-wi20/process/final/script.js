'use strict';

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(eachLink) {
  eachLink.addEventListener("click", smoothScroll);
  });

function smoothScroll(event) {
  event.preventDefault();

  const targetID = event.target.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);

  const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 50;
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
};

window.addEventListener("load", function() {
  const posts = document.querySelectorAll('section');
  const postTops = [];
  let lastPost = posts.length -1;
  let pagetop;
  let counter = 0;
  let prevCounter = 0;

  posts.forEach(function(post) {
    postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
  });

  window.addEventListener('scroll', function() {
    pagetop = window.pageYOffset +250;

    if (pagetop > postTops[counter+1]) {
      counter++;
    }
    else if (counter > 0 && pagetop < postTops[counter]) {
      counter--;
      lastPost = posts.length - 1;
    }
    else if (pagetop > postTops[lastPost]) {
      counter = lastPost;
      lastPost++;
    }

    if (counter != prevCounter) {
      navLinks.forEach(function(eachLink) {
        eachLink.removeAttribute('class');
      });
      var thisLink = document.querySelector(`nav ul li:nth-child(${counter + 1}) a`);
      thisLink.className = 'selected';
      prevCounter = counter;
    }

    let resizeId;
    window.addEventListener('resize', function() {
      clearTimeout(resizeId);
      resizeId = setTimeout( function() {
        window.onbeforeunload = function() {
          window.scrollTo(0,0);
        };
        window.location.reload(true);
      }, 500);
    });
  });
});




//DROPDOWN MENUS

let dropdownL = document.getElementById('location-dropdown');
dropdownL.length = 0;

//Default options
let defaultLocation = document.createElement('option');
defaultLocation.text = 'Choose Location';

//initialize selected option
dropdownL.add(defaultLocation);
dropdownL.selectedIndex = 0;

const resourceContainer = document.getElementById('resource');


const url = 'https://raw.githubusercontent.com/nddesh/nddesh.github.com/master/dropdown.json';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    //get JSON data
    const data = JSON.parse(request.responseText);

    let location;
    for (let i = 0; i < data.length; i++) {
      location = document.createElement('option');
      location.text = data[i].location;
      dropdownL.add(location);
    }
  }

  else {
  // Reached the server, but it returned an error
  }
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

const button = document.getElementById("myform");
button.addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    document.getElementById("submit").value = `See Resources!`;
    resource1 = dropdownL.selectedIndex;
    console.log(resource1);
    GetSelectedValue();
});

function GetSelectedValue() {
  const resourceURL = [
    "UC Davis LGBTQIA Resource Center : https://lgbtqia.ucdavis.edu/",
    "Berkshire Stonewall Community Coalition : http://berkshirestonewall.org/",
    "The Gender Center Inc : https://gendercentre.org.au/" ,
    "ABGLT : https://www.abglt.org/",
  "Bejing LGBT Center : https://www.thebeijinger.com/directory/beijing-lgbt-center",
"Samapathik : http://samapathik.org/",
"Magnus Hirschfeld Center : https://www.mhc-hh.de/",
"The 519 : https://www.the519.org/",
"OUT : https://www.out.org.za/",
"Solidarity for LGBT Human Rights of Korea : http://lgbtpride.or.kr/",
"Russian LGBT Network : https://lgbtnet.org/en",
"Movilh : https://www.movilh.cl/"
];

  const l = document.getElementById("location-dropdown");
  i = l.selectedIndex;
  const resultL = l.options[i].value;

  if (resultL == "Choose Location") {
    window.alert("Choose a location!");
  }
  else {
    resourceContainer.setAttribute("class", "visible");

    if (i == 0) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 1) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 2) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 3) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 4) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 5) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 6) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 7) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 8) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 9) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 10) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else if (i == 11) {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
    else {
      document.getElementById("resource").innerHTML = `<h3>Resources in ${resultL}</h3>
      <p>${resourceURL[i-1]}</p>`;
    }
  }
}



//Map
var format = d3.format(",");

// Set tooltips
var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
              return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Gender Pronouns: </strong><span class='details'>" + d.properties.pronouns +"</span>";
            })

var margin = {top: 0, right: 0, bottom: 0, left: 0},
            width = 1400 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

var color = d3.scaleThreshold()
    .domain([10000,100000,500000,1000000,5000000,10000000,50000000,100000000,500000000,1500000000])
    .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

var path = d3.geoPath();

var svg = d3.select("#first")
            .append("svg")
            .attr("width", 1400)
            .attr("height", 500)
            .append('g')
            .attr('class', 'map');

var projection = d3.geoMercator()
                   .scale(130)
                  .translate( [width / 2, height / 1.5]);

var path = d3.geoPath().projection(projection);

svg.call(tip);

queue()
    .defer(d3.json, "https://raw.githubusercontent.com/nddesh/nddesh.github.com/master/world_countries.json")
    .defer(d3.tsv, "https://raw.githubusercontent.com/nddesh/nddesh.github.com/master/world_population.tsv")
    .await(ready);

function ready(error, data, population) {
  var populationById = {};

  population.forEach(function(d) { populationById[d.id] = +d.population; });
  data.features.forEach(function(d) { d.population = populationById[d.id] });

  svg.append("g")
      .attr("class", "countries")
    .selectAll("path")
      .data(data.features)
    .enter().append("path")
      .attr("d", path)
      .style("fill", "#083C70")
      .style('stroke', 'white')
      .style('stroke-width', 1.5)
      .style("opacity", 1)
      // tooltips
        .style("stroke","white")
        .style('stroke-width', 0.3)
        .on('mouseover',function(d){
          tip.show(d);

          d3.select(this)
            .style("fill", "#FFC700")
            .style("opacity", 0.8)
            .style("stroke","white")
            .style("stroke-width",2);
        })
        .on('mouseout', function(d){
          tip.hide(d);

          d3.select(this)
            .style("fill", "#083C70")
            .style("opacity", 1)
            .style("stroke","white")
            .style("stroke-width",0.3);
        });

  svg.append("path")
      .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
       .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
      .attr("class", "names")
      .attr("d", path);
}
