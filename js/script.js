$( document ).ready(function() {

// Call date picker function for date selectors ===========================================
  $('.datepicker').pickadate({

  })

  $('#viewOnSearch').hide(); // hides search result panel

// When Search button clicked ==============================================================
  $(document).on('click', '#searchBtn', function () {
    $("#hideOnSearch").addClass("hideOnSearch"); // Hides carousel by applying class
    $('#viewOnSearch').show(); // Reveals search result panel
  });


// End jQuery =============================================================================
});