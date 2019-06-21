$(function){
    $.ajax({
        ur:'https://www.googleapis.com/youtube/v3/channels',
        method:'get', 
        dataType: 'jason',
        data:{
            part:'snippet',
            key: 'AIzaSyCuEmebLle4_3QU0WT45Pkvs0XvRMRAD9A',
            id:'O'
        }
    })
}