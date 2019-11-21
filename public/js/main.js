(() => {
    //try to get the object and do stuff with it
    let seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

        //
        debugger;

    // set up some waypoints and make things happen

    const waypoint1 = new Waypoint({
        element: document.getElementById('beer1'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          //this.element.innerHTML += "<p>I got added with Waypoint!</p>"
          
          // drill down into the SVG from the HTML doc / JavaScript file and change things
          // this way => instead of from inside the SVG, we can change them top-level
          // Options are good
          //let svg = this.element.firstElementChild.contentDocument;
          // the yellow class lives in the main css file (same as all the other rules)
          //svg.querySelector("#beerText").classList.add('yellow');
        }
    });

    const waypoint2 = new Waypoint({
        element: document.getElementById('beer2'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          //this.element.innerHTML += "<p>I got added with Waypoint!</p>"
        },

        offset: 300

    });

    //const theSVGwrapper = document.querySelector('.svg-wrapper');

    //function showSVG(event) {
        // debugger;
    //}

    const waypoint3 = new Waypoint({
      element: document.getElementById('beer3'),
      handler: function(direction) {
        console.log('Scrolled to waypoint!')
        //this.element.innerHTML += "<p>I got added with Waypoint!</p>"
      },

      offset: 300

  });


    function showPopover(beerdata, el){
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `IPA Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    // do our fetch call to the database
    function fetchData(){
      let url = `/info/${this.dataset.target}`,
          targetElement = this;

      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        showPopover(data, targetElement);
      })
      .catch(function(error){
          console.log(error);
      })
      
    }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();