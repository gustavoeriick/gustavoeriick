new Rolldate({
    el: '#example',
    format: 'DD-MM-YYYY'
})

new Rolldate({
    el: '#example',
    minStep: 1
})

new Rolldate({
    el: '#example',
    beginYear: 2000,
    endYear: 2100
})

new Rolldate({
    el: '#example',
    trigger: 'tap'
})

new Rolldate({
    el: '#example',
    lang: { 
      title: 'Select A Date', 
      cancel: 'Cancel', 
      confirm: 'Confirm', 
      year: '', 
      month: '', 
      day: '', 
      hour: '', 
      min: '', 
      sec: '' 
    }
})

new Rolldate({
    el: '#example',
    init: function() {
      console.log('On init');
    },
    moveEnd: function(scroll) {
      console.log(scroll)
      console.log('scroll end');
    },
    confirm: function(date) {
      console.log(date)
      console.log('confirm');
    },
    cancel: function() {
      console.log('cancel');
    }
})

new Rolldate({
    el: '#example',
    value: '2017-10-21 23:52:50'
})