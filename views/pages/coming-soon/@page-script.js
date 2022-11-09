jQuery(function($) {

    // simple countdown timer on coming soon page
    var remainingTime = 0
    var secondsPerDay = 24 * 3600
    var secondsPerHour = 3600
    var secondsPerMinute = 60
    
    $('.timer')
    .each(function() {
        var type = $(this).attr('data-type')
        var value = 0
        
        switch(type) {
            case 'day':
                value = parseInt(Math.random() * 20 + 5)
                remainingTime += (value * secondsPerDay)
            break;
            
            case 'hour':
                value = parseInt(Math.random() * 22 + 1)
                remainingTime += (value * secondsPerHour)
            break;
            
            case 'minute':
                value = parseInt(Math.random() * 58 + 1)
                remainingTime += (value * secondsPerMinute)
            break;
            
            case 'second':
                value = parseInt(Math.random() * 58 + 1)                
                remainingTime += value
                if(value < 10) value = '0' + value
            break;
        }
        
        $(this).text(value)
    })


    var interval = setInterval(function() {
        remainingTime -= 1
        if(remainingTime < 1) {
            clearInterval(interval)
            return;
        }

        var days = parseInt(remainingTime / secondsPerDay)
        var hours = parseInt((remainingTime - (days * secondsPerDay)) / secondsPerHour)
        var minutes = parseInt((remainingTime - (days * secondsPerDay) - (hours * secondsPerHour)) / secondsPerMinute)
        var seconds = remainingTime % 60

        if(seconds < 10) seconds = '0' + seconds
        $('.timer[data-type=second]').text(seconds)
        if(seconds == 59) {
            $('.timer[data-type=minute]').text(minutes)
            $('.timer[data-type=hour]').text(hours)
            $('.timer[data-type=day]').text(days)
        }

    }, 1000)

})
