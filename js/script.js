$( document ).ready(function() {

// Call date picker function for date selectors ===========================================
  $('.datepicker').pickadate({

  })

  $('#viewOnSearch').hide(); // hides search result panel

  


// When Search button clicked ==============================================================
  $(document).on('click', '#searchBtn', function () {
    $("#hideOnSearch").addClass("hideOnSearch"); // Hides carousel by applying class
    $('#viewOnSearch').show(); // Reveals search result panel

    $("div.newListing").remove();

      var hotelNames =["Extended Stay America", "La Quinta", "Hampton Inn", "Hilton Garden Inn", "Holiday Inn", "Comfort Inn", "EconoLodge", "Motel 6", "Bates Motel", "Ramada", "Days Inn", "Super 8"];
      var randName = hotelNames[Math.floor(Math.random() * hotelNames.length)];

      var hotelCities = ["New York", "Tulsa", "Sarasota", "Camden", "Sacramento", "Orlando", "Minneapolis", "Little Rock", "Austin", "Seattle", "New Orleans", "Chicago", "Charlotte"]; 
      var randCity = hotelCities[Math.floor(Math.random() * hotelCities.length)];

    $('<div>', { 
          class: 'newListing panel-body'
      }).append( $('<div>', { 
          class: 'listName'
      })).append( $('<div>', { 
          class: 'listCity'
      })).appendTo('#viewOnSearch');
      $(".listCity").html(randCity);
      $(".listName").html(randName);


  }); // End Search button click ============


// End jQuery =============================================================================
});