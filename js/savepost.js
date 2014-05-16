$(document).bind('deviceready', function(){
    $(function(){
        $('form').submit(function(){
            var landmarkID = $(this).parent().attr('data-landmark-id');
            var postData = $(this).serialize();
            
            $.ajax({
                type: 'POST',
                data: postData+'&lid='+landmarkID,
                //change the url for your project
				//prod http://store.ojpeters.com/savecomment
                url: 'http://store.ojpeters.com/savecomment',
                success: function(data){
                    console.log(data);
					
                    alert('Your comment was successfully added'+data);
                },
                error: function(){
                    console.log(data);
                    alert('There was an error adding your comment');
                }
            });
            
            return false;
        });
    });
});